import {
  PROOF_METRICS,
  TESTIMONIAL_SLOTS
} from "@/lib/homepageContent";

type OutcomesProps = {
  showTestimonials?: boolean;
};

export function Outcomes({ showTestimonials = true }: OutcomesProps) {
  return (
    <section
      id="proof"
      className="relative my-8 overflow-hidden bg-navy py-14 sm:my-12 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(181,138,69,0.22),transparent_26%),radial-gradient(circle_at_84%_24%,rgba(179,72,82,0.16),transparent_22%)]" />

      <div className="section-shell !py-0">
        <div className="mb-7 max-w-4xl sm:mb-12">
          <p className="section-label text-gold">Results / proof</p>
          <h2 className="max-w-[14ch] text-balance font-display text-[2.35rem] leading-[0.98] text-white sm:text-5xl lg:text-[3.95rem] lg:leading-[0.96]">
            Where insurers gain on every claim.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-5">
          {PROOF_METRICS.map((metric) => (
            <article
              key={metric.label}
              className="flex min-h-[8rem] flex-col justify-between rounded-[18px] border border-white/10 bg-white/[0.07] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:min-h-[11rem] sm:rounded-[22px] sm:p-6"
            >
              <h3 className="font-display text-[2.15rem] leading-[0.9] text-white sm:text-[3.25rem] xl:text-[3.9rem]">
                {metric.value}
              </h3>
              <p className="pt-4 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-white/[0.62] sm:pt-5 sm:text-[0.72rem] sm:tracking-[0.14em]">
                {metric.label}
              </p>
            </article>
          ))}
        </div>

        {showTestimonials ? (
        <div id="testimonials" className="mt-12 sm:mt-20 lg:mt-24">
          <div className="mb-6 max-w-3xl">
            <p className="section-label text-gold">Testimonials</p>
            <h3 className="max-w-[16ch] text-balance font-display text-[2.25rem] leading-[0.98] text-white sm:text-[2.9rem]">
              What the teams using Novo say.
            </h3>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {TESTIMONIAL_SLOTS.map((item) => (
              <article
                key={item.company}
                className="flex h-full flex-col rounded-[22px] border border-white/[0.14] bg-white/[0.09] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] lg:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[18px] border border-white/28 bg-white text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy shadow-[0_14px_34px_rgba(0,0,0,0.12)] sm:h-[4.75rem] sm:w-[4.75rem]">
                    {item.mark}
                  </div>

                  <div className="min-w-0 pt-1">
                    <p className="copy-kicker">{item.company}</p>
                    <p className="mt-2 text-[1rem] leading-6 text-white/[0.94]">
                      {item.person}
                    </p>
                  </div>
                </div>

                <blockquote className="mt-5 text-[1.02rem] leading-7 text-white/[0.82] sm:text-[1.1rem]">
                  {item.summary}
                </blockquote>
                <div className="mt-auto pt-6">
                  <p className="text-[0.88rem] leading-6 text-white/[0.62]">
                    {item.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}
      </div>
    </section>
  );
}
