import { createFileRoute } from "@tanstack/react-router";
import { CareersPage } from "@/components/site/pages/CareersPage";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Join QMEP Electromechanical and Interior Works LLC" },
      { name: "description", content: "Explore Projects & Operations, MEP Design & BIM, Commercial & Estimation, and HSE & QA/QC career opportunities at QMEP in Dubai, UAE." },
      { property: "og:title", content: "Careers at QMEP — Dubai, UAE" },
      { property: "og:description", content: "Join QMEP's engineering, BIM, estimation and HSE/QA-QC teams across the UAE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Careers,
});

function Careers() {
  return <CareersPage />;
}