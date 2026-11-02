"use client";

import Image from "next/image";
import { useLang } from "@/app/providers";
import { site } from "@/lib/content";

export default function Profile() {
  const { t } = useLang();

  return (
    <section id="top" className="flex flex-col gap-6 border border-ink bg-paper p-6 sm:p-8">
      <div className="relative aspect-square w-full max-w-60 overflow-hidden border border-ink">
        {site.profileImage ? (
          <Image
            src={site.profileImage}
            alt={t.name}
            fill
            sizes="240px"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full items-center justify-center font-mono text-4xl text-muted">
            {site.initials}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-mono text-sm text-muted">{t.role}</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.name}</h1>
        <p className="leading-7 text-muted">{t.tagline}</p>
      </div>
    </section>
  );
}
