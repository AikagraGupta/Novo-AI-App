import Link from "next/link";
import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  ABOUT_VALUE_PILLARS,
  CONTACT_REASONS,
  FOUNDERS,
  PARTNER_POINTS
} from "@/lib/aboutContent";
import { CTA_TARGETS } from "@/lib/homepageContent";

export const metadata: Metadata = {
  title: "About Novo AI | Claims Teams Settle With Confidence",
  description:
    "Novo builds AI that gives claims teams the clarity to settle claims with confidence across complex health insurance environments."
};

export default function AboutPage() {
  return (
    <main className="relative">
      <section className="section-shell pt-32 sm:pt-36 lg:pt-40">
        <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-12">
          <div className="max-w-2xl">
            <p className="copy-kicker mb-6">About Novo</p>
            <h1 className="max-w-[12ch] text-balance font-display text-4xl leading-[0.95] text-foreground sm:text-5xl lg:text-[4.05rem]">
              We build AI that gives claims teams the clarity to settle claims
              with confidence.
            </h1>
            <p className="mt-6 max-w-[43ch] text-base leading-7 text-muted">
              Built for complex health claims, Novo brings complete evidence to
              the people making the decision.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/platform" className="button-primary interactive-pill">
                Platform Overview
              </Link>
              <Link href={CTA_TARGETS.primary} className="button-secondary interactive-pill">
                Book a Demo
              </Link>
            </div>
          </div>

          <div className="glass-panel self-start p-6 sm:p-8 lg:p-9">
            <p className="section-label mb-4">Built for</p>
            <p className="text-[1rem] leading-7 text-foreground/70">
              Health insurance teams that need speed, evidence, and control.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Claims review",
                "Pre-auth",
                "Cost control",
                "Medical operations"
              ].map((item) => (
                <span key={item} className="feature-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="section-shell pt-8 lg:pt-10">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="glass-panel p-7 sm:p-8 lg:p-9">
            <p className="section-label">Who we are</p>
            <h2 className="max-w-[14ch] text-balance font-display text-4xl text-foreground sm:text-5xl lg:text-[3.55rem] lg:leading-[0.98]">
              Built for insurers handling complex health claims.
            </h2>
            <div className="mt-6 space-y-4 text-[0.98rem] leading-7 text-foreground/66">
              <p>
                Novo works with insurers across Asia-Pacific and Europe, helping
                claims teams settle complex health claims faster and with more
                confidence.
              </p>
              <p>
                Our AI structures the evidence, traces outputs back to source,
                and keeps the final decision with reviewers.
              </p>
            </div>
          </article>

          <div className="grid gap-5">
            <article className="glass-panel p-7">
              <p className="copy-kicker">Vision</p>
              <p className="mt-4 text-[1.35rem] leading-tight text-foreground">
                A future where every claim is settled on complete evidence, and
                trust is the result.
              </p>
            </article>
            <article className="glass-panel p-7">
              <p className="copy-kicker">Mission</p>
              <p className="mt-4 text-[0.98rem] leading-7 text-foreground/66">
                Give claims teams the evidence they need, when they need it, so
                routine cases move and exceptions are caught before payment.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="values" className="section-shell">
        <div className="mb-9 max-w-4xl">
          <p className="section-label">What we do</p>
          <h2 className="max-w-[14ch] text-balance font-display text-4xl text-foreground sm:text-5xl lg:text-[3.75rem] lg:leading-[0.98]">
            Values for real claims operations.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {ABOUT_VALUE_PILLARS.map((pillar) => (
            <article key={pillar.title} className="glass-panel interactive-card min-h-[13.5rem] p-6">
              <p className="copy-kicker">Value pillar</p>
              <h3 className="mt-5 max-w-[14ch] font-display text-[2rem] leading-[1] text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-4 text-[0.92rem] leading-6 text-foreground/62">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="founders" className="section-shell">
        <div className="mb-9 max-w-4xl">
          <p className="section-label">Founders</p>
          <h2 className="max-w-[14ch] text-balance font-display text-4xl text-foreground sm:text-5xl lg:text-[3.75rem] lg:leading-[0.98]">
            Built by operators who know AI must work in production.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {FOUNDERS.map((founder) => (
            <article
              key={founder.name}
              className="glass-panel interactive-card h-full p-6 sm:p-7"
            >
              <div className="flex items-start gap-5">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[18px] border border-gold/18 bg-navy text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_34px_rgba(20,39,68,0.14)]">
                  {founder.initials}
                </div>
                <div className="min-w-0">
                  <p className="copy-kicker">{founder.role}</p>
                  <h3 className="mt-4 font-display text-[2.05rem] leading-[1] text-foreground">
                    {founder.name}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-[0.92rem] leading-7 text-foreground/62">
                {founder.body}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {founder.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gold/18 bg-panel/82 px-3 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-foreground/58"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="partners" className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <p className="section-label">Partners</p>
            <h2 className="text-balance font-display text-4xl text-foreground sm:text-5xl lg:text-[3.75rem] lg:leading-[0.98]">
              Practical deployment inside existing enterprise environments.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Novo works with insurance and technology partners to make
              deployment practical.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-7">
            <p className="copy-kicker">Partner coverage</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {PARTNER_POINTS.map((point) => (
                <div
                  key={point}
                  className="rounded-[18px] border border-gold/16 bg-muted-surface/88 px-4 py-3 text-sm leading-6 text-foreground/62"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact-detail" className="section-shell">
        <div className="glass-panel p-7 sm:p-8 lg:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="section-label">Contact</p>
              <h2 className="max-w-[14ch] text-balance font-display text-4xl text-foreground sm:text-5xl lg:text-[3.75rem] lg:leading-[0.98]">
                Tell us what workflow you want to improve.
              </h2>
              <p className="mt-5 max-w-[36rem] text-base leading-7 text-muted">
                Share the market, use case, and claim volume. We will route it
                to the right person.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {CONTACT_REASONS.map((reason) => (
                <div
                  key={reason}
                  className="rounded-[18px] border border-gold/16 bg-muted-surface/88 px-4 py-3 text-sm leading-6 text-foreground/62"
                >
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <SiteFooter />
    </main>
  );
}
