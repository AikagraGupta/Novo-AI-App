"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { fadeUp } from "@/lib/motion";

const secondaryLinks = [
  { href: "/platform", label: "Explore Platform" },
  { href: "/resources#news-events", label: "News and Updates" },
  { href: "/about#contact-detail", label: "Company Information" }
] as const;

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
        className="glass-panel relative overflow-hidden px-4 py-9 sm:px-8 sm:py-12 lg:px-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(179,72,82,0.12),transparent_22%),radial-gradient(circle_at_20%_18%,rgba(181,138,69,0.16),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.7),transparent_46%)]" />
        <div className="relative mx-auto max-w-[46rem] text-center">
          <p className="copy-kicker mb-4">Let&apos;s talk</p>
          <h2 className="text-balance font-display text-[2.2rem] leading-[1] text-foreground sm:text-[3.25rem] lg:text-[4rem]">
            See Novo on a real claims workflow.
          </h2>
          <p className="mx-auto mt-4 max-w-[34rem] text-[0.92rem] leading-6 text-muted sm:mt-5 sm:text-[0.98rem] sm:leading-7">
            Bring a claims path, document pack, or cost-control question. We
            will show where Novo fits, what it reads, and what your team keeps
            in control.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="#footer-contact"
              className="button-primary interactive-pill w-full sm:w-fit"
            >
              Book a Demo
            </Link>
          </div>

          <div className="mx-auto mt-7 max-w-[42rem] border-t border-gold/16 pt-6">
            <p className="text-sm leading-6 text-foreground/54">
              Still exploring? Start with the path that gives you context first.
            </p>
            <div className="mt-4 flex flex-col justify-center gap-2 sm:flex-row sm:flex-wrap">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="interactive-pill rounded-full border border-gold/18 bg-panel/70 px-4 py-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-foreground/58 transition-colors duration-300 hover:bg-gold/10 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
