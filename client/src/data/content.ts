import {
  Award,
  BadgeCheck,
  Box,
  Building2,
  ClipboardCheck,
  Compass,
  Droplets,
  Hammer,
  IndianRupee,
  Layers,
  LayoutGrid,
  Palette,
  PartyPopper,
  PencilRuler,
  Phone,
  RefreshCcw,
  Settings,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
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

export const companyBlurb =
  "SR Vallavan Enterprises – Professional Swimming Pool Construction, Waterproofing & Renovation Services. We provide quality workmanship, reliable service and complete solutions for residential and commercial projects. Contact us for your swimming pool and waterproofing requirements.";

export const quoteServices = [
  "Swimming Pool Construction",
  "Fountains & Jacuzzi / Waterfalls",
  "Swimming Pool Filtration Systems",
  "Swimming Pool Accessories",
  "Swimming Pool Maintenance",
  "Swimming Pool Waterproofing",
  "Swimming Pool Tiles",
  "Other",
];

export const poolTypes = [
  {
    name: "Infinity Pools",
    desc: "Contemporary designs that create a seamless connection between water and the surrounding landscape.",
  },
  {
    name: "Family Pools",
    desc: "Comfortable and practical swimming spaces designed for everyday enjoyment.",
  },
  {
    name: "Luxury Pools",
    desc: "Premium designs that turn your property into a sophisticated private retreat.",
  },
  {
    name: "Compact Pools",
    desc: "Smart pool solutions designed to make the most of smaller spaces.",
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
    title: "Custom Swimming Pools",
    copy: "Bespoke swimming pool designs created around your available space, lifestyle and vision.",
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
    title: "Infinity Pools",
    copy: "Add a striking architectural element to your property with a beautifully designed infinity-edge pool.",
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
    title: "Residential Pools",
    copy: "Create your own private retreat with a stylish swimming pool designed for homes, villas and farmhouses.",
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
    copy: "Professional pool construction solutions for hotels, resorts, apartments, clubs and commercial spaces.",
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
    title: "Pool Renovation",
    copy: "Give an existing pool a fresh new look with renovation, upgrades, finishing and improvement work.",
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
    title: "Pool Equipment & Filtration",
    copy: "Reliable filtration, circulation and pool equipment solutions for cleaner water and efficient pool operation.",
    tags: ["Filtration", "Circulation", "Equipment"],
    details: [
      "Filtration planned for cleaner, healthier water",
      "Circulation and supporting equipment installed with care",
      "Practical solutions explained before work begins",
      "Equipment matched to your pool size and use",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Waterproofing & Leak Repair",
    copy: "Leak-proof waterproofing solutions for new pool shells and existing pools, built for a hassle-free experience.",
    tags: ["Waterproofing", "Leak repair", "New & existing pools"],
    details: [
      "Waterproofing for new pool shells before tiling",
      "Leak detection and repair for existing pools",
      "Durable protection for residential and commercial projects",
      "Complete solution with quality workmanship",
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
  hero: U("photo-1520250497591-112f2f40a3f4", 3840),
  heroDusk: U("photo-1613977257363-707ba9348227", 3840),
  infinity: U("photo-1613977257363-707ba9348227"),
  resort: U("photo-1540541338287-41700207dee6"),
  evening: U("photo-1584132967334-10e028bd69f7"),
  detail: U("photo-1572331165267-854da2b10ccc"),
  duskHouse: U("photo-1613977257592-4871e5fcd7c4"),
  lapLanes: U("photo-1530549387789-4c1017266635"),
  interior: U("photo-1575429198097-0414ec08e8cd"),
  lagoon: U("photo-1571896349842-33c89424de2d"),
  villa: U("photo-1512917774080-9991f1c4c750"),
  hotel: U("photo-1520607162513-77705c0f0d4a"),
  tropical: U("photo-1520250497591-112f2f40a3f4"),
  vanishing: U("photo-1576013551627-0cc20b96c2a7"),
  float: U("photo-1519974719765-e6559eac2575"),
  duskPool: U("photo-1512917774080-9991f1c4c750"),
  mosaic: U("photo-1572331165267-854da2b10ccc"),
  worker: U("photo-1621905251189-08b45d6a269e"),
  plumber: U("photo-1585704032915-c3400ca199e7"),
  plans: U("photo-1503387762-592deb58ef4e"),
  sitework: U("photo-1541888946425-d81bb19240f5"),
  steelwork: U("photo-1516937941344-00b4e0337589"),
  cranes: U("photo-1504307651254-35680f356dfd"),
  coating: U("photo-1562259949-e8e7689d7828"),
  renovation: U("photo-1581858726788-75bc0f6a952d"),
  pipes: U("photo-1504328345606-18bbc8c9d7d1"),
  villaDusk: U("photo-1613490493576-7fde63acd811"),
  compactFloat: U("photo-1601918774946-25832a4be0d6"),
};

// Verified service photos stored locally (see client/public/services).
// Sources: residential-pool.jpg — Pexels (photo 26859048, free license);
// pool-fountain.jpg + pool-renovation.jpg — Flickr user "Concrete Forms", CC BY 2.0;
// pool-filtration.jpg — Flickr user "blmurch", CC BY-SA 2.0 (credits in site footer).
export const SVC_IMG = {
  residential: "/services/residential-pool.jpg",
  fountain: "/services/pool-fountain.jpg",
  renovation: "/services/pool-renovation.jpg",
  filtration: "/services/pool-filtration.jpg",
};

export const pageHeroSlides = {
  services: [IMG.tropical, IMG.villaDusk, IMG.compactFloat, IMG.lapLanes],
  gallery: [IMG.sitework, IMG.cranes, IMG.plans, IMG.pipes],
  about: [IMG.villa, IMG.lapLanes, IMG.interior],
  contact: [IMG.tropical, IMG.hotel, IMG.interior],
  faq: [IMG.detail, IMG.evening, IMG.lapLanes],
  legal: [IMG.hero, IMG.heroDusk, IMG.duskPool],
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
    image: IMG.lagoon,
    copy: "A shaded plunge court that cools a heritage home by three degrees.",
  },
  {
    no: "04",
    title: "Skyline Plunge",
    location: "Trichy",
    type: "Terrace plunge · 2024",
    image: IMG.vanishing,
    copy: "A rooftop plunge with city views — lightweight shell, silent equipment.",
  },
  {
    no: "05",
    title: "Farmhouse Lagoon",
    location: "ECR, Chennai",
    type: "Freeform · 2023",
    image: IMG.villa,
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
  { icon: ClipboardCheck, title: "Consultation", copy: "Tell us about your property, requirements and vision." },
  { icon: Compass, title: "Site Assessment", copy: "We understand your available space and project requirements." },
  { icon: PencilRuler, title: "Design", copy: "A pool concept is developed around your space and preferences." },
  { icon: Hammer, title: "Construction", copy: "Our team brings the approved design to life with professional execution." },
  { icon: Palette, title: "Finishing", copy: "Tiles, edges, equipment, lighting and finishing details complete your pool." },
  { icon: PartyPopper, title: "Handover", copy: "Your new swimming pool is ready to enjoy." },
];

export interface BuildStep {
  icon: LucideIcon;
  title: string;
  copy: string;
  image: string;
}

export const buildSteps: BuildStep[] = [
  {
    icon: ClipboardCheck,
    title: "Site Inspection & Planning",
    copy: "We visit your site, understand your space and plan the best design as per your needs.",
    image: IMG.plans,
  },
  {
    icon: Hammer,
    title: "Excavation",
    copy: "Precision digging with proper leveling and measurement.",
    image: IMG.sitework,
  },
  {
    icon: Layers,
    title: "Steel Fixing",
    copy: "High-quality steel structure for long-lasting strength and durability.",
    image: IMG.steelwork,
  },
  {
    icon: Box,
    title: "Shuttering & Concreting",
    copy: "Strong foundation with premium grade concrete.",
    image: IMG.cranes,
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    copy: "Leak-proof finishing for a hassle-free experience.",
    image: IMG.coating,
  },
  {
    icon: LayoutGrid,
    title: "Tiling",
    copy: "Premium tiles for a stylish and long-lasting look.",
    image: IMG.detail,
  },
  {
    icon: Settings,
    title: "Filtration & Equipment Setup",
    copy: "Clean, safe and crystal clear water with the right systems.",
    image: IMG.pipes,
  },
  {
    icon: PartyPopper,
    title: "Final Touch & Handover",
    copy: "Testing, cleaning and ready for you to make a splash!",
    image: IMG.tropical,
  },
];

export interface WhyPoint {
  icon: LucideIcon;
  title: string;
  copy: string;
}

export const whyChooseUs: WhyPoint[] = [
  { icon: PencilRuler, title: "Custom Design", copy: "Every property is different. We create pool designs that suit your space, requirements and style." },
  { icon: ShieldCheck, title: "Quality Construction", copy: "We focus on strong construction, proper finishing and attention to every stage of the project." },
  { icon: Users, title: "Professional Execution", copy: "From planning to completion, we maintain a structured approach to keep your project moving smoothly." },
  { icon: BadgeCheck, title: "Transparent Approach", copy: "Clear communication and straightforward project discussions from the beginning." },
  { icon: Sparkles, title: "Detail-Oriented Finishing", copy: "From pool shape and tiles to steps, lighting and finishing touches, every detail matters." },
  { icon: Phone, title: "Customer Focus", copy: "Your requirements come first. We work closely with you to bring your vision to life." },
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
    q: "How much does a swimming pool cost?",
    a: "Pool cost depends on the size, design, construction method, depth, materials, finishing and equipment selected. Contact us for a project-specific quotation.",
  },
  {
    q: "Can you design a pool according to my available space?",
    a: "Yes. We can plan a swimming pool around the available space and your requirements.",
  },
  {
    q: "Do you build residential swimming pools?",
    a: "Yes. We provide swimming pool construction solutions for homes, villas and private properties.",
  },
  {
    q: "Do you construct commercial swimming pools?",
    a: "Yes. We can work on suitable commercial, resort, hospitality and other larger-scale pool projects.",
  },
  {
    q: "Can an existing swimming pool be renovated?",
    a: "Depending on its condition, an existing pool can be renovated, upgraded or redesigned.",
  },
  {
    q: "How do I get a quotation?",
    a: "Contact our team and share your location, approximate space and requirements. We can discuss your project and guide you through the next steps.",
  },
  {
    q: "Do you handle swimming pool waterproofing and leak repairs?",
    a: "Yes. We provide waterproofing for new pool shells and leak detection plus repair for existing pools, for both residential and commercial projects.",
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
  | "Renovation"
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
  "Renovation",
  "Spa & Features",
];

export const galleryItems: GalleryItem[] = [
  { image: IMG.infinity, title: "Vanishing-edge villa pool", location: "ECR, Chennai", category: "Infinity" },
  { image: IMG.evening, title: "Dusk swim under the palms", location: "Mahabalipuram", category: "Family" },
  { image: IMG.resort, title: "Resort lagoon with deck jets", location: "Madurai", category: "Commercial" },
  { image: IMG.lapLanes, title: "20-metre training lane", location: "Coimbatore", category: "Family" },
  { image: IMG.vanishing, title: "Rooftop plunge at dusk", location: "Trichy", category: "Plunge" },
  { image: IMG.detail, title: "Pebble-finish lagoon edge", location: "ECR, Chennai", category: "Infinity" },
  { image: IMG.interior, title: "Warm-water therapy suite", location: "Anna Nagar, Chennai", category: "Spa & Features" },
  { image: IMG.hero, title: "Courtyard family pool", location: "Adyar, Chennai", category: "Family" },
  { image: IMG.hotel, title: "Wellness court with Jacuzzi", location: "RS Puram, Coimbatore", category: "Spa & Features" },
  { image: IMG.villa, title: "Clifftop infinity concept", location: "Covelong, ECR", category: "Infinity" },
  { image: IMG.tropical, title: "Club lap pool, 6 lanes", location: "Chennai", category: "Commercial" },
  { image: IMG.float, title: "Compact terrace plunge", location: "Salem", category: "Plunge" },
  { image: IMG.coating, title: "Waterproofing membrane in progress", location: "Coimbatore", category: "Renovation" },
  { image: IMG.renovation, title: "Structural shell rebuild", location: "Chennai", category: "Renovation" },
  { image: IMG.worker, title: "Leak repair & tile refit", location: "Madurai", category: "Renovation" },
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
