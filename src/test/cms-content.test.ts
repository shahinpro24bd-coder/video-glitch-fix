import { describe, expect, it } from "vitest";
import { savedFaqs, savedServices, savedTexts } from "@/lib/cms";

describe("saved site content", () => {
  it("ignores the old unedited FAQ copy so the current FAQs show", () => {
    expect(savedFaqs([{ q: "Do you provide emergency maintenance?", a: "x" }])).toBeNull();
  });
  it("keeps FAQs an admin has actually written", () => {
    const mine = [{ q: "Do you work in Abu Dhabi?", a: "Yes." }];
    expect(savedFaqs(mine)).toEqual(mine);
  });
  it("ignores the old unedited 2026 services copy so updated profile services show", () => {
    expect(savedServices([
      { slug: "electrical", title: "Electrical Services", summary: "old", items: [], cta: "old", image: "" },
      { slug: "plumbing", title: "Plumbing Services", summary: "old", items: [], cta: "old", image: "" },
    ])).toBeNull();
  });
  it("keeps services an admin has customized", () => {
    const custom = [{ slug: "electrical", title: "Custom Electrical Division", summary: "new", items: ["HV"], cta: "Call", image: "" }];
    expect(savedServices(custom)).toEqual(custom);
  });
  it("drops the old home About title but keeps other saved texts", () => {
    expect(savedTexts({ "home.about.title": "Your Trusted Partner For MEP Solutions", "faq.title": "Questions" })).toEqual({ "faq.title": "Questions" });
  });
});
