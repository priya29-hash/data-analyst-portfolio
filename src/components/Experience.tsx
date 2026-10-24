import React from 'react';
import { EXPERIENCES, ExperienceItem } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-grid pointer-events-none"></div>
      <div className="experience-glow glow-one absolute pointer-events-none"></div>
      <div className="experience-glow glow-two absolute pointer-events-none"></div>

      <div className="experience-container">
        <div className="experience-heading">
          <p className="section-label">MY EXPERIENCE</p>
          <h1>Where I <span>Gained Experience</span></h1>
          <p>
            Practical experience gained through internships and application development.
          </p>
        </div>

        <div className="timeline">
          {EXPERIENCES.map((item: ExperienceItem, idx: number) => (
            <div key={item.organization} className="timeline-item">
              <div className="timeline-dot">0{idx + 1}</div>

              <div className="experience-card">
                <div className="experience-top">
                  <div>
                    <span className="experience-type">
                      {item.role}
                    </span>
                    <h2>{item.organization}</h2>
                    <p className="experience-location">
                      {idx === 0 ? 'Chennai, Tamil Nadu' : 'T. Nagar, Chennai'}
                    </p>
                  </div>
                  <div className="experience-duration">{item.duration}</div>
                </div>

                <div className="experience-divider"></div>

                <p className="experience-description">
                  "{item.description}"
                </p>

                <div className="experience-tech">
                  {item.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
