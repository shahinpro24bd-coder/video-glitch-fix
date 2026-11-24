import { createFileRoute } from "@tanstack/react-router";
import { CareersPage } from "@/components/site/pages/CareersPage";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Join Our MEP Team in the UAE | QMEP" },
      { name: "description", content: "Explore engineering, site supervision and MEP career opportunities at QMEP Electromechanical and Interior Works LLC in the UAE." },
      { property: "og:title", content: "Careers at QMEP" },
      { property: "og:description", content: "Build your MEP engineering career with QMEP across the UAE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Careers,
});

function Careers() {
  return <CareersPage />;
}