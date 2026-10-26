export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  type: 'Full-time' | 'Traineeship';
  summary: string;
  achievements: string[];
  techStack: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  category: 'frameworks' | 'languages' | 'styling' | 'state' | 'dataviz' | 'tools';
  isKeySpecialization?: boolean;
  tag?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
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
    tagline: "Front End Developer • React.js • SolidJS • TypeScript",
    title: "Senior Frontend Engineer",
    experienceYears: "3+",
    phone: "+91 9092314029",
    email: "santhoshkarthisk005@gmail.com",
    location: "Tiruppur, Tamil Nadu, India",
    availability: "Available for new opportunities",
    bio: "Dedicated and detail-oriented Frontend Developer with over 3 years of professional experience, specializing in React.js and SolidJS. Passionate about crafting high-performance, accessible, and pixel-perfect web interfaces with modern reactive architectures.",
    coreStrengths: [
      "Dynamic, responsive, and high-performance web applications",
      "Pixel-perfect UI implementation & Design Systems",
      "Fine-grained reactive state management (SolidJS & React)",
      "RESTful API integration & server-state caching",
      "Clean, scalable TypeScript code & architecture",
      "Performance optimization, code-splitting & memoization"
    ]
  },

  stats: [
    { label: "Years Experience", value: "3+", suffix: "" },
    { label: "Production Companies", value: "4", suffix: "" },
    { label: "Key Tech Stacks", value: "15+", suffix: "" },
    { label: "UI Fidelity & Performance", value: "100%", suffix: "" }
  ],

  skillsCategories: [
    { id: 'all', label: 'All Skills' },
    { id: 'frameworks', label: 'Frameworks & Libs' },
    { id: 'languages', label: 'Languages' },
    { id: 'styling', label: 'UI & Styling' },
    { id: 'state', label: 'State & API' },
    { id: 'dataviz', label: 'Data Visualization' },
    { id: 'tools', label: 'Tools & Workflow' }
  ],

  skills: [
    // Frameworks
    { name: "React.js", level: 95, category: "frameworks", isKeySpecialization: true, tag: "Primary" },
    { name: "SolidJS", level: 90, category: "frameworks", isKeySpecialization: true, tag: "Specialized" },
    { name: "Next.js (Basics)", level: 75, category: "frameworks", isKeySpecialization: false, tag: "SSR/SSG" },
    { name: "React Hook Form", level: 92, category: "frameworks", isKeySpecialization: false, tag: "Forms" },

    // Languages
    { name: "TypeScript", level: 92, category: "languages", isKeySpecialization: true, tag: "Core" },
    { name: "JavaScript (ES6+)", level: 95, category: "languages", isKeySpecialization: true, tag: "Core" },
    { name: "HTML5 & Semantic Web", level: 95, category: "languages", isKeySpecialization: false, tag: "Structure" },

    // UI & Styling
    { name: "CSS3 / Modern CSS", level: 94, category: "styling", isKeySpecialization: false, tag: "Styling" },
    { name: "Material UI (MUI)", level: 88, category: "styling", isKeySpecialization: false, tag: "Components" },
    { name: "Tailwind CSS", level: 88, category: "styling", isKeySpecialization: false, tag: "Utility" },
    { name: "Bootstrap", level: 85, category: "styling", isKeySpecialization: false, tag: "Responsive" },

    // State & API
    { name: "Redux Toolkit (RTK)", level: 90, category: "state", isKeySpecialization: false, tag: "State" },
    { name: "React Query (TanStack)", level: 89, category: "state", isKeySpecialization: false, tag: "Caching" },
    { name: "RESTful APIs Integration", level: 94, category: "state", isKeySpecialization: false, tag: "Networking" },
    { name: "SolidJS Signals & Stores", level: 90, category: "state", isKeySpecialization: true, tag: "Reactivity" },

    // Data Viz
    { name: "Apache ECharts", level: 86, category: "dataviz", isKeySpecialization: false, tag: "IoT / Charts" },
    { name: "Recharts", level: 88, category: "dataviz", isKeySpecialization: false, tag: "Analytics" },

    // Tools
    { name: "Git & GitHub", level: 92, category: "tools", isKeySpecialization: false, tag: "VCS" },
    { name: "GitLab", level: 85, category: "tools", isKeySpecialization: false, tag: "CI/CD" },
    { name: "VS Code & Chrome DevTools", level: 95, category: "tools", isKeySpecialization: false, tag: "Dev Tools" },
    { name: "Vite & Modern Bundlers", level: 90, category: "tools", isKeySpecialization: false, tag: "Tooling" }
  ] as SkillItem[],

  experiences: [
    {
      id: "praxio",
      role: "Front End Developer",
      company: "Praxio",
      location: "Tiruppur / Remote",
      period: "July 2022 – Present",
      startDate: "Jul 2022",
      endDate: "Present",
      isCurrent: true,
      type: "Full-time",
      summary: "Spearheading modern frontend engineering initiatives using React.js and SolidJS to deliver highly responsive, modular, and performance-tuned enterprise web solutions.",
      achievements: [
        "Develop, architect, and maintain scalable web applications utilizing React.js and SolidJS reactive paradigms.",
        "Collaborate seamlessly with cross-functional teams including UI/UX designers, backend engineers, and product managers.",
        "Engineered modular, reusable component libraries integrated with RESTful backend microservices.",
        "Dramatically reduced load times and memory overhead via route lazy loading, asset optimization, and selective memoization.",
        "Drive agile frontend development with sprint planning, daily standups, and retrospective technical reviews."
      ],
      techStack: ["React.js", "SolidJS", "TypeScript", "React Query", "Redux Toolkit", "Material UI", "REST APIs"]
    },
    {
      id: "enthu",
      role: "Front End Developer",
      company: "Enthu Technology Solutions India Pvt Ltd",
      location: "Coimbatore / Tamil Nadu",
      period: "March 2022 – June 2022",
      startDate: "Mar 2022",
      endDate: "Jun 2022",
      isCurrent: false,
      type: "Full-time",
      summary: "Developed mission-critical IoT telemetry dashboards and responsive web portals delivering real-time sensory data streams and role-based administration.",
      achievements: [
        "Created interactive, high-density IoT dashboards featuring real-time data visualizations with Apache ECharts and Recharts.",
        "Designed and implemented robust user management and role-based access control (RBAC) frontend flows.",
        "Delivered pixel-perfect interfaces aligned strictly with enterprise design system specifications.",
        "Optimized frontend runtime efficiency and network payload handling for live-updating sensor streams."
      ],
      techStack: ["React.js", "Apache ECharts", "Recharts", "REST APIs", "JavaScript (ES6+)", "CSS3", "Git"]
    },
    {
      id: "abytz",
      role: "Front End Developer Trainee",
      company: "Abytz Technology Solutions India Pvt Ltd",
      location: "Tamil Nadu",
      period: "December 2021 – March 2022",
      startDate: "Dec 2021",
      endDate: "Mar 2022",
      isCurrent: false,
      type: "Traineeship",
      summary: "Accelerated React.js production proficiency through hands-on feature development, bug triage, and enterprise coding standard mastery.",
      achievements: [
        "Maintained and enhanced feature modules across active client React.js web applications.",
        "Diagnosed edge-case bugs and implemented tested solutions under senior engineer supervision.",
        "Applied component lifecycle management, hook patterns, prop drilling mitigations, and basic Redux state patterns.",
        "Absorbed clean architecture standards, Git branch workflows, and responsive UI methodologies."
      ],
      techStack: ["React.js", "Redux", "JavaScript", "HTML5", "CSS3", "Chrome DevTools"]
    },
    {
      id: "aja",
      role: "Software Developer Trainee",
      company: "Aja Technologiess Pvt Ltd",
      location: "Tamil Nadu",
      period: "October 2020 – January 2021",
      startDate: "Oct 2020",
      endDate: "Jan 2021",
      isCurrent: false,
      type: "Traineeship",
      summary: "Built foundational web development expertise spanning full-stack paradigms, server-side scripting, relational databases, and debugging.",
      achievements: [
        "Participated actively in programming, testing, and debugging server-rendered web applications.",
        "Learned PHP-based web development, MVC architecture principles, and SQL database interactions.",
        "Collaborated under experienced senior software engineers to comprehend full development lifecycle processes."
      ],
      techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "iot-dashboard",
      title: "IoT Telemetry & Industrial Analytics Dashboard",
      category: "Real-Time Systems & Data Viz",
      description: "High-density real-time monitoring interface for IoT device networks, featuring Apache ECharts telemetry, sensor alerts, and RBAC authentication.",
      longDescription: "Engineered for industrial IoT deployments, this dashboard visualizes real-time metrics across hundreds of active gateway devices. Implemented Apache ECharts for sub-second sensor curves, automated threshold alert notifications, and granular role-based access for operations engineers.",
      techStack: ["React.js", "Apache ECharts", "Recharts", "REST APIs", "WebSocket", "Tailwind CSS"],
      highlights: [
        "Sub-100ms real-time metric updates with zero visual stutter",
        "Configurable date range filters and CSV/PDF export capability",
        "Role-Based Access Control (RBAC) securing sensitive controls",
        "Responsive glassmorphic UI matching high-end industrial telemetry standards"
      ],
      image: "iot_dashboard.jpg",
      featured: true
    },
    {
      id: "aurora-design-system",
      title: "Aurora Reactive Enterprise UI & Component Engine",
      category: "Design System & Fine-Grained Reactivity",
      description: "Comprehensive React and SolidJS component library built for high-throughput enterprise SaaS applications with zero unnecessary re-renders.",
      longDescription: "A dual-framework component architecture developed to compare and leverage the best of React hooks and SolidJS fine-grained reactivity. Features reusable datatables, accessible modals, responsive charts, and custom form inputs powered by React Hook Form.",
      techStack: ["React.js", "SolidJS", "TypeScript", "React Hook Form", "CSS Variables", "Redux Toolkit"],
      highlights: [
        "Over 30+ production-ready accessible UI primitives",
        "Fine-grained reactive signals in SolidJS avoiding virtual DOM overhead",
        "Strict TypeScript typing across all component props and slots",
        "Integrated dark and light theme token architecture"
      ],
      image: "design_system.jpg",
      featured: true
    },
    {
      id: "dynamic-form-engine",
      title: "Enterprise Multi-Step Form & Validation Suite",
      category: "Form Architecture & State Management",
      description: "Performant, schema-driven multi-step wizard supporting complex conditional fields, draft caching, and asynchronous validation.",
      longDescription: "Eliminated client-side form performance bottlenecks by pairing React Hook Form with TanStack Query caching. Built to handle enterprise workflows with 50+ fields, dynamic array fields, nested validation rules, and offline autosave recovery.",
      techStack: ["React.js", "React Hook Form", "TypeScript", "React Query", "Material UI"],
      highlights: [
        "Uncontrolled inputs minimizing component re-renders to near zero",
        "Local state persistence preventing accidental data loss during multi-step surveys",
        "Accessible keyboard navigation and screen-reader compliant alerts",
        "Seamless RESTful API submission with optimistic UI states"
      ],
      image: "design_system.jpg",
      featured: false
    }
  ] as ProjectItem[],

  education: {
    degree: "B.Tech – Information Technology",
    institution: "Anna University",
    location: "Erode, Tamil Nadu",
    period: "June 2016 – April 2020",
    grade: "CGPA: 6.58 / 10.0",
    description: "Solid academic foundation in Data Structures, Object-Oriented Programming, Web Technologies, Database Management Systems, and Software Engineering methodologies."
  },

  contact: {
    email: "santhoshkarthisk005@gmail.com",
    phone: "9092314029",
    displayPhone: "+91 90923 14029",
    location: "Tiruppur, Tamil Nadu, India",
    timeZone: "IST (UTC+5:30)",
    socials: [
      { name: "GitHub", url: "https://github.com", icon: "Github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
      { name: "Email", url: "mailto:santhoshkarthisk005@gmail.com", icon: "Mail" }
    ]
  }
};
