import hero1Asset from "@/assets/hero-1.webp.asset.json";
import { company } from "@/lib/site";
import { PageHeader } from "@/components/site/Layout";
import { ContactLine, QuoteForm } from "@/components/site/Sections";
import { Reveal, Words, dl } from "@/components/site/Reveal";
import { T } from "@/lib/editable";

const lines = [
  { k: "contact.l1", icon: "fa-map-marker-alt", label: "Our Office", value: company.address },
  { k: "contact.l2", icon: "fa-phone-alt", label: "Call Us Now", value: company.phone, href: company.phoneHref },
  { k: "contact.l3", icon: "fa-whatsapp", brand: true, label: "WhatsApp", value: "Chat With Us", href: company.whatsappHref },
  { k: "contact.l4", icon: "fa-envelope-open", label: "Mail Us Now", value: company.email, href: `mailto:${company.email}` },
  { k: "contact.l5", icon: "fa-clock", label: "Working Hours", value: company.hours },
];

export function ContactPage() {
  return (
    <>
      <PageHeader k="contact" title="Contact" crumb="Contact" image={hero1Asset.url} />
      <Reveal as="div" className="band py-5 ctx">
        <span className="ab-gridbg" aria-hidden="true" />
        <div className="container position-relative">
          <div className="row g-5">
            <div className="col-lg-6">
              <h4 className="section-title rx-left" style={dl(0)}><T k="contact.kicker" d="Contact Us" line /></h4>
              <h2 className="display-5 mb-4"><Words k="contact.title" d="Looking for a Reliable MEP Contractor?" /></h2>
              <p className="mb-4 rx-up" style={dl(400)}><T k="contact.lead" d="Partner with QMEP for dependable engineering solutions, professional project execution and quality you can trust. Whether you are a developer, main contractor, consultant or project owner, our team is ready to discuss your project requirements." /></p>
              <div className="row g-4">
                {lines.map((l, n) => (
                  <div key={l.k} className="col-12 rx-left" style={dl(500 + n * 100)}>
                    <ContactLine bare k={l.k} icon={l.icon} brand={l.brand} label={l.label} value={l.value} href={l.href} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4 rx-up" style={dl(200)}><T k="contact.formTitle" d="Request a Quotation" line /></h3>
              <div className="rx-zoom" style={dl(300)}><QuoteForm /></div>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal as="div" className="container-fluid pt-5 px-0">
        <div className="ctx-map rx-clip" style={dl(0)}>
          <iframe title="QMEP location map" className="w-100" style={{ height: 450, border: 0, display: "block" }}
            src="https://www.google.com/maps?q=Dubai,United+Arab+Emirates&output=embed"></iframe>
        </div>
      </Reveal>
    </>
  );
}
