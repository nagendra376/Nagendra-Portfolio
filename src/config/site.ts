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

export type JobPoint = {
  prefix: string;
  text: string;
};

export type JobSubProject = {
  name: string;
  tools?: string;
  points: JobPoint[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary?: string;
  tools?: string;
  subProjects?: JobSubProject[];
  points?: JobPoint[];
  blurb: string;
  url?: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  status?: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  issued: string;
  credential?: string;
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
  role: "Full Stack Software Engineer",
  experienceYears: "2+ years",
  location: "Mumbai, India",
  phone: "+91-835-600-6285",
  timezone: "Asia/Kolkata",
  email: "nagendradwivedi2001@gmail.com",
  greeting: "Hey, I'm Nagendra",
  tagline:
    "Full Stack Software Engineer with 2+ years of experience architecting and shipping production web applications using React.js, Next.js, TypeScript, Node.js, and MongoDB.",
  about: [
    "Full Stack Software Engineer with 2+ years of experience architecting and shipping production web applications using React.js, Next.js, TypeScript, Node.js, and MongoDB.",
    "Core engineer behind creator monetization and streaming infrastructure on KNKY, developing virtualized video feeds, custom multimedia controls, and multi-flow Centrobill payment gateways.",
    "Hands-on backend experience designing modular RESTful APIs (JWT, RBAC) with Node.js/Express, working with PostgreSQL, MySQL, Redis, BullMQ job queues, Docker, and LLM-powered features. Proven track record of delivering features end-to-end from technical design to deployment. Available as an immediate joiner.",
  ],
  tldr: [
    "2+ Years Production Experience",
    "Immediate Joiner",
    "React.js, Next.js 14, TypeScript",
    "Node.js, Express, MongoDB, PostgreSQL",
    "Creator Monetization & Centrobill Payments",
    "LLM API Integration & AI Risk Detection",
  ],
  status: {
    available: true,
    availableText: "Immediate Joiner • Open to opportunities",
    nowLearning: "Distributed Systems • System Design • LLM Agents",
    nowBuilding: "AI-Powered Full Stack Project Management System",
    nowListening: "focus playlists",
  },
  socials: {
    github: "https://github.com/nagendra376",
    linkedin: "https://www.linkedin.com/in/nagendra-dwivedi-1049651b6/",
    twitter: "https://x.com/nagendra92407",
    phone: "tel:+918356006285",
    email: "mailto:nagendradwivedi2001@gmail.com",
    resume:
      "https://drive.google.com/file/d/1oGE1BRZbU6TtCkIeBzhsQx6Yd5B_qD4h/view?usp=sharing",
    discord: "https://discord.gg/ra4kyKdTk",
    medium: "https://medium.com/@nagendraswsa",
  },
  experience: [
    {
      company: "Ink In Caps",
      role: "Software Engineer",
      period: "Feb 2025 – Present",
      location: "Mumbai, India",
      summary:
        "Full-stack engineer across creator monetization platforms, administrative portals, and agency management dashboards for KNKY.",
      subProjects: [
        {
          name: "KNKY — Creator Platform (Flagship Application)",
          tools:
            "Next.js 14, React 18, TypeScript, Node.js, Redux Toolkit, WebSockets, Centrobill, HLS.js, Tailwind CSS",
          points: [
            {
              prefix: "Post Creation & Media Engine",
              text: "Architected end-to-end Draft Posts system (SaveDraft, restoration, route guards), multi-video vault picker with automated client-side canvas poster thumbnail extraction, and dynamic @mentions autocomplete with profile deep-linking.",
            },
            {
              prefix: "Reels Streaming & Audio Sync",
              text: "Built responsive Reels desktop/mobile view; integrated AbortController into API client to cleanly cancel stale video requests during rapid scrolling and developed a Global Audio Synchronizer to eliminate audio bleeding across video cards.",
            },
            {
              prefix: "Payments & Subscription Flows",
              text: "Integrated Centrobill payment processing across Prime subscriptions, Pay-To-View clips, and tipping; synchronized modal submission states with asynchronous gateway responses to prevent double-charging.",
            },
          ],
        },
        {
          name: "KNKY Agency Portal",
          tools: "React.js, TypeScript, Context API, REST APIs, Tailwind CSS",
          points: [
            {
              prefix: "Device Security & Creator Workflows",
              text: "Engineered complete multi-device session management enabling creators and agencies to monitor active sessions, execute remote single-device and 'Logout from All' revocations with auth token invalidation; preserved creator context across fullscreen vault media and agency chat threads.",
            },
          ],
        },
        {
          name: "KNKY Admin Portal",
          tools: "React.js, Vite, SSR, REST APIs, Tailwind CSS",
          points: [
            {
              prefix: "Admin Operations & Build Architecture",
              text: "Aligned administrative data schemas across user profiles, channel earnings analytics, and real-time transaction monitoring; overhauled promotional offer workflows and optimized Vite SSR dependencies for zero-downtime deployments.",
            },
          ],
        },
      ],
      blurb:
        "• Full-stack engineer across creator monetization platforms, administrative portals, and agency management dashboards for KNKY.\n• Post Creation & Media Engine: Architected end-to-end Draft Posts system, multi-video vault picker with automated client-side canvas poster thumbnail extraction, and dynamic @mentions autocomplete.\n• Reels Streaming & Audio Sync: Built responsive Reels desktop/mobile view; integrated AbortController and developed Global Audio Synchronizer.\n• Payments & Subscription Flows: Integrated Centrobill payment processing across Prime subscriptions, Pay-To-View clips, and tipping.\n• KNKY Agency & Admin Portals: Engineered multi-device session management, schema alignment, and optimized Vite SSR dependencies.",
      url: "",
    },
    {
      company: "Accenture",
      role: "Frontend Developer (GSK Project)",
      period: "Aug 2024 – Dec 2024",
      location: "Mumbai, India",
      tools:
        "React.js, TypeScript, JavaScript, CSS3, Figma, Design Systems, Cross-Browser Testing",
      points: [
        {
          prefix: "Design System Implementation",
          text: "Developed responsive, reusable React.js components by translating Figma designs into production code, adhering to enterprise design systems and accessibility standards.",
        },
        {
          prefix: "Performance & Compatibility",
          text: "Optimized frontend interfaces for consistent performance and cross-browser compatibility across desktop, tablet, and mobile devices.",
        },
      ],
      blurb:
        "• Design System Implementation: Developed responsive, reusable React.js components by translating Figma designs into production code, adhering to enterprise design systems and accessibility standards.\n• Performance & Compatibility: Optimized frontend interfaces for consistent performance and cross-browser compatibility across desktop, tablet, and mobile devices.",
      url: "",
    },
    {
      company: "Webtactics & My Country Mobile",
      role: "Web Developer",
      period: "Jul 2022 – Aug 2024",
      location: "Mumbai, India",
      tools: "JavaScript, HTML5, CSS3, PHP, MySQL, WordPress, Shopify",
      points: [
        {
          prefix: "Web Platform Development",
          text: "Built and maintained production web platforms (SMSLocal, Teloz, Shagun, Sunrise, ESN India), implementing dynamic features, client customization, and database-driven functionality.",
        },
        {
          prefix: "Platform Stability & Maintenance",
          text: "Tested and debugged web applications, resolving critical functional, UI, and cross-browser issues to ensure platform stability.",
        },
      ],
      blurb:
        "• Web Platform Development: Built and maintained production web platforms (SMSLocal, Teloz, Shagun, Sunrise, ESN India), implementing dynamic features, client customization, and database-driven functionality.\n• Platform Stability & Maintenance: Tested and debugged web applications, resolving critical functional, UI, and cross-browser issues to ensure platform stability.",
      url: "",
    },
  ] as Job[],
  projects: [
    {
      title: "AI-Powered Full Stack Project Management System",
      blurb:
        "A full-stack project tracker featuring JWT authentication, role-based authorization (RBAC), secure password hashing, modular RESTful APIs, and an integrated LLM API for deadline risk detection.",
      story:
        "Engineered a full-stack project tracker featuring JWT authentication, role-based authorization (RBAC), secure password hashing, and modular RESTful backend APIs with Node.js, Express, and MongoDB.\n\nIntegrated an LLM API to analyze task deadlines and statuses, detect potential delays, and generate contextual risk explanations with actionable recommendations.",
      stack: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "REST APIs",
        "LLM API",
      ],
      year: "2026",
      links: {
        live: "https://support-crm-system-phi.vercel.app/",
        source: "https://github.com/nagendra376/Project-managemenet_system",
      },
      featured: true,
      image: "/project-images/project-management.png",
      categories: ["Fullstack", "Backend"],
    },
    {
      title: "Porsche 911 GT3 RS Showcase",
      blurb:
        "An interactive automotive showcase developed with responsive layouts, scroll-triggered animations, smooth scrolling, and interactive navigation.",
      story:
        "Developed an interactive automotive showcase with responsive layouts, scroll-triggered animations, smooth scrolling, and interactive navigation. Blends luxury branding, motion design, and performance storytelling into a premium digital experience.",
      stack: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "GSAP",
      ],
      year: "2025",
      links: {
        live: "https://timeline-activity.vercel.app/",
        source: "",
      },
      featured: true,
      image: "/project-images/porsche-showcase.png",
      categories: ["Frontend"],
    },
    {
      title: "Support CRM System",
      blurb:
        "A full-stack customer support ticket management system for creating, searching, filtering, viewing, and updating support tickets in a streamlined workflow.",
      story:
        "This project combines a React + Vite frontend with a Node.js and Express backend, backed by MongoDB for reliable ticket storage and notes tracking. It includes ticket creation, status updates, comment history, search and filtering, and a clean admin-style dashboard built for real support workflows.",
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
      featured: false,
      image: "/project-images/support-crm.png",
      categories: ["Fullstack", "Backend"],
    },
    {
      title: "ProInvoice – Advanced Billing PWA",
      blurb:
        "An installable Progressive Web App (PWA) for multi-user billing, invoice and quote generation, client management, and real-time revenue analytics.",
      story:
        "ProInvoice is an offline-capable Progressive Web Application built to streamline billing workflows for freelancers and growing businesses. It features fast invoice and quotation generation, itemized tax/discount calculations, client records, and visual analytics dashboards for tracking business performance.",
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
      featured: false,
      image: "/project-images/pro-invoice.png",
      categories: ["Fullstack", "Frontend"],
    },
    {
      title: "Solution Systems",
      blurb:
        "A commercial computer repair, IT services, and custom hardware e-commerce platform serving 365+ locations across Mumbai & MMR.",
      story:
        "Developed and maintained as the core digital platform for Solution Systems, featuring doorstep computer and laptop repair booking, genuine OEM parts tracking, custom PC configurator, hardware catalog, and direct WhatsApp customer support channels.",
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
      featured: false,
      image: "/project-images/solution-systems.png",
      categories: ["Fullstack", "Frontend"],
    },
  ] as Project[],
  skills: [
    // Languages
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "SQL",
    // Frontend
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
    // Backend
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "Zod",
    "Swagger",
    "WebSockets",
    "Socket.io",
    "BullMQ",
    // Databases
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
    "MySQL",
    "Redis",
    // Cloud & DevOps
    "Docker",
    "AWS",
    "CI/CD",
    "Vercel",
    // AI & LLM
    "LangChain",
    "LangGraph",
    "RAG",
    "Vector Databases",
    "LLM API Integration",
    // Tools & Concepts
    "Git",
    "GitHub",
    "Postman",
    "Microservices",
    "Core Web Vitals",
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Sikkim Manipal University",
      location: "Gangtok",
      period: "Nov 2025 – Pursuing",
      status: "Pursuing",
    },
    {
      degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
      institution: "Nirmala Memorial Foundation College",
      location: "Mumbai",
      period: "Jun 2019 – Jul 2022",
      grade: "CGPA: 8.6/10.0",
    },
  ] as EducationItem[],
  certifications: [
    {
      title: "Frontend Developer Certification",
      issuer: "Techpaathshala",
      issued: "Nov 2024",
      credential: "Certificate",
    },
  ] as CertificationItem[],
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
