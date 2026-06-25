"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { WHY_NOVO_PILLARS } from "@/lib/homepageContent";
import { fadeUp, revealContainer } from "@/lib/motion";

export function WhyNovo() {
  return (
    <motion.section
      id="why-novo"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.14 }}
      variants={revealContainer}
      className="section-shell"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="section-label">Why Novo</p>
          <h2 className="text-balance font-display text-[2.35rem] leading-[0.96] text-foreground sm:text-[3.35rem] lg:text-[4.35rem]">
            Sharpening the edge in health insurance.
          </h2>
          <p className="mx-auto mt-5 max-w-[42rem] text-[0.98rem] leading-7 text-muted sm:text-[1.04rem]">
            Built for global claims work: mixed evidence, medical coding, cost
            control, and accountable review.
          </p>
        </motion.div>

        <div className="mx-auto mt-7 grid max-w-5xl gap-3 sm:mt-9 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {WHY_NOVO_PILLARS.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              variants={fadeUp}
              className="glass-panel interactive-card flex min-h-[9.75rem] flex-col items-center p-5 text-center sm:min-h-[11.5rem] sm:p-6"
            >
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-gold">
                0{index + 1}
              </p>
              <h3 className="mt-4 max-w-[16ch] text-[1.22rem] font-semibold leading-tight text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[0.86rem] leading-6 text-foreground/62">
                {pillar.body}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-8 flex justify-center">
          <Link href="/platform" className="button-secondary interactive-pill">
            Learn More
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
