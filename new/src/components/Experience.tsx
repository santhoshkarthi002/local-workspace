import React from 'react';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Building,
  Sparkles,
  Layers,
} from 'lucide-react';
import { experienceData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono font-medium tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Verified professional track record spanning frontend engineering, IoT data visualization dashboards,
            and full-stack software development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 lg:pl-10 border-l border-slate-800 space-y-12">
          {experienceData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Connector Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] lg:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  item.isCurrent
                    ? 'bg-indigo-600 border-indigo-400 shadow-md shadow-indigo-600/40 text-white'
                    : 'bg-[#080c14] border-slate-700 text-slate-400 group-hover:border-indigo-400'
                }`}
              >
                {item.isCurrent ? (
                  <Sparkles className="w-3 h-3 text-white" />
                ) : (
                  <Briefcase className="w-3 h-3 text-slate-400" />
                )}
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl bg-[#090e1b] border border-slate-800/90 p-6 sm:p-8 hover:border-slate-700 transition-all duration-200 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-slate-800/80">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      {item.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-950/70 text-emerald-300 border border-emerald-800/60">
                          Current Role
                        </span>
                      )}
                      {item.type && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-slate-850 border border-slate-750">
                          {item.type}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-indigo-300 font-medium">
                      <Building className="w-4 h-4 text-indigo-400" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-850 border border-slate-750 text-slate-300 text-xs font-mono shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Verified Responsibilities */}
                <div className="mt-6 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Responsibilities &amp; Contributions
                  </div>
                  <ul className="space-y-2.5">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Stack Tags */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-slate-800/70 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5" />
                      Stack:
                    </span>
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
