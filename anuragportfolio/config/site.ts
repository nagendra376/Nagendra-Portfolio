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

export const site = {
  /* ---------------------------------------------------------------- */
  /*  IDENTITY                                                         */
  /* ---------------------------------------------------------------- */
  name: "Anurag Jha",
  profileImages: [
    "/profile.jpg",
    "/profile2.png",
  ],
  initials: "AJ",
  role: "Full Stack Developer",
  location: "Delhi, India",
  timezone: "Asia/Kolkata",
  email: "conveytoanurag@gmail.com",
  greeting: "Hey, I'm Anurag",
  tagline: "I build clean, modern websites and web apps where design, functionality, and even the smallest details matter.",
  about: [
    "Hey, I'm Anurag, a full stack developer who loves building clean, modern websites and apps where design, functionality, and even the smallest details matter, with a focus on making products that are both practical and visually satisfying.",
    "I spend most of my time in the terminal, the browser, or scribbling on a whiteboard. I lean backend,not because I don't like frontend, but because I enjoy making polished things actually hold up.",
    "I don't ship junk. Maintainability isn't optional. And I build best when I'm curious.",
  ],
  tldr: [
    "Building products.",
    "Learning technologies.",
    "Shipping consistently.",
    "Obsessed with clean code.",
  ],

  /* ---------------------------------------------------------------- */
  /*  STATUS — the little "now" widget                                */
  /* ---------------------------------------------------------------- */
  status: {
    available: true,
    availableText: "open to opportunities",
    nowLearning: "Backend Engineering • System Design • DSA • DevOps",
    nowBuilding: "DoodleDash",
    nowListening: "focus playlists",
  },

  /* ---------------------------------------------------------------- */
  /*  SOCIAL LINKS  (leave a field empty "" to hide it)               */
  /* ---------------------------------------------------------------- */
  socials: {
    github: "https://github.com/nodeanurag",
    twitter: "https://x.com/anuragdotdev",
    linkedin: "https://linkedin.com/in/nodeanurag",
    email: "mailto:conveytoanurag@gmail.com",
    resume: "",
    discord: "https://discord.gg/ra4kyKdTk",
    medium: "https://medium.com/@anuragdotdev",
  },

  /* ---------------------------------------------------------------- */
  /*  EXPERIENCE                                                       */
  /* ---------------------------------------------------------------- */
  experience: [
    {
      company: "Independent Developer",
      role: "Frontend Developer",
      period: "2025 — Present",
      blurb:
        "Built and deployed multiple SPAs & web applications. Engaged in competitive coding events like the Smart India Hackathon and HT codeathon.",
      url: "",
    },
  ] as Job[],

  /* ---------------------------------------------------------------- */
  /*  PROJECTS                                                         */
  /* ---------------------------------------------------------------- */
  projects: [
    {
      title: "FrameLabs",
      blurb:
        "A creative tool that turns static card generation into a reactive, real-time design experience. Users can switch between retro palettes and layouts on the fly, with zero jank—because every state transition is memoized and component-driven.",
      story:
        "The frontend is built with React's compositional model, styled atomically with Tailwind CSS, and powered by Zustand for predictable, lean state management. Icons from lucide-react keep the UI crisp and accessible. The result: a minimal surface area with a maximal creative ceiling.\n\n*Designed for speed \u2022 Engineered for feel.*",
      stack: ["React.js", "Tailwind CSS", "Zustand", "lucide-react"],
      year: "2026",
      links: {
        live: "https://framelabs.vercel.app/",
        source: "https://github.com/nodeanurag/FrameLabs",
      },
      featured: true,
    },
  ] as Project[],
