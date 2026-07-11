"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site, type Project } from "@/config/site";
import { Reveal, SectionHeader } from "./reveal";
import Link from "next/link";
import { ArrowUpRight, GitHubIcon } from "./icons";

const getTechIcon = (tech: string) => {
  const map: Record<string, string> = {
    "React.js": "https://img.icons8.com/color/48/react-native.png",
    "React": "https://img.icons8.com/color/48/react-native.png",
    "Tailwind CSS": "https://img.icons8.com/color/48/tailwindcss.png",
    "Tailwind CSS v4": "https://img.icons8.com/color/48/tailwindcss.png",
    "Zustand": "https://img.icons8.com/color/48/settings.png",
    "lucide-react": "https://img.icons8.com/color/48/sparkles.png",
    "Node.js": "https://img.icons8.com/color/48/nodejs.png",
    "Socket.IO": "https://img.icons8.com/color/48/socket.io.png",
    "TypeScript": "https://img.icons8.com/color/48/typescript.png",
    "Next.js": "https://img.icons8.com/color/48/nextjs.png",
    "Prisma": "https://img.icons8.com/color/48/prisma.png",
    "PostgreSQL": "https://img.icons8.com/color/48/postgresql.png",
    "React Query": "https://img.icons8.com/color/48/data-configuration.png",
    "@dnd-kit": "https://img.icons8.com/color/48/drag-and-drop.png",
    "Next-Auth": "https://img.icons8.com/color/48/shield.png",
    "Vite": "https://img.icons8.com/color/48/vite.png",
    "Monaco Editor": "https://img.icons8.com/color/48/code.png",
    "Pyodide": "https://img.icons8.com/color/48/python.png",
    "Dexie.js": "https://img.icons8.com/color/48/database.png",
    "Supabase": "https://img.icons8.com/color/48/supabase.png",
    "Zod": "https://img.icons8.com/color/48/verified-badge.png",
    "Vitest": "https://img.icons8.com/color/48/test-tube.png"
  };
  return map[tech] || `https://img.icons8.com/color/48/code.png`;
};

export function ProjectCard({ p, i }: { p: Project; i: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Reveal delay={i * 0.05}>
      <article
        id={`project-card-${p.title.toLowerCase()}`}
        className="group relative flex flex-col justify-between h-full overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl hover:shadow-accent/5 hover:border-accent/40 backdrop-blur-sm bg-surface/30"
      >
        <div>
          {p.image && (
            <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl border bg-fg/[0.03]">
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {p.featured && (
                <span className="absolute right-3 top-3 z-10 rounded-full bg-accent/15 backdrop-blur-md px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-accent border border-accent/20">
                  featured
                </span>
              )}
            </div>
          )}

          <div className="flex items-baseline justify-between gap-3 flex-wrap">
            <div className="flex items-baseline gap-2 flex-wrap">
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              {p.status && (
                <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {p.status}
                </span>
              )}
            </div>
            <span className="font-mono text-xs text-faint">{p.year}</span>
          </div>

          <p className="mt-2 text-sm text-muted leading-relaxed">{p.blurb}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-md border bg-bg/40 px-2 py-0.5 font-mono text-[10px] text-muted hover:border-accent/30 hover:text-fg transition-colors"
              >
                <img
                  src={getTechIcon(tech)}
                  alt={`${tech} icon`}
                  className="w-3.5 h-3.5 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://img.icons8.com/color/48/code.png";
                  }}
                />
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm">
              {p.links.live && (
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-fg transition-colors hover:text-accent"
                >
                  live <ArrowUpRight />
                </a>
              )}
              {p.links.source && (
                <a
                  href={p.links.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
                >
                  <GitHubIcon className="h-4 w-4" /> source
                </a>
              )}
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1.5 text-xs font-mono font-medium text-muted hover:text-accent transition-colors cursor-pointer"
            >
              {isExpanded ? "Hide details" : "Show details"}
              <svg
                className={`h-3 w-3 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                {p.story && (
                  <div className="mt-3 border-t border-border/50 pt-3">
                    <div className="text-xs leading-relaxed text-faint space-y-1.5">
                      {p.story.split("\n\n").map((para, idx) => {
                        const isItalic = para.startsWith("*") && para.endsWith("*");
                        const content = isItalic ? para.slice(1, -1) : para;
                        return (
                          <p key={idx} className={isItalic ? "italic text-muted/80" : ""}>
                            {content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  if (!site.projects.length) return null;

  return (
    <section className="mx-auto w-full max-w-content px-6 py-16">
      <SectionHeader id="projects" index="03" title="things I've built" />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {site.projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm font-medium hover:bg-surface hover:text-accent transition-all duration-300 hover:scale-[1.03]"
        >
          view full project archive →
        </Link>
      </div>
    </section>
  );
}