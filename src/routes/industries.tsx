import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "@/components/site/pages/IndustriesPage";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | QMEP Electromechanical and Interior Works LLC" },
      { name: "description", content: "Turnkey MEP and interior fit-out solutions across healthcare, residential, hospitality, cultural heritage, commercial, retail and industrial developments in the UAE." },
      { property: "og:title", content: "Industries We Serve | QMEP" },
      { property: "og:description", content: "Multidisciplinary MEP and fit-out expertise tailored to every UAE sector." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Industries,
});

function Industries() {
  return <IndustriesPage />;
}
