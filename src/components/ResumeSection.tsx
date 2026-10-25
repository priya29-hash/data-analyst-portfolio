import React, { useState } from 'react';
import {
  Download,
  Eye,
  FileText,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Building2,
  Award,
  BarChart3,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { downloadResumePdf } from '../utils/resumeDownload';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Directly reference the newly uploaded authentic resume PDF
  const resumePdfPath = '/assets/aistudio/resume_b891b5cc.pdf';

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      setIsDownloading(true);
      await downloadResumePdf('Priyadharshini_R_Resume.pdf');
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="resume" className="resume">
      {/* Background grid and glowing orbs */}
      <div className="resume-grid pointer-events-none"></div>
      <div className="resume-glow glow-one absolute pointer-events-none"></div>
      <div className="resume-glow glow-two absolute pointer-events-none"></div>

      <div className="resume-container">
        {/* Section Heading */}
        <div className="resume-heading">
          <p className="section-label">MY RESUME</p>
          <h1>
            My <span>Resume</span>
          </h1>
          <p>
            Review my professional summary, technical expertise, and access my official resume.
          </p>
        </div>

        {/* Compact, Highly-Visible Responsive Resume Card */}
        <div className="resume-card">
          {/* Left / Top: Document Miniature with Direct View Action */}
          <a
            href={resumePdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-document group block text-inherit no-underline"
            title="Open official resume in a new tab"
          >
            {/* Document Header Bar */}
            <div className="document-top">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 font-mono">
                <FileText className="w-3 h-3 text-[#2563eb]" />
                <span className="truncate max-w-[120px]">Priyadharshini_R.pdf</span>
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200">
                1 Page
              </span>
            </div>

            {/* Document Realistic Mini-Page Body */}
            <div className="document-content">
              {/* Document Header */}
              <div className="border-b border-slate-200 pb-2.5 mb-2.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black text-slate-800 tracking-tight">
                    PRIYADHARSHINI R
                  </h3>
                  <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <p className="text-[10px] font-bold text-[#2563eb]">
                  {PERSONAL_INFO.role}
                </p>
              </div>

              {/* Technical Skills miniature pills */}
              <div className="mb-2.5">
                <p className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400 mb-1">
                  TECHNICAL SKILLS
                </p>
                <div className="flex flex-wrap gap-1">
                  {['Python', 'MySQL', 'Excel', 'FastAPI'].map((tool) => (
                    <span
                      key={tool}
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education miniature snippet */}
              <div className="mb-2">
                <p className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400 mb-0.5">
                  EDUCATION
                </p>
                <p className="text-[9.5px] font-bold text-slate-700 leading-tight">
                  B.E. Computer Science and Engineering
                </p>
                <p className="text-[8.5px] text-slate-500">
                  Anna University • CGPA: 8.27 / 10
                </p>
              </div>

              {/* Direct View banner */}
              <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[10.5px] font-bold text-[#2563eb] group-hover:text-blue-700 transition-colors">
                <Eye className="w-3.5 h-3.5" />
                <span>Click to View Full PDF</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </div>
            </div>
          </a>

          {/* Right / Main: Candidate Profile & Details */}
          <div className="resume-info">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="resume-tag">CANDIDATE PROFILE</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Sparkles className="w-3 h-3 text-emerald-500" />
                <span>Verified Resume</span>
              </span>
            </div>

            <h2>PRIYADHARSHINI R</h2>
            <p className="resume-role">{PERSONAL_INFO.role}</p>

            <p className="resume-summary-text text-sm text-[#4B5D75] leading-relaxed mb-4 max-w-[620px]">
              Final-year Computer Science and Engineering student at University College of Engineering, Arni (Anna University) with practical experience in Python, MySQL, FastAPI, and data analytics.
            </p>

            {/* Structured Visible Credential Chips without location */}
            <div className="resume-details">
              <span className="resume-detail-chip">
                <BarChart3 className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0 mr-1.5" />
                <strong>Excel | SQL | Python | Power BI</strong>
              </span>

              <span className="resume-detail-chip">
                <GraduationCap className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0 mr-1.5" />
                <span>B.E. Computer Science and Engineering</span>
              </span>

              <span className="resume-detail-chip">
                <Building2 className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0 mr-1.5" />
                <span>University College of Engineering, Arni</span>
              </span>

              <span className="resume-detail-chip">
                <Award className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0 mr-1.5" />
                <span>CGPA: <strong>8.27 / 10</strong></span>
              </span>
            </div>

            {/* Action Buttons: Download Resume & View PDF */}
            <div className="resume-actions flex flex-wrap items-center gap-3 pt-1">
              {/* Primary Download Button */}
              <a
                href={resumePdfPath}
                download="Priyadharshini_R_Resume.pdf"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide text-white bg-[#2563eb] hover:bg-[#1d4ed8] shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                title="Download Priyadharshini R Resume"
              >
                {downloadSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Resume Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>{isDownloading ? 'Preparing...' : 'Download Resume'}</span>
                  </>
                )}
              </a>

              {/* View in New Tab Button */}
              <a
                href={resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white text-slate-800 border border-slate-300 hover:border-blue-400 hover:text-[#2563eb] hover:bg-slate-50 transition-all duration-300 shadow-xs hover:-translate-y-0.5 cursor-pointer"
                title="Open Resume PDF in New Tab"
              >
                <Eye className="w-4 h-4 text-[#2563eb]" />
                <span>View PDF</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Status indicator */}
        <div className="resume-bottom">
          <span className="status-light"></span>
          <span>Official Resume Verified &amp; Ready for Review</span>
        </div>
      </div>
    </section>
  );
};
