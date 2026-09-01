export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  categories?: ("Frontend" | "Backend" | "Fullstack")[];
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
  date: string;
  url: string;
  readingTime?: string;
};

export const site = {
  name: "Nagendra Dwivedi",
  url: "https://nagendra  .vercel.app",
  profileImages: ["/profile.jpg", "/profile2.png"],
  bannerImage: "/banner.png",
  socialBannerImage: "/social-banner.png",
  initials: "AJ",
  role: "Full Stack Developer",
  location: "Delhi, India",
  timezone: "Asia/Kolkata",
  email: "conveytoanurag@gmail.com",
  greeting: "Hey, I'm Nagendra",
  tagline:
    "I build clean, modern websites and web apps where design, functionality, and even the smallest details matter.",
  about: [
    "Hey, I'm Nagendra, a full stack developer who loves building clean, modern websites and apps where design, functionality, and even the smallest details matter, with a focus on making products that are both practical and visually satisfying.",
    "I spend most of my time in the terminal, the browser, or scribbling on a whiteboard. I lean backend,not because I don't like frontend, but because I enjoy making polished things actually hold up.",
    "I don't ship junk. Maintainability isn't optional. And I build best when I'm curious.",
  ],
  tldr: [
    "Building products.",
    "Learning technologies.",
    "Shipping consistently.",
    "Obsessed with clean code.",
  ],
  status: {
    available: true,
    availableText: "open to opportunities",
    nowLearning: "Backend Engineering • System Design • DSA • DevOps",
    nowBuilding: "DoodleDash",
    nowListening: "focus playlists",
  },
  socials: {
    github: "https://github.com/nodeanurag",
    twitter: "https://x.com/anuragdotdev",
    linkedin: "https://linkedin.com/in/nodeanurag",
    email: "mailto:conveytoanurag@gmail.com",
    resume: "",
    discord: "https://discord.gg/ra4kyKdTk",
    medium: "https://medium.com/@nagendraswsa",
  },
  experience: [
    {
      company: "Independent Developer",
      role: "Frontend Developer",
      period: "2025 — Present",
      blurb:
        "Built and deployed multiple SPAs & web applications. Engaged in competitive coding events like the Smart India Hackathon and HT codeathon.",
      url: "",
    },
    {
      company: "Independent Developer",
      role: "Frontend Developer",
      period: "2025 — Present",
      blurb:
        "Built and deployed multiple SPAs & web applications. Engaged in competitive coding events like the Smart India Hackathon and HT codeathon.",
      url: "",
    },
  ] as Job[],
  projects: [
    {
      title: "Support CRM System",
      blurb:
        "A full-stack customer support ticket management system for creating, searching, filtering, viewing, and updating support tickets in a streamlined workflow.",
      story:
        "This project combines a React + Vite frontend with a Node.js and Express backend, backed by MongoDB for reliable ticket storage and notes tracking. It includes ticket creation, status updates, comment history, search and filtering, and a clean admin-style dashboard built for real support workflows.\n\n*Built to keep support operations organized, efficient, and easy to maintain.*",
      stack: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "React Router",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Axios",
      ],
      year: "2026",
      links: {
        live: "https://support-crm-system-phi.vercel.app/",
        source: "https://github.com/nagendra376/Support_CRM_System-",
      },
      featured: true,
      image: "/project-images/framelabs.png",
      categories: ["Fullstack", "Backend"],
    },
    {
      title: "Porsche 911 GT3 RS showcase",
      blurb:
        "A cinematic Porsche GT3 RS concept landing page that blends luxury branding, motion design, and performance storytelling into a premium automotive experience.",
      story:
        "This project focuses on turning a high-performance car into a visual narrative using immersive sections, bold typography, and smooth transitions. The experience highlights engineering, aerodynamics, power, and design through a refined storytelling layout that feels modern, fast, and unmistakably premium.\n\nBuilt to feel like a luxury performance brand presentation, not just a product page.",
      stack: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "GSAP",
        "Framer Motion",
        "Responsive Design",
      ],
      year: "2026",
      links: {
        live: "https://timeline-activity.vercel.app/",
        source: "",
      },
      featured: true,
      image: "/project-images/doodledash.png",
      categories: ["Frontend"],
    },
    {
      title: "Project Management System",
      blurb:
        "A Node.js and Express backend for a project management application with authentication, project APIs, and a scalable foundation for feature expansion.",
      story:
        "This backend project is built to support user registration and login, project creation and management, validation layers, health checks, and API-ready structure for future task, team, and member management features. It uses MongoDB with Mongoose for persistence and includes email utilities, JWT-based auth, and environment-based configuration for a real-world service setup.\n\nStructured as a clean, extendable backend foundation for a full project management product.",
      stack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "bcrypt",
        "Nodemailer",
        "Multer",
      ],
      year: "2026",
      links: {
        live: "",
        source: "https://github.com/nagendra376/Project-managemenet_system",
      },
      featured: true,
      status: "Backend API",
      image: "/project-images/codeforge.png",
      categories: ["Backend", "Fullstack"],
    },
    {
      title: "toDesktop",
      blurb:
        "A sleek desktop-inspired frontend focused on productivity workflows, live task visibility, and a polished product experience.",
      story:
        "This is an in-progress frontend project designed to bring a modern desktop-style interface to life with clean layouts, smooth interactions, and a polished user experience. The goal is to create a highly usable productivity dashboard that feels premium while staying practical and easy to navigate.\n\nCurrently under active development as a frontend-focused build.",
      stack: ["HTML", "JavaScript", "Tailwind CSS", "Responsive Design"],
      year: "2026",
      links: {
        live: "https://to-desktop-frontend.vercel.app/",
        source: "https://github.com/nagendra376/toDesktop-frontend",
      },
      featured: false,
      status: "In Progress",
      categories: ["Frontend"],
    },
  ] as Project[],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Shadcn UI",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Supabase",
    "Firebase",
    "REST APIs",
    "JWT",
    "Git",
    "GitHub",
    "Postman",
    "Vercel",
    "Figma",
    "C++",
    "Python",
  ],
  writing: [] as Post[],
  github: {
    username: "nodeanurag",
    contributionsLastYear: "500+",
  },
  footerNote: "Built with ❤️ and hardwork ",
} as const;

export type Site = typeof site;
