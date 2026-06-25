import Link from "next/link";
import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { IntegrationBand } from "@/components/sections/IntegrationBand";
import { Outcomes } from "@/components/sections/Outcomes";
import { WorkflowStory } from "@/components/sections/WorkflowStory";
import {
  CTA_TARGETS,
  PLATFORM_GUARDRAILS,
  PLATFORM_INPUTS,
  PLATFORM_MODULES,
  PLATFORM_OUTPUTS,
  PLATFORM_PAGE_HERO_PILLS,
  PLATFORM_SYSTEM_STEPS
} from "@/lib/homepageContent";

export const metadata: Metadata = {
  title: "Novo AI Platform | Evidence-Ready Claims Review",
  description:
    "Understand how Novo ingests claim evidence, structures medical information, flags cost-control signals, and hands decision-ready files back to existing systems."
};

export default function PlatformPage() {
  return (
    <main className="relative">
      <section className="section-shell pt-32 sm:pt-36 lg:pt-40">
        <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:gap-12">
          <div className="max-w-2xl">
            <p className="copy-kicker mb-6">Platform</p>
            <h1 className="max-w-[12ch] text-balance font-display text-4xl leading-[0.95] text-foreground sm:text-5xl lg:text-[4.05rem]">
              From messy case file to decision-ready workflow.
            </h1>
            <p className="mt-6 max-w-[42ch] text-base leading-7 text-muted">
              Novo reads claim evidence, flags what needs attention, and returns
              reviewer-ready outputs.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={CTA_TARGETS.primary} className="button-primary interactive-pill">
                Book a Demo
              </Link>
              <Link href="#system" className="button-secondary interactive-pill">
                Explore the System
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {PLATFORM_PAGE_HERO_PILLS.map((item) => (
                <span key={item} className="feature-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel self-start p-6 sm:p-8 lg:p-9">
            <p className="section-label mb-4">What the platform does</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="soft-card p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                  Inputs
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/62">
                  {PLATFORM_INPUTS.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="soft-card p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                  Outputs
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/62">
                  {PLATFORM_OUTPUTS.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="soft-card p-5 sm:col-span-2">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                  Platform job
                </p>
                <p className="mt-4 max-w-[42ch] text-sm leading-6 text-foreground/62 sm:text-base">
                  Novo sits between raw evidence and the decision, helping teams
                  structure, flag, and route work while reviewers stay in
                  control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="system" className="section-shell pt-8 lg:pt-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="glass-panel p-7 sm:p-8 lg:p-9">
            <p className="section-label">System overview</p>
            <h2 className="max-w-[13ch] text-balance font-display text-3xl text-foreground sm:text-4xl lg:text-[3rem] lg:leading-[0.98]">
              Four core steps, one consistent claims workflow.
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {PLATFORM_SYSTEM_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="soft-card p-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-[1.1rem] leading-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[24ch] text-sm leading-6 text-foreground/62">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="glass-panel p-7 sm:p-8">
              <p className="section-label">What comes in</p>
              <div className="grid gap-3">
                {PLATFORM_INPUTS.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-gold/16 bg-muted-surface/88 px-4 py-3 text-sm leading-6 text-foreground/62"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-7 sm:p-8">
              <p className="section-label">What comes out</p>
              <div className="grid gap-3">
                {PLATFORM_OUTPUTS.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-gold/16 bg-muted-surface/88 px-4 py-3 text-sm leading-6 text-foreground/62"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkflowStory />

      <section id="workflow-coverage" className="section-shell pt-8 lg:pt-10">
        <div className="mb-10 max-w-3xl">
          <p className="section-label">Workflow coverage</p>
          <h2 className="max-w-[15ch] text-balance font-display text-4xl text-foreground sm:text-5xl lg:text-[3.75rem] lg:leading-[0.98]">
            The platform supports the workflows insurers actually operate.
          </h2>
          <p className="mt-5 max-w-[42ch] text-base leading-7 text-muted">
            Novo fits where document complexity, provider variation, and manual
            review slow teams down.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <div className="grid gap-5 md:grid-cols-2 lg:col-span-8">
            {PLATFORM_MODULES.map((module) => (
              <article
                key={module.title}
                className="glass-panel interactive-card min-h-[185px] p-6"
              >
                <div className="mb-6 h-px w-16 bg-gradient-to-r from-gold/60 via-red/20 to-transparent" />
                <h3 className="max-w-[16ch] text-2xl text-foreground">{module.title}</h3>
                <p className="mt-4 max-w-[34ch] text-sm leading-6 text-foreground/62">
                  {module.body}
                </p>
              </article>
            ))}
          </div>

          <div className="glass-panel p-6 sm:p-7 lg:col-span-4">
            <p className="section-label mb-4">Control and deployment</p>
            <div className="space-y-3">
              {PLATFORM_GUARDRAILS.map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-gold/16 bg-muted-surface/88 px-4 py-3 text-sm leading-6 text-foreground/62"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <IntegrationBand />
      <Outcomes showTestimonials={false} />
      <FAQSection />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}
