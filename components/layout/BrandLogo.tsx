"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";

type BrandLogoProps = {
  className?: string;
  href?: string;
  size?: "header" | "footer";
  withWordmark?: boolean;
};

export function BrandLogo({
  className,
  href = "/",
  size = "header",
  withWordmark = true
}: BrandLogoProps) {
  const isHeader = size === "header";

  return (
    <Link
      href={href}
      className={cn(
        "interactive-pill inline-flex items-center gap-3 rounded-full",
        isHeader ? "gap-2.5 px-1 py-0.5" : "px-0 py-0",
        className
      )}
    >
      <span
        className={cn(
          "relative overflow-hidden rounded-full ring-1 ring-foreground/8 shadow-[0_10px_24px_rgba(20,39,68,0.12)]",
          isHeader ? "h-8 w-8 sm:h-9 sm:w-9" : "h-14 w-14 sm:h-16 sm:w-16"
        )}
      >
        <Image
          src="/brand/novologo.png"
          alt="Novo AI logo"
          fill
          sizes={isHeader ? "36px" : "64px"}
          className="object-cover"
          priority={isHeader}
        />
      </span>

      {withWordmark ? (
        <span
          className={cn(
            "font-display uppercase tracking-[0.32em] text-foreground transition-colors duration-300 hover:text-gold",
            isHeader ? "text-[0.72rem]" : "text-[0.78rem]"
          )}
        >
          Novo AI
        </span>
      ) : null}
    </Link>
  );
}
