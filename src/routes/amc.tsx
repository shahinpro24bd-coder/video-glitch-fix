import { createFileRoute } from "@tanstack/react-router";
import { AmcPage } from "@/components/site/pages/AmcPage";

export const Route = createFileRoute("/amc")({
  head: () => ({
    meta: [
      { title: "AMC Packages | Annual Maintenance Contracts Dubai | QMEP" },
      { name: "description", content: "Residential, commercial and comprehensive MEP Annual Maintenance Contracts from QMEP Electromechanical and Interior Works LLC." },
      { property: "og:title", content: "Annual Maintenance Contracts | QMEP" },
      { property: "og:description", content: "Planned maintenance for long-term property care." },
    ],
  }),
  component: Amc,
});

function Amc() {
  return <AmcPage />;
}
