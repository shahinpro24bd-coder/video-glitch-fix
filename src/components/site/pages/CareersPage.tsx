import { useRef, useState, type FormEvent } from "react";
import hero2Asset from "@/assets/hero-2.webp.asset.json";
import { company } from "@/lib/site";
import { PageHeader, SectionTitle } from "@/components/site/Layout";
import { ContactLine } from "@/components/site/Sections";
import { Reveal, Words, dl } from "@/components/site/Reveal";
import { T } from "@/lib/editable";

const pillars = [
  { icon: "fa-drafting-compass", title: "Engineering Standards", text: "Work on residential, commercial and infrastructure projects delivered to UAE codes and specifications." },
  { icon: "fa-hard-hat", title: "Safety-First Culture", text: "Structured HSE practices, clear supervision and well-coordinated job sites across every trade." },
  { icon: "fa-chart-line", title: "Career Growth", text: "Hands-on progression alongside experienced project managers, engineers and site supervisors." },
];

const openings = [
  { title: "HVAC Site Engineer", dept: "Mechanical Works", type: "Full-Time", location: "Dubai, UAE", summary: "Supervise HVAC and chilled-water installations, coordinate site teams and oversee testing and commissioning." },
  { title: "Electrical Estimation Engineer", dept: "Electrical Works", type: "Full-Time", location: "Dubai, UAE", summary: "Prepare accurate MEP material take-offs, supplier comparisons and tender submissions for UAE projects." },
  { title: "Plumbing & Fire Fighting Foreman", dept: "Plumbing & Life Safety", type: "Full-Time", location: "Dubai, UAE", summary: "Lead on-site water supply, drainage and firefighting installation crews to schedule and quality standards." },
  { title: "MEP QA/QC Engineer", dept: "Quality & Compliance", type: "Full-Time", location: "Dubai, UAE", summary: "Manage inspections, method statements, authority approvals and handover documentation across active sites." },
];

const hrLines = [
  { k: "careers.l1", icon: "fa-envelope-open", label: "Send Your CV", value: company.email, href: `mailto:${company.email}?subject=Career%20Application%20-%20QMEP` },
  { k: "careers.l2", icon: "fa-phone-alt", label: "HR & Office", value: company.phone, href: company.phoneHref },
  { k: "careers.l3", icon: "fa-whatsapp", brand: true, label: "WhatsApp", value: "Message Our Team", href: company.whatsappHref },
  { k: "careers.l4", icon: "fa-map-marker-alt", label: "Work Location", value: company.address },
];

export function CareersPage() {
  const [selectedRole, setSelectedRole] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const pickRole = (role: string) => {
    setSelectedRole(role);
    setSent(false);
    setErr("");
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const name = v("name");
    const email = v("email");
    const phone = v("phone");
    const location = v("location");
    const role = v("role");
    const expRaw = v("experience");
    const details = v("details");

    if (!name || !phone || !location || !role || !details) {
      setErr("Please fill in all required fields.");
      return;
    }
    if (expRaw !== "") {
      const yrs = Number(expRaw);
      if (!Number.isFinite(yrs) || yrs < 0 || yrs > 50) {
        setErr("Please enter valid years of experience (0 to 50).");
        return;
      }
    }

    setBusy(true);
    setErr("");
    const { supabase } = await import("@/lib/supabase");
    const { error } = await supabase.from("quote_requests").insert({
      name,
      company: expRaw ? `${expRaw} yrs experience` : "Career Applicant",
      phone,
      email: email || null,
      location,
      service: `Career — ${role}`,
      property_type: "Career Application",
      details,
    });
    setBusy(false);
    if (error) setErr("Sorry, we couldn't submit your application. Please try again or email your CV directly.");
    else setSent(true);
  };

  const h = { height: 55 };

  return (
    <>
      <PageHeader k="careers" title="Careers" crumb="Careers" image={hero2Asset.url} />

      <Reveal as="div" className="band py-5 crx">
        <span className="ab-gridbg" aria-hidden="true" />
        <div className="container position-relative">
          <SectionTitle k="careers.intro" kicker="Join Our Team" title="Build Your Career With QMEP" />
          <p className="text-center mx-auto mb-5 rx-up" style={dl(300, { maxWidth: 780 })}>
            <T k="careers.intro.text" d="Since 2007, QMEP has delivered mechanical, electrical, plumbing, fire protection, ELV and interior works across the UAE. We welcome skilled engineers, technicians and project professionals who take pride in quality execution." />
          </p>
          <div className="row g-4">
            {pillars.map((p, i) => (
              <div key={p.title} className="col-lg-4">
                <div className="rx-up h-100" style={dl(350 + i * 120)}>
                  <div className="crx-pillar h-100">
                    <span className="crx-pillar-icon"><i className={`fa ${p.icon}`}></i></span>
                    <h3 className="mb-2"><T k={`careers.pillar.${i}.title`} d={p.title} line /></h3>
                    <p className="mb-0"><T k={`careers.pillar.${i}.text`} d={p.text} /></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="div" className="band py-5 bg-light crx-roles">
        <div className="container">
          <SectionTitle k="careers.openings" kicker="Current Openings" title="Explore Open Positions" />
          <div className="row g-4">
            {openings.map((job, i) => (
              <div key={job.title} className="col-lg-6">
                <div className="rx-up h-100" style={dl(200 + i * 100)}>
                  <article className="crx-job h-100">
                    <div className="crx-job-meta">
                      <span><i className="fa fa-layer-group me-1"></i><T k={`careers.job.${i}.dept`} d={job.dept} line /></span>
                      <span><i className="fa fa-briefcase me-1"></i><T k={`careers.job.${i}.type`} d={job.type} line /></span>
                      <span><i className="fa fa-map-marker-alt me-1"></i><T k={`careers.job.${i}.location`} d={job.location} line /></span>
                    </div>
                    <h3 className="crx-job-title"><T k={`careers.job.${i}.title`} d={job.title} line /></h3>
                    <p className="crx-job-summary"><T k={`careers.job.${i}.summary`} d={job.summary} /></p>
                    <button type="button" className="btn btn-primary px-4 py-2 crx-apply-btn" onClick={() => pickRole(job.title)}>
                      <T k={`careers.job.${i}.btn`} d="Apply Now" line /> <i className="fa fa-arrow-right ms-2"></i>
                    </button>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="div" className="band py-5 ctx">
        <div ref={formRef} id="apply" className="container position-relative crx-apply">
          <div className="row g-5">
            <div className="col-lg-5">
              <h4 className="section-title rx-left" style={dl(0)}><T k="careers.apply.kicker" d="Apply Now" line /></h4>
              <h2 className="display-5 mb-4"><Words k="careers.apply.title" d="Start Your Application" /></h2>
              <p className="mb-4 rx-up" style={dl(300)}>
                <T k="careers.apply.lead" d="Submit your details using the form, or email your CV directly to our recruitment team. Even if your exact role is not listed above, we review general applications from qualified MEP professionals." />
              </p>
              <div className="row g-4">
                {hrLines.map((l, n) => (
                  <div key={l.k} className="col-12 rx-left" style={dl(380 + n * 90)}>
                    <ContactLine bare k={l.k} icon={l.icon} brand={l.brand} label={l.label} value={l.value} href={l.href} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="rx-zoom" style={dl(250)}>
                {sent ? (
                  <div className="qt-form qt-thanks text-center h-100 d-flex flex-column justify-content-center">
                    <i className="fa fa-check-circle fa-4x text-primary mb-4"></i>
                    <h3><T k="careers.form.thanksTitle" d="Application Received!" line /></h3>
                    <p className="mb-3"><T k="careers.form.thanksText" d="Thank you for your interest in joining QMEP. Our team will review your profile and get in touch if your experience matches an opening." /></p>
                    <div>
                      <button type="button" className="btn btn-outline-primary px-4" onClick={() => setSent(false)}>Submit Another Application</button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={submit} className="qt-form row g-3 mx-0">
                    <div className="col-12 qt-form-head">
                      <span className="qt-form-tag"><T k="careers.form.tag" d="Candidate Profile" line /></span>
                      <h3 className="mb-1"><T k="careers.form.title" d="Tell Us About Your Experience" /></h3>
                      <p className="mb-0"><T k="careers.form.note" d="Fill in your details below and include a link to your CV or portfolio if available." /></p>
                    </div>
                    <div className="col-12 col-sm-6"><input name="name" required maxLength={120} className="form-control" placeholder="Full Name" style={h} /></div>
                    <div className="col-12 col-sm-6"><input name="email" required maxLength={200} type="email" className="form-control" placeholder="Email Address" style={h} /></div>
                    <div className="col-12 col-sm-6"><input name="phone" required maxLength={40} type="tel" className="form-control" placeholder="Phone Number" style={h} /></div>
                    <div className="col-12 col-sm-6"><input name="location" required maxLength={120} className="form-control" placeholder="Current Location" style={h} /></div>
                    <div className="col-12 col-sm-7">
                      <select name="role" required className="form-select" style={h} value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                        <option value="" disabled>Position Applying For</option>
                        {openings.map((job) => <option key={job.title} value={job.title}>{job.title}</option>)}
                        <option value="General Application">General Application</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-5">
                      <input name="experience" type="number" min={0} max={50} step={1} className="form-control" placeholder="Years of Experience" style={h} />
                    </div>
                    <div className="col-12">
                      <textarea name="details" required maxLength={3000} className="form-control" rows={5} placeholder="Brief summary of your MEP experience, key projects, and CV / LinkedIn link"></textarea>
                    </div>
                    {err && <div className="col-12 text-danger">{err}</div>}
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit" disabled={busy}>
                        {busy ? "Submitting…" : <T k="careers.form.button" d="Submit Application" line />}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}