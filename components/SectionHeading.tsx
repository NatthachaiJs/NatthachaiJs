import type { ReactNode } from "react";

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 font-mono text-sm tracking-widest uppercase">
      <span className="h-px w-8 bg-ink" aria-hidden="true" />
      {children}
    </h2>
  );
}
