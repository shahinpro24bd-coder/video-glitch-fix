import { Link } from "@tanstack/react-router";
import alWarqaAsset from "@/assets/project-al-warqa-g9.webp.asset.json";
import dubaiHospitalAsset from "@/assets/project-dubai-hospital.webp.asset.json";
import alLehbabAsset from "@/assets/project-al-lehbab-villas.webp.asset.json";
import yabaEntranceAsset from "@/assets/project-yaba-arzaz-entrance.webp.asset.json";
import heritageAsset from "@/assets/project-heritage-village.webp.asset.json";
import sushiWamaAsset from "@/assets/project-sushiwama.webp.asset.json";
import { PageHeader } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/Sections";
import { Reveal, dl } from "@/components/site/Reveal";
import { T, Img } from "@/lib/editable";

const list = [
  { img: dubaiHospitalAsset.url, tag: "Oncology Center · Medical Infrastructure", icon: "fa-hospital", title: "Healthcare Facilities", text: "Specialized HVAC, electrical, CBS, plumbing, drainage, firefighting and fire alarm installations engineered for clinical environments." },
  { img: alLehbabAsset.url, tag: "Villas · G+9 Buildings · Housing", icon: "fa-home", title: "Residential Developments", text: "Complete MEP, ELV and building services for villa communities and multi-storey residential buildings such as Al Lehbab and Al Warqa." },
  { img: yabaEntranceAsset.url, tag: "Restaurants · Hotels · Design & Build", icon: "fa-utensils", title: "Hospitality & F&B Fit-Out", text: "Turnkey BIM-based design, bespoke joinery, architectural finishes and integrated MEP works for restaurants and hospitality destinations." },
  { img: heritageAsset.url, tag: "Al Shindagha · Refurbishment", icon: "fa-landmark", title: "Cultural Heritage & Renovation", text: "Sensitive electromechanical construction and renovation integrating modern MEP and life safety systems within historic architecture." },
  { img: sushiWamaAsset.url, tag: "Malls · Offices · Industrial Facilities", icon: "fa-industry", title: "Commercial, Retail & Industrial", text: "Compliant MEP, BMS, fire protection, security and fit-out delivery for retail outlets, commercial offices and industrial developments." },
];

export function IndustriesPage() {
  return (
    <>
      <PageHeader k="industries" title="Industries" crumb="Industries We Serve" image={alWarqaAsset.url} />
      <Reveal className="ind-section">
        <span className="ind-grid-bg" aria-hidden="true" />
        <div className="container position-relative">
          <div className="ind-head">
            <div>
              <span className="ind-kicker rx-left" style={dl(0)}><T k="ind.kicker" d="Industries We Serve" line /></span>
              <h2 className="ind-title rx-rise" style={dl(150)}><T k="ind.title" d="Multidisciplinary MEP &" /> <em><T k="ind.titleEm" d="Fit-Out Sectors" line /></em></h2>
            </div>
            <p className="ind-lead rx-right" style={dl(350)}><T k="ind.lead" d="Our project portfolio spans healthcare, cultural heritage, residential, commercial, hospitality and industrial developments across Dubai, Abu Dhabi and the wider UAE." /></p>
          </div>
          <div className="ind-bento">
            {list.map((l, i) => (
              <article key={l.title} className={`ind-card ind-card--${i + 1} rx-zoom`} style={dl(300 + i * 120)}>
                <Img k={`ind.${i}.img`} d={l.img} alt={l.title} className="ind-img" />
                <span className="ind-shade" aria-hidden="true" />
                <span className="ind-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="ind-body">
                  <span className="ind-icon rx-pop" style={dl(650 + i * 120)}><i className={`fa ${l.icon}`}></i></span>
                  <span className="ind-tag"><T k={`ind.${i}.tag`} d={l.tag} line /></span>
                  <h3 className="ind-card-title"><T k={`ind.${i}.title`} d={l.title} /></h3>
                  <p className="ind-text"><T k={`ind.${i}.text`} d={l.text} /></p>
                </div>
                <span className="ind-corner" aria-hidden="true" />
              </article>
            ))}
            <Link to="/contact" className="ind-card ind-card--cta rx-zoom" style={dl(300 + list.length * 120)}>
              <span className="ind-kicker"><T k="ind.cta.kicker" d="Not listed?" line /></span>
              <h3 className="ind-card-title"><T k="ind.cta.title" d="Tell us about your project" /></h3>
              <span className="ind-cta-btn"><T k="ind.cta.btn" d="Get in touch" line /> <i className="fa fa-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </Reveal>
      <CtaBanner k="ind.banner" title="Discuss Your Project Requirements" text="Whether you are a developer, main contractor, consultant or project owner, QMEP delivers compliant MEP and interior fit-out solutions tailored to your sector." button="Contact Us" />
    </>
  );
}
