import {
  BadgeCheck,
  Building2,
  Compass,
  Droplets,
  Hammer,
  Headphones,
  HeartPulse,
  Leaf,
  PencilRuler,
  Phone,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Timer,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const CONTACT = {
  phoneDisplay: "+91 78718 31029",
  phoneHref: "tel:+917871831029",
  waNumber: "917871831029",
  email: "hello@srvalavanenterprises.in",
  address: "100 Feet Road, Vadapalani, Chennai 600 026",
  hours: "9 AM – 7 PM, all days",
  cities: ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem"],
};

export const waLink = (msg: string) =>
  `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(msg)}`;

export const quoteServices = [
  "Swimming Pool Construction",
  "Fountains & Jacuzzi / Waterfalls",
  "Swimming Pool Filtration Systems",
  "Swimming Pool Accessories",
  "Swimming Pool Maintenance",
  "Swimming Pool Tiles",
  "Other",
];

export const poolTypes = [
  {
    name: "Infinity Edge",
    desc: "Vanishing-edge pools that merge water with horizon — ideal for sea-facing and terrace sites.",
  },
  {
    name: "Skimmer Pools",
    desc: "The dependable family classic — simple hydraulics, easy upkeep, honest pricing.",
  },
  {
    name: "Readymade / FRP",
    desc: "Factory-finished fibreglass shells craned in fast — perfect for terraces and quick timelines.",
  },
  {
    name: "In-Ground Concrete",
    desc: "Fully custom RCC shells in any shape, depth or finish — built for decades.",
  },
  {
    name: "Above-Ground",
    desc: "Compact, cost-effective splash pools for farmhouses and rentals with minimal civil work.",
  },
  {
    name: "Terrace / Plunge",
    desc: "Lightweight, leak-proof plunge pools engineered for rooftops and courtyards.",
  },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  copy: string;
  tags: string[];
  details: string[];
}

export const services: Service[] = [
  {
    icon: Waves,
    title: "Residential Pools",
    copy: "Infinity, skimmer, in-ground and family pools — designed to your site, soil and sun path.",
    tags: ["Infinity edge", "Skimmer pools", "In-ground"],
    details: [
      "Soil test, structural design and civic approvals handled end-to-end",
      "Skimmer or overflow gutter hydraulics sized for your bather load",
      "Salt chlorination + LED lighting as standard, app control optional",
      "Handover with water-balance training and a printed care manual",
    ],
  },
  {
    icon: Building2,
    title: "Commercial & Resorts",
    copy: "Hotel, villa-project and club pools engineered for 24×7 bather load and easy upkeep.",
    tags: ["Hotels", "Clubs", "Villa projects"],
    details: [
      "Commercial-grade filtration with 4–6 hour turnover rates",
      "Balance tanks, grating and anti-slip decks to safety norms",
      "Automated liquid dosing for precise chemistry at high loads",
      "Staff training + quarterly audit visits in year one",
    ],
  },
  {
    icon: HeartPulse,
    title: "Spas, Jacuzzi & Fountains",
    copy: "Jacuzzis, waterfalls, fountains, steam, sauna and hydrotherapy courts — silent, serviceable plant rooms.",
    tags: ["Jacuzzi", "Waterfalls", "Fountains"],
    details: [
      "Hydrotherapy jet layouts tuned to shoulder, back and leg lines",
      "Waterfalls, deck jets and fountain features integrated with filtration",
      "Steam and sauna cabins with hygiene-grade timber and controls",
      "Whisper-quiet plant rooms you never have to think about",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Renovation, Tiling & Repair",
    copy: "Leak repair, re-tiling, shape changes and full equipment upgrades for ageing pools.",
    tags: ["Leak repair", "Pool tiling", "Shape change"],
    details: [
      "Pressure testing to find the exact leak point before we dig",
      "Re-waterproofing with a 10-year written warranty",
      "Precision re-tiling: mosaic, quartzite, micro-cement or porcelain",
      "Equipment swap to salt + variable-speed pumps that cut bills ~40%",
    ],
  },
  {
    icon: Droplets,
    title: "Filtration & Automation",
    copy: "Salt chlorinators, robotic cleaners, auto-dosing and app-controlled pumps and lights.",
    tags: ["Salt systems", "Auto dosing", "App control"],
    details: [
      "Salt chlorinators + UV assist for gentle, smell-free water",
      "Robotic cleaners that scrub floor, walls and waterline",
      "Pump, light and heat scheduling from your phone",
      "Retrofits for existing pools without breaking tile",
    ],
  },
  {
    icon: ShieldCheck,
    title: "AMC & Maintenance",
    copy: "Weekly care visits, water-balance reports and breakdown support across the city.",
    tags: ["Weekly visits", "Water reports", "Spares"],
    details: [
      "A fixed weekday visit — skimming, vacuuming, backwash included",
      "Digital water-health report on WhatsApp after every visit",
      "Chemicals dosed and logged; you never handle drums",
      "Priority breakdown visits for AMC members",
    ],
  },
  {
    icon: Sparkles,
    title: "Readymade, FRP & Terrace Pools",
    copy: "Factory-finished FRP and readymade pools craned in fast — ideal for terraces and quick timelines.",
    tags: ["FRP / Fibreglass", "Terrace pools", "Above-ground"],
    details: [
      "Customisable shape, size and finish to fit rooftops, backyards and courtyards",
      "Lightweight shells engineered for terrace load with leak-proof warranty",
      "Installation in days, not months, with salt + LED as standard",
      "Lower construction cost with long-term durability and easy upkeep",
    ],
  },
  {
    icon: Wrench,
    title: "Accessories, Tiles & Equipment",
    copy: "A complete range of pool accessories, tiles, lights and fittings that lift looks and function.",
    tags: ["Accessories", "Pool tiles", "Lights & fittings"],
    details: [
      "Robotic cleaners, covers, ladders, showers and poolside fittings",
      "Designer pool tiles — mosaic, porcelain and anti-slip deck options",
      "LED lighting, heating and salt systems retrofitted without breaking tile",
      "Genuine spares with installation and after-support",
    ],
  },
];

export interface Project {
  no: string;
  title: string;
  location: string;
  type: string;
  image: string;
  copy: string;
}

const U = (id: string, w = 2560) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMG = {
  hero: U("photo-1600596542815-ffad4c1539a9", 3840),
  infinity: U("photo-1613977257363-707ba9348227"),
  resort: U("photo-1571896349842-33c89424de2d"),
  evening: U("photo-1512917774080-9991f1c4c750"),
  detail: U("photo-1600585154340-be6161a56a0c"),
  duskHouse: U("photo-1523217582562-09d0def993a6"),
  lapLanes: U("photo-1530549387789-4c1017266635"),
  interior: U("photo-1600607687939-ce8a6c25118c"),
};

export const projects: Project[] = [
  {
    no: "01",
    title: "Casa Marina",
    location: "ECR, Chennai",
    type: "Infinity edge · 2025",
    image: IMG.infinity,
    copy: "A 14-metre vanishing edge that hands the Bay of Bengal back to the living room.",
  },
  {
    no: "02",
    title: "The Quarry House",
    location: "Coimbatore",
    type: "Lap pool · 2024",
    image: IMG.lapLanes,
    copy: "A 20-metre training lane in granite and glass — built for 5 AM rituals.",
  },
  {
    no: "03",
    title: "Palm Courtyard",
    location: "Madurai",
    type: "Courtyard plunge · 2024",
    image: IMG.resort,
    copy: "A shaded plunge court that cools a heritage home by three degrees.",
  },
  {
    no: "04",
    title: "Skyline Plunge",
    location: "Trichy",
    type: "Terrace plunge · 2024",
    image: IMG.duskHouse,
    copy: "A rooftop plunge with city views — lightweight shell, silent equipment.",
  },
  {
    no: "05",
    title: "Farmhouse Lagoon",
    location: "ECR, Chennai",
    type: "Freeform · 2023",
    image: IMG.detail,
    copy: "A pebble-finished lagoon that melts a farmhouse garden into water.",
  },
  {
    no: "06",
    title: "Aqua Therapy Suite",
    location: "Anna Nagar, Chennai",
    type: "Hydro pool · 2025",
    image: IMG.interior,
    copy: "A warm-water therapy pool for a physiotherapy clinic — rails, ramp, hoist.",
  },
];

export interface Step {
  icon: LucideIcon;
  title: string;
  copy: string;
}

export const steps: Step[] = [
  { icon: Phone, title: "Conceptual Stage", copy: "We start with your vision — site walk, soil and water tests, and the right pool for your plot and lifestyle." },
  { icon: PencilRuler, title: "Flexible Design", copy: "3D views, sun studies and a line-item estimate for any space — compact terrace to luxury estate." },
  { icon: Leaf, title: "Eco-friendly Engineering", copy: "Water-efficient hydraulics, energy-saving pumps and salt systems signed off before we dig." },
  { icon: Hammer, title: "High-Quality Build", copy: "Durable materials, one accountable crew, photo updates every week, tested at every stage." },
  { icon: Compass, title: "Extensive Reach & Handover", copy: "Homes, villas and resorts across Tamil Nadu — balanced water, staff training and a printed care manual." },
  { icon: ShieldCheck, title: "Amazing Support", copy: "Warranties in writing, priority breakdown visits, and AMC that actually shows up." },
];

export interface WhyPoint {
  icon: LucideIcon;
  title: string;
  copy: string;
}

export const whyChooseUs: WhyPoint[] = [
  { icon: BadgeCheck, title: "Worry-Free Guarantee", copy: "One contract for design, build, water safety and care — you relax while one accountable team owns everything." },
  { icon: Droplets, title: "Salt Chlorine Generator", copy: "Salt + UV as standard for gentle, smell-free water that is kind to skin and eyes — and cheaper to run." },
  { icon: Timer, title: "Show Up On Time", copy: "Fixed visit slots, GPS-tracked crews and weekly photo updates — your schedule is respected at every stage." },
  { icon: Wrench, title: "Priority Repair Advantage", copy: "Filter, heater or leak issue? AMC members jump the queue with fast diagnosis and genuine spares." },
  { icon: Sparkles, title: "Total Clean Promise", copy: "Sparkling, hygienically balanced water on every visit — logged chemistry and a WhatsApp health report." },
  { icon: Headphones, title: "No Contracts, Just Care", copy: "Flexible AMC with no lock-in. Our results keep you with us — not paperwork. Cancel anytime." },
];

export interface Testimonial {
  quote: string;
  name: string;
  place: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "They rebuilt our leaking 15-year-old pool in three weeks. This summer the kids practically live in it — and our power bill dropped.",
    name: "Meera Krishnan",
    place: "Adyar, Chennai",
    initials: "MK",
  },
  {
    quote:
      "The infinity edge lines up exactly with the sea. Guests photograph it more than the rooms. Worth every rupee.",
    name: "Arjun Shetty",
    place: "Resort Owner, Mahabalipuram",
    initials: "AS",
  },
  {
    quote:
      "Weekly AMC is clockwork — water report on WhatsApp, chemicals topped up, filters backwashed. I never think about the pool.",
    name: "Divya & Karthik",
    place: "Saibaba Colony, Coimbatore",
    initials: "DK",
  },
  {
    quote:
      "From concept to first swim they handled everything — waterfalls, Jacuzzi, lighting. The terrace plunge is now the best room of our villa.",
    name: "Raju Bhosale",
    place: "Villa Owner, ECR",
    initials: "RB",
  },
  {
    quote:
      "Transparent costing, high-grade materials and a crew that shows up on time. Our readymade FRP pool was filled within ten days.",
    name: "Anil Singh",
    place: "Farmhouse, Erode",
    initials: "AS",
  },
  {
    quote:
      "Post-construction support is phenomenal — one call and their technician is at the plant room. Truly a one-stop pool partner.",
    name: "Sanu Mendez",
    place: "Homestay, Kodaikanal",
    initials: "SM",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "How much does a swimming pool cost in Chennai?",
    a: "A compact plunge pool starts around ₹8–10 lakh, a family skimmer pool around ₹14–20 lakh, and a vanishing-edge infinity pool ₹25 lakh and above — equipment and finish included. Readymade FRP pools for home are often more affordable and faster. We give a line-item estimate after a free site visit, so you see exactly where every rupee goes.",
  },
  {
    q: "How are swimming pools constructed?",
    a: "Traditional in-ground pools use RCC shells with waterproofing and tiling (6–8 weeks). Readymade FRP / fibreglass pools arrive factory-finished and are craned into a prepared pit or terrace frame in days. We recommend the method that suits your soil, load and timeline after a site study.",
  },
  {
    q: "Is a pool worth the money?",
    a: "Yes — a well-built pool lifts property value and daily life, especially for villas, farmhouses and resorts. Salt systems and variable-speed pumps keep running costs low, and a readymade pool for home keeps the upfront cost controlled while delivering the same lifestyle upgrade.",
  },
  {
    q: "How long does construction take?",
    a: "A standard residential pool takes 6–8 weeks from excavation to first fill: 1 week civil, 2 weeks shell and waterproofing, 2 weeks tiling and coping, 1–2 weeks equipment, testing and balancing. Readymade FRP installs finish in 7–12 days. Renovations typically finish in 2–3 weeks.",
  },
  {
    q: "What maintenance does a pool need?",
    a: "Very little, if it is built right. Daily skimming, weekly vacuuming and filter checks, plus balanced chemistry. Our AMC plans cover all of it with a visit every week and a water-health report on WhatsApp. Salt-chlorinated pools cut chemical handling to near zero.",
  },
  {
    q: "What chemicals are needed, and how often should I clean?",
    a: "Chlorine (or salt-generated chlorine), pH stabilisers, alkalinity balancers, algaecide and a test kit. Skim daily, vacuum weekly and deep-clean tiles seasonally. We hand over a chemical guide at handover, and AMC members never touch a drum — we dose and log everything.",
  },
  {
    q: "Salt water, chlorine or UV — which is best?",
    a: "For homes we recommend salt chlorination with UV assist: gentle on skin and eyes, no chlorine smell, and lower running cost. Commercial pools get automated liquid dosing for precise control at high bather loads.",
  },
  {
    q: "What is an FRP / readymade swimming pool? Can it crack?",
    a: "FRP (fibreglass-reinforced plastic) pools are strong, waterproof factory shells — quick to install and ideal for terraces. They flex slightly with soil movement, so cracks are rare when installed by a certified builder on a proper base. We warranty both shell and installation in writing.",
  },
  {
    q: "Can a readymade pool be customised to fit my space?",
    a: "Absolutely — shape, size, steps, benches, colour and finish can be tailored for backyards, rooftops and even terrace pools. Share your plot sketch on WhatsApp and we will propose two fitting options with pricing within 48 hours.",
  },
  {
    q: "What is a Jacuzzi pool? Can you add a waterfall later?",
    a: "A Jacuzzi is a heated hydrotherapy pool with massage jets — often paired with a main pool. And yes, waterfalls, deck jets, LED lighting and heating can be retrofitted to existing pools without breaking tile in most cases. Ask us for an upgrade estimate with tile and pump implications listed.",
  },
  {
    q: "Do you give warranty and after-service?",
    a: "Yes — 10 years on waterproofing, 5 years on structure, 1–2 years on equipment (as per manufacturer), all in writing. Every project can move onto an annual care plan with priority breakdown visits and no lock-in contracts.",
  },
];

export interface Finish {
  name: string;
  color: string;
  desc: string;
}
export const finishes: Finish[] = [
  { name: "Quartzite", color: "linear-gradient(135deg,#8fa8a3,#3c5a55)", desc: "Cool underfoot even at noon — grippy, natural cleft stone for edges and decks." },
  { name: "Glass mosaic", color: "linear-gradient(135deg,#35c4c0,#0a5c6c)", desc: "Hand-set shimmer that turns shallow water electric blue in daylight." },
  { name: "Travertine", color: "linear-gradient(135deg,#e3d3b3,#a98f63)", desc: "Warm Mediterranean calm — soft, matte and kind to bare feet." },
  { name: "Micro-cement", color: "linear-gradient(135deg,#b9bec0,#5d6669)", desc: "Seamless modern skin — one continuous surface from deck to waterline." },
  { name: "Pebble", color: "linear-gradient(135deg,#7d8b8f,#2e3a3d)", desc: "Natural lagoon feel — massaging texture and deep, organic colour." },
  { name: "Porcelain", color: "linear-gradient(135deg,#eef2f2,#9fb6b8)", desc: "Large-format, stain-proof and precise — the crisp contemporary choice." },
];

export type GalleryCategory =
  | "Infinity"
  | "Family"
  | "Plunge"
  | "Commercial"
  | "Spa & Features";

export interface GalleryItem {
  image: string;
  title: string;
  location: string;
  category: GalleryCategory;
}

export const galleryCategories: Array<"All" | GalleryCategory> = [
  "All",
  "Infinity",
  "Family",
  "Plunge",
  "Commercial",
  "Spa & Features",
];

export const galleryItems: GalleryItem[] = [
  { image: IMG.infinity, title: "Vanishing-edge villa pool", location: "ECR, Chennai", category: "Infinity" },
  { image: IMG.evening, title: "Dusk swim under the palms", location: "Mahabalipuram", category: "Family" },
  { image: IMG.resort, title: "Resort lagoon with deck jets", location: "Madurai", category: "Commercial" },
  { image: IMG.lapLanes, title: "20-metre training lane", location: "Coimbatore", category: "Family" },
  { image: IMG.duskHouse, title: "Rooftop plunge at dusk", location: "Trichy", category: "Plunge" },
  { image: IMG.detail, title: "Pebble-finish lagoon edge", location: "ECR, Chennai", category: "Infinity" },
  { image: IMG.interior, title: "Warm-water therapy suite", location: "Anna Nagar, Chennai", category: "Spa & Features" },
  { image: IMG.hero, title: "Courtyard family pool", location: "Adyar, Chennai", category: "Family" },
  { image: IMG.resort, title: "Wellness court with Jacuzzi", location: "RS Puram, Coimbatore", category: "Spa & Features" },
  { image: IMG.infinity, title: "Clifftop infinity concept", location: "Covelong, ECR", category: "Infinity" },
  { image: IMG.lapLanes, title: "Club lap pool, 6 lanes", location: "Chennai", category: "Commercial" },
  { image: IMG.duskHouse, title: "Compact terrace plunge", location: "Salem", category: "Plunge" },
];

export interface Industry {
  title: string;
  copy: string;
}

export const industries: Industry[] = [
  { title: "Residential", copy: "Villas, farmhouses and terrace homes — family pools, plunge courts and wellness corners sized to your plot." },
  { title: "Commercial", copy: "Hotels, resorts, clubs and homestays — high-bather-load pools with balance tanks, dosing and safety decks." },
  { title: "Institutional", copy: "Schools, academies and training centres — lane pools and learner pools built to standard depths and markings." },
];

export interface PoolSize {
  name: string;
  dims: string;
  copy: string;
}

export const poolSizes: PoolSize[] = [
  { name: "Family pool", dims: "10 m × 4 m · 1.0–1.8 m deep", copy: "The classic home pool — swimming, play and evening floats for the whole family." },
  { name: "Semi-Olympic / club", dims: "25 m × 10 m · 1.2–1.8 m deep", copy: "For clubs, resorts and serious training — lanes, timing and spectator deck options." },
  { name: "Competition", dims: "50 m × 25 m · 2.0 m+ deep", copy: "Full-spec race pools with starting blocks, lane markings and event lighting." },
];
