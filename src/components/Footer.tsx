import React from 'react';
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe]/60 to-[#dbeafe]/70 text-slate-700 pt-12 pb-10 border-t border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-sky-200/80">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 to-sky-500 flex items-center justify-center text-slate-950 font-extrabold text-base shadow-sm">
                PR
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-wide">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
            </div>
            <p className="text-sm text-[#0284c7] font-semibold">
              Aspiring Data Analyst | Final-Year B.E. CSE Student
            </p>
            <p className="text-xs text-slate-500 mt-1">
              University College of Engineering Arni (Anna University)
            </p>
          </div>

          {/* Social / Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/90 hover:bg-sky-100 text-slate-700 hover:text-[#0284c7] text-xs font-semibold border border-sky-200 transition-all duration-200 shadow-2xs"
            >
              <Linkedin className="w-4 h-4 text-sky-500" />
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/90 hover:bg-sky-100 text-slate-700 hover:text-[#0284c7] text-xs font-semibold border border-sky-200 transition-all duration-200 shadow-2xs"
            >
              <Github className="w-4 h-4 text-slate-600" />
              <span>GitHub</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/90 hover:bg-sky-100 text-slate-700 hover:text-[#0284c7] text-xs font-semibold border border-sky-200 transition-all duration-200 shadow-2xs"
            >
              <Mail className="w-4 h-4 text-sky-500" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 hover:text-[#0284c7] transition-colors cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
