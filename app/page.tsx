import Script from "next/script";

import { HeroSequence } from "@/components/hero/HeroSequence";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { NewsCarousel } from "@/components/sections/NewsCarousel";
import { Outcomes } from "@/components/sections/Outcomes";
import { PlatformSummary } from "@/components/sections/PlatformSummary";
import { RegionalPresenceDeferred } from "@/components/sections/RegionalPresenceDeferred";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyNovo } from "@/components/sections/WhyNovo";
import { getHomepageStructuredData } from "@/lib/structuredData";

export default function HomePage() {
  const structuredData = getHomepageStructuredData();

  return (
    <>
      {structuredData.map((entry, index) => (
        <Script
          key={index}
          id={`homepage-structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}

      <main className="relative">
        <HeroSequence />
        <TrustBar />
        <PlatformSummary />
        <Outcomes />
        <WhyNovo />
        <RegionalPresenceDeferred />
        <NewsCarousel />
        <FinalCTA />
        <SiteFooter />
      </main>
    </>
  );
}
