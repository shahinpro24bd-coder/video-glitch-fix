import { Link } from "@tanstack/react-router";
import hero1Asset from "@/assets/hero-1.webp.asset.json";
import about1Asset from "@/assets/about-1.webp.asset.json";
import about2Asset from "@/assets/about-2.webp.asset.json";
import buildingsAsset from "@/assets/buildings.webp.asset.json";
import hvacImgAsset from "@/assets/service-hvac.webp.asset.json";
import elecImgAsset from "@/assets/service-electrical.webp.asset.json";
import plumbImgAsset from "@/assets/service-plumbing.webp.asset.json";
import { PageHeader } from "@/components/site/Layout";
import { services } from "@/lib/site";
import { Reveal, Words, dl } from "@/components/site/Reveal";
import { T, Img, useEditable } from "@/lib/editable";

const hero1 = hero1Asset.url;
const about1 = about1Asset.url;
const about2 = about2Asset.url;
const buildings = buildingsAsset.url;

const pillars = [
  { letter: "M", word: "Mechanical", img: hvacImgAsset.url, text: "HVAC systems, ventilation, air conditioning, chilled water systems and equipment installation.", items: ["HVAC", "Chilled Water", "Ventilation"] },
  { letter: "E", word: "Electrical", img: elecImgAsset.url, text: "Power distribution, lighting systems, electrical installations, containment, wiring and testing.", items: ["Power", "Lighting", "Containment"] },
  { letter: "P", word: "Plumbing", img: plumbImgAsset.url, text: "Water supply, drainage, sanitary installations, pumps and piping networks.", items: ["Water Supply", "Drainage", "Sanitary"] },
];

const approach = [
  { icon: "fa-comments", title: "Coordinate", text: "We review project requirements and specifications and coordinate with all stakeholders." },
  { icon: "fa-search", title: "Select Materials", text: "Materials and equipment chosen to meet project specifications and quality standards." },
  { icon: "fa-tools", title: "Install", text: "Skilled resources execute the works with precision, efficiency and accountability." },
  { icon: "fa-clipboard-check", title: "Test & Commission", text: "Systems are tested and commissioned to confirm workmanship, compliance and performance." },
  { icon: "fa-handshake", title: "Hand Over", text: "Timely handover, backed by transparent communication throughout the project." },
];

const clients = ["Developers", "Main Contractors", "Consultants", "Project Owners", "Residential Developments", "Commercial Developments", "Building Infrastructure", "Interior Fit-Out"];

const values = [
  { icon: "fa-award", title: "Quality Workmanship", text: "Quality is built into every stage of project delivery, not left to a final inspection." },
  { icon: "fa-stopwatch", title: "Timely Execution", text: "Focused project management and resource optimization for timely completion." },
  { icon: "fa-handshake", title: "Lasting Client Relationships", text: "Transparent communication, coordination and a commitment to client satisfaction." },
  { icon: "fa-hard-hat", title: "Safety & Compliance", text: "Commitment to applicable UAE regulations, project specifications and HSE requirements." },
  { icon: "fa-chart-line", title: "Continuous Improvement", text: "We continuously strive to improve our processes, optimize resources and meet our clients' expectations." },
];

export function AboutPage() {
  const c = useEditable();
  const commitRaw = c.get("about.commit.image", about2);
  const commitImg = commitRaw && !commitRaw.startsWith("/assets/") ? commitRaw : about2;
  return (
    <>
      <PageHeader k="about" title="About Us" crumb="About" image={hero1} />
      <Reveal as="div" className="band py-5 ab-section">
        <div className="ab-gridbg" aria-hidden="true" />
        <div className="container position-relative">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="ab-media">
                <span className="ab-frame rx-zoom" style={dl(350)} aria-hidden="true" />
                <span className="why-tick why-tick-tl rx-pop" style={dl(600)} aria-hidden="true" />
                <span className="why-tick why-tick-tr rx-pop" style={dl(700)} aria-hidden="true" />
                <Img k="about.img1" d={about1} className="ab-img-main rx-clip" style={dl(0)} alt="MEP engineer on a Dubai project" />
                <Img k="about.img2" d={about2} className="ab-img-sub rx-zoom" style={dl(500)} alt="QMEP technician at work" />
                <span className="ab-vert ab-vert-rx" aria-hidden="true">QMEP · Dubai · UAE</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-kicker rx-left" style={dl(100)}><span><T k="about.kicker" d="About QMEP" line /></span></div>
              <h2 className="display-5 mb-3"><Words k="about.title" d="Engineering Experience. Proven Performance. Trusted Delivery." /></h2>
              <p className="ab-lead mb-4 rx-up" style={dl(450)}><T k="about.lead" d="Established in 2007, QMEP Electromechanical and Interior Works LLC is an experienced MEP contracting company committed to delivering reliable engineering solutions for the UAE construction industry." /></p>
              <p className="ab-text mb-3 rx-up" style={dl(550)}><T k="about.p1" d="With extensive experience in mechanical, electrical and plumbing works, we understand the technical demands, coordination requirements and delivery expectations of modern construction projects." /></p>
              <p className="ab-text mb-4 rx-up" style={dl(650)}><T k="about.p2" d="Our approach combines engineering knowledge, professional project management, skilled resources and rigorous quality control to ensure every project is executed with precision, efficiency and accountability. At QMEP, we believe successful project delivery is built on three fundamentals: quality workmanship, timely execution and lasting client relationships." /></p>
              <Link className="btn btn-primary py-3 px-5 rx-up rx-btn" style={dl(750)} to="/contact"><T k="about.btn" d="Talk to Our Team" line /></Link>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="abx-marquee" aria-hidden="true">
        <div className="abx-marquee-track">
          {[...services, ...services].map((sv, i) => (
            <span key={i}><i className={`fa ${sv.icon}`}></i>{sv.title}</span>
          ))}
        </div>
      </div>

      <Reveal className="abx-mv">
        <div className="container">
          <div className="abx-mv-grid">
            <div className="abx-mv-card abx-mv-card--dark rx-left" style={dl(0)}>
              <span className="abx-mv-word" aria-hidden="true">Mission</span>
              <span className="abx-mv-icon rx-pop" style={dl(500)}><i className="fa fa-bullseye"></i></span>
              <span className="ind-kicker"><T k="about.mission.kicker" d="What drives us" line /></span>
              <h2><T k="about.mission.title" d="Our Mission" line /></h2>
              <p><T k="about.mission.text" d="To deliver integrated MEP solutions for construction and development projects, combining engineering expertise, efficient project execution and uncompromising quality standards." /></p>
            </div>
            <div className="abx-mv-img rx-zoom" style={dl(200)}>
              <Img k="about.mv.image" d={buildings} alt="Dubai buildings" />
              <span className="abx-mv-tag"><T k="about.mv.tag" d="Dubai · UAE" line /></span>
            </div>
            <div className="abx-mv-card rx-right" style={dl(400)}>
              <span className="abx-mv-word" aria-hidden="true">Vision</span>
              <span className="abx-mv-icon rx-pop" style={dl(900)}><i className="fa fa-eye"></i></span>
              <span className="ind-kicker"><T k="about.vision.kicker" d="Where we're going" line /></span>
              <h2><T k="about.vision.title" d="Our Vision" line /></h2>
              <p><T k="about.vision.text" d="To be the MEP contractor of choice in the UAE, known for quality workmanship, timely execution and lasting client relationships." /></p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="abx-pillars">
        <div className="container">
          <div className="abx-head">
            <span className="ind-kicker rx-left" style={dl(0)}><T k="about.pillars.kicker" d="What We Do" line /></span>
            <h2 className="sd-title text-white rx-rise" style={dl(150)}><T k="about.pillars.title" d="Three Disciplines." line /> <em><T k="about.pillars.em" d="One Team." line /></em></h2>
          </div>
          <div className="abx-pillar-grid">
            {pillars.map((pl, i) => (
              <div key={pl.letter} className="abx-pillar rx-up" style={dl(300 + i * 160)}>
                <Img k={`about.pillar.${i}.img`} d={pl.img} alt={pl.word} />
                <span className="abx-pillar-shade" aria-hidden="true" />
                <span className="abx-pillar-letter rx-pop" style={dl(650 + i * 160)}>{pl.letter}</span>
                <div className="abx-pillar-body">
                  <h3><T k={`about.pillar.${i}.word`} d={pl.word} line /></h3>
                  <p><T k={`about.pillar.${i}.text`} d={pl.text} /></p>
                  <div className="abx-pillar-tags">{pl.items.map((t, j) => <span key={t}><T k={`about.pillar.${i}.tag.${j}`} d={t} line /></span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="abx-values">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="abx-sticky">
                <span className="ind-kicker rx-left" style={dl(0)}><T k="about.values.kicker" d="Core Values" line /></span>
                <h2 className="sd-title"><Words k="about.values.title" d="What Guides Every Project" /></h2>
                <p className="rx-up" style={dl(400)}><T k="about.values.lead" d="Five principles guide how we plan, execute and deliver every project." /></p>
                <span className="abx-values-big rx-zoom" style={dl(500)} aria-hidden="true">05</span>
              </div>
            </div>
            <div className="col-lg-8">
              {values.map((v, i) => (
                <div key={v.title} className="abx-value rx-right" style={dl(250 + i * 120)}>
                  <span className="abx-value-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="abx-value-icon"><i className={`fa ${v.icon}`}></i></span>
                  <div><h3><T k={`about.value.${i}.title`} d={v.title} line /></h3><p className="mb-0"><T k={`about.value.${i}.text`} d={v.text} /></p></div>
                  <i className="fa fa-arrow-right abx-value-arrow"></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="abx-approach">
        <div className="container">
          <div className="abx-head text-center mx-auto">
            <span className="ind-kicker rx-up" style={dl(0)}><T k="about.approach.kicker" d="Our Approach" line /></span>
            <h2 className="sd-title"><Words k="about.approach.title" d="How We Deliver Every Project" /></h2>
          </div>
          <div className="abx-path">
            {approach.map((a, i) => (
              <div key={a.title} className="abx-step rx-up" style={dl(400 + i * 180)}>
                <span className="abx-step-dot rx-pop" style={dl(500 + i * 180)}><i className={`fa ${a.icon}`}></i></span>
                <span className="abx-step-num">Step {String(i + 1).padStart(2, "0")}</span>
                <h3><T k={`about.step.${i}.title`} d={a.title} line /></h3>
                <p className="mb-0"><T k={`about.step.${i}.text`} d={a.text} /></p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="abx-clients">
        <div className="container">
          <div className="abx-clients-box rx-up" style={dl(0)}>
            <div>
              <span className="ind-kicker rx-left" style={dl(150)}><T k="about.clients.kicker" d="Who We Work With" line /></span>
              <h2 className="sd-title mb-0"><Words k="about.clients.title" d="From residential developments to complex building infrastructure" /></h2>
            </div>
            <div className="abx-chips">
              {clients.map((cl, i) => <span key={cl} className="rx-pop" style={dl(400 + i * 70)}><i className="fa fa-check"></i><T k={`about.client.${i}`} d={cl} line /></span>)}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className={`abx-commit ${c.edit ? "cms-img" : ""}`} style={{ backgroundImage: `url(${commitImg})` }}
        onClick={c.edit ? (e) => { if (e.target === e.currentTarget) c.pick("about.commit.image"); } : undefined}>
        <div className="container">
          <div className="abx-commit-inner">
            <i className="fa fa-quote-left abx-quote rx-pop" style={dl(0)}></i>
            <span className="ind-kicker rx-up" style={dl(150)}><T k="about.commit.kicker" d="Our Commitment" line /></span>
            <p className="abx-commit-text rx-rise" style={dl(300)}><T k="about.commit.text" d="Quality is not simply a final inspection at QMEP; it is an integral part of every stage of project delivery. Quality in Every Detail." /></p>
            <div className="d-flex flex-wrap gap-2 justify-content-center rx-up" style={dl(550)}>
              <Link className="btn btn-primary py-3 px-5" to="/contact"><T k="about.commit.btn1" d="Talk to Our Team" line /></Link>
              <Link className="btn ft-ghost py-3 px-5" to="/services"><T k="about.commit.btn2" d="Explore Services" line /></Link>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
