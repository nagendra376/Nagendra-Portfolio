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
      company: "INK IN CAPS",
      role: "Junior Software Engineer",
      period: "Feb '25 – Present",
      blurb:
        "• Contributed to KNKY, a global social platform, by developing scalable frontend features across feeds, profiles, channels, reels, and monetization workflows.\n• Built 20+ reusable React components to improve consistency, maintainability, and delivery speed across major application modules.\n• Architected an Instagram-style Reels experience using virtualized rendering and media lifecycle management to support smooth, scalable content consumption.\n• Integrated WebSocket-based real-time functionality for live streaming and messaging, along with checkout and payment workflows within media feeds.\n• Improved Largest Contentful Paint (LCP) by ~35% through frontend performance optimization and efficient rendering strategies.\n• Resolved 50+ production issues across UI, rendering, cross-browser compatibility, and application functionality, improving platform stability.",
      url: "",
    },
    {
      company: "Accenture",
      role: "Frontend Developer",
      period: "Aug '24 – Dec '24",
      blurb:
        "• Worked on the GSK project, translating complex Figma designs into production-ready, pixel-perfect web interfaces.\n• Developed reusable HTML, CSS, JavaScript, and React components following established design patterns and component standards.\n• Implemented responsive and consistent UI layouts while maintaining high visual fidelity across different screen sizes.\n• Collaborated on frontend implementation and refinement of complex UI requirements, bridging the gap between design specifications and production-ready interfaces.",
      url: "",
    },
    {
      company: "Webtactics",
      role: "Web Developer",
      period: "Mar '24 – Aug '24",
      blurb:
        "• Developed responsive web applications for client projects including Shagun, Sunrise, and ESN India.\n• Built pixel-perfect, responsive interfaces using HTML, CSS, JavaScript, WordPress, and Shopify.\n• Optimized website loading performance while maintaining visual consistency across devices.\n• Worked with PHP and MySQL to implement and maintain dynamic website functionality.",
      url: "",
    },
    {
      company: "My Country Mobile",
      role: "Web Developer",
      period: "Jul '22 – Mar '24",
      blurb:
        "• Developed and maintained scalable UI components across 10+ telecommunication platforms, including Callam and SMSLocal.\n• Integrated REST APIs to display real-time VoIP telemetry and communication data within web applications.\n• Built responsive and reusable frontend interfaces, focusing on consistency and maintainability across multiple platforms.\n• Worked on data-driven web interfaces for telecom applications, improving the usability and presentation of real-time communication information.",
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
      image: "/project-images/toDesktop.jpg",
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
  ],
  writing: [
    {
      title: "HTTP for Frontend Developers: Beyond the Fetch Call",
      summary:
        "A practical breakdown of how HTTP actually works behind everyday frontend tasks—from requests and responses to headers, status codes, caching, cookies, retries, and debugging real-world network issues.",
      date: "Sep 01, 2026",
      readingTime: "14 min read",
      url: "https://medium.com/@nagendraswsa/http-for-frontend-developers-beyond-the-fetch-call-e059509308f1?sharedUserId=nagendraswsa",
    },
  ] as Post[],
  github: {
    username: "nagendra376",
    contributionsLastYear: "500+",
  },
  footerNote: "Built with ❤️ and hardwork",
} as const;

export type Site = typeof site;
