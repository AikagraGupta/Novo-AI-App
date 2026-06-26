import { FAQ_ITEMS } from "@/lib/homepageContent";
import { getSiteUrl } from "@/lib/siteConfig";

const SITE_URL = getSiteUrl();

export function getHomepageStructuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Novo AI",
      url: SITE_URL,
      description:
        "Novo AI makes complex health claims decision-ready with automated extraction, medical coding, cost-control signals, and reviewer-ready evidence.",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "68 Circular Road #02-01",
          postalCode: "049422",
          addressLocality: "Singapore",
          addressCountry: "SG"
        },
        {
          "@type": "PostalAddress",
          streetAddress:
            "Unit 1035, 10/F, Building 19W, No. 19 Science Park West Avenue, Hong Kong Science Park, Pak Shek Kok, N.T.",
          addressLocality: "Hong Kong",
          addressCountry: "HK"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Novo AI",
      url: SITE_URL,
      description:
        "Evidence-ready review for complex health claims."
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Novo AI Claims Intelligence Platform",
      brand: {
        "@type": "Brand",
        name: "Novo AI"
      },
      description:
        "A claims review platform that reads claim evidence, structures medical information, surfaces cost-control signals, and returns decision-ready outputs into insurance workflows."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    }
  ];
}
