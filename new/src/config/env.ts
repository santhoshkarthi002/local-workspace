/**
 * Safe URL formatter that guarantees external web URLs are validly prefixed with https://
 */
export const formatWebUrl = (url?: string): string => {
  if (!url || !url.trim()) return '';
  const trimmed = url.trim();
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }
  return `https://${trimmed}`;
};

/**
 * Global configuration reading from Vite environment variables (VITE_*)
 * with resilient fallback defaults.
 */
export const envConfig = {
  // Social Profiles
  githubUrl: formatWebUrl(
    import.meta.env.VITE_GITHUB_URL || 'https://github.com/placeholder-karthikeyan'
  ),
  githubLabel: import.meta.env.VITE_GITHUB_LABEL || 'github.com/karthikeyan-g',
  isGithubConfigured: Boolean(
    import.meta.env.VITE_GITHUB_URL &&
      !import.meta.env.VITE_GITHUB_URL.includes('placeholder')
  ),

  linkedinUrl: formatWebUrl(
    import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/karthikeyan-ganeshan05'
  ),
  linkedinLabel:
    import.meta.env.VITE_LINKEDIN_LABEL || 'linkedin.com/in/karthikeyan-ganeshan05',
  isLinkedinConfigured: Boolean(
    import.meta.env.VITE_LINKEDIN_URL &&
      !import.meta.env.VITE_LINKEDIN_URL.includes('placeholder')
  ),

  // Direct Contact Endpoints
  email: import.meta.env.VITE_EMAIL || 'santhoshkarthisk005@gmail.com',
  phone: import.meta.env.VITE_PHONE || '+91 8220932517',

  // Site, Resume & Media
  siteUrl: formatWebUrl(import.meta.env.VITE_SITE_URL || 'https://karthikeyan-portfolio.dev'),
  resumeUrl: import.meta.env.VITE_RESUME_URL || '/resume.pdf',
  photoUrl: import.meta.env.VITE_PHOTO_URL || '/logo.jpg',

  // Projects Optional Links
  projects: {
    iot: {
      demoUrl: import.meta.env.VITE_PROJECT_IOT_DEMO_URL
        ? formatWebUrl(import.meta.env.VITE_PROJECT_IOT_DEMO_URL)
        : undefined,
      repoUrl: import.meta.env.VITE_PROJECT_IOT_REPO_URL
        ? formatWebUrl(import.meta.env.VITE_PROJECT_IOT_REPO_URL)
        : undefined,
    },
    fullstack: {
      demoUrl: import.meta.env.VITE_PROJECT_FULLSTACK_DEMO_URL
        ? formatWebUrl(import.meta.env.VITE_PROJECT_FULLSTACK_DEMO_URL)
        : undefined,
      repoUrl: import.meta.env.VITE_PROJECT_FULLSTACK_REPO_URL
        ? formatWebUrl(import.meta.env.VITE_PROJECT_FULLSTACK_REPO_URL)
        : undefined,
    },
    api: {
      demoUrl: import.meta.env.VITE_PROJECT_API_DEMO_URL
        ? formatWebUrl(import.meta.env.VITE_PROJECT_API_DEMO_URL)
        : undefined,
      repoUrl: import.meta.env.VITE_PROJECT_API_REPO_URL
        ? formatWebUrl(import.meta.env.VITE_PROJECT_API_REPO_URL)
        : undefined,
    },
  },
};
