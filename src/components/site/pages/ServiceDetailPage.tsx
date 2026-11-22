import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { company, services } from "@/lib/site";
import { PageHeader } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/Sections";
import { serviceDetails } from "@/lib/service-details";
import { Reveal, Words, dl } from "@/components/site/Reveal";
import { T, Img } from "@/lib/editable";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const idx = services.findIndex((s) => s.slug === slug);
  const s = services[idx]!;
  const others = services.map((x, n) => ({ ...x, n })).filter((x) => x.slug !== slug);
  const d = serviceDetails[slug]!;
  const flip = idx % 2 === 1;
  const [openQ, setOpenQ] = useState(0);
  const p = `sd.${slug}`;
  const sv = `services.${idx}`;

  return (
    <>
      <PageHeader k={p} title={s.title} crumb={s.title} image={s.image} />

      <Reveal className="sd-intro">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className={`col-lg-6 ${flip ? "order-lg-2" : ""}`}>
              <div className="sd-media">
                <Img k={`${sv}.image`} d={s.image} alt={s.title} className={`sd-img ${flip ? "rx-clip-r" : "rx-clip"}`} style={dl(0)} decoding="async" />
                <span className="sd-frame rx-zoom" style={dl(300)} aria-hidden="true" />
                <div className="sd-badge rx-pop" style={dl(700)}>
                  <span className="sd-badge-icon"><i className={`fa ${s.icon}`}></i></span>
                  <span><small>Service</small><strong>{String(idx + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</strong></span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="ind-kicker rx-left" style={dl(100)}><T k="sd.overview" d="Service Overview" line /></span>
              <h2 className="sd-title"><Words k={`${sv}.title`} d={s.title} /></h2>
              <p className="sd-lead rx-up" style={dl(350)}><T k={`${sv}.summary`} d={s.summary} /></p>
              <p className="rx-up" style={dl(450)}><T k={`${p}.intro`} d={d.intro} /></p>
              <div className="sd-stats">
                {d.stats.map((st, i) => (
                  <div key={st.label} className="sd-stat rx-zoom" style={dl(550 + i * 110)}><strong><T k={`${p}.stat.${i}.value`} d={st.value} line /></strong><small><T k={`${p}.stat.${i}.label`} d={st.label} line /></small></div>
                ))}
              </div>
              <div className="d-flex flex-wrap gap-2 mt-4 rx-up" style={dl(800)}>
                <Link to="/contact" className="btn btn-primary py-3 px-5"><T k={`${sv}.cta`} d={s.cta} line /></Link>
                <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="btn btn-outline-primary py-3 px-4"><i className="fab fa-whatsapp me-2"></i><T k="sd.wa" d="WhatsApp Us" line /></a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="sd-scope">
        <div className="container">
          <div className="sd-scope-head">
            <span className="ind-kicker rx-left" style={dl(0)}><T k="sd.scope.kicker" d="What's Included" line /></span>
            <h2 className="sd-title text-white rx-rise" style={dl(150)}><T k="sd.scope.title" d="Scope of Work" line /></h2>
          </div>
          <div className={flip ? "sd-scope-list" : "sd-scope-grid"}>
            {s.items.map((it, i) => (
              <div key={i} className="sd-scope-item rx-up" style={dl(300 + i * 90)}>
                <span className="sd-scope-num">{String(i + 1).padStart(2, "0")}</span>
                <i className="fa fa-check sd-scope-check rx-pop" style={dl(500 + i * 90)}></i>
                <h3><T k={`${sv}.items.${i}`} d={it} /></h3>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="sd-signs">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className={`col-lg-5 ${flip ? "" : "order-lg-2"}`}>
              <span className="ind-kicker rx-left" style={dl(0)}><T k="sd.signs.kicker" d="Good To Know" line /></span>
              <h2 className="sd-title"><Words k={`${p}.signsTitle`} d={d.signsTitle} /></h2>
              <p className="mb-4 rx-up" style={dl(400)}><T k="sd.signs.lead" d="Our team can review your project requirements and advise on the right approach." /></p>
              <Link to="/contact" className="btn btn-primary py-3 px-5 rx-up" style={dl(500)}><T k="sd.signs.btn" d="Discuss Your Project" line /></Link>
            </div>
            <div className="col-lg-7">
              <ul className="sd-signs-list">
                {d.signs.map((g, i) => (
                  <li key={g} className="rx-right" style={dl(250 + i * 100)}><i className="fa fa-check"></i><T k={`${p}.sign.${i}`} d={g} /></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="sd-benefits">
        <div className="container">
          <div className="row g-0">
            {d.benefits.map((bn, i) => (
              <div key={bn.title} className="col-md-4 rx-up" style={dl(i * 150)}>
                <div className="sd-benefit">
                  <span className="sd-benefit-num">{String(i + 1).padStart(2, "0")}</span>
                  <i className={`fa ${bn.icon} sd-benefit-icon rx-pop`} style={dl(250 + i * 150)}></i>
                  <h3><T k={`${p}.benefit.${i}.title`} d={bn.title} /></h3>
                  <p className="mb-0"><T k={`${p}.benefit.${i}.text`} d={bn.text} /></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="sd-others">
        <div className="container">
          <div className="sd-scope-head">
            <span className="ind-kicker rx-left" style={dl(0)}><T k="sd.others.kicker" d="Explore More" line /></span>
            <h2 className="sd-title"><Words k="sd.others.title" d="Other Services" /></h2>
          </div>
          <div className="row g-4">
            {others.map((o, i) => (
              <div key={o.slug} className="col-lg-4 col-md-6 rx-zoom" style={dl(250 + i * 110)}>
                <Link to="/services/$slug" params={{ slug: o.slug }} className="sd-other">
                  <Img k={`services.${o.n}.image`} d={o.image} alt={o.title} />
                  <span className="sd-other-body">
                    <span className="sd-other-icon"><i className={`fa ${o.icon}`}></i></span>
                    <strong>{o.title}</strong>
                    <i className="fa fa-arrow-right sd-other-arrow"></i>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="sd-faq">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <span className="ind-kicker rx-left" style={dl(0)}><T k="sd.faq.kicker" d="Questions" line /></span>
              <h2 className="sd-title"><Words k={`${p}.faqTitle`} d={`${s.title} FAQs`} /></h2>
              <a href={company.phoneHref} className="aud-call mt-3 rx-up" style={dl(400)}><i className="fa fa-phone-alt"></i> {company.phone}</a>
            </div>
            <div className="col-lg-8">
              {d.faqs.map((f, i) => (
                <div key={f.q} className={`sd-q rx-up ${openQ === i ? "is-open" : ""}`} style={dl(200 + i * 90)}>
                  <button type="button" onClick={() => setOpenQ(openQ === i ? -1 : i)}>
                    <span><T k={`${p}.faq.${i}.q`} d={f.q} /></span><i className="fa fa-plus"></i>
                  </button>
                  <div className="sd-a"><p><T k={`${p}.faq.${i}.a`} d={f.a} /></p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
      <CtaBanner k={`${p}.cta`} title={`Discuss Your ${s.title} Requirements`} text="Tell us about your project and requirements. Our team will review the details and get back to you." button={s.cta} />
    </>
  );
}
