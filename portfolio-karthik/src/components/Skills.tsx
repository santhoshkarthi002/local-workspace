import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import {
  Code2,
  Server,
  Database,
  Workflow,
  BarChart3,
  GitBranch,
  Layers,
  Check,
  Filter,
} from 'lucide-react';
import { skills, categoryMetadata, filterSkillsByCategory } from '../data/portfolio';

const categoryIcons: Record<string, React.FC<{ className?: string }>> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  databases: Database,
  state: Workflow,
  'state-fetching': Workflow,
  visualization: BarChart3,
  tools: GitBranch,
};

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Dynamically extract unique keys from the master skills array
  const filterTabs = useMemo(() => {
    const keys = Array.from(new Set(skills.map((s) => s.category.toLowerCase())));
    return [
      { id: 'all', label: 'All Categories', count: skills.length },
      ...keys.map((key) => {
        const meta = categoryMetadata[key];
        const count = skills.filter((s) => s.category.toLowerCase() === key).length;
        return {
          id: key,
          label: meta ? meta.title : key.charAt(0).toUpperCase() + key.slice(1),
          count,
        };
      }),
    ];
  }, []);

  // Filter skills based on key: 'frontend', 'backend', etc.
  const displayedCategories = useMemo(() => {
    const uniqueKeys = Array.from(new Set(skills.map((s) => s.category.toLowerCase())));
    const targetKeys =
      activeFilter === 'all'
        ? uniqueKeys
        : uniqueKeys.filter((k) => k === activeFilter.toLowerCase());

    return targetKeys.map((key) => {
      const meta = categoryMetadata[key] || {
        title: key.charAt(0).toUpperCase() + key.slice(1),
        description: `Technologies and tooling for ${key}.`,
      };
      return {
        id: key,
        title: meta.title,
        description: meta.description,
        skills: filterSkillsByCategory(key),
      };
    });
  }, [activeFilter]);

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/80 bg-[#070b13]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
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
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal direction="up" delay={0.1} distance={15} className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800/80">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </div>

          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'btn-theme-gradient text-white'
                    : 'glass-pill text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            );
          })}
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category, idx) => {
              const Icon = categoryIcons[category.id] || Layers;
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 12 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl glass-card glass-card-hover p-6 flex flex-col justify-between group h-full"
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-sky-500/15 to-blue-500/10 border border-white/[0.12] flex items-center justify-center text-cyan-300 group-hover:text-cyan-200 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.35)] transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-white tracking-tight">
                            {category.title}
                          </h3>
                          <span className="text-xs font-medium text-slate-400">
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
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                              skill.isPrimary
                                ? 'bg-gradient-to-r from-cyan-950/80 via-sky-950/70 to-blue-950/80 text-cyan-200 border border-cyan-500/40 font-semibold shadow-sm shadow-cyan-900/30'
                                : 'bg-white/[0.04] text-slate-300 border border-white/[0.08] hover:border-white/20 hover:text-white hover:bg-white/[0.07] backdrop-blur-sm'
                            }`}
                          >
                            {skill.isPrimary && (
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
                            )}
                            <span>{skill.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer note on primary badge */}
                    <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        Practical Project Experience
                      </span>
                      <span className="text-slate-400">Verified</span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
