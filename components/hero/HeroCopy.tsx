"use client";

import Link from "next/link";
import { motion, useTransform, type MotionValue } from "framer-motion";

type HeroCopyProps = {
  progress: MotionValue<number>;
  sequenceReady: boolean;
};

const heroSignals = [
  "Partners",
  "AI Platform",
  "Insurance",
  "Trusted Partners"
];

export function HeroCopy({ progress, sequenceReady }: HeroCopyProps) {
  const copyY = useTransform(progress, [0, 1], ["0%", "-4%"]);
  const copyOpacity = useTransform(progress, [0, 0.82, 1], [1, 0.96, 0.5]);
  const railOpacity = useTransform(progress, [0, 0.22, 0.82], [0.48, 0.92, 0.4]);

  return (
    <div className="absolute inset-0 z-20">
      <div className="section-shell pointer-events-none grid h-full items-end pb-14 pt-28 sm:pb-18 sm:pt-32 lg:grid-cols-[minmax(0,33rem)_1fr] lg:items-center lg:pb-20 lg:pt-32">
        <motion.div
          style={{ y: copyY, opacity: copyOpacity }}
          className="pointer-events-auto max-w-[33rem]"
        >
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="copy-kicker mb-6"
          >
            Novo AI for insurance operations
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: sequenceReady ? 1 : 0.76, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[10.5ch] text-balance font-display text-[clamp(2.9rem,5.3vw,5.1rem)] leading-[0.92] text-white"
          >
            Transforming Insurance, One Claim at a Time
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-[30rem] text-pretty text-[0.98rem] leading-7 text-white/70 sm:text-base"
          >
            Streamline operations. Maximize insights. Improve combined ratios.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex max-w-[34rem] flex-col gap-4 sm:flex-row"
          >
            <label
              data-cursor="input"
              data-cursor-tone="crimson"
              className="interactive-input flex min-w-0 flex-1 items-center rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 backdrop-blur-xl"
            >
              <span className="sr-only">Email address</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/38 focus:outline-none"
              />
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#contact"
              data-cursor="cta"
              data-cursor-label="Talk"
              data-cursor-tone="crimson"
              className="interactive-pill relative z-10 inline-flex items-center justify-center rounded-full border border-[#ff8b98]/20 bg-[#ff5a6b] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white shadow-[0_0_40px_rgba(255,90,107,0.24)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="#platform"
              data-cursor="cta"
              data-cursor-label="Demo"
              data-cursor-tone="white"
              className="interactive-pill relative z-10 inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/78 backdrop-blur-xl transition-colors duration-300 hover:text-white"
            >
              Watch Demo
            </Link>
          </motion.div>

          <motion.div
            style={{ opacity: railOpacity }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {heroSignals.map((signal) => (
              <span
                key={signal}
                data-cursor="card"
                data-cursor-tone="muted"
                className="interactive-pill rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.26em] text-white/55 backdrop-blur-xl"
              >
                {signal}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
