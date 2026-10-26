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
  Zap
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

  return (
    <section id="about" className="hero-section section-wrapper">
      <div className="hero-grid">
        {/* Left Column: Intro & Content */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="status-dot"></span>
            <span>{personal.availability}</span>
          </div>

          <div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personal.name}</span>
            </h1>
            <p className="hero-subtitle">
              Front End Developer &bull; <span className="gradient-text-alt">React.js & SolidJS Specialist</span>
            </p>
          </div>

          <p className="hero-description">
            {personal.bio}
          </p>

          <div className="hero-meta-bar">
            <span className="hero-meta-item">
              <MapPin size={16} />
              <span>{personal.location}</span>
            </span>
            <span className="hero-meta-item">
              <Briefcase size={16} />
              <span>{personal.experienceYears} Years Production Experience</span>
            </span>
            <span className="hero-meta-item">
              <Sparkles size={16} />
              <span>Pixel-Perfect UI & Reactive Architecture</span>
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
              <span>Explore Featured Work</span>
              <ArrowRight size={18} />
            </a>

            <button onClick={onOpenResume} className="btn btn-secondary">
              <Download size={18} />
              <span>Interactive Resume</span>
            </button>

            <a href="#contact" className="btn btn-outline">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>

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
              <Zap size={16} color="#06b6d4" />
              <span>React 18 / 19</span>
            </div>

            <div className="floating-chip floating-chip-solid animate-float" style={{ animationDelay: '1.5s' }}>
              <Layers size={16} color="#3b82f6" />
              <span>SolidJS Reactivity</span>
            </div>

            <div className="floating-chip floating-chip-exp animate-float" style={{ animationDelay: '2.5s' }}>
              <Sparkles size={16} color="#8b5cf6" />
              <span>3+ Yrs Exp</span>
            </div>

            <div className="avatar-card">
              <div className="avatar-image-wrap">
                <img
                  src={avatarImg}
                  alt="Karthikeyan G - Frontend Developer"
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
                  <div className="avatar-badge-sub">TypeScript &bull; React &bull; SolidJS</div>
                </div>
                <div className="tech-chip active" style={{ fontSize: '0.72rem' }}>
                  Frontend Dev
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
