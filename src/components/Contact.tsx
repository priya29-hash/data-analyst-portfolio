import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-grid"></div>
      <div className="contact-glow glow-one"></div>
      <div className="contact-glow glow-two"></div>

      <div className="contact-container">
        <div className="section-heading">
          <p className="section-label">GET IN TOUCH</p>
          <h1>Let's <span>Connect</span></h1>
          <p>
            I welcome professional connections, learning opportunities, and discussions related to Data Analytics and data-driven problem-solving.
          </p>
        </div>

        <div className="contact-main">
          {/* Photo card matching live portfolio */}
          <div className="contact-photo-card">
            <div className="photo-ring"></div>
            <img
              src="/profile.jpeg"
              alt="Priyadharshini Ram"
              className="contact-photo"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="photo-status">
              <span></span> Open to Opportunities
            </div>
          </div>

          {/* Contact Details cards matching live portfolio */}
          <div className="contact-details">
            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="contact-card group"
            >
              <div className="contact-icon text-sky-500">
                <Mail className="w-6 h-6" />
              </div>
              <div className="contact-info">
                <span>Email</span>
                <strong>{PERSONAL_INFO.email}</strong>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group"
            >
              <div className="contact-icon text-sky-500">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="contact-info">
                <span>LinkedIn</span>
                <strong>priyadharshini-ram-9049972a2</strong>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group"
            >
              <div className="contact-icon text-sky-500">
                <Github className="w-6 h-6" />
              </div>
              <div className="contact-info">
                <span>GitHub</span>
                <strong>github.com/priya29-hash</strong>
              </div>
            </a>

            {/* Location Card */}
            <div className="contact-card">
              <div className="contact-icon text-sky-500">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="contact-info">
                <span>Location</span>
                <strong>Arni, Tamil Nadu, India</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-bottom">
          <span className="status-light"></span>
          <span>Open to Entry-Level Data Analyst Opportunities</span>
        </div>
      </div>
    </section>
  );
};
