import { Link } from "@tanstack/react-router";
import buildingsAsset from "@/assets/buildings.webp.asset.json";
import imgResAsset from "@/assets/about-1.webp.asset.json";
import imgComAsset from "@/assets/hero-2.webp.asset.json";
import imgFitAsset from "@/assets/about-2.webp.asset.json";
import imgFmAsset from "@/assets/service-maintenance.webp.asset.json";
import imgMcAsset from "@/assets/hero-3.webp.asset.json";
import { PageHeader } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/Sections";
import { Reveal, dl } from "@/components/site/Reveal";
import { T, Img } from "@/lib/editable";

const list = [
  { img: imgResAsset.url, tag: "Villas · Apartments · Towers", icon: "fa-home", title: "Residential Developments", text: "Integrated MEP and interior works for villas, apartments and residential buildings." },
  { img: imgComAsset.url, tag: "Offices · Retail", icon: "fa-building", title: "Commercial Developments", text: "MEP solutions for offices, retail spaces and commercial buildings." },
  { img: imgFitAsset.url, tag: "Fit-Out · Finishes", icon: "fa-drafting-compass", title: "Interior Fit-Out Projects", text: "Interior fit-out, architectural finishes, ceiling systems and partitions, coordinated with MEP works." },
  { img: imgFmAsset.url, tag: "Plant Rooms · Life Safety", icon: "fa-industry", title: "Building Infrastructure", text: "Building services for complex infrastructure, including fire protection, life safety and ELV systems." },
  { img: imgMcAsset.url, tag: "Specs · Schedules · HSE", icon: "fa-hard-hat", title: "Developers & Main Contractors", text: "A reliable MEP partner working to project specifications, schedules and HSE requirements." },
];

export function IndustriesPage() {
  return (
    <>
      <PageHeader k="industries" title="Industries" crumb="Industries We Serve" image={buildingsAsset.url} />
      <Reveal className="ind-section">
        <span className="ind-grid-bg" aria-hidden="true" />
        <div className="container position-relative">
          <div className="ind-head">
            <div>
              <span className="ind-kicker rx-left" style={dl(0)}><T k="ind.kicker" d="Industries We Serve" line /></span>
              <h2 className="ind-title rx-rise" style={dl(150)}><T k="ind.title" d="MEP Solutions For Every" /> <em><T k="ind.titleEm" d="Project Type" line /></em></h2>
            </div>
            <p className="ind-lead rx-right" style={dl(350)}><T k="ind.lead" d="From residential and commercial developments to complex building infrastructure, we bring the technical capability and execution discipline required to meet project objectives." /></p>
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
      <CtaBanner k="ind.banner" title="Discuss Your Project Requirements" text="Whether you are a developer, main contractor, consultant or project owner, our team is ready to discuss your project requirements." button="Contact Us" />
    </>
  );
}
