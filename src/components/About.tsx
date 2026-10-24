import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="about">
      {/* Background grid & glows */}
      <div className="about-grid pointer-events-none"></div>
      <div className="about-glow glow-left absolute pointer-events-none"></div>
      <div className="about-glow glow-right absolute pointer-events-none"></div>

      <div className="about-container">
        {/* Left: Code card with floating tags (NO IMAGES on this second page) */}
        <div className="about-visual flex flex-col items-center justify-center relative">
          <div className="about-orbit orbit-one"></div>
          <div className="about-orbit orbit-two"></div>

          {/* Interactive Code Window Card */}
          <div className="about-card relative z-10 w-full max-w-[420px] rounded-2xl bg-white border border-[#D7E5F2] shadow-xl shadow-blue-500/5 overflow-hidden">
            <div className="card-header flex items-center justify-between px-4 py-3 bg-[#EAF6FF] border-b border-[#D7E5F2]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] inline-block"></span>
              </div>
              <span className="text-xs font-mono text-[#64748B] font-semibold">analyst.js</span>
            </div>

            <div className="p-5 font-mono text-xs sm:text-sm text-[#4B5D75] leading-relaxed bg-white">
              <p className="text-[#64748B]">// Data Analyst Profile</p>
              <p className="mt-1">
                <span className="text-[#2563EB] font-bold">const</span> analyst = &#123;
              </p>
              <p className="pl-5">
                name: <span className="text-[#101A30] font-semibold">"{PERSONAL_INFO.name}"</span>,
              </p>
              <p className="pl-5">
                role: <span className="text-[#2563EB] font-semibold">"Aspiring Data Analyst"</span>,
              </p>
              <p className="pl-5">
                tools: [
                <span className="text-[#2563EB] font-medium">"Excel"</span>,{' '}
                <span className="text-[#2563EB] font-medium">"SQL"</span>,{' '}
                <span className="text-[#2563EB] font-medium">"Python"</span>,{' '}
                <span className="text-[#2563EB] font-medium">"Power BI"</span>
                ],
              </p>
              <p className="pl-5">
                focus: <span className="text-[#101A30] font-semibold">"Data Analytics"</span>
              </p>
              <p>&#125;;</p>

              <div className="mt-4 pt-3 border-t border-[#D7E5F2] flex items-center gap-2 text-xs text-[#2563EB] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                <span>Ready for Data Analytics opportunities</span>
              </div>
            </div>
          </div>

          {/* Flying / Floating Tech Badges */}
          <div className="floating-tech tech-python shadow-lg bg-white border border-[#D7E5F2] text-[#2563EB]">Python</div>
          <div className="floating-tech tech-api shadow-lg bg-white border border-[#D7E5F2] text-[#2563EB]">SQL</div>
          <div className="floating-tech tech-web shadow-lg bg-white border border-[#D7E5F2] text-[#2563EB]">Excel &amp; Power BI</div>
        </div>

        {/* Right: Content & Compact Information Cards */}
        <div className="about-content">
          <p className="section-label">ABOUT ME</p>
          <h1>Building a foundation for <span>data-driven</span> problem-solving.</h1>

          <p className="about-description">
            "{PERSONAL_INFO.aboutContent}"
          </p>

          {/* Compact Information Cards */}
          <div className="about-details grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="detail-box">
              <span>Education</span>
              <strong>{PERSONAL_INFO.education}</strong>
            </div>

            <div className="detail-box">
              <span>University</span>
              <strong>{PERSONAL_INFO.university}</strong>
            </div>

            <div className="detail-box">
              <span>Academic CGPA</span>
              <strong>{PERSONAL_INFO.cgpa}</strong>
            </div>

            <div className="detail-box">
              <span>Career Direction</span>
              <strong>{PERSONAL_INFO.careerDirection}</strong>
            </div>

            <div className="detail-box sm:col-span-2">
              <span>Location</span>
              <strong>{PERSONAL_INFO.location}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
