import { createFileRoute } from "@tanstack/react-router";
import { AmcPage } from "@/components/site/pages/AmcPage";

export const Route = createFileRoute("/amc")({
  head: () => ({
    meta: [
      { title: "DLP, O&M & AMC Packages | QMEP Electromechanical Works LLC" },
      { name: "description", content: "Defects Liability Period (DLP) support, preventive and corrective Operation & Maintenance (O&M) and tailored Annual Maintenance Contracts (AMC) in Dubai and across the UAE." },
      { property: "og:title", content: "DLP, O&M & Annual Maintenance Contracts | QMEP" },
      { property: "og:description", content: "Tailored maintenance programmes ensuring reliability, safety, efficiency and longevity of building services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Amc,
});

function Amc() {
  return <AmcPage />;
}
