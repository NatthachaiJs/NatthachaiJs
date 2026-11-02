"use client";

import SectionHeading from "@/components/SectionHeading";
import { useLang } from "@/app/providers";

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="flex flex-col gap-4">
      <SectionHeading>{t.ui.sectionProjects}</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-3 border border-ink bg-paper p-5"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="flex-1 leading-7 text-muted">{project.description}</p>
            <ul className="flex flex-wrap gap-2 font-mono text-xs">
              {project.tags.map((tag) => (
                <li key={tag} className="border border-line px-2 py-1">
                  {tag}
                </li>
              ))}
            </ul>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm underline underline-offset-4"
            >
              {t.ui.viewProject} →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
