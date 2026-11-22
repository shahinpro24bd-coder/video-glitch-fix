import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/site/HomeContent";
import heroPosterAsset from "@/assets/hero-services-hd-poster.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QMEP | Where Quality Meets Speed — MEP Contractor of Choice" },
      { name: "description", content: "Established in 2007, QMEP delivers integrated MEP and interior solutions for construction and development projects across the UAE." },
      { property: "og:title", content: "QMEP | Where Quality Meets Speed — MEP Contractor of Choice" },
      { property: "og:description", content: "20 years of excellence in MEP: mechanical, electrical, plumbing, fire protection, ELV and interior works across the UAE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    // Fetch the hero cover picture first so the top of the page never shows an empty frame.
    links: [{ rel: "preload", as: "image", href: heroPosterAsset.url, fetchPriority: "high" }],
  }),
  component: HomeContent,
});

