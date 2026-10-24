import React from 'react';

interface SkillItemData {
  num: string;
  name: string;
  icon: string;
  color: string;
  bg: string;
  level: string;
  progress: string;
  description: string;
  category: string;
}

const SKILLS_DATA: SkillItemData[] = [
  {
    num: "01",
    name: "Python",
    icon: "Py",
    color: "#0284c7",
    bg: "#e0f2fe",
    level: "Advanced",
    progress: "90%",
    description: "My primary programming language is Python and analytics using Python libraries.",
    category: "Programming & Data"
  },
  {
    num: "02",
    name: "SQL",
    icon: "SQL",
    color: "#0284c7",
    bg: "#e0f2fe",
    level: "Advanced",
    progress: "88%",
    description: "Writing queries, joins, aggregations, subqueries.",
    category: "Database & Queries"
  },
  {
    num: "03",
    name: "Excel",
    icon: "Xls",
    color: "#107c41",
    bg: "#e8f5e9",
    level: "Currently Learning",
    progress: "75%",
    description: "Formulas, VLOOKUP, pivot tables, data cleaning, and spreadsheet analysis for business insights.",
    category: "Data Analysis Tool"
  },
  {
    num: "04",
    name: "Power BI",
    icon: "PBI",
    color: "#d97706",
    bg: "#fef3c7",
    level: "Currently Learning",
    progress: "70%",
    description: "Building interactive dashboards, visual reports, KPI tracking, and business metrics.",
    category: "Business Intelligence"
  },
  {
    num: "05",
    name: "HTML",
    icon: "</>",
    color: "#e44d26",
    bg: "#fff0ed",
    level: "Intermediate",
    progress: "85%",
    description: "Semantic HTML5 page structuring, forms, modern web standards, and accessible markup.",
    category: "Web Development"
  },
  {
    num: "06",
    name: "CSS",
    icon: "{ }",
    color: "#0284c7",
    bg: "#f0f9ff",
    level: "Intermediate",
    progress: "82%",
    description: "Modern CSS Grid, Flexbox, responsive layouts, subtle animations, and clean user interfaces.",
    category: "Styling & UI"
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      {/* Background grid & glowing orbs */}
      <div className="skills-grid pointer-events-none"></div>
      <div className="skills-glow glow-one absolute pointer-events-none"></div>
      <div className="skills-glow glow-two absolute pointer-events-none"></div>

      <div className="skills-container">
        <div className="skills-heading">
          <p className="section-label">MY SKILLS</p>
          <h1>Data Analytics Tools &amp; <span>Technical Skills</span></h1>
          <p>
            Key tools, programming languages, and technologies I use for data analysis and software development.
          </p>
        </div>

        {/* Technical Skills 3-column Grid */}
        <div className="skills-grid-container">
          {SKILLS_DATA.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-number">{skill.num}</div>
              <div
                className="skill-icon"
                style={{
                  color: skill.color,
                  background: skill.bg,
                }}
              >
                {skill.icon}
              </div>
              <h2>{skill.name}</h2>
              <span className="skill-level">{skill.level}</span>
              <p>{skill.description}</p>
              <div className="skill-progress">
                <span style={{ width: skill.progress }}></span>
              </div>
            </div>
          ))}
        </div>

        {/* Status banner */}
        <div className="skills-status">
          <span className="status-light"></span>
          <span>Learning • Practicing • Growing</span>
        </div>
      </div>
    </section>
  );
};
