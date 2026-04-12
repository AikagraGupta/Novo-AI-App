"use client";

import type { SVGProps } from "react";
import { motion } from "framer-motion";

import { fadeUp, revealContainer } from "@/lib/motion";

type IconProps = SVGProps<SVGSVGElement>;

function ClockBoltIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.75v4.1l2.65 1.55" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="m17.15 5.6-.55 1.4-1.4.55 1.4.55.55 1.45.55-1.45 1.45-.55-1.45-.55-.55-1.4Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FileCheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M8 3.75h6.5L19.25 8.5V18A2.25 2.25 0 0 1 17 20.25H8A2.25 2.25 0 0 1 5.75 18V6A2.25 2.25 0 0 1 8 3.75Z" />
      <path d="M14 3.75V8.5h4.75" />
      <path
        d="m8.9 13.15 1.8 1.8 4.35-4.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RadarAlertIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M12 12 18.25 5.75" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.75" />
      <path d="M7.1 16.9a6.8 6.8 0 0 1 0-9.8" strokeLinecap="round" />
      <path d="M16.9 16.9a6.8 6.8 0 0 0 0-9.8" strokeLinecap="round" />
      <path d="M4.2 19.8a10.9 10.9 0 0 1 0-15.6" strokeLinecap="round" />
      <path d="M19.8 19.8a10.9 10.9 0 0 0 0-15.6" strokeLinecap="round" />
    </svg>
  );
}

function LayersSyncIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="m12 4 7.25 4L12 12 4.75 8 12 4Z" />
      <path d="m4.75 12 7.25 4 7.25-4" />
      <path d="m4.75 16 7.25 4 7.25-4" />
    </svg>
  );
}

function MessageClarityIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M5.75 6.25h12.5A1.75 1.75 0 0 1 20 8v7a1.75 1.75 0 0 1-1.75 1.75H10l-4.25 3v-3H5.75A1.75 1.75 0 0 1 4 15V8a1.75 1.75 0 0 1 1.75-1.75Z" />
      <path d="M8 10.25h8" strokeLinecap="round" />
      <path d="M8 13.25h5.5" strokeLinecap="round" />
    </svg>
  );
}

const outcomeMetrics = [
  {
    value: "Earlier fraud signals",
    label: "before suspicious behaviour compounds",
    icon: ClockBoltIcon
  },
  {
    value: "Provider-level visibility",
    label: "beyond one-off claim review",
    icon: FileCheckIcon
  },
  {
    value: "Clear evidence trails",
    label: "for escalations and challenge",
    icon: RadarAlertIcon
  },
  {
    value: "Less manual triage",
    label: "for overloaded claims teams",
    icon: LayersSyncIcon
  },
  {
    value: "Sharper cost containment",
    label: "through stronger leakage control",
    icon: MessageClarityIcon
  }
];

export function Outcomes() {
  return (
    <motion.section
      id="outcomes"
      data-cursor-tone="white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealContainer}
      className="section-shell"
    >
      <motion.div variants={fadeUp} className="mb-12 max-w-2xl">
        <p className="section-label">Outcomes</p>
        <h2 className="text-balance font-display text-4xl text-white sm:text-5xl lg:text-6xl">
          The commercial outcome is stronger claims control, not just faster
          processing.
        </h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {outcomeMetrics.map((metric) => (
          <motion.article
            key={metric.label}
            variants={fadeUp}
            data-cursor="card"
            data-cursor-tone="white"
            className="glass-panel interactive-card flex min-h-[220px] flex-col justify-between p-6 sm:p-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] text-white/84 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_14px_34px_rgba(0,0,0,0.2)]">
              <metric.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-balance font-display text-3xl leading-none text-white sm:text-[2.5rem]">
                {metric.value}
              </h3>
              <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-white/45">
                {metric.label}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
