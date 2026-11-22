import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/site/pages/ProjectsPage";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects | QMEP Electromechanical and Interior Works LLC" },
      { name: "description", content: "Explore MEP projects delivered by QMEP across residential and commercial developments and building infrastructure in the UAE." },
      { property: "og:title", content: "Our Projects | QMEP" },
      { property: "og:description", content: "Experience that delivers. Projects that speak." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return <ProjectsPage />;
}
