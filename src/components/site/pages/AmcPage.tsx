import { Link } from "@tanstack/react-router";
import amcImgAsset from "@/assets/service-amc.webp.asset.json";
import { PageHeader, SectionTitle } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/Sections";
import { Reveal, dl } from "@/components/site/Reveal";
import { T } from "@/lib/editable";

const plans = [
  { icon: "fa-shield-alt", name: "Defects Liability Period (DLP)", for: "Newly handed-over residential, commercial and hospitality developments.", items: ["Technical assistance throughout contractual DLP", "Systematic snagging & defect rectification", "Authority clearance & documentation support", "Warranty coordination & performance checks"] },
  { icon: "fa-tools", name: "Operation & Maintenance (O&M)", for: "Active commercial, healthcare, retail and residential facilities.", items: ["Preventive & corrective MEP maintenance", "HVAC, electrical & plumbing equipment servicing", "System optimization & energy efficiency checks", "Dedicated technical support & service logs"] },
  { icon: "fa-file-contract", name: "Annual Maintenance Contracts (AMC)", for: "Properties requiring year-round reliability, safety and asset longevity.", items: ["Tailored scheduled preventive maintenance programmes", "HVAC, electrical, plumbing, fire & ELV servicing", "Routine inspections, fault diagnosis & reporting", "Reliable after-sales support across the UAE"] },
];

export function AmcPage() {
  return (
    <>
      <PageHeader k="amc" title="DLP, O&M & AMC Services" crumb="AMC Packages" image={amcImgAsset.url} />
      <Reveal as="div" className="band py-5 amcx">
        <span className="ab-gridbg" aria-hidden="true" />
        <div className="container position-relative">
          <SectionTitle k="amc.intro" kicker="Post-Handover & Maintenance" title="DLP, Operation & Maintenance and Tailored AMC Programmes" />
          <p className="text-center mx-auto mb-5 rx-up" style={dl(400, { maxWidth: 800 })}>
            <T k="amc.intro.text" d="QMEP's commitment extends beyond project completion. We deliver Defects Liability Period (DLP) services, preventive and corrective Operation & Maintenance (O&M), and tailored Annual Maintenance Contracts (AMC) to ensure the reliability, safety, efficiency and longevity of building services installations." />
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
      <CtaBanner k="amc.cta" kicker="Dependable After-Sales Support" title="Request a Tailored AMC or O&M Proposal" text="Contact QMEP Electromechanical and Interior Works LLC for a maintenance programme tailored to your building systems, equipment and operational requirements." button="Get an AMC Quote" />
    </>
  );
}
