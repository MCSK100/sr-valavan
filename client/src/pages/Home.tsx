import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Phone,
  Plus,
  Star,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import Seo from "../components/Seo";
import { openQuote } from "../components/Layout";
import {
  Counter,
  ParallaxImage,
  Reveal,
  TiltCard,
  cn,
  handleImgError,
} from "../components/motion";
import {
  CONTACT,
  faqs,
  finishes,
  poolTypes,
  projects,
  quoteServices,
  services,
  steps,
  testimonials,
  waLink,
  whyChooseUs,
} from "../data/content";

/* ---------------- Media ---------------- */
const U = (id: string, w = 2560) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

const media = {
  hero: U("photo-1600596542815-ffad4c1539a9", 3840),
  infinity: U("photo-1613977257363-707ba9348227"),
  resort: U("photo-1571896349842-33c89424de2d"),
  evening: U("photo-1512917774080-9991f1c4c750"),
  detail: U("photo-1600585154340-be6161a56a0c"),
  duskHouse: U("photo-1523217582562-09d0def993a6"),
  lapLanes: U("photo-1530549387789-4c1017266635"),
  interior: U("photo-1600607687939-ce8a6c25118c"),
  film: "https://assets.mixkit.co/videos/20360/20360-720.mp4",
  filmFallback: "https://assets.mixkit.co/videos/23078/23078-720.mp4",
};

/* ---------------- Content (page-specific) ---------------- */
const chapters = [
  {
    id: "01",
    eyebrow: "Infinity & vanishing edge",
    title: (
      <>
        Water can make a building <em>feel weightless.</em>
      </>
    ),
    body: "We design the pool as architecture — a precise line that extends a room, edits a landscape, and turns a view into a daily ritual. Structural engineering, hydraulics and finish are resolved as one drawing, not three.",
    image: media.evening,
    note: "CASA MARINA / ECR",
    facts: [
      { b: "14 m", s: "Vanishing edge" },
      { b: "Salt + UV", s: "Sanitisation" },
      { b: "6 weeks", s: "Shell to fill" },
    ],
  },
  {
    id: "02",
    eyebrow: "Spas & wellness courts",
    title: (
      <>
        The most luxurious room <em>has no walls.</em>
      </>
    ),
    body: "Every SR Valavan spa is calibrated to its setting — stone temperature, wind direction, first light, and the exact way water carries sound. Hydrotherapy jets, heated plunge and steam, tuned to your body's routine.",
    image: media.resort,
    note: "WELLNESS COURT / KOCHI",
    facts: [
      { b: "38 °C", s: "Heated plunge" },
      { b: "12 jets", s: "Hydrotherapy" },
      { b: "Silent", s: "Plant room" },
    ],
  },
  {
    id: "03",
    eyebrow: "Renovation & remodelling",
    title: (
      <>
        Old pools, <em>made inevitable.</em>
      </>
    ),
    body: "Leaking shell? Tired mosaic? We rebuild from the waterproofing up — new hydraulics, modern filtration, LED ritual lighting and finishes that make a 20-year-old pool feel poured yesterday.",
    image: media.detail,
    note: "REBUILD / ADYAR",
    facts: [
      { b: "21 days", s: "Typical refit" },
      { b: "10-yr", s: "Waterproof warranty" },
      { b: "-40%", s: "Running cost" },
    ],
  },
];

function WaveSep({ fill = "var(--white)" }: { fill?: string }) {
  return (
    <div className="wave-sep" aria-hidden>
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
        <path
          className="wave-2"
          fill={fill}
          d="M0,70 C220,20 460,90 720,55 C980,20 1220,85 1440,50 L1440,90 L0,90 Z"
        />
        <path
          fill={fill}
          d="M0,58 C240,95 480,25 720,52 C960,79 1200,30 1440,58 L1440,90 L0,90 Z"
        />
      </svg>
    </div>
  );
}

/* ---------------- Hero (lead-gen split) ---------------- */
function Hero() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", city: "" });
  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="top" className="hero-split">
      <div className="glow-orb glow-a" />
      <div className="glow-orb glow-b" />
      <div className="content-width hero-split-grid">
        <div className="hero-split-copy">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="live">
              <span className="live-dot" /> NOW BUILDING · CHENNAI / COIMBATORE / MADURAI
            </span>
          </motion.div>
          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
          >
            <span className="kicker-rule" /> Luxury pools · Spas · Water landscapes
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.22, ease }}
          >
            Dive into your <em>own paradise.</em>
          </motion.h1>
          <motion.p
            className="hero-dek"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.38, ease }}
          >
            SR Valavan Enterprises designs and builds swimming pools that feel inevitable —
            engineered for Tamil Nadu sun and soil, finished like architecture, and cared for
            for years after the first swim.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
          >
            <motion.a
              href={waLink("Hi SR Valavan Enterprises! I want to enquire about a swimming pool.")}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              WhatsApp us <ArrowRight size={16} />
            </motion.a>
            <Link href="/gallery" className="btn-ghost">
              <span className="play-ring">
                <ArrowUpRight size={16} />
              </span>
              See our work
            </Link>
          </motion.div>
          <motion.div
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.65 }}
          >
            <span className="stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={13} fill="currentColor" />
              ))}
            </span>
            <span>
              <b>4.9</b> from 120+ pool owners · 5+ yrs · Tamil Nadu only
            </span>
          </motion.div>
        </div>

        <motion.div
          className="hero-lead-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
        >
          <div className="hero-lead-media">
            <img src={media.hero} alt="Luxury swimming pool at a villa" onError={handleImgError} />
            <span>Free site visit · 48-hr estimate</span>
          </div>
          <div className="hero-lead-body">
            {sent ? (
              <div className="form-ok">
                <span className="ok-ring">
                  <Check size={28} />
                </span>
                <h3>Request received.</h3>
                <p>
                  Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""} — we will call
                  you back within 48 hours to fix a site visit.
                </p>
                <a
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  href={waLink(
                    `Hi! I requested a quote for ${form.service || "a swimming pool"}. Name: ${form.name}, Phone: ${form.phone}, City: ${form.city}`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Confirm on WhatsApp <ArrowRight size={16} />
                </a>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h3>Get a free quote</h3>
                <p>Estimate within 48 hours. No spam, ever.</p>
                <div className="f-row">
                  <div className="f-field">
                    <label htmlFor="hero-name">Name</label>
                    <input id="hero-name" required placeholder="Your name" value={form.name} onChange={set("name")} />
                  </div>
                  <div className="f-field">
                    <label htmlFor="hero-phone">Phone</label>
                    <input id="hero-phone" required placeholder="+91 …" value={form.phone} onChange={set("phone")} />
                  </div>
                </div>
                <div className="f-row">
                  <div className="f-field">
                    <label htmlFor="hero-service">Service</label>
                    <select id="hero-service" value={form.service} onChange={set("service")}>
                      <option value="">Select…</option>
                      {quoteServices.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="f-field">
                    <label htmlFor="hero-city">City</label>
                    <select id="hero-city" value={form.city} onChange={set("city")}>
                      <option value="">Select…</option>
                      {CONTACT.cities.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request callback <ArrowRight size={16} />
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Sections ---------------- */
function Marquee() {
  const words = [
    "Infinity pools",
    "Spas & jacuzzis",
    "Renovations",
    "Salt systems",
    "AMC & care",
    "Fountains",
  ];
  const row = [...words, ...words];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const items = [
    { to: 5, suffix: " +", label: "Years of experience" },
    { to: 120, suffix: "+", label: "Completed projects" },
    { to: 12, suffix: "", label: "Ongoing projects" },
    { to: 450, suffix: "+", label: "Happy customers" },
  ];
  return (
    <div className="stats-band">
      <div className="content-width stats-grid">
        {items.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="stat">
            <Counter to={s.to} suffix={s.suffix} />
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="content-width">
        <div className="sec-head-split">
          <Reveal>
            <div className="sec-marker">
              01 <span>What we do · One-stop pool solution</span>
            </div>
            <h2 className="sec-title">
              One studio for <em>everything water.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="side">
              Swimming pool construction, readymade FRP pools, fountains & Jacuzzi, filtration,
              accessories, tiling, maintenance and renovation — a single contract, a single
              accountable team, zero finger-pointing.
            </p>
            <button onClick={openQuote} className="link-arrow">
              Get costing details <ArrowUpRight size={14} />
            </button>
          </Reveal>
        </div>
        <div className="svc-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <motion.article
                className="svc-card"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <div className="svc-icon">
                  <s.icon size={26} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <ul className="svc-tags">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <a href="#contact" className="svc-go">
                  Enquire <ArrowRight size={13} />
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section id="why-us" className="section">
      <div className="content-width">
        <Reveal>
          <div className="sec-marker">
            02 <span>Why choose us</span>
          </div>
          <h2 className="sec-title">
            A pool partner, <em>not just a contractor.</em>
          </h2>
          <p className="sec-lede">
            From salt-clean water to on-time crews and priority repairs — everything is handled
            under one roof, so you simply swim.
          </p>
        </Reveal>
        <div className="why-grid">
          {whyChooseUs.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.08}>
              <div className="why-card">
                <div className="svc-icon">
                  <w.icon size={24} />
                </div>
                <h3>{w.title}</h3>
                <p>{w.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div style={{ marginTop: 30 }}>
            <button onClick={openQuote} className="link-arrow">
              Get pricing details <ArrowUpRight size={14} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PoolTypes() {
  return (
    <section id="pool-types" className="section">
      <div className="content-width">
        <div className="sec-head-split">
          <Reveal>
            <div className="sec-marker">
              03 <span>Wide range of pools</span>
            </div>
            <h2 className="sec-title">
              Every site has <em>its water.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="side">
              Infinity, readymade FRP, skimmer, in-ground, above-ground and terrace plunge —
              we match the pool type to your space, soil, load and budget.
            </p>
          </Reveal>
        </div>
        <div className="type-grid">
          {poolTypes.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.07}>
              <div className="type-card">
                <em>0{i + 1}</em>
                <b>{t.name}</b>
                <span>{t.desc}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const items = projects;
  return (
    <section id="Work-gallery" className="section">
      <div className="content-width">
        <div className="sec-head-split">
          <Reveal>
            <div className="sec-marker">
              04 <span>Work gallery</span>
            </div>
            <h2 className="sec-title">
              Recent <em>projects.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="side">
              Infinity edges, terrace plunges and resort lagoons across Chennai, Coimbatore,
              Madurai and Trichy. Tap any image to view it large.
            </p>
          </Reveal>
        </div>
        <div className="gallery-grid">
          {items.map((p, i) => (
            <Reveal key={p.no} delay={(i % 3) * 0.07}>
              <button className="gallery-item" onClick={() => setActive(i)} aria-label={`View ${p.title}`}>
                <img src={p.image} alt={`${p.title} — ${p.location}`} loading="lazy" onError={handleImgError} />
                <span>{p.location} · {p.type}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label="Project image viewer">
          <button onClick={() => setActive(null)} aria-label="Close viewer"><X size={20} /></button>
          <div onClick={(e) => e.stopPropagation()}>
            <img src={items[active].image} alt={`${items[active].title} — ${items[active].location}`} onError={handleImgError} />
            <p>{items[active].title} — {items[active].location} · {items[active].type}</p>
          </div>
        </div>
      )}
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section work">
      <div className="content-width">
        <div className="sec-head-split">
          <Reveal>
            <div className="sec-marker">
              02 <span>Selected work</span>
            </div>
            <h2 className="sec-title">
              Three ways <em>into the blue.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="side">
              Some pools disappear into the landscape. Others frame it. We are interested in
              the moment they become the same thing.
            </p>
          </Reveal>
        </div>
        <div className="chapters">
          {chapters.map((c, i) => (
            <article key={c.id} className={cn("chapter", i % 2 === 1 && "flip")}>
              <Reveal>
                <ParallaxImage src={c.image} alt={c.note} label={c.note} />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="chapter-text">
                  <span className="chapter-index">
                    {c.id} <i />
                  </span>
                  <p className="chapter-eyebrow">{c.eyebrow}</p>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <div className="chapter-facts">
                    {c.facts.map((f) => (
                      <div key={f.s}>
                        <b>{f.b}</b>
                        <span>{f.s}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className="link-arrow">
                    Start a similar project <ArrowUpRight size={14} />
                  </a>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const items = projects.slice(0, 3);
  return (
    <section className="section">
      <div className="content-width">
        <div className="sec-head-split">
          <Reveal>
            <div className="sec-marker">
              03 <span>The index</span>
            </div>
            <h2 className="sec-title">
              Recent <em>work.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="side">
              Three places where water became the organising idea. Hover a card — it tilts in
              3D. Every project below was designed, built and is still maintained by us.
            </p>
          </Reveal>
        </div>
        <div className="portfolio-grid">
          {items.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.1}>
              <TiltCard>
                <a href="#contact" className="proj">
                  <div className="proj-img">
                    <img src={p.image} alt={p.title} onError={handleImgError} loading="lazy" />
                    <span className="proj-no">{p.no}</span>
                    <span className="proj-arrow">
                      <ArrowUpRight size={18} />
                    </span>
                    <span className="proj-loc">{p.location}</span>
                  </div>
                  <div className="proj-meta">
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.copy}</p>
                    </div>
                    <span>{p.type}</span>
                  </div>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilmBand() {
  const [ok, setOk] = useState(true);
  return (
    <section className="film-band" aria-label="Swimming pool film, shot on site">
      {ok ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={media.resort}
          onError={() => setOk(false)}
        >
          <source src={media.film} type="video/mp4" />
          <source src={media.filmFallback} type="video/mp4" />
        </video>
      ) : (
        <img src={media.resort} alt="Resort pool lined with palms" onError={handleImgError} />
      )}
      <div className="film-wash" />
      <div className="content-width film-caption">
        <Reveal>
          <p className="film-kicker">Field film / golden hour</p>
          <h2>
            Shot on site, <em>not staged.</em>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

function Materials() {
  return (
    <section className="section materials">
      <div className="content-width">
        <Reveal>
          <div className="sec-marker on-dark">
            04 <span>Material / atmosphere</span>
          </div>
          <h2 className="sec-title on-dark-title" style={{ color: "#fff" }}>
            What the water <em>remembers.</em>
          </h2>
          <p className="sec-lede" style={{ color: "rgba(255,255,255,.68)" }}>
            The finish is the first thing the hand reads and the last thing the eye leaves.
            A small palette of honest, heat-proof materials — sampled at your site before you
            commit.
          </p>
        </Reveal>
        <div className="finish-banner">
          <Reveal>
            <ParallaxImage
              src={media.duskHouse}
              alt="Pool edge glowing at dusk"
              label="FINISH STUDY / DUSK LIGHT"
            />
          </Reveal>
        </div>
        <div className="finish-index">
          {finishes.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.05}>
              <div className="finish-row">
                <span className="finish-no">{String(i + 1).padStart(2, "0")}</span>
                <span className="finish-dot" style={{ background: f.color }} />
                <div className="finish-copy">
                  <h3>{f.name}</h3>
                  <p>{f.desc}</p>
                </div>
                <a href="#contact" className="finish-arrow" aria-label={`Enquire about ${f.name}`}>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <a href="#contact" className="link-arrow link-arrow-light">
            Feel free samples at your site visit <ArrowUpRight size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section">
      <div className="content-width">
        <Reveal>
          <div className="sec-marker">
            05 <span>How we work</span>
          </div>
          <h2 className="sec-title">
            From first visit <em>to first swim.</em>
          </h2>
        </Reveal>
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="step">
                <span className="sicon">
                  <s.icon size={22} />
                </span>
                <span className="num">0{i + 1}</span>
                <h4>{s.title}</h4>
                <p>{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="section testi">
      <div className="content-width">
        <Reveal>
          <div className="sec-marker">
            06 <span>Client words</span>
          </div>
          <h2 className="sec-title">
            Loved <em>after the fill.</em>
          </h2>
        </Reveal>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.09}>
              <motion.figure
                className="quote"
                whileHover={{ y: -6, rotate: -0.4 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                <span className="stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} fill="currentColor" />
                  ))}
                </span>
                <p>“{t.quote}”</p>
                <footer>
                  <span className="avatar">{t.initials}</span>
                  <div>
                    <b>{t.name}</b>
                    <span>{t.place}</span>
                  </div>
                </footer>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section">
      <div className="content-width">
        <Reveal>
          <div className="sec-marker">
            07 <span>Good to know</span>
          </div>
          <h2 className="sec-title">
            Questions, <em>answered.</em>
          </h2>
        </Reveal>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <div className={cn("faq", open === i && "open")}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  {f.q}
                  <span className="plus">
                    <Plus size={17} />
                  </span>
                </button>
                <div className="faq-a">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-bg">
        <img src={media.interior} alt="" aria-hidden onError={handleImgError} loading="lazy" />
      </div>
      <div className="content-width contact-inner" style={{ gridTemplateColumns: "1fr", maxWidth: 760 }}>
        <Reveal className="contact-copy">
          <div className="sec-marker on-dark">
            08 <span>Begin your pool</span>
          </div>
          <h2>
            Make room <em>for water.</em>
          </h2>
          <p>
            Tell us where the site is and what you are dreaming of. We will visit, measure,
            and return a considered design + line-item estimate within 48 hours.
          </p>
          <div className="contact-points">
            <a href="tel:+917871831029">
              <Phone size={17} /> +91 78718 31029 (9 AM – 7 PM, all days)
            </a>
            <a href={waLink("Hi! I want a free pool quote.")} target="_blank" rel="noreferrer">
              <Phone size={17} /> WhatsApp us — Chat now
            </a>
            <a href="mailto:hello@srvalavanenterprises.in">
              <Mail size={17} /> hello@srvalavanenterprises.in
            </a>
            <div>
              <MapPin size={17} /> 100 Feet Road, Vadapalani, Chennai 600 026
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
export default function Home() {
  return (
    <main>
      <Seo
        title="SR Valavan Enterprises — Luxury Swimming Pools, Spas & Water Landscapes"
        description="SR Valavan Enterprises designs & builds luxury swimming pools, spas and water landscapes across Chennai, Coimbatore, Madurai & Trichy. 120+ pools, 5 years, free site visit."
        path="/"
      />
      <Hero />
      <Marquee />
      <WaveSep fill="var(--white)" />
      <Stats />
      <Services />
      <WhyChoose />
      <PoolTypes />
      <Work />
      <Gallery />
      <Portfolio />
      <FilmBand />
      <Materials />
      <WaveSep fill="var(--paper)" />
      <Process />
      <Reviews />
      <Faq />
      <Contact />
    </main>
  );
}
