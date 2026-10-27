import React from 'react';
import {
  Code,
  Layout,
  Cpu,
  Database,
  Gauge,
  Users2,
  Boxes,
  Network,
  CheckCircle2,
  Building2,
  GraduationCap,
  MapPin,
} from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolio';

const icons = [
  Layout,
  Boxes,
  Code,
  Network,
  Cpu,
  Database,
  Gauge,
  Users2,
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono font-medium tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            Engineering thoughtful digital experiences.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            I am a Full Stack Developer with 4+ years of hands-on experience designing responsive web
            applications, building resilient backend services, and structuring relational databases. My
            approach centers on clean architecture, predictable component state, and end-to-end type safety.
          </p>
        </div>

        {/* Two-Column Grid: Narrative & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Main Narrative Card */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#0b101e] border border-slate-800/90 shadow-xl space-y-5">
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Bridging Intuitive Interfaces with Reliable Backend Systems
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Throughout my work across consulting and IoT technology environments, I have helped deliver
              production features by translating user requirements into maintainable TypeScript and React codebases.
              From complex telemetry dashboards with high-frequency updates to multi-tier business portals,
              I focus on creating interfaces that feel effortless to the user while remaining robust under the hood.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              On the server side, I design REST APIs using Node.js and Express.js, handling request validation,
              token-based authentication, and structured database operations in PostgreSQL and MySQL. I prioritize
              practical engineering over complexity, optimizing critical query paths and structuring modular
              services that other engineers can readily extend.
            </p>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-y-3 gap-x-6 text-xs text-slate-400 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Verified Employment Track Record
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                End-to-End Type Safety
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                Zero Fake Metrics or Claims
              </span>
            </div>
          </div>

          {/* Quick Profile Summary Card */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#090e1b] border border-slate-800 space-y-5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800">
              Profile Summary
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <div className="text-slate-400 font-mono text-[11px]">FULL NAME</div>
                <div className="text-slate-200 font-medium text-sm mt-0.5">{personalInfo.name}</div>
              </div>

              <div>
                <div className="text-slate-400 font-mono text-[11px]">PRIMARY ROLE</div>
                <div className="text-slate-200 font-medium text-sm mt-0.5">{personalInfo.role}</div>
              </div>

              <div>
                <div className="text-slate-400 font-mono text-[11px]">LOCATION</div>
                <div className="text-slate-200 font-medium text-sm mt-0.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div>
                <div className="text-slate-400 font-mono text-[11px]">ACADEMIC BACKGROUND</div>
                <div className="text-slate-200 font-medium text-sm mt-0.5 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  <span>B.Tech in IT (Anna University)</span>
                </div>
              </div>

              <div>
                <div className="text-slate-400 font-mono text-[11px]">CURRENT ORGANIZATION</div>
                <div className="text-slate-200 font-medium text-sm mt-0.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-violet-400" />
                  <span>Praxio IT Consulting Pvt. Ltd.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#experience"
                className="w-full inline-flex items-center justify-center py-2 px-3 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-750 text-xs font-medium transition-colors"
              >
                View Career Timeline &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* 8 Core Engineering Capabilities Grid */}
        <div className="mt-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white tracking-tight">
              Core Engineering Focus Areas
            </h3>
            <span className="text-xs font-mono text-slate-400">
              8 Competency Domains
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutHighlights.map((item, idx) => {
              const IconComponent = icons[idx] || Code;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-[#090e1b]/80 border border-slate-800/80 hover:border-indigo-500/30 hover:bg-[#0c1324] transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center text-indigo-400 mb-3.5 group-hover:text-indigo-300 group-hover:scale-105 transition-all">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
