import hvacAsset from "@/assets/service-hvac.webp.asset.json";
const hvac = hvacAsset.url;
import electricalAsset from "@/assets/service-electrical.webp.asset.json";
const electrical = electricalAsset.url;
import plumbingAsset from "@/assets/service-plumbing.webp.asset.json";
const plumbing = plumbingAsset.url;
import fireAsset from "@/assets/service-fire.webp.asset.json";
const fire = fireAsset.url;
import elvAsset from "@/assets/service-elv.webp.asset.json";
const elv = elvAsset.url;
import interiorAsset from "@/assets/service-interior.webp.asset.json";
const interior = interiorAsset.url;

// Contact details are placeholders until QMEP confirms official values.
export const company = {
  name: "QMEP Electromechanical and Interior Works LLC",
  short: "QMEP",
  phone: "+971 56 547 7186",
  phoneHref: "tel:+971565477186",
  whatsappHref: "https://wa.me/971565477186",
  email: "info@qmep.ae",
  address: "Dubai, United Arab Emirates",
  hours: "Mon – Sat, 8:00 AM – 6:00 PM",
};

export type Service = {
  slug: string;
  title: string;
  icon: string;
  image: string;
  summary: string;
  items: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "mechanical",
    title: "Mechanical Works",
    icon: "fa-snowflake",
    image: hvac,
    summary: "HVAC systems, ventilation, air conditioning, chilled water systems, equipment installation and mechanical services.",
    items: [
      "HVAC systems",
      "Ventilation systems",
      "Air conditioning",
      "Chilled water systems",
      "Equipment installation",
      "Mechanical services",
    ],
    cta: "Enquire About Mechanical Works",
  },
  {
    slug: "electrical",
    title: "Electrical Works",
    icon: "fa-bolt",
    image: electrical,
    summary: "Power distribution, lighting systems, electrical installations, containment, wiring and testing.",
    items: [
      "Power distribution",
      "Lighting systems",
      "Electrical installations",
      "Containment",
      "Wiring",
      "Testing",
    ],
    cta: "Enquire About Electrical Works",
  },
  {
    slug: "plumbing",
    title: "Plumbing & Drainage",
    icon: "fa-faucet",
    image: plumbing,
    summary: "Water supply, drainage, sanitary installations, pumps, piping networks and associated systems.",
    items: [
      "Water supply",
      "Drainage",
      "Sanitary installations",
      "Pumps",
      "Piping networks",
      "Associated systems",
    ],
    cta: "Enquire About Plumbing & Drainage",
  },
  {
    slug: "fire-protection",
    title: "Fire Protection & Life Safety",
    icon: "fa-fire-extinguisher",
    image: fire,
    summary: "Firefighting systems, fire suppression, fire pumps and associated installations.",
    items: [
      "Firefighting systems",
      "Fire suppression",
      "Fire pumps",
      "Associated installations",
    ],
    cta: "Enquire About Fire Protection",
  },
  {
    slug: "elv",
    title: "ELV Systems",
    icon: "fa-network-wired",
    image: elv,
    summary: "Structured cabling, CCTV, access control, communication and other low-current systems.",
    items: [
      "Structured cabling",
      "CCTV",
      "Access control",
      "Communication systems",
      "Other low-current systems",
    ],
    cta: "Enquire About ELV Systems",
  },
  {
    slug: "interior",
    title: "Interior Works",
    icon: "fa-paint-roller",
    image: interior,
    summary: "Interior fit-out, architectural finishes, ceiling systems, partitions and associated building works.",
    items: [
      "Interior fit-out",
      "Architectural finishes",
      "Ceiling systems",
      "Partitions",
      "Associated building works",
    ],
    cta: "Enquire About Interior Works",
  },
];

export const whyUs = [
  { icon: "fa-history", title: "Established Experience", text: "Operating since 2007, with a proven history of MEP project execution." },
  { icon: "fa-drafting-compass", title: "Technical Expertise", text: "Engineering knowledge and practical experience across building services." },
  { icon: "fa-award", title: "Quality Commitment", text: "Stringent quality assurance and control at every stage of execution." },
  { icon: "fa-stopwatch", title: "Efficient Delivery", text: "Focused project management, resource optimization and timely completion." },
  { icon: "fa-cogs", title: "Integrated Solutions", text: "Comprehensive mechanical, electrical, plumbing and interior works." },
  { icon: "fa-handshake", title: "Client Partnership", text: "Transparent communication, coordination and a commitment to client satisfaction." },
  { icon: "fa-hard-hat", title: "Safety & Compliance", text: "Commitment to applicable UAE regulations, project specifications and HSE requirements." },
];

export const processSteps = [
  { title: "Engineering Coordination", text: "We review project requirements and specifications and coordinate with all project stakeholders from the start." },
  { title: "Material Selection", text: "Materials and equipment are selected to meet project specifications, applicable standards and quality requirements." },
  { title: "Installation", text: "Skilled teams carry out the works under professional project management and rigorous quality control." },
  { title: "Testing & Commissioning", text: "Systems are tested and commissioned to confirm workmanship, compliance and performance." },
  { title: "Handover", text: "The completed works are handed over on time, with transparent communication throughout the project." },
];

export const faqs = [
  { q: "What services does QMEP provide?", a: "We provide integrated MEP and interior solutions: mechanical works, electrical works, plumbing and drainage, fire protection and life safety, ELV systems and interior works." },
  { q: "How long has QMEP been operating?", a: "QMEP was established in 2007 and has built its reputation through the successful execution of mechanical, electrical and plumbing projects across the UAE." },
  { q: "Who do you work with?", a: "We work with developers, main contractors, consultants and project owners on residential and commercial developments and building infrastructure projects." },
  { q: "Which project stages do you support?", a: "We support construction projects from initial coordination through installation, testing, commissioning and handover." },
  { q: "How do you ensure quality and safety?", a: "Quality is part of every stage of project delivery. We apply stringent quality assurance and control, and follow applicable UAE regulations, project specifications and HSE requirements." },
  { q: "Which areas do you serve?", a: "We execute MEP projects across the UAE. Contact us to discuss your project location and requirements." },
  { q: "How can I request a quotation?", a: "Send us your project requirements through the website form, phone or WhatsApp. Our team will review the details and get back to you." },
];
