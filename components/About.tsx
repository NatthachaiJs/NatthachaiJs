"use client";

import SectionHeading from "@/components/SectionHeading";
import { useLang } from "@/app/providers";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="flex flex-col gap-4 border border-ink bg-paper p-6 sm:p-8">
      <SectionHeading>{t.ui.sectionAbout}</SectionHeading>
      {t.about.map((paragraph) => (
        <p key={paragraph} className="text-lg leading-8">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
