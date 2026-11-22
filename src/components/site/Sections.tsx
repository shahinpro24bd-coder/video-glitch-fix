import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type PointerEvent as RPointerEvent } from "react";
import servicesVideoAsset from "@/assets/services-bg-hd.mp4.asset.json";
import servicesPosterAsset from "@/assets/services-bg-hd-poster.webp.asset.json";
import whyVideoAsset from "@/assets/why-engineer-hd.mp4.asset.json";
import whyPosterAsset from "@/assets/why-engineer-hd-poster.webp.asset.json";
import legacyWhyPoster from "@/assets/legacy/why-engineer-poster.jpg.asset.json";
import { SiteVideo } from "@/components/site/SiteVideo";
import { company, faqs, processSteps, services, whyUs } from "@/lib/site";
import about1Asset from "@/assets/about-1.webp.asset.json";
const about1 = about1Asset.url;
import about2Asset from "@/assets/about-2.webp.asset.json";
const about2 = about2Asset.url;
import { T, Img, useEditable } from "@/lib/editable";

export function ServicesGrid() {
  const { edit, get } = useEditable();
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  // Reveal the cards (and start the background video) once the section scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { setInView(true); io.disconnect(); } }, { rootMargin: REVEAL_MARGIN });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const title = get("svcgrid.title", "Comprehensive Engineering Solutions");
  const words = title.split(/\s+/).filter(Boolean);
  const names = services.map((s) => s.title);

  return (
    <section ref={ref} className={`band svx ${inView || edit ? "is-in" : ""}`}>
      <div className="svx-fx" aria-hidden="true">
        <SiteVideo className="svx-video" mp4={servicesVideoAsset.url} poster={servicesPosterAsset.url} />
        <span className="svx-wash" />
        <span className="svx-gridbg" />
        <span className="svx-scan" />
      </div>

      <div className="container position-relative">
        <div className="svx-head">
          <span className="svx-kicker"><span className="svx-kicker-dot" /><T k="svcgrid.kicker" d="Our Services" line /></span>
          <h2 className="display-5 svx-title">
            {edit ? <T k="svcgrid.title" d="Comprehensive Engineering Solutions" /> : words.map((w, n) => (
              <span key={n} className="svx-word"><span style={{ ["--w" as string]: n }}>{w}</span></span>
            ))}
          </h2>
          <p className="svx-lead"><T k="svcgrid.lead" d="We provide integrated MEP and interior solutions, supporting construction projects from initial coordination through installation, testing, commissioning and handover." /></p>
        </div>

        <div className="row g-4 svx-row">
          {services.map((s, i) => (
            <div key={s.slug} className="col-lg-4 col-md-6 svx-item" style={{ ["--i" as string]: i }}>
              <Link to="/services/$slug" params={{ slug: s.slug }} className="svx-card">
                <Img k={`services.${i}.image`} d={s.image} className="svx-bg" alt={s.title} />
                <span className="svx-shade" aria-hidden="true" />
                <div className="svx-body">
                  <div className="svx-top">
                    <span className="svx-icon"><i className={`fa ${s.icon}`}></i></span>
                    <span className="svx-num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="svx-ctitle"><T k={`services.${i}.title`} d={s.title} /></h3>
                  <p className="svx-text"><T k={`services.${i}.summary`} d={s.summary} /></p>
                  <span className="svx-more"><T k="svcgrid.more" d="Read More" line /><i className="fa fa-arrow-right"></i></span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="svx-help">
          <span className="svx-help-icon"><i className="fa fa-headset"></i></span>
          <span className="svx-help-text">
            <strong><T k="svcgrid.helpTitle" d="Not sure which service you need?" line /></strong>
            <small><T k="svcgrid.helpText" d="Tell us about your project — our team will advise on the right solution." /></small>
          </span>
          <div className="svx-help-actions">
            <Link to="/contact" className="btn btn-primary py-3 px-4"><T k="svcgrid.helpBtn" d="Talk To Our Team" line /><i className="fa fa-arrow-right ms-2"></i></Link>
            <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="btn svx-wa py-3 px-4"><i className="fab fa-whatsapp me-2"></i>WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="svx-marquee" aria-hidden="true">
        <div className="svx-track">
          {[...names, ...names].map((n, j) => <span key={j}>{n}<i className="fa fa-asterisk"></i></span>)}
        </div>
        <div className="svx-track svx-track-rev">
          {[...names, ...names].map((n, j) => <span key={j}>{n}<i className="fa fa-asterisk"></i></span>)}
        </div>
      </div>
    </section>
  );
}

// Sections start their entrance slightly before they scroll into view, so content is already
// showing when the visitor reaches it instead of popping in late.
export const REVEAL_MARGIN = "0px 0px 40% 0px";

// Adds "is-in" once the element nears the viewport, so CSS can play its entrance animation.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useInView<T extends Element>(_threshold = 0) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { setInView(true); io.disconnect(); } }, { rootMargin: REVEAL_MARGIN });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView] as const;
}

export function WhyUs() {
  const { edit, get, pick } = useEditable();
  const [ref, inView] = useInView<HTMLElement>(0.12);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const titleD = "MEP Contractor of Choice";
  const words = get("why.title", titleD).split(/\s+/).filter(Boolean);
  const feats = whyUs.slice(0, 4);
  const CYCLE = 4000;

  // Highlight one feature card at a time; hovering a card takes over and pauses the cycle.
  useEffect(() => {
    if (!inView || paused || edit) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % feats.length), CYCLE);
    return () => window.clearTimeout(t);
  }, [inView, paused, edit, active, feats.length]);

  // Cursor spotlight on cards and a gentle 3D tilt on the photo stack (mouse only).
  const spot = (e: RPointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const tilt = (e: RPointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.setProperty("--ry", `${x * 7}deg`);
    e.currentTarget.style.setProperty("--rx", `${y * -7}deg`);
  };
  const untilt = (e: RPointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--ry", "0deg");
    e.currentTarget.style.setProperty("--rx", "0deg");
  };

  return (
    <section ref={ref} className={`band wcx ${inView || edit ? "is-in" : ""} ${paused ? "is-paused" : ""}`}>
      <div className="wcx-fx" aria-hidden="true">
        <span className="wcx-gridbg" />
        <span className="wcx-orb wcx-orb-a" />
        <span className="wcx-orb wcx-orb-b" />
        <span className="wcx-mark">WHY QMEP</span>
        {Array.from({ length: 10 }).map((_, n) => (
          <span key={n} className="wcx-pt" style={{ ["--x" as string]: `${(n * 37 + 7) % 100}%`, ["--t" as string]: `${9 + (n % 4) * 3}s`, ["--dl" as string]: `${-n * 1.7}s`, ["--s" as string]: `${4 + (n % 3) * 3}px` }} />
        ))}
      </div>
      <div className="container position-relative">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <span className="svx-kicker wcx-rv" style={{ ["--d" as string]: "0ms" }}><span className="svx-kicker-dot" /><T k="why.kicker" d="Why Choose QMEP?" line /></span>
            <h2 className="display-5 wcx-title">
              {edit ? <T k="why.title" d={titleD} /> : words.map((w, n) => (
                <span key={n} className={`svx-word ${n >= words.length - 2 ? "wcx-hl" : ""}`}><span style={{ ["--w" as string]: n }}>{w}</span></span>
              ))}
            </h2>
            <p className="wcx-lead wcx-rv" style={{ ["--d" as string]: "450ms" }}><T k="why.lead" d="Engineering excellence backed by experience, technical expertise and an unwavering commitment to quality." /></p>
            <div className="row g-3" onPointerLeave={() => setPaused(false)}>
              {feats.map((w, i) => (
                <div key={w.title} className="col-sm-6 wcx-rv" style={{ ["--d" as string]: `${550 + i * 120}ms` }}>
                  <div
                    className={`wcx-card ${active === i ? "is-active" : ""}`}
                    onPointerEnter={() => { setActive(i); setPaused(true); }}
                    onPointerMove={spot}
                  >
                    <span className="wcx-card-spot" aria-hidden="true" />
                    <div className="wcx-card-top">
                      <span className="wcx-icon"><span className="wcx-icon-ring" aria-hidden="true" /><i className={`fa ${w.icon}`}></i></span>
                      <span className="wcx-num">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="wcx-ctitle"><T k={`why.${i}.title`} d={w.title} /></h3>
                    <p className="wcx-text"><T k={`why.${i}.text`} d={w.text} /></p>
                    <span className="wcx-big" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    {active === i && <span key={active} className="wcx-prog" style={{ ["--cy" as string]: `${CYCLE}ms` }} aria-hidden="true" />}
                  </div>
                </div>
              ))}
            </div>
            <div className="wcx-dots wcx-rv" style={{ ["--d" as string]: "1000ms" }} aria-hidden="true">
              {feats.map((_, i) => <span key={i} className={active === i ? "is-on" : ""} />)}
            </div>
            <div className="d-flex flex-wrap gap-3 mt-4 wcx-rv" style={{ ["--d" as string]: "1080ms" }}>
              <Link to="/about" className="btn btn-primary py-3 px-4 wcx-btn"><T k="why.btn" d="More About Our Company" line /><i className="fa fa-arrow-right ms-2"></i></Link>
              <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="why-btn-ghost btn py-3 px-4 wcx-wa">
                <i className="fab fa-whatsapp me-2"></i><T k="why.wa" d="Chat on WhatsApp" line />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wcx-media" onPointerMove={tilt} onPointerLeave={untilt}>
              <span className="wcx-ring wcx-rv" style={{ ["--d" as string]: "300ms" }} aria-hidden="true" />
              <span className="wcx-dotgrid wcx-rv" style={{ ["--d" as string]: "350ms" }} aria-hidden="true" />
              <div className="wcx-stage">
                <div className="wcx-frame wcx-rv" style={{ ["--d" as string]: "150ms" }}>
                  <div className="wcx-frame-inner">
                    <SiteVideo className="wcx-video" mp4={whyVideoAsset.url} poster={(() => { const v = get("why.img1", ""); return v && v !== legacyWhyPoster.url ? v : whyPosterAsset.url; })()} />
                    <span className="wcx-scan" aria-hidden="true" />
                    <span className="wcx-corner wcx-c-tl" aria-hidden="true" />
                    <span className="wcx-corner wcx-c-tr" aria-hidden="true" />
                    <span className="wcx-corner wcx-c-bl" aria-hidden="true" />
                    <span className="wcx-corner wcx-c-br" aria-hidden="true" />
                    <span className="wcx-chip"><span className="wcx-chip-dot" /><T k="why.chip" d="Site Inspection · UAE" line /></span>
                    {edit && (
                      <button type="button" className="cms-hero-pick" onClick={() => pick("why.img1")}><i className="fa fa-image me-2"></i>Change video poster</button>
                    )}
                  </div>
                </div>
                <div className="wcx-sub-wrap wcx-rv" style={{ ["--d" as string]: "400ms" }}>
                  <Img k="why.img2" d={about2} className="wcx-sub" alt="QMEP technician on site" />
                </div>
                <a className="wcx-call wcx-rv" style={{ ["--d" as string]: "550ms" }} href={company.phoneHref}>
                  <span className="wcx-call-icon"><span className="wcx-call-pulse" aria-hidden="true" /><i className="fa fa-phone-alt"></i></span>
                  <span className="wcx-call-text"><small>Call Our Team</small><strong>{company.phone}</strong></span>
                </a>
                <div className="wcx-checks wcx-rv" style={{ ["--d" as string]: "700ms" }}>
                  {whyUs.slice(4, 7).map((w, j) => (
                    <div key={w.title} className="wcx-check" style={{ ["--c" as string]: j }}>
                      <span className="wcx-check-tick" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7" /></svg>
                      </span>
                      <span><T k={`why.${j + 4}.title`} d={w.title} line /></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Section heading whose words slide up one by one when its `.mx` section scrolls into view. */
export function SplitTitle({ k, d, className = "", as: Tag = "h2" }: { k?: string | undefined; d: string; className?: string; as?: "h1" | "h2" }) {
  const { edit, get } = useEditable();
  const words = (k ? get(k, d) : d).split(/\s+/).filter(Boolean);
  return (
    <Tag className={`mx-title ${className}`}>
      {edit ? <T k={k} d={d} /> : words.map((w, n) => (
        <span key={n} className="svx-word"><span style={{ ["--w" as string]: n }}>{w}</span></span>
      ))}
    </Tag>
  );
}

/** Pill label above a section heading, with a pulsing dot. */
export function Kicker({ k, d }: { k?: string | undefined; d: string }) {
  return <span className="svx-kicker"><span className="svx-kicker-dot" /><T k={k} d={d} line /></span>;
}

export function WhoWeServe({ audiences }: {
  audiences: { img: string; title: string; sub: string; icon: string; text: string }[];
}) {
  const { edit } = useEditable();
  const [ref, inView] = useInView<HTMLElement>(0.1);
  return (
    <section ref={ref} className={`band mx audx ${inView || edit ? "is-in" : ""}`}>
      <div className="wcx-fx" aria-hidden="true">
        <span className="wcx-gridbg" />
        <span className="wcx-orb wcx-orb-a" />
      </div>
      <div className="container position-relative">
        <div className="row g-4 align-items-end mb-5">
          <div className="col-lg-7">
            <Kicker k="aud.kicker" d="Who We Work With" />
            <SplitTitle k="aud.title" d="Developers, Main Contractors, Consultants & Project Owners" className="display-5" />
            <p className="mx-lead mx-rv" style={{ ["--d" as string]: "450ms" }}><T k="aud.lead" d="From residential and commercial developments to complex building infrastructure, we bring the technical capability and execution discipline required to meet project objectives." /></p>
          </div>
          <div className="col-lg-5">
            <div className="d-flex justify-content-lg-end audx-callwrap mx-rv" style={{ ["--d" as string]: "550ms" }}>
              <a className="mx-call" href={company.phoneHref}>
                <span className="mx-call-icon"><i className="fa fa-phone-alt"></i></span>
                <span className="mx-call-text"><small>Call Our Team</small><strong>{company.phone}</strong></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {audiences.map((a, i) => (
            <div key={a.title} className="col-lg-3 col-md-6">
              <div className="mx-rv h-100" style={{ ["--d" as string]: `${300 + i * 120}ms` }}>
                <div className="audx-card">
                  <div className="audx-media">
                    <Img k={`aud.${i}.img`} d={a.img} alt={a.title} />
                    <span className="audx-shade" aria-hidden="true" />
                    <span className="audx-num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="audx-body">
                    <span className="audx-icon"><i className={`fa ${a.icon}`}></i></span>
                    <div><span className="audx-sub"><T k={`aud.${i}.sub`} d={a.sub} line /></span></div>
                    <h3 className="audx-title"><T k={`aud.${i}.title`} d={a.title} /></h3>
                    <p className="audx-text"><T k={`aud.${i}.text`} d={a.text} /></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const processIcons = ["fa-comments", "fa-search", "fa-file-invoice", "fa-tools", "fa-check-circle"];

export function Process() {
  const { edit } = useEditable();
  const [ref, inView] = useInView<HTMLElement>(0.1);
  return (
    <section ref={ref} className={`band mx prc-section ${inView || edit ? "is-in" : ""}`} aria-label="Our Work Process">
      <div className="container position-relative">
        <div className="row g-4 align-items-end mb-5">
          <div className="col-lg-7">
            <Kicker k="prc.kicker" d="Our Work Process" />
            <SplitTitle k="prc.title" d="From Coordination To Handover" className="display-5 mb-0" />
          </div>
          <div className="col-lg-5">
            <p className="mx-lead prc-head-lead mx-rv" style={{ ["--d" as string]: "450ms" }}><T k="prc.lead" d="We support construction projects from initial coordination through installation, testing, commissioning and handover." /></p>
          </div>
        </div>
        <ol className="prc-track">
          <li className="prc-line" aria-hidden="true" role="presentation" />
          {processSteps.map((p, i) => (
            <li key={p.title} className="prc-step" style={{ ["--i" as string]: i }}>
              <div className="mx-rv" style={{ ["--d" as string]: `${250 + i * 130}ms` }}>
                <div className="prc-station" aria-hidden="true">
                  <span className="prc-node">{String(i + 1).padStart(2, "0")}</span>
                  <span className="prc-direction"><i className="fa fa-arrow-right" /></span>
                </div>
                <div className="prc-card">
                  <div className="prc-card-top">
                    <span className="prc-icon" aria-hidden="true"><i className={`fa ${processIcons[i] ?? "fa-check"}`} /></span>
                    <span className="prc-label">Step {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="prc-title"><T k={`prc.${i}.title`} d={p.title} /></h3>
                  <p className="prc-text"><T k={`prc.${i}.text`} d={p.text} /></p>
                  <span className="prc-card-progress" aria-hidden="true" />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Faq() {
  const { edit } = useEditable();
  const [open, setOpen] = useState(0);
  const [ref, inView] = useInView<HTMLElement>(0.1);
  return (
    <section ref={ref} className={`band mx faqx ${inView || edit ? "is-in" : ""}`}>
      <div className="wcx-fx" aria-hidden="true">
        <span className="wcx-orb wcx-orb-b" />
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="faq-side">
              <Kicker k="faq.kicker" d="FAQ" />
              <SplitTitle k="faq.title" d="Frequently Asked Questions" className="display-5 mb-3" />
              <p className="mx-lead mb-4 mx-rv" style={{ ["--d" as string]: "400ms" }}><T k="faq.lead" d="Quick answers about our services, experience and how to request a quotation." /></p>
              <div className="mx-rv" style={{ ["--d" as string]: "500ms" }}>
                <a className="faq-help" href={company.whatsappHref} target="_blank" rel="noreferrer">
                  <span className="faq-help-icon"><i className="fab fa-whatsapp"></i></span>
                  <span><small>Still have questions?</small><strong>Ask our team</strong></span>
                  <i className="fa fa-arrow-right ms-auto"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            {faqs.map((f, i) => {
              const on = open === i;
              return (
                <div key={i} className="mx-rv" style={{ ["--d" as string]: `${200 + i * 90}ms` }}>
                  <div className={`faq-item${on ? " is-open" : ""}`}>
                    <button type="button" className="faq-q" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)}>
                      <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="faq-title"><T k={`faqs.${i}.q`} d={f.q} /></span>
                      <span className="faq-toggle"><i className="fa fa-plus"></i></span>
                    </button>
                    <div className="faq-a"><div><p><T k={`faqs.${i}.a`} d={f.a} /></p></div></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    setBusy(true); setErr("");
    const { supabase } = await import("@/lib/supabase");
    const { error } = await supabase.from("quote_requests").insert({
      name: v("name"), company: v("company") || null, phone: v("phone"), email: v("email") || null,
      location: v("location"), service: v("service"), property_type: v("property_type") || null, details: v("details"),
    });
    setBusy(false);
    if (error) setErr("Sorry, we couldn't send your request. Please try again or call us.");
    else setSent(true);
  };
  if (sent)
    return (
      <div className="qt-form qt-thanks text-center h-100 d-flex flex-column justify-content-center">
        <i className="fa fa-check-circle fa-4x text-primary mb-4"></i>
        <h3><T k="form.thanksTitle" d="Thank You!" line /></h3>
        <p className="mb-0"><T k="form.thanksText" d="Thank you for contacting QMEP. Your enquiry has been received. Our team will review your project requirements and contact you regarding the next steps." /></p>
      </div>
    );
  const h = { height: 55 };
  return (
    <form onSubmit={submit} className="qt-form row g-3 mx-0">
      <div className="col-12 qt-form-head"><span className="qt-form-tag"><T k="form.tag" d="Request a Quotation" line /></span><h3 className="mb-1"><T k="form.title" d="Tell Us About Your Project" /></h3><p className="mb-0"><T k="form.note" d="Share your project requirements and our team will get back to you." /></p></div>
      <div className="col-12 col-sm-6"><input name="name" required maxLength={120} className="form-control" placeholder="Full Name" style={h} /></div>
      <div className="col-12 col-sm-6"><input name="company" maxLength={120} className="form-control" placeholder="Company Name (Optional)" style={h} /></div>
      <div className="col-12 col-sm-6"><input name="phone" required maxLength={40} type="tel" className="form-control" placeholder="Phone Number" style={h} /></div>
      <div className="col-12 col-sm-6"><input name="email" maxLength={200} type="email" className="form-control" placeholder="Email Address (Optional)" style={h} /></div>
      <div className="col-12 col-sm-6"><input name="location" required maxLength={200} className="form-control" placeholder="Project Location" style={h} /></div>
      <div className="col-12 col-sm-6">
        <select name="service" required className="form-select" style={h} defaultValue="">
          <option value="" disabled>Service Required</option>
          {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          <option>Other</option>
        </select>
      </div>
      <div className="col-12">
        <select name="property_type" className="form-select" style={h} defaultValue="">
          <option value="" disabled>Project Type</option>
          <option>Residential Development</option><option>Commercial Development</option><option>Mixed-Use Development</option>
          <option>Building Infrastructure</option><option>Interior Fit-Out</option><option>Other</option>
        </select>
      </div>
      <div className="col-12"><textarea name="details" required maxLength={3000} className="form-control" rows={5} placeholder="Project Details"></textarea></div>
      {err && <div className="col-12 text-danger">{err}</div>}
      <div className="col-12"><button className="btn btn-primary w-100 py-3" type="submit" disabled={busy}>{busy ? "Sending…" : <T k="form.button" d="Request a Quotation" line />}</button></div>
    </form>
  );
}

export function QuoteSection() {
  const { edit } = useEditable();
  const [ref, inView] = useInView<HTMLElement>(0.1);
  return (
    <section ref={ref} className={`band mx qt-section ${inView || edit ? "is-in" : ""}`}>
      <div className="wcx-fx" aria-hidden="true">
        <span className="wcx-gridbg" />
        <span className="wcx-orb wcx-orb-a" />
        <span className="wcx-orb wcx-orb-b" />
      </div>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <Kicker k="qt.kicker" d="Let's Build Something Exceptional" />
            <SplitTitle k="qt.title" d="Looking for a Reliable MEP Contractor?" className="display-5 mb-4" />
            <p className="mx-lead mb-4 mx-rv" style={{ ["--d" as string]: "400ms" }}><T k="qt.lead" d="Partner with QMEP for dependable engineering solutions, professional project execution and quality you can trust. Whether you are a developer, main contractor, consultant or project owner, our team is ready to discuss your project requirements." /></p>
            <div className="row g-3">
              {[
                { icon: "fa-phone-alt", k: "qt.l1", label: "Call Our Team", value: company.phone, href: company.phoneHref },
                { icon: "fa-whatsapp", brand: true, k: "qt.l2", label: "Chat on WhatsApp", value: "Message Us Now", href: company.whatsappHref },
                { icon: "fa-envelope-open", k: "qt.l3", label: "Mail Us Now", value: company.email, href: `mailto:${company.email}` },
              ].map((l, n) => (
                <div key={l.k} className="col-12 mx-rv" style={{ ["--d" as string]: `${500 + n * 110}ms` }}>
                  <ContactLine bare icon={l.icon} brand={l.brand} k={l.k} label={l.label} value={l.value} href={l.href} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-7 mx-rv" style={{ ["--d" as string]: "250ms" }}><QuoteForm /></div>
        </div>
      </div>
    </section>
  );
}

/** One contact row (icon, label, value). `bare` skips the column wrapper when the caller provides its own. */
export function ContactLine({ icon, label, value, href, brand, k, bare }: { icon: string; label: string; value: string; href?: string | undefined; brand?: boolean | undefined; k?: string; bare?: boolean }) {
  const line = (
    <a className="qt-line" href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href ? "noreferrer" : undefined}>
      <span className="qt-line-icon"><i className={`${brand ? "fab" : "fa"} ${icon}`}></i></span>
      <span className="qt-line-text"><small><T k={k && `${k}.label`} d={label} line /></small><strong>{value}</strong></span>
      <span className="qt-line-arrow" aria-hidden="true"><i className="fa fa-arrow-right"></i></span>
    </a>
  );
  return bare ? line : <div className="col-12">{line}</div>;
}

export function CtaBanner({ title, text, button, k, kicker = "Let's Build Something Exceptional" }: { title: string; text: string; button: string; k?: string | undefined; kicker?: string }) {
  const { edit } = useEditable();
  const [ref, inView] = useInView<HTMLElement>(0.15);
  return (
    <section ref={ref} className={`band mx mx-dark ctax ${inView || edit ? "is-in" : ""}`}>
      <div className="container">
        <div className="cta-box mx-rv">
          <span className="cta-grid" aria-hidden="true" />
          <span className="cta-shine" aria-hidden="true" />
          <span className="cta-rings" aria-hidden="true"><span /><span /><span /></span>
          <div className="row g-4 align-items-center position-relative">
            <div className="col-lg-7 text-center text-lg-start">
              <Kicker k={k && `${k}.kicker`} d={kicker} />
              <SplitTitle k={k && `${k}.title`} d={title} className="display-6 cta-title" />
              <p className="cta-text mx-rv" style={{ ["--d" as string]: "450ms" }}><T k={k && `${k}.text`} d={text} /></p>
            </div>
            <div className="col-lg-5">
              <div className="cta-actions mx-rv" style={{ ["--d" as string]: "550ms" }}>
                <Link to="/contact" className="cta-btn cta-btn-main">
                  <span><T k={k && `${k}.button`} d={button} line /></span>
                  <span className="cta-btn-ico" aria-hidden="true"><i className="fa fa-arrow-right"></i></span>
                </Link>
                <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="cta-btn cta-btn-wa">
                  <span><T k={k && `${k}.wa`} d="Chat on WhatsApp" line /></span>
                  <span className="cta-btn-ico" aria-hidden="true"><i className="fab fa-whatsapp"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
