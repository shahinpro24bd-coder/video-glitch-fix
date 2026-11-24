import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/site/pages/ServicesPage";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | MEP, Fire Safety, ELV & Interior Fit-Out | QMEP" },
      { name: "description", content: "Comprehensive MEP engineering, HVAC, Electrical, Plumbing & Drainage, Fire & Life Safety, ELV & BMS, Interior Design & Fit-Out, DLP, O&M and AMC in the UAE." },
      { property: "og:title", content: "MEP, Fire Safety, ELV & Interior Fit-Out Services | QMEP" },
      { property: "og:description", content: "Turnkey MEP and interior fit-out from concept design and BIM to testing, commissioning, handover and maintenance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return <ServicesPage />;
}
