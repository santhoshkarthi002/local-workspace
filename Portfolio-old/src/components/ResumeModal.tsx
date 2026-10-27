import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Cpu, 
  CheckCircle2,
  Building2,
  Calendar
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './ResumeModal.css';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, experiences, education, skillCategories } = resumeData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div 
        className="resume-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Karthikeyan G Professional Resume"
      >
        {/* Header Actions */}
        <div className="resume-modal-actions no-print">
          <div className="resume-actions-left">
            <span className="resume-preview-pill">Interactive Resume View</span>
          </div>
          <div className="resume-actions-right">
            <button onClick={handlePrint} className="btn btn-secondary btn-sm">
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button onClick={onClose} className="resume-modal-close" aria-label="Close Resume">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="resume-sheet">
          {/* Header */}
          <div className="resume-sheet-header">
            <div>
              <h1 className="resume-sheet-name">{personal.name}</h1>
              <h2 className="resume-sheet-role">{personal.role} &bull; 3+ Years Experience</h2>
            </div>
            <div className="resume-contact-block">
              <span><Mail size={13} /> {personal.email}</span>
              <span><Phone size={13} /> {personal.phone}</span>
              <span><MapPin size={13} /> {personal.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="resume-sheet-section">
            <h3 className="resume-section-title">
              <Briefcase size={15} />
              <span>Professional Summary</span>
            </h3>
            <p className="resume-summary-text">
              {personal.aboutDetailed}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="resume-sheet-section">
            <h3 className="resume-section-title">
              <Cpu size={15} />
              <span>Technical Skills</span>
            </h3>
            <div className="resume-skills-grid">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="resume-skill-group">
                  <strong className="resume-skill-cat">{cat.label}:</strong>{' '}
                  <span className="resume-skill-items">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Work History */}
          <div className="resume-sheet-section">
            <h3 className="resume-section-title">
              <Building2 size={15} />
              <span>Work Experience</span>
            </h3>
            <div className="resume-exp-list">
              {experiences.map((exp) => (
                <div key={exp.id} className="resume-exp-item">
                  <div className="resume-exp-header">
                    <div>
                      <h4 className="resume-exp-role">{exp.role}</h4>
                      <div className="resume-exp-company">{exp.company} &bull; {exp.location}</div>
                    </div>
                    <span className="resume-exp-period">{exp.period}</span>
                  </div>
                  <ul className="resume-exp-bullets">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="resume-sheet-section">
            <h3 className="resume-section-title">
              <GraduationCap size={15} />
              <span>Education</span>
            </h3>
            <div className="resume-edu-item">
              <div className="resume-exp-header">
                <div>
                  <h4 className="resume-exp-role">{education.degree}</h4>
                  <div className="resume-exp-company">{education.institution}, {education.location}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="resume-exp-period">{education.period}</span>
                  <div style={{ fontWeight: 600, color: 'var(--accent-amber)', fontSize: '0.85rem' }}>
                    {education.grade}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
