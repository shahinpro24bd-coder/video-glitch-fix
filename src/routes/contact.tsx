import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/pages/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | QMEP Electromechanical and Interior Works LLC — Dubai" },
      { name: "description", content: "Contact QMEP in Hor Al Anz, Deira, Dubai (Tel: +971 4 229 7339, Mobile: +971 56 233 5339) for MEP contracting, interior fit-out, O&M and AMC quotations." },
      { property: "og:title", content: "Contact QMEP — Dubai, UAE" },
      { property: "og:description", content: "Office 101-519, Hor Al Anz, Deira, P.O. Box 66916, Dubai, UAE. Request a quotation today." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return <ContactPage />;
}
