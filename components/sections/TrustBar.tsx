"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/cn";
import { fadeUp, revealContainer } from "@/lib/motion";

const partners = [
  {
    name: "APRIL",
    src: "/partners/april.svg",
    span: "lg:col-span-4",
    logoClassName: "max-h-10 w-auto sm:max-h-12"
  },
  {
    name: "First Round",
    src: "/partners/first-round.svg",
    span: "lg:col-span-4",
    logoClassName: "max-h-16 w-auto sm:max-h-20"
  },
  {
    name: "Deloitte",
    src: "/partners/deloitte.svg",
    span: "lg:col-span-4",
    logoClassName: "max-h-9 w-auto brightness-0 sm:max-h-11"
  },
  {
    name: "discovermarket",
    src: "/partners/discovermarket.png",
    span: "lg:col-span-6",
    logoClassName: "max-h-12 w-auto sm:max-h-14"
  },
  {
    name: "Singapore FinTech Association",
    src: "/partners/sfa.png",
    span: "lg:col-span-6",
    logoClassName: "max-h-16 w-auto sm:max-h-20"
  }
];

export function TrustBar() {
  return (
    <motion.section
      id="partners"
      data-cursor-tone="white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.28 }}
      variants={revealContainer}
      className="section-shell pt-12 lg:pt-18"
    >
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-14">
        <motion.div variants={fadeUp} className="max-w-xl">
          <p className="section-label">Trusted Partners</p>
          <h2 className="text-balance font-display text-4xl text-white sm:text-5xl lg:text-[3.8rem]">
            Backed by operators, investors, and institutions shaping the next era
            of insurance.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/64 sm:text-lg">
            Novo AI sits inside a serious network of insurance and financial
            ecosystem partners. The section should read like quiet credibility,
            not a logo dump.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="partner-wall p-4 sm:p-5">
          <div className="grid gap-4 lg:grid-cols-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                data-cursor="card"
                data-cursor-tone="white"
                className={cn(
                  "partner-tile flex min-h-[148px] items-center justify-center px-8 py-10 sm:min-h-[164px]",
                  partner.span
                )}
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className={partner.logoClassName}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
