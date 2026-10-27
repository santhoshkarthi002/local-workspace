import React from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Briefcase, 
  Copy, 
  Check, 
  Layers, 
  Sparkles,
  Phone,
  Mail,
  Database,
  Server,
  Code2
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import avatarImg from '../assets/karthikeyan.jpg';
import './Hero.css';

interface HeroProps {
  onOpenResume: () => void;
  onCopyEmail: (email: string) => void;
  emailCopied: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onCopyEmail,
  emailCopied,
}) => {
  const { personal } = resumeData;

  const corePills = [
    { label: "React", icon: <Code2 size={13} color="var(--accent-cyan)" /> },
    { label: "TypeScript", icon: <Code2 size={13} color="var(--accent-blue)" /> },
    { label: "Node.js", icon: <Server size={13} color="var(--accent-emerald)" /> },
    { label: "Express.js", icon: <Server size={13} color="var(--text-muted)" /> },
    { label: "PostgreSQL", icon: <Database size={13} color="var(--accent-purple)" /> },
    { label: "MySQL", icon: <Database size={13} color="var(--accent-amber)" /> },
  ];

  return (
    <section id="hero" className="hero-section section-wrapper">
      <div className="hero-grid">
        {/* Left Column: Intro & Content */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="status-dot"></span>
            <span>{personal.eyebrow}</span>
          </div>

          <div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personal.name}</span>
            </h1>
            <p className="hero-subtitle">
              {personal.headline}
            </p>
          </div>

          <p className="hero-description">
            {personal.bio}
          </p>

          {/* Compact Technology Stack Display */}
          <div className="hero-stack-container">
            <span className="hero-stack-label">Core Stack:</span>
            <div className="hero-stack-pills">
              {corePills.map((pill) => (
                <span key={pill.label} className="tech-chip">
                  {pill.icon}
                  <span>{pill.label}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="hero-meta-bar">
            <span className="hero-meta-item">
              <MapPin size={16} />
              <span>{personal.location}</span>
            </span>
            <span className="hero-meta-item">
              <Briefcase size={16} />
              <span>{personal.experienceYears} Years Production Experience</span>
            </span>
          </div>

          {/* Quick Copy Contact Bar */}
          <div className="quick-copy-bar">
            <span className="quick-copy-text">{personal.email}</span>
            <button
              onClick={() => onCopyEmail(personal.email)}
              className="copy-mini-btn"
              title="Copy email to clipboard"
              aria-label="Copy email address"
            >
              {emailCopied ? (
                <>
                  <Check size={14} style={{ color: 'var(--accent-emerald)' }} />
                  <span style={{ color: 'var(--accent-emerald)' }}>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* CTA Group */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>Explore My Work</span>
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} />
              <span>Get In Touch</span>
            </a>

            <button onClick={onOpenResume} className="btn btn-outline">
              <Download size={18} />
              <span>Download Resume</span>
            </button>

            <a href={`tel:${personal.phone}`} className="btn-icon" title="Call directly" aria-label="Call Karthikeyan">
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: Visual Avatar & Floating Badges */}
        <div className="hero-visual">
          <div className="avatar-container">
            <div className="avatar-ambient-glow"></div>

            {/* Floating Tech Chips */}
            <div className="floating-chip floating-chip-react animate-float">
              <Code2 size={16} color="#06b6d4" />
              <span>React &bull; TypeScript</span>
            </div>

            <div className="floating-chip floating-chip-solid animate-float" style={{ animationDelay: '1.5s' }}>
              <Server size={16} color="#3b82f6" />
              <span>Node.js &bull; Express</span>
            </div>

            <div className="floating-chip floating-chip-exp animate-float" style={{ animationDelay: '2.5s' }}>
              <Database size={16} color="#8b5cf6" />
              <span>PostgreSQL &bull; MySQL</span>
            </div>

            <div className="avatar-card">
              <div className="avatar-image-wrap">
                <img
                  src={avatarImg}
                  alt="Karthikeyan G - Full Stack Developer"
                  className="avatar-image"
                  width="420"
                  height="420"
                  loading="eager"
                />
                <div className="avatar-overlay-gradient"></div>
              </div>

              <div className="avatar-footer-info">
                <div>
                  <div className="avatar-badge-title">Karthikeyan G</div>
                  <div className="avatar-badge-sub">Full Stack Developer</div>
                </div>
                <div className="tech-chip active" style={{ fontSize: '0.72rem' }}>
                  Coimbatore, IN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
