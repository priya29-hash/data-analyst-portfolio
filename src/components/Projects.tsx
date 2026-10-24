import React from 'react';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      {/* Background grid & glows */}
      <div className="projects-grid pointer-events-none"></div>
      <div className="projects-glow glow-one absolute pointer-events-none"></div>
      <div className="projects-glow glow-two absolute pointer-events-none"></div>

      <div className="projects-container">
        <div className="projects-heading">
          <p className="section-label">MY PROJECTS</p>
          <h1>Things I've <span>Built</span></h1>
          <p>
            Practical applications developed using programming, databases, and AI integration.
          </p>
        </div>

        <div className="projects-list">
          {PROJECTS.map((project: Project, idx: number) => {
            const isCourier = project.id.includes('courier');
            return (
              <article key={project.id} className="project-card">
                <div className="project-number">0{idx + 1}</div>

                {/* Left Browser Window Preview Visual */}
                <div className="project-visual">
                  <div className="browser-window">
                    <div className="browser-top">
                      <span style={{ background: '#ef4444' }}></span>
                      <span style={{ background: '#f59e0b' }}></span>
                      <span style={{ background: '#10b981' }}></span>
                    </div>
                    <div className="browser-content">
                      <div className="project-code">
                        <span>&lt;</span> {isCourier ? 'Courier' : 'Chatbot'} <span>/&gt;</span>
                      </div>
                      <div className="mini-boxes">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="tracking-line">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Project Content */}
                <div className="project-content text-left">
                  <div className="project-tag">
                    {project.category}
                  </div>

                  <h2>{project.title}</h2>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Project Highlights / Key Points - Spaced and properly aligned */}
                  <div className="my-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block"></span>
                      Key Highlights &amp; Architecture
                    </p>
                    <ul className="space-y-2.5">
                      {project.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:bg-sky-50/40 hover:border-sky-300 transition-all duration-200"
                        >
                          <div className="w-5 h-5 rounded-md bg-sky-100 text-[#0284c7] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                            <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  <div className="tech-stack mt-5 mb-5">
                    {project.technologies.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  {/* Footer with working GitHub button */}
                  <div className="project-footer">
                    <span className="project-type">
                      {project.category}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View on GitHub</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="projects-bottom">
          <span className="status-light"></span>
          <span>Verified Source Repositories on GitHub</span>
        </div>
      </div>
    </section>
  );
};
