import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  FolderGit2,
  Briefcase,
  GraduationCap,
  FileText,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        'home',
        'about',
        'skills',
        'projects',
        'experience',
        'career-journey',
        'resume',
        'contact',
      ];
      const scrollPos = window.scrollY + 160;

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home', icon: Home },
    { label: 'About', href: '#about', id: 'about', icon: User },
    { label: 'Skills', href: '#skills', id: 'skills', icon: Code2 },
    { label: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
    { label: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { label: 'Career Journey', href: '#career-journey', id: 'career-journey', icon: GraduationCap },
    { label: 'Resume', href: '#resume', id: 'resume', icon: FileText },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <header ref={navRef} className="navbar">
      <div className="navbar-inner">
        {/* Brand Logo with animated underline */}
        <a href="#home" className="logo" onClick={() => setMobileMenuOpen(false)}>
          {PERSONAL_INFO.logoName}
        </a>

        {/* Center/Right Nav Links Capsule (Visible on Desktop & Tablet Landscape >= 1024px) */}
        <nav className="nav-links hidden lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`transition-all duration-200 cursor-pointer ${
                  isActive
                    ? '!bg-[#2563eb] !text-white shadow-md shadow-blue-500/25 font-bold'
                    : 'hover:text-[#0284c7] hover:bg-sky-50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile & Tablet Toggle Button (< 1024px) - Vertically aligned with logo */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="nav-toggle-btn lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-slate-800" /> : <Menu className="w-5 h-5 text-slate-800" />}
        </button>
      </div>

      {/* Mobile & Tablet Menu Drawer (< 1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-sky-200/80 shadow-2xl transition-all duration-200 animate-in slide-in-from-top-2 z-50">
          <div className="navbar-drawer-inner">
            {/* Mobile View (< 640px): Beautiful single-column aligned list */}
            <div className="flex flex-col gap-1.5 sm:hidden">
              <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase px-1 mb-0.5">
                Navigation
              </div>
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`group flex items-center justify-between h-[48px] px-3.5 rounded-xl border transition-all duration-150 ${
                      isActive
                        ? 'bg-[#2563eb] border-[#2563eb] text-white shadow-md shadow-blue-500/25 font-bold'
                        : 'bg-white/85 hover:bg-sky-50 border-slate-200/80 text-slate-700 hover:text-[#0284c7] hover:border-sky-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-sky-100/70 text-blue-600 group-hover:bg-blue-100'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[14px] font-semibold tracking-tight leading-none">
                        {link.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {isActive && (
                        <span className="text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white uppercase tracking-wider">
                          Active
                        </span>
                      )}
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 ${
                          isActive ? 'text-white/80' : 'text-slate-400 group-hover:text-blue-500'
                        }`}
                      />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Tablet View (640px - 1023px): Perfectly balanced 2-column card grid */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-2.5 max-w-2xl mx-auto">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`group flex items-center justify-between h-[50px] px-4 rounded-xl border transition-all duration-150 ${
                      isActive
                        ? 'bg-[#2563eb] border-[#2563eb] text-white shadow-md shadow-blue-500/25 font-bold'
                        : 'bg-white/85 hover:bg-sky-50 border-slate-200/80 text-slate-700 hover:text-[#0284c7] hover:border-sky-200'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-sky-100/70 text-blue-600 group-hover:bg-blue-100'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[14px] font-semibold tracking-tight truncate">
                        {link.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {isActive && (
                        <span className="text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white uppercase tracking-wider">
                          Active
                        </span>
                      )}
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 ${
                          isActive ? 'text-white/80' : 'text-slate-400 group-hover:text-blue-500'
                        }`}
                      />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Drawer Bottom Bar with Quick Resume Shortcut */}
            <div className="mt-3.5 pt-3 border-t border-sky-100 flex items-center justify-between gap-3 text-xs text-slate-500 max-w-2xl mx-auto">
              <span className="font-medium text-slate-600">Priyadharshini R • Data Analyst</span>
              <a
                href="/assets/aistudio/resume_dd9d78a3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-100/80 text-blue-700 font-bold hover:bg-[#2563eb] hover:text-white transition-all text-xs shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
