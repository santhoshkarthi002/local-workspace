import React, { useState } from 'react';
import {
  Code2,
  Server,
  Database,
  Workflow,
  BarChart3,
  GitBranch,
  Check,
  Filter,
} from 'lucide-react';
import { skillCategories } from '../data/portfolio';

const categoryIcons: Record<string, React.FC<{ className?: string }>> = {
  frontend: Code2,
  backend: Server,
  databases: Database,
  'state-fetching': Workflow,
  visualization: BarChart3,
  tools: GitBranch,
};

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredCategories =
    activeFilter === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeFilter);

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/80 bg-[#070b13]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-mono font-medium tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Tools and technologies I use to build scalable systems.
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Organized by functional domains. Each tool represents practical, applied project experience
            across production web development, API contracts, and relational persistence.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800/80">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </div>

          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border border-slate-800'
            }`}
          >
            All Categories ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === category.id
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border border-slate-800'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Code2;
            return (
              <div
                key={category.id}
                className="rounded-2xl bg-[#090e1b] border border-slate-800/90 p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-850 border border-slate-750 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:border-indigo-500/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} Technologies
                      </span>
                    </div>
                  </div>

                  {/* Category Subtitle */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {category.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          skill.isPrimary
                            ? 'bg-indigo-950/60 text-indigo-200 border border-indigo-800/60 font-semibold shadow-sm shadow-indigo-950/40'
                            : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        {skill.isPrimary && (
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer note on primary badge */}
                <div className="mt-6 pt-4 border-t border-slate-850/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-400" />
                    Practical Project Experience
                  </span>
                  <span className="text-slate-400">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
