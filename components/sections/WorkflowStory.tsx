import { WORKFLOW_VISUAL_STAGES } from "@/lib/demoContent";

type WorkflowStage = (typeof WORKFLOW_VISUAL_STAGES)[number];

function WorkflowVisual({ stage }: { stage: WorkflowStage }) {
  switch (stage.visual.kind) {
    case "ingestion": {
      const visual = stage.visual;

      return (
        <div className="grid h-full gap-5 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,0.8fr)] sm:items-center">
          <div>
            <p className="text-center text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-foreground/82">
              {stage.eyebrow}
            </p>
            <div className="mt-5 rounded-[22px] bg-[#e9f0ea] p-5">
              <div className="relative mx-auto h-[9.5rem] max-w-[14rem]">
                <div className="absolute left-2 top-7 h-[6.75rem] w-[6.75rem] rounded-[18px] border-4 border-navy/80 bg-panel shadow-[0_14px_30px_rgba(20,39,68,0.1)]" />
                <div className="absolute left-10 top-2 h-[8.6rem] w-[7.4rem] rounded-[18px] border-4 border-navy bg-panel shadow-[0_14px_30px_rgba(20,39,68,0.12)]">
                  <div className="mx-auto mt-5 h-2 w-20 rounded-full bg-navy" />
                  <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-foreground/18" />
                  <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-[#4ca174]/70" />
                  <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-foreground/18" />
                  <div className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-[#4ca174]/70" />
                </div>
                {[2.3, 4.9, 7.5].map((top) => (
                  <span
                    key={top}
                    className="absolute left-0 h-3 w-3 rounded-full bg-[#4ca174]"
                    style={{ top: `${top}rem` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-center text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-foreground/82">
              Extracted data
            </p>
            <div className="mt-5 space-y-3">
              {visual.extracted.map((item) => (
                <div
                  key={item}
                  className="relative rounded-[14px] bg-[#f5ba24] px-4 py-3 text-center text-[1rem] font-semibold text-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]"
                >
                  <span className="absolute -left-10 top-1/2 hidden h-px w-10 -translate-y-1/2 bg-foreground/38 sm:block" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    case "coding": {
      const visual = stage.visual;

      return (
        <div className="mx-auto max-w-[34rem] rounded-[28px] bg-[#fff7e8] p-5 sm:p-6">
          {visual.rows.map((row, index) => (
            <div
              key={row.label}
              className="grid gap-3 py-4 sm:grid-cols-[5rem_7.5rem_1fr] sm:items-center"
            >
              <p className="text-[0.95rem] font-medium text-foreground/68">
                {row.label}
              </p>
              <p className="font-display text-[1.55rem] font-semibold leading-none text-gold">
                {row.value}
              </p>
              <p className="max-w-[18rem] text-[1rem] font-semibold leading-tight text-foreground">
                {row.detail}
              </p>
              {index < visual.rows.length - 1 ? (
                <div className="hidden border-b border-foreground/38 sm:col-span-3 sm:block" />
              ) : null}
            </div>
          ))}
        </div>
      );
    }

    case "abuse": {
      const visual = stage.visual;

      return (
        <div className="mx-auto max-w-[34rem] rounded-[28px] bg-panel p-5 sm:p-6">
          <div className="mx-auto w-fit rounded-[12px] bg-gold px-5 py-2 text-center text-[0.76rem] font-semibold uppercase tracking-[0.04em] text-white">
            Length of stay checked against clinical records
          </div>
          <div className="mt-6 space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between text-[0.98rem] text-foreground">
                <span>Expected</span>
                <strong>7 days</strong>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-gold/14">
                <div className="h-full w-[48%] rounded-full bg-[#f5ba24]" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-[0.98rem] text-foreground">
                <span>Requested</span>
                <strong>14 days</strong>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-gold/14">
                <div className="h-full w-[82%] rounded-full bg-[linear-gradient(90deg,#f5ba24_0_52%,#d70000_52%_100%)]" />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4 rounded-[18px] bg-[#fff7e8] px-5 py-4">
            <span className="text-2xl" aria-hidden="true">
              !
            </span>
            <p className="text-[1rem] font-semibold leading-tight text-foreground">
              {visual.finding}
              <br />
              Clinical reasoning and assessment
            </p>
          </div>
        </div>
      );
    }

    case "financial": {
      const visual = stage.visual;

      return (
        <div className="mx-auto max-w-[34rem] rounded-[28px] bg-[#fff7e8] p-6 text-center">
          <div className="flex items-center justify-between border-b border-foreground/36 pb-3 text-[0.9rem] font-semibold uppercase tracking-[0.08em]">
            <span className="text-foreground">Leakage report</span>
            <span className="text-gold">{visual.provider}</span>
          </div>
          <p className="mt-8 text-[1.3rem] font-semibold leading-tight text-foreground">
            {visual.finding}
          </p>
          <p className="mt-3 font-display text-[2.85rem] font-semibold leading-none text-red sm:text-[3.9rem]">
            {visual.amount}
          </p>
          <p className="mt-2 text-[1.15rem] leading-tight text-foreground">
            {visual.note}
          </p>
        </div>
      );
    }
  }
}

export function WorkflowStory() {
  return (
    <section
      id="workflow"
      className="section-shell"
    >
      <div className="mb-8 max-w-[78rem] sm:mb-10">
        <p className="section-label">Workflow demo</p>
        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(24rem,0.58fr)] lg:items-start lg:gap-12">
          <h2 className="max-w-[14ch] text-balance font-display text-[2.25rem] leading-[0.98] text-foreground sm:text-[3.25rem] lg:text-[4.15rem]">
            From source evidence to leakage control.
          </h2>

          <p className="max-w-[35rem] text-[0.98rem] leading-7 text-muted sm:text-[1.04rem] lg:mt-2">
            A simplified four-step view: ingest messy documents, code the
            medical context, detect suspicious utilization, and quantify
            recoverable leakage.
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {WORKFLOW_VISUAL_STAGES.map((item) => {
          const isRed = item.tone === "red";

          return (
            <article
              key={item.step}
              className="glass-panel interactive-card flex min-h-[34rem] flex-col overflow-hidden p-4 sm:p-5"
            >
              <div className="flex min-h-[19rem] flex-1 items-center justify-center rounded-[22px] border border-gold/14 bg-panel/72 p-4 sm:min-h-[21rem] sm:p-6">
                <WorkflowVisual stage={item} />
              </div>

              <div
                className={
                  isRed
                    ? "mt-4 rounded-[18px] bg-red px-5 py-5 text-white"
                    : "mt-4 rounded-[18px] bg-gold px-5 py-5 text-white"
                }
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="font-display text-[2rem] font-semibold leading-none !text-white sm:text-[2.4rem]">
                    {item.step}.
                  </span>
                  <p
                    className="font-display text-[1.85rem] font-semibold leading-none !text-white sm:text-[2.4rem]"
                    style={{ color: "#fffdf8" }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>

              <div className="px-1 pb-1 pt-4">
                <p className="max-w-[42rem] text-[0.96rem] leading-7 text-foreground/72">
                  {item.body}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-gold/18 bg-muted-surface/62 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-foreground/68"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
