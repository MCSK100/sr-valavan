import { ArrowRight, ArrowUpRight, Check, Plus, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { CtaBand, openQuote } from "../components/Layout";
import Seo from "../components/Seo";
import { Counter, Reveal, cn, handleImgError } from "../components/motion";
import { DiskPlayer, FloatFly, RollingWord, SplitLetters, useTileReveal } from "../components/story";
import { CONTACT, buildSteps, faqs, finishes, poolTypes, projects, services, waLink, whyChooseUs } from "../data/content";

const U = (id: string, w = 1600) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;
const media = {
  heroPool: U("photo-1512917774080-9991f1c4c750", 3840),
  infinity: U("photo-1613977257363-707ba9348227", 2400),
  resort: U("photo-1540541338287-41700207dee6"),
  evening: U("photo-1584132967334-10e028bd69f7"),
  detail: U("photo-1572331165267-854da2b10ccc"),
  lap: U("photo-1530549387789-4c1017266635"),
  dusk: U("photo-1613977257592-4871e5fcd7c4"),
  villa: U("photo-1520250497591-112f2f40a3f4"),
  hotel: U("photo-1520607162513-77705c0f0d4a"),
  tropical: U("photo-1520250497591-112f2f40a3f4"),
  vanishing: U("photo-1576013551627-0cc20b96c2a7"),
  float: U("photo-1519974719765-e6559eac2575"),
  mosaic: U("photo-1572331165267-854da2b10ccc"),
  interior: U("photo-1575429198097-0414ec08e8cd"),
  lagoon: U("photo-1571896349842-33c89424de2d"),
  swimmer: U("photo-1520607162513-77705c0f0d4a"),
  aerial: U("photo-1519974719765-e6559eac2575"),
  indoor: U("photo-1575429198097-0414ec08e8cd"),
};

const svcImages = [media.heroPool, media.infinity, media.villa, media.resort, media.aerial, media.evening, media.swimmer];
const typeImages = [media.infinity, media.villa, media.lagoon, media.vanishing];

function Hero() {
  useTileReveal();
  return (
    <section className="hero" aria-label="SR Valavan hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={media.heroPool}
        aria-hidden
      >
        <source src="/herosec_video.mp4" type="video/mp4" />
      </video>
      <div className="hero-wash" aria-hidden />
      <div className="hero-noise" />
      <div className="hero-content">
        <div className="sun-group" aria-hidden><div className="sun-core" /></div>
        <div className="hero-cloud cloud-a" />
        <div className="hero-cloud cloud-b" />
        <p className="hero-eyebrow"><i /> Swimming pool design & construction</p>
        <span className="hero-vertical">YOUR SPACE · YOUR POOL · YOUR ESCAPE</span>
        <h1 style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
          SR Vallavan Enterprises — Your Dream Pool. Built to Perfection.
        </h1>
        <div className="h-line multidisciplinary" aria-hidden><SplitLetters text="Your Dream Pool." /></div>
        <div className="h-line designer" aria-hidden><RollingWord words={["Built to Perfection.", "Built Around You.", "Built to Last."]} /></div>
        <DiskPlayer />
        <div className="hero-cta-block">
          <p>Transform your space into a place to relax, refresh and reconnect — custom residential pools to elegant commercial projects, made for your lifestyle.</p>
          <div>
            <button onClick={openQuote} className="btn-primary">Get a Free Quote <ArrowRight size={15} /></button>
            <Link href="/gallery" className="btn-ghost" style={{ color: "#fff" }}><span className="play-ring"><ArrowUpRight size={15} /></span> View Our Projects</Link>
          </div>
          <span>Custom Designs • Quality Construction • Professional Workmanship</span>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="projects" id="story">
      <div className="sky-band" aria-hidden />
      <p className="intro-copy">
        More than a swimming pool. <em style={{ fontStyle: "italic", color: "var(--pool)" }}>We build your space to enjoy.</em>
        <span className="bold">Thoughtful design · Quality construction · Attention to detail — from concept to final finish.</span>
      </p>
      <div className="content-width" style={{ maxWidth: 720, margin: "34px auto 0", textAlign: "center" }}>
        <p style={{ color: "var(--ink-soft)", lineHeight: 1.85, margin: "0 auto", maxWidth: "62ch" }}>
          A well-designed swimming pool can transform an ordinary space into your own private escape.
          From the initial concept to the final finish, we focus on delivering a pool that looks beautiful,
          performs reliably and fits your requirements.
        </p>
        <button onClick={openQuote} className="link-arrow" style={{ marginTop: 26 }}>Let&apos;s Build Your Pool <ArrowRight size={14} /></button>
      </div>
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
        <div className="content-width" style={{ textAlign: "center" }}>
          <div className="sec-marker" style={{ justifyContent: "center" }}>07 · Selected work</div>
        </div>
        <h2 className="featured-heading">Pools we&apos;ve built. <em style={{ fontStyle: "italic" }}>Spaces we&apos;ve transformed.</em></h2>
        <p style={{ textAlign: "center", color: "var(--ink-soft)", maxWidth: "60ch", margin: "0 auto 30px", lineHeight: 1.75, padding: "0 24px" }}>
          Explore our completed swimming pool projects and discover the quality, creativity and craftsmanship behind every build.
        </p>
        <div className="logo-marquee-wrap" aria-label="Project categories">
          <div className="logo-marquee-inner">
            {[0, 1].map((dup) => (
              <span key={dup} style={{ display: "flex", gap: 56 }}>
                {["Residential Pools", "Villa Pools", "Farmhouse Pools", "Infinity Pools", "Commercial Pools", "Resort Pools", "Renovation Projects"].map((w) => (
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="/gallery" className="tile-cta" style={{ margin: "34px auto 0" }}>Explore Our Projects <ArrowUpRight size={14} /></Link>
        </div>
      </div>
    </section>
  );
}

function PremiumImage() {
  return (
    <section className="premium-band" aria-label="Imagine your pool">
      <img src={media.evening} alt="Luxury swimming pool at dusk" loading="lazy" onError={handleImgError} />
      <div className="premium-wash" />
      <div className="content-width premium-caption">
        <Reveal>
          <h2>Imagine It. Design It. <em>Dive Into It.</em></h2>
          <p>Your perfect pool is closer than you think.</p>
          <button onClick={openQuote} className="btn-primary" style={{ marginTop: 22 }}>Start Your Pool Project <ArrowRight size={15} /></button>
        </Reveal>
      </div>
    </section>
  );
}

function FilmBand() {
  return (
    <section className="film-band" aria-label="See our pools in motion">
      <video autoPlay muted loop playsInline preload="metadata" poster={media.heroPool}>
        <source src="/herosec_video.mp4" type="video/mp4" />
      </video>
      <div className="film-wash" />
      <div className="content-width film-caption">
        <Reveal>
          <p className="film-kicker">Real water · Real sites</p>
          <h2>Watch a pool <em>come to life.</em></h2>
          <p className="film-sub">From steel and shell to first swim — this is the finish, flow and light we build into every SR Vallavan pool.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <button onClick={openQuote} className="btn-primary">Get a Free Quote <ArrowRight size={15} /></button>
            <Link href="/gallery" className="btn-ghost" style={{ color: "#fff" }}>View Our Projects <ArrowUpRight size={15} /></Link>
          </div>
        </Reveal>
      </div>
    </section>
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
            <div className="sec-marker">01 · Who builds</div>
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
        <div className="sec-marker">05 · Finishes</div>
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
        <Reveal><div className="sec-marker">02 · What we do</div>
          <h2 className="sec-title">Complete Swimming Pool <em>Solutions.</em></h2>
          <p className="sec-lede">Designed around your space. Built around your needs.</p>
        </Reveal>
        <div className="svc-grid">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <article className="svc-card" style={{ padding: 0, overflow: "hidden" }}>
                <img src={svcImages[i % svcImages.length]} alt={s.title} loading="lazy" onError={handleImgError} style={{ height: 190, width: "100%", objectFit: "cover", borderBottom: "1px solid #323131" }} />
                <div style={{ padding: "24px 24px 26px" }}>
                  <div className="svc-icon"><s.icon size={24} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.copy}</p>
                  <ul className="svc-tags">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                  <div style={{ display: "flex", gap: 16, marginTop: 6, flexWrap: "wrap" }}>
                    <button onClick={openQuote} className="link-arrow">Enquire <ArrowRight size={13} /></button>
                    <Link href="/services" className="link-arrow">All services <ArrowUpRight size={13} /></Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="statement-band" aria-label="Our promise">
      <div className="content-width">
        <Reveal>
          <p className="statement-kicker">Every pool begins with an idea</p>
          <h2>Designed to Impress. <em>Built to Last.</em></h2>
          <p>We turn that idea into a space you&apos;ll love coming back to.</p>
          <div><span>Design</span><i>→</i><span>Construction</span><i>→</i><span>Finishing</span><i>→</i><span>Final Handover</span></div>
        </Reveal>
      </div>
    </section>
  );
}

function PoolTypes() {
  return (
    <section className="section" id="pool-types" style={{ paddingTop: 20 }}>
      <div className="content-width">
        <Reveal><div className="sec-marker">04 · Pool designs</div>
          <h2 className="sec-title">Find the pool that fits <em>your vision.</em></h2>
          <p className="sec-lede">Modern. Elegant. Personal.</p>
        </Reveal>
        <div className="type-img-grid">
          {poolTypes.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.07}>
              <article className="type-img-card">
                <img src={typeImages[i % typeImages.length]} alt={t.name} loading="lazy" onError={handleImgError} />
                <div><em>0{i + 1}</em><b>{t.name}</b><span>{t.desc}</span></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section" id="why-us">
      <div className="content-width">
        <Reveal><div className="sec-marker">03 · Why us</div>
          <h2 className="sec-title">Why choose <em>SR Vallavan Enterprises?</em></h2>
          <p className="sec-lede">Quality you can see. Craftsmanship you can trust.</p>
        </Reveal>
        <Reveal>
          <div className="why-banner">
            <img src={media.tropical} alt="Finished pool deck" loading="lazy" onError={handleImgError} />
            <span>STRONG SHELL · LEAK-PROOF · ON TIME</span>
          </div>
        </Reveal>
        <div className="why-grid">
          {whyChooseUs.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.08}>
              <div className="why-card"><div className="svc-icon"><w.icon size={24} /></div><h3>{w.title}</h3><p>{w.copy}</p></div>
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
    <section className="build-band" id="process" aria-label="Our pool construction process">
      <div className="content-width">
        <Reveal>
          <p className="build-title">Our pool construction process</p>
          <h2 className="build-flow">Idea <i>→</i> Plan <i>→</i> Build <i>→</i> Swim</h2>
          <p className="build-lede">Eight stages, photo-documented and clearly communicated at every one — tell us what you&apos;re imagining, we&apos;ll help you build it.</p>
        </Reveal>
        <div className="build-grid">
          {buildSteps.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.07}>
              <article className="build-card">
                <div className="build-img">
                  <img src={s.image} alt={s.title} loading="lazy" onError={handleImgError} />
                  <span className="build-num">{i + 1}</span>
                </div>
                <div className="build-body">
                  <h4>{s.title}</h4>
                  <p>{s.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
            <button onClick={openQuote} className="btn-primary">Start with a free site visit <ArrowUpRight size={14} /></button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="content-width">
        <div className="sec-marker">09 · FAQ</div>
        <h2 className="sec-title">Frequently asked <em>questions.</em></h2>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={f.q} className={cn("faq", open === i && "open")}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>{f.q}<span className="plus"><Plus size={16} /></span></button>
              <div className="faq-a"><div><p>{f.a}</p></div></div>
            </div>
          ))}
        </div>
        <Link href="/faq" className="link-arrow">All {faqs.length} questions <ArrowUpRight size={14} /></Link>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section className="section" id="service-area" style={{ paddingTop: 20 }}>
      <div className="content-width" style={{ textAlign: "center" }}>
        <Reveal>
          <div className="sec-marker" style={{ justifyContent: "center" }}>08 · Where we build</div>
          <h2 className="sec-title" style={{ marginInline: "auto" }}>Building pools across <em>Tamil Nadu.</em></h2>
          <p className="sec-lede" style={{ marginInline: "auto" }}>From private homes and villas to resorts and commercial properties — swimming pool construction solutions tailored to each project.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginTop: 30 }}>
            {CONTACT.cities.concat(["Tamil Nadu"]).map((c) => (
              <span key={c} style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", padding: "12px 22px", borderRadius: 100, background: "var(--paper)", border: "1px solid #323131", boxShadow: "3px 3px 0 #323131" }}>{c}</span>
            ))}
          </div>
          <button onClick={openQuote} className="link-arrow" style={{ marginTop: 30 }}>Check your area <ArrowUpRight size={14} /></button>
        </Reveal>
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
          <div className="sec-marker" style={{ color: "var(--gold-soft)" }}>10 · Final call</div>
          <div className="contact-copy"><h2>Ready to build <em>your dream pool?</em></h2>
            <p style={{ opacity: 0.75, lineHeight: 1.8 }}>Let&apos;s turn your outdoor space into something extraordinary.</p>
            <p style={{ opacity: 0.75, lineHeight: 1.8 }}>Tell us what you&apos;re imagining. We&apos;ll help you build it.</p>
            <img src={media.tropical} alt="Resort infinity swimming pool" loading="lazy" onError={handleImgError} style={{ borderRadius: 20, border: "1px solid rgba(255,255,255,.3)", height: 210, width: "100%", objectFit: "cover", marginTop: 20 }} />
          </div>
          <div className="contact-points">
            <a href={CONTACT.phoneHref}>📞 {CONTACT.phoneDisplay} · {CONTACT.hours}</a>
            <a href={waLink("Hi! I want a free pool quote.")} target="_blank" rel="noreferrer">💬 WhatsApp us — chat now</a>
            <a href={`mailto:${CONTACT.email}`}>✉️ {CONTACT.email}</a>
            <div>📍 {CONTACT.address}</div>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 18, alignItems: "center", fontSize: 13, opacity: 0.8 }}>
            <span style={{ display: "inline-flex", color: "var(--gold-soft)" }}>{Array.from({ length: 5 }).map((_, s) => <Star key={s} size={13} fill="currentColor" />)}</span>
            <span>Residential • Commercial • Custom Pool Solutions</span>
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
                <h3>Tell us what you&apos;re imagining</h3>
                <p style={{ opacity: 0.6, fontSize: 13.5 }}>Share your details — we&apos;ll help you build it.</p>
                <div className="f-field"><label>Name</label><input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
                <div className="f-row">
                  <div className="f-field"><label>Phone</label><input required placeholder="+91 …" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
                  <div className="f-field"><label>City</label><input placeholder="Coimbatore…" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} /></div>
                </div>
                <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} type="submit">Get a Free Quote <ArrowRight size={15} /></button>
                <a className="btn-ghost" style={{ width: "100%", justifyContent: "center", marginTop: 8 }} href={CONTACT.phoneHref}>Talk to Our Team</a>
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
      <Seo title="SR Vallavan Enterprises — Your Dream Pool. Built to Perfection." description="Custom swimming pool design & construction for homes, villas, resorts and commercial spaces across Tamil Nadu. Get a free quote." path="/" />
      <Hero />
      <Intro />
      <AboutStory />
      <Stats />
      <ServicesStrip />
      <FilmBand />
      <Statement />
      <WhyChoose />
      <PoolTypes />
      <Playground />
      <Process />
      <FeaturedWork />
      <PremiumImage />
      <ServiceArea />
      <Faq />
      <Contact />
    </main>
  );
}

