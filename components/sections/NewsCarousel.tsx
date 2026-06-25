import Image from "next/image";
import Link from "next/link";

import { NEWS_EVENTS } from "@/lib/resourcesContent";

const HOMEPAGE_NEWS = NEWS_EVENTS.slice(0, 4);

export function NewsCarousel() {
  return (
    <section id="news-updates" className="section-shell">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <p className="section-label">News and updates</p>
          <h2 className="max-w-[15ch] text-balance font-display text-[2.35rem] leading-[0.98] text-foreground sm:text-5xl lg:text-[3.55rem]">
            Where Novo is showing up.
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/resources#news-events"
            className="button-secondary interactive-pill w-fit"
          >
            View Resources
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {HOMEPAGE_NEWS.map((item, index) => (
          <a
            key={`${item.title}-${item.date}`}
            href={item.source}
            target="_blank"
            rel="noreferrer"
            className="interactive-card glass-panel group flex min-h-[22rem] flex-col overflow-hidden"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-gold/14 bg-muted-surface">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                priority={index < 2}
                sizes="(min-width: 1024px) 17rem, (min-width: 640px) 50vw, 100vw"
                className={
                  "imageFit" in item && item.imageFit === "contain"
                    ? "object-contain p-8"
                    : "object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                }
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,248,0)_40%,rgba(20,39,68,0.14)_100%)]" />
            </div>

            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <p className="copy-kicker">{item.date}</p>
              <h3 className="mt-3 text-[1.12rem] leading-tight text-foreground sm:mt-4 sm:text-[1.28rem]">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.84rem] leading-6 text-foreground/62 sm:mt-3 sm:text-sm">
                {item.detail}
              </p>
              <span className="mt-auto pt-6 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-foreground/46 transition-colors duration-300 group-hover:text-gold">
                Open source
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
