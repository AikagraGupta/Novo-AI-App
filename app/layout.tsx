import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { AdaptiveCursor } from "@/components/layout/AdaptiveCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { cn } from "@/lib/cn";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Novo AI | Insurance Intelligence, Designed for Clarity",
  description:
    "A cinematic premium landing page concept for Novo AI, built around scroll-scrubbed insurance intelligence storytelling."
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
          interTight.variable,
          "site-shell antialiased [color-scheme:dark]"
        )}
      >
        <SmoothScrollProvider />
        <AdaptiveCursor />
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(248,252,255,0.08),transparent_16%),radial-gradient(circle_at_55%_12%,rgba(230,62,83,0.16),transparent_26%),linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.32)_100%)]" />
        </div>
        <SiteHeader />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
