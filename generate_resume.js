import { jsPDF } from 'jspdf';
import fs from 'fs';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'pt',
  format: 'a4'
});

const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const margin = 40;
const contentWidth = pageWidth - margin * 2;

let y = 38;

// Top Accent Line
doc.setDrawColor(37, 99, 235);
doc.setLineWidth(3);
doc.line(margin, y - 10, pageWidth - margin, y - 10);

// Header Name
doc.setFont('helvetica', 'bold');
doc.setFontSize(20);
doc.setTextColor(15, 23, 42);
doc.text('PRIYADHARSHINI R', pageWidth / 2, y + 10, { align: 'center' });

y += 26;
doc.setFont('helvetica', 'bold');
doc.setFontSize(10.5);
doc.setTextColor(37, 99, 235);
doc.text('ASPIRING DATA ANALYST | B.E. COMPUTER SCIENCE & ENGINEERING', pageWidth / 2, y, { align: 'center' });

y += 15;
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(71, 85, 105);
doc.text('Arani, Tamil Nadu  |  Phone: 7604845168  |  Email: priyadharshiniram53@gmail.com', pageWidth / 2, y, { align: 'center' });

y += 13;
doc.setTextColor(2, 132, 199);
doc.text('LinkedIn: linkedin.com/in/priyadharshini-ram-9049972a  |  GitHub: github.com/priya29-hash', pageWidth / 2, y, { align: 'center' });

y += 16;
doc.setDrawColor(226, 232, 240);
doc.setLineWidth(1);
doc.line(margin, y, pageWidth - margin, y);
y += 16;

function drawSectionHeader(title) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(title.toUpperCase(), margin, y);
  
  y += 4;
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(1.5);
  doc.line(margin, y, margin + 45, y);
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(margin + 45, y, pageWidth - margin, y);
  y += 13;
}

// 1. OBJECTIVE
drawSectionHeader('Objective');
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(51, 65, 85);
const objText = 'Final-year Computer Science and Engineering student developing practical skills in Data Analytics, with an interest in working with data, identifying patterns, and supporting data-driven decisions.';
const objLines = doc.splitTextToSize(objText, contentWidth);
doc.text(objLines, margin, y);
y += objLines.length * 12 + 10;

// 2. EDUCATION
drawSectionHeader('Educational Qualification');
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(15, 23, 42);
doc.text('B.E. Computer Science and Engineering', margin, y);
doc.setFont('helvetica', 'bold');
doc.setTextColor(37, 99, 235);
doc.text('CGPA: 8.27 / 10 (Final Year)', pageWidth - margin, y, { align: 'right' });

y += 12;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(71, 85, 105);
doc.text('University College of Engineering, Arni (Anna University) | 2023 – 2027', margin, y);

y += 15;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(15, 23, 42);
doc.text("Higher Secondary Education (HSC) — State Board", margin, y);
doc.setFont('helvetica', 'bold');
doc.setTextColor(37, 99, 235);
doc.text('Percentage: 81.33%', pageWidth - margin, y, { align: 'right' });

y += 12;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(71, 85, 105);
doc.text("St. Joseph's Girls Higher Secondary School | 2021 – 2023", margin, y);
y += 18;

// 3. SKILLS
drawSectionHeader('Skills');
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(15, 23, 42);
doc.text('Data Analytics Tools: ', margin, y);
let xOffset = margin + doc.getTextWidth('Data Analytics Tools: ');
doc.setFont('helvetica', 'normal');
doc.setTextColor(51, 65, 85);
doc.text('Excel (Currently Learning), SQL (Advanced), Python (Advanced), Power BI (Currently Learning)', xOffset, y);

y += 13;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(15, 23, 42);
doc.text('Additional Technical Skills: ', margin, y);
xOffset = margin + doc.getTextWidth('Additional Technical Skills: ');
doc.setFont('helvetica', 'normal');
doc.setTextColor(51, 65, 85);
doc.text('HTML (Intermediate), CSS (Intermediate)', xOffset, y);

y += 13;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(15, 23, 42);
doc.text('Tools & Frameworks: ', margin, y);
xOffset = margin + doc.getTextWidth('Tools & Frameworks: ');
doc.setFont('helvetica', 'normal');
doc.setTextColor(51, 65, 85);
doc.text('MySQL, FastAPI, Angular, Flowise, Gemini API, Git, GitHub', xOffset, y);
y += 18;

// 4. PROJECTS
drawSectionHeader('Projects');

// Project 1
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(15, 23, 42);
doc.text('Courier Management System', margin, y);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(2, 132, 199);
doc.text('github.com/priya29-hash/courier-management-system', pageWidth - margin, y, { align: 'right' });

y += 12;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(71, 85, 105);
doc.text('Technologies: Python, FastAPI, Angular, MySQL', margin, y);

y += 11;
doc.setTextColor(51, 65, 85);
const p1Points = [
  '• Built a full-stack courier management web application for package tracking and delivery status operations.',
  '• Designed and implemented REST API endpoints using FastAPI and integrated Angular frontend with backend services.',
  '• Developed modules for employee management, delivery tracking, vehicles, and payment handling using MySQL database.'
];
for (const pt of p1Points) {
  doc.text(pt, margin + 8, y);
  y += 11;
}
y += 4;

// Project 2
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(15, 23, 42);
doc.text('UCE Arni College Chatbot', margin, y);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(2, 132, 199);
doc.text('github.com/priya29-hash/uce-arni-college-chatbot', pageWidth - margin, y, { align: 'right' });

y += 12;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(71, 85, 105);
doc.text('Technologies: Flowise, Google Gemini API, JSON', margin, y);

y += 11;
doc.setTextColor(51, 65, 85);
const p2Points = [
  '• Developed an AI-powered college information chatbot designed to answer campus queries accurately.',
  '• Structured campus dataset using JSON and configured conversational workflow in Flowise using Gemini API.'
];
for (const pt of p2Points) {
  doc.text(pt, margin + 8, y);
  y += 11;
}
y += 10;

// 5. INTERNSHIPS & TRAINING
drawSectionHeader('Internship Experience & Training');

// Internship 1
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(15, 23, 42);
doc.text('Python Full-Stack Intern', margin, y);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(71, 85, 105);
doc.text('Femtosoft Technology  |  1 Month', pageWidth - margin, y, { align: 'right' });

y += 11;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);
doc.text('• Trained across Python, FastAPI backend, Angular frontend, and MySQL database layers for full-stack workflows.', margin + 8, y);
y += 11;
doc.text('• Implemented CRUD APIs for courier operations and integrated relational schemas in MySQL.', margin + 8, y);
y += 13;

// Internship 2
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(15, 23, 42);
doc.text('Web Development Intern', margin, y);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(71, 85, 105);
doc.text('CodeBind Technology  |  15 Days', pageWidth - margin, y, { align: 'right' });

y += 11;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);
doc.text('• Trained in HTML, CSS, JavaScript, and MySQL fundamentals, focusing on responsive layout and UI design.', margin + 8, y);
y += 11;
doc.text('• Developed a responsive tribute website with clean front-end code and semantic structure.', margin + 8, y);
y += 13;

// Training Selection
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(15, 23, 42);
doc.text('Placement Training Selection', margin, y);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(71, 85, 105);
doc.text('Besant Technologies  |  3 Months Training Selection', pageWidth - margin, y, { align: 'right' });

y += 11;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);
doc.text('• Selected for a free three-month technical training program through campus placement evaluation.', margin + 8, y);
y += 14;

// 6. ACHIEVEMENTS
drawSectionHeader('Achievements');
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(51, 65, 85);
doc.text('• Secured Third Prize in TECHATHON – Third Year CSE.', margin + 8, y);

const pdfOutput = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync('public/resume.pdf', pdfOutput);
fs.writeFileSync('dist/resume.pdf', pdfOutput);
console.log('Successfully generated public/resume.pdf and dist/resume.pdf with size:', pdfOutput.length);
