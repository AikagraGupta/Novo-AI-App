"use client";

import { motion } from "framer-motion";

import { fadeUp, revealContainer } from "@/lib/motion";

const enterprisePoints = [
  {
    title: "Read",
    body: "Read policy documents, claims files, invoices, legal correspondence, and customer communications without forcing teams into manual review loops."
  },
  {
    title: "Analyze",
    body: "Analyze complex insurance text to surface relevant evidence, exceptions, pricing signals, fraud indicators, and operational next steps."
  },
  {
    title: "Explain",
    body: "Explain coverage decisions and claim reasoning in clearer language so both internal teams and customers understand the basis for action."
  },
  {
    title: "Operationalize",
    body: "Apply these capabilities across claims processing and customer support workflows that were traditionally handled by humans."
  }
];

export function EnterpriseReady() {
  return (
    <motion.section
      id="insurance"
      data-cursor-tone="crimson"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={revealContainer}
      className="section-shell"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div variants={fadeUp} className="max-w-xl">
          <p className="section-label">Insurance</p>
          <h2 className="text-balance font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            How is GenAI revolutionizing the insurance industry?
          </h2>
          <p className="mt-5 text-base leading-7 text-white/64 sm:text-lg">
            Generative AI and Large Language Models are revolutionizing the
            insurance industry by granting the ability to read, analyze, and
            explain text documents. Novo AI brings these capabilities to
            insurance teams, streamlining workflows like claims processing and
            customer support.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {enterprisePoints.map((point) => (
            <motion.article
              key={point.title}
              variants={fadeUp}
              data-cursor="card"
              data-cursor-label={point.title}
              data-cursor-tone="crimson"
              className="glass-panel interactive-card min-h-[220px] p-6 sm:p-8"
            >
              <div className="mb-6 h-px w-16 bg-gradient-to-r from-[#ff5a6b]/45 to-transparent" />
              <h3 className="text-2xl text-white">{point.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62 sm:text-base">
                {point.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
