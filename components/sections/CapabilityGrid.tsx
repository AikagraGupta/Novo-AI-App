"use client";

import type { SVGProps } from "react";
import { motion } from "framer-motion";

import { fadeUp, revealContainer } from "@/lib/motion";

type IconProps = SVGProps<SVGSVGElement>;

function DocumentPulseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M8 3.75h6.5L19.25 8.5V18A2.25 2.25 0 0 1 17 20.25H8A2.25 2.25 0 0 1 5.75 18V6A2.25 2.25 0 0 1 8 3.75Z" />
      <path d="M14 3.75V8.5h4.75" />
      <path
        d="M8.25 13h2l1.25-2.25L13.5 15l1.25-2h1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldSearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M12 3.5c2.9 1.9 5.3 2.7 7 3v5.75c0 4.2-2.45 6.92-7 8.75-4.55-1.83-7-4.55-7-8.75V6.5c1.7-.3 4.1-1.1 7-3Z" />
      <circle cx="10.5" cy="11" r="2.2" />
      <path d="m12.15 12.65 2.35 2.35" strokeLinecap="round" />
    </svg>
  );
}

function ChartPulseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M4.5 18.75h15" strokeLinecap="round" />
      <path d="M7.25 16V9.75" strokeLinecap="round" />
      <path d="M12 16V6.5" strokeLinecap="round" />
      <path d="M16.75 16v-4.75" strokeLinecap="round" />
      <path
        d="m6.25 8.5 4.35-2.15L14 9l3.75-1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MessageSparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M6.25 6.25h11.5A2.25 2.25 0 0 1 20 8.5v6A2.25 2.25 0 0 1 17.75 16.75H11l-3.75 3v-3H6.25A2.25 2.25 0 0 1 4 14.5v-6a2.25 2.25 0 0 1 2.25-2.25Z" />
      <path
        d="m14.1 8.5.45 1.15 1.2.45-1.2.45-.45 1.2-.45-1.2-1.15-.45 1.15-.45.45-1.15Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WorkflowOrbitIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="7.25" cy="12" r="2.25" />
      <circle cx="16.75" cy="7.25" r="2.25" />
      <circle cx="16.75" cy="16.75" r="2.25" />
      <path d="M9.25 11h5.25" strokeLinecap="round" />
      <path d="m14.85 8.7-3.2 2.15" strokeLinecap="round" />
      <path d="m14.85 15.3-3.2-2.15" strokeLinecap="round" />
    </svg>
  );
}

function BrainCircuitIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M9 5.25a3 3 0 0 1 6 0 3.25 3.25 0 0 1 3 3.25c0 .7-.22 1.35-.6 1.9a3.4 3.4 0 0 1 .6 1.95A3.4 3.4 0 0 1 15 15.7v.3a3 3 0 0 1-6 0v-.3A3.4 3.4 0 0 1 6 12.35c0-.72.22-1.39.6-1.95A3.25 3.25 0 0 1 6 8.5 3.25 3.25 0 0 1 9 5.25Z" />
      <path d="M9 8.25h2.25" strokeLinecap="round" />
      <path d="M12.75 8.25H15" strokeLinecap="round" />
      <path d="M12 8.25v7.5" strokeLinecap="round" />
      <path d="M8.5 12H12" strokeLinecap="round" />
      <path d="M12 12h3.5" strokeLinecap="round" />
    </svg>
  );
}

const capabilityCards = [
  {
    title: "Screen Claim Files",
    description:
      "Read hospital invoices, itemized bills, treatment notes, discharge summaries, and correspondence without relying on manual triage alone.",
    span: "lg:col-span-7",
    icon: DocumentPulseIcon
  },
  {
    title: "Detect Fraud Signals",
    description:
      "Surface upcoding, unbundling, inflated billing, medically unnecessary services, and weak documentation before leakage compounds.",
    span: "lg:col-span-5",
    icon: ShieldSearchIcon
  },
  {
    title: "Build Provider Intelligence",
    description:
      "Connect repeated signals across providers, treatments, and claim types so suspicious behaviour is visible as a pattern, not an isolated case.",
    span: "lg:col-span-4",
    icon: ChartPulseIcon
  },
  {
    title: "Prioritize Investigations",
    description:
      "Give claims integrity and SIU teams ranked cases, clearer evidence, and faster routes into targeted review.",
    span: "lg:col-span-4",
    icon: MessageSparkIcon
  },
  {
    title: "Explain Suspicious Claims",
    description:
      "Turn dense claim evidence into concise summaries that help internal stakeholders challenge questionable billing with more confidence.",
    span: "lg:col-span-4",
    icon: WorkflowOrbitIcon
  },
  {
    title: "Strengthen Claims Control",
    description:
      "Feed operations leaders a more systematic view of provider risk, portfolio leakage, and where intervention matters most.",
    span: "lg:col-span-12",
    icon: BrainCircuitIcon
  }
];

export function CapabilityGrid() {
  return (
    <motion.section
      id="platform"
      data-cursor-tone="crimson"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      variants={revealContainer}
      className="section-shell"
    >
      <motion.div variants={fadeUp} className="mb-12 max-w-3xl">
        <p className="section-label">Fraud Detection</p>
        <h2 className="text-balance font-display text-4xl text-white sm:text-5xl lg:text-6xl">
          Fraud detection, provider intelligence, and claims control in one
          operating layer.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/66 sm:text-lg">
          Novo AI helps health insurers move from reactive claim review to
          earlier fraud detection by screening documents at scale, surfacing
          suspicious provider behaviour, and organizing evidence for action.
        </p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-12">
        {capabilityCards.map((card, index) => (
          <motion.article
            key={card.title}
            variants={fadeUp}
            transition={{ delay: index * 0.04 }}
            data-cursor="card"
            data-cursor-tone="crimson"
            className={`glass-panel interactive-card group min-h-[220px] overflow-hidden p-6 sm:p-8 ${card.span}`}
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#ff8b98]/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] text-[#ffd9de] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_30px_rgba(0,0,0,0.22)]">
                <card.icon className="h-5 w-5" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                0{index + 1}
              </span>
            </div>
            <h3 className="max-w-[18ch] text-2xl leading-tight text-white sm:text-[1.8rem]">
              {card.title}
            </h3>
            <p className="mt-4 max-w-[48ch] text-sm leading-7 text-white/64 sm:text-base">
              {card.description}
            </p>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-[#ff5a6b]/40 via-white/12 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
