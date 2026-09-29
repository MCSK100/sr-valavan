import { ArrowRight, ArrowUpRight, Check, Plus, Star } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "wouter";
import { CtaBand, openQuote } from "../components/Layout";
import Seo from "../components/Seo";
import { Counter, Reveal, cn, handleImgError } from "../components/motion";
import { DiskPlayer, FloatFly, RollingWord, SplitLetters, useFanSpread, useTileReveal } from "../components/story";
import { CONTACT, faqs, finishes, projects, services, steps, testimonials, waLink } from "../data/content";

const U = (id: string, w = 1600) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;
const media = {
  heroPool: U("photo-1600596542815-ffad4c1539a9", 2000),
  infinity: U("photo-1613977257363-707ba9348227"),
  resort: U("photo-1571896349842-33c89424de2d"),
  evening: U("photo-1512917774080-9991f1c4c750"),
  detail: U("photo-1600585154340-be6161a56a0c"),
  lap: U("photo-1530549387789-4c1017266635"),
  dusk: U("photo-1523217582562-09d0def993a6"),
};

function Hero() {
  useTileReveal();
  return (
    <section className="hero" aria-label="SR Valavan hero">
      <img className="hero-shader" src={media.heroPool} alt="" aria-hidden onError={handleImgError} />
      <div className="hero-noise" />
      <div className="hero-content">
        <div className="sun-group" aria-hidden><div className="sun-core" /></div>
        <div className="hero-cloud cloud-a" />
        <div className="hero-cloud cloud-b" />
        <p className="hero-eyebrow"><i /> Hello, we&apos;re SR Valavan · Pools in Tamil Nadu</p>
        <span className="hero-vertical">DESIGN / DETAILS / DIVE — EST. COIMBATORE</span>
        <h1 style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
          SR Valavan Enterprises — swimming pool construction in Tamil Nadu
        </h1>
        <div className="h-line multidisciplinary" aria-hidden><SplitLetters text="Swimming pools" /></div>
        <div className="h-line designer" aria-hidden><RollingWord /></div>
        <DiskPlayer />
      </div>
      <img className="hero-pool-img" src={media.infinity} alt="Infinity pool built by SR Valavan" onError={handleImgError} />
    </section>
  );
}

function Intro() {
  return (
    <section className="projects" id="story">
      <div className="sky-band" aria-hidden />
      <p className="intro-copy">
        Six years across villas, resorts and rooftops — designing what&apos;s next, from a 14-metre
        vanishing edge on ECR to silent salt-water plunge courts in Coimbatore.
        <span className="bold">We believe every great pool is the start of an even greater summer — and we&apos;re here to keep building yours.</span>
      </p>
    </section>
  );
}

function FeaturedWork() {
  const rows = [
    [projects[0], projects[1]],
    [projects[2], projects[3]],
  ];
  return (
    <section className="featured-work" id="featured">
      <div id="plane-host" style={{ position: "relative" }}>
        <FloatFly containerId="plane-host" />
        <h2 className="featured-heading">Work splashing across Tamil Nadu</h2>
        <div className="logo-marquee-wrap" aria-label="Service areas">
          <div className="logo-marquee-inner">
            {[0, 1].map((dup) => (
              <span key={dup} style={{ display: "flex", gap: 56 }}>
                {["Infinity pools", "Villa plunges", "Resort lagoons", "Rooftop dips", "Spas & Jacuzzi", "Fountains"].map((w) => (
                  <span key={`${dup}-${w}`} className="client-logo"><i>✦</i> {w}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <div className="project-tiles">
          {rows.map((row, ri) => (
            <div key={ri} className="tiles-row">
              {row.map((p, i) => (
                <Link
                  key={p.no}
                  href="/gallery"
                  className={cn("project-tile", i === 0 ? "tile-wide" : "tile-narrow")}
                  aria-label={`${p.title} — ${p.location}`}
                >
                  <img src={p.image} alt={`${p.title} — ${p.location}`} loading="lazy" onError={handleImgError} />
                  <span className="tile-overlay">
                    <span className="tile-overlay-title">{p.title}</span>
                    <span className="tile-overlay-subtitle">{p.copy}<br />{p.location} · {p.type}</span>
                    <span className="tile-cta">View project <ArrowUpRight size={14} /></span>
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LagoonTestimonials() {
  const ref = useRef<HTMLElement>(null);
  const spread = useFanSpread(ref);
  const cards = testimonials.slice(0, 3);
  return (
    <>
      <section className="testimonials" ref={ref} aria-label="Client words">
        <svg className="t-wavy" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <path d="M0,70 C240,110 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z" fill="#0d4a5c" />
        </svg>
        <div className="t-willow"><div className="t-willow-sway" /></div>
        <div className="t-land" />
        <div className="t-inner">
          <p className="t-eyebrow">TESTIMONIALS</p>
          <h2 className="t-heading">In their words — after the fill</h2>
          <div className="t-cards" style={{ ["--spread" as string]: spread }}>
            {cards.map((t, i) => (
              <figure key={t.name} className="t-card" style={{ ["--pos" as string]: i - 1, zIndex: i === 1 ? 3 : 2 }}>
                <span style={{ fontSize: 40, lineHeight: 1, opacity: 0.35 }}>“</span>
                <blockquote className="t-quote">{t.quote}</blockquote>
                <hr className="t-divider" />
                <div className="t-authorrow">
                  <span className="t-avatar">{t.initials}</span>
                  <span><span className="t-name">{t.name}</span><br /><span className="t-role">{t.place}</span></span>
                </div>
              </figure>
            ))}
          </div>
          <Link href="/gallery" style={{ marginTop: 26, color: "#f4d24a", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.14em" }}>
            SWIM THROUGH ALL 120+ POOLS →
          </Link>
        </div>
      </section>
      <div className="t-scrub" aria-hidden />
    </>
  );
}

function AboutStory() {
  const [todos, setTodos] = useState([
    { label: "Try midnight LED swim", done: true },
    { label: "Complete ECR infinity handover", done: true },
    { label: "Salt-water conversion", done: false },
    { label: "Rooftop plunge in Trichy", done: false },
    { label: "Monsoon AMC visits", done: false },
  ]);
  return (
    <section className="about-sec" id="about">
      <div className="content-width">
        <div className="about-grid">
          <Reveal>
            <div className="sec-marker">02 · Who builds</div>
            <h2 className="about-title">We trained as civil builders. Now we craft <em>water people want to live in.</em></h2>
            <p className="about-copy">
              6+ years, 120+ pools, 4.9★ from homeowners, resorts and clubs. We bring something most
              contractors don&apos;t — <b>a structural way of thinking</b>: shell, hydraulics, filtration and
              finish resolved as one drawing. Salt + UV as standard, silent plant rooms, 10-year waterproof warranty.
            </p>
            <div className="exp-list">
              <div className="exp-row"><div><h4>Lead pool studio — villas, resorts, rooftops</h4><p>End-to-end design + build: soil study, RCC shell, waterproofing, tiling, equipment, balancing. 6–8 weeks home pools, 7–12 days readymade FRP.</p></div><span>2021 — NOW</span></div>
              <div className="exp-row"><div><h4>Renovation & AMC crew</h4><p>Leak rebuilds in 21 days, tile + LED + feature upgrades, weekly AMC with WhatsApp water-health reports across Chennai → Coimbatore.</p></div><span>120+ REFITS</span></div>
              <div className="exp-row"><div><h4>Commercial & institutional</h4><p>Resort lagoons, club lanes, therapy suites — balance tanks, auto-dosing, safety decks, event lighting.</p></div><span>HOTELS · CLUBS</span></div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="about-photos">
              <img src={media.evening} alt="Evening swim" onError={handleImgError} />
              <img src={media.resort} alt="Resort lagoon" onError={handleImgError} />
              <img src={media.lap} alt="Training lane" onError={handleImgError} />
            </div>
            <div className="play-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 18 }}>
              <div className="play-card">
                <h4>Site-week To-do</h4>
                <ul>
                  {todos.map((td, i) => (
                    <li key={td.label} className={cn(td.done && "done")}>
                      <label onClick={() => setTodos((p) => p.map((x, xi) => (xi === i ? { ...x, done: !x.done } : x)))}>
                        <span className="todo-dot">{td.done ? <Check size={11} /> : null}</span>
                        <span className="txt">{td.label}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="play-card">
                <h4>“Chlorine is in the details.”</h4>
                <p>— our site riff on Mies van der Rohe. Balanced water, aligned tiles, silent pumps. God lives at the waterline.</p>
                <p style={{ fontFamily: "var(--mono)", fontSize: 11, marginTop: 8 }}>pH 7.2 · SALT 3200ppm · 38°C PLUNGE</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Playground() {
  return (
    <section className="playground" aria-label="Playground">
      <div className="content-width">
        <div className="sec-marker">03 · Playground</div>
        <h2 className="sec-title">Finish studies, <em>light moods.</em></h2>
        <p className="sec-lede">Each card is a small study in material, light and movement — drag sideways. Every finish is sampled at your site before you commit.</p>
      </div>
      <div className="pg-track">
        {finishes.map((f) => (
          <article key={f.name} className="pg-card">
            <div style={{ height: 210, background: f.color, display: "grid", placeItems: "center", fontSize: 54 }}>≋</div>
            <div><b>{f.name}</b><p>{f.desc}</p></div>
          </article>
        ))}
        <article className="pg-card">
          <img src={media.dusk} alt="Dusk light study" onError={handleImgError} />
          <div><b>Dusk-light study</b><p>3000K LEDs at 20% — the hour your pool earns its keep.</p></div>
        </article>
        <article className="pg-card">
          <img src={media.detail} alt="Pebble detail" onError={handleImgError} />
          <div><b>Waterline detail</b><p>Hand-set mosaic vs micro-cement — same sun, two moods.</p></div>
        </article>
      </div>
    </section>
  );
}

function ServicesStrip() {
  return (
    <section className="section" id="services">
      <div className="content-width">
        <Reveal><div className="sec-marker">01 · What we do</div>
          <h2 className="sec-title">Complete pool <em>solutions.</em></h2>
          <p className="sec-lede">Custom pools, infinity edges, plunge courts, spas, fountains, renovation + AMC — planned around your plot and lifestyle.</p>
        </Reveal>
        <div className="svc-grid">
          {services.slice(0, 6).map((s) => (
            <Reveal key={s.title}>
              <article className="svc-card">
                <div className="svc-icon"><s.icon size={24} /></div>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <ul className="svc-tags">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <button onClick={openQuote} className="link-arrow">Enquire <ArrowRight size={13} /></button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { to: 6, suffix: " +", label: "Years of splashes" },
    { to: 120, suffix: "+", label: "Pools handed over" },
    { to: 12, suffix: "", label: "Live sites today" },
    { to: 49, suffix: "★", label: "4.9 from owners" },
  ];
  return (
    <div className="stats-band">
      <div className="content-width stats-grid">
        {items.map((s) => (
          <div key={s.label} className="stat"><Counter to={s.to} suffix={s.suffix} /><span>{s.label}</span></div>
        ))}
      </div>
    </div>
  );
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="content-width">
        <div className="sec-marker">04 · Idea → Plan → Build → Swim</div>
        <h2 className="sec-title">Our pool <em>process.</em></h2>
        <div className="steps">
          {steps.slice(0, 4).map((s, i) => (
            <div key={s.title} className="step"><span className="num">0{i + 1}</span><h4>{s.title}</h4><p>{s.copy}</p></div>
          ))}
        </div>
        <button onClick={openQuote} className="link-arrow">Start with a free site visit <ArrowUpRight size={14} /></button>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="content-width">
        <div className="sec-marker">05 · Good to know</div>
        <h2 className="sec-title">Questions, <em>answered.</em></h2>
        <div className="faq-list">
          {faqs.slice(0, 6).map((f, i) => (
            <div key={f.q} className={cn("faq", open === i && "open")}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>{f.q}<span className="plus"><Plus size={16} /></span></button>
              <div className="faq-a"><div><p>{f.a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "" });
  return (
    <section className="contact-sec" id="contact">
      <div className="content-width contact-inner">
        <Reveal>
          <div className="sec-marker" style={{ color: "var(--gold-soft)" }}>06 · Ready to dive</div>
          <div className="contact-copy"><h2>Let&apos;s turn your plot <em>into water.</em></h2>
            <p style={{ opacity: 0.75, lineHeight: 1.8 }}>Villa, rooftop, farmhouse or resort — share your plot sketch on WhatsApp, get two fitting options + pricing within 48 hours.</p>
          </div>
          <div className="contact-points">
            <a href={CONTACT.phoneHref}>📞 {CONTACT.phoneDisplay} · {CONTACT.hours}</a>
            <a href={waLink("Hi! I want a free pool quote.")} target="_blank" rel="noreferrer">💬 WhatsApp us — chat now</a>
            <div>📍 {CONTACT.address}</div>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 18, alignItems: "center", fontSize: 13, opacity: 0.8 }}>
            <span style={{ display: "inline-flex", color: "var(--gold-soft)" }}>{Array.from({ length: 5 }).map((_, s) => <Star key={s} size={13} fill="currentColor" />)}</span>
            <span><b>4.9</b> from 120+ pool owners</span>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="contact-form">
            {sent ? (
              <div style={{ textAlign: "center", padding: 20 }}>
                <span style={{ width: 64, height: 64, borderRadius: "50%", display: "grid", placeItems: "center", background: "#0a8a99", color: "#fff", margin: "0 auto 14px" }}><Check size={26} /></span>
                <h3>Request received.</h3>
                <p style={{ opacity: 0.65 }}>We&apos;ll call back within 48 hours to fix a site visit.</p>
                <a className="btn-primary" href={waLink(`Hi! Callback for ${form.city}. Name: ${form.name}, Phone: ${form.phone}`)} target="_blank" rel="noreferrer">Confirm on WhatsApp <ArrowRight size={15} /></a>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <h3>Get a free quote</h3>
                <p style={{ opacity: 0.6, fontSize: 13.5 }}>Estimate within 48 hours. No spam, ever.</p>
                <div className="f-field"><label>Name</label><input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
                <div className="f-row">
                  <div className="f-field"><label>Phone</label><input required placeholder="+91 …" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
                  <div className="f-field"><label>City</label><input placeholder="Chennai…" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} /></div>
                </div>
                <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} type="submit">Request callback <ArrowRight size={15} /></button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Seo title="SR Valavan Enterprises — Swimming Pools That Feel Like Holidays" description="Custom pools, infinity edges, plunge courts, spas & fountains across Tamil Nadu. 120+ pools, 4.9★, 10-year waterproof warranty." path="/" />
      <Hero />
      <Intro />
      <FeaturedWork />
      <LagoonTestimonials />
      <AboutStory />
      <Playground />
      <Stats />
      <ServicesStrip />
      <Process />
      <Faq />
      <Contact />
    </main>
  );
}

