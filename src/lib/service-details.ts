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
    intro: "From concept design, 3D modelling and BIM coordination through procurement, installation, testing, adjusting and commissioning (TAB), our mechanical teams deliver technically compliant, energy-efficient HVAC, ventilation, smoke management and hot water systems across the UAE.",
    stats: [{ value: "2007", label: "established" }, { value: "BIM", label: "3D coordination" }, { value: "TAB", label: "tested & balanced" }],
    signsTitle: "What Our Mechanical Scope Covers",
    signs: ["Concept design, detailed engineering, 3D modelling & BIM coordination", "HVAC, chilled water systems, ventilation & air distribution networks", "Smoke extraction, stairwell pressurisation & mechanical smoke control", "Hot water generation, storage, distribution & boiler systems", "Procurement & supply of approved mechanical equipment and materials", "Testing, adjusting & commissioning (TAB), authority inspections & handover"],
    benefits: [
      { icon: "fa-drafting-compass", title: "BIM & Authority Compliance", text: "Technical submissions, 3D coordination and statutory approvals." },
      { icon: "fa-award", title: "Quality Assurance", text: "Strict QA/QC inspections, snagging closure and performance verification." },
      { icon: "fa-stopwatch", title: "Speed & Efficiency", text: "Proactive execution aligned with project timelines and budgets." },
    ],
    faqs: [
      { q: "What HVAC and mechanical systems do you deliver?", a: "We design, supply and install HVAC and air conditioning systems, chilled water networks, ventilation and air distribution, smoke management and stairwell pressurisation, plus hot water and boiler systems." },
      { q: "Do you handle BIM coordination, authority approvals and TAB?", a: "Yes. Our scope covers 3D/BIM coordination, authority documentation and approvals, testing, adjusting and commissioning (TAB), snagging, handover and DLP/O&M support." },
      { q: "Which developments do you serve?", a: "Residential, commercial, hospitality, healthcare, cultural heritage and industrial projects across the UAE." },
    ],
  },
  electrical: {
    intro: "We design, supply, install, test and commission safe, compliant electrical infrastructure — covering power distribution, lighting, emergency lighting, central battery systems (CBS), small power, earthing and lightning protection in line with UAE authority regulations.",
    stats: [{ value: "LV", label: "power distribution" }, { value: "CBS", label: "& emergency lighting" }, { value: "UAE", label: "authority compliant" }],
    signsTitle: "What Our Electrical Scope Covers",
    signs: ["Main & sub-main LV power distribution and electrical panels", "Interior, exterior and emergency lighting systems", "Central Battery Systems (CBS) and backup power", "Small power, wiring and cable containment networks", "Earthing and lightning protection systems", "Authority approvals, testing, commissioning & DLP support"],
    benefits: [
      { icon: "fa-shield-alt", title: "Regulatory Compliance", text: "Full technical documentation, authority approvals and HSE adherence." },
      { icon: "fa-clipboard-check", title: "Testing & Verification", text: "Complete inspection, DB testing and commissioning prior to handover." },
      { icon: "fa-cogs", title: "Turnkey Integration", text: "Coordinated across mechanical, fire safety, ELV and fit-out works." },
    ],
    faqs: [
      { q: "What electrical works do you deliver?", a: "Power distribution, lighting, emergency lighting, Central Battery Systems (CBS), small power, cable containment, earthing, lightning protection and associated electrical infrastructure." },
      { q: "Do you handle authority inspections and clearances?", a: "Yes. We prepare technical submissions, coordinate statutory authority inspections and secure required clearances for final handover." },
      { q: "Can electrical works be delivered as part of a full MEP package?", a: "Yes. We execute turnkey MEP packages coordinating electrical works with HVAC, plumbing, fire & life safety, ELV and interior fit-out." },
    ],
  },
  plumbing: {
    intro: "We engineer and install complete domestic water supply, hot water and boiler systems, sanitary plumbing, soil and waste drainage, stormwater networks and pumping installations built for long-term reliability and regulatory compliance.",
    stats: [{ value: "Water", label: "& hot water supply" }, { value: "Drainage", label: "soil, waste & storm" }, { value: "Pumps", label: "& boiler systems" }],
    signsTitle: "What Our Plumbing & Drainage Scope Covers",
    signs: ["Domestic cold & hot water supply and distribution", "Hot water generation, storage tanks & boiler systems", "Sanitary plumbing fixtures and installations", "Soil and waste drainage piping networks", "Stormwater drainage and associated pumping systems", "Pressure testing, commissioning, handover & O&M"],
    benefits: [
      { icon: "fa-tint", title: "Engineered Reliability", text: "Water supply, drainage and pumping systems built to specification." },
      { icon: "fa-award", title: "Quality Workmanship", text: "Proactive QA/QC checks to prevent defects and rework." },
      { icon: "fa-stopwatch", title: "On-Time Handover", text: "Coordinated installation, snagging closure and authority clearances." },
    ],
    faqs: [
      { q: "What plumbing and drainage works do you deliver?", a: "Domestic water supply, sanitary plumbing, soil and waste drainage, stormwater drainage, water storage, pumping systems and hot water & boiler systems." },
      { q: "Do you handle residential villas, towers and healthcare projects?", a: "Yes. Our portfolio includes Dubai Hospital Oncology Center, Dubai Heritage Village, 15 Villas in Al Lehbab, G+9 Residential Building in Al Warqa and F&B fit-outs." },
      { q: "Do you support post-handover maintenance?", a: "Yes. We provide Defects Liability Period (DLP) support, Operation & Maintenance (O&M) and Annual Maintenance Contracts (AMC)." },
    ],
  },
  "fire-protection": {
    intro: "We design, supply, install, test and commission integrated fire detection, alarm, emergency lighting and firefighting systems, ensuring full compliance with applicable UAE fire and life safety regulations and authority requirements.",
    stats: [{ value: "Alarm", label: "addressable & conv." }, { value: "Fire", label: "pumps & sprinklers" }, { value: "Life", label: "safety & evacuation" }],
    signsTitle: "What Our Fire & Life Safety Scope Covers",
    signs: ["Addressable and conventional fire detection & alarm systems", "Smoke and heat detectors, manual call points, sounders & control panels", "Emergency lighting, exit signage and backup evacuation lighting", "Fire pumps, sprinkler networks, wet risers & landing valves", "Hose reels, fire hydrants, extinguishers & piping networks", "Smoke extraction, stairwell pressurisation & authority clearances"],
    benefits: [
      { icon: "fa-shield-alt", title: "Life Safety Assurance", text: "Integrated detection, evacuation lighting and firefighting protection." },
      { icon: "fa-clipboard-check", title: "Authority Compliance", text: "Executed strictly to UAE fire codes, specs and authority approvals." },
      { icon: "fa-cogs", title: "Integrated MEP Delivery", text: "Coordinated with smoke management, BMS and electrical interfaces." },
    ],
    faqs: [
      { q: "What fire and life safety systems do you deliver?", a: "Addressable and conventional fire alarm systems, smoke/heat detectors, emergency lighting and exit signage, fire pumps, sprinklers, hose reels, landing valves, fire hydrants and extinguishers." },
      { q: "Do you integrate smoke management with fire safety?", a: "Yes. We design, install and integrate smoke extraction, stairwell pressurisation and mechanical smoke control systems." },
      { q: "Do you handle testing, commissioning and authority inspections?", a: "Yes. We manage full system testing, commissioning, statutory inspections and clearances for final project handover." },
    ],
  },
  elv: {
    intro: "We design, supply, install, integrate, test and commission Extra-Low Voltage (ELV), security, communication and smart building systems that deliver enhanced safety, connectivity, centralized monitoring and operational efficiency.",
    stats: [{ value: "CCTV", label: "& access control" }, { value: "BMS", label: "smart automation" }, { value: "Wi-Fi", label: "& intercoms" }],
    signsTitle: "What Our ELV & Smart Building Scope Covers",
    signs: ["IP-based CCTV surveillance, cameras, recording & monitoring stations", "Electronic access control, card readers, biometrics & door controllers", "Building Management Systems (BMS) for centralized HVAC & MEP control", "Audio and video intercom systems for residential & commercial facilities", "Automated gate barriers, vehicle access & parking management", "Wi-Fi & wireless network infrastructure and coverage planning"],
    benefits: [
      { icon: "fa-video", title: "Enhanced Security", text: "Integrated CCTV, biometric access control, intercoms and gate barriers." },
      { icon: "fa-microchip", title: "Centralized BMS Control", text: "Smart monitoring and automation of HVAC, electrical and building services." },
      { icon: "fa-wifi", title: "Seamless Connectivity", text: "Structured ELV and wireless network infrastructure coordinated with MEP." },
    ],
    faqs: [
      { q: "What ELV and smart building systems do you provide?", a: "IP-based CCTV surveillance, electronic and biometric access control, Building Management Systems (BMS), audio & video intercoms, gate barriers and Wi-Fi wireless networks." },
      { q: "Can BMS monitor HVAC and electrical systems together?", a: "Yes. Our BMS solutions provide centralized monitoring, control and integration of HVAC, electrical and mechanical building services." },
      { q: "Do you integrate ELV within turnkey MEP contracts?", a: "Yes. We deliver ELV, security and smart building systems fully coordinated with our electrical, fire safety and interior fit-out teams." },
    ],
  },
  interior: {
    intro: "QMEP delivers end-to-end interior design and fit-out solutions combining creative design, 3D visualization, BIM modelling, bespoke craftsmanship and seamless MEP integration — from initial concept and material procurement to final project handover.",
    stats: [{ value: "3D/BIM", label: "design & modelling" }, { value: "Turnkey", label: "design & build" }, { value: "MEP", label: "fully integrated" }],
    signsTitle: "What Our Interior Design & Fit-Out Scope Covers",
    signs: ["Interior concept development, space planning, 3D visualization & BIM modelling", "Civil & architectural fit-out: masonry, plastering, screeding & partitioning", "Gypsum partitions, suspended ceilings, decorative ceilings & bulkheads", "Marble, granite, natural stone, porcelain, ceramic, vinyl & timber flooring", "Wall panelling, feature walls, stone cladding, painting & bespoke joinery", "Commercial & hospitality fit-out with seamless MEP coordination & handover"],
    benefits: [
      { icon: "fa-cubes", title: "3D & BIM Design-Build", text: "Photorealistic 3D visualizations, BIM coordination and construction drawings." },
      { icon: "fa-paint-roller", title: "Bespoke Craftsmanship", text: "Custom joinery, marble/stone flooring, decorative ceilings and feature finishes." },
      { icon: "fa-cogs", title: "Single-Point MEP + Fit-Out", text: "Electrical, lighting, HVAC, plumbing and fire safety seamlessly integrated." },
    ],
    faqs: [
      { q: "What interior design and fit-out works does QMEP execute?", a: "Concept & space planning, 3D visualization & BIM modelling, civil & architectural works, gypsum & ceilings, marble/stone/tile/timber flooring, wall cladding & finishes, bespoke joinery and full MEP integration." },
      { q: "Have you delivered commercial and restaurant fit-out projects?", a: "Yes. Our completed design-and-build fit-outs include SushiWama Restaurant at Yas Mall (Abu Dhabi) and YABA ARZAZ Restaurant at Awqaff Mall (Dubai)." },
      { q: "Do you handle authority inspections and snagging before handover?", a: "Yes. We manage material procurement, installation, quality control, snagging, defect rectification, statutory inspections and final handover." },
    ],
  },
};
