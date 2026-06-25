import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { NEWS_EVENTS } from "@/lib/resourcesContent";

export const metadata: Metadata = {
  title: "Novo AI Resources | News, Events, and Media",
  description:
    "Follow Novo AI news, events, podcasts, announcements, and public references around claims AI and insurance operations."
};

export default function ResourcesPage() {
  return (
    <main className="relative">
      <section className="section-shell pt-32 sm:pt-36 lg:pt-40">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="max-w-2xl">
            <p className="copy-kicker mb-6">Resources</p>
            <h1 className="max-w-[13ch] text-balance font-display text-4xl leading-[0.95] text-foreground sm:text-5xl lg:text-[4.05rem]">
              News, events, and public signals around Novo.
            </h1>
            <p className="mt-6 max-w-[42ch] text-base leading-7 text-muted">
              A concise place for announcements, media appearances, event
              mentions, and ecosystem references.
            </p>
          </div>

          <div className="glass-panel self-start p-6 sm:p-8 lg:p-9">
            <p className="section-label mb-4">Current focus</p>
            <p className="text-[1rem] leading-7 text-foreground/68">
              Public references, media mentions, event appearances, and
              ecosystem listings that show Novo&apos;s market activity.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Announcements", "Podcasts", "Events", "Directories"].map(
                (item) => (
                  <span key={item} className="feature-chip">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="news-events" className="section-shell pt-8 lg:pt-10">
        <div className="mb-8 max-w-4xl">
          <p className="section-label">News and events</p>
          <h2 className="max-w-[15ch] text-balance font-display text-4xl text-foreground sm:text-5xl lg:text-[3.75rem] lg:leading-[0.98]">
            Where Novo is showing up.
          </h2>
          <p className="mt-5 max-w-[40rem] text-base leading-7 text-muted">
            Public references that help buyers see momentum across claims AI,
            insurance operations, and the regional ecosystem.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {NEWS_EVENTS.map((event) => (
            <a
              key={`${event.title}-${event.date}`}
              href={event.source}
              target="_blank"
              rel="noreferrer"
              className="glass-panel interactive-card group flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-gold/14 bg-muted-surface">
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={
                    "imageFit" in event && event.imageFit === "contain"
                      ? "object-contain p-8"
                      : "object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  }
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,248,0)_38%,rgba(20,39,68,0.14)_100%)]" />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="copy-kicker">{event.date}</p>
                <h3 className="mt-4 max-w-[22ch] text-[1.35rem] leading-tight text-foreground">
                  {event.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/62">
                  {event.detail}
                </p>
                <span className="mt-auto pt-6 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-foreground/46 transition-colors duration-300 group-hover:text-gold">
                  Open source
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <FinalCTA />
      <SiteFooter />
    </main>
  );
}
