import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const TYPING_PHRASES = [
  "ASPIRING DATA ANALYST"
];

export const Hero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('ASPIRING DATA ANALYST');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentPhrase) {
      // Pause at end of phrase
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
    } else if (isDeleting && displayText === '') {
      // Finished deleting, start typing again
      setIsDeleting(false);
      setPhraseIndex(0);
    } else {
      // Typing or deleting next character
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section id="home" className="home">
      {/* Background grid & glowing orbs */}
      <div className="background-grid pointer-events-none"></div>
      <div className="glow glow-one absolute pointer-events-none"></div>
      <div className="glow glow-two absolute pointer-events-none"></div>
      <div className="floating-dot dot-one"></div>
      <div className="floating-dot dot-two"></div>
      <div className="floating-dot dot-three"></div>

      <div className="home-container">
        {/* Left: Text & CTA */}
        <div className="home-text flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="hello">HELLO, I'M</p>
          <h1>PRIYADHARSHINI</h1>

          {/* Typing & type-over effect matching screenshot */}
          <div className="home-typing-wrapper mt-3 mb-3 min-h-[48px] flex items-center justify-center lg:justify-start w-full">
            <span className="text-[22px] sm:text-3xl lg:text-[34px] font-extrabold text-[#2563eb] tracking-wide inline-flex items-center justify-center lg:justify-start">
              {displayText}
              <span className="inline-block w-1 h-8 sm:h-9 bg-[#2563eb] ml-2 animate-pulse shrink-0"></span>
            </span>
          </div>

          <p className="availability">
            <span className="status-dot"></span>
            Available for Data Analyst Opportunities
          </p>

          <p className="description">
            Final-year Computer Science and Engineering student passionate about data analytics and building practical applications using Python and other data analytics tools.
          </p>

          {/* Action buttons matching screenshot */}
          <div className="home-buttons">
            <a href="#projects" className="primary-button">
              View Projects <span className="text-lg">↗</span>
            </a>
            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          {/* Social Links matching screenshot */}
          <div className="social-links">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4 text-[#2563eb]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right: Original Photograph Card matching screenshot */}
        <div className="home-visual">
          <div className="tech-circle circle-one"></div>
          <div className="tech-circle circle-two"></div>

          {/* Photograph Card matching screenshot with 3 dots, photo, and < Developer /> */}
          <div className="photo-card relative min-h-[380px] flex flex-col justify-between overflow-visible shadow-2xl bg-white border border-[#D7E5F2]">
            {/* Top 3 dots */}
            <div className="card-top flex items-center gap-1.5 px-2 py-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1] inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1] inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1] inline-block"></span>
            </div>

            {/* Photo */}
            <div className="photo-wrapper relative flex items-center justify-center p-2.5 my-auto overflow-hidden rounded-2xl bg-[#EAF6FF]">
              <img
                src="/profile.jpeg"
                alt="Priyadharshini Ram"
                className="w-full h-[330px] object-cover rounded-2xl shadow-inner"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'profile.jpeg';
                }}
              />
            </div>

            {/* Bottom Caption: < Data Analyst /> */}
            <div className="developer-label text-center py-2 flex items-center justify-center gap-1.5 font-bold text-sm sm:text-base text-[#101A30]">
              <span className="bracket text-[#2563EB] font-extrabold">&lt;</span>
              <span>Data Analyst</span>
              <span className="bracket text-[#2563EB] font-extrabold">/&gt;</span>
            </div>
          </div>

          {/* Floating Badges matching screenshot: </>, {}, and Python */}
          <div className="floating-code code-one font-mono font-bold text-base text-[#2563EB] bg-white shadow-xl border border-[#D7E5F2] px-3.5 py-1.5 rounded-xl">
            &lt;/&gt;
          </div>
          <div className="floating-code code-two font-mono font-bold text-base text-[#2563EB] bg-white shadow-xl border border-[#D7E5F2] px-3.5 py-1.5 rounded-xl">
            &#123;&#125;
          </div>
          <div className="floating-code code-three font-bold text-sm text-[#2563EB] bg-white shadow-xl border border-[#D7E5F2] px-4 py-2 rounded-xl">
            Python
          </div>
        </div>
      </div>
    </section>
  );
};
