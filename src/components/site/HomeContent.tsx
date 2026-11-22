import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import about1Asset from "@/assets/about-1.webp.asset.json";
const about1 = about1Asset.url;
import about2Asset from "@/assets/about-2.webp.asset.json";
const about2 = about2Asset.url;
import buildingsAsset from "@/assets/buildings.webp.asset.json";
const buildings = buildingsAsset.url;
import { company, services } from "@/lib/site";
import { CtaBanner, Faq, Kicker, Process, QuoteSection, ServicesGrid, SplitTitle, WhoWeServe, WhyUs, useInView, REVEAL_MARGIN } from "@/components/site/Sections";
import amcImgAsset from "@/assets/service-amc.webp.asset.json";
const amcImg = amcImgAsset.url;
import maintImgAsset from "@/assets/service-maintenance.webp.asset.json";
const maintImg = maintImgAsset.url;
import heroVideoAsset from "@/assets/hero-team-hd.mp4.asset.json";
import heroVideoAv1Asset from "@/assets/hero-team-hd.av1.mp4.asset.json";
import heroVideoMobileAsset from "@/assets/hero-team-mobile.mp4.asset.json";
import heroPosterAsset from "@/assets/hero-services-hd-poster.webp.asset.json";
import heroSealAsset from "@/assets/qmep-20-years-emblem.png.asset.json";
import aboutVideoAsset from "@/assets/about-electromechanical-hd.mp4.asset.json";
import aboutPosterAsset from "@/assets/about-electromechanical-hd-poster.webp.asset.json";
import legacyAboutVideo from "@/assets/legacy/about-electromechanical.mp4.asset.json";
import legacyAboutPoster from "@/assets/legacy/about-electromechanical-poster.webp.asset.json";
import { SiteVideo } from "@/components/site/SiteVideo";

/** A saved admin value that is just an old built-in file counts as "not customised". */
const custom = (v: string, ...stale: string[]) => (v && !stale.includes(v) ? v : "");

import { T, Img, useEditable } from "@/lib/editable";


// About background circuit: grid rows/columns (64px cells) that carry travelling light pulses, and junction nodes that ping.
const ABM_ROWS = [{ r: 1, t: "7s", dl: "0s" }, { r: 4, t: "9s", dl: "-3s" }, { r: 7, t: "6.5s", dl: "-5s" }, { r: 10, t: "8s", dl: "-1.5s" }, { r: 13, t: "10s", dl: "-6s" }];
const ABM_COLS = [{ c: 1, t: "7.5s", dl: "-2s" }, { c: 4, t: "6s", dl: "-4s" }, { c: 9, t: "8.5s", dl: "-1s" }, { c: 14, t: "7s", dl: "-5s" }, { c: 18, t: "9s", dl: "-3s" }, { c: 22, t: "6.5s", dl: "-0.5s" }];
const ABM_NODES = [{ r: 1, c: 9, dl: "0s" }, { r: 4, c: 1, dl: "-.8s" }, { r: 4, c: 18, dl: "-2.2s" }, { r: 7, c: 14, dl: "-1.4s" }, { r: 10, c: 4, dl: "-2.8s" }, { r: 10, c: 22, dl: "-.4s" }, { r: 13, c: 9, dl: "-1.9s" }];

const aboutTitle = "Engineering Experience. Proven Performance. Trusted Delivery.";

const tabs = [
  { title: "Mechanical Works", get img() { return services[0]!.image; }, s: services[0]! },
  { title: "Electrical Works", get img() { return services[1]!.image; }, s: services[1]! },
  { title: "Plumbing & Drainage", get img() { return services[2]!.image; }, s: services[2]! },
  { title: "Fire Protection", get img() { return services[3]!.image; }, s: services[3]! },
];

const audiences = [
  {
    img: amcImg, icon: "fa-city", title: "Developers", sub: "Residential & Commercial",
    text: "Integrated MEP and interior solutions for residential and commercial developments, delivered with quality and timely execution.",
  },
  {
    img: buildings, icon: "fa-hard-hat", title: "Main Contractors", sub: "Construction Projects",
    text: "A dependable MEP partner, coordinated with project schedules, specifications and site requirements.",
  },
  {
    img: maintImg, icon: "fa-drafting-compass", title: "Consultants", sub: "Engineering & Design",
    text: "Engineering coordination, compliance with project specifications and transparent communication at every stage.",
  },
  {
    img: about1, icon: "fa-user-tie", title: "Project Owners", sub: "Building Owners",
    text: "Professional project execution and quality you can trust, from initial coordination to handover.",
  },
];


// Hero headline slogans: they take turns on the first screen (first one keeps the original admin keys).
const HERO_SLOGANS = [
  { k: "home.hero.h1", a: "Where Quality", b: "Meets", c: "Speed." },
  { k: "home.hero.s2", a: "20 Years of", b: "MEP", c: "Excellence." },
  { k: "home.hero.s3", a: "MEP Contractor", b: "of", c: "Choice." },
  { k: "home.hero.s4", a: "Quality in", b: "Every", c: "Detail." },
];
const HERO_SLOGAN_MS = 4200;

/** Rotating hero headline: each slogan's lines rise in, then slide up and out as the next one arrives. */
function HeroTitle({ edit }: { edit: boolean }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (edit) return;
    const id = window.setInterval(() => { if (!document.hidden) setTick((t) => t + 1); }, HERO_SLOGAN_MS);
    return () => window.clearInterval(id);
  }, [edit]);
  const n = HERO_SLOGANS.length;
  const cur = tick % n;
  const prev = tick > 0 ? (tick - 1) % n : -1;
  return (
    <h1 className={`hx-title hx-slogans${edit ? " is-edit" : ""}`}>
      {HERO_SLOGANS.map((s, i) => {
        const on = edit || i === cur;
        const out = !edit && i === prev;
        // First appearance keeps the page-load stagger; later swaps are quicker.
        const d = tick === 0 ? ["120ms", "220ms"] : out ? ["0ms", "70ms"] : ["180ms", "270ms"];
        return (
          <span key={s.k} className={`hx-slogan${on ? " is-on" : ""}${out ? " is-out" : ""}`} aria-hidden={on ? undefined : true}>
            <span className="hx-line"><span style={{ ["--d" as string]: d[0] }}><T k={`${s.k}a`} d={s.a} line /></span></span>
            <span className="hx-line"><span style={{ ["--d" as string]: d[1] }}><T k={`${s.k}b`} d={s.b} line /> <em className="hx-accent"><T k={`${s.k}c`} d={s.c} line /></em></span></span>
          </span>
        );
      })}
    </h1>
  );
}

export function HomeContent() {
  const { edit, get, pick } = useEditable();
  const [tab, setTab] = useState(0);
  // Reveal the About section with a staggered animation once it scrolls into view.
  const abRef = useRef<HTMLDivElement>(null);
  const [abIn, setAbIn] = useState(false);
  useEffect(() => {
    const el = abRef.current;
    if (!el || typeof IntersectionObserver === "undefined") { setAbIn(true); return; }
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { setAbIn(true); io.disconnect(); } }, { rootMargin: REVEAL_MARGIN });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // Scroll-linked motion: write the About section's scroll progress into CSS vars
  // (--abp 0→1 as it passes through the viewport, --abd 0 at centre → 1 at edges); CSS does the rest.
  useEffect(() => {
    const el = abRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -200 || r.top > vh + 200) return;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      el.style.setProperty("--abp", p.toFixed(4));
      el.style.setProperty("--abd", Math.min(1, Math.abs(p - 0.5) * 2).toFixed(4));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  // "20+ years" counts up once the video's info bar is actually on screen.
  const badgeRaw = get("home.about.badgeNum", "20");
  const badgeTarget = /^\d+$/.test(badgeRaw.trim()) ? parseInt(badgeRaw, 10) : null;
  const hudRef = useRef<HTMLDivElement>(null);
  const [badgeCount, setBadgeCount] = useState<number | null>(null);
  useEffect(() => {
    const el = hudRef.current;
    if (edit || badgeTarget === null || !el || typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return; // already visible: just show the number
    setBadgeCount(0);
    let raf = 0;
    const io = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const k = Math.min(1, (t - t0) / 1600);
        setBadgeCount(Math.round(badgeTarget * (1 - Math.pow(1 - k, 3))));
        if (k < 1) raf = requestAnimationFrame(tick); else setBadgeCount(null);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [edit, badgeTarget]);
  const [pjRef, pjIn] = useInView<HTMLElement>(0.1);
  const cur = tabs[tab]!;
  return (
    <>
      {/* Hero — corporate MEP hero: dark navy overlay on the services video, centred-left copy, two CTAs, trust bar */}
      <section className="hx">
        <div className="hx-card">
          <SiteVideo priority className="hx-video" mp4={heroVideoAsset.url} av1={heroVideoAv1Asset.url} mobile={heroVideoMobileAsset.url} poster={heroPosterAsset.url} />
          <div className="hx-shade" aria-hidden="true" />
          <div className="hx-grid" aria-hidden="true" />

          {/* Anniversary seal — the logo's "20 Years of Excellence" mark, pinned to the top-right corner of the slide */}
          <div className="hx-seal hx-in" style={{ ["--d" as string]: "560ms" }}>
            <img src={heroSealAsset.url} alt="20 Years of Excellence" width={226} height={185} decoding="async" />
          </div>

          <div className="hx-body">
            <HeroTitle edit={edit} />
            <p className="hx-sub hx-in" style={{ ["--d" as string]: "380ms" }}>
              {(["Mechanical", "Electrical", "Plumbing"] as const).map((w, n) => (
                <span key={w} className="hx-sub-item"><T k={`home.hero.sub${n}`} d={w} line /></span>
              ))}
              <span className="hx-sub-item hx-sub-last"><T k="home.hero.sub3" d="MEP Contractor of Choice" line /></span>
            </p>
            <div className="hx-actions hx-in" style={{ ["--d" as string]: "500ms" }}>
              <Link to="/projects" className="hx-btn hx-btn-primary">
                <T k="home.hero.btn1" d="Explore Our Projects" line />
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
              <Link to="/contact" className="hx-btn hx-btn-ghost"><T k="home.hero.btn2" d="Get In Touch" line /></Link>
            </div>
          </div>

          <ul className="hx-trust hx-in" style={{ ["--d" as string]: "680ms" }}>
            {[
              { icon: "fa-drafting-compass", t: "Established 2007", d: "Proven MEP project execution in the UAE" },
              { icon: "fa-shield-alt", t: "Quality in Every Detail", d: "Quality assurance at every stage" },
              { icon: "fa-bolt", t: "Efficient Delivery", d: "Focused project management, timely completion" },
            ].map((x, n) => (
              <li key={x.t} className="hx-trust-item">
                <span className="hx-trust-ico" aria-hidden="true"><i className={`fa ${x.icon}`}></i></span>
                <span className="hx-trust-txt">
                  <strong><T k={`home.hero.trust${n}`} d={x.t} line /></strong>
                  <small><T k={`home.hero.trust${n}d`} d={x.d} line /></small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* About — clean, futuristic layout: HUD-framed video, spec-style feature grid */}
      <div ref={abRef} className={`band abm ${abIn || edit ? "is-in" : ""}`}>
        <div className="abm-grid" aria-hidden="true" />
        <div className="abm-glow" aria-hidden="true" />
        <div className="abm-flow" aria-hidden="true">
          {ABM_ROWS.map((l) => (
            <span key={`h${l.r}`} className="abm-flow-h" style={{ ["--r" as string]: l.r, ["--t" as string]: l.t, ["--dl" as string]: l.dl }}><i className="abm-pulse" /></span>
          ))}
          {ABM_COLS.map((l) => (
            <span key={`v${l.c}`} className="abm-flow-v" style={{ ["--c" as string]: l.c, ["--t" as string]: l.t, ["--dl" as string]: l.dl }}><i className="abm-pulse" /></span>
          ))}
          {ABM_NODES.map((n) => (
            <span key={`n${n.r}-${n.c}`} className="abm-node" style={{ ["--r" as string]: n.r, ["--c" as string]: n.c, ["--dl" as string]: n.dl }} />
          ))}
        </div>
        <div className="container position-relative">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="abm-media">
                <div className="abm-frame rv" style={{ ["--d" as string]: "0ms" }}>
                  <div className="abm-frame-inner">
                    <SiteVideo eager className="abm-video" mp4={custom(get("home.about.video", ""), legacyAboutVideo.url) || aboutVideoAsset.url} poster={custom(get("home.about.img1", ""), legacyAboutPoster.url) || aboutPosterAsset.url} />
                    <span className="abm-scan" aria-hidden="true" />
                    <span className="abm-live"><span className="abm-live-dot" /> <T k="home.about.live" d="On Site · UAE" line /></span>
                    <div className="abm-hud" ref={hudRef}>
                      <div className="abm-badge">
                        <span className="abm-badge-num">{badgeCount !== null ? badgeCount : <T k="home.about.badgeNum" d="20" line />}<sup>+</sup></span>
                        <span className="abm-badge-text"><small><T k="home.about.badge1" d="Years of" line /></small><strong><T k="home.about.badge2" d="Excellence" line /></strong></span>
                      </div>
                      <span className="abm-hud-meta" aria-hidden="true"><span>QMEP</span><span>Dubai · UAE</span></span>
                    </div>
                    {edit && (
                      <button type="button" className="cms-hero-pick" onClick={() => pick("home.about.img1")}><i className="fa fa-image me-2"></i>Change video poster</button>
                    )}
                  </div>
                  <span className="abm-corner abm-corner-tl" aria-hidden="true" />
                  <span className="abm-corner abm-corner-tr" aria-hidden="true" />
                  <span className="abm-corner abm-corner-bl" aria-hidden="true" />
                  <span className="abm-corner abm-corner-br" aria-hidden="true" />
                </div>
                <div className="abm-sub-wrap rv" style={{ ["--d" as string]: "250ms" }}>
                  <Img k="home.about.img2" d={about2} className="abm-sub" alt="QMEP technician installing an AC unit" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 abm-copy">
              <div className="abm-kicker rv" style={{ ["--d" as string]: "100ms" }}><span className="abm-kicker-line" aria-hidden="true" /><span><T k="home.about.kicker" d="About QMEP" line /></span></div>
              <h2 className={`abm-title ${edit ? "" : "abm-title-split"}`}>
                {edit ? <T k="home.about.title" d={aboutTitle} /> : (() => {
                  const w = get("home.about.title", aboutTitle).trim().split(/\s+/);
                  return w.map((word, wi) => (
                    <span key={wi}><span className="abm-w"><span style={{ ["--i" as string]: wi }}>{word}</span></span>{wi < w.length - 1 ? " " : ""}</span>
                  ));
                })()}
              </h2>
              <p className="abm-lead rv" style={{ ["--d" as string]: "300ms" }}><T k="home.about.lead" d="Established in 2007, QMEP Electromechanical and Interior Works LLC is an experienced MEP contracting company committed to delivering reliable engineering solutions for the UAE construction industry." /></p>
              <p className="abm-text rv" style={{ ["--d" as string]: "380ms" }}><T k="home.about.text" d="Our approach combines engineering knowledge, professional project management, skilled resources and rigorous quality control to ensure every project is executed with precision, efficiency and accountability." /></p>
              <ul className="abm-specs">
                {[
                  { icon: "fa-award", text: "Quality Workmanship" },
                  { icon: "fa-stopwatch", text: "Timely Execution" },
                  { icon: "fa-handshake", text: "Lasting Client Relationships" },
                  { icon: "fa-clipboard-check", text: "Rigorous Quality Control" },
                ].map((f, fi) => (
                  <li key={f.text} className="rv" style={{ ["--d" as string]: `${460 + fi * 80}ms` }}>
                    <div className="abm-spec"><span className="abm-spec-ico" aria-hidden="true"><i className={`fa ${f.icon}`}></i></span><span className="abm-spec-text"><T k={`home.about.f${fi}`} d={f.text} /></span></div>
                  </li>
                ))}
              </ul>
              <div className="abm-actions rv" style={{ ["--d" as string]: "800ms" }}>
                <Link className="abm-btn abm-btn-primary" to="/services"><span><T k="home.about.btn1" d="Discover Our Services" line /></span><span className="abm-btn-ico" aria-hidden="true"><i className="fa fa-arrow-right"></i></span></Link>
                <Link className="abm-btn abm-btn-ghost" to="/about"><T k="home.about.btn2" d="More About Us" line /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesGrid />
      <WhyUs />

      {/* Project tabs — same tabs & content, modern animated layout */}
      <section ref={pjRef} className={`band mx pjx ${pjIn || edit ? "is-in" : ""}`}>
        <div className="wcx-fx" aria-hidden="true">
          <span className="wcx-gridbg" />
          <span className="wcx-orb wcx-orb-a" />
        </div>
        <div className="container position-relative">
          <div className="mx-head mx-center">
            <Kicker k="home.proj.kicker" d="Our Projects" />
            <SplitTitle k="home.proj.title" d="Experience That Delivers. Projects That Speak." className="display-5" />
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="pjx-tabs" role="tablist" aria-label="Project types">
                {tabs.map((t, n) => (
                  <div key={t.title} className="mx-rv" style={{ ["--d" as string]: `${250 + n * 110}ms` }}>
                    <button type="button" role="tab" aria-selected={tab === n} onClick={() => setTab(n)} className={`pjx-tab ${tab === n ? "is-active" : ""}`}>
                      <span className="pjx-tab-icon" aria-hidden="true"><i className={`fa ${t.s.icon}`}></i></span>
                      <span className="pjx-tab-text"><small>0{n + 1}</small><strong><T k={`home.proj.tab${n}`} d={t.title} line /></strong></span>
                      <span className="pjx-tab-arrow" aria-hidden="true"><i className="fa fa-arrow-right"></i></span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-8 mx-rv" style={{ ["--d" as string]: "350ms" }}>
              <div className="pjx-panel" role="tabpanel">
                <div className="pjx-inner">
                  <div className="pjx-media" key={`m${tab}`}>
                    <Img k={`services.${tab}.image`} d={cur.img} alt={cur.title} />
                    <span className="pjx-chip"><span className="pjx-chip-dot" />Project 0{tab + 1}</span>
                  </div>
                  <div className="pjx-body" key={`b${tab}`}>
                    <h3 className="pjx-title" style={{ ["--d" as string]: "150ms" }}><T k={`services.${tab}.title`} d={cur.s.title} /></h3>
                    <p className="pjx-text" style={{ ["--d" as string]: "250ms" }}><T k={`services.${tab}.summary`} d={cur.s.summary} /></p>
                    <ul className="pjx-list" style={{ ["--d" as string]: "300ms" }}>
                      {cur.s.items.slice(0, 3).map((it, j) => (
                        <li key={j} style={{ ["--d" as string]: `${380 + j * 110}ms` }}><span className="pjx-tick" aria-hidden="true"><i className="fa fa-check"></i></span><span><T k={`services.${tab}.items.${j}`} d={it} /></span></li>
                      ))}
                    </ul>
                    <Link to="/projects" className="abm-btn abm-btn-primary" style={{ ["--d" as string]: "650ms" }}>
                      <span><T k="home.proj.btn" d="View Our Project Portfolio" line /></span>
                      <span className="abm-btn-ico" aria-hidden="true"><i className="fa fa-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <WhoWeServe audiences={audiences} />


      <Process />
      <CtaBanner k="home.cta" kicker="Our Commitment" title="Quality in Every Detail." text="Quality is not simply a final inspection at QMEP; it is an integral part of every stage of project delivery — from engineering coordination and material selection to installation, testing and commissioning." button="Get In Touch" />
      <QuoteSection />
      <Faq />
    </>
  );
}
