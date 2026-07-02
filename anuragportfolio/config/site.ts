/* ==========================================================================
 *  YOUR PORTFOLIO — SINGLE SOURCE OF TRUTH
 * ==========================================================================
 *  Everything visible on the site is driven by this one file.
 *  Edit the values below and the whole site updates. Look for  // TODO  marks.
 *  Nothing else in the codebase needs to be touched for normal content edits.
 * ========================================================================== */

export type Project = {
  title: string;
  /** the story / the "why" behind it — 1–2 sentences, this is what makes it human */
  blurb: string;
  /** the problem it solved or the thing you learned */
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  /** mark your favourite — gets a highlighted card */
  featured?: boolean;
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  url?: string;
};

export type Post = {
  title: string;
  summary: string;
  date: string; // e.g. "Mar 2026"
  url: string;
  readingTime?: string;
};
