"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Fades a section in the first time it scrolls near the middle of the screen.
export default function RevealSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" }
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`section${visible ? " visible" : ""}`}>
      {children}
    </section>
  );
}
