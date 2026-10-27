import React from 'react';
import {
  X,
  Layers,
  Cpu,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Code2,
  FileCode,
  ShieldCheck,
} from 'lucide-react';
import type { ProjectItem } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] glass-card rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden flex flex-col text-slate-200 border border-white/[0.12]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-slate-950/70 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-sky-500/10 border border-white/[0.12] flex items-center justify-center text-cyan-300 shadow-sm">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block">
                {project.category}
              </span>
              <h3 id="modal-project-title" className="text-base sm:text-lg font-bold text-white tracking-tight">
                {project.title}
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

        {/* Modal Body Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
          {/* Placeholder Banner Notice */}
          {project.isPlaceholder && (
            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-900/60 flex items-start gap-3 text-xs text-cyan-200">
              <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-cyan-300">
                  Editable Architecture Template
                </span>
                <span>
                  This schema represents practical project capabilities. Update the centralized data in{' '}
                  <code className="text-cyan-300 font-mono px-1 py-0.5 bg-slate-900 rounded">
                    src/data/portfolio.ts
                  </code>{' '}
                  with verified client or open-source repository URLs.
                </span>
              </div>
            </div>
          )}

          {/* Problem Statement */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <FileCode className="w-3.5 h-3.5 text-blue-400" />
              <span>Problem Statement</span>
            </h4>
            <div className="p-4 rounded-xl bg-[#080d19] border border-slate-800/80 text-slate-300 leading-relaxed text-sm">
              {project.problemStatement}
            </div>
          </div>

          {/* Solution Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Solution Overview</span>
            </h4>
            <div className="p-4 rounded-xl bg-[#080d19] border border-slate-800/80 text-slate-300 leading-relaxed text-sm">
              {project.solutionOverview}
            </div>
          </div>

          {/* Role and Responsibilities */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Role &amp; Engineering Contributions</span>
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.roleAndResponsibilities.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-850 text-slate-300 text-xs sm:text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Technical Decisions */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Key Technical Decisions</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyDecisions.map((decision, dIdx) => (
                <div
                  key={dIdx}
                  className="p-3.5 rounded-xl bg-[#080d19] border border-slate-800/80 space-y-1"
                >
                  <div className="font-semibold text-white text-xs">
                    {decision.topic}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    {decision.rationale}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Technologies &amp; Libraries</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-850 text-slate-200 border border-slate-750"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#080c16] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-400 font-medium">
            {project.isPlaceholder ? 'Placeholder Status: Editable Data Model' : 'Verified Project'}
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-white font-medium"
              >
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-850/80 text-slate-400 border border-slate-800 text-xs font-medium">
                Repo: Awaiting Link
              </span>
            )}

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg btn-theme-gradient text-white font-medium shadow-sm shadow-cyan-600/25"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-850/80 text-slate-400 border border-slate-800 text-xs font-medium">
                Demo: Configurable
              </span>
            )}

            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
