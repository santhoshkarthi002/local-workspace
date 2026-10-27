import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Footer.css';

export const Footer: React.FC = () => {
  const { personal, contact } = resumeData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="section-wrapper footer-content">
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <span className="brand-badge">KG</span>
              <span className="footer-brand-name">{personal.name}</span>
            </div>
            <p className="footer-brand-bio">
              Full Stack Developer &bull; Building responsive, performant web applications with React, TypeScript, Node.js, and relational databases.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-group-title">Navigation</h4>
            <div className="footer-nav-links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-group-title">Connect</h4>
            <div className="footer-social-links">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a href={`mailto:${personal.email}`}>
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved. Built with React &amp; TypeScript.
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
