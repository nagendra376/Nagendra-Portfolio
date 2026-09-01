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
  firstName: "Nagendra",
  url: "https://nagendradwivedi.vercel.app",
  quote: {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
  profileImages: ["/profile.jpg", "/profile2.png"],
  bannerImage: "/images/cover.jpg",
  socialBannerImage: "/social-banner.png",
  initials: "ND",
  role: "Full Stack Developer",
  location: "Mumbai, India",
  timezone: "Asia/Kolkata",
  email: "nagendraswsa@gmail.com",
  greeting: "Hey, I'm Nagendra",
  tagline:
    "I build clean, modern websites and web apps where design, functionality, and even the smallest details matter.",
  about: [
    "Hey, I'm Nagendra, a full stack developer who loves building clean, modern websites and apps where design, functionality, and even the smallest details matter, with a focus on making products that are both practical and visually satisfying.",
    "I spend most of my time in the terminal, the browser, or scribbling on a whiteboard. I lean backend, not because I don't like frontend, but because I enjoy making polished things actually hold up.",
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
    github: "https://github.com/nagendra376",
    twitter: "https://x.com/nagendra92407",
    linkedin: "https://www.linkedin.com/in/nagendra-dwivedi-1049651b6/",
    email: "mailto:nagendraswsa@gmail.com",
    resume:
      "https://drive.google.com/file/d/1wcb1tbG9bYjRMloNcM35jVJ1Ag8vvrNH/view?usp=sharing",
    discord: "https://discord.gg/ra4kyKdTk",
    medium: "https://medium.com/@nagendraswsa",
  },
  experience: [
    {
      company: "Independent Developer",
      role: "Backend & Full-Stack Developer",
      period: "2025 – Present",
      blurb:
        "Building and deploying full-stack web applications, SaaS platforms, and backend systems. Working across APIs, authentication, databases, real-time systems, and modern web infrastructure.",
      url: "",
    },
  ] as Job[],
  projects: [
    {
      title: "Support CRM System",
      blurb:
        "A full-stack customer support ticket management system for creating, searching, filtering, viewing, and updating support tickets in a streamlined workflow.",
      story:
        "This project combines a React + Vite frontend with a Node.js and Express backend, backed by MongoDB for reliable ticket storage and notes tracking. It includes ticket creation, status updates, comment history, search and filtering, and a clean admin-style dashboard built for real support workflows.\n\nBuilt to keep support operations organized, efficient, and easy to maintain.",
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
  writing: [
    {
      title:
        "Serialization and Deserialization: The Universal Language of Backend Engineering",
      summary:
        "A deep dive into serialization formats from JSON and XML to Protocol Buffers, exploring schema validation, backward compatibility, and network serialization bottlenecks.",
      date: "Aug 29, 2026",
      readingTime: "14 min read",
      url: "https://medium.com/@anuragdotdev/serialization-and-deserialization-the-universal-language-of-backend-engineering-8df8ce03d257",
    },
    {
      title:
        "The Ultimate Guide to Routing: From Network Packets to Backend Handlers",
      summary:
        "A comprehensive exploration of routing across layers, tracing IP packets, hardware routing tables, HTTP multiplexing, and frontend routers.",
      date: "Aug 26, 2026",
      readingTime: "20 min read",
      url: "https://medium.com/@anuragdotdev/the-ultimate-guide-to-routing-from-network-packets-to-backend-handlers-64cc4f7fdbfa",
    },
    {
      title: "Understanding HTTP: The Backbone of the Web",
      summary:
        "A deep dive into the Hypertext Transfer Protocol, exploring header lifecycle, request methods, statelessness, and connection optimization from HTTP/1.1 to HTTP/3.",
      date: "Aug 22, 2026",
      readingTime: "15 min read",
      url: "https://medium.com/@anuragdotdev/understanding-http-the-backbone-of-the-web-3d2109d0facd",
    },
    {
      title: "API Rate Limiting: I thought it was just counting requests...",
      summary:
        "An analysis of rate limiting algorithms from Token Bucket to Sliding Window logs, detailing how distributed systems protect API infrastructure under load.",
      date: "Jul 12, 2026",
      readingTime: "14 min read",
      url: "https://medium.com/@anuragdotdev/api-rate-limiting-i-thought-it-was-just-counting-requests-682cefa2f56c",
    },
    {
      title:
        "The JWT Storage Debate is Over: Here's the Production-Grade Architecture Your App Actually Needs",
      summary:
        "A definitive guide to JWT storage in frontend applications, detailing why standard localStorage fails and how to implement secure memory-session architecture with HTTP-only cookies.",
      date: "Jun 24, 2026",
      readingTime: "8 min read",
      url: "https://medium.com/@anuragdotdev/the-jwt-storage-debate-is-over-heres-the-production-grade-architecture-your-app-actually-needs-9ab284da065f",
    },
  ] as Post[],
  github: {
    username: "nodeanurag",
    contributionsLastYear: "500+",
  },
  footerNote: "Built with ❤️ and hardwork",
} as const;

export type Site = typeof site;
