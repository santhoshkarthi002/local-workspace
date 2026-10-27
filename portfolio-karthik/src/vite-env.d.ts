/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_URL?: string;
  readonly VITE_GITHUB_LABEL?: string;
  readonly VITE_LINKEDIN_URL?: string;
  readonly VITE_LINKEDIN_LABEL?: string;
  readonly VITE_EMAIL?: string;
  readonly VITE_PHONE?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_RESUME_URL?: string;
  readonly VITE_PHOTO_URL?: string;
  readonly VITE_PROJECT_IOT_DEMO_URL?: string;
  readonly VITE_PROJECT_IOT_REPO_URL?: string;
  readonly VITE_PROJECT_FULLSTACK_DEMO_URL?: string;
  readonly VITE_PROJECT_FULLSTACK_REPO_URL?: string;
  readonly VITE_PROJECT_API_DEMO_URL?: string;
  readonly VITE_PROJECT_API_REPO_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
