"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { CAPABILITY_PILLARS, PLATFORM_DETAIL_PAGES } from "@/lib/homepageContent";
import { fadeUp, revealContainer } from "@/lib/motion";

function CapabilityClip({ index }: { index: number }) {
  const gradientId = `capability-clip-gradient-${index}`;

  if (index === 0) {
    return (
      <div className="relative h-20 overflow-hidden rounded-[16px] border border-gold/16 bg-panel/80 sm:h-28 sm:rounded-[18px]">
        <svg viewBox="0 0 420 128" aria-hidden="true" className="h-full w-full">
          <defs>
            <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#fffdf8" />
              <stop offset="100%" stopColor="#f1e5cd" />
            </linearGradient>
          </defs>
          <rect width="420" height="128" fill={`url(#${gradientId})`} />
          <rect x="32" y="22" width="112" height="84" rx="16" fill="#fffdf8" stroke="rgba(20,39,68,0.12)" />
          <rect x="52" y="40" width="52" height="6" rx="3" fill="rgba(20,39,68,0.18)" />
          <rect x="52" y="58" width="74" height="7" rx="3.5" fill="rgba(181,138,69,0.58)" />
          <rect x="52" y="76" width="56" height="5" rx="2.5" fill="rgba(20,39,68,0.16)" />
          <rect x="52" y="89" width="70" height="5" rx="2.5" fill="rgba(20,39,68,0.12)" />
          <path d="M156 65 C182 65 185 42 213 42" fill="none" stroke="rgba(181,138,69,0.62)" strokeWidth="3" strokeLinecap="round" />
          <path d="M156 77 C184 77 190 89 216 89" fill="none" stroke="rgba(20,39,68,0.16)" strokeWidth="3" strokeLinecap="round" />
          <rect x="214" y="24" width="166" height="82" rx="18" fill="rgba(255,253,248,0.84)" stroke="rgba(20,39,68,0.1)" />
          {[0, 1, 2].map((row) => (
            <g key={row} transform={`translate(232 ${42 + row * 20})`}>
              <circle cx="0" cy="0" r="4" fill={row === 0 ? "#b58a45" : "rgba(20,39,68,0.22)"} />
              <rect x="14" y="-4" width={row === 1 ? 94 : 112} height="8" rx="4" fill={row === 0 ? "rgba(181,138,69,0.34)" : "rgba(20,39,68,0.12)"} />
              <rect x="132" y="-4" width="18" height="8" rx="4" fill="rgba(20,39,68,0.1)" />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="relative h-20 overflow-hidden rounded-[16px] border border-gold/16 bg-panel/80 sm:h-28 sm:rounded-[18px]">
        <svg viewBox="0 0 420 128" aria-hidden="true" className="h-full w-full">
          <rect width="420" height="128" fill="#fffaf0" />
          <rect x="38" y="28" width="92" height="72" rx="18" fill="#fffdf8" stroke="rgba(20,39,68,0.11)" />
          <rect x="58" y="48" width="45" height="7" rx="3.5" fill="rgba(20,39,68,0.16)" />
          <rect x="58" y="68" width="54" height="18" rx="9" fill="rgba(181,138,69,0.18)" />
          <path d="M145 64 H185" stroke="rgba(20,39,68,0.18)" strokeWidth="4" strokeLinecap="round" />
          <path d="M178 56 L188 64 L178 72" fill="none" stroke="rgba(20,39,68,0.22)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="188" y="22" width="82" height="84" rx="22" fill="rgba(179,72,82,0.1)" stroke="rgba(179,72,82,0.2)" />
          <circle cx="229" cy="64" r="21" fill="rgba(179,72,82,0.12)" stroke="rgba(179,72,82,0.35)" />
          <path d="M229 51 V66" stroke="#b34852" strokeWidth="5" strokeLinecap="round" />
          <circle cx="229" cy="76" r="2.8" fill="#b34852" />
          <path d="M286 64 H326" stroke="rgba(181,138,69,0.42)" strokeWidth="4" strokeLinecap="round" />
          <path d="M319 56 L329 64 L319 72" fill="none" stroke="rgba(181,138,69,0.52)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="320" y="28" width="64" height="72" rx="18" fill="#fffdf8" stroke="rgba(20,39,68,0.11)" />
          <circle cx="352" cy="56" r="12" fill="rgba(20,39,68,0.14)" />
          <rect x="340" y="75" width="24" height="7" rx="3.5" fill="rgba(20,39,68,0.18)" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative h-20 overflow-hidden rounded-[16px] border border-gold/16 bg-panel/80 sm:h-28 sm:rounded-[18px]">
      <svg viewBox="0 0 420 128" aria-hidden="true" className="h-full w-full">
        <rect width="420" height="128" fill="#fffaf0" />
        <path d="M78 76 C114 42 164 96 204 54 C241 16 294 38 342 30" fill="none" stroke="rgba(181,138,69,0.5)" strokeWidth="4" strokeLinecap="round" />
        <path d="M78 90 C126 70 154 102 202 82 C240 66 276 72 344 58" fill="none" stroke="rgba(20,39,68,0.18)" strokeWidth="4" strokeLinecap="round" />
        {[
          [78, 76, 15, "#b58a45"],
          [152, 86, 11, "rgba(20,39,68,0.34)"],
          [204, 54, 16, "#b58a45"],
          [270, 42, 12, "rgba(20,39,68,0.34)"],
          [342, 30, 17, "#b58a45"],
          [202, 82, 10, "rgba(20,39,68,0.28)"],
          [344, 58, 11, "rgba(20,39,68,0.28)"]
        ].map(([cx, cy, r, fill]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r={Number(r) + 8} fill={`${fill}`} opacity="0.12" />
            <circle cx={cx} cy={cy} r={r} fill={`${fill}`} stroke="#fffdf8" strokeWidth="4" />
          </g>
        ))}
        <rect x="38" y="22" width="88" height="84" rx="18" fill="rgba(255,253,248,0.72)" stroke="rgba(20,39,68,0.1)" />
        <circle cx="82" cy="56" r="22" fill="none" stroke="rgba(181,138,69,0.38)" strokeWidth="12" />
        <path d="M82 34 A22 22 0 0 1 104 56" fill="none" stroke="#b58a45" strokeWidth="12" strokeLinecap="round" />
        <rect x="58" y="86" width="48" height="6" rx="3" fill="rgba(20,39,68,0.16)" />
      </svg>
    </div>
  );
}

export function PlatformSummary() {
  return (
    <motion.section
      id="platform"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={revealContainer}
      className="section-shell"
    >
      <motion.div variants={fadeUp} className="mb-8 max-w-4xl">
        <p className="section-label">Platform summary</p>
        <h2 className="max-w-[16ch] text-balance font-display text-[2.35rem] leading-[0.96] text-foreground sm:text-[3.3rem] lg:text-[4.25rem]">
          Make every claims review smarter with the next layer.
        </h2>
        <p className="mt-5 max-w-[39rem] text-[0.98rem] leading-7 text-muted sm:text-[1.04rem]">
          Novo puts claim evidence, provider patterns, and review context in one
          cleaner operating layer.
        </p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-3">
        {CAPABILITY_PILLARS.map((pillar, index) => (
          <motion.article
            key={pillar.title}
            variants={fadeUp}
            className="glass-panel interactive-card group flex min-h-[16rem] flex-col p-5 sm:min-h-[20rem] sm:p-6 lg:p-7"
          >
            <CapabilityClip index={index} />

            <p className="mt-4 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold sm:mt-6 sm:text-[0.66rem]">
              {pillar.eyebrow}
            </p>

            <h3 className="mt-3 max-w-[12ch] font-display text-[1.72rem] font-semibold leading-[1] text-foreground sm:mt-4 sm:text-[2.3rem]">
              <span className="text-gold">{pillar.highlight}</span>{" "}
              {pillar.title.replace(pillar.highlight, "").trim()}
            </h3>
            <p className="mt-3 text-[0.9rem] leading-6 text-foreground/62 sm:mt-4 sm:text-[0.94rem]">
              {pillar.body}
            </p>

            <div className="mt-auto pt-4 sm:pt-6">
              <Link
                href={`/platform/${PLATFORM_DETAIL_PAGES[index].slug}`}
                className="interactive-pill inline-flex rounded-full border border-gold/18 bg-panel/74 px-4 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-foreground/58 transition-colors duration-300 hover:bg-gold/10 hover:text-foreground"
              >
                Learn More
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
