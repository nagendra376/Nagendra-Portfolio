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
    nowBuilding: "Project Management System",
    nowListening: "focus playlists",
  },
  socials: {
    github: "https://github.com/nagendra376",
    twitter: "https://x.com/nagendra92407",
    linkedin: "https://www.linkedin.com/in/nagendra-dwivedi-1049651b6/",
    email: "mailto:nagendraswsa@gmail.com",
    resume:
      "https://drive.google.com/file/d/1oGE1BRZbU6TtCkIeBzhsQx6Yd5B_qD4h/view?usp=sharing",
    discord: "https://discord.gg/ra4kyKdTk",
    medium: "https://medium.com/@nagendraswsa",
  },
  experience: [
    {
      company: "INK IN CAPS (KNKY Platform)",
      role: "Junior Software Engineer",
      period: "Feb '25 – Present",
      blurb:
        "• Architected and delivered the end-to-end Reels short-form video platform across mobile and desktop, integrating TanStack Virtualizer and Intersection Observer for infinite scrolling, dynamic Swiper media carousels, and synchronized cross-component audio/playback controls.\n• Engineered an interactive multimedia player suite, featuring custom draggable video scrubbers with time previews, 10s skip navigation, pinch-to-zoom media inspection, double-tap engagement, and native/custom fullscreen portals.\n• Spearheaded Centrobill payment gateway integration across 5 platform monetization funnels (Creator Prime Subscriptions, Locked Pay-to-View Posts, Event Ticketing, Pay-Per-Message Chat Fees, and Shop Checkout) with global transaction state handling and multi-currency formatting.\n• Co-engineered the Vault-first Story & Content Creation suite, featuring stepped draft publishing, audience-based access pricing, scheduled releases, and pre-upload corrupted media validation guards.\n• Designed guest-to-subscriber conversion funnels and overlay architecture, implementing a custom stacked modal history system (useOverlayHistory) and resolving critical iOS PWA safe-area, deep-linking, and viewport rendering challenges across 40+ major releases.",
      url: "",
    },
    {
      company: "Accenture (GSK Project)",
      role: "Frontend Developer",
      period: "Aug '24 – Dec '24",
      blurb:
        "• Developed pixel-perfect, responsive React.js interfaces by translating Figma designs into production-ready components.\n• Built reusable and accessible UI components while following established design systems, design tokens, and UI guidelines.\n• Ensured consistent user experiences across desktop, tablet, and mobile devices through responsive development and cross-browser testing.",
      url: "",
    },
    {
      company: "Webtactics",
      role: "Web Developer",
      period: "Mar '24 – Aug '24",
      blurb:
        "• Developed responsive websites and client-facing web interfaces using HTML, CSS, JavaScript, and PHP.\n• Worked on client projects including Shagun, Sunrise, and ESN India, translating requirements into functional and responsive web solutions.\n• Worked with WordPress and Shopify for website development and customization, alongside MySQL-based dynamic functionality.\n• Collaborated directly with clients across three projects to understand requirements and deliver solutions.",
      url: "",
    },
    {
      company: "My Country Mobile",
      role: "Web Developer",
      period: "Jul '22 – Mar '24",
      blurb:
        "• Developed and maintained company websites and responsive landing pages using HTML, CSS, JavaScript, PHP, and MySQL.\n• Worked on platforms including My Country Mobile, SMSLocal, Sweetmama, and Teloz, handling website enhancements, functional improvements, and UI maintenance.\n• Tested and debugged web applications, identifying and resolving functional, UI, and cross-browser issues to improve platform stability.\n• Collaborated with the SMSLocal team on platform updates, technical issues, and business requirements.",
      url: "",
    },
  ] as Job[],
  projects: [
    {
      title: "KNKY Reels Platform",
      blurb:
        "Full Reels video feed for mobile and desktop featuring virtualized infinite feeds, custom touch player controls, in-feed Centrobill monetization, and guest-to-subscriber conversion funnels.",
      story:
        "Built the full Reels video feed for mobile and desktop, using TanStack Virtualizer and smart video preloading so users can swipe smoothly through media-heavy feeds with instant video playback and zero lag.\n\nDeveloped custom video player controls and touch interactions, including a smooth draggable progress bar with seek preview, pinch-to-zoom, multi-photo/video swipe carousels, and synchronized sound settings.\n\nIntegrated in-feed payments and creator monetization, allowing users to unlock paid posts, send tips, and purchase creator subscriptions via Centrobill directly inside the feed without losing their place.\n\nImplemented preview limits to drive sign-ups, giving guest users a preview of creator reels before prompting them to follow or subscribe, while ensuring smooth browser back-button navigation on deep links.",
      stack: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "TanStack Virtualizer",
        "HLS.js",
        "Swiper.js",
        "Centrobill",
      ],
      year: "2025 – 2026",
      links: {
        live: "https://knky.co/reels",
        source: "",
      },
      featured: true,
      categories: ["Frontend", "Fullstack"],
    },
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
      image: "/project-images/support-crm.png",
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
      image: "/project-images/porsche-showcase.png",
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
      image: "/project-images/project-management.png",
      categories: ["Backend", "Fullstack"],
    },
    {
      title: "ProInvoice – Advanced Billing PWA",
      blurb:
        "An installable Progressive Web App (PWA) for multi-user billing, invoice and quote generation, client management, and real-time revenue analytics.",
      story:
        "ProInvoice is an offline-capable Progressive Web Application built to streamline billing workflows for freelancers and growing businesses. It features fast invoice and quotation generation, itemized tax/discount calculations, client records, and visual analytics dashboards for tracking business performance.\n\nOptimized for smooth cross-device usage with standalone PWA installation, dark UI aesthetics, and instant responsiveness.",
      stack: [
        "React.js",
        "Vite",
        "PWA",
        "TypeScript",
        "Tailwind CSS",
      ],
      year: "2026",
      links: {
        live: "https://pro-invoice-pwa.vercel.app/",
        source: "",
      },
      featured: true,
      image: "/project-images/pro-invoice.png",
      categories: ["Fullstack", "Frontend"],
    },
    {
      title: "Solution Systems",
      blurb:
        "A commercial computer repair, IT services, and custom hardware e-commerce platform serving 365+ locations across Mumbai & MMR.",
      story:
        "Developed and maintained as the core digital platform for Solution Systems, featuring doorstep computer and laptop repair booking, genuine OEM parts tracking, custom PC configurator, hardware catalog, and direct WhatsApp customer support channels.\n\nEngineered with localized SEO across 300+ Mumbai regions, high-performance page loads, and intuitive responsive navigation.",
      stack: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "REST APIs",
        "Responsive Design",
      ],
      year: "2026",
      links: {
        live: "https://solutionsystems.in/",
        source: "",
      },
      featured: true,
      image: "/project-images/solution-systems.png",
      categories: ["Fullstack", "Frontend"],
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
    accounts: ["nagendra376", "nagendraiic"],
    contributionsLastYear: "500+",
  },
  footerNote: "Built with ❤️ and hardwork",
} as const;

export type Site = typeof site;
