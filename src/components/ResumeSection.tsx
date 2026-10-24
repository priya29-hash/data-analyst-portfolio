import React, { useState } from 'react';
import { Download, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { downloadResumePdf } from '../utils/resumeDownload';

export const ResumeSection: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      setIsDownloading(true);
      await downloadResumePdf('Priya_Dharshini_Resume.pdf');
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
            Review my professional summary and download my official resume for review.
          </p>
        </div>

        {/* Compact, Attractive Resume Preview Card */}
        <div className="resume-card">
          {/* Left: Stylized Document Miniature Graphic */}
          <div className="resume-document">
            <div className="document-top">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="document-content">
              <div className="document-icon">
                <FileText className="w-8 h-8 text-[#0284c7]" />
              </div>
              <div className="document-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          {/* Right: Candidate Profile & Details */}
          <div className="resume-info">
            <span className="resume-tag">CANDIDATE PROFILE</span>
            <h2>PRIYADHARSHINI RAM</h2>
            <p>ASPIRING DATA ANALYST</p>

            <div className="resume-details">
              <span>Excel | SQL | Python | Power BI</span>
              <span>B.E. Computer Science and Engineering</span>
              <span>University College of Engineering Arni</span>
              <span>CGPA: 8.27</span>
            </div>

            {/* Action Buttons: Download Resume & View PDF */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="/Priya_Dharshini_Resume.pdf"
                download="Priya_Dharshini_Resume.pdf"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide text-white bg-[#2563eb] hover:bg-[#1d4ed8] shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer"
                title="Download Priyadharshini Resume"
              >
                {downloadSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>{isDownloading ? 'Downloading...' : 'Download Resume'}</span>
                  </>
                )}
              </a>

              <a
                href="/Priya_Dharshini_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white text-slate-800 border border-slate-300 hover:border-blue-400 hover:text-[#2563eb] hover:bg-slate-50 transition-all duration-300 shadow-xs hover:-translate-y-1 cursor-pointer"
                title="Open Resume PDF in New Tab"
              >
                <Eye className="w-4 h-4 text-[#2563eb]" />
                <span>View PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Status indicator */}
        <div className="resume-bottom">
          <span className="status-light"></span>
          <span>Official Resume Verified &amp; Ready for Download</span>
        </div>
      </div>
    </section>
  );
};
