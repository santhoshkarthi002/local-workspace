import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  Layers, 
  Database, 
  Server, 
  Code2, 
  Activity, 
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { resumeData, SkillCategory } from '../data/resumeData';
import './SkillsShowcase.css';

export const SkillsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { skillCategories } = resumeData;

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code2 size={16} color="var(--accent-cyan)" />,
    backend: <Server size={16} color="var(--accent-emerald)" />,
    databases: <Database size={16} color="var(--accent-purple)" />,
    state: <Layers size={16} color="var(--accent-blue)" />,
    dataviz: <Activity size={16} color="var(--accent-amber)" />,
    tools: <Terminal size={16} color="var(--accent-pink)" />
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c: SkillCategory) => c.id === selectedCategory);

  return (
    <section id="skills" className="skills-section section-wrapper">
      <div className="section-header">
        <span className="section-tag">
          <Cpu size={14} />
          <span>Technical Skills</span>
        </span>
        <h2 className="section-title">
          Technical Skills &amp; <span className="gradient-text">Engineering Stack</span>
        </h2>
        <p className="section-subtitle">
          Demonstrated competence across frontend engineering, backend services, relational databases, and developer tooling.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="skills-tabs-container">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`skills-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
        >
          All Domains
        </button>
        {skillCategories.map((cat: SkillCategory) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`skills-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skill Categories Grid */}
      <div className="skills-categories-grid">
        {filteredCategories.map((cat: SkillCategory) => (
          <div key={cat.id} className="glass-card skill-domain-card">
            <div className="domain-card-header">
              <div className="domain-icon-title">
                <span className="domain-icon-wrap">
                  {categoryIcons[cat.id] || <Cpu size={16} />}
                </span>
                <h3 className="domain-title">{cat.label}</h3>
              </div>
              <span className="domain-count-badge">
                {cat.skills.length} Technologies
              </span>
            </div>

            <div className="domain-skills-wrap">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`skill-item-badge ${skill.highlight ? 'highlight' : ''}`}
                >
                  <span className="skill-name">{skill.name}</span>
                  {skill.tag && (
                    <span className="skill-tag-pill">{skill.tag}</span>
                  )}
                  {skill.highlight && (
                    <Sparkles size={12} className="skill-sparkle-icon" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Architecture Philosophy Banner */}
      <div className="tech-philosophy-card">
        <div className="philosophy-info">
          <span className="philosophy-tag">Full Stack Development Approach</span>
          <h3 className="philosophy-title">
            Engineering for <span className="gradient-text">Maintainability &amp; Scale</span>
          </h3>
          <p className="philosophy-desc">
            Strong typing with TypeScript, component modularity in React, clear RESTful API contracts in Node.js, and strictly normalized PostgreSQL and MySQL schemas.
          </p>
        </div>

        <div className="philosophy-points">
          <div className="point-card">
            <div className="point-title">
              <Code2 size={16} color="var(--accent-cyan)" />
              <span>Strict TypeScript</span>
            </div>
            <p className="point-sub">
              Strong typing across props, API responses, and database models prevents runtime exceptions.
            </p>
          </div>

          <div className="point-card">
            <div className="point-title">
              <Server size={16} color="var(--accent-emerald)" />
              <span>Reliable REST APIs</span>
            </div>
            <p className="point-sub">
              Express.js routing, middleware validations, and standardized JSON responses.
            </p>
          </div>

          <div className="point-card">
            <div className="point-title">
              <Database size={16} color="var(--accent-purple)" />
              <span>Relational Consistency</span>
            </div>
            <p className="point-sub">
              Structured relational schemas, indexing, and transactional data integrity with PostgreSQL &amp; MySQL.
            </p>
          </div>

          <div className="point-card">
            <div className="point-title">
              <Layers size={16} color="var(--accent-amber)" />
              <span>Server-State Caching</span>
            </div>
            <p className="point-sub">
              React Query and Redux Toolkit managing client state, background invalidation, and fast UI reactivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
