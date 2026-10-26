import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Zap, 
  CheckCircle, 
  Layers, 
  Activity, 
  Code2 
} from 'lucide-react';
import { resumeData, SkillItem } from '../data/resumeData';
import './SkillsShowcase.css';

export const SkillsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { skills, skillsCategories } = resumeData;

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s: SkillItem) => s.category === activeCategory);

  return (
    <section id="skills" className="skills-section section-wrapper">
      <div className="section-header">
        <span className="section-tag">
          <Cpu size={14} />
          <span>Technical Expertise</span>
        </span>
        <h2 className="section-title">
          Skills, Tools &amp; <span className="gradient-text">Architecture</span>
        </h2>
        <p className="section-subtitle">
          Engineered across 3+ years of building production-grade enterprise frontend applications.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="skills-tabs-container">
        {skillsCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`skills-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill: SkillItem) => (
          <div key={skill.name} className="glass-card skill-card">
            <div className="skill-card-top">
              <span className="skill-name">{skill.name}</span>
              {skill.isKeySpecialization && (
                <span className="skill-special-badge">
                  <Sparkles size={11} />
                  <span>Core Tech</span>
                </span>
              )}
            </div>

            <div className="skill-level-bar-track">
              <div
                className="skill-level-bar-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <div className="skill-card-bottom">
              <span className="tech-chip" style={{ padding: '2px 8px', fontSize: '0.72rem' }}>
                {skill.tag}
              </span>
              <span className="font-mono">{skill.level}% Proficiency</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dual React & SolidJS Architecture Acumen Card */}
      <div className="tech-philosophy-card">
        <div className="philosophy-info">
          <span className="philosophy-tag">Specialized Engineering Perspective</span>
          <h3 className="philosophy-title">
            The Advantage of Dual Mastery: <span className="gradient-text">React.js &amp; SolidJS</span>
          </h3>
          <p className="philosophy-desc">
            Having deep proficiency in both React and SolidJS gives me an architectural edge. While React provides battle-tested hooks, extensive enterprise libraries, and vast ecosystem strength, SolidJS eliminates the Virtual DOM entirely through fine-grained reactive signals that update only the exact target DOM nodes.
          </p>
        </div>

        <div className="philosophy-points">
          <div className="point-card">
            <div className="point-title">
              <Zap size={16} color="var(--accent-cyan)" />
              <span>Fine-Grained Signals</span>
            </div>
            <p className="point-sub">
              Zero VDOM diffing overhead in SolidJS ensures lightning-fast micro-updates on high-frequency live data feeds.
            </p>
          </div>

          <div className="point-card">
            <div className="point-title">
              <Layers size={16} color="var(--accent-purple)" />
              <span>Component Modularity</span>
            </div>
            <p className="point-sub">
              Standardized clean interfaces, strict TypeScript generics, and hooks-driven logic for high maintainability.
            </p>
          </div>

          <div className="point-card">
            <div className="point-title">
              <Activity size={16} color="var(--accent-emerald)" />
              <span>State Caching &amp; Sync</span>
            </div>
            <p className="point-sub">
              Leveraging React Query and Redux Toolkit for server state synchronization and client data consistency.
            </p>
          </div>

          <div className="point-card">
            <div className="point-title">
              <Code2 size={16} color="var(--accent-amber)" />
              <span>Production Optimization</span>
            </div>
            <p className="point-sub">
              Code splitting, dynamic lazy loading, and targeted memoization preventing expensive unnecessary recalculations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
