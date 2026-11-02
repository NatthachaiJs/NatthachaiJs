"use client";

import SectionHeading from "@/components/SectionHeading";
import { useLang } from "@/app/providers";
import { site } from "@/lib/content";

const contactLinks = [
  { label: "Email", href: `mailto:${site.links.email}`, external: false },
  { label: "GitHub", href: site.links.github, external: true },
  { label: "LinkedIn", href: site.links.linkedin, external: true },
];

export default function Contact() {
  const { t } = useLang();

  return (
    <section
      id="contact"
      className="flex flex-col gap-6 border border-ink bg-paper p-6 sm:p-8"
    >
      <SectionHeading>{t.ui.sectionContact}</SectionHeading>

      <ul className="grid gap-3 sm:grid-cols-3">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center justify-center border border-ink px-4 py-3 font-mono text-sm hover:bg-ink hover:text-paper"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <footer className="border-t border-line pt-4 font-mono text-xs text-muted">
        © {t.name}
      </footer>
    </section>
  );
}
