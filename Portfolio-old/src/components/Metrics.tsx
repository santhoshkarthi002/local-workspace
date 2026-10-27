import React from 'react';
import { 
  CheckCircle2, 
  Layers, 
  Code, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  Compass
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Metrics.css';

export const Metrics: React.FC = () => {
  const { stats, personal } = resumeData;

  const strengthIcons = [
    <Zap size={18} className="strength-icon" key="zap" />,
    <Sparkles size={18} className="strength-icon" key="sparkles" />,
    <Code size={18} className="strength-icon" key="code" />,
    <Layers size={18} className="strength-icon" key="layers" />,
    <ShieldCheck size={18} className="strength-icon" key="shield" />,
    <Compass size={18} className="strength-icon" key="compass" />
  ];

  return (
    <section className="metrics-section section-wrapper">
      {/* 4 Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card stat-card">
            <span className="stat-value gradient-text">
              {stat.value}{stat.suffix}
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Core Strengths Checklist */}
      <div className="strengths-container">
        <div className="strengths-header">
          <h2 className="strengths-title">
            <CheckCircle2 size={22} color="var(--accent-cyan)" />
            <span>Core Engineering Competencies & Strengths</span>
          </h2>
          <p style={{ marginTop: '4px', fontSize: '0.92rem' }}>
            Proven strengths identified across 3+ years of enterprise full stack and frontend engineering
          </p>
        </div>

        <div className="strengths-grid">
          {personal.coreStrengths.map((strength, index) => (
            <div key={index} className="strength-item">
              {strengthIcons[index % strengthIcons.length]}
              <span className="strength-text">{strength}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
