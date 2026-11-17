import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";
import { Icon } from "@iconify/react";

const CATEGORY_ICONS: Record<string, string> = {
  All: "lucide:layers",
  Languages: "lucide:code-2",
  Frontend: "lucide:layout",
  Backend: "lucide:server",
  Databases: "lucide:database",
  "Cloud & DevOps": "lucide:cloud",
  "AI & LLM": "lucide:sparkles",
  "Tools & Concepts": "lucide:terminal",
};

const SKILL_ICONS: Record<string, string> = {
  "JavaScript (ES6+)": "logos:javascript",
  JavaScript: "logos:javascript",
  TypeScript: "logos:typescript-icon",
  HTML5: "logos:html-5",
  CSS3: "logos:css-3",
  SQL: "carbon:sql",
  "React.js": "logos:react",
  React: "logos:react",
  "Next.js": "logos:nextjs-icon",
  "Angular.js": "logos:angular-icon",
  "Redux Toolkit": "logos:redux",
  "Tailwind CSS": "logos:tailwindcss-icon",
  Bootstrap: "logos:bootstrap",
  "CSS Modules": "logos:css-3",
  SCSS: "logos:sass",
  "shadcn/ui": "simple-icons:shadcnui",
  "Shadcn UI": "simple-icons:shadcnui",
  GSAP: "logos:greensock-icon",
  "Node.js": "logos:nodejs-icon",
  "Express.js": "logos:express",
  "REST APIs": "lucide:cpu",
  "JWT Authentication": "logos:jwt-icon",
  JWT: "logos:jwt-icon",
  Zod: "logos:zod",
  Swagger: "logos:swagger",
  WebSockets: "logos:websocket",
  "Socket.io": "logos:socket-io",
  BullMQ: "lucide:workflow",
  MongoDB: "logos:mongodb-icon",
  Mongoose: "logos:mongodb-icon",
  PostgreSQL: "logos:postgresql",
  MySQL: "logos:mysql-icon",
  Redis: "logos:redis",
  Docker: "logos:docker-icon",
  AWS: "logos:aws",
  "CI/CD": "lucide:refresh-cw",
  Vercel: "logos:vercel-icon",
  LangChain: "simple-icons:langchain",
  LangGraph: "lucide:network",
  RAG: "lucide:brain",
  "Vector Databases": "lucide:database",
  "LLM API Integration": "lucide:sparkles",
  Git: "logos:git-icon",
  GitHub: "logos:github-icon",
  Postman: "logos:postman-icon",
  Microservices: "lucide:boxes",
  "Core Web Vitals": "lucide:gauge",
};

const skillCategories: Record<string, string[]> = {
  Languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  Frontend: [
    "React.js",
    "Next.js",
    "Angular.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Bootstrap",
    "CSS Modules",
    "SCSS",
    "shadcn/ui",
    "GSAP",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "Zod",
    "Swagger",
    "WebSockets",
    "Socket.io",
    "BullMQ",
  ],
  Databases: ["MongoDB", "Mongoose", "PostgreSQL", "MySQL", "Redis"],
  "Cloud & DevOps": ["Docker", "AWS", "CI/CD", "Vercel"],
  "AI & LLM": [
    "LangChain",
    "LangGraph",
    "RAG",
    "Vector Databases",
    "LLM API Integration",
  ],
  "Tools & Concepts": [
    "Git",
    "GitHub",
    "Postman",
    "Microservices",
    "Core Web Vitals",
  ],
};

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  if (!site.skills.length) return null;

  const categories = [
    "All",
    "Languages",
    "Frontend",
    "Backend",
    "Databases",
    "Cloud & DevOps",
    "AI & LLM",
    "Tools & Concepts",
  ];

  const filteredSkills =
    activeCategory === "All"
      ? site.skills
      : site.skills.filter((skill) =>
          skillCategories[activeCategory]?.includes(skill)
        );

  return (
    <div id="skills">
      <SectionHeader
        title="Tech Stack"
        aside={
          <span className="hidden font-mono text-[10px] tracking-wider text-[var(--soft)] sm:inline">
            ( select tab to filter )
          </span>
        }
      />
      <Shell className="px-6 py-6 sm:px-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--chip)] p-1">
          {categories.map((cat) => {
            const iconName = CATEGORY_ICONS[cat] || "lucide:layers";
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] sm:px-3 sm:py-1.5 sm:text-[12px] font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[var(--fg)] text-[var(--bg)] shadow-sm font-semibold"
                    : "text-[var(--muted)] hover:bg-[var(--hover)] hover:text-[var(--fg)]"
                }`}
              >
                <Icon icon={iconName} width={14} height={14} className="size-3.5" />
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Items Grid */}
        <motion.div layout className="mt-6 flex flex-wrap gap-2.5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const iconName = SKILL_ICONS[skill] || "lucide:code-2";
              const isShadcn = iconName === "simple-icons:shadcnui";
              return (
                <motion.span
                  key={skill}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className="flex cursor-default items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 font-mono text-[12px] text-[var(--muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--fg)] hover:bg-[var(--fg)] hover:text-[var(--bg)] shadow-xs group"
                >
                  <Icon
                    icon={iconName}
                    width={16}
                    height={16}
                    className={`size-4 shrink-0 transition-colors ${
                      isShadcn ? "text-current" : ""
                    } group-hover:filter group-hover:brightness-110`}
                  />
                  {skill}
                </motion.span>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Shell>
    </div>
  );
}

export default TechStack;
