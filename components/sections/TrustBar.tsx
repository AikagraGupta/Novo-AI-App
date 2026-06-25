import { cn } from "@/lib/cn";

const partners = [
  {
    name: "APRIL",
    src: "/partners/april.svg",
    span: "lg:col-span-4",
    logoClassName: "max-h-10 w-auto sm:max-h-12"
  },
  {
    name: "First Round",
    src: "/partners/first-round.svg",
    span: "lg:col-span-4",
    logoClassName: "max-h-16 w-auto sm:max-h-20"
  },
  {
    name: "Deloitte",
    src: "/partners/deloitte.svg",
    span: "lg:col-span-4",
    logoClassName: "max-h-9 w-auto brightness-0 sm:max-h-11"
  },
  {
    name: "discovermarket",
    src: "/partners/discovermarket.png",
    span: "lg:col-span-6",
    logoClassName: "max-h-12 w-auto sm:max-h-14"
  },
  {
    name: "Singapore FinTech Association",
    src: "/partners/sfa.png",
    span: "lg:col-span-6",
    logoClassName: "max-h-16 w-auto sm:max-h-20"
  }
];

export function TrustBar() {
  return (
    <section
      id="partners"
      className="section-shell py-8 lg:py-10"
    >
      <div className="partner-wall px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[28rem]">
            <p className="copy-kicker">Past clients and partners</p>
            <p className="mt-2 text-sm leading-6 text-foreground/62 sm:text-base">
              Referenced by insurers, operators, investors, and ecosystem
              partners.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:flex-1 lg:grid-cols-5">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className={cn(
                  "partner-tile min-h-[68px] px-4 py-4 sm:min-h-[76px]",
                  partner.name === "discovermarket" || partner.name === "Singapore FinTech Association"
                    ? "lg:col-span-1"
                    : ""
                )}
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className={cn(partner.logoClassName, "max-w-full opacity-88")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
