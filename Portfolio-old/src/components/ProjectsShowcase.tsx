import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  X, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { resumeData, ProjectItem } from '../data/resumeData';
import iotImg from '../assets/iot_dashboard.jpg';
import designSystemImg from '../assets/design_system.jpg';
import './ProjectsShowcase.css';

export const ProjectsShowcase: React.FC = () => {
  const { projects } = resumeData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getImage = (imgName: string) => {
    if (imgName.includes('iot')) return iotImg;
    return designSystemImg;
  };

  return (
    <section id="projects" className="projects-section section-wrapper">
      <div className="section-header">
        <span className="section-tag">
          <FolderGit2 size={14} />
          <span>Case Studies &amp; Implementations</span>
        </span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects &amp; Solutions</span>
        </h2>
        <p className="section-subtitle">
          Real-world enterprise solutions built on React.js, SolidJS, real-time IoT architectures, and fine-grained state management.
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
                  <span>View Technical Details &amp; Architecture</span>
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
                  maxHeight: '300px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-subtle)'
                }}
              />

              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text-main)' }}>
                  Architectural Overview
                </h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.65' }}>
                  {selectedProject.longDescription}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '10px', color: 'var(--text-main)' }}>
                  Key Engineering Wins &amp; Metrics
                </h4>
                <ul className="project-highlights-list">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="project-highlight-item" style={{ fontSize: '0.92rem' }}>
                      <CheckCircle2 size={16} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '10px', color: 'var(--text-main)' }}>
                  Core Tech Stack
                </h4>
                <div className="project-tech-tags">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="tech-chip active">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <a href="#contact" onClick={() => setSelectedProject(null)} className="btn btn-primary" style={{ flex: 1 }}>
                  <span>Discuss This Architecture with Karthikeyan</span>
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
