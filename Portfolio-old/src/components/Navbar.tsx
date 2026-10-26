import React, { useState } from 'react';
import { Sun, Moon, FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Reactivity Demo', href: '#reactivity-demo' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <a href="#about" className="brand-logo" aria-label="Karthikeyan G Homepage">
          <div className="brand-badge">KG</div>
          <div className="brand-text">
            <span className="brand-name">Karthikeyan G</span>
            <span className="brand-role">React & SolidJS Dev</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="nav-controls">
          <button
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label="Toggle theme mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={onOpenResume}
            className="btn btn-secondary btn-sm resume-nav-btn"
            aria-label="Open formatted resume"
          >
            <FileText size={16} />
            <span>Resume</span>
          </button>

          <a href="#contact" className="btn btn-primary btn-sm">
            <span>Hire Me</span>
            <ArrowUpRight size={16} />
          </a>

          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="mobile-nav-link"
            onClick={handleNavClick}
          >
            {item.label}
          </a>
        ))}
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            <FileText size={18} />
            <span>View Full Resume</span>
          </button>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </header>
  );
};
