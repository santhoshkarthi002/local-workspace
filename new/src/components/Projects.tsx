import React, { useState } from 'react';
import {
  ExternalLink,
  Layers,
  ArrowRight,
  Info,
  Activity,
  Server,
  Database,
  BarChart2,
  FileEdit,
} from 'lucide-react';
import { projectPlaceholders } from '../data/portfolio';
import type { ProjectItem } from '../types/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/80 bg-[#070b13]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono font-medium tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Engineered Solutions &amp; System Architecture
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            The project architecture cards below reflect demonstrated engineering capabilities across
            IoT telemetry dashboards, enterprise full-stack web applications, and API systems.
          </p>

          {/* Transparent Notice Banner */}
          <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
            <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-slate-200 block">
                Verified Project Data Integration Ready
              </span>
              <p className="text-slate-400">
                These cards are structured templates designed to highlight architecture, technical decisions, and code roles.
                They can be instantly populated with your live repository links and demo URLs in{' '}
                <code className="text-indigo-300 font-mono">src/data/portfolio.ts</code>.
              </p>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectPlaceholders.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#090e1b] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              <div>
                {/* Visual Preview Graphic */}
                <div className="h-48 bg-[#060a12] border-b border-slate-800 relative p-4 flex flex-col justify-between overflow-hidden">
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

                  {/* Header in Preview */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-indigo-300 border border-slate-800">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                      <FileEdit className="w-3 h-3 text-amber-400" />
                      Editable Schema
                    </span>
                  </div>

                  {/* Dynamic Abstract Preview UI */}
                  {project.previewType === 'iot' && (
                    <div className="relative z-10 space-y-2.5 my-auto">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-emerald-400">
                          <Activity className="w-3.5 h-3.5 animate-pulse" /> Live Telemetry Feed
                        </span>
                        <span>99.98% Uptime</span>
                      </div>
                      <div className="h-14 w-full bg-indigo-950/20 border border-indigo-900/40 rounded-lg p-2 flex items-end gap-1.5">
                        <div className="w-1/6 bg-indigo-500/30 rounded-t h-[40%]" />
                        <div className="w-1/6 bg-indigo-500/40 rounded-t h-[65%]" />
                        <div className="w-1/6 bg-indigo-500/60 rounded-t h-[85%]" />
                        <div className="w-1/6 bg-indigo-500/50 rounded-t h-[55%]" />
                        <div className="w-1/6 bg-indigo-500/70 rounded-t h-[90%]" />
                        <div className="w-1/6 bg-blue-400 rounded-t h-[75%]" />
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Gateway: Active</span>
                        <span>Latency: 18ms</span>
                      </div>
                    </div>
                  )}

                  {project.previewType === 'fullstack' && (
                    <div className="relative z-10 space-y-2 my-auto">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-blue-400">
                          <Database className="w-3.5 h-3.5" /> Relational Portal
                        </span>
                        <span>PostgreSQL</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5 font-mono text-[10px]">
                        <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-800">
                          <span>Endpoint</span>
                          <span>Response</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-300">
                          <span>GET /api/v1/auth</span>
                          <span className="text-emerald-400">200 OK</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-300">
                          <span>POST /api/v1/records</span>
                          <span className="text-indigo-400">201 Created</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.previewType === 'api' && (
                    <div className="relative z-10 space-y-2 my-auto">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-violet-400">
                          <Server className="w-3.5 h-3.5" /> API Management Gateway
                        </span>
                        <span>REST / JWT</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                          <div className="text-slate-400">Rate Limit</div>
                          <div className="text-indigo-300 font-bold mt-0.5">1,200 req/m</div>
                        </div>
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                          <div className="text-slate-400">Avg Latency</div>
                          <div className="text-emerald-400 font-bold mt-0.5">24.2 ms</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom bar indicator */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <BarChart2 className="w-3 h-3 text-indigo-400" /> Architecture Blueprint
                    </span>
                    <span className="text-indigo-300 font-medium">Click to inspect</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-2 text-xs leading-relaxed text-slate-300">
                    <p className="line-clamp-2">
                      <strong className="text-slate-200">Problem: </strong>
                      {project.problemStatement}
                    </p>
                    <p className="line-clamp-2">
                      <strong className="text-slate-200">Solution: </strong>
                      {project.solutionOverview}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-indigo-400" />
                      <span>Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-850 text-slate-300 border border-slate-750"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 hover:text-indigo-200 transition-colors cursor-pointer"
                >
                  <span>Specs &amp; Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* Safe indicator: no broken or fake external links */}
                <div className="flex items-center gap-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span
                      className="text-[10px] font-mono text-slate-400 px-2 py-1 rounded bg-slate-850 border border-slate-800"
                      title="Add repository URL in portfolio.ts"
                    >
                      Link: Configurable
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
