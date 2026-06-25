"use client";

import { motion } from "framer-motion";

import { INTEGRATION_ZONES } from "@/lib/homepageContent";
import { fadeUp, revealContainer } from "@/lib/motion";

export function IntegrationBand() {
  return (
    <motion.section
      id="integration"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      variants={revealContainer}
      className="section-shell"
    >
      <motion.div variants={fadeUp} className="glass-panel overflow-hidden p-6 sm:p-8 lg:p-9">
        <div className="mb-8 max-w-4xl">
          <p className="section-label">Integration band</p>
          <h2 className="max-w-[16ch] text-balance font-display text-4xl leading-[0.98] text-foreground sm:text-5xl lg:text-[3.85rem]">
            How we run alongside your systems.
          </h2>
          <p className="mt-5 max-w-[42rem] text-[0.98rem] leading-7 text-muted sm:text-[1.04rem]">
            Novo sits between claim intake and your core system, returning a
            cleaner file for review and payment.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.92fr_1.16fr_0.92fr] lg:items-stretch">
          {INTEGRATION_ZONES.map((zone, index) => (
            <motion.article
              key={zone.title}
              variants={fadeUp}
              className="soft-card flex min-h-[13.5rem] flex-col p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-gold">
                  Zone {index + 1}
                </p>
                {index === 1 ? (
                  <span className="rounded-full border border-red/18 bg-panel px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-red">
                    Needs review
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 font-display text-[1.85rem] leading-[1] text-foreground">
                {zone.title}
              </h3>
              <p className="mt-3 text-[0.9rem] leading-6 text-foreground/62">
                {zone.body}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {zone.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gold/18 bg-panel/86 px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-foreground/58"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-5 rounded-[18px] border border-gold/16 bg-panel/78 px-5 py-4 text-sm leading-6 text-foreground/62"
        >
          Feedback improves routing over time. ISO 27001 and enterprise-grade
          security stay part of the buyer conversation.
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
