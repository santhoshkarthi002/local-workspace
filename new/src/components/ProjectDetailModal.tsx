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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0b101e] border border-slate-750 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#080c16]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-950/70 border border-indigo-800/60 flex items-center justify-center text-indigo-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 block">
                {project.category}
              </span>
              <h3 id="modal-project-title" className="text-base sm:text-lg font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
          {/* Placeholder Banner Notice */}
          {project.isPlaceholder && (
            <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-900/60 flex items-start gap-3 text-xs text-indigo-200">
              <AlertCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-indigo-300">
                  Editable Architecture Template
                </span>
                <span>
                  This schema represents practical project capabilities. Update the centralized data in{' '}
                  <code className="text-indigo-300 font-mono px-1 py-0.5 bg-slate-900 rounded">
                    src/data/portfolio.ts
                  </code>{' '}
                  with verified client or open-source repository URLs.
                </span>
              </div>
            </div>
          )}

          {/* Problem Statement */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <FileCode className="w-3.5 h-3.5 text-blue-400" />
              <span>Problem Statement</span>
            </h4>
            <div className="p-4 rounded-xl bg-[#080d19] border border-slate-800/80 text-slate-300 leading-relaxed">
              {project.problemStatement}
            </div>
          </div>

          {/* Solution Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Solution Overview</span>
            </h4>
            <div className="p-4 rounded-xl bg-[#080d19] border border-slate-800/80 text-slate-300 leading-relaxed">
              {project.solutionOverview}
            </div>
          </div>

          {/* Role and Responsibilities */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Role &amp; Engineering Contributions</span>
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.roleAndResponsibilities.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-850 text-slate-300 text-xs sm:text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Technical Decisions */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-violet-400" />
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
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Technologies &amp; Libraries</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-850 text-slate-300 border border-slate-750"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#080c16] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-400 font-mono">
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
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-850/80 text-slate-400 border border-slate-800 font-mono text-[11px]">
                Repo: Awaiting Link
              </span>
            )}

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-sm shadow-indigo-600/30"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-850/80 text-slate-400 border border-slate-800 font-mono text-[11px]">
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
