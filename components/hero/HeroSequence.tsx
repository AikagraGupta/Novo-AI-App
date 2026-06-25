"use client";

import { HeroCopy } from "./HeroCopy";

export function HeroSequence() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_72%_24%,rgba(179,72,82,0.12),transparent_23%),radial-gradient(circle_at_22%_30%,rgba(181,138,69,0.14),transparent_20%),radial-gradient(circle_at_48%_18%,rgba(20,39,68,0.08),transparent_24%)]" />
      <HeroCopy />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
