import { useEffect, useMemo, useState } from "react";

interface HeatmapData {
  cells: (number | null)[];
  total: number;
  live: boolean;
}

/** Deterministic pseudo-random fallback so the section never looks broken. */
function buildFallbackHeatmap(seedText: string): HeatmapData {
  let seed = 5381;
  for (let i = 0; i < seedText.length; i++) {
    seed = (seed * 33) ^ seedText.charCodeAt(i);
  }
  const cells: (number | null)[] = [];
  let s = seed >>> 0;
  for (let i = 0; i < 53 * 7; i++) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const v = s % 100;
    cells.push(v < 34 ? 0 : v < 60 ? 1 : v < 80 ? 2 : v < 93 ? 3 : 4);
  }
  return { cells, total: cells.reduce((a: number, b) => a + (b || 0) * 2, 0), live: false };
}

/** Live GitHub contributions for the last year (supports single user or combined users). */
export function useGithubHeatmap(userOrUsers: string | readonly string[] | string[]): HeatmapData {
  const usersKey = Array.isArray(userOrUsers) ? userOrUsers.join(",") : userOrUsers;
  const users: string[] = useMemo(() => {
    if (Array.isArray(userOrUsers)) {
      return [...userOrUsers];
    }
    return [userOrUsers as string];
  }, [usersKey]);

  const fallback = useMemo(() => buildFallbackHeatmap(users.join("-")), [users]);
  const [heatmap, setHeatmap] = useState<HeatmapData>(fallback);

  useEffect(() => {
    let cancelled = false;

    const fetchUser = async (u: string) => {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${u}?y=last`);
        if (!res.ok) return null;
        return await res.json();
      } catch {
        return null;
      }
    };

    Promise.all(users.map(fetchUser)).then((results) => {
      if (cancelled) return;
      const validResults = results.filter(Boolean);
      if (validResults.length === 0) return;

      // Merge contributions across all accounts by date
      const dateMap = new Map<string, { count: number; date: string }>();

      for (const res of validResults) {
        for (const c of res?.contributions || []) {
          const existing = dateMap.get(c.date) || { count: 0, date: c.date };
          existing.count += c.count;
          dateMap.set(c.date, existing);
        }
      }

      const mergedContribs = Array.from(dateMap.values()).sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );

      if (mergedContribs.length === 0) return;

      const firstDow = new Date(mergedContribs[0].date).getDay();
      const cells: (number | null)[] = Array(firstDow)
        .fill(null)
        .concat(
          mergedContribs.map((c) => {
            const count = c.count;
            if (count === 0) return 0;
            if (count <= 2) return 1;
            if (count <= 5) return 2;
            if (count <= 9) return 3;
            return 4;
          })
        );

      const total = mergedContribs.reduce((sum, c) => sum + c.count, 0);

      setHeatmap({ cells, total, live: true });
    });

    return () => {
      cancelled = true;
    };
  }, [users]);

  return heatmap;
}
