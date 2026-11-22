import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/pages/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | QMEP Electromechanical and Interior Works LLC" },
      { name: "description", content: "Established in 2007, QMEP is an experienced MEP contracting company delivering reliable engineering solutions for the UAE construction industry." },
      { property: "og:title", content: "About QMEP Electromechanical and Interior Works LLC" },
      { property: "og:description", content: "Engineering experience. Proven performance. Trusted delivery." },
    ],
  }),
  component: About,
});

function About() {
  return <AboutPage />;
}
