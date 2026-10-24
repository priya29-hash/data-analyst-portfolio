import React from 'react';
import { CAREER_JOURNEY_STAGES, CareerStage } from '../data/portfolioData';

export const CareerJourney: React.FC = () => {
  return (
    <section id="career-journey" className="career">
      {/* Background grid & glowing effects */}
      <div className="career-grid pointer-events-none"></div>
      <div className="career-glow glow-one absolute pointer-events-none"></div>
      <div className="career-glow glow-two absolute pointer-events-none"></div>

      <div className="career-container">
        <div className="career-heading">
          <p className="section-label">MY CAREER JOURNEY</p>
          <h1>My <span>Career Journey</span></h1>
          <p>
            A snapshot of my training selection, current Data Analytics learning, and preparation for upcoming Data Analyst placements.
          </p>
        </div>

        {/* Exactly THREE stages in order without any extra breakdown or fourth box */}
        <div className="career-timeline">
          {CAREER_JOURNEY_STAGES.map((stage: CareerStage) => (
            <div key={stage.stageNumber} className="career-item">
              <div className="career-number">{stage.stageNumber}</div>

              <div className="career-card">
                <div className="career-card-top">
                  <div>
                    <span className="career-type">{stage.type}</span>
                    <h2>{stage.organization ? `${stage.organization} — ${stage.title}` : stage.title}</h2>
                    <p>{stage.subtitle}</p>
                  </div>
                  {(stage.duration || stage.status) && (
                    <span className="career-duration">
                      {stage.duration || stage.status}
                    </span>
                  )}
                </div>

                <div className="career-divider"></div>

                <p className="career-description">
                  "{stage.description}"
                </p>

                {/* Tags */}
                <div className="career-tags">
                  {stage.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="career-bottom">
          <span className="status-light"></span>
          <span>Learning • Practicing • Preparing</span>
        </div>
      </div>
    </section>
  );
};
