import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { About } from './components/About';
import { SkillsShowcase } from './components/SkillsShowcase';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CheckCircle2 } from 'lucide-react';
import './App.css';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return (saved as 'dark' | 'light') || 'dark';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      showToast('Email address copied to clipboard!');
      setTimeout(() => setEmailCopied(false), 3000);
    }).catch(() => {
      showToast(`Copy failed: ${email}`);
    });
  };

  return (
    <div className="portfolio-app-root">
      {/* Sticky Top Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Single-Page Sections */}
      <main className="main-content">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onCopyEmail={handleCopyEmail}
          emailCopied={emailCopied}
        />

        <Metrics />

        <About />

        <SkillsShowcase />

        <ExperienceTimeline />

        <ProjectsShowcase />

        <Education />

        <Contact
          onCopyEmail={handleCopyEmail}
          emailCopied={emailCopied}
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <aside className="toast-container" role="status" aria-live="polite">
          <div className="toast">
            <CheckCircle2 size={18} color="var(--accent-cyan)" />
            <span>{toastMessage}</span>
          </div>
        </aside>
      )}
    </div>
  );
}

export default App;
