import { HeroSequence } from "@/components/hero/HeroSequence";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CapabilityGrid } from "@/components/sections/CapabilityGrid";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { EnterpriseReady } from "@/components/sections/EnterpriseReady";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Outcomes } from "@/components/sections/Outcomes";
import { TrustBar } from "@/components/sections/TrustBar";
import { WorkflowStory } from "@/components/sections/WorkflowStory";

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSequence />
      <TrustBar />
      <CapabilityGrid />
      <WorkflowStory />
      <Outcomes />
      <CaseStudies />
      <EnterpriseReady />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}
