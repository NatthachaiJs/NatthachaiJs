export type Lang = "th" | "en";

export const site = {
  initials: "PN",
  // Set to "/profile.jpg" after adding public/profile.jpg
  profileImage: null as string | null,
  links: {
    email: "you@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-username",
  },
};

const th = {
  ui: {
    navAbout: "เกี่ยวกับ",
    navProjects: "ผลงาน",
    navContact: "ติดต่อ",
    sectionAbout: "เกี่ยวกับฉัน",
    sectionProjects: "ผลงาน",
    sectionContact: "ติดต่อ",
    viewProject: "ดูโปรเจกต์",
    switchToDark: "มืด",
    switchToLight: "สว่าง",
    language: "ภาษา",
  },
  name: "ชื่อ นามสกุล",
  role: "Front-end Developer",
  tagline: "สรุปสั้น ๆ ว่าทำอะไรและสนใจอะไร",
  about: [
    "ข้อความแนะนำตัวจะแสดงที่นี่ แก้ไขได้ในไฟล์ lib/content.ts",
    "ย่อหน้าที่สองสำหรับประสบการณ์ ทักษะ หรือสิ่งที่สนใจ",
  ],
  projects: [
    {
      title: "ชื่อโปรเจกต์ 1",
      description: "คำอธิบายสั้น ๆ ว่าโปรเจกต์นี้ทำอะไรและใช้เทคโนโลยีอะไร",
      tags: ["React", "TypeScript"],
      url: "https://example.com",
    },
    {
      title: "ชื่อโปรเจกต์ 2",
      description: "คำอธิบายสั้น ๆ ว่าโปรเจกต์นี้ทำอะไรและใช้เทคโนโลยีอะไร",
      tags: ["Next.js", "Tailwind CSS"],
      url: "https://example.com",
    },
    {
      title: "ชื่อโปรเจกต์ 3",
      description: "คำอธิบายสั้น ๆ ว่าโปรเจกต์นี้ทำอะไรและใช้เทคโนโลยีอะไร",
      tags: ["UI/UX"],
      url: "https://example.com",
    },
  ],
};

export type Dictionary = typeof th;

const en: Dictionary = {
  ui: {
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    sectionAbout: "About me",
    sectionProjects: "Projects",
    sectionContact: "Contact",
    viewProject: "View project",
    switchToDark: "Dark",
    switchToLight: "Light",
    language: "Language",
  },
  name: "Your Name",
  role: "Front-end Developer",
  tagline: "A short line about what you build and what you care about.",
  about: [
    "Your introduction will appear here. Edit it in lib/content.ts.",
    "A second paragraph for experience, skills, or interests.",
  ],
  projects: [
    {
      title: "Project One",
      description: "A short description of what this project does and which tools it uses.",
      tags: ["React", "TypeScript"],
      url: "https://example.com",
    },
    {
      title: "Project Two",
      description: "A short description of what this project does and which tools it uses.",
      tags: ["Next.js", "Tailwind CSS"],
      url: "https://example.com",
    },
    {
      title: "Project Three",
      description: "A short description of what this project does and which tools it uses.",
      tags: ["UI/UX"],
      url: "https://example.com",
    },
  ],
};

export const dictionaries: Record<Lang, Dictionary> = { th, en };
