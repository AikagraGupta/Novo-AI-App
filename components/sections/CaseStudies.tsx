"use client";

import { motion } from "framer-motion";

import { fadeUp, revealContainer } from "@/lib/motion";

const caseStudyCards = [
  {
    title: "Provider billing review",
    scenario:
      "Flag repeated upcoding, unbundling, inflated billing, and documentation gaps across related claims before leakage becomes normalized.",
    role: "Claims integrity and SIU"
  },
  {
    title: "High-cost inpatient claims",
    scenario:
      "Bring invoices, discharge notes, treatment records, and correspondence into one review layer when cost spikes or length-of-stay patterns need closer scrutiny.",
    role: "Medical claims and utilization review"
  },
  {
    title: "Provider portfolio oversight",
    scenario:
      "Track which providers, procedures, and claim cohorts repeatedly surface suspicious patterns so leadership can respond with better controls.",
    role: "Claims leadership and provider management"
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
        <p className="section-label">Use cases</p>
        <h2 className="text-balance font-display text-4xl text-white sm:text-5xl lg:text-6xl">
          The strongest story is where claims integrity teams feel leverage
          first.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/64 sm:text-lg">
          Instead of generic vertical claims, the site should show the highest
          urgency operating scenarios where earlier provider fraud signals
          create real commercial value.
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
              Example claims-integrity workflow
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
