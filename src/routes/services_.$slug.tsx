import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services } from "@/lib/site";
import { ServiceDetailPage } from "@/components/site/pages/ServiceDetailPage";

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    const s = services.find((x) => x.slug === loaderData?.slug);
    const title = s ? `${s.title} | QMEP` : "Service | QMEP";
    const desc = s?.summary ?? "MEP and interior works by QMEP Electromechanical and Interior Works LLC.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container py-5 text-center">
      <h1 className="display-5">Service not found</h1>
      <Link to="/services" className="btn btn-primary mt-3 py-3 px-5">View All Services</Link>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  return <ServiceDetailPage key={slug} slug={slug} />;
}
