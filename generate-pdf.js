import fs from 'fs';
import PDFDocument from 'pdfkit';
import path from 'path';

const doc = new PDFDocument({ margin: 0, size: 'A4' });
const outputPath = path.join(process.cwd(), 'public', 'Kavinda_Sathsara_CV.pdf');

doc.pipe(fs.createWriteStream(outputPath));

// Colors
const darkBg = '#404040';
const sidebarBg = '#4d4d4d';
const white = '#ffffff';
const textMain = '#2b2b2b';
const textMuted = '#666666';

// Left Sidebar (x: 0, width: 200)
doc.rect(0, 0, 200, 842).fill(sidebarBg);

// Top Right Header Banner (x: 200, y: 0, width: 395, height: 160)
doc.rect(200, 0, 395, 160).fill(darkBg);

// Header Text
doc.fillColor(white).font('Helvetica-Bold').fontSize(26).text('KAVINDA', 230, 45, { characterSpacing: 2 });
doc.fillColor(white).font('Helvetica-Bold').fontSize(26).text('SATHSARA', 230, 75, { characterSpacing: 2 });

doc.rect(230, 112, 180, 1).fill(white);
doc.fillColor(white).font('Helvetica').fontSize(11).text('UNDERGRADUATE IT STUDENT', 230, 122, { characterSpacing: 1 });

// Left Sidebar Content
// Contact Section
let sy = 240;
doc.fillColor(white).font('Helvetica-Bold').fontSize(12).text('C O N T A C T', 25, sy, { characterSpacing: 2 });
doc.rect(25, sy + 16, 150, 0.5).fill(white);

sy += 28;
doc.font('Helvetica').fontSize(9).fillColor(white);
doc.text('Phone: 071-287 3043', 25, sy);
doc.text('Email: kavindasathsara311@gmail.com', 25, sy + 16, { width: 150 });
doc.text('Address: Madakaduruella, Palugama, Keppetipola', 25, sy + 44, { width: 150 });
doc.text('LinkedIn: Kavinda Sathsara', 25, sy + 84);

// Soft Skills Section
sy += 120;
doc.fillColor(white).font('Helvetica-Bold').fontSize(12).text('S O F T   S K I L L S', 25, sy, { characterSpacing: 2 });
doc.rect(25, sy + 16, 150, 0.5).fill(white);

sy += 26;
const softSkills = ['Teamwork', 'Problem Solving', 'Digital Marketing', 'Adaptability', 'Critical Thinking', 'Leadership'];
softSkills.forEach((skill) => {
  doc.font('Helvetica').fontSize(9).fillColor(white).text(`* ${skill}`, 25, sy);
  sy += 15;
});

// Tech Skills Section
sy += 10;
doc.fillColor(white).font('Helvetica-Bold').fontSize(12).text('T E C H   S K I L L S', 25, sy, { characterSpacing: 2 });
doc.rect(25, sy + 16, 150, 0.5).fill(white);

sy += 26;
doc.font('Helvetica-Bold').fontSize(9).fillColor(white).text('Languages: ', 25, sy, { continued: true });
doc.font('Helvetica').text('Java (OOP), C++, SQL, Python (Basics)');

sy += 22;
doc.font('Helvetica-Bold').fontSize(9).fillColor(white).text('Web Development: ', 25, sy, { continued: true });
doc.font('Helvetica').text('HTML5, CSS3, Javascript, Node.js, React');

sy += 28;
doc.font('Helvetica-Bold').fontSize(9).fillColor(white).text('Database Systems: ', 25, sy, { continued: true });
doc.font('Helvetica').text('PostgreSQL, MySQL');

sy += 22;
doc.font('Helvetica-Bold').fontSize(9).fillColor(white).text('Tools: ', 25, sy, { continued: true });
doc.font('Helvetica').text('Git/GitHub, MySQL, IntelliJ, VS Code, MS Office');

// Languages Section
sy += 35;
doc.fillColor(white).font('Helvetica-Bold').fontSize(12).text('L A N G U A G E S', 25, sy, { characterSpacing: 2 });
doc.rect(25, sy + 16, 150, 0.5).fill(white);
sy += 24;
doc.font('Helvetica').fontSize(9).fillColor(white).text('* English (Professional)', 25, sy);
doc.text('* Sinhala (Native)', 25, sy + 16);

// Main Content (Right Side, x: 230)
let ry = 190;

// Profile
doc.fillColor(textMain).font('Helvetica-Bold').fontSize(12).text('P R O F I L E', 230, ry, { characterSpacing: 2 });
doc.rect(230, ry + 16, 335, 0.5).fill('#cccccc');
ry += 24;
doc.font('Helvetica').fontSize(9.5).fillColor(textMuted).text(
  'Currently pursuing a BSc (Hons) in Management and Information Technology (MIT) at the University of Kelaniya (Faculty of Science). Building on a solid science background from Dharmapala College, Bandarawela, I am deeply passionate about Cybersecurity and am working toward specializing in this field. I aim to leverage my analytical skills to protect and secure digital infrastructures.',
  230,
  ry,
  { width: 335, lineGap: 3 }
);

// Education
ry += 95;
doc.fillColor(textMain).font('Helvetica-Bold').fontSize(12).text('E D U C A T I O N', 230, ry, { characterSpacing: 2 });
doc.rect(230, ry + 16, 335, 0.5).fill('#cccccc');
ry += 26;

// Edu Item 1
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(textMain).text('2023', 230, ry);
doc.font('Helvetica-Bold').fontSize(10).fillColor(textMain).text('Dharmapala College Bandarawela', 290, ry);
doc.font('Helvetica').fontSize(9).fillColor(textMuted).text('GCE ADVANCED LEVEL | Z score : 1.3206', 290, ry + 14);

// Edu Item 2
ry += 42;
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(textMain).text('2024 - Present', 230, ry);
doc.font('Helvetica-Bold').fontSize(10).fillColor(textMain).text('University of Kelaniya', 290, ry);
doc.font('Helvetica').fontSize(9).fillColor(textMuted).text('BSc (Hons) in IT - Department of Industrial Management', 290, ry + 14);

// Projects
ry += 55;
doc.fillColor(textMain).font('Helvetica-Bold').fontSize(12).text('P R O J E C T S', 230, ry, { characterSpacing: 2 });
doc.rect(230, ry + 16, 335, 0.5).fill('#cccccc');
ry += 26;

// Project 1
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(textMain).text('i.', 230, ry);
doc.font('Helvetica-Bold').fontSize(10).fillColor(textMain).text('2D Pong Game | C++ Group Project', 250, ry);
ry += 16;
doc.font('Helvetica').fontSize(9).fillColor(textMuted).text('* Programmed real-time physics and collision logic for smooth gameplay.', 250, ry, { width: 315 });
doc.text('* Optimized memory management and game-state tracking using C++.', 250, ry + 14, { width: 315 });

// Project 2
ry += 40;
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(textMain).text('ii.', 230, ry);
doc.font('Helvetica-Bold').fontSize(10).fillColor(textMain).text('Tourism Management & Booking System | Java, OOP, MySQL', 250, ry, { width: 315 });
ry += 16;
doc.font('Helvetica').fontSize(9).fillColor(textMuted).text('* Developed a modular app for hotel and vehicle bookings using OOP principles.', 250, ry, { width: 315 });
doc.text('* Implemented secure authentication and input validation for data safety.', 250, ry + 14, { width: 315 });

doc.end();
console.log('PDF generated successfully at public/Kavinda_Sathsara_CV.pdf');
