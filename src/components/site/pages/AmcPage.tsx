import { Link } from "@tanstack/react-router";
import amcImgAsset from "@/assets/service-amc.webp.asset.json";
import { PageHeader, SectionTitle } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/Sections";
import { Reveal, dl } from "@/components/site/Reveal";
import { T } from "@/lib/editable";

const plans = [
  { icon: "fa-home", name: "Residential AMC", for: "Villas and residential properties.", items: ["Scheduled AC maintenance", "Plumbing system checks", "Electrical inspections", "Preventive maintenance recommendations"] },
  { icon: "fa-store", name: "Commercial AMC", for: "Offices, retail spaces, and commercial properties.", items: ["Planned HVAC servicing", "Electrical system inspections", "Plumbing maintenance", "Maintenance reporting"] },
  { icon: "fa-city", name: "Comprehensive MEP AMC", for: "Properties requiring coordinated maintenance across multiple systems.", items: ["Agreed HVAC maintenance", "Electrical and plumbing inspections", "Scheduled preventive visits", "Defined reporting and service procedures"] },
];

export function AmcPage() {
  return (
    <>
      <PageHeader k="amc" title="AMC Packages" crumb="AMC Packages" image={amcImgAsset.url} />
      <Reveal as="div" className="band py-5 amcx">
        <span className="ab-gridbg" aria-hidden="true" />
        <div className="container position-relative">
          <SectionTitle k="amc.intro" kicker="Annual Maintenance Contracts" title="Planned Maintenance For Long-Term Property Care" />
          <p className="text-center mx-auto mb-5 rx-up" style={dl(400, { maxWidth: 800 })}>
            <T k="amc.intro.text" d="A maintenance plan helps property owners organize routine inspections, schedule servicing, and address maintenance requirements in a structured way. We prepare each AMC proposal based on your property type, equipment, and service requirements." />
          </p>
          <div className="row g-4 pt-4">
            {plans.map((p, i) => (
              <div key={p.name} className="col-lg-4" style={{ marginTop: 70 }}>
                <div className="rx-up h-100" style={dl(450 + i * 150)}>
                  <div className={`fact-item amcx-card text-center bg-light h-100 p-5 pt-0 ${i === 1 ? "is-featured" : ""}`}>
                    <span className="amcx-glow" aria-hidden="true" />
                    <div className="fact-icon rx-pop" style={dl(650 + i * 150)}><span className="amcx-ring" aria-hidden="true" /><i className={`fa ${p.icon} fa-3x`}></i></div>
                    <h3 className="mb-2"><T k={`amc.plan.${i}.name`} d={p.name} /></h3>
                    <p className="text-primary mb-4"><T k={`amc.plan.${i}.for`} d={`Suitable for: ${p.for}`} /></p>
                    {p.items.map((it, j) => (
                      <p key={it} className="text-start rx-left" style={dl(800 + i * 150 + j * 70)}><i className="fa fa-check text-primary me-3"></i><T k={`amc.plan.${i}.item.${j}`} d={it} /></p>
                    ))}
                    <Link to="/contact" className="btn btn-primary py-3 px-5 mt-3 rx-btn"><T k={`amc.plan.${i}.btn`} d="Get an AMC Quote" line /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <CtaBanner k="amc.cta" kicker="Annual Maintenance" title="Request Your AMC Proposal" text="Every property has a different maintenance requirement. Contact our team for a proposal based on your building, equipment, and required scope." button="Get an AMC Quote" />
    </>
  );
}
