import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/site/pages/ServicesPage";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | MEP & Interior Works | QMEP" },
      { name: "description", content: "Mechanical, electrical, plumbing and drainage, fire protection, ELV and interior works by QMEP across the UAE." },
      { property: "og:title", content: "Comprehensive Engineering Solutions | QMEP" },
      { property: "og:description", content: "Integrated MEP and interior solutions, from coordination to handover." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return <ServicesPage />;
}
