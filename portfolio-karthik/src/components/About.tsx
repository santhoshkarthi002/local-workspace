import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
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
        <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
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
        </ScrollReveal>

        {/* Two-Column Grid: Narrative & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Main Narrative Card */}
          <ScrollReveal
            direction="up"
            delay={0.1}
            distance={24}
            className="lg:col-span-8 p-6 sm:p-8 rounded-2xl glass-card space-y-5"
          >
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

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-y-3 gap-x-6 text-xs text-slate-300 font-medium">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Verified Employment Track Record
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                End-to-End Type Safety
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-950/40 border border-sky-800/40 text-sky-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                Zero Fake Metrics or Claims
              </span>
            </div>
          </ScrollReveal>

          {/* Quick Profile Summary Card */}
          <ScrollReveal
            direction="up"
            delay={0.2}
            distance={24}
            className="lg:col-span-4 p-5 sm:p-6 rounded-2xl glass-card space-y-5"
          >
            {/* Visual Portrait / Identity Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-gradient-to-b from-slate-900/90 to-slate-950 group/portrait shadow-xl shadow-cyan-950/40">
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={personalInfo.photo || personalInfo.logo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover group-hover/portrait:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/25 to-transparent pointer-events-none" />

                {/* Floating Availability Status Pill */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span>Available for Hire</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none">
                  <div>
                    <div className="text-white font-bold text-base tracking-tight drop-shadow-md">
                      {personalInfo.name}
                    </div>
                    <div className="text-xs text-cyan-300 font-medium drop-shadow-sm">
                      {personalInfo.role}
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-lg bg-cyan-950/85 border border-cyan-500/40 text-cyan-200 text-[11px] font-semibold backdrop-blur-md shadow-sm">
                    {personalInfo.experienceYears}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs pt-1">
              <div>
                <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">FULL NAME</div>
                <div className="text-slate-200 font-medium text-sm mt-0.5">{personalInfo.name}</div>
              </div>

              <div>
                <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">PRIMARY ROLE</div>
                <div className="text-slate-200 font-medium text-sm mt-0.5">{personalInfo.role}</div>
              </div>

              <div>
                <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">LOCATION</div>
                <div className="text-slate-200 font-medium text-sm mt-0.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div>
                <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">ACADEMIC BACKGROUND</div>
                <div className="text-slate-200 font-medium text-sm mt-0.5 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  <span>B.Tech in IT (Anna University)</span>
                </div>
              </div>

              <div>
                <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">CURRENT ORGANIZATION</div>
                <div className="text-slate-200 font-medium text-sm mt-0.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Praxio IT Consulting Pvt. Ltd.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#experience"
                className="w-full inline-flex items-center justify-center py-2.5 px-3 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-750 text-xs font-semibold transition-colors shadow-sm"
              >
                View Career Timeline &rarr;
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* 8 Core Engineering Capabilities Grid */}
        <div className="mt-8">
          <ScrollReveal direction="up" distance={16} className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white tracking-tight">
              Core Engineering Focus Areas
            </h3>
            <span className="text-xs font-medium text-slate-400">
              8 Competency Domains
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutHighlights.map((item, idx) => {
              const IconComponent = icons[idx] || Code;
              return (
                <ScrollReveal
                  key={item.title}
                  delay={idx * 0.05}
                  direction="up"
                  distance={20}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-2xl glass-card glass-card-hover group h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-sky-500/15 to-blue-500/10 border border-white/[0.12] flex items-center justify-center text-cyan-300 group-hover:text-cyan-200 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.35)] transition-all mb-4">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
