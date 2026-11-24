import { Link } from "@tanstack/react-router";
import { useState } from "react";
import heritageHeroAsset from "@/assets/project-heritage-village.webp.asset.json";
import { managementExperienceNote, managementProjects, projectFilters, selectedProjects, type PortfolioProject, type ProjectCategory } from "@/lib/projects";
import { PageHeader, SectionTitle } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/Sections";
import { Reveal, dl } from "@/components/site/Reveal";
import { T, Img } from "@/lib/editable";

export function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [touched, setTouched] = useState(false);
  const [active, setActive] = useState<PortfolioProject | null>(null);
  const base = touched ? 0 : 600;
  const shown = filter === "All" ? selectedProjects : selectedProjects.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader k="projects" title="Project Portfolio" crumb="Projects" image={heritageHeroAsset.url} />
      <Reveal as="div" className="band py-5 pjs">
        <span className="ab-gridbg" aria-hidden="true" />
        <div className="container position-relative">
          <SectionTitle k="projects.intro" kicker="Selected Project Experience" title="Delivering Quality Across Complex Projects" />
          <p className="text-center mx-auto mb-5 rx-up" style={dl(400, { maxWidth: 800 })}>
            <T k="projects.intro.text" d="QMEP Electromechanical and Interior Works LLC showcases verified project experience across healthcare, cultural heritage, residential developments, commercial spaces and hospitality fit-outs — executed in accordance with approved drawings, UAE regulations and recognized industry standards." />
          </p>
          <div className="pj-filters rx-up" style={dl(500)} role="tablist">
            {projectFilters.map((f) => (
              <button key={f} type="button" role="tab" aria-selected={filter === f}
                className={`pj-filter ${filter === f ? "is-active" : ""}`} onClick={() => { setFilter(f); setTouched(true); }}>
                {f}<span>{f === "All" ? selectedProjects.length : selectedProjects.filter((p) => p.category === f).length}</span>
              </button>
            ))}
          </div>
          <div className="pj-grid" key={filter}>
            {shown.map((p, i) => (
              <article key={p.id} className="pj-card rx-up" style={dl(base + i * 110)}>
                <div className="pj-media">
                  <Img k={`projects.${p.id}.img`} d={p.image} alt={p.title} />
                  <span className="pj-shade" aria-hidden="true" />
                  <span className="pj-chip rx-left" style={dl(base + 300 + i * 110)}><i className={`fa ${p.icon}`}></i>{p.sector}</span>
                  <span className="pj-num">{p.code}</span>
                  <button type="button" className="pj-zoom" aria-label={`View details for ${p.title}`} onClick={() => setActive(p)}>
                    <i className="fa fa-expand"></i>
                  </button>
                  <div className="pj-overlay-title">
                    <span><T k={`projects.${p.id}.location`} d={p.location} line /></span>
                    <h3><T k={`projects.${p.id}.title`} d={p.shortTitle} /></h3>
                  </div>
                </div>
                <div className="pj-body">
                  <div className="pj-meta">
                    <div><small>{p.client ? "Client" : "Project Type"}</small><strong><T k={`projects.${p.id}.client`} d={p.client ?? p.projectType ?? p.sector} line /></strong></div>
                    <div><small>{p.mainContractor ? "Main Contractor" : "Contractor"}</small><strong><T k={`projects.${p.id}.mc`} d={p.mainContractor ?? p.contractor} line /></strong></div>
                  </div>
                  <p className="pj-overview"><T k={`projects.${p.id}.overview`} d={p.overview} /></p>
                  <div className="pj-scope">
                    {p.scope.slice(0, 4).map((it, j) => <span key={it}><T k={`projects.${p.id}.scope.${j}`} d={it} line /></span>)}
                    {p.scope.length > 4 && <span>+{p.scope.length - 4} more</span>}
                  </div>
                  <button type="button" className="pj-link pj-link-btn" onClick={() => setActive(p)}>
                    <T k="projects.link" d="View Full Project Scope" line /> <i className="fa fa-long-arrow-alt-right"></i>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="band py-5 bg-light pjm-section">
        <div className="container position-relative">
          <SectionTitle k="projects.mgmt" kicker="Proven Management Experience" title="Comprehensive MEP Expertise Across Landmark UAE Developments" />
          <p className="text-center mx-auto mb-4 rx-up" style={dl(250, { maxWidth: 880 })}>
            <T k="projects.mgmt.lead" d="QMEP's strength is reinforced by the extensive technical expertise and execution track record of its management team, gained during their previous tenure with Spectrumcube LLC across flagship luxury hospitality, healthcare, corporate, retail and government residential projects." />
          </p>
          <div className="pjm-grid">
            {managementProjects.map((m, i) => (
              <article key={m.code} className="pjm-card rx-up" style={dl(250 + i * 70)}>
                <div className="pjm-top">
                  <span className="pjm-code">{m.code}</span>
                  <span className="pjm-sector">{m.sector}</span>
                </div>
                <h3 className="pjm-title"><T k={`projects.mgmt.${i}.title`} d={m.title} line /></h3>
                <p className="pjm-loc"><i className="fa fa-map-marker-alt me-2 text-primary"></i>{m.location}</p>
                <p className="pjm-desc">{m.overview}</p>
                <dl className="pjm-facts">
                  <div><dt>Client</dt><dd>{m.client}</dd></div>
                  {m.consultant && <div><dt>Consultant</dt><dd>{m.consultant}</dd></div>}
                  <div><dt>Main Contractor</dt><dd>{m.mainContractor}</dd></div>
                  <div><dt>MEP Contractor</dt><dd>{m.mepContractor}</dd></div>
                </dl>
                <div className="pj-scope">
                  {m.highlights.map((h) => <span key={h}>{h}</span>)}
                </div>
              </article>
            ))}
          </div>
          <p className="pjm-note rx-up" style={dl(500)}>
            <i className="fa fa-info-circle me-2 text-primary"></i>
            <T k="projects.mgmt.note" d={managementExperienceNote} />
          </p>
        </div>
      </Reveal>

      {active && (
        <div className="pj-modal-backdrop" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}>
          <div className="pj-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="pj-modal-close" aria-label="Close project details" onClick={() => setActive(null)}>
              <i className="fa fa-times"></i>
            </button>
            <div className="pj-modal-media">
              <img src={active.image} alt={active.title} />
              {active.galleryImage && <img src={active.galleryImage} alt={`${active.title} — site execution`} />}
            </div>
            <div className="pj-modal-body">
              <span className="pj-modal-tag">{active.sector} · {active.location}</span>
              <h3>{active.title}</h3>
              <p>{active.overview}</p>
              <dl className="pjm-facts pjm-facts--modal">
                {active.client && <div><dt>Client</dt><dd>{active.client}</dd></div>}
                {active.consultant && <div><dt>Consultant</dt><dd>{active.consultant}</dd></div>}
                {active.mainContractor && <div><dt>Main Contractor</dt><dd>{active.mainContractor}</dd></div>}
                {active.projectType && <div><dt>Project Type</dt><dd>{active.projectType}</dd></div>}
                <div><dt>MEP / Fit-Out Contractor</dt><dd>{active.contractor}</dd></div>
              </dl>
              <h4 className="pj-modal-sub">Scope of Works</h4>
              <ul className="pj-modal-scope">
                {active.scope.map((item) => <li key={item}><i className="fa fa-check text-primary me-2"></i>{item}</li>)}
              </ul>
              <div className="d-flex flex-wrap gap-2 mt-4">
                <Link to="/contact" className="btn btn-primary px-4 py-2" onClick={() => setActive(null)}>Request Similar Project Quote</Link>
                <button type="button" className="btn btn-outline-secondary px-4 py-2" onClick={() => setActive(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <CtaBanner k="projects.cta" title="Discuss Your Project" text="Partner with QMEP Electromechanical and Interior Works LLC for dependable MEP and interior fit-out execution across the UAE." button="Discuss Your Project" />
    </>
  );
}
