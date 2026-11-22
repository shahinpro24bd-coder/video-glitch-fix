import { Link } from "@tanstack/react-router";
import hero2Asset from "@/assets/hero-2.webp.asset.json";
import { services } from "@/lib/site";
import { PageHeader, SectionTitle } from "@/components/site/Layout";
import { CtaBanner, Process, ServicesGrid } from "@/components/site/Sections";
import { Reveal, Words, dl } from "@/components/site/Reveal";
import { T, Img } from "@/lib/editable";

export function ServicesPage() {
  return (
    <>
      <PageHeader k="services" title="Services" crumb="Services" image={hero2Asset.url} />
      <ServicesGrid />
      <div className="band py-5 svd-section">
        <span className="ab-gridbg" aria-hidden="true" />
        <div className="container position-relative">
          <Reveal as="div"><SectionTitle k="services.details" kicker="Service Details" title="Integrated MEP & Interior Solutions" /></Reveal>
          {services.map((s, n) => {
            const flip = n % 2 === 1;
            return (
              <Reveal as="div" key={s.slug} id={s.slug} className="row g-5 align-items-center mb-5 svd-row">
                <div className={`col-lg-5 ${flip ? "order-lg-2" : ""}`}>
                  <div className={`svd-media ${flip ? "rx-clip-r" : "rx-clip"}`} style={dl(0)}>
                    <Img k={`services.${n}.image`} d={s.image} className="svd-img" alt={s.title} />
                    <span className="svd-badge rx-pop" style={dl(650)}><i className={`fa ${s.icon}`}></i></span>
                  </div>
                </div>
                <div className="col-lg-7">
                  <h4 className="section-title rx-left" style={dl(150)}>0{n + 1}</h4>
                  <h2 className="display-6 mb-3"><Words k={`services.${n}.title`} d={s.title} /></h2>
                  <p className="mb-4 rx-up" style={dl(350)}><T k={`services.${n}.summary`} d={s.summary} /></p>
                  <div className="row">
                    {s.items.map((it, j) => (
                      <div key={j} className="col-sm-6 rx-left" style={dl(450 + j * 70)}><p className="svd-item"><i className="fa fa-check text-primary me-3"></i><T k={`services.${n}.items.${j}`} d={it} /></p></div>
                    ))}
                  </div>
                  <div className="d-flex flex-wrap gap-2 mt-2 rx-up" style={dl(500 + s.items.length * 70)}>
                    <Link to="/services/$slug" params={{ slug: s.slug }} className="btn btn-primary py-3 px-5 rx-btn"><T k="services.detailsBtn" d="View Service Details" line /><i className="fa fa-arrow-right ms-2"></i></Link>
                    <Link to="/contact" className="btn btn-outline-primary py-3 px-4 rx-btn"><T k={`services.${n}.cta`} d={s.cta} line /></Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <Process />
      <CtaBanner k="services.cta" title="Looking for a Reliable MEP Contractor?" text="Partner with QMEP for dependable engineering solutions, professional project execution and quality you can trust." button="Request a Quotation" />
    </>
  );
}
