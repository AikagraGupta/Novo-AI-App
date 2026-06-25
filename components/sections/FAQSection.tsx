"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { FAQ_ITEMS } from "@/lib/homepageContent";
import { fadeUp, revealContainer } from "@/lib/motion";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <motion.section
      id="faq"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={revealContainer}
      className="section-shell"
    >
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <motion.div variants={fadeUp} className="max-w-xl">
          <p className="section-label">FAQ</p>
          <h2 className="text-balance font-display text-4xl text-foreground sm:text-5xl lg:text-[3.45rem] lg:leading-[0.98]">
            Questions teams ask before they bring a live claims workflow.
          </h2>
          <p className="mt-5 max-w-[38ch] text-base leading-7 text-muted">
            Practical questions once the workflow and proof are visible.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="glass-panel overflow-hidden rounded-[26px]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-start justify-between gap-5 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="max-w-[36ch] text-lg leading-tight text-foreground sm:text-[1.22rem]">
                    {item.question}
                  </span>
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/18 bg-muted-surface/88 text-foreground/70 transition-transform duration-300">
                    <span
                      className={`block text-base leading-none transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gold/14 px-5 pb-5 pt-4 sm:px-6">
                      <p className="max-w-[58ch] text-sm leading-6 text-foreground/62">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
