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
import interiorSiteAsset from "@/assets/project-yaba-arzaz-site.webp.asset.json";
const interior = interiorSiteAsset.url;

// Official company details from QMEP Pre-Qualification Document & Dubai DED Commercial License No. 597867.
export const company = {
  name: "QMEP Electromechanical and Interior Works LLC",
  legalName: "QMEP Electromechanical Works LLC",
  short: "QMEP",
  phone: "+971 4 229 7339",
  phoneHref: "tel:+97142297339",
  mobile: "+971 56 233 5339",
  mobileHref: "tel:+971562335339",
  fax: "+971 4 229 7449",
  whatsappHref: "https://wa.me/971562335339",
  email: "Ummarkoppans@gmail.com",
  address: "Office 101-519, Hor Al Anz, Deira, P.O. Box 66916, Dubai, UAE",
  hours: "Mon – Sat, 8:00 AM – 6:00 PM",
  established: "2007",
  licenseNo: "597867",
  registerNo: "1013054",
  dcciNo: "121391",
  dunsNo: "561759882",
};

export const licensedActivities = [
  "Electromechanical Equipment Installation and Maintenance",
  "Air-Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance",
  "Electrical Fittings & Fixtures Repairing & Maintenance",
  "Plumbing & Sanitary Installation",
  "False Ceiling & Light Partitions Installation",
  "Carpentry & Wood Flooring Works",
  "Painting Contracting",
  "Building Cleaning Services",
] as const;

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
    title: "HVAC & Mechanical Systems",
    icon: "fa-snowflake",
    image: hvac,
    summary: "Design, supply, installation, testing and commissioning of HVAC, chilled water, ventilation, smoke management and boiler systems.",
    items: [
      "MEP Design, 3D Modelling & BIM Coordination",
      "HVAC & Chilled Water Systems",
      "Ventilation & Air Distribution Networks",
      "Smoke Extraction & Stairwell Pressurisation",
      "Hot Water & Boiler Systems",
      "Testing, Adjusting & Commissioning (TAB)",
    ],
    cta: "Enquire About HVAC & Mechanical",
  },
  {
    slug: "electrical",
    title: "Electrical Systems",
    icon: "fa-bolt",
    image: electrical,
    summary: "Design, supply and installation of power distribution, lighting, emergency lighting, small power, earthing and lightning protection.",
    items: [
      "Power Distribution & Electrical Panels",
      "Lighting & Emergency Lighting Systems",
      "Central Battery Systems (CBS)",
      "Small Power & Cable Containment",
      "Earthing & Lightning Protection",
      "Authority Approvals, Testing & Commissioning",
    ],
    cta: "Enquire About Electrical Systems",
  },
  {
    slug: "plumbing",
    title: "Plumbing & Drainage Systems",
    icon: "fa-faucet",
    image: plumbing,
    summary: "Installation of domestic water supply, sanitary plumbing, soil and waste drainage, stormwater drainage, hot water and pumping systems.",
    items: [
      "Domestic Water Supply Systems",
      "Sanitary Plumbing & Installations",
      "Soil & Waste Drainage Systems",
      "Stormwater Drainage Networks",
      "Water Storage & Pumping Systems",
      "Hot Water Generation & Boiler Systems",
    ],
    cta: "Enquire About Plumbing & Drainage",
  },
  {
    slug: "fire-protection",
    title: "Fire & Life Safety Systems",
    icon: "fa-fire-extinguisher",
    image: fire,
    summary: "Design, supply, installation, testing and commissioning of integrated fire detection, alarm, emergency lighting and firefighting systems.",
    items: [
      "Addressable & Conventional Fire Alarm Systems",
      "Smoke & Heat Detectors, Call Points & Panels",
      "Emergency Lighting & Exit Signage",
      "Fire Pumps, Sprinklers & Wet Risers",
      "Hose Reels, Landing Valves & Hydrants",
      "Fire Extinguishers & Authority Clearances",
    ],
    cta: "Enquire About Fire & Life Safety",
  },
  {
    slug: "elv",
    title: "ELV, Security & Smart Building",
    icon: "fa-network-wired",
    image: elv,
    summary: "Integrated ELV, security, communication and smart building systems providing enhanced safety, connectivity and operational control.",
    items: [
      "IP-Based CCTV Surveillance Systems",
      "Electronic & Biometric Access Control",
      "Building Management Systems (BMS)",
      "Audio & Video Intercom Systems",
      "Gate Barrier & Vehicle Access Control",
      "Wi-Fi & Wireless Network Infrastructure",
    ],
    cta: "Enquire About ELV & Smart Systems",
  },
  {
    slug: "interior",
    title: "Interior Design & Fit-Out",
    icon: "fa-paint-roller",
    image: interior,
    summary: "End-to-end interior design and fit-out from concept, 3D visualization and BIM modelling to civil works, finishes, joinery and MEP integration.",
    items: [
      "Concept, Space Planning, 3D & BIM Modelling",
      "Civil & Architectural Fit-Out Works",
      "Gypsum Partitions & Decorative Ceilings",
      "Marble, Stone, Tile, Vinyl & Timber Flooring",
      "Wall Finishes, Panelling, Cladding & Painting",
      "Bespoke Joinery & Hospitality / Commercial Fit-Out",
    ],
    cta: "Enquire About Interior Fit-Out",
  },
];

export const whyUs = [
  { icon: "fa-award", title: "Quality Excellence", text: "Maintaining high standards of workmanship, technical compliance and quality assurance at every stage." },
  { icon: "fa-stopwatch", title: "Speed & Efficiency", text: "Optimizing resources, streamlining processes and adopting proactive execution for timely completion." },
  { icon: "fa-history", title: "Nearly 20 Years in UAE", text: "Established in 2007 in Dubai (DED License No. 597867), delivering turnkey MEP and interior solutions." },
  { icon: "fa-handshake", title: "Client Satisfaction", text: "Tailored engineering solutions, accountability, lasting relationships and dependable after-sales support." },
  { icon: "fa-drafting-compass", title: "Technical Excellence", text: "Experienced engineers, 3D/BIM coordination, skilled workforce and modern construction practices." },
  { icon: "fa-hard-hat", title: "HSE & Sustainability", text: "Committed to zero harm, safe workplaces, UAE regulatory compliance and environmental responsibility." },
  { icon: "fa-chart-line", title: "Continuous Improvement", text: "Building a culture of accountability, teamwork, innovation and operational excellence." },
];

export const processSteps = [
  { title: "Design, BIM & Approvals", text: "Concept design, detailed engineering, 3D modelling, BIM coordination and securing authority design approvals." },
  { title: "Procurement & Supply", text: "Sourcing, technical evaluation, procurement and supply of approved MEP equipment, materials and accessories." },
  { title: "Installation & Fit-Out", text: "Coordinated execution of MEP, fire & life safety, ELV and interior fit-out works under strict QA/QC and HSE controls." },
  { title: "Testing, TAB & Handover", text: "Testing, adjusting and balancing, snagging, defect rectification, authority inspections and final project handover." },
  { title: "DLP, O&M & AMC Support", text: "Defects Liability Period support, preventive and corrective O&M, and tailored Annual Maintenance Contracts." },
];

export const faqs = [
  { q: "What services does QMEP provide?", a: "QMEP Electromechanical and Interior Works LLC delivers turnkey MEP services (HVAC, electrical, plumbing, drainage, smoke management, hot water & boilers), Fire & Life Safety systems, ELV, Security & BMS systems, Interior Design & Fit-Out works, plus DLP, O&M and Annual Maintenance Contracts (AMC)." },
  { q: "When was QMEP established and where are you licensed?", a: "QMEP was established in 2007 in Dubai, UAE (Dubai Department of Economy and Tourism License No. 597867, Commercial Register No. 1013054, Dubai Chamber Membership No. 121391), bringing nearly 20 years of industry experience." },
  { q: "Which project sectors do you serve?", a: "We deliver MEP and interior fit-out solutions across healthcare, cultural heritage, residential developments, commercial and retail spaces, hospitality and restaurants, and industrial developments across the UAE." },
  { q: "Does QMEP cover the full project lifecycle?", a: "Yes. We cover concept design, 3D/BIM coordination and authority approvals through procurement, installation, testing, adjusting and commissioning (TAB), snagging, authority inspections, handover, DLP, O&M and AMC." },
  { q: "How do you manage Quality, HSE and Sustainability?", a: "QMEP operates under formal Quality, HSE and Sustainability Policies led by management, with dedicated QA/QC Engineers and HSE Officers ensuring UAE regulatory compliance, defect prevention, zero-harm workplaces and sustainable construction practices." },
  { q: "Which areas of the UAE do you operate in?", a: "Headquartered in Deira, Dubai (Office 101-519, Hor Al Anz), we execute MEP and interior fit-out projects across Dubai, Abu Dhabi and the wider UAE." },
  { q: "How can I request a quotation or pre-qualification proposal?", a: "Submit your project requirements via our website quotation form, call our Dubai office on +971 4 229 7339, or reach us on WhatsApp at +971 56 233 5339." },
];
