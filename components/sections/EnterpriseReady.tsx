"use client";

import { motion } from "framer-motion";

import { fadeUp, revealContainer } from "@/lib/motion";

const enterprisePoints = [
  {
    title: "Pattern detection",
    body: "Spot repeated suspicious billing and documentation behaviour across providers, not just isolated claim anomalies."
  },
  {
    title: "Evidence structure",
    body: "Turn fragmented claim documents into comparable provider, treatment, and claim-level signals that teams can actually use."
  },
  {
    title: "Auditability",
    body: "Keep source-linked summaries and reasoning trails so escalations, reviews, and challenges are easier to defend."
  },
  {
    title: "Operational fit",
    body: "Support claims integrity, SIU, medical review, and operations teams without forcing a full workflow rebuild."
  }
];

export function EnterpriseReady() {
  return (
    <motion.section
      id="insurance"
      data-cursor-tone="crimson"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={revealContainer}
      className="section-shell"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div variants={fadeUp} className="max-w-xl">
          <p className="section-label">Claims integrity</p>
          <h2 className="text-balance font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            Claims integrity gets stronger when fraud signals are systematic.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/64 sm:text-lg">
            Novo AI should feel like more than document automation. The real
            differentiator is earlier fraud detection, clearer provider
            intelligence, and stronger operational control across the claims
            function.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {enterprisePoints.map((point) => (
            <motion.article
              key={point.title}
              variants={fadeUp}
              data-cursor="card"
              data-cursor-label={point.title}
              data-cursor-tone="crimson"
              className="glass-panel interactive-card min-h-[220px] p-6 sm:p-8"
            >
              <div className="mb-6 h-px w-16 bg-gradient-to-r from-[#ff5a6b]/45 to-transparent" />
              <h3 className="text-2xl text-white">{point.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62 sm:text-base">
                {point.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
