// Unique content for each service detail page (keyed by service slug).
export type ServiceDetail = {
  intro: string;
  stats: { value: string; label: string }[];
  signsTitle: string;
  signs: string[];
  benefits: { icon: string; title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  mechanical: {
    intro: "Our mechanical teams deliver HVAC, ventilation and chilled water works for construction and development projects, combining engineering knowledge with efficient execution and rigorous quality control.",
    stats: [{ value: "2007", label: "established" }, { value: "HVAC", label: "& chilled water" }, { value: "Full", label: "install to handover" }],
    signsTitle: "What Our Mechanical Scope Covers",
    signs: ["HVAC system installation", "Ventilation and air distribution", "Air conditioning systems", "Chilled water piping and systems", "Mechanical equipment installation", "Testing and commissioning"],
    benefits: [
      { icon: "fa-drafting-compass", title: "Engineering Coordination", text: "Works coordinated with project drawings and specifications." },
      { icon: "fa-award", title: "Quality Workmanship", text: "Quality assurance and control at every stage." },
      { icon: "fa-stopwatch", title: "Timely Execution", text: "Focused project management and timely completion." },
    ],
    faqs: [
      { q: "What mechanical works do you deliver?", a: "HVAC systems, ventilation, air conditioning, chilled water systems, equipment installation and associated mechanical services." },
      { q: "Do you handle testing and commissioning?", a: "Yes. We support projects through installation, testing, commissioning and handover." },
      { q: "Which projects do you work on?", a: "Residential and commercial developments and building infrastructure projects across the UAE." },
    ],
  },
  electrical: {
    intro: "From power distribution to lighting and containment, our electrical teams deliver safe, compliant installations that meet project specifications and applicable UAE regulations.",
    stats: [{ value: "Power", label: "distribution" }, { value: "Lighting", label: "systems" }, { value: "Tested", label: "before handover" }],
    signsTitle: "What Our Electrical Scope Covers",
    signs: ["Power distribution", "Lighting systems", "Electrical installations", "Cable containment", "Wiring", "Testing"],
    benefits: [
      { icon: "fa-shield-alt", title: "Safety & Compliance", text: "Works aligned with UAE regulations and HSE requirements." },
      { icon: "fa-clipboard-check", title: "Rigorous Testing", text: "Installations tested to confirm safe performance." },
      { icon: "fa-handshake", title: "Clear Coordination", text: "Transparent communication with the project team." },
    ],
    faqs: [
      { q: "What electrical works do you deliver?", a: "Power distribution, lighting systems, electrical installations, containment, wiring and testing." },
      { q: "Do your works follow UAE regulations?", a: "Yes. We are committed to applicable UAE regulations, project specifications and HSE requirements." },
      { q: "Can you coordinate with other MEP trades?", a: "Yes. We deliver integrated MEP solutions, so electrical works are coordinated with mechanical, plumbing and other building services." },
    ],
  },
  plumbing: {
    intro: "We install water supply, drainage and sanitary systems that perform reliably for the life of the building, with careful coordination and quality control at every stage.",
    stats: [{ value: "Water", label: "supply" }, { value: "Drainage", label: "& sanitary" }, { value: "Pumps", label: "& piping" }],
    signsTitle: "What Our Plumbing Scope Covers",
    signs: ["Water supply systems", "Drainage systems", "Sanitary installations", "Pumps", "Piping networks", "Associated systems"],
    benefits: [
      { icon: "fa-tint", title: "Reliable Systems", text: "Water supply and drainage built to project specifications." },
      { icon: "fa-award", title: "Quality Workmanship", text: "Disciplined installation and inspection at every stage." },
      { icon: "fa-stopwatch", title: "Timely Completion", text: "Resources planned to meet the project schedule." },
    ],
    faqs: [
      { q: "What plumbing and drainage works do you deliver?", a: "Water supply, drainage, sanitary installations, pumps, piping networks and associated systems." },
      { q: "Do you work on residential and commercial projects?", a: "Yes. We work on residential and commercial developments as well as building infrastructure projects." },
      { q: "Do you test systems before handover?", a: "Yes. Systems are tested and commissioned before handover." },
    ],
  },
  "fire-protection": {
    intro: "Fire protection and life safety systems protect people and property. We install firefighting and fire suppression systems in line with project specifications and applicable UAE regulations.",
    stats: [{ value: "Fire", label: "fighting systems" }, { value: "Pumps", label: "& suppression" }, { value: "HSE", label: "focused" }],
    signsTitle: "What Our Fire Protection Scope Covers",
    signs: ["Firefighting systems", "Fire suppression systems", "Fire pumps", "Associated piping and installations", "Coordination with other MEP services", "Testing and commissioning"],
    benefits: [
      { icon: "fa-shield-alt", title: "Life Safety", text: "Systems installed to protect people and property." },
      { icon: "fa-clipboard-check", title: "Compliance", text: "Works aligned with UAE regulations and specifications." },
      { icon: "fa-cogs", title: "Integrated Delivery", text: "Coordinated with the full MEP scope." },
    ],
    faqs: [
      { q: "What fire protection works do you deliver?", a: "Firefighting systems, fire suppression, fire pumps and associated installations." },
      { q: "Are your installations compliant?", a: "We are committed to applicable UAE regulations, project specifications and HSE requirements." },
      { q: "Can fire protection be part of a full MEP package?", a: "Yes. We deliver integrated MEP solutions that include fire protection and life safety works." },
    ],
  },
  elv: {
    intro: "Modern buildings depend on reliable low-current systems. We deliver structured cabling, CCTV, access control and communication systems as part of an integrated MEP scope.",
    stats: [{ value: "Data", label: "structured cabling" }, { value: "CCTV", label: "& access control" }, { value: "Low", label: "current systems" }],
    signsTitle: "What Our ELV Scope Covers",
    signs: ["Structured cabling", "CCTV systems", "Access control", "Communication systems", "Other low-current systems", "Testing and handover"],
    benefits: [
      { icon: "fa-network-wired", title: "Neat Installation", text: "Organised cabling that is easy to maintain." },
      { icon: "fa-video", title: "Security Systems", text: "CCTV and access control for safer buildings." },
      { icon: "fa-cogs", title: "Integrated Delivery", text: "Coordinated with electrical and other MEP works." },
    ],
    faqs: [
      { q: "What ELV systems do you deliver?", a: "Structured cabling, CCTV, access control, communication and other low-current systems." },
      { q: "Can ELV works be coordinated with electrical works?", a: "Yes. ELV systems are delivered as part of our integrated MEP solutions." },
      { q: "Which projects do you support?", a: "Residential and commercial developments and building infrastructure projects across the UAE." },
    ],
  },
  interior: {
    intro: "Alongside our MEP works, we deliver interior fit-out, architectural finishes, ceiling systems and partitions, so building services and interiors are coordinated by one team.",
    stats: [{ value: "Fit-Out", label: "interior works" }, { value: "Ceilings", label: "& partitions" }, { value: "One", label: "coordinated team" }],
    signsTitle: "What Our Interior Scope Covers",
    signs: ["Interior fit-out", "Architectural finishes", "Ceiling systems", "Partitions", "Associated building works", "Coordination with MEP services"],
    benefits: [
      { icon: "fa-paint-roller", title: "Quality Finishes", text: "Attention to detail in every finish." },
      { icon: "fa-cogs", title: "MEP Coordination", text: "Interiors and building services delivered together." },
      { icon: "fa-stopwatch", title: "Timely Handover", text: "Efficient execution to meet the project schedule." },
    ],
    faqs: [
      { q: "What interior works do you deliver?", a: "Interior fit-out, architectural finishes, ceiling systems, partitions and associated building works." },
      { q: "Can you deliver interiors and MEP together?", a: "Yes. We provide integrated MEP and interior solutions, coordinated by one team." },
      { q: "Do you work with main contractors?", a: "Yes. We work with developers, main contractors, consultants and project owners." },
    ],
  },
};
