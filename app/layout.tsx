import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { cn } from "@/lib/cn";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const interDisplay = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Novo AI | Evidence-Ready Review for Complex Health Claims",
  description:
    "Novo AI makes complex health claims decision-ready with automated extraction, medical coding, cost-control signals, and reviewer-ready evidence.",
  icons: {
    icon: "/brand/novologo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={cn(
          inter.variable,
          interDisplay.variable,
          "site-shell antialiased [color-scheme:light]"
        )}
      >
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,10,10,0.045),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.32)_0%,rgba(255,255,255,0)_26%,rgba(0,0,0,0.03)_100%)]" />
        </div>
        <SiteHeader />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
