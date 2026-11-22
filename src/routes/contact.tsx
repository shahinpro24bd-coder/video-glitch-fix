import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/pages/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Request a Quotation | QMEP" },
      { name: "description", content: "Looking for a reliable MEP contractor? Contact QMEP to discuss your project requirements and request a quotation." },
      { property: "og:title", content: "Contact QMEP" },
      { property: "og:description", content: "Looking for a reliable MEP contractor?" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return <ContactPage />;
}
