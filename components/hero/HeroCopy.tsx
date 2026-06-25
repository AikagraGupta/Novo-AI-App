"use client";

import Image from "next/image";
import Link from "next/link";

import { CTA_TARGETS } from "@/lib/homepageContent";

export function HeroCopy() {
  return (
    <div className="section-shell grid min-h-[92svh] content-start items-start gap-8 !pt-28 pb-10 sm:min-h-[100svh] sm:gap-10 sm:!pt-28 sm:pb-14 lg:min-h-[88svh] lg:grid-cols-[minmax(0,30rem)_minmax(0,1fr)] lg:content-center lg:items-center lg:gap-[4.5rem] lg:!pt-28 lg:pb-16 xl:gap-20">
      <div className="min-w-0 max-w-[30rem]">
        <h1
          id="hero-heading"
          className="max-w-[13ch] text-balance font-display text-[2.55rem] leading-[0.96] text-foreground sm:text-[3.4rem] lg:text-[3.8rem] lg:leading-[0.96] xl:text-[4.05rem]"
        >
          Uncomplicate complex health claims with{" "}
          evidence-ready review.
        </h1>

        <p className="mt-5 max-w-[27rem] text-[0.98rem] leading-[1.6] text-muted sm:mt-6 sm:text-[1.03rem] sm:leading-[1.65]">
          Turn messy claim evidence into structured review, medical coding, and
          cost-control signals before payment.
        </p>

        <div className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:items-center">
          <Link
            href={CTA_TARGETS.primary}
            className="button-primary interactive-pill w-[calc(100vw-3rem)] max-w-full px-5 text-[0.62rem] tracking-[0.12em] sm:w-auto"
          >
            Book a Demo
          </Link>
          <Link
            href={CTA_TARGETS.sampleAnalysis}
            className="button-secondary interactive-pill w-[calc(100vw-3rem)] max-w-full px-5 text-[0.62rem] tracking-[0.12em] sm:w-auto"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <div className="mt-4 flex flex-col items-start gap-x-3 gap-y-2 text-[0.84rem] text-foreground/54 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center sm:text-[0.88rem]">
          <span>Prefer to understand the platform first?</span>
          <Link
            href={CTA_TARGETS.secondary}
            className="interactive-pill rounded-full py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors duration-300 hover:text-gold"
          >
            Explore Platform
          </Link>
        </div>
      </div>

      <div className="min-w-0 w-full max-w-full sm:w-full sm:max-w-[42rem] lg:max-w-[39rem] lg:justify-self-end xl:max-w-[41rem]">
        <div className="product-window p-3 sm:p-4">
          <div className="relative mt-9 aspect-[4/3] overflow-hidden rounded-[20px] border border-foreground/8 bg-[#eef3f8] sm:aspect-[16/9.7]">
            <Image
              src="/demos/claim-info.png"
              alt="Novo claim review workspace showing the source claim file beside structured claim data."
              fill
              priority
              sizes="(min-width: 1280px) 41rem, (min-width: 1024px) 39rem, 100vw"
              className="scale-[1.1] object-cover object-[42%_18%] sm:scale-[1.2]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,39,68,0.08),transparent_22%,transparent_78%,rgba(20,39,68,0.08)),radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.45),transparent_24%)]" />

            <div className="absolute inset-x-3 bottom-3 max-w-[calc(100%-1.5rem)] rounded-[16px] border border-gold/18 bg-panel/92 px-4 py-3 backdrop-blur-sm sm:inset-x-auto sm:left-4 sm:min-w-[18rem]">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-gold">
                Evidence-ready review layer
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[0.8rem] text-foreground/66">
                <span>Automated extraction</span>
                <span className="h-1 w-1 rounded-full bg-red/60" />
                <span>Medical coding</span>
                <span className="h-1 w-1 rounded-full bg-gold/70" />
                <span>Cost-control signals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
