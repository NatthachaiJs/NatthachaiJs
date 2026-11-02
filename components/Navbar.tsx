"use client";

import { useLang, useTheme } from "@/app/providers";
import { site, type Lang } from "@/lib/content";

const languages: Lang[] = ["th", "en"];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 border-b border-ink bg-paper">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="font-mono text-sm font-semibold">
          {site.initials}
        </a>

        <div className="hidden gap-6 font-mono text-sm md:flex">
          <a href="#about" className="underline-offset-4 hover:underline">
            {t.ui.navAbout}
          </a>
          <a href="#projects" className="underline-offset-4 hover:underline">
            {t.ui.navProjects}
          </a>
          <a href="#contact" className="underline-offset-4 hover:underline">
            {t.ui.navContact}
          </a>
        </div>

        <div className="flex items-center gap-2 font-mono text-sm">
          <div role="group" aria-label={t.ui.language} className="flex border border-ink">
            {languages.map((code) => (
              <button
                key={code}
                type="button"
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
                className={`px-2.5 py-1 ${lang === code ? "bg-ink text-paper" : ""}`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button type="button" onClick={toggleTheme} className="border border-ink px-2.5 py-1">
            {theme === "light" ? t.ui.switchToDark : t.ui.switchToLight}
          </button>
        </div>
      </nav>
    </header>
  );
}
