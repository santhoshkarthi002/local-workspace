import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './hooks/useTheme';
import { ThemeCustomizerModal } from './components/ThemeCustomizerModal';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { ThemeToggleFloat } from './components/ThemeToggleFloat';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

const AppContent: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const { currentThemeMeta } = useTheme();

  return (
    <div className="min-h-screen text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden transition-colors duration-500">
      {/* Dynamic ambient mesh gradient orbs based on active theme */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle tech grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        {/* Top-center dynamic glow orb */}
        <div
          className="absolute -top-44 left-1/2 -translate-x-1/2 w-[980px] h-[600px] blur-[150px] rounded-full opacity-25 transition-all duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${currentThemeMeta.accentColor}, ${currentThemeMeta.secondaryColor}, transparent 70%)`,
          }}
        />
        {/* Mid-left dynamic glow orb */}
        <div
          className="absolute top-[32%] -left-52 w-[650px] h-[650px] blur-[160px] rounded-full opacity-20 transition-all duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${currentThemeMeta.secondaryColor}, transparent 70%)`,
          }}
        />
        {/* Mid-right dynamic glow orb */}
        <div
          className="absolute top-[62%] -right-52 w-[700px] h-[700px] blur-[170px] rounded-full opacity-20 transition-all duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${currentThemeMeta.accentColor}, transparent 70%)`,
          }}
        />
      </div>

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Single-Page Sections */}
      <main className="flex-grow">
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Theme Customizer Modal */}
      <ThemeCustomizerModal />

      {/* Floating Theme Customizer Shortcut */}
      <ThemeToggleFloat />

      {/* Floating Scroll to Top button */}
      <ScrollToTop />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
