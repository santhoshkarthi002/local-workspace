import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Education: React.FC = () => {
  const { education } = personalInfo;

  return (
    <section id="education" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-mono font-medium tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Education &amp; Qualifications
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Formal undergraduate engineering degree establishing foundations in computing systems,
            data structures, algorithms, and software development methodologies.
          </p>
        </div>

        {/* Education Main Card */}
        <div className="max-w-4xl rounded-2xl bg-[#090e1b] border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-all shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {education.degree}
                </h3>
                <div className="text-base text-indigo-300 font-medium">
                  {education.institution}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {education.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {education.period}
                  </span>
                </div>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="sm:text-right shrink-0">
              <div className="inline-flex flex-col sm:items-end px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Academic Score
                </span>
                <span className="text-lg font-bold font-mono text-white mt-0.5">
                  CGPA {education.cgpa} <span className="text-xs text-slate-400 font-normal">/ {education.cgpaScale}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Core Foundations & Coursework */}
          <div className="mt-6 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Program Highlights &amp; Core Coursework</span>
            </div>
            <ul className="space-y-2.5">
              {education.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
