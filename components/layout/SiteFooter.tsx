"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/components/layout/BrandLogo";

export function SiteFooter() {
  const pathname = usePathname();

  const footerColumns = pathname.startsWith("/platform")
    ? [
        {
          title: "Platform",
          links: [
            { href: "/platform#system", label: "Overview" },
            { href: "/platform#workflow", label: "Workflow Demo" },
            { href: "/platform#workflow-coverage", label: "Workflow Coverage" },
            { href: "/platform#integration", label: "Integration" },
            { href: "/#proof", label: "Proof" }
          ]
        },
        {
          title: "Next steps",
          links: [
            { href: "/resources", label: "Resources" },
            { href: "/#contact", label: "Book a Demo" },
            { href: "/", label: "Back to Home" }
          ]
        }
      ]
    : pathname === "/about"
    ? [
        {
          title: "About",
          links: [
            { href: "#mission", label: "Mission" },
            { href: "#values", label: "Values" },
            { href: "#founders", label: "Founders" },
            { href: "#partners", label: "Partners" }
          ]
        },
        {
          title: "Next steps",
          links: [
            { href: "/platform", label: "Platform" },
            { href: "/resources", label: "Resources" },
            { href: "#contact", label: "Book a Demo" },
            { href: "/", label: "Back to Home" }
          ]
        }
      ]
    : pathname === "/resources"
    ? [
        {
          title: "Resources",
          links: [
            { href: "/resources#news-events", label: "News & Events" },
            { href: "/#news-updates", label: "Homepage Updates" },
            { href: "/#proof", label: "Proof" }
          ]
        },
        {
          title: "Next steps",
          links: [
            { href: "/platform", label: "Platform" },
            { href: "/about", label: "About Novo" },
            { href: "/#contact", label: "Book a Demo" }
          ]
        }
      ]
    : [
        {
          title: "Product",
          links: [
            { href: "/#partners", label: "Partners" },
            { href: "/#platform", label: "Platform Summary" },
            { href: "/platform#workflow", label: "Workflow Demo" },
            { href: "/#regional-presence", label: "Regional Presence" }
          ]
        },
        {
          title: "Proof",
          links: [
            { href: "/#proof", label: "Metrics & Proof" },
            { href: "/#why-novo", label: "Why Novo" },
            { href: "/resources", label: "Resources" },
            { href: "/about", label: "About Novo" },
            { href: "/#contact", label: "Book a Demo" }
          ]
        }
      ];

  return (
    <footer id="footer-contact" className="section-shell pt-16 sm:pt-20">
      <div className="quiet-divider" />
      <div className="grid gap-12 py-10 lg:grid-cols-[1.3fr_1fr] lg:py-14">
        <div className="space-y-6">
          <BrandLogo size="footer" />
          <h2 className="max-w-md font-display text-3xl text-foreground sm:text-4xl">
            Evidence-ready review for complex health claims.
          </h2>
          <p className="max-w-lg text-sm leading-7 text-foreground/62">
            Automated extraction, medical coding, and cost-control signals for
            health claims teams.
          </p>
          <p className="max-w-lg text-sm leading-7 text-foreground/50">
            Tell us what workflow you want to improve.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                {column.title}
              </p>
              <div className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="interactive-pill w-fit rounded-full px-2 py-1 text-sm text-foreground/72 transition-colors hover:text-gold"
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
          <p className="mt-3 text-sm text-foreground/50">
            Sales, demos, partnerships, careers, press, and workflow questions.
          </p>
          <p className="mt-4 text-sm leading-7 text-foreground/64">
            202027860M
            <br />
            68 Circular Road #02-01, 049422
            <br />
            Singapore
          </p>
        </div>
        <div className="glass-panel p-6 sm:p-8">
          <p className="copy-kicker">Novo AI (HK) Limited</p>
          <p className="mt-4 text-sm leading-7 text-foreground/64">
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
      <div className="flex flex-col gap-4 py-6 text-[11px] uppercase tracking-[0.28em] text-foreground/38 sm:flex-row sm:items-center sm:justify-between">
        <span>Copyright {"\u00A9"} 2026 Novo AI. All rights reserved.</span>
        <span>Built around evidence-ready review, cost control, and trust</span>
      </div>
    </footer>
  );
}
