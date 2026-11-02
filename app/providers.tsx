"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import { dictionaries, type Dictionary, type Lang } from "@/lib/content";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const LangContext = createContext<LangContextValue | null>(null);

// Theme and language live on <html> (data-theme, lang), where the inline script in layout.tsx sets them before paint.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme", "lang"],
  });
  return () => observer.disconnect();
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getLang(): Lang {
  return document.documentElement.lang === "en" ? "en" : "th";
}

// localStorage can throw (private mode, blocked site data); the page still works without it.
function writeStorage(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // The choice only lasts for this visit.
  }
}

export function Providers({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore<Theme>(subscribe, getTheme, () => "light");
  const lang = useSyncExternalStore<Lang>(subscribe, getLang, () => "th");

  function toggleTheme() {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    writeStorage("theme", next);
  }

  function changeLang(next: Lang) {
    document.documentElement.lang = next;
    writeStorage("lang", next);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LangContext.Provider value={{ lang, setLang: changeLang, t: dictionaries[lang] }}>
        {children}
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used inside Providers");
  return value;
}

export function useLang() {
  const value = useContext(LangContext);
  if (!value) throw new Error("useLang must be used inside Providers");
  return value;
}
