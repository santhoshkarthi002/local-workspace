export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: 'Full-time' | 'Traineeship';
  summary: string;
  achievements: string[];
  techStack: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: {
    name: string;
    tag?: string;
    highlight?: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  keyDecisions: string[];
  techStack: string[];
  highlights: string[];
  image: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const resumeData = {
  personal: {
    name: "Karthikeyan G",
    preferredName: "Karthi",
    role: "Full Stack Developer",
    eyebrow: "FULL STACK DEVELOPER · REACT · NODE.JS",
    headline: "Building scalable web experiences with clean, thoughtful code.",
    tagline: "React.js • TypeScript • Node.js • Express.js • PostgreSQL • MySQL",
    bio: "I'm Karthikeyan, a Full Stack Developer focused on building responsive interfaces, reliable backend services, and user-friendly web applications.",
    aboutDetailed: "With over 3+ years of professional engineering experience, I specialize in architecting modern web applications from frontend user interfaces to reliable backend APIs and relational database structures. My approach combines clean, maintainable TypeScript code with thoughtful UI/UX and solid engineering principles.",
    experienceYears: "3+",
    phone: "+91 8220932517",
    email: "Karthikeyan.g14299@gmail.com",
    location: "Coimbatore, Tamil Nadu, India",
    linkedin: "https://linkedin.com/in/karthikeyan-g",
    github: "https://github.com/karthikeyan-g",
    coreStrengths: [
      "Responsive, user-friendly frontend interfaces with React & TypeScript",
      "Robust RESTful API design & integration using Node.js & Express.js",
      "Relational database modeling & optimization with PostgreSQL & MySQL",
      "Reusable, component-driven UI architecture & design systems",
      "Server-state synchronization, caching & fine-grained reactivity",
      "Cross-functional collaboration with designers, QA, and product teams"
    ]
  },

  stats: [
    { label: "Engineering Experience", value: "3+", suffix: " Years" },
    { label: "Core Tech Stacks", value: "6+", suffix: " Domains" },
    { label: "Production Companies", value: "3", suffix: " Verified" },
    { label: "Engineering Focus", value: "100%", suffix: " Clean Code" }
  ],

  skillCategories: [
    {
      id: "frontend",
      label: "Frontend",
      skills: [
        { name: "React.js", tag: "Primary", highlight: true },
        { name: "TypeScript", tag: "Core", highlight: true },
        { name: "JavaScript (ES6+)", tag: "Core", highlight: true },
        { name: "React Native", tag: "Mobile" },
        { name: "HTML5", tag: "Semantic" },
        { name: "CSS3", tag: "Styling" },
        { name: "Tailwind CSS", tag: "Utility-First", highlight: true },
        { name: "Material UI", tag: "Components" },
        { name: "Bootstrap", tag: "Responsive" }
      ]
    },
    {
      id: "backend",
      label: "Backend",
      skills: [
        { name: "Node.js", tag: "Runtime", highlight: true },
        { name: "Express.js", tag: "API Framework", highlight: true },
        { name: "Django REST Framework", tag: "Python Backend" }
      ]
    },
    {
      id: "databases",
      label: "Databases",
      skills: [
        { name: "PostgreSQL", tag: "Relational", highlight: true },
        { name: "MySQL", tag: "Relational", highlight: true }
      ]
    },
    {
      id: "state",
      label: "State & Data Fetching",
      skills: [
        { name: "Redux Toolkit", tag: "Global State", highlight: true },
        { name: "Zustand", tag: "Lightweight State" },
        { name: "React Query", tag: "Server State Cache", highlight: true }
      ]
    },
    {
      id: "dataviz",
      label: "APIs & Data Visualization",
      skills: [
        { name: "REST APIs", tag: "Architecture", highlight: true },
        { name: "Apache ECharts", tag: "Telemetry Charts", highlight: true },
        { name: "Recharts", tag: "React Analytics" }
      ]
    },
    {
      id: "tools",
      label: "Tools & Version Control",
      skills: [
        { name: "Git", tag: "VCS", highlight: true },
        { name: "GitHub", tag: "Collaboration", highlight: true },
        { name: "GitLab", tag: "CI/CD & Repos" },
        { name: "Visual Studio Code", tag: "IDE" }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "praxio",
      role: "Full Stack Developer",
      company: "Praxio IT Consulting Pvt. Ltd.",
      location: "Coimbatore / Remote",
      period: "2024 – Present",
      isCurrent: true,
      type: "Full-time",
      summary: "Leading full-stack and modern frontend engineering initiatives using React.js, TypeScript, and Node.js to deliver scalable, high-performing web applications.",
      achievements: [
        "Develop and maintain responsive web applications using React.js and TypeScript.",
        "Refactor existing code to improve readability, maintainability, and runtime performance.",
        "Build reusable UI components and improve frontend state management architectures.",
        "Collaborate with backend developers to integrate APIs and improve data handling.",
        "Work closely with designers, QA engineers, and product managers to deliver features on schedule.",
        "Debug complex production issues and optimize application performance."
      ],
      techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "Tailwind CSS"]
    },
    {
      id: "enthu",
      role: "Software Developer",
      company: "Enthu Technology Solutions India Pvt. Ltd.",
      location: "Coimbatore, Tamil Nadu",
      period: "2022 – 2024",
      isCurrent: false,
      type: "Full-time",
      summary: "Developed mission-critical web interfaces and interactive IoT dashboards delivering real-time sensory data streams, charts, and user management modules.",
      achievements: [
        "Develop responsive web interfaces and interactive IoT dashboards with high telemetry density.",
        "Build data visualization components using Apache ECharts and Recharts for live sensory metrics.",
        "Implement robust user management and role-based access control frontend flows.",
        "Collaborate seamlessly with backend developers and UI/UX designers to align on specifications.",
        "Develop reusable UI components, integrate REST APIs, and resolve application defects."
      ],
      techStack: ["React.js", "JavaScript (ES6+)", "Apache ECharts", "Recharts", "REST APIs", "CSS3", "Git"]
    },
    {
      id: "abytz",
      role: "Frontend Developer Trainee",
      company: "Abytz Technology Solutions India Pvt. Ltd.",
      location: "Tamil Nadu, India",
      period: "December 2021 – March 2022",
      isCurrent: false,
      type: "Traineeship",
      summary: "Strengthened frontend engineering practices through active code contributions, component maintenance, and feature enhancements on React.js applications.",
      achievements: [
        "Maintain and enhance React.js applications across client-facing modules.",
        "Fix UI bugs, improve responsive behaviors, and implement feature enhancements.",
        "Collaborate with QA engineers to validate cross-browser functionality and responsive layouts.",
        "Work with senior developers on requirements breakdown, code reviews, and coding standards."
      ],
      techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "Chrome DevTools"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "iot-dashboard",
      title: "IoT Dashboard and Data Visualization",
      category: "Real-Time Telemetry & Data Viz",
      description: "Interactive real-time IoT monitoring interface featuring telemetry charting, sensory alerts, and device health metrics.",
      problem: "Industrial IoT systems emit continuous sensor telemetry that easily overwhelms standard UI tables and charts, causing dropped frames and lag.",
      solution: "Engineered a responsive dashboard using React.js and Apache ECharts with sampled data buffering, giving operators smooth sub-second telemetry feeds.",
      role: "Full Stack / Frontend Engineer: Built visualization widgets, device status indicators, and REST telemetry endpoints.",
      keyDecisions: [
        "Chose Apache ECharts for canvas-based hardware-accelerated rendering on large data points",
        "Decoupled telemetry updates from global state to isolate DOM re-renders",
        "Implemented resilient REST polling with backoff handling during network instability"
      ],
      techStack: ["React.js", "TypeScript", "Apache ECharts", "Recharts", "REST APIs", "Tailwind CSS"],
      highlights: [
        "Sub-100ms real-time chart updates without UI stutter",
        "Configurable multi-range telemetry filters (1h, 24h, 7d, 30d)",
        "Device status tracking & threshold-based alert badges"
      ],
      image: "iot_dashboard.jpg",
      featured: true
    },
    {
      id: "fullstack-webapp",
      title: "Full Stack Web Application",
      category: "Full Stack & Backend Services",
      description: "Comprehensive web platform featuring secure authentication, RESTful service layers, and relational PostgreSQL persistence.",
      problem: "Businesses require centralized management workflows that ensure data integrity, role-based security, and fast transactional responses.",
      solution: "Designed and implemented an end-to-end full stack architecture pairing a reactive React frontend with Express.js APIs and relational PostgreSQL models.",
      role: "Full Stack Developer: Designed database schema, built REST controllers, and created responsive user management interfaces.",
      keyDecisions: [
        "Modeled normalized relational tables with indexing on high-frequency lookup keys",
        "Constructed JWT-based authentication with secure cookie handling and token refresh",
        "Applied comprehensive API request validation schemas to prevent bad payloads"
      ],
      techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      highlights: [
        "Complete CRUD architecture with transaction safety and relational integrity",
        "Role-Based Access Control (Admin, Manager, Member) across all endpoints",
        "Responsive, accessible UI with optimistic data updates"
      ],
      image: "fullstack_app.jpg",
      featured: true
    },
    {
      id: "api-management-platform",
      title: "API-Driven Management Platform",
      category: "Enterprise System & Integration",
      description: "High-throughput operational platform built for fast querying, multi-entity relationships, and relational MySQL data stores.",
      problem: "Enterprise teams struggled with disparate API endpoints, manual synchronization, and slow data tables that hindered daily workflows.",
      solution: "Built a centralized management platform leveraging React Query for robust caching, optimistic UI states, and structured MySQL relational schemas.",
      role: "Full Stack Developer: Integrated third-party REST services, optimized SQL queries, and engineered filterable data tables.",
      keyDecisions: [
        "Adopted React Query to handle caching, background deduplication, and stale-while-revalidate fetching",
        "Optimized MySQL JOIN queries and pagination to maintain sub-50ms query response times",
        "Engineered custom reusable data tables with client-side sorting and multi-column filtering"
      ],
      techStack: ["React.js", "TypeScript", "Node.js", "MySQL", "React Query", "Material UI"],
      highlights: [
        "Server-state caching cutting unnecessary network requests by over 60%",
        "Complex multi-filter queries with server-side pagination",
        "Zero-layout-shift responsive table design"
      ],
      image: "design_system.jpg",
      featured: true
    }
  ] as ProjectItem[],

  education: {
    degree: "B.Tech in Information Technology",
    institution: "Anna University",
    location: "Erode, Tamil Nadu, India",
    period: "2016 – 2020",
    grade: "CGPA: 6.58 / 10",
    highlights: [
      "Core coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Technologies, Computer Networks",
      "Final Year Project focused on web-based information systems and database operations",
      "Active participant in technical symposiums and university coding events"
    ]
  },

  contact: {
    heading: "Have a project in mind? Let's connect.",
    description: "I'm interested in discussing web development, engineering challenges, and opportunities to build useful digital products.",
    email: "Karthikeyan.g14299@gmail.com",
    phone: "+91 8220932517",
    location: "Coimbatore, Tamil Nadu, India",
    availability: "Open to discussions and new opportunities",
    linkedin: "https://linkedin.com/in/karthikeyan-g",
    github: "https://github.com/karthikeyan-g"
  }
};
