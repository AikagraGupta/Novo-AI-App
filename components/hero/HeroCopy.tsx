"use client";

import Link from "next/link";
import { motion, useTransform, type MotionValue } from "framer-motion";

type HeroCopyProps = {
  progress: MotionValue<number>;
  sequenceReady: boolean;
};

const heroSignals = [
  "Provider fraud",
  "Pattern detection",
  "Claims leakage",
  "Provider intelligence"
];

export function HeroCopy({ progress, sequenceReady }: HeroCopyProps) {
  const copyY = useTransform(progress, [0, 1], ["0%", "-4%"]);
  const copyOpacity = useTransform(progress, [0, 0.82, 1], [1, 0.96, 0.5]);
  const railOpacity = useTransform(progress, [0, 0.22, 0.82], [0.48, 0.92, 0.4]);

  return (
    <div className="absolute inset-0 z-20">
      <div className="section-shell pointer-events-none grid h-full items-center pb-8 pt-24 sm:pb-10 sm:pt-28 lg:grid-cols-[minmax(0,32rem)_1fr] lg:pb-12 lg:pt-28">
        <motion.div
          style={{ y: copyY, opacity: copyOpacity }}
          className="hero-copy-frame pointer-events-auto max-w-[32rem]"
        >
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="copy-kicker mb-6"
          >
            Novo AI for health insurance claims
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: sequenceReady ? 1 : 0.76, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title max-w-[10.6ch] text-balance font-display text-[clamp(2.5rem,4.7vw,4.7rem)] leading-[0.92] text-white"
          >
            Detect provider fraud earlier.
            <br />
            Strengthen claims control at scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-[31rem] text-pretty text-[0.97rem] leading-7 text-white/70 sm:text-base"
          >
            Novo AI helps health insurers identify suspicious provider billing
            patterns, reduce claims leakage, and turn fragmented claim
            documents into actionable provider intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 space-y-3"
          >
            {[
              "Surface fraudulent billing and documentation patterns",
              "Scale pattern detection at the provider level",
              "Strengthen operational readiness across the claims function"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#8de6f5]/28 bg-[#8de6f5]/6 text-[#a9f3ff]">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      d="m4.5 10.25 3.25 3.25L15.5 5.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="max-w-[31rem] text-[0.96rem] leading-6 text-white/76 sm:text-base sm:leading-7">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#contact"
              data-cursor="cta"
              data-cursor-tone="white"
              className="interactive-pill relative z-10 inline-flex items-center justify-center rounded-full border border-[#8de6f5]/30 bg-[#1f4f5b] px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white shadow-[0_0_40px_rgba(141,230,245,0.14)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book a Demo
            </Link>
          </motion.div>

          <motion.div
            style={{ opacity: railOpacity }}
            className="hero-signal-rail mt-6 hidden flex-wrap gap-3 xl:flex"
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
