export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
}

export interface SkillItem {
  name: string;
  level: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface CareerStage {
  stageNumber: string;
  type: string;
  title: string;
  subtitle: string;
  organization?: string;
  duration?: string;
  status?: string;
  description: string;
  tags: string[];
  learningStatusList?: { name: string; status: string }[];
}

export const PERSONAL_INFO = {
  logoName: "Priyadharshini R",
  name: "PRIYADHARSHINI",
  fullName: "Priyadharshini Ram",
  role: "ASPIRING DATA ANALYST",
  status: "Building Skills in Data Analytics",
  homeIntro: "Final-year Computer Science and Engineering student passionate about data analytics and building practical applications using Python and other data analytics tools.",
  aboutSubheading: "Building a foundation for data-driven problem-solving.",
  aboutContent: "I am a final-year B.E. Computer Science and Engineering student at University College of Engineering Arni, Anna University. I am working toward an entry-level Data Analyst role and developing my skills in Excel, SQL, Python, and Power BI. My background in programming, databases, and software development projects provides a technical foundation for my transition into Data Analytics.",
  careerObjective: "Entry-level Data Analyst candidate with a foundation in Python and MySQL, seeking a role to build expertise in Excel, SQL, Power BI, and data visualization and to support data-driven decision-making.",
  education: "B.E. Computer Science and Engineering",
  university: "University College of Engineering Arni (Anna University)",
  cgpa: "8.27 / 10",
  higherSecondarySchool: "St. Joseph's Girls Higher Secondary School, State Board",
  higherSecondaryScore: "81.33%",
  higherSecondaryYear: "2022 – 2023",
  collegeYear: "2023 – 2027",
  careerDirection: "Data Analytics",
  location: "Arani, Tamil Nadu",
  locationFull: "Arani, Tamil Nadu, India",
  phone: "7604845168",
  email: "priyadharshiniram53@gmail.com",
  linkedin: "https://www.linkedin.com/in/priyadharshini-ram-9049972a2",
  github: "https://github.com/priya29-hash"
};

export const DATA_ANALYTICS_SKILLS: SkillItem[] = [
  { name: "Excel", level: "Currently Learning" },
  { name: "SQL", level: "Advanced" },
  { name: "Python", level: "Advanced" },
  { name: "Power BI", level: "Currently Learning" }
];

export const ADDITIONAL_SKILLS: SkillItem[] = [
  { name: "HTML", level: "Intermediate" },
  { name: "CSS", level: "Intermediate" }
];

export const PROJECTS: Project[] = [
  {
    id: "courier-management-system",
    category: "FULL-STACK APPLICATION",
    title: "Courier Management System",
    description: "Developed a full-stack web application for courier tracking and delivery status with FastAPI, Angular, and MySQL.",
    technologies: ["Python", "FastAPI", "Angular", "MySQL"],
    highlights: [
      "Built high-performance REST APIs with FastAPI and integrated them seamlessly with the Angular frontend.",
      "Engineered database schema and CRUD operations for shipments, vehicles, employees, and payment tracking in MySQL.",
      "Implemented real-time delivery status tracking and role-based management workflows."
    ],
    githubUrl: "https://github.com/priya29-hash/courier-management-system"
  },
  {
    id: "uce-arni-college-chatbot",
    category: "AI INFORMATION CHATBOT",
    title: "UCE Arni AI College Information Chatbot",
    description: "Developed an AI-powered chatbot that answers student queries about college information and services.",
    technologies: ["Flowise", "Google Gemini API"],
    highlights: [
      "Integrated Google Gemini API with Flowise low-code pipeline for natural and contextual query responses.",
      "Structured comprehensive college knowledge base covering admissions, academics, faculty, and campus events.",
      "Designed an intuitive conversational UI delivering instantaneous 24/7 student guidance and assistance."
    ],
    githubUrl: "https://github.com/priya29-hash/uce-arni-college-chatbot"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Python Full Stack Development Intern",
    organization: "Femtosoft Technology",
    duration: "1 Month",
    description: "Trained across FastAPI backend, Angular frontend, and MySQL database layers. Built core modules of the Courier Management System: employee management, delivery tracking, vehicles, and payments.",
    technologies: ["Python", "FastAPI", "Angular", "MySQL"]
  },
  {
    role: "Web Development Intern",
    organization: "CodeBind Technology",
    duration: "15 Days",
    description: "Trained in HTML and CSS fundamentals, including semantic markup and responsive layouts. Developed a tribute webpage from scratch using the box model, flexbox, and typography.",
    technologies: ["HTML", "CSS", "Responsive Layouts"]
  }
];

export const CERTIFICATIONS = [
  {
    title: "Fundamentals of Data Analytics",
    issuer: "Infosys"
  },
  {
    title: "Business Analytics with Excel",
    issuer: "Simplilearn"
  }
];

export const ACHIEVEMENTS = [
  "Third Prize — Techathon, Third Year CSE",
  "Overall Admin Coordinator — National-Level Symposium, University College of Engineering Arni",
  "Volunteered in NSS activities at a government school",
  "Data Analytics Virtual Internship (Job Simulation) — Deloitte Australia (Forage)"
];

export const CAREER_JOURNEY_STAGES: CareerStage[] = [
  {
    stageNumber: "01",
    type: "TRAINING SELECTION",
    organization: "Besant Technologies",
    title: "Selected for Technical Training Program",
    subtitle: "Placement Training Selection",
    duration: "3 Months",
    description: "Selected for a free three-month technical training program after completing the aptitude test, group discussion, and HR selection process.",
    tags: ["Technical Training", "Programming", "Problem Solving"]
  },
  {
    stageNumber: "02",
    type: "CURRENT TECHNOLOGY FOCUS",
    organization: "",
    title: "Data Analytics Skills",
    subtitle: "Developing Data Analysis Competencies",
    status: "Ongoing",
    description: "Currently learning Excel for data analysis, including formulas, conditional functions, sorting, filtering, data cleaning, and basic analysis. Building a foundation for further learning in SQL, Python for Data Analytics, and Power BI.",
    tags: ["Excel", "SQL", "Python", "Power BI"]
  },
  {
    stageNumber: "03",
    type: "UPCOMING PLACEMENTS",
    organization: "",
    title: "Data Analyst Opportunities",
    subtitle: "Placement Preparation",
    status: "Upcoming",
    description: "Preparing for upcoming campus placements and entry-level Data Analyst opportunities through aptitude practice, SQL and technical preparation, analytical projects, and interview practice.",
    tags: ["Aptitude", "SQL Practice", "Analytics Projects", "Technical Interviews"]
  }
];

