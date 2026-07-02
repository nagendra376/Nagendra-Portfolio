import { site } from "@/config/site";
import { Reveal, SectionHeader } from "./reveal";

const getIconSlug = (skill: string) => {
  const map: Record<string, string> = {
    TypeScript: "ts",
    JavaScript: "js",
    React: "react",
    "Next.js": "nextjs",
    "Node.js": "nodejs",
    "Express.js": "express",
    "Tailwind CSS": "tailwind",
    PostgreSQL: "postgres",
    MongoDB: "mongodb",
    Prisma: "prisma",
    Supabase: "supabase",
    Firebase: "firebase",
    Git: "git",
    GitHub: "github",
    Postman: "postman",
    Vercel: "vercel",
    Figma: "figma",
    "C++": "cpp",
    Python: "python",
    "REST APIs": "fastapi",
    "Shadcn UI": "shadcnui",
  };
  return map[skill];
};
