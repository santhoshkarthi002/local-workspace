import React from 'react';
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  FileText,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 0-3.3 1.66 1.66 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

interface FooterProps {
  onOpenResumeModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050811]/90 backdrop-blur-2xl text-slate-400 pt-16 pb-12 overflow-hidden">
      {/* Top radiant cyan glow accent divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      {/* Ambient background glow spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-cyan-500/[0.07] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.08]">
          {/* Column 1: Identity & Availability (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-cyan-400/30 bg-slate-900 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,212,255,0.25)]">
                <img
                  src={personalInfo.logo}
                  alt={`${personalInfo.name} Logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span>{personalInfo.name}</span>
                </h3>
                <p className="text-xs text-cyan-400 font-medium tracking-wide">
                  {personalInfo.role} · Web Specialist
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Engineering responsive client portals, robust RESTful APIs, and scalable web
              applications with clean, maintainable architecture.
            </p>

            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Open to engineering roles &amp; projects</span>
            </div>
          </div>

          {/* Column 2: Navigation Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Navigation</span>
            </div>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-cyan-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Channels (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Direct Contact
            </div>
            <div className="space-y-3 text-xs">
              {/* Location */}
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Location</div>
                  <span className="text-slate-300">{personalInfo.location}</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-slate-300 hover:text-cyan-300 transition-colors truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Telephone</div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-slate-300 hover:text-cyan-300 transition-colors block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Profiles & Resume Action (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Profiles &amp; Document
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={personalInfo.socials.github.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-cyan-400/40 text-slate-300 hover:text-white text-xs transition-all group backdrop-blur-sm shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-cyan-300 transition-colors" />
              </a>

              <a
                href={personalInfo.socials.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-cyan-400/40 text-slate-300 hover:text-white text-xs transition-all group backdrop-blur-sm shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-cyan-300 transition-colors" />
              </a>
            </div>

            {/* Resume Trigger Card */}
            {onOpenResumeModal && (
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="w-full flex items-center justify-between p-3 rounded-xl glass-card hover:border-cyan-400/40 text-slate-200 hover:text-white transition-all cursor-pointer group shadow-sm text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Curriculum Vitae</div>
                    <div className="text-[11px] text-slate-400">View Experience &amp; Skills</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all" />
              </button>
            )}
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span>© 2026 {personalInfo.name}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Built with React 19, TypeScript &amp; Tailwind CSS</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-pill hover:border-cyan-400/40 text-slate-300 hover:text-white text-xs font-medium transition-all cursor-pointer shadow-sm group"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
