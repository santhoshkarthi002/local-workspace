import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Education.css';

export const Education: React.FC = () => {
  const { education } = resumeData;

  return (
    <section id="education" className="education-section section-wrapper">
      <div className="section-header">
        <span className="section-tag">
          <GraduationCap size={14} />
          <span>Academic Background</span>
        </span>
        <h2 className="section-title">
          Education &amp; <span className="gradient-text">Credentials</span>
        </h2>
        <p className="section-subtitle">
          Foundational degree in Information Technology, computer science theory, and software engineering.
        </p>
      </div>

      <div className="education-card-wrapper">
        <div className="glass-card education-card">
          <div className="education-card-header">
            <div className="education-degree-group">
              <div className="education-icon-box">
                <GraduationCap size={24} color="var(--accent-purple)" />
              </div>
              <div>
                <h3 className="education-degree">{education.degree}</h3>
                <div className="education-meta-row">
                  <span className="education-institution">{education.institution}</span>
                  <span className="education-location">
                    <MapPin size={13} />
                    {education.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="education-badge-group">
              <span className="education-grade-badge">
                <Award size={14} color="var(--accent-amber)" />
                <span>{education.grade}</span>
              </span>
              <span className="education-period-badge">
                <Calendar size={13} />
                <span>{education.period}</span>
              </span>
            </div>
          </div>

          <div className="education-body">
            <h4 className="education-subhead">Key Coursework &amp; Academic Focus:</h4>
            <ul className="education-highlights-list">
              {education.highlights.map((item, idx) => (
                <li key={idx} className="education-highlight-item">
                  <CheckCircle2 size={16} className="bullet-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
