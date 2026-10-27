import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import './Contact.css';

interface ContactProps {
  onCopyEmail: (email: string) => void;
  emailCopied: boolean;
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({
  onCopyEmail,
  emailCopied,
  onShowToast,
}) => {
  const { contact } = resumeData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Create mailto pre-fill for immediate user contact
    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    setTimeout(() => {
      setSubmitting(false);
      window.open(mailtoUrl, '_blank');
      onShowToast('Preparing email client with your message details.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 400);
  };

  return (
    <section id="contact" className="contact-section section-wrapper">
      <div className="section-header">
        <span className="section-tag">
          <MessageSquare size={14} />
          <span>Get in Touch</span>
        </span>
        <h2 className="section-title">
          {contact.heading}
        </h2>
        <p className="section-subtitle">
          {contact.description}
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct channels & Quick Connect */}
        <div className="contact-info-panel">
          <div className="glass-card contact-card">
            <h3 className="contact-card-title">Direct Channels</h3>
            <p className="contact-card-p">
              Feel free to reach out directly via email, phone, or professional networks. I typically respond within 24 hours.
            </p>

            <div className="contact-links-list">
              {/* Email */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={18} color="var(--accent-cyan)" />
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">Email</span>
                  <a href={`mailto:${contact.email}`} className="contact-item-value">
                    {contact.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => onCopyEmail(contact.email)}
                  className="contact-copy-btn"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {emailCopied ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={18} color="var(--accent-purple)" />
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">Phone</span>
                  <a href={`tel:${contact.phone}`} className="contact-item-value">
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={18} color="var(--accent-amber)" />
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">Location</span>
                  <span className="contact-item-value-static">
                    {contact.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social / Profile Placeholders */}
            <div className="contact-socials-group">
              <span className="socials-label">Professional Profiles:</span>
              <div className="socials-row">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="contact-form-panel">
          <form className="glass-card contact-form" onSubmit={handleSubmit} noValidate>
            <h3 className="contact-form-title">Send a Message</h3>
            <p className="contact-form-subtitle">
              Fill out the details below to initiate an engineering conversation or project inquiry.
            </p>

            <div className="form-fields-grid">
              {/* Name */}
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span className="required-star">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <span className="error-text">
                    <AlertCircle size={12} />
                    <span>{errors.name}</span>
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Email Address <span className="required-star">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <span className="error-text">
                    <AlertCircle size={12} />
                    <span>{errors.email}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">
                Subject <span className="required-star">*</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                className={`form-input ${errors.subject ? 'input-error' : ''}`}
                placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <span className="error-text">
                  <AlertCircle size={12} />
                  <span>{errors.subject}</span>
                </span>
              )}
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Message <span className="required-star">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={4}
                className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                placeholder="Describe your project, timeline, or engineering opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                aria-invalid={!!errors.message}
              ></textarea>
              {errors.message && (
                <span className="error-text">
                  <AlertCircle size={12} />
                  <span>{errors.message}</span>
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={submitting}
            >
              <Send size={16} />
              <span>{submitting ? 'Connecting...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
