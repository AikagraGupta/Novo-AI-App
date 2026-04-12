"use client";

import { motion } from "framer-motion";

import { fadeUp, revealContainer } from "@/lib/motion";

const workflowSteps = [
  {
    step: "01",
    title: "Ingest provider and claim evidence",
    description:
      "Bring together invoices, itemized bills, treatment notes, discharge summaries, referral letters, and claim correspondence."
  },
  {
    step: "02",
    title: "Structure billing and clinical signals",
    description:
      "Extract codes, providers, procedures, dates, costs, and documentation gaps so claims can be compared consistently."
  },
  {
    step: "03",
    title: "Detect repeated suspicious patterns",
    description:
      "Surface upcoding, unbundling, excessive utilization, inflated billing, and weak documentation across related claims and providers."
  },
  {
    step: "04",
    title: "Prioritize the right cases",
    description:
      "Give investigators and claims leaders ranked alerts, concise summaries, and evidence trails instead of raw document piles."
  },
  {
    step: "05",
    title: "Build provider-level intelligence",
    description:
      "Turn case-level findings into broader provider oversight, portfolio visibility, and earlier intervention."
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
          <p className="section-label">Provider intelligence workflow</p>
          <h2 className="text-balance font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            From fragmented claim files to provider-level fraud signals.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/64 sm:text-lg">
            Novo AI should read like a disciplined claims-integrity workflow:
            ingest evidence, structure it, surface repeated suspicious
            behaviour, and route teams toward action.
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
