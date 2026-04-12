import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "#partners", label: "Partners" },
      { href: "#platform", label: "Fraud Detection" },
      { href: "#insurance", label: "Claims Integrity" }
    ]
  },
  {
    title: "Company",
    links: [
      { href: "#workflow", label: "Provider Intelligence" },
      { href: "#outcomes", label: "Outcomes" },
      { href: "#contact", label: "Let's Talk" }
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="section-shell pt-16 sm:pt-20">
      <div className="quiet-divider" />
      <div className="grid gap-12 py-10 lg:grid-cols-[1.3fr_1fr] lg:py-14">
        <div className="space-y-5">
          <p className="copy-kicker">Novo AI</p>
          <h2 className="max-w-md font-display text-3xl text-white sm:text-4xl">
            Earlier fraud signals. Stronger provider oversight.
          </h2>
          <p className="max-w-lg text-sm leading-7 text-white/60">
            Move from manual, reactive review toward more systematic claims
            integrity and tighter leakage control.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                {column.title}
              </p>
              <div className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-cursor="cta"
                    data-cursor-label={link.label}
                    data-cursor-tone="white"
                    className="interactive-pill w-fit rounded-full px-2 py-1 text-sm text-white/72 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-5 pb-10 md:grid-cols-2">
        <div className="glass-panel p-6 sm:p-8">
          <p className="copy-kicker">Novo AI (SG) Pte Ltd</p>
          <p className="mt-4 text-sm leading-7 text-white/62">
            202027860M
            <br />
            68 Circular Road #02-01, 049422
            <br />
            Singapore
          </p>
        </div>
        <div className="glass-panel p-6 sm:p-8">
          <p className="copy-kicker">Novo AI (HK) Limited</p>
          <p className="mt-4 text-sm leading-7 text-white/62">
            Unit 1035, 10/F, Building 19W,
            <br />
            No. 19 Science Park West Avenue,
            <br />
            Hong Kong Science Park,
            <br />
            Pak Shek Kok, N.T., Hong Kong
            <br />
            46341086
          </p>
        </div>
      </div>
      <div className="quiet-divider" />
      <div className="flex flex-col gap-4 py-6 text-[11px] uppercase tracking-[0.28em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <span>Copyright {"\u00A9"} 2026 Novo AI. All rights reserved.</span>
        <span>Built around provider fraud detection and claims integrity</span>
      </div>
    </footer>
  );
}
