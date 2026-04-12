"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { fadeUp } from "@/lib/motion";

export function FinalCTA() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-shell"
    >
      <motion.div
        variants={fadeUp}
        className="glass-panel relative overflow-hidden px-6 py-16 sm:px-10 sm:py-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(248,252,255,0.14),transparent_12%),radial-gradient(circle_at_50%_42%,rgba(255,90,107,0.22),transparent_26%)]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.22] mix-blend-screen"
          style={{ backgroundImage: "url('/sequence-hand/ezgif-frame-097.jpg')" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="copy-kicker mb-6">Book a demo</p>
          <h2 className="text-balance font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            See how Novo AI helps teams spot provider fraud sooner.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/66 sm:text-lg">
            We can walk through how fragmented claim files become earlier fraud
            signals, clearer provider intelligence, and stronger claims
            control.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#hero-heading"
              data-cursor="cta"
              data-cursor-label="Talk"
              data-cursor-tone="crimson"
              className="interactive-pill inline-flex items-center justify-center rounded-full border border-[#ff8b98]/20 bg-[#ff5a6b] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white shadow-[0_0_36px_rgba(255,90,107,0.22)]"
            >
              Book a Demo
            </Link>
            <Link
              href="#workflow"
              data-cursor="cta"
              data-cursor-label="Workflow"
              data-cursor-tone="white"
              className="interactive-pill inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/78 backdrop-blur-xl"
            >
              View the Workflow
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
