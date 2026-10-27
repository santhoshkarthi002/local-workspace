import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare, FileText, Palette } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../hooks/useTheme';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

const navLinks = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'], 120);
  const { toggleAppearance, currentThemeMeta } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/75 backdrop-blur-xl border-b border-white/[0.08] shadow-xl shadow-black/30 py-3.5'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/[0.12] bg-slate-900/80 group-hover:border-cyan-400/60 transition-all shadow-md shadow-cyan-950/40 flex items-center justify-center shrink-0 group-hover:scale-105">
              <img
                src={personalInfo.logo}
                alt={`${personalInfo.name} Logo`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-slate-400 tracking-normal">
                Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Frosted Glass Capsule) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 border border-white/[0.08] rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner shadow-white/[0.04]" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-sky-600/30 via-cyan-600/30 to-blue-600/30 border border-cyan-400/40 shadow-sm shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Customizer Trigger Button */}
            <button
              onClick={toggleAppearance}
              type="button"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-900/50 hover:bg-slate-800/80 border border-white/[0.08] hover:border-white/20 rounded-xl backdrop-blur-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer shadow-sm group"
              title="Customize Theme & Colors"
              aria-label="Theme Appearance Settings"
            >
              <span
                className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                style={{ backgroundColor: currentThemeMeta.accentColor }}
              />
              <Palette className="w-3.5 h-3.5 text-slate-300 group-hover:rotate-12 transition-transform" />
              <span className="hidden xl:inline text-[11px] font-medium text-slate-400">
                {currentThemeMeta.name.split(' ')[0]}
              </span>
            </button>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-900/50 hover:bg-slate-800/80 border border-white/[0.08] hover:border-cyan-400/40 rounded-xl backdrop-blur-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer shadow-sm"
              title="View & Download Resume options"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white btn-theme-gradient rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-400 active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 md:hidden bg-[#080c14]/95 backdrop-blur-xl border-t border-slate-800 flex flex-col justify-between p-6 animate-in fade-in duration-200">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 px-3">
              Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-600/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-850 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-medium text-slate-400">#0{navLinks.indexOf(link) + 1}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Bottom Actions */}
          <div className="pt-6 border-t border-slate-800/80 space-y-3">
            {/* Theme Appearance Option */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                toggleAppearance();
              }}
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border border-white/[0.1] bg-slate-900/60 text-slate-200 font-medium text-sm hover:bg-slate-850 cursor-pointer"
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: currentThemeMeta.accentColor }}
              />
              <Palette className="w-4 h-4 text-slate-300" />
              <span>Theme Appearance ({currentThemeMeta.name})</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-750 bg-slate-900 text-slate-200 font-medium text-sm hover:bg-slate-850"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume Options</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl btn-theme-gradient text-white font-medium text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
