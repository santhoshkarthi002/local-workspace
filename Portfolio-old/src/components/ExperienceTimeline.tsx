import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';
import { resumeData, ExperienceItem } from '../data/resumeData';
import './ExperienceTimeline.css';

export const ExperienceTimeline: React.FC = () => {
  const { experiences } = resumeData;

  return (
    <section id="experience" className="timeline-section section-wrapper">
      <div className="section-header">
        <span className="section-tag">
          <Briefcase size={14} />
          <span>Work History</span>
        </span>
        <h2 className="section-title">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle">
          Over 3 years of building performant web applications, real-time IoT visualization dashboards, and reactive component systems.
        </p>
      </div>

      <div className="timeline-container">
        {experiences.map((exp: ExperienceItem) => (
          <div
            key={exp.id}
            className={`timeline-item ${exp.isCurrent ? 'current' : ''}`}
          >
            <div className="glass-card timeline-card">
              <div className="timeline-header-top">
                <div className="timeline-role-group">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company-row">
                    <span className="timeline-company">
                      <Building2 size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                      {exp.company}
                    </span>
                    <span className="timeline-location">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="timeline-badge-group">
                  {exp.isCurrent && (
                    <span className="timeline-current-pill">
                      Active Role
                    </span>
                  )}
                  <span className="timeline-period-badge">
                    <Calendar size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="timeline-summary">{exp.summary}</p>

              {/* Bullet Achievements */}
              <ul className="timeline-achievements">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="achievement-bullet">
                    <CheckCircle2 size={16} className="bullet-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Used */}
              <div className="timeline-tech-stack">
                {exp.techStack.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
