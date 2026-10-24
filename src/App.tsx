/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { CareerJourney } from './components/CareerJourney';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4FAFF] text-[#4B5D75] font-['Inter',sans-serif] selection:bg-[#B9E8FC] selection:text-[#101A30]">
      {/* 1. Navigation */}
      <Navbar />

      {/* Main Sections strictly matching Navigation & Live Portfolio */}
      <main>
        {/* 1. Home */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Projects */}
        <Projects />

        {/* 5. Experience */}
        <Experience />

        {/* 6. Career Journey */}
        <CareerJourney />

        {/* 7. Resume */}
        <ResumeSection />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
