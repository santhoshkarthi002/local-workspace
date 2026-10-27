import React from 'react';
import {
  X,
  Mail,
  AlertCircle,
  Building,
  GraduationCap,
  Layers,
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleEmailRequest = () => {
    const subject = encodeURIComponent(`Resume Request - ${personalInfo.name}`);
    const body = encodeURIComponent(
      `Hi ${personalInfo.name},\n\nI reviewed your portfolio and would like to request an updated copy of your resume.\n\nBest regards,`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-xl glass-card rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden flex flex-col text-slate-200 border border-white/[0.12]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-slate-950/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20 bg-slate-900 shadow-sm shrink-0">
              <img
                src={personalInfo.photo || personalInfo.logo}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block">
                Official Document Status
              </span>
              <h3 id="resume-modal-title" className="text-base sm:text-lg font-bold text-white tracking-tight">
                Resume &amp; Qualifications
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 text-sm">
          {/* Status Alert */}
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md flex items-start gap-3 text-xs">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-slate-200 block">
                Resume File Setup Notice
              </span>
              <p className="text-slate-400 leading-relaxed">
                As per portfolio guidelines, direct PDF download is activated when your official{' '}
                <code className="text-cyan-300 font-mono">resume.pdf</code> is placed into the{' '}
                <code className="text-cyan-300 font-mono">/public</code> folder.
              </p>
            </div>
          </div>

          {/* Snapshot Summary */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Verified Candidate Snapshot
            </div>
            <div className="p-4 rounded-xl bg-[#080d19] border border-slate-800/80 space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Building className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">
                    Full Stack Developer · 4+ Years Experience
                  </span>
                  <span className="text-slate-400">
                    Praxio IT Consulting (2024–Present) · Enthu Technology (2022–2024) · Abytz Technology (2021–2022)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">
                    B.Tech in Information Technology
                  </span>
                  <span className="text-slate-400">
                    Anna University, Erode (2016–2020) · CGPA: 6.58/10
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800">
                <Layers className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">
                    Primary Core Stack
                  </span>
                  <span className="text-slate-400">
                    React.js, TypeScript, Node.js, Express.js, PostgreSQL, MySQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#080c16] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-400 font-medium text-xs">
            Target File: <code className="text-slate-300 font-mono">public/resume.pdf</code>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleEmailRequest}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg btn-theme-gradient text-white font-medium shadow-sm transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Request CV via Email</span>
            </button>

            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
