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
          <p className="copy-kicker mb-6">Final call to action</p>
          <h2 className="text-balance font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Talk
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/66 sm:text-lg">
            See how Novo AI can help your team streamline operations, maximize
            insights, and improve combined ratios across insurance workflows.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#hero-heading"
              data-cursor="cta"
              data-cursor-label="Talk"
              data-cursor-tone="crimson"
              className="interactive-pill inline-flex items-center justify-center rounded-full border border-[#ff8b98]/20 bg-[#ff5a6b] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white shadow-[0_0_36px_rgba(255,90,107,0.22)]"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="#platform"
              data-cursor="cta"
              data-cursor-label="Platform"
              data-cursor-tone="white"
              className="interactive-pill inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/78 backdrop-blur-xl"
            >
              AI Platform
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
