import dubaiHospitalAsset from "@/assets/project-dubai-hospital.webp.asset.json";
import heritageVillageAsset from "@/assets/project-heritage-village.webp.asset.json";
import alLehbabVillasAsset from "@/assets/project-al-lehbab-villas.webp.asset.json";
import alWarqaG9Asset from "@/assets/project-al-warqa-g9.webp.asset.json";
import sushiWamaAsset from "@/assets/project-sushiwama.webp.asset.json";
import yabaEntranceAsset from "@/assets/project-yaba-arzaz-entrance.webp.asset.json";
import yabaSiteAsset from "@/assets/project-yaba-arzaz-site.webp.asset.json";

export type ProjectCategory = "All" | "Healthcare & Cultural" | "Residential" | "Hospitality & Fit-Out";

export type PortfolioProject = {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  sector: string;
  category: Exclude<ProjectCategory, "All">;
  location: string;
  icon: string;
  image: string;
  galleryImage?: string;
  client?: string;
  consultant?: string;
  mainContractor?: string;
  projectType?: string;
  contractor: string;
  overview: string;
  scope: string[];
};

export const projectFilters: readonly ProjectCategory[] = [
  "All",
  "Healthcare & Cultural",
  "Residential",
  "Hospitality & Fit-Out",
] as const;

// Verified Selected Project Experience directly from QMEP Pre-Qualification Document (Pages 11–22).
export const selectedProjects: PortfolioProject[] = [
  {
    id: "oncology-center-dubai-hospital",
    code: "01",
    title: "Construction of Oncology Center – Dubai Hospital",
    shortTitle: "Oncology Center – Dubai Hospital",
    sector: "Healthcare",
    category: "Healthcare & Cultural",
    location: "Dubai, UAE",
    icon: "fa-hospital",
    image: dubaiHospitalAsset.url,
    client: "Abu Dhabi International Medical Services LLC (ADI)",
    consultant: "HDP",
    mainContractor: "National Gulf Constructions LLC",
    contractor: "QMEP Electromechanical Works LLC",
    overview:
      "Construction of a dedicated Oncology Center at Dubai Hospital, requiring coordinated electromechanical installations to meet the functional, technical and operational standards of a specialized healthcare facility.",
    scope: [
      "HVAC Systems",
      "Ventilation Systems",
      "Electrical Systems",
      "Plumbing Systems",
      "Drainage Systems",
      "Firefighting Systems",
      "Fire Detection & Alarm Systems",
      "Central Battery System (CBS)",
      "Testing & Commissioning of MEP Systems",
    ],
  },
  {
    id: "dubai-heritage-village-al-shindagha",
    code: "02",
    title: "Construction & Renovation of Dubai Heritage Village – Al Shindagha",
    shortTitle: "Dubai Heritage Village – Al Shindagha",
    sector: "Cultural Heritage & Renovation",
    category: "Healthcare & Cultural",
    location: "Al Shindagha, Dubai, UAE",
    icon: "fa-landmark",
    image: heritageVillageAsset.url,
    client: "Dubai Culture and Arts Authority",
    mainContractor: "National Gulf Constructions LLC",
    contractor: "QMEP Electromechanical Works LLC",
    overview:
      "Construction and renovation works at Dubai Heritage Village in historic Al Shindagha, integrating modern building services while respecting the Emirate's cultural and architectural heritage.",
    scope: [
      "HVAC Systems",
      "Ventilation Systems",
      "Electrical Systems",
      "Plumbing Systems",
      "Drainage Systems",
      "Firefighting Systems",
      "Fire Detection & Alarm Systems",
      "Central Battery System (CBS)",
      "Testing & Commissioning of MEP Systems",
    ],
  },
  {
    id: "15-villas-al-lehbab-dubai",
    code: "03",
    title: "Construction of 15 Villas – Al Lehbab, Dubai",
    shortTitle: "15 Residential Villas – Al Lehbab",
    sector: "Residential Development",
    category: "Residential",
    location: "Al Lehbab, Dubai, UAE",
    icon: "fa-home",
    image: alLehbabVillasAsset.url,
    client: "Mohammad Bin Rashid Housing Estate, Dubai",
    consultant: "MSM Engineering Consultant, Dubai, UAE",
    mainContractor: "MRM Contracting, Dubai",
    contractor: "QMEP Electromechanical Works LLC",
    overview:
      "Complete electromechanical and specialist building services for 15 modern residential villas in Al Lehbab, Dubai, delivered for occupant comfort, safety and operational reliability.",
    scope: [
      "Mechanical Works (HVAC & Ventilation)",
      "Electrical Power Distribution & Lighting",
      "Plumbing & Domestic Water Supply",
      "Soil, Waste & Stormwater Drainage",
      "Complete Firefighting Systems",
      "Fire Detection & Alarm Systems",
      "Extra-Low Voltage (ELV) Systems",
    ],
  },
  {
    id: "g9-residential-building-al-warqa",
    code: "04",
    title: "Construction of G+9 Residential Building – Al Warqa, Dubai",
    shortTitle: "G+9 Residential Building – Al Warqa",
    sector: "Residential Development",
    category: "Residential",
    location: "Al Warqa, Dubai, UAE",
    icon: "fa-building",
    image: alWarqaG9Asset.url,
    client: "Mr. Ahmed Al Mazrooi",
    consultant: "Klick Engineering Consultant",
    mainContractor: "RMM Contracting LLC",
    contractor: "QMEP Electromechanical Works LLC",
    overview:
      "Execution and coordination of complete mechanical, electrical and plumbing installations for a G+9 residential building comprising ground floor and nine upper floors in Al Warqa, Dubai.",
    scope: [
      "Complete MEP Installation Works",
      "HVAC Systems & Associated Mechanical Services",
      "Electrical Power Distribution & Lighting",
      "Plumbing, Water Supply & Drainage Systems",
      "Structural & Architectural MEP Coordination",
      "Testing, Commissioning & Authority Inspections",
    ],
  },
  {
    id: "sushiwama-restaurant-yas-mall",
    code: "05",
    title: "SushiWama Restaurant – Yas Mall, Abu Dhabi",
    shortTitle: "SushiWama Restaurant – Yas Mall",
    sector: "Hospitality & Fit-Out",
    category: "Hospitality & Fit-Out",
    location: "Yas Mall, Abu Dhabi, UAE",
    icon: "fa-utensils",
    image: sushiWamaAsset.url,
    projectType: "Restaurant – Design & Build / Fit-Out",
    contractor: "QMEP Electromechanical and Interior Works LLC",
    overview:
      "Design, construction and turnkey interior fit-out for SushiWama Restaurant at Yas Mall, Abu Dhabi, integrating contemporary architectural finishes, interior elements and full restaurant MEP services.",
    scope: [
      "Design & Construction Coordination",
      "Complete Interior Fit-Out Works",
      "Mechanical, Electrical & Plumbing (MEP) Works",
      "Architectural Finishes & Lighting Integration",
      "Authority Compliance & Operational Handover",
    ],
  },
  {
    id: "yaba-arzaz-restaurant-awqaff-mall",
    code: "06",
    title: "YABA ARZAZ Restaurant – Awqaff Mall, Dubai",
    shortTitle: "YABA ARZAZ Restaurant – Awqaff Mall",
    sector: "Hospitality & Fit-Out",
    category: "Hospitality & Fit-Out",
    location: "Awqaff Mall, Dubai, UAE",
    icon: "fa-store",
    image: yabaEntranceAsset.url,
    galleryImage: yabaSiteAsset.url,
    client: "Yaba Group",
    projectType: "Restaurant – Design & Build",
    contractor: "QMEP Electromechanical and Interior Works LLC",
    overview:
      "BIM-based design and construction of YABA ARZAZ Restaurant at Awqaff Mall, Dubai, delivered through an integrated design-and-build approach combining architectural, structural and MEP systems.",
    scope: [
      "BIM-Based Design & Multidisciplinary Coordination",
      "Construction & Interior Fit-Out Works",
      "Mechanical, Electrical & Plumbing (MEP) Works",
      "Testing, Adjusting & Balancing (TAB)",
      "Testing & Commissioning of All Installed Systems",
      "Statutory Authority Inspections, Approvals & Handover",
    ],
  },
];

export type ManagementExperienceProject = {
  code: string;
  title: string;
  location: string;
  sector: string;
  client: string;
  consultant?: string;
  mainContractor: string;
  mepContractor: string;
  overview: string;
  highlights: string[];
};

export const managementExperienceNote =
  "Note: The projects presented in this section represent the previous project execution experience of QMEP's management team while employed with Spectrumcube LLC. They are presented to demonstrate the team's professional capabilities and are not claimed as projects directly contracted by QMEP.";

// Verified Management Team Previous Experience from QMEP Pre-Qualification Document (Pages 22–30).
export const managementProjects: ManagementExperienceProject[] = [
  {
    code: "01",
    title: "Rixos Hotel & Resort",
    location: "Abu Dhabi, UAE",
    sector: "Luxury Hospitality",
    client: "NIC – National Investment Company",
    consultant: "Dewan Architects & Engineers",
    mainContractor: "Arabtec",
    mepContractor: "Spectrumcube LLC",
    overview: "Luxury hospitality development comprising premium guest accommodation, restaurants, leisure facilities and supporting hotel infrastructure.",
    highlights: ["HVAC & Chilled Water", "LV Power & Lighting", "Plumbing & Drainage", "Firefighting & Alarm", "ELV, BMS & Commissioning"],
  },
  {
    code: "02",
    title: "Renovation of Marina Mall",
    location: "Abu Dhabi, UAE",
    sector: "Retail & Commercial",
    client: "NIC – National Investment Company",
    consultant: "Dewan Architects & Engineers",
    mainContractor: "Direct works – no main contractor",
    mepContractor: "Spectrumcube LLC",
    overview: "Building services renovation and upgrading works within one of Abu Dhabi's prominent operating retail and commercial destinations.",
    highlights: ["HVAC & Exhaust Upgrades", "Power & Lighting", "Plumbing Modifications", "Fire Protection & Alarm", "ELV, PA & BMS Integration"],
  },
  {
    code: "03",
    title: "KIZAD Headquarters",
    location: "Abu Dhabi, UAE",
    sector: "Corporate & Commercial",
    client: "Abu Dhabi Ports",
    consultant: "Dewan Architects & Engineers",
    mainContractor: "Ali & Sons",
    mepContractor: "Spectrumcube LLC",
    overview: "Corporate headquarters development accommodating modern administrative and office facilities with complete integrated MEP systems.",
    highlights: ["Chilled Water & Smoke Management", "Main & Sub-Main Power", "Plumbing & Stormwater", "Firefighting & Life Safety", "ELV, Data & BMS Controls"],
  },
  {
    code: "04",
    title: "Fakeeh University Hospital",
    location: "Dubai Silicon Oasis, Dubai, UAE",
    sector: "Healthcare",
    client: "Fakeeh Group",
    consultant: "Stantec International",
    mainContractor: "HLG",
    mepContractor: "Spectrumcube LLC",
    overview: "Major healthcare development incorporating clinical departments, patient accommodation and specialized medical building services infrastructure.",
    highlights: ["Healthcare HVAC & Filtration", "Generators, UPS & Essential Power", "Nurse Call & ELV", "Specialist Healthcare Services", "BMS & Integrated Testing"],
  },
  {
    code: "05",
    title: "Al Barsha Police Accommodation",
    location: "Al Barsha, Dubai, UAE",
    sector: "Government & Residential",
    client: "MAG",
    mainContractor: "Intermass Engineering & Contracting Company",
    mepContractor: "Spectrumcube LLC",
    overview: "Government residential accommodation development providing housing facilities and external utility infrastructure for police personnel.",
    highlights: ["HVAC & Smoke Management", "LV Power & Earthing", "Plumbing & Stormwater", "Firefighting & Alarm", "External MEP Works & BMS"],
  },
  {
    code: "06",
    title: "FIVE Jumeirah Village",
    location: "Jumeirah Village Circle, Dubai, UAE",
    sector: "Luxury Hospitality & Residential",
    client: "FIVE Development",
    consultant: "Atkins International",
    mainContractor: "China State Construction Engineering",
    mepContractor: "Spectrumcube LLC",
    overview: "Luxury hospitality and residential tower featuring hotel accommodation, serviced residences, restaurants, recreational amenities and pool plant.",
    highlights: ["Chilled Water & Kitchen Exhaust", "Decorative & Emergency Lighting", "Guest Room Management & ELV", "Swimming Pool Plant MEP", "BMS & Integrated Commissioning"],
  },
  {
    code: "07",
    title: "FIVE LUXE JBR",
    location: "Jumeirah Beach Residence, Dubai, UAE",
    sector: "Luxury Hospitality & Mixed-Use",
    client: "FIVE Development",
    consultant: "AE7 International",
    mainContractor: "Fibrex Contracting LLC",
    mepContractor: "Spectrumcube LLC",
    overview: "Beachfront hospitality and residential development featuring luxury accommodation, restaurants, spa, swimming pool and recreational facilities.",
    highlights: ["Chilled Water & Smoke Control", "Main/Sub-Main & Decorative Lighting", "Guest Room Management & ELV", "Pool, Spa & Kitchen MEP", "BMS & Integrated Handover"],
  },
];