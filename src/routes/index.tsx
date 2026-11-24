import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/site/HomeContent";
import heroPosterAsset from "@/assets/hero-services-hd-poster.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QMEP | Where Quality Meets Speed — MEP Contractor of Choice" },
      { name: "description", content: "Established in 2007 in Dubai, QMEP Electromechanical and Interior Works LLC delivers turnkey MEP, Fire & Life Safety, ELV/BMS, Interior Fit-Out and AMC solutions across the UAE." },
      { property: "og:title", content: "QMEP | Where Quality Meets Speed — MEP Contractor of Choice" },
      { property: "og:description", content: "Nearly 20 years of MEP & interior fit-out excellence in the UAE: concept & BIM through installation, TAB, handover, DLP, O&M and AMC." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    // Fetch the hero cover picture first so the top of the page never shows an empty frame.
    links: [{ rel: "preload", as: "image", href: heroPosterAsset.url, fetchPriority: "high" }],
  }),
  component: HomeContent,
});

