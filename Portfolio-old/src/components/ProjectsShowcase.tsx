import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  X, 
  ArrowRight,
  Code2,
  HelpCircle,
  Lightbulb,
  UserCheck,
  Cpu
} from 'lucide-react';
import { resumeData, ProjectItem } from '../data/resumeData';
import iotImg from '../assets/iot_dashboard.jpg';
import fullstackImg from '../assets/fullstack_app.jpg';
import designSystemImg from '../assets/design_system.jpg';
import './ProjectsShowcase.css';

export const ProjectsShowcase: React.FC = () => {
  const { projects } = resumeData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getImage = (imgName: string) => {
    if (imgName.includes('iot')) return iotImg;
    if (imgName.includes('fullstack')) return fullstackImg;
    return designSystemImg;
  };

  return (
    <section id="projects" className="projects-section section-wrapper">
      <div className="section-header">
        <span className="section-tag">
          <FolderGit2 size={14} />
          <span>Featured Projects &amp; Case Studies</span>
        </span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects &amp; Solutions</span>
        </h2>
        <p className="section-subtitle">
          Representative software engineering solutions demonstrating practical full-stack and frontend development capabilities.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project: ProjectItem) => (
          <div key={project.id} className="glass-card project-card">
            <div className="project-media-wrap">
              <img
                src={getImage(project.image)}
                alt={project.title}
                className="project-media-image"
                loading="lazy"
              />
              <span className="project-overlay-badge">
                {project.category}
              </span>
            </div>

            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Problem / Solution Overview */}
              <div className="project-brief-box">
                <div className="brief-row">
                  <span className="brief-label">Problem:</span>
                  <span className="brief-val">{project.problem}</span>
                </div>
                <div className="brief-row">
                  <span className="brief-label">Solution:</span>
                  <span className="brief-val">{project.solution}</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="project-highlights-list">
                {project.highlights.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="project-highlight-item">
                    <CheckCircle2 size={15} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="project-tech-tags">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="project-footer-actions">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                >
                  <span>Technical Details &amp; Architecture</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-header">
              <div>
                <span className="section-tag" style={{ marginBottom: '6px' }}>
                  {selectedProject.category}
                </span>
                <h3 className="modal-title">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="modal-close-btn"
                aria-label="Close project modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <img
                src={getImage(selectedProject.image)}
                alt={selectedProject.title}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  maxHeight: '280px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-subtle)'
                }}
              />

              {/* Role & Responsibilities */}
              <div className="modal-section-box">
                <h4 className="modal-sub-heading">
                  <UserCheck size={18} color="var(--accent-cyan)" />
                  <span>My Role &amp; Responsibilities</span>
                </h4>
                <p style={{ color: 'var(--text-main)', fontSize: '0.94rem', lineHeight: '1.6' }}>
                  {selectedProject.role}
                </p>
              </div>

              {/* Problem & Solution */}
              <div className="modal-section-box">
                <h4 className="modal-sub-heading">
                  <Lightbulb size={18} color="var(--accent-amber)" />
                  <span>Problem Statement &amp; Solution Overview</span>
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.92rem' }}>
                  <p><strong>Challenge:</strong> <span style={{ color: 'var(--text-muted)' }}>{selectedProject.problem}</span></p>
                  <p><strong>Engineered Solution:</strong> <span style={{ color: 'var(--text-muted)' }}>{selectedProject.solution}</span></p>
                </div>
              </div>

              {/* Key Technical Decisions */}
              <div className="modal-section-box">
                <h4 className="modal-sub-heading">
                  <Cpu size={18} color="var(--accent-purple)" />
                  <span>Key Technical Decisions</span>
                </h4>
                <ul className="project-highlights-list">
                  {selectedProject.keyDecisions.map((decision, i) => (
                    <li key={i} className="project-highlight-item" style={{ fontSize: '0.92rem' }}>
                      <CheckCircle2 size={16} />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Tech Stack */}
              <div>
                <h4 style={{ fontSize: '1.02rem', marginBottom: '10px', color: 'var(--text-main)' }}>
                  Technologies Used
                </h4>
                <div className="project-tech-tags">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="tech-chip active">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '14px' }}>
                <a href="#contact" onClick={() => setSelectedProject(null)} className="btn btn-primary" style={{ flex: 1 }}>
                  <span>Discuss This Project with Karthikeyan</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
