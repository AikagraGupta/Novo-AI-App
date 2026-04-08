"use client";

import { motion } from "framer-motion";

import { fadeUp, revealContainer } from "@/lib/motion";

const workflowSteps = [
  {
    step: "01",
    title: "Ingest the operational record",
    description:
      "Bring in claims packs, policy wording, emails, forms, invoices, and prior notes without forcing teams to normalize everything first."
  },
  {
    step: "02",
    title: "Extract and structure evidence",
    description:
      "Pull the key entities, dates, monetary signals, and coverage references that matter across the file."
  },
  {
    step: "03",
    title: "Detect anomalies and leakage risk",
    description:
      "Flag inconsistencies, suspicious patterns, and missing support before they become claim cost or customer friction."
  },
  {
    step: "04",
    title: "Generate reasoning and next actions",
    description:
      "Turn raw evidence into structured summaries, recommended actions, and clear internal reasoning."
  },
  {
    step: "05",
    title: "Surface insight to the business",
    description:
      "Feed operations, claims leadership, and customer-facing teams a view they can act on immediately."
  }
];

export function WorkflowStory() {
  return (
    <motion.section
      id="workflow"
      data-cursor-tone="muted"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      variants={revealContainer}
      className="section-shell"
    >
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div variants={fadeUp} className="max-w-xl">
          <p className="section-label">Workflow story</p>
          <h2 className="text-balance font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            From raw insurance documents to reasoned action.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/64 sm:text-lg">
            The platform narrative should read like a calm operating sequence,
            not a feature dump. Each stage tightens clarity and shortens the
            distance between evidence and decision.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          data-cursor="card"
          data-cursor-label="Flow"
          data-cursor-tone="muted"
          className="glass-panel interactive-card relative p-6 sm:p-8"
        >
          <div className="absolute bottom-10 left-10 top-10 w-px bg-gradient-to-b from-[#ff8b98]/45 via-white/10 to-transparent" />
          <div className="space-y-8">
            {workflowSteps.map((item) => (
              <div key={item.step} className="relative pl-12">
                <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#ff8b98]/25 bg-[#ff5a6b]/8 text-[10px] font-medium uppercase tracking-[0.22em] text-white/76">
                  {item.step}
                </span>
                <h3 className="text-2xl text-white">{item.title}</h3>
                <p className="mt-3 max-w-[52ch] text-sm leading-7 text-white/64 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
