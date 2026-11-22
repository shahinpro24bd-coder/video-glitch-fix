import { Link } from "@tanstack/react-router";
import { useState } from "react";
import hero3Asset from "@/assets/hero-3.webp.asset.json";
import { services } from "@/lib/site";
import { PageHeader, SectionTitle } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/Sections";
import { Reveal, dl } from "@/components/site/Reveal";
import { T, Img } from "@/lib/editable";

const props = ["Residential Development", "Commercial Development", "Residential Building", "Commercial Building", "Residential Tower", "Office Fit-Out"];
const filters = ["All", "Residential", "Commercial"] as const;

export function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  // After a filter click the re-mounted cards animate in straight away instead of waiting for the section entrance.
  const [touched, setTouched] = useState(false);
  const base = touched ? 0 : 600;
  // Category showcase until verified project details are supplied.
  const categories = services.map((s, n) => ({ ...s, n, property: props[n] ?? "Property", sector: n % 2 === 0 ? "Residential" : "Commercial" }));
  const shown = filter === "All" ? categories : categories.filter((c) => c.sector === filter);
  return (
    <>
      <PageHeader k="projects" title="Projects" crumb="Projects" image={hero3Asset.url} />
      <Reveal as="div" className="band py-5 pjs">
        <span className="ab-gridbg" aria-hidden="true" />
        <div className="container position-relative">
          <SectionTitle k="projects.intro" kicker="Our Projects" title="Experience That Delivers. Projects That Speak." />
          <p className="text-center mx-auto mb-5 rx-up" style={dl(400, { maxWidth: 800 })}>
            <T k="projects.intro.text" d="Our project experience reflects our commitment to engineering excellence, quality execution and dependable project delivery. From residential and commercial developments to complex building infrastructure, we bring the technical capability and execution discipline required to meet project objectives." />
          </p>
          <div className="pj-filters rx-up" style={dl(500)} role="tablist">
            {filters.map((f) => (
              <button key={f} type="button" role="tab" aria-selected={filter === f}
                className={`pj-filter ${filter === f ? "is-active" : ""}`} onClick={() => { setFilter(f); setTouched(true); }}>
                {f}<span>{f === "All" ? categories.length : categories.filter((c) => c.sector === f).length}</span>
              </button>
            ))}
          </div>
          <div className="pj-grid" key={filter}>
            {shown.map((c, i) => (
              <article key={c.slug} className="pj-card rx-up" style={dl(base + i * 110)}>
                <div className="pj-media">
                  <Img k={`projects.${c.n}.img`} d={c.image} alt={c.title} />
                  <span className="pj-shade" aria-hidden="true" />
                  <span className="pj-chip rx-left" style={dl(base + 300 + i * 110)}><i className={`fa ${c.icon}`}></i>{c.sector}</span>
                  <span className="pj-num">{String(i + 1).padStart(2, "0")}</span>
                  <Link to="/services/$slug" params={{ slug: c.slug }} className="pj-zoom" aria-label={`View ${c.title}`}>
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                  <div className="pj-overlay-title">
                    <span><T k={`projects.${c.n}.property`} d={c.property} line /></span>
                    <h3><T k={`projects.${c.n}.title`} d={`${c.title} Project`} /></h3>
                  </div>
                </div>
                <div className="pj-body">
                  <div className="pj-meta">
                    <div><small>Property</small><strong><T k={`projects.${c.n}.property`} d={c.property} line /></strong></div>
                    <div><small>Location</small><strong><T k={`projects.${c.n}.location`} d="UAE" line /></strong></div>
                  </div>
                  <div className="pj-scope">
                    {c.items.slice(0, 3).map((it, j) => <span key={it}><T k={`projects.${c.n}.scope.${j}`} d={it} line /></span>)}
                  </div>
                  <Link to="/services/$slug" params={{ slug: c.slug }} className="pj-link">
                    <T k="projects.link" d="View Service" line /> <i className="fa fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
      <CtaBanner k="projects.cta" title="Discuss Your Project" text="Explore our portfolio of successfully executed projects and discover the QMEP approach to quality and performance." button="Discuss Your Project" />
    </>
  );
}
