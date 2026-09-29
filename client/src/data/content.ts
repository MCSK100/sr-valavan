import {
  BadgeCheck,
  Building2,
  Compass,
  Droplets,
  Hammer,
  HeartPulse,
  PencilRuler,
  Phone,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const CONTACT = {
  phoneDisplay: "+91 78718 31029",
  phoneHref: "tel:+917871831029",
  waNumber: "917871831029",
  email: "srvallavanofficial@gmail.com",
  address: "17/27 Bharathi Nagar, Kuniyamuthur, Coimbatore 641008",
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
    name: "Luxury Villa Pools",
    desc: "Elegant swimming spaces designed to complement premium homes.",
  },
  {
    name: "Infinity Pools",
    desc: "Modern designs that create a stunning visual connection between water and surroundings.",
  },
  {
    name: "Overflow Pools",
    desc: "Sophisticated pool designs where water flows beautifully over the pool edges.",
  },
  {
    name: "Rooftop Pools",
    desc: "Make the most of your rooftop with a carefully planned private pool experience.",
  },
  {
    name: "Resort & Hotel Pools",
    desc: "Large-scale swimming environments designed for hospitality and commercial spaces.",
  },
  {
    name: "Custom Pools",
    desc: "Have something unique in mind? Let's create a pool designed specifically for you.",
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
    title: "Custom Swimming Pool Construction",
    copy: "Beautifully designed pools built around your space, requirements and lifestyle.",
    tags: ["Custom design", "Villas", "End-to-end build"],
    details: [
      "Pool concept tailored to your space, architecture and lifestyle",
      "Strong construction with proper finishing at every stage",
      "Tiles, coping, lighting and final details completed to plan",
      "Handover ready for unforgettable moments",
    ],
  },
  {
    icon: Sparkles,
    title: "Infinity & Overflow Pools",
    copy: "Create a breathtaking visual experience with modern infinity and overflow pool designs.",
    tags: ["Infinity", "Overflow edges", "Modern design"],
    details: [
      "Stunning visual connection between water and surroundings",
      "Water flowing beautifully over the pool edges",
      "Designs planned around your site and views",
      "Premium finishing for a luxurious look",
    ],
  },
  {
    icon: Building2,
    title: "Residential Swimming Pools",
    copy: "Transform your backyard, villa or farmhouse into your own private luxury retreat.",
    tags: ["Backyards", "Villas", "Farmhouses"],
    details: [
      "Private pools designed for homes and villas",
      "Concepts that suit your available space and lifestyle",
      "Rooftop and backyard options planned with care",
      "Built around your expectations and budget",
    ],
  },
  {
    icon: Compass,
    title: "Commercial & Resort Pools",
    copy: "Professional pool solutions designed for hotels, resorts, apartments, clubs and commercial properties.",
    tags: ["Hotels", "Resorts", "Apartments & clubs"],
    details: [
      "Large-scale swimming environments for hospitality spaces",
      "Pools planned for commercial use and guest experience",
      "Custom water features to elevate the property",
      "Solutions for apartments, clubs and resorts",
    ],
  },
  {
    icon: Droplets,
    title: "Water Features & Fountains",
    copy: "Add character and elegance with customised fountains, cascades and decorative water features.",
    tags: ["Fountains", "Cascades", "Decorative features"],
    details: [
      "Customised fountains designed for your property",
      "Cascades and decorative water features",
      "Details that complete the final experience",
      "Options for homes, resorts and commercial spaces",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Pool Renovation & Upgrades",
    copy: "Give your existing pool a fresh new look with renovation, finishing and system upgrades.",
    tags: ["Renovation", "Re-finishing", "System upgrades"],
    details: [
      "Fresh new look for ageing pools",
      "Updated tiles, coping and finishes",
      "Lighting and water-feature upgrades",
      "Finishing touches that transform the experience",
    ],
  },
  {
    icon: Wrench,
    title: "Pool Filtration & Equipment",
    copy: "Reliable filtration, circulation and supporting equipment for cleaner, healthier pool water.",
    tags: ["Filtration", "Circulation", "Equipment"],
    details: [
      "Filtration planned for cleaner, healthier water",
      "Circulation and supporting equipment installed with care",
      "Practical solutions explained before work begins",
      "Equipment matched to your pool size and use",
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
  { icon: Phone, title: "Consultation", copy: "Tell us about your property, requirements and dream pool." },
  { icon: Compass, title: "Site Assessment", copy: "We understand your available space and project requirements." },
  { icon: PencilRuler, title: "Design & Planning", copy: "We develop a pool concept tailored to your property and preferences." },
  { icon: Hammer, title: "Construction", copy: "Our team brings the approved design to life with careful execution." },
  { icon: Sparkles, title: "Finishing", copy: "Tiles, coping, lighting, water features and final details complete the look." },
  { icon: Waves, title: "Ready to Dive", copy: "Your new swimming pool is ready for unforgettable moments." },
];

export interface WhyPoint {
  icon: LucideIcon;
  title: string;
  copy: string;
}

export const whyChooseUs: WhyPoint[] = [
  { icon: PencilRuler, title: "Custom Designs", copy: "Every property is different. We create pool concepts that suit your available space, architecture and lifestyle." },
  { icon: ShieldCheck, title: "Quality Construction", copy: "We focus on strong construction, proper finishing and attention to detail at every stage." },
  { icon: Compass, title: "End-to-End Service", copy: "From initial planning and construction to finishing and installation, we help manage your pool project from start to finish." },
  { icon: BadgeCheck, title: "Transparent Approach", copy: "Clear communication and practical solutions help you understand your project before construction begins." },
  { icon: Sparkles, title: "Attention to Detail", copy: "From the pool shape to the finishing touches, every detail contributes to the final experience." },
  { icon: HeartPulse, title: "Built Around You", copy: "Your requirements come first. We create solutions based on your space, expectations and budget." },
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
