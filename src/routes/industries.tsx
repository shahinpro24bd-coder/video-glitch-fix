import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "@/components/site/pages/IndustriesPage";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | QMEP" },
      { name: "description", content: "MEP and interior solutions for residential and commercial developments, fit-out projects and building infrastructure across the UAE." },
      { property: "og:title", content: "Industries We Serve | QMEP" },
      { property: "og:description", content: "MEP solutions for every project type." },
    ],
  }),
  component: Industries,
});

function Industries() {
  return <IndustriesPage />;
}
