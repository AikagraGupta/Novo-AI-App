"use client";

import { motion } from "framer-motion";

import { fadeUp, revealContainer } from "@/lib/motion";

const caseStudyCards = [
  {
    title: "Commercial auto carrier",
    scenario:
      "Used structured document extraction and anomaly ranking to give adjusters a cleaner first look at complex claim files.",
    role: "Claims operations leadership"
  },
  {
    title: "Specialty MGA",
    scenario:
      "Brought wording, endorsements, correspondence, and supporting evidence into one explainable review layer before escalation.",
    role: "Coverage and underwriting operations"
  },
  {
    title: "TPA workflow team",
    scenario:
      "Reframed manual file review into governed summaries with clear evidence lineage from intake through resolution.",
    role: "Shared services and service delivery"
  }
];

export function CaseStudies() {
  return (
    <motion.section
      id="case-studies"
      data-cursor-tone="muted"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={revealContainer}
      className="section-shell"
    >
      <motion.div variants={fadeUp} className="mb-12 max-w-3xl">
        <p className="section-label">Deployment patterns</p>
        <h2 className="text-balance font-display text-4xl text-white sm:text-5xl lg:text-6xl">
          Premium proof does not need noise.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/64 sm:text-lg">
          Instead of a carousel of inflated testimonials, the section stays sparse
          and scenario-led. It shows where Novo AI fits and what changes in the
          work once it is in the loop.
        </p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudyCards.map((card) => (
          <motion.article
            key={card.title}
            variants={fadeUp}
            data-cursor="card"
            data-cursor-label="Case"
            data-cursor-tone="muted"
            className="glass-panel interactive-card min-h-[320px] p-6 sm:p-8"
          >
            <p className="copy-kicker mb-8">{card.role}</p>
            <h3 className="text-3xl text-white">{card.title}</h3>
            <p className="mt-5 text-pretty text-sm leading-7 text-white/64 sm:text-base">
              {card.scenario}
            </p>
            <div className="mt-10 border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.28em] text-white/40">
              Example operating scenario
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
