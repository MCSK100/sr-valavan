import {
  Building2,
  Droplets,
  HeartPulse,
  RefreshCcw,
  ShieldCheck,
  Waves,
  Compass,
  Hammer,
  PencilRuler,
  Phone,
  type LucideIcon,
} from "lucide-react";

export const CONTACT = {
  phoneDisplay: "+91 98410 45670",
  phoneHref: "tel:+919841045670",
  waNumber: "918778000970",
  email: "hello@srvalavanenterprises.in",
  address: "100 Feet Road, Vadapalani, Chennai 600 026",
  hours: "9 AM – 7 PM, all days",
  cities: ["Chennai", "Bengaluru", "Hyderabad", "Kochi", "Elsewhere"],
};

export const waLink = (msg: string) =>
  `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(msg)}`;

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
    copy: "Infinity, lap, plunge and family pools — designed to your site, soil and sun path.",
    tags: ["Infinity edge", "Lap pools", "Plunge pools"],
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
    title: "Spas & Wellness",
    copy: "Jacuzzis, steam, sauna and hydrotherapy courts with silent, serviceable plant rooms.",
    tags: ["Jacuzzi", "Steam & sauna", "Cold plunge"],
    details: [
      "Hydrotherapy jet layouts tuned to shoulder, back and leg lines",
      "Heated plunge + cold plunge contrast circuits",
      "Steam and sauna cabins with hygiene-grade timber and controls",
      "Whisper-quiet plant rooms you never have to think about",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Renovation & Remodel",
    copy: "Leak repair, re-tiling, shape changes and full equipment upgrades for ageing pools.",
    tags: ["Leak repair", "Re-tiling", "Shape change"],
    details: [
      "Pressure testing to find the exact leak point before we dig",
      "Re-waterproofing with a 10-year written warranty",
      "Finish upgrades: mosaic, quartzite, micro-cement or porcelain",
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
    location: "Bengaluru",
    type: "Lap pool · 2024",
    image: IMG.lapLanes,
    copy: "A 20-metre training lane in granite and glass — built for 5 AM rituals.",
  },
  {
    no: "03",
    title: "Palm Courtyard",
    location: "Kochi",
    type: "Courtyard plunge · 2024",
    image: IMG.resort,
    copy: "A shaded plunge court that cools a heritage home by three degrees.",
  },
  {
    no: "04",
    title: "Skyline Plunge",
    location: "Hyderabad",
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
  { icon: Phone, title: "Site visit", copy: "We walk your site, test soil and water, and fix the right pool for the plot." },
  { icon: PencilRuler, title: "Design", copy: "3D views, sun studies and a line-item estimate — no vague lump sums." },
  { icon: Compass, title: "Engineering", copy: "Structural, plumbing and electrical drawings signed off before we dig." },
  { icon: Hammer, title: "Build", copy: "One accountable crew, photo updates every week, tested at every stage." },
  { icon: ShieldCheck, title: "Care", copy: "Handover training, warranties in writing, and AMC that actually shows up." },
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
    place: "Whitefield, Bengaluru",
    initials: "DK",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "How much does a swimming pool cost in Chennai?",
    a: "A compact plunge pool starts around ₹8–10 lakh, a family skimmer pool around ₹14–20 lakh, and a vanishing-edge infinity pool ₹25 lakh and above — equipment and finish included. We give a line-item estimate after a free site visit, so you see exactly where every rupee goes.",
  },
  {
    q: "How long does construction take?",
    a: "A standard residential pool takes 6–8 weeks from excavation to first fill: 1 week civil, 2 weeks shell and waterproofing, 2 weeks tiling and coping, 1–2 weeks equipment, testing and balancing. Renovations typically finish in 2–3 weeks.",
  },
  {
    q: "What maintenance does a pool need?",
    a: "Very little, if it is built right. Weekly skimming, monthly filter backwash and balanced chemistry. Our AMC plans cover all of it with a visit every week and a water-health report on WhatsApp. Salt-chlorinated pools cut chemical handling to near zero.",
  },
  {
    q: "Salt water, chlorine or UV — which is best?",
    a: "For homes we recommend salt chlorination with UV assist: gentle on skin and eyes, no chlorine smell, and lower running cost. Commercial pools get automated liquid dosing for precise control at high bather loads.",
  },
  {
    q: "Do you give warranty and after-service?",
    a: "Yes — 10 years on waterproofing, 5 years on structure, 1–2 years on equipment (as per manufacturer), all in writing. Every project can move onto an annual care plan with priority breakdown visits.",
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
