import { Link } from "@tanstack/react-router";
import { useState } from "react";
import hero1Asset from "@/assets/hero-1.webp.asset.json";
import about1Asset from "@/assets/about-1.webp.asset.json";
import yabaSiteAsset from "@/assets/project-yaba-arzaz-site.webp.asset.json";
import heritageAsset from "@/assets/project-heritage-village.webp.asset.json";
import dubaiHospitalAsset from "@/assets/project-dubai-hospital.webp.asset.json";
import hvacImgAsset from "@/assets/service-hvac.webp.asset.json";
import elecImgAsset from "@/assets/service-electrical.webp.asset.json";
import plumbImgAsset from "@/assets/service-plumbing.webp.asset.json";
import orgChartAsset from "@/assets/qmep-org-chart.webp.asset.json";
import qualityPolicyAsset from "@/assets/qmep-quality-policy.webp.asset.json";
import hsePolicyAsset from "@/assets/qmep-hse-policy.webp.asset.json";
import sustainabilityPolicyAsset from "@/assets/qmep-sustainability-policy.webp.asset.json";
import { PageHeader } from "@/components/site/Layout";
import { company, licensedActivities, processSteps, services } from "@/lib/site";
import { Reveal, Words, dl } from "@/components/site/Reveal";
import { T, Img, useEditable } from "@/lib/editable";

const hero1 = hero1Asset.url;
const about1 = about1Asset.url;

const pillars = [
  { letter: "M", word: "Mechanical", img: hvacImgAsset.url, text: "HVAC and air conditioning systems, chilled water networks, ventilation, smoke management, stairwell pressurisation and hot water boiler systems.", items: ["HVAC & Chilled Water", "Smoke Control", "Boilers & TAB"] },
  { letter: "E", word: "Electrical", img: elecImgAsset.url, text: "Power distribution, lighting, emergency lighting, Central Battery Systems (CBS), small power, earthing, lightning protection and ELV / BMS.", items: ["Power & Lighting", "CBS & Earthing", "ELV & BMS"] },
  { letter: "P", word: "Plumbing", img: plumbImgAsset.url, text: "Domestic water supply, sanitary plumbing, soil and waste drainage, stormwater drainage, pumping systems and integrated firefighting networks.", items: ["Water & Drainage", "Pumping Systems", "Firefighting"] },
];

const approachIcons = ["fa-drafting-compass", "fa-boxes", "fa-tools", "fa-clipboard-check", "fa-shield-alt"];

const sectors = ["Healthcare", "Cultural Heritage", "Residential Developments", "Commercial & Retail", "Hospitality & Restaurants", "Industrial Developments", "Design & Build Fit-Out", "DLP, O&M & AMC"];

const values = [
  { icon: "fa-award", title: "Quality Excellence", text: "Maintaining high standards of workmanship, technical compliance and quality assurance throughout every stage of project delivery." },
  { icon: "fa-stopwatch", title: "Speed and Efficiency", text: "Optimizing resources, streamlining processes and adopting effective execution strategies to achieve timely project completion." },
  { icon: "fa-handshake", title: "Client Satisfaction", text: "Understanding client requirements and delivering tailored engineering solutions that provide lasting value and after-sales support." },
  { icon: "fa-drafting-compass", title: "Technical Excellence", text: "Developing our people, strengthening engineering capabilities and embracing modern technologies and best industry practices." },
  { icon: "fa-hard-hat", title: "Health, Safety and Environment", text: "Promoting a safe working environment, zero-harm HSE practices and responsible construction practices across all sites." },
  { icon: "fa-chart-line", title: "Continuous Improvement", text: "Building a culture of accountability, teamwork, innovation and operational excellence." },
];

const policies = [
  {
    title: "Quality Policy Statement",
    motto: "Together, we are committed to Quality in everything we do.",
    summary: "Delivering high quality MEP and firefighting works in full compliance with UAE standards, preventing defects and driving continual improvement.",
    image: qualityPolicyAsset.url,
  },
  {
    title: "HSE Policy",
    motto: "Together, we are committed to a Safe, Healthy and Sustainable Environment.",
    summary: "Proactive risk management, UAE HSE compliance, proper training and supervision to achieve zero harm across every project site.",
    image: hsePolicyAsset.url,
  },
  {
    title: "Sustainability Policy",
    motto: "Together, we are committed to a Sustainable Future.",
    summary: "Minimizing environmental footprint through energy-efficient technologies, responsible waste management, resource conservation and ethical governance.",
    image: sustainabilityPolicyAsset.url,
  },
];

export function AboutPage() {
  const c = useEditable();
  const [previewDoc, setPreviewDoc] = useState<{ title: string; image: string } | null>(null);
  const commitRaw = c.get("about.commit.image", heritageAsset.url);
  const commitImg = commitRaw && !commitRaw.startsWith("/assets/") ? commitRaw : heritageAsset.url;
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
                <Img k="about.img2" d={yabaSiteAsset.url} className="ab-img-sub rx-zoom" style={dl(500)} alt="QMEP engineers and technicians executing site works" />
                <span className="ab-vert ab-vert-rx" aria-hidden="true">QMEP · Dubai · UAE</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-kicker rx-left" style={dl(100)}><span><T k="about.kicker" d="About QMEP" line /></span></div>
              <h2 className="display-5 mb-3"><Words k="about.title" d="Speed and Quality Are Our Core Strengths." /></h2>
              <p className="ab-lead mb-4 rx-up" style={dl(450)}><T k="about.lead" d="QMEP Electromechanical and Interior Works LLC is a professional electromechanical contracting company in the United Arab Emirates, with nearly 20 years of industry experience in delivering comprehensive Mechanical, Electrical and Plumbing (MEP) and interior fit-out solutions." /></p>
              <p className="ab-text mb-3 rx-up" style={dl(550)}><T k="about.p1" d="Established in 2007, QMEP provides integrated, turnkey MEP services covering the entire project lifecycle — from concept design, engineering and technical coordination through procurement, installation, testing, commissioning, handover and maintenance." /></p>
              <p className="ab-text mb-4 rx-up" style={dl(650)}><T k="about.p2" d="Our strength lies in our experienced engineering team, skilled workforce and dedicated professionals who combine technical expertise with practical construction knowledge to deliver engineered, cost-effective and quality-driven solutions within agreed timelines and budgets — supported by dependable after-sales care." /></p>
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
              <p><T k="about.mission.text" d="To deliver comprehensive, technically sound and cost-effective MEP solutions through engineering expertise, efficient execution and an unwavering commitment to quality." /></p>
            </div>
            <div className="abx-mv-img rx-zoom" style={dl(200)}>
              <Img k="about.mv.image" d={dubaiHospitalAsset.url} alt="Dubai Hospital Oncology Center MEP project" />
              <span className="abx-mv-tag"><T k="about.mv.tag" d="Est. 2007 · Dubai, UAE" line /></span>
            </div>
            <div className="abx-mv-card rx-right" style={dl(400)}>
              <span className="abx-mv-word" aria-hidden="true">Vision</span>
              <span className="abx-mv-icon rx-pop" style={dl(900)}><i className="fa fa-eye"></i></span>
              <span className="ind-kicker"><T k="about.vision.kicker" d="Where we're going" line /></span>
              <h2><T k="about.vision.title" d="Our Vision" line /></h2>
              <p><T k="about.vision.text" d="To be the MEP Contractor of Choice, recognized across the UAE and the Gulf region for engineering excellence, quality workmanship, reliable project delivery and lasting client relationships." /></p>
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
                <p className="rx-up" style={dl(400)}><T k="about.values.lead" d="Six core commitments shape how we engineer, execute and support every client across the UAE." /></p>
                <span className="abx-values-big rx-zoom" style={dl(500)} aria-hidden="true">06</span>
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
            <h2 className="sd-title"><Words k="about.approach.title" d="End-to-End Project Lifecycle" /></h2>
          </div>
          <div className="abx-path">
            {processSteps.map((a, i) => (
              <div key={a.title} className="abx-step rx-up" style={dl(400 + i * 180)}>
                <span className="abx-step-dot rx-pop" style={dl(500 + i * 180)}><i className={`fa ${approachIcons[i] ?? "fa-check"}`}></i></span>
                <span className="abx-step-num">Step {String(i + 1).padStart(2, "0")}</span>
                <h3><T k={`about.step.${i}.title`} d={a.title} line /></h3>
                <p className="mb-0"><T k={`about.step.${i}.text`} d={a.text} /></p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="band py-5 abx-org">
        <div className="container">
          <div className="abx-head text-center mx-auto">
            <span className="ind-kicker rx-up" style={dl(0)}><T k="about.org.kicker" d="Company Structure" line /></span>
            <h2 className="sd-title"><Words k="about.org.title" d="Organization Chart" /></h2>
            <p className="rx-up mb-0" style={dl(250)}><T k="about.org.lead" d="Structured leadership spanning Projects & Operations, Engineering & BIM, Commercial & Procurement, Finance & HR, and HSE & QA/QC." /></p>
          </div>
          <div className="abx-org-frame rx-zoom" style={dl(300)}>
            <button type="button" className="abx-doc-trigger" onClick={() => setPreviewDoc({ title: "QMEP Organization Chart", image: orgChartAsset.url })}>
              <img src={orgChartAsset.url} alt="QMEP Electromechanical Works LLC Organization Chart" />
              <span className="abx-doc-hint"><i className="fa fa-search-plus me-2"></i>Click to enlarge</span>
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="band py-5 bg-light abx-policies">
        <div className="container">
          <div className="abx-head text-center mx-auto">
            <span className="ind-kicker rx-up" style={dl(0)}><T k="about.pol.kicker" d="Governance & Credentials" line /></span>
            <h2 className="sd-title"><Words k="about.pol.title" d="Corporate Policies & Dubai Registration" /></h2>
          </div>
          <div className="row g-4 mb-5">
            {policies.map((pol, i) => (
              <div key={pol.title} className="col-lg-4 rx-up" style={dl(200 + i * 120)}>
                <article className="abx-pol-card h-100">
                  <button type="button" className="abx-pol-thumb" onClick={() => setPreviewDoc({ title: pol.title, image: pol.image })}>
                    <img src={pol.image} alt={`${pol.title} — QMEP Electromechanical Works LLC`} />
                    <span><i className="fa fa-expand me-1"></i>View Policy</span>
                  </button>
                  <div className="abx-pol-body">
                    <h3><T k={`about.pol.${i}.title`} d={pol.title} line /></h3>
                    <p className="abx-pol-motto">“{pol.motto}”</p>
                    <p className="mb-0">{pol.summary}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <div className="abx-cred rx-up" style={dl(450)}>
            <div className="row g-4 align-items-start">
              <div className="col-lg-5">
                <span className="ind-kicker"><T k="about.cred.kicker" d="Dubai DED & Chamber Verified" line /></span>
                <h3 className="mt-2 mb-3">{company.legalName}</h3>
                <dl className="abx-cred-list">
                  <div><dt>DED Commercial License</dt><dd>{company.licenseNo}</dd></div>
                  <div><dt>Commercial Register No.</dt><dd>{company.registerNo}</dd></div>
                  <div><dt>Dubai Chamber (DCCI)</dt><dd>{company.dcciNo}</dd></div>
                  <div><dt>D&amp;B D-U-N-S® No.</dt><dd>{company.dunsNo}</dd></div>
                  <div><dt>Established / Registered</dt><dd>09/07/2007 (Valid through 08/07/2027)</dd></div>
                  <div><dt>Registered Office</dt><dd>{company.address}</dd></div>
                </dl>
              </div>
              <div className="col-lg-7">
                <h4 className="mb-3">Active Licensed Activities</h4>
                <ul className="abx-act-list">
                  {licensedActivities.map((act) => (
                    <li key={act}><i className="fa fa-check-circle text-primary me-2"></i>{act}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="abx-clients">
        <div className="container">
          <div className="abx-clients-box rx-up" style={dl(0)}>
            <div>
              <span className="ind-kicker rx-left" style={dl(150)}><T k="about.clients.kicker" d="Sectors We Serve" line /></span>
              <h2 className="sd-title mb-0"><Words k="about.clients.title" d="Integrated MEP & interior solutions across every sector" /></h2>
            </div>
            <div className="abx-chips">
              {sectors.map((cl, i) => <span key={cl} className="rx-pop" style={dl(400 + i * 70)}><i className="fa fa-check"></i><T k={`about.client.${i}`} d={cl} line /></span>)}
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
            <p className="abx-commit-text rx-rise" style={dl(300)}><T k="about.commit.text" d="Delivering integrated engineering and interior solutions through quality workmanship, technical excellence, efficient project execution and a commitment to client satisfaction." /></p>
            <div className="d-flex flex-wrap gap-2 justify-content-center rx-up" style={dl(550)}>
              <Link className="btn btn-primary py-3 px-5" to="/contact"><T k="about.commit.btn1" d="Talk to Our Team" line /></Link>
              <Link className="btn ft-ghost py-3 px-5" to="/services"><T k="about.commit.btn2" d="Explore Services" line /></Link>
            </div>
          </div>
        </div>
      </Reveal>

      {previewDoc && (
        <div className="pj-modal-backdrop" role="dialog" aria-modal="true" aria-label={previewDoc.title} onClick={() => setPreviewDoc(null)}>
          <div className="abx-doc-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="pj-modal-close" aria-label="Close document preview" onClick={() => setPreviewDoc(null)}>
              <i className="fa fa-times"></i>
            </button>
            <h4>{previewDoc.title}</h4>
            <img src={previewDoc.image} alt={previewDoc.title} />
          </div>
        </div>
      )}
    </>
  );
}
