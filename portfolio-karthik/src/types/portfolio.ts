export interface PersonalInfo {
  name: string;
  role: string;
  logo: string;
  photo?: string;
  eyebrow: string;
  headline: string;
  description: string;
  experienceYears: string;
  experienceNote: string;
  email: string;
  phone: string;
  location: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    location: string;
    period: string;
    cgpa: string;
    cgpaScale: string;
    highlights: string[];
  };
  socials: {
    github: {
      url: string;
      label: string;
      isPlaceholder: boolean;
    };
    linkedin: {
      url: string;
      label: string;
      isPlaceholder: boolean;
    };
    email: string;
    phone: string;
  };
  resume: {
    filename: string;
    available: boolean;
    path: string;
  };
  heroTechStack: Array<{
    name: string;
    category: 'frontend' | 'backend' | 'database';
  }>;
}

export type SkillCategoryKey =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'state'
  | 'visualization'
  | 'tools'
  | string;

export interface SkillItem {
  name: string;
  category: SkillCategoryKey;
  isPrimary?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  type?: string;
  responsibilities: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface ProjectDecision {
  topic: string;
  rationale: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  problemStatement: string;
  solutionOverview: string;
  roleAndResponsibilities: string[];
  technologies: string[];
  keyDecisions: ProjectDecision[];
  previewType: 'iot' | 'fullstack' | 'api';
  githubUrl?: string;
  liveDemoUrl?: string;
  isPlaceholder: boolean;
  placeholderNotice?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
