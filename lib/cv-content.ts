export type Lang = "th" | "en";

export type Bilingual = { th: string; en: string };

export type TimelineEntry = {
  title: Bilingual;
  org: Bilingual;
  duration: Bilingual;
  highlights: Bilingual[];
};

export type Project = {
  title: string;
  description: Bilingual;
  tags: string[];
};

export type SkillGroup = {
  icon: string;
  title: Bilingual;
  tags: string[];
};

export const cvProfile = {
  name: "Natthachai Jansri",
  photo: "/images/profile.png",
  title: { th: "Full Stack Developer", en: "Full Stack Developer" },
  subtitle: {
    th: "Full Stack Developer ผู้เชี่ยวชาญ TypeScript, Next.js และ PHP",
    en: "Full Stack Developer specializing in TypeScript, Next.js and PHP",
  },
  currentRole: {
    th: "ปัจจุบันทำงานเป็น Technical Engineer ที่บริษัท ฮิตาชิ ซันเวย์ อินฟอร์เมชั่น ซิสเต็มส์ (ประเทศไทย) จำกัด ตั้งแต่มีนาคม 2026 รับผิดชอบดูแลระบบ SAP Business One (SAP B1)",
    en: "Currently working as a Technical Engineer at Hitachi Sunway Information Systems (Thailand) Ltd. since March 2026, responsible for maintaining SAP Business One (SAP B1) systems.",
  },
  summary: {
    th: "Full Stack Developer ที่มีประสบการณ์ 1 ปี 8 เดือนในการพัฒนา ดูแล และให้การสนับสนุนระบบซอฟต์แวร์สำหรับงานผลิต ดูแลเว็บแอปพลิเคชันใน 4 ประเทศ (ไทย ญี่ปุ่น จีน และมาเลเซีย) และพัฒนาเครื่องมือภายในที่รองรับผู้ใช้งานพร้อมกันกว่า 200 คน ทำงานตั้งแต่การดึงข้อมูลตามความต้องการ แก้ไขบั๊ก ไปจนถึงการปรับปรุง query เชี่ยวชาญ TypeScript, Next.js, ElysiaJS และ PHP พร้อมประสบการณ์ด้าน stored procedures ระบบแจ้งเตือนแบบ real-time และการเชื่อมต่อหลายฐานข้อมูล (MS SQL, Oracle, MySQL)",
    en: "Full Stack Developer with 1 year and 8 months of experience in software development, maintenance, and user support for manufacturing systems. Maintain web applications across 4 countries (Thailand, Japan, China, Malaysia) and develop internal tools for 200+ concurrent users. Provide ongoing support including custom data extraction, bug fixes, and query optimization. Specialized in TypeScript, Next.js, ElysiaJS, and PHP with proven skills in stored procedures, real-time alert systems, and multi-database integration (MS SQL, Oracle, MySQL).",
  },
  email: "Natthachai.jansri@gmail.com",
  phone: "098-603-1686",
  linkedin: "https://linkedin.com/in/ntc-js/",
  linkedinLabel: "linkedin.com/in/ntc-js",
  github: "https://github.com/NatthachaiJs",
  githubLabel: "github.com/NatthachaiJs",
  coreSkills: [
    "SAP Business One",
    "TypeScript",
    "Next.js",
    "ElysiaJS",
    "PHP",
    "MS SQL Server",
    "Docker",
  ],
};

export const labels = {
  contact: { th: "ติดต่อ", en: "Contact" },
  coreSkills: { th: "ทักษะหลัก", en: "Core Skills" },
  about: { th: "เกี่ยวกับฉัน", en: "About Me" },
  experience: { th: "ประสบการณ์การทำงาน", en: "Work Experience" },
  projects: { th: "โครงการหลัก", en: "Key Projects" },
  skills: { th: "ทักษะเทคนิค", en: "Technical Skills" },
  education: { th: "การศึกษา", en: "Education" },
};

export const jobs: TimelineEntry[] = [
  {
    title: { th: "Technical Engineer", en: "Technical Engineer" },
    org: {
      th: "บริษัท ฮิตาชิ ซันเวย์ อินฟอร์เมชั่น ซิสเต็มส์ (ประเทศไทย) จำกัด",
      en: "Hitachi Sunway Information Systems (Thailand) Ltd.",
    },
    duration: {
      th: "มีนาคม 2026 - ปัจจุบัน (8 เดือน)",
      en: "March 2026 - Present (8 months)",
    },
    highlights: [
      {
        th: "รับผิดชอบดูแลระบบ SAP Business One (SAP B1)",
        en: "Responsible for maintaining SAP Business One (SAP B1) systems",
      },
    ],
  },
  {
    title: {
      th: "System Engineer (Full Stack Developer)",
      en: "System Engineer (Full Stack Developer)",
    },
    org: {
      th: "Sony Technology Thailand, Chonburi Manufacturing System Design Team",
      en: "Sony Technology Thailand, Chonburi Manufacturing System Design Team",
    },
    duration: {
      th: "พฤษภาคม 2024 - มกราคม 2026 (1 ปี 8 เดือน)",
      en: "May 2024 - January 2026 (1 year and 8 months)",
    },
    highlights: [
      {
        th: "ดูแลและบำรุงรักษา 23 โปรเจกต์ภายในที่ใช้งานในหลายประเทศ (ไทย ญี่ปุ่น จีน มาเลเซีย)",
        en: "Manage and maintain 23 internal projects deployed across multiple countries (Thailand, Japan, China, Malaysia)",
      },
      {
        th: "พัฒนาและดูแลเว็บแอปพลิเคชันแบบ full-stack สำหรับงานผลิตและระบบควบคุมคุณภาพ",
        en: "Develop and maintain full-stack web applications for manufacturing operations and quality control systems",
      },
      {
        th: "ร่วมโครงการปรับปรุงกระบวนการทางธุรกิจ (BPR) เพื่อเพิ่มการติดตามย้อนกลับ (traceability) และระบบ interlock ของสายการผลิต",
        en: "Participate in Business Process Reengineering (BPR) projects to improve traceability and interlock systems for production lines",
      },
      {
        th: "ประสานงานกับทีมในญี่ปุ่น จีน และมาเลเซียเพื่อนำระบบไปใช้งานและดูแลข้ามประเทศ",
        en: "Collaborate with international teams (Japan, China, Malaysia) for cross-country system deployment and maintenance",
      },
      {
        th: "พัฒนาระบบ monitoring แบบ real-time เพื่อเพิ่มประสิทธิภาพสายการผลิตและการประกันคุณภาพ",
        en: "Implement real-time monitoring solutions for production line efficiency and quality assurance",
      },
    ],
  },
  {
    title: { th: "Frontend Developer Intern", en: "Frontend Developer Intern" },
    org: {
      th: "IBOTNOI COMPANY LIMITED (Remote)",
      en: "IBOTNOI COMPANY LIMITED (Remote)",
    },
    duration: {
      th: "พฤศจิกายน 2023 - กุมภาพันธ์ 2024 (4 เดือน)",
      en: "November 2023 - February 2024 (4 months)",
    },
    highlights: [
      {
        th: "พัฒนาฟีเจอร์ระดับ production ด้วยตนเอง ได้แก่ หน้า pricing UI, dialog ยืนยันการลบ และหน้าประวัติการชำระเงิน",
        en: "Developed production-ready features independently including pricing page UI, delete confirmation dialogs, and payment history interface",
      },
      {
        th: "พัฒนาคอมโพเนนต์ที่ responsive ด้วย Angular และ TypeScript",
        en: "Implemented responsive components using Angular and TypeScript",
      },
      {
        th: "เชื่อมต่อกับ backend API เพื่อแสดงข้อมูลแบบ real-time ฟีเจอร์ที่พัฒนาทั้งหมดใช้งานอยู่บน production แล้ว",
        en: "Integrated with backend APIs for real-time data display - All developed features currently live in production",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "AM-SMART Web Application",
    description: {
      th: "แอปพลิเคชันวิเคราะห์และติดตามข้อมูลการผลิตแบบ real-time พร้อมแดชบอร์ดที่สร้างด้วย Next.js (มิถุนายน 2024 - ปัจจุบัน)",
      en: "Real-time manufacturing data analysis and monitoring system with a Next.js dashboard (June 2024 - Present)",
    },
    tags: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "ElysiaJS",
      "Bun",
      "ECharts",
      "MUI",
      "Ant Design",
      "Redux",
      "PivotTable.js",
      "MS SQL Server",
      "Oracle",
      "MySQL",
      "GitLab CI/CD",
      "Docker",
    ],
  },
  {
    title: "CF_SMART WEB Dashboard",
    description: {
      th: "แดชบอร์ดข้อมูลการผลิตที่พัฒนาและดูแลใช้งานในหลายประเทศ (มิถุนายน 2024 - ปัจจุบัน)",
      en: "Production data dashboards developed and deployed across 4 countries (June 2024 - Present)",
    },
    tags: ["PHP", "HTML", "Bootstrap", "jQuery", "HighCharts", "Ajax", "MS SQL Server"],
  },
  {
    title: "Discord Notification System",
    description: {
      th: "ย้ายระบบแจ้งเตือนระดับองค์กรจาก LINE มาเป็น Discord ด้วย webhook สำหรับการแจ้งเตือนแบบ real-time (ธันวาคม 2024 - กุมภาพันธ์ 2025)",
      en: "Enterprise notification migration from LINE to Discord using webhook-based real-time alerts (Dec 2024 - Feb 2025)",
    },
    tags: ["TypeScript", "ElysiaJS", "Discord Webhooks", "MS SQL Server"],
  },
  {
    title: "Line Call Supporter System",
    description: {
      th: "แอปพลิเคชันเดสก์ท็อปสำหรับสื่อสารในสายการผลิต แทนการเรียกงานด้วยวิธีแมนนวลด้วยระบบขอความช่วยเหลือแบบดิจิทัล (พฤษภาคม 2024 - กันยายน 2024, โครงการระหว่างทดลองงาน)",
      en: "Desktop application that replaces manual production-line calls with a digital request and support system (May 2024 - Sep 2024, probation project)",
    },
    tags: ["C#", ".NET", "WinForms"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    icon: "fa-code",
    title: { th: "ภาษาโปรแกรม", en: "Programming Languages" },
    tags: ["TypeScript", "JavaScript", "PHP", "SQL", "C#", "Python", "Java"],
  },
  {
    icon: "fa-laptop-code",
    title: { th: "Frontend", en: "Frontend" },
    tags: [
      "Next.js",
      "React",
      "Angular",
      "CSS",
      "Bootstrap",
      "Material-UI",
      "Ant Design",
      "HighCharts",
      "ECharts",
      "PivotTable.js",
    ],
  },
  {
    icon: "fa-server",
    title: { th: "Backend", en: "Backend" },
    tags: [
      "Bun.js",
      "Node.js",
      "ElysiaJS",
      "Express.js",
      "NestJS",
      ".NET",
      "RESTful API",
      "Webhook",
    ],
  },
  {
    icon: "fa-database",
    title: { th: "Database", en: "Database" },
    tags: ["MS SQL Server", "Oracle Database", "MySQL", "Multi-database Integration"],
  },
  {
    icon: "fa-tools",
    title: { th: "DevOps & Tools", en: "DevOps & Tools" },
    tags: [
      "Git",
      "GitHub",
      "GitLab",
      "GitLab CI/CD",
      "Docker",
      "Docker Compose",
      "Apache Server",
      "Postman",
      "Scalar (Swagger UI)",
      "n8n",
      "Figma",
      "Notion",
      "SAP Business One",
    ],
  },
  {
    icon: "fa-users",
    title: { th: "Practices", en: "Practices" },
    tags: [
      "Agile/Scrum",
      "OOP",
      "International Team Collaboration",
      "Cross-cultural Communication",
      "Microsoft Office Suite",
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    title: {
      th: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
      en: "Bachelor of Science in Computer Science",
    },
    org: { th: "Burapha University, Chonburi", en: "Burapha University, Chonburi" },
    duration: {
      th: "มิถุนายน 2020 - มีนาคม 2024 | GPAX 3.30",
      en: "June 2020 - March 2024 | GPAX 3.30",
    },
    highlights: [],
  },
  {
    title: { th: "หลักสูตรวิทยาศาสตร์-คณิตศาสตร์", en: "Science-Mathematics Program" },
    org: {
      th: "Banchang Karnchanakulwittaya School, Rayong",
      en: "Banchang Karnchanakulwittaya School, Rayong",
    },
    duration: { th: "2017 - 2020", en: "2017 - 2020" },
    highlights: [],
  },
];
