"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import RevealSection from "@/components/RevealSection";
import {
  cvProfile,
  education,
  jobs,
  labels,
  projects,
  skillGroups,
  type Lang,
  type TimelineEntry,
} from "@/lib/cv-content";

const PARTICLE_COUNT = 20;

// Fixed values instead of Math.random() so the server and client render the same markup.
const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 53) % 100,
  duration: 3 + (i % 5),
  delay: (i % 4) * 0.5,
}));

function TimelineList({ items, lang }: { items: TimelineEntry[]; lang: Lang }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div key={item.title.en} className="timeline-item">
          <h3 className="job-title">{item.title[lang]}</h3>
          <p className="company">{item.org[lang]}</p>
          <p className="duration">{item.duration[lang]}</p>
          {item.highlights.length > 0 && (
            <ul className="achievements">
              {item.highlights.map((highlight) => (
                <li key={highlight.en}>{highlight[lang]}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default function CvPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [loaded, setLoaded] = useState(false);
  const [typed, setTyped] = useState(0);
  const [progress, setProgress] = useState(0);

  // Hide the loading screen, then type out the name in the header.
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loaded || typed >= cvProfile.name.length) return;
    const timer = setTimeout(() => setTyped((count) => count + 1), 100);
    return () => clearTimeout(timer);
  }, [loaded, typed]);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === "t") {
        e.preventDefault();
        setLang("th");
      }
      if (e.altKey && e.key === "e") {
        e.preventDefault();
        setLang("en");
      }
      if (e.ctrlKey && e.key === "p") {
        e.preventDefault();
        window.print();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className={`loading${loaded ? " hidden" : ""}`}>
        <div className="spinner" />
      </div>

      <div className="progress-bar" style={{ width: `${progress}%` }} />

      <div className="cv-container">
        <aside className="sidebar">
          <div className="particles" aria-hidden="true">
            {particles.map((particle, i) => (
              <span
                key={i}
                className="particle"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDuration: `${particle.duration}s`,
                  animationDelay: `${particle.delay}s`,
                }}
              />
            ))}
          </div>

          <div className="profile">
            <div className="profile-img">
              <Image
                src={cvProfile.photo}
                alt={cvProfile.name}
                fill
                sizes="150px"
                className="profile-photo"
                priority
              />
            </div>
            <p className="profile-name">{cvProfile.name}</p>
            <p className="title">{cvProfile.title[lang]}</p>

            <div className="language-toggle">
              {(["th", "en"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  className={`lang-btn${lang === code ? " active" : ""}`}
                  onClick={() => setLang(code)}
                >
                  {code === "th" ? "ไทย" : "English"}
                </button>
              ))}
            </div>
          </div>

          <div className="contact-info">
            <h3 className="section-title">{labels.contact[lang]}</h3>
            <div className="contact-item">
              <i className="fas fa-envelope" />
              <a href={`mailto:${cvProfile.email}`}>{cvProfile.email}</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone" />
              <span>{cvProfile.phone}</span>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin" />
              <a href={cvProfile.linkedin} target="_blank" rel="noopener noreferrer">
                {cvProfile.linkedinLabel}
              </a>
            </div>
            <div className="contact-item">
              <i className="fab fa-github" />
              <a href={cvProfile.github} target="_blank" rel="noopener noreferrer">
                {cvProfile.githubLabel}
              </a>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="section-title">{labels.coreSkills[lang]}</h3>
            <div className="skill-tags">
              {cvProfile.coreSkills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <main className="main-content">
          <header className="header">
            <h1 aria-label={cvProfile.name}>{cvProfile.name.slice(0, typed)}</h1>
            <p className="subtitle">{cvProfile.subtitle[lang]}</p>
          </header>

          <RevealSection>
            <h2>{labels.about[lang]}</h2>
            <p className="current-role">{cvProfile.currentRole[lang]}</p>
            <p>{cvProfile.summary[lang]}</p>
          </RevealSection>

          <RevealSection>
            <h2>{labels.experience[lang]}</h2>
            <TimelineList items={jobs} lang={lang} />
          </RevealSection>

          <RevealSection>
            <h2>{labels.projects[lang]}</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card">
                  <h3 className="project-title">{project.title}</h3>
                  <p>{project.description[lang]}</p>
                  <div className="project-tech">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </RevealSection>

          <RevealSection>
            <h2>{labels.skills[lang]}</h2>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div key={group.title.en} className="skill-category">
                  <h3>
                    <i className={`fas ${group.icon}`} /> <span>{group.title[lang]}</span>
                  </h3>
                  <div className="skill-tags">
                    {group.tags.map((tag) => (
                      <span key={tag} className="skill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection>
            <h2>{labels.education[lang]}</h2>
            <TimelineList items={education} lang={lang} />
          </RevealSection>
        </main>
      </div>

      <button type="button" className="download-btn" onClick={() => window.print()}>
        📄 Download PDF
      </button>
    </>
  );
}
