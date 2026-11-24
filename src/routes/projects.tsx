import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/site/pages/ProjectsPage";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Project Portfolio | QMEP Electromechanical and Interior Works LLC" },
      { name: "description", content: "Explore QMEP's verified UAE projects: Oncology Center Dubai Hospital, Dubai Heritage Village Al Shindagha, 15 Villas Al Lehbab, G+9 Al Warqa, SushiWama Yas Mall and YABA ARZAZ Awqaff Mall." },
      { property: "og:title", content: "Selected Project Portfolio | QMEP" },
      { property: "og:description", content: "Delivering quality across healthcare, cultural heritage, residential and hospitality fit-out projects in the UAE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return <ProjectsPage />;
}
