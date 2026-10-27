import React from 'react';
import { 
  Compass, 
  Layout, 
  Server, 
  Database, 
  Zap, 
  Users, 
  Code2, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './About.css';

export const About: React.FC = () => {
  const { personal } = resumeData;

  const highlights = [
    {
      icon: <Layout size={20} color="var(--accent-cyan)" />,
      title: "Responsive & Intuitive Interfaces",
      description: "Crafting mobile-first, pixel-perfect user experiences using modern React, TypeScript, and accessible UI patterns."
    },
    {
      icon: <Code2 size={20} color="var(--accent-blue)" />,
      title: "Reusable Component Architecture",
      description: "Designing modular component libraries and clean abstractions that accelerate team delivery and prevent code duplication."
    },
    {
      icon: <Server size={20} color="var(--accent-purple)" />,
      title: "Node.js & Express API Services",
      description: "Building reliable RESTful services, middleware pipelines, authentication workflows, and robust API endpoints."
    },
    {
      icon: <Database size={20} color="var(--accent-emerald)" />,
      title: "Relational Database Operations",
      description: "Structuring normalized schemas, writing indexed queries, and managing data consistency across PostgreSQL and MySQL."
    },
    {
      icon: <Zap size={20} color="var(--accent-amber)" />,
      title: "Performance & Runtime Optimization",
      description: "Profiling web apps, eliminating unnecessary re-renders, caching server state, and optimizing network payloads."
    },
    {
      icon: <Users size={20} color="var(--accent-pink)" />,
      title: "Cross-Functional Collaboration",
      description: "Partnering closely with UI/UX designers, QA engineers, backend developers, and product leads to ship features on time."
    }
  ];

  return (
    <section id="about" className="about-section section-wrapper">
      <div className="section-header">
        <span className="section-tag">
          <Compass size={14} />
          <span>About My Engineering Philosophy</span>
        </span>
        <h2 className="section-title">
          Engineering <span className="gradient-text">thoughtful digital experiences.</span>
        </h2>
        <p className="section-subtitle">
          Bridging modern frontend aesthetics with dependable backend architectures and performant database operations.
        </p>
      </div>

      <div className="about-grid">
        {/* Left Column: Personal narrative & overview */}
        <div className="glass-card about-narrative-card">
          <div className="about-narrative-header">
            <span className="about-pill">Full Stack Mindset</span>
            <span className="about-pill alt">Production Proven</span>
          </div>

          <h3 className="about-narrative-title">
            Passionate about writing clean, resilient code that solves real user and business problems.
          </h3>

          <p className="about-narrative-p">
            I am a Full Stack Developer with over 3+ years of hands-on experience building scalable web applications. My work spans the complete delivery lifecycle: translating Figma wireframes into responsive interfaces, constructing performant React component trees, architecting Node.js backend controllers, and writing optimized relational database queries.
          </p>

          <p className="about-narrative-p">
            Whether creating real-time telemetry dashboards for IoT systems or developing multi-role enterprise portals, I place equal importance on user satisfaction, accessibility, and architectural maintainability.
          </p>

          <div className="about-checklist">
            {personal.coreStrengths.slice(0, 4).map((strength, idx) => (
              <div key={idx} className="about-check-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>{strength}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 6 Core Engineering Pillars */}
        <div className="about-pillars-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="glass-card pillar-card">
              <div className="pillar-icon-box">
                {item.icon}
              </div>
              <h4 className="pillar-title">{item.title}</h4>
              <p className="pillar-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
