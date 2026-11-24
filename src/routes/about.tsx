import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/pages/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | QMEP Electromechanical and Interior Works LLC" },
      { name: "description", content: "Established in 2007 (Dubai DED License No. 597867), QMEP brings nearly 20 years of UAE MEP and interior fit-out experience backed by formal Quality, HSE and Sustainability Policies." },
      { property: "og:title", content: "About QMEP Electromechanical and Interior Works LLC" },
      { property: "og:description", content: "Speed and Quality are our core strengths. View our Vision, Mission, Organization Chart, Policies and Dubai DED registration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return <AboutPage />;
}
