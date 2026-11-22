import { company, services, faqs } from "@/lib/site";
import { setPageTexts } from "@/lib/editable";

export type CmsCompany = typeof company;
export type CmsService = { slug: string; title: string; summary: string; items: string[]; cta: string; image: string };
export type CmsFaq = { q: string; a: string };
export type SiteContent = { company?: Partial<CmsCompany>; services?: CmsService[]; faqs?: CmsFaq[]; texts?: Record<string, string> };

// Snapshot of the bundled content: used as fallback and as the admin's starting point.
export const defaults = {
  company: { ...company },
  services: services.map((s) => ({ slug: s.slug, title: s.title, summary: s.summary, items: [...s.items], cta: s.cta, image: s.image })),
  faqs: faqs.map((f) => ({ ...f })),
};

// The backend still holds an unedited copy of the old built-in text; skip it so the current site text shows.
const staleFaqQs = new Set([
  "What services does QMEP Electromechanical LLC provide?",
  "Do you provide residential and commercial maintenance?",
  "Can I request an Annual Maintenance Contract?",
  "How can I receive a quotation?",
  "Do you handle HVAC installation and maintenance?",
  "Which areas do you serve?",
  "Do you provide emergency maintenance?",
]);
const staleTexts: Record<string, string> = { "home.about.title": "Your Trusted Partner For MEP Solutions" };

/** Saved FAQs, or null when nothing was saved or the saved list is the old built-in copy. */
export function savedFaqs(v: unknown): CmsFaq[] | null {
  if (!Array.isArray(v) || !v.length) return null;
  const list = v as CmsFaq[];
  return list.every((f) => staleFaqQs.has(f.q)) ? null : list;
}

/** Saved page texts without entries that still hold the old built-in wording. */
export function savedTexts(v: unknown): Record<string, string> {
  const out: Record<string, string> = { ...((v ?? {}) as Record<string, string>) };
  for (const [k, old] of Object.entries(staleTexts)) if (out[k] === old) delete out[k];
  return out;
}

// Merges saved content into the shared site data in place, so every page picks it up.
export function applyContent(c: SiteContent | null | undefined) {
  Object.assign(company, defaults.company, c?.company ?? {});
  for (const s of services) {
    const base = defaults.services.find((d) => d.slug === s.slug)!;
    const saved = c?.services?.find((d) => d.slug === s.slug);
    Object.assign(s, base, saved ? { ...saved, image: saved.image && !saved.image.startsWith("/assets/") ? saved.image : base.image, items: saved.items?.length ? saved.items : base.items } : {});
  }
  faqs.splice(0, faqs.length, ...(savedFaqs(c?.faqs) ?? defaults.faqs));
  setPageTexts(savedTexts(c?.texts));
}

export const ADMIN_EMAIL = "admin@qmep-app.com";
export const usernameToEmail = (u: string) => (u.includes("@") ? u.trim() : `${u.trim().toLowerCase()}@qmep-app.com`);
