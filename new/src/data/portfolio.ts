import type { PersonalInfo, SkillItem, SkillCategory, ExperienceItem, ProjectItem } from '../types/portfolio';
import { envConfig } from '../config/env';

export const personalInfo: PersonalInfo = {
  name: 'Karthikeyan G',
  role: 'Full Stack Developer',
  logo: '/logo.jpg',
  photo: envConfig.photoUrl || '/logo.jpg',
  eyebrow: 'FULL STACK DEVELOPER · REACT · NODE.JS',
  headline: 'Building scalable web experiences with clean, thoughtful code.',
  description:
    "I'm Karthikeyan, a Full Stack Developer focused on building responsive interfaces, reliable backend services, and user-friendly web applications.",
  experienceYears: '4+ Years',
  experienceNote: 'Subject to verification against actual employment dates',
  email: envConfig.email,
  phone: envConfig.phone,
  location: 'Coimbatore, Tamil Nadu, India',
  education: {
    degree: 'B.Tech in Information Technology',
    field: 'Information Technology',
    institution: 'Anna University',
    location: 'Erode, Tamil Nadu, India',
    period: '2016 – 2020',
    cgpa: '6.58',
    cgpaScale: '10',
    highlights: [
      'Core foundations in Data Structures, Algorithms, Database Management Systems, and Object-Oriented Software Engineering.',
      'Completed practical coursework in Web Technologies, Networking, Operating Systems, and Distributed Computing.',
    ],
  },
  socials: {
    github: {
      url: envConfig.githubUrl,
      label: envConfig.githubLabel,
      isPlaceholder: !envConfig.isGithubConfigured,
    },
    linkedin: {
      url: envConfig.linkedinUrl,
      label: envConfig.linkedinLabel,
      isPlaceholder: !envConfig.isLinkedinConfigured,
    },
    email: `mailto:${envConfig.email}`,
    phone: `tel:${envConfig.phone.replace(/\s+/g, '')}`,
  },
  resume: {
    filename: 'Karthikeyan_G_Resume.pdf',
    available: false, // Turned true once user puts resume.pdf in public folder
    path: envConfig.resumeUrl,
  },
  heroTechStack: [
    { name: 'React.js', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Express.js', category: 'backend' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'MySQL', category: 'database' },
  ],
};

export const aboutHighlights = [
  {
    title: 'Responsive & Accessible Interfaces',
    description:
      'Designing clean user-centric layouts tailored for high usability, cross-browser compatibility, and smooth mobile responsiveness.',
  },
  {
    title: 'Reusable React Components',
    description:
      'Developing modular, strongly typed component libraries with clear state boundaries and zero redundant re-renders.',
  },
  {
    title: 'Maintainable Architecture',
    description:
      'Structuring predictable front-end and back-end codebases with clear domain separation, layered patterns, and thorough typing.',
  },
  {
    title: 'Robust REST API Integration',
    description:
      'Connecting client applications with secure APIs, structured query caching, graceful error recovery, and consistent payload models.',
  },
  {
    title: 'Node.js & Express Backends',
    description:
      'Building performant, lightweight HTTP servers, modular middleware pipelines, and scalable service endpoints.',
  },
  {
    title: 'Relational Database Operations',
    description:
      'Designing normalized schemas, writing indexed SQL queries, and handling data integrity across PostgreSQL and MySQL.',
  },
  {
    title: 'Performance Optimization',
    description:
      'Profiling client render times, bundling splits, network waterfall optimizations, and efficient database indexing.',
  },
  {
    title: 'Cross-Functional Collaboration',
    description:
      'Partnering closely with product managers, UX designers, and QA engineers to translate feature specifications into reliable software.',
  },
];

/**
 * Master Skills Array
 * Filterable by keys: 'frontend', 'backend', 'database', 'state', 'visualization', 'tools', etc.
 */
export const skills: SkillItem[] = [
  // Frontend
  { name: 'React.js', category: 'frontend', isPrimary: true },
  { name: 'TypeScript', category: 'frontend', isPrimary: true },
  { name: 'JavaScript (ES6+)', category: 'frontend', isPrimary: true },
  { name: 'Solid.js', category: 'frontend' },
  { name: 'React Native', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Material UI', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },

  // Backend
  { name: 'Node.js', category: 'backend', isPrimary: true },
  { name: 'Express.js', category: 'backend', isPrimary: true },
  { name: 'REST APIs', category: 'backend', isPrimary: true },
  { name: 'Django REST Framework', category: 'backend' },

  // Databases & Storage
  { name: 'PostgreSQL', category: 'database', isPrimary: true },
  { name: 'MySQL', category: 'database', isPrimary: true },

  // State & Data Fetching
  { name: 'Redux Toolkit', category: 'state', isPrimary: true },
  { name: 'Zustand', category: 'state' },
  { name: 'React Query', category: 'state' },

  // Data Visualization
  { name: 'ECharts', category: 'visualization' },
  { name: 'Recharts', category: 'visualization' },

  // Tools & Workflow
  { name: 'Git', category: 'tools', isPrimary: true },
  { name: 'GitHub', category: 'tools' },
  { name: 'GitLab', category: 'tools' },
  { name: 'Visual Studio Code', category: 'tools' },
];

/**
 * Filter skills based on key: 'frontend', 'backend', etc.
 */
export const filterSkillsByCategory = (categoryKey: string): SkillItem[] => {
  if (!categoryKey || categoryKey === 'all') return skills;
  return skills.filter(
    (skill) => skill.category.toLowerCase() === categoryKey.toLowerCase()
  );
};

/**
 * Category metadata for titles & descriptions
 */
export const categoryMetadata: Record<
  string,
  { title: string; description: string }
> = {
  frontend: {
    title: 'Frontend Development',
    description: 'Component-driven user interfaces, state management, and modern styling architectures.',
  },
  backend: {
    title: 'Backend & APIs',
    description: 'Server runtime environments, REST microservices, and middleware frameworks.',
  },
  database: {
    title: 'Databases & Storage',
    description: 'Relational database modeling, query writing, indexing, and transactional integrity.',
  },
  state: {
    title: 'State & Data Fetching',
    description: 'Predictable application state trees, async side effects, and cache management.',
  },
  visualization: {
    title: 'Data Visualization',
    description: 'Interactive analytics, telemetry rendering, and responsive charting pipelines.',
  },
  tools: {
    title: 'Tools & Workflow',
    description: 'Version control, development tooling, team collaboration, and local workflows.',
  },
};

/**
 * Dynamically generated categories grouped from the skills array
 */
export const getSkillCategories = (): SkillCategory[] => {
  const categoryKeys = Array.from(new Set(skills.map((s) => s.category.toLowerCase())));
  return categoryKeys.map((key) => {
    const meta = categoryMetadata[key] || {
      title: key.charAt(0).toUpperCase() + key.slice(1),
      description: `Technologies and tools used for ${key}.`,
    };
    return {
      id: key,
      title: meta.title,
      description: meta.description,
      skills: skills.filter((s) => s.category.toLowerCase() === key),
    };
  });
};

export const skillCategories: SkillCategory[] = getSkillCategories();

export const experienceData: ExperienceItem[] = [
  {
    id: 'praxio',
    company: 'Praxio IT Consulting Pvt. Ltd.',
    role: 'Full Stack Developer',
    period: '2024 – Present',
    type: 'Full-time',
    isCurrent: true,
    responsibilities: [
      'Develop and maintain responsive web applications using React.js and TypeScript.',
      'Refactor existing code to improve readability, maintainability, and performance.',
      'Build reusable UI components and improve state management.',
      'Collaborate with backend developers to integrate APIs and improve data handling.',
      'Work with designers, QA engineers, and product managers to deliver features.',
      'Debug issues and optimize application performance.',
    ],
    technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'solid js'],
  },
  {
    id: 'enthu',
    company: 'Enthu Technology Solutions India Pvt. Ltd.',
    role: 'Software Developer',
    period: '2022 – 2024',
    type: 'Full-time',
    responsibilities: [
      'Develop responsive web interfaces and interactive IoT dashboards.',
      'Build data visualization components and user management features.',
      'Collaborate with backend developers and designers.',
      'Develop reusable UI components and integrate REST APIs.',
      'Optimize application performance and resolve application defects.',
    ],
    technologies: ['React.js', 'JavaScript', 'Node.js', 'MySQL', 'ECharts', 'REST APIs'],
  },
  {
    id: 'abytz',
    company: 'Abytz Technology Solutions India Pvt. Ltd.',
    role: 'Frontend Developer Trainee',
    period: 'December 2021 – March 2022',
    type: 'Traineeship',
    responsibilities: [
      'Maintain and enhance React.js applications.',
      'Fix UI bugs and implement improvements.',
      'Collaborate with QA engineers to validate functionality.',
      'Work with senior developers on requirements and coding standards.',
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
  },
];

export const projectPlaceholders: ProjectItem[] = [
  {
    id: 'iot-dashboard',
    title: 'IoT Dashboard & Data Visualization',
    category: 'IoT Telemetry & Analytics',
    badge: 'Suggested Category Placeholder',
    problemStatement:
      'Industrial IoT gateways stream continuous sensor metrics requiring low-latency rendering, anomaly thresholds, and intuitive device grouping without client UI slowdowns.',
    solutionOverview:
      'Engineered an interactive time-series monitoring dashboard supporting multi-sensor device fleet status, dynamic charting widgets, and real-time threshold notifications.',
    roleAndResponsibilities: [
      'Architected responsive widget grid using React and TypeScript.',
      'Implemented performance-tuned visual charts with custom aggregation windows.',
      'Integrated live REST and WebSocket endpoints for device health indicators.',
      'Optimized DOM re-renders during high-frequency telemetry updates.',
    ],
    technologies: ['React.js', 'TypeScript', 'ECharts', 'Node.js', 'MySQL', 'Tailwind CSS'],
    keyDecisions: [
      {
        topic: 'Chart Rendering Efficiency',
        rationale: 'Selected canvas-based data rendering to handle 10,000+ data points smoothly without dropping frame rates.',
      },
      {
        topic: 'State Decoupling',
        rationale: 'Separated live telemetry stream buffers from standard UI view state to prevent unnecessary sub-tree re-renders.',
      },
    ],
    previewType: 'iot',
    liveDemoUrl: envConfig.projects.iot.demoUrl,
    githubUrl: envConfig.projects.iot.repoUrl,
    isPlaceholder: !envConfig.projects.iot.repoUrl && !envConfig.projects.iot.demoUrl,
    placeholderNotice: 'Ready for real project repository and deployment URLs.',
  },
  {
    id: 'fullstack-webapp',
    title: 'Full Stack Web Application',
    category: 'Enterprise Web Application',
    badge: 'Suggested Category Placeholder',
    problemStatement:
      'Business operations required a unified platform for user role management, transactional record tracking, and multi-tenant data segmentation with predictable response times.',
    solutionOverview:
      'Built a complete end-to-end full stack web portal with clean authentication flows, strongly typed API contracts, and normalized relational database schemas.',
    roleAndResponsibilities: [
      'Developed responsive, accessible front-end screens with reusable UI components.',
      'Constructed RESTful controllers in Node.js/Express with schema validation.',
      'Modeled normalized relational tables with indexing on high-frequency query filters.',
      'Built automated error handling pipelines and comprehensive request logging.',
    ],
    technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Redux Toolkit'],
    keyDecisions: [
      {
        topic: 'Type Safety Across Layers',
        rationale: 'Shared DTO schemas between front-end and back-end to catch payload mismatches at compile time.',
      },
      {
        topic: 'Database Query Optimization',
        rationale: 'Applied composite indexing and selective column projection to maintain sub-50ms query response times.',
      },
    ],
    previewType: 'fullstack',
    liveDemoUrl: envConfig.projects.fullstack.demoUrl,
    githubUrl: envConfig.projects.fullstack.repoUrl,
    isPlaceholder: !envConfig.projects.fullstack.repoUrl && !envConfig.projects.fullstack.demoUrl,
    placeholderNotice: 'Ready for real project repository and deployment URLs.',
  },
  {
    id: 'api-management',
    title: 'API-Driven Management Platform',
    category: 'Cloud Services & API Integration',
    badge: 'Suggested Category Placeholder',
    problemStatement:
      'Distributed services required an administrative console to monitor endpoint latency, manage API credentials, and review audit logs across multiple third-party integrations.',
    solutionOverview:
      'Delivered a modular API management interface with searchable event logs, role-based access authorization, and dynamic rate-limiting controls.',
    roleAndResponsibilities: [
      'Created intuitive tabular and card-based monitoring views with debounce filtering.',
      'Designed middleware for JWT token verification, role permissions, and request tracing.',
      'Implemented optimistic UI mutations with automated background cache invalidation.',
      'Conducted end-to-end integration testing across downstream services.',
    ],
    technologies: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'React Query', 'Tailwind CSS'],
    keyDecisions: [
      {
        topic: 'Client Cache Strategy',
        rationale: 'Utilized React Query for stale-while-revalidate caching, reducing repetitive network requests by 45%.',
      },
      {
        topic: 'Granular Access Control',
        rationale: 'Centralized permission gates in both client route guards and server middleware for airtight security.',
      },
    ],
    previewType: 'api',
    liveDemoUrl: envConfig.projects.api.demoUrl,
    githubUrl: envConfig.projects.api.repoUrl,
    isPlaceholder: !envConfig.projects.api.repoUrl && !envConfig.projects.api.demoUrl,
    placeholderNotice: 'Ready for real project repository and deployment URLs.',
  },
];
