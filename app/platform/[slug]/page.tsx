import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  PLATFORM_DETAIL_PAGES,
  PLATFORM_GUARDRAILS,
  PLATFORM_INPUTS,
  PLATFORM_OUTPUTS
} from "@/lib/homepageContent";

type PlatformDetailPageProps = {
  params: {
    slug: string;
  };
};

function getPage(slug: string) {
  return PLATFORM_DETAIL_PAGES.find((page) => page.slug === slug);
}

export function generateStaticParams() {
  return PLATFORM_DETAIL_PAGES.map((page) => ({
    slug: page.slug
  }));
}

export function generateMetadata({
  params
}: PlatformDetailPageProps): Metadata {
  const page = getPage(params.slug);

  if (!page) {
    return {
      title: "Novo AI Platform"
    };
  }

  return {
    title: `${page.title} | Novo AI Platform`,
    description: page.summary
  };
}

export default function PlatformDetailPage({ params }: PlatformDetailPageProps) {
  const page = getPage(params.slug);

  if (!page) {
    notFound();
  }

  const relatedPages = PLATFORM_DETAIL_PAGES.filter(
    (item) => item.slug !== page.slug
  );

  return (
    <main className="relative">
      <section className="section-shell pt-32 sm:pt-36 lg:pt-40">
        <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-12">
          <div className="max-w-2xl">
            <p className="copy-kicker mb-6">{page.eyebrow}</p>
            <h1 className="max-w-[12ch] text-balance font-display text-4xl leading-[0.95] text-foreground sm:text-5xl lg:text-[4.05rem]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-[42ch] text-base leading-7 text-muted">
              {page.summary}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/#contact" className="button-primary interactive-pill">
                Book a Demo
              </Link>
              <Link href="/platform" className="button-secondary interactive-pill">
                Platform Overview
              </Link>
            </div>
          </div>

          <div className="glass-panel self-start p-6 sm:p-8 lg:p-9">
            <p className="section-label mb-4">What this supports</p>
            <div className="grid gap-3">
              {page.points.map((point, index) => (
                <div
                  key={point}
                  className="flex gap-3 rounded-[18px] border border-gold/16 bg-muted-surface/88 px-4 py-3 text-sm leading-6 text-foreground/62"
                >
                  <span className="mt-0.5 shrink-0 rounded-full border border-gold/22 bg-panel px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-gold">
                    0{index + 1}
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-8 lg:pt-10">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="glass-panel p-6 sm:p-7">
            <p className="section-label">Inputs</p>
            <div className="mt-4 grid gap-3">
              {PLATFORM_INPUTS.slice(0, 3).map((item) => (
                <div
                  key={item}
                  className="rounded-[16px] border border-gold/16 bg-muted-surface/88 px-4 py-3 text-sm leading-6 text-foreground/62"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel p-6 sm:p-7">
            <p className="section-label">Outputs</p>
            <div className="mt-4 grid gap-3">
              {PLATFORM_OUTPUTS.slice(0, 3).map((item) => (
                <div
                  key={item}
                  className="rounded-[16px] border border-gold/16 bg-muted-surface/88 px-4 py-3 text-sm leading-6 text-foreground/62"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel p-6 sm:p-7">
            <p className="section-label">Control</p>
            <div className="mt-4 grid gap-3">
              {PLATFORM_GUARDRAILS.slice(0, 3).map((item) => (
                <div
                  key={item}
                  className="rounded-[16px] border border-gold/16 bg-muted-surface/88 px-4 py-3 text-sm leading-6 text-foreground/62"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell">
        <div className="glass-panel p-6 sm:p-8 lg:p-9">
          <div className="mb-6 max-w-2xl">
            <p className="section-label">Related platform pages</p>
            <h2 className="max-w-[15ch] text-balance font-display text-4xl text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[0.98]">
              Move through the platform by workflow need.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {relatedPages.map((item) => (
              <Link
                key={item.slug}
                href={`/platform/${item.slug}`}
                className="interactive-card rounded-[20px] border border-gold/16 bg-muted-surface/72 p-5"
              >
                <p className="copy-kicker">{item.eyebrow}</p>
                <h3 className="mt-4 text-2xl leading-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/62">
                  {item.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <SiteFooter />
    </main>
  );
}
