import { T, useEditable } from "@/lib/editable";
import qmepLogo from "@/assets/qmep-logo.png.asset.json";
import footerVideoAsset from "@/assets/services-bg-hd.mp4.asset.json";
import footerPosterAsset from "@/assets/services-bg-hd-poster.webp.asset.json";
import { SiteVideo } from "@/components/site/SiteVideo";
import { Link, useRouterState } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { company, services } from "@/lib/site";
import { Reveal, Words, dl } from "@/components/site/Reveal";


export function Topbar() {
  return (
    <div className="container-fluid bg-dark p-0 qtb">
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center py-3 me-3">
            <a className="text-body px-2" href={company.phoneHref}>
              <i className="fa fa-phone-alt text-primary me-2"></i>
              {company.phone}
            </a>
            <a className="text-body px-2" href={`mailto:${company.email}`}>
              <i className="fa fa-envelope-open text-primary me-2"></i>
              {company.email}
            </a>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center py-3 me-2">
            <span className="text-body px-2">
              <i className="fa fa-clock text-primary me-2"></i>
              {company.hours}
            </span>
          </div>
          <div className="h-100 d-inline-flex align-items-center">
            <a className="btn btn-sm-square btn-outline-body me-1" href={company.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a className="btn btn-sm-square btn-outline-body me-1" href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-sm-square btn-outline-body me-1" href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-sm-square btn-outline-body me-0" href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

const navLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
] as const;

const moreLinks = [
  { to: "/amc", label: "AMC Packages", desc: "Annual maintenance plans", icon: "fa-file-contract" },
  { to: "/industries", label: "Industries We Serve", desc: "Residential, commercial & more", icon: "fa-industry" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const close = () => setOpen(false);

  // Sliding highlight that follows the hovered link and rests on the active one.
  const moveTo = useCallback((el: Element | null) => {
    const nav = navRef.current;
    if (!nav) return;
    if (!el) { nav.style.setProperty("--qn-o", "0"); return; }
    const a = (el as HTMLElement).getBoundingClientRect();
    const b = nav.getBoundingClientRect();
    nav.style.setProperty("--qn-x", `${a.left - b.left}px`);
    nav.style.setProperty("--qn-w", `${a.width}px`);
    nav.style.setProperty("--qn-o", "1");
  }, []);
  const toActive = useCallback(() => moveTo(navRef.current?.querySelector(".qn-link.is-active") ?? null), [moveTo]);

  useEffect(() => {
    const id = requestAnimationFrame(toActive);
    document.fonts?.ready.then(toActive);
    window.addEventListener("resize", toActive);
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", toActive); };
  }, [pathname, toActive]);

  useEffect(() => {
    const on = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      headerRef.current?.style.setProperty("--qn-p", String(max > 0 ? Math.min(1, y / max) : 0));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open]);

  const moreActive = moreLinks.some((m) => pathname.startsWith(m.to));
  const allLinks = [...navLinks, ...moreLinks, { to: "/contact", label: "Contact" } as const];

  return (
    <>
      <header ref={headerRef} className={`qn ${scrolled ? "qn--scrolled" : ""} ${open ? "qn--open" : ""}`}>
        <div className="qn-inner">
          <span className="qn-glow" aria-hidden="true" />
          <Link to="/" className="qn-brand" onClick={close} aria-label="QMEP home">
            <img src={qmepLogo.url} alt="QMEP — Where Quality Meets Speed" className="qn-logo" />
          </Link>

          <nav ref={navRef} className="qn-links" aria-label="Main" onMouseLeave={toActive}>
            <span className="qn-indicator" aria-hidden="true" />
            {navLinks.map((l, i) => (
              <Link key={l.to} to={l.to} className="qn-link" activeProps={{ className: "qn-link is-active" }}
                activeOptions={{ exact: "exact" in l }} style={{ "--i": i } as CSSProperties}
                onMouseEnter={(e) => moveTo(e.currentTarget)} onFocus={(e) => moveTo(e.currentTarget)}>
                {l.label}
              </Link>
            ))}
            <div className="qn-more" style={{ "--i": navLinks.length } as CSSProperties}>
              <button type="button" className={`qn-link qn-more-btn ${moreActive ? "is-active" : ""}`} aria-haspopup="true"
                onMouseEnter={(e) => moveTo(e.currentTarget)} onFocus={(e) => moveTo(e.currentTarget)}>
                More<i className="fa fa-chevron-down"></i>
              </button>
              <div className="qn-panel">
                {moreLinks.map((m, i) => (
                  <Link key={m.to} to={m.to} className="qn-panel-item" activeProps={{ className: "qn-panel-item is-active" }}
                    style={{ "--i": i } as CSSProperties}>
                    <span className="qn-panel-icon"><i className={`fa ${m.icon}`}></i></span>
                    <span className="qn-panel-text"><strong>{m.label}</strong><small>{m.desc}</small></span>
                    <i className="fa fa-arrow-right qn-panel-arrow"></i>
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/contact" className="qn-link" activeProps={{ className: "qn-link is-active" }}
              style={{ "--i": navLinks.length + 1 } as CSSProperties}
              onMouseEnter={(e) => moveTo(e.currentTarget)} onFocus={(e) => moveTo(e.currentTarget)}>
              Contact
            </Link>
          </nav>

          <div className="qn-actions">
            <a href={company.phoneHref} className="qn-call" aria-label={`Call ${company.phone}`}>
              <span className="qn-call-icon"><i className="fa fa-phone-alt"></i></span>
              <span className="qn-call-text"><small>Call Us</small><strong>{company.phone}</strong></span>
            </a>
            <Link to="/contact" className="qn-cta">
              <span>Get a Quote</span><i className="fa fa-arrow-right"></i>
            </Link>
            <button type="button" className={`qn-burger ${open ? "is-open" : ""}`} aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open} onClick={() => setOpen(!open)}>
              <span></span><span></span>
            </button>
          </div>
          <span className="qn-progress" aria-hidden="true" />
        </div>

        <div className={`qn-drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
          <div className="qn-drawer-panel">
            {allLinks.map((l, i) => (
              <Link key={l.to} to={l.to} className="qn-drawer-link" activeProps={{ className: "qn-drawer-link is-active" }}
                activeOptions={{ exact: l.to === "/" }} onClick={close} tabIndex={open ? 0 : -1}
                style={{ "--i": i } as CSSProperties}>
                <em>{String(i + 1).padStart(2, "0")}</em>{l.label}<i className="fa fa-arrow-right"></i>
              </Link>
            ))}
            <div className="qn-drawer-foot">
              <a href={company.phoneHref} className="qn-cta" tabIndex={open ? 0 : -1}><i className="fa fa-phone-alt"></i><span>{company.phone}</span></a>
              <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="qn-drawer-wa" tabIndex={open ? 0 : -1}><i className="fab fa-whatsapp"></i> WhatsApp</a>
            </div>
          </div>
        </div>
      </header>
      <div className={`qn-backdrop ${open ? "is-open" : ""}`} onClick={close} aria-hidden="true" />
    </>
  );
}

export function PageHeader({ title, crumb, image, k }: { title: string; crumb: string; image: string; k?: string }) {
  const c = useEditable();
  const raw = k ? c.get(`${k}.header.image`, image) : image;
  const img = raw && !raw.startsWith("/assets/") ? raw : image;
  return (
    <Reveal
      as="header"
      className={`container-fluid page-header phx py-5 mb-5 ${c.edit && k ? "cms-img" : ""}`}
      title={c.edit && k ? "Click the background to change image" : undefined}
      onClick={c.edit && k ? (e) => { if (e.target === e.currentTarget) c.pick(`${k}.header.image`); } : undefined}
    >
      <span className="phx-bg" style={{ backgroundImage: `url(${img})` }} aria-hidden="true" />
      <span className="phx-shade" aria-hidden="true" />
      <span className="phx-grid" aria-hidden="true" />
      <span className="phx-sweep" aria-hidden="true" />
      <div className="container py-5 phx-body">
        <span className="phx-kicker rx-left" style={dl(0)}><span className="phx-kicker-dot" aria-hidden="true" />QMEP Electromechanical</span>
        <h1 className="display-1 text-white phx-title"><Words k={k && `${k}.header.title`} d={title} /></h1>
        <span className="phx-line" aria-hidden="true" />
        <nav aria-label="breadcrumb" className="rx-up" style={dl(550)}>
          <ol className="breadcrumb text-uppercase mb-0">
            <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
            <li className="breadcrumb-item text-primary active" aria-current="page"><T k={k && `${k}.header.crumb`} d={crumb} line /></li>
          </ol>
        </nav>
      </div>
    </Reveal>
  );
}

export function SectionTitle({ kicker, title, k }: { kicker: string; title: string; k?: string | undefined }) {
  return (
    <div className="text-center mx-auto mb-5" style={{ maxWidth: 650 }}>
      <h4 className="section-title rx-up" style={dl(0)}><T k={k && `${k}.kicker`} d={kicker} line /></h4>
      <h2 className="display-5 mb-4"><Words k={k && `${k}.title`} d={title} /></h2>
    </div>
  );
}

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/amc", label: "AMC Packages" },
  { to: "/contact", label: "Contact Us" },
] as const;

/** Footer background clip: loads with the page, plays only while the footer is on screen, at a calm speed. */
function FooterVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    v.playbackRate = 0.6;
    if (typeof IntersectionObserver === "undefined") { void v.play().catch(() => {}); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { v.playbackRate = 0.6; void v.play().catch(() => {}); } else v.pause();
    }, { rootMargin: "200px 0px" });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <div className="ft-media" aria-hidden="true">
      <SiteVideo videoRef={ref} autoPlay={false} className="ft-video" mp4={footerVideoAsset.url} poster={footerPosterAsset.url} />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="container-fluid bg-dark text-body footer ft-pro mt-5 pt-5 px-0">
      <FooterVideo />
      <span className="ft-veil" aria-hidden="true" />
      <Reveal as="div" className="container ft-top">
        <div className="ft-cta ft-in" style={dl(0)}>
          <div>
            <span className="ft-cta-kicker"><T k="footer.kicker" d="Let's Build Something Exceptional" line /></span>
            <h2 className="mb-0 ft-cta-title"><T k="footer.title" d="Looking for a Reliable MEP Contractor?" line /></h2>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <a href={company.phoneHref} className="btn btn-primary py-3 px-4 ft-btn"><i className="fa fa-phone-alt me-2"></i>{company.phone}</a>
            <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="btn ft-ghost py-3 px-4 ft-btn"><i className="fab fa-whatsapp me-2"></i>WhatsApp</a>
          </div>
        </div>
      </Reveal>
      <Reveal as="div" className="ft-main">
      <div className="container py-5 ft-cols">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6 ft-in" style={dl(0)}>
            <h3 className="text-light mb-4 ft-h" style={dl(0)}><T k="footer.brand" d="QMEP Electromechanical" line /></h3>
            <p><T k="footer.about" d="Established in 2007, QMEP delivers integrated mechanical, electrical, plumbing and interior solutions for construction projects across the UAE. Where Quality Meets Speed." /></p>
            <div className="d-flex pt-2">
              {[
                { href: company.whatsappHref, icon: "fa-whatsapp", label: "WhatsApp", ext: true },
                { href: "#", icon: "fa-facebook-f", label: "Facebook" },
                { href: "#", icon: "fa-instagram", label: "Instagram" },
                { href: "#", icon: "fa-linkedin-in", label: "LinkedIn" },
              ].map((x) => (
                <span key={x.label} className="me-1">
                  <a className="btn btn-square btn-outline-body" href={x.href} target={x.ext ? "_blank" : undefined} rel={x.ext ? "noreferrer" : undefined} aria-label={x.label}><i className={`fab ${x.icon}`}></i></a>
                </span>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ft-in" style={dl(100)}>
            <h3 className="text-light mb-4 ft-h" style={dl(100)}><T k="footer.svcTitle" d="Our Services" line /></h3>
            {services.map((s) => (
              <Link key={s.slug} className="btn btn-link" to="/services/$slug" params={{ slug: s.slug }}>{s.title}</Link>
            ))}
          </div>
          <div className="col-lg-3 col-md-6 ft-in" style={dl(200)}>
            <h3 className="text-light mb-4 ft-h" style={dl(200)}><T k="footer.linksTitle" d="Quick Links" line /></h3>
            {quickLinks.map((l) => (
              <Link key={l.to} className="btn btn-link" to={l.to}>{l.label}</Link>
            ))}
          </div>
          <div className="col-lg-3 col-md-6 ft-in" style={dl(300)}>
            <h3 className="text-light mb-4 ft-h" style={dl(300)}><T k="footer.contactTitle" d="Contact" line /></h3>
            {[
              { icon: "fa fa-map-marker-alt", text: company.address },
              { icon: "fa fa-phone-alt", text: company.phone },
              { icon: "fab fa-whatsapp", text: "WhatsApp Us" },
              { icon: "fa fa-envelope", text: company.email },
            ].map((x) => (
              <p key={x.icon} className="mb-2 ft-contact"><i className={`${x.icon} text-primary me-3`}></i>{x.text}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid copyright ft-copy">
        <div className="container ft-in" style={dl(400)}>
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; {new Date().getFullYear()} <Link to="/">QMEP Electromechanical and Interior Works LLC</Link>. All Rights Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end"><T k="footer.location" d="Dubai, United Arab Emirates" line /></div>
          </div>
        </div>
      </div>
      </Reveal>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 300);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      <a href={company.whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        className="btn btn-lg btn-primary btn-lg-square back-to-top" style={{ display: "flex", bottom: show ? 90 : 30 }}>
        <i className="fab fa-whatsapp fs-4"></i>
      </a>
      {show && (
        <button className="btn btn-lg btn-dark btn-lg-square back-to-top" style={{ display: "flex" }} aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </>
  );
}

/** Pause looping CSS animations in sections that are far off screen, so only what the visitor sees
 *  is animating — keeps scrolling smooth. Uses the Web Animations API (no DOM attributes), so it
 *  never disturbs hydration; one-off entrance animations are left alone. */
function usePauseOffscreen() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || typeof document.getAnimations !== "function") return;
    const loops = (el: Element) => el.getAnimations({ subtree: true }).filter((an) => an.effect?.getComputedTiming().iterations === Infinity);
    const io = new IntersectionObserver((es) => {
      for (const e of es) for (const an of loops(e.target)) {
        if (e.isIntersecting) { if (an.playState === "paused") an.play(); } else if (an.playState === "running") an.pause();
      }
    }, { rootMargin: "60% 0px 60% 0px" });
    const seen = new WeakSet<Element>();
    const scan = () => document.querySelectorAll("section, .band, footer").forEach((el) => { if (!seen.has(el)) { seen.add(el); io.observe(el); } });
    const t1 = window.setTimeout(scan, 800);
    const t2 = window.setTimeout(scan, 2500);
    return () => { window.clearTimeout(t1); window.clearTimeout(t2); io.disconnect(); };
  }, [pathname]);
}

export function SiteLayout({ children }: { children: ReactNode }) {
  usePauseOffscreen();
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
}
