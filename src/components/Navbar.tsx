import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
        'contact'
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Career Journey', href: '#career-journey', id: 'career-journey' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="navbar">
      {/* Brand Logo with animated underline */}
      <a href="#home" className="logo">
        {PERSONAL_INFO.logoName}
      </a>

      {/* Center Nav Links Capsule */}
      <nav className="nav-links hidden xl:flex">
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

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 text-slate-700 hover:text-[#0284c7] rounded-lg xl:hidden transition-colors"
        aria-label="Toggle Navigation"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-sky-200 shadow-2xl px-5 py-5 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-center ${
                    isActive
                      ? 'bg-[#2563eb] text-white font-bold shadow-xs'
                      : 'text-slate-700 hover:text-[#0284c7] hover:bg-sky-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
