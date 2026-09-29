import { ArrowRight, Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { CtaBand, PageHero, openQuote } from "../components/Layout";
import { Counter, ParallaxImage, Reveal, cn, handleImgError } from "../components/motion";
import Seo from "../components/Seo";
import { IMG, industries, pageHeroSlides, steps, testimonials, whyChooseUs } from "../data/content";

const stats = [
  { to: 6, suffix: " +", label: "Years of splashes" },
  { to: 120, suffix: "+", label: "Pools handed over" },
  { to: 12, suffix: "", label: "Live sites today" },
  { to: 450, suffix: "+", label: "Happy swimmers" },
];

export default function AboutPage() {
  const [todos, setTodos] = useState([
    { label: "Midnight LED swim test", done: true },
    { label: "ECR infinity handover", done: true },
    { label: "Salt-water conversion", done: false },
    { label: "Trichy rooftop plunge", done: false },
  ]);
  return (
    <main>
      <Seo
        title="About Us — Design / Details / Dive | SR Vallavan Enterprises"
        description="Civil builders turned pool craftsmen — 120+ pools across Tamil Nadu. Shell, hydraulics and finish resolved as one drawing."
        path="/about"
      />
      <PageHero
        marker="About the studio"
        title={<>We trained as builders. Now we craft <em>water.</em></>}
        lede="SR Vallavan Enterprises is a pool studio, not a contractor — 6+ years across villas, resorts and rooftops, with a structural way of thinking most builders don't bring to water."
        image={IMG.villa}
        images={pageHeroSlides.about}
        badge="THE STUDIO · SINCE 2021"
      />
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="content-width about-grid">
          <Reveal>
            <div className="sec-marker">01 · Our story</div>
            <h2 className="about-title">Your vision. Our craftsmanship. <em>One perfect pool.</em></h2>
            <p className="about-copy">
              A pool is more than a structure filled with water — it is where relaxation, luxury and
              unforgettable moments come together. We design the shell, hydraulics and finish as{" "}
              <b>one drawing, not three</b>: salt + UV as standard, silent plant rooms, 10-year waterproof warranty.
            </p>
            <div className="exp-list">
              <div className="exp-row"><div><h4>Lead pool studio — villas, resorts, rooftops</h4><p>End-to-end design + build with photo updates. 6–8 weeks home pools, 7–12 days readymade FRP.</p></div><span>2021 — NOW</span></div>
              <div className="exp-row"><div><h4>Renovation & AMC crew</h4><p>Leak rebuilds in 21 days, LED + feature upgrades, weekly AMC with WhatsApp water-health reports.</p></div><span>120+ REFITS</span></div>
              <div className="exp-row"><div><h4>Commercial & institutional</h4><p>Resort lagoons, club lanes, therapy suites — balance tanks, auto-dosing, safety decks.</p></div><span>HOTELS · CLUBS</span></div>
            </div>
            <div className="brochure-band" style={{ marginTop: 28 }}>
              <div><h3>Create your perfect pool</h3><p>Finishes, pool types and cost ranges — plus a free site visit.</p></div>
              <button className="btn-primary" onClick={openQuote}>Get brochure + quote <ArrowRight size={16} /></button>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="about-photos">
              <img src={IMG.evening} alt="Villa pool at dusk" onError={handleImgError} />
              <img src={IMG.hotel} alt="Resort pool" onError={handleImgError} />
              <img src={IMG.tropical} alt="Tropical pool court" onError={handleImgError} />
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
                <p>Balanced water, aligned tiles, silent pumps — god lives at the waterline.</p>
                <p style={{ fontFamily: "var(--mono)", fontSize: 11, marginTop: 8 }}>pH 7.2 · SALT 3200ppm</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <div className="stats-band">
        <div className="content-width stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat">
              <Counter to={s.to} suffix={s.suffix} />
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
      <section className="section">
        <div className="content-width">
          <Reveal><div className="sec-marker">02 · Who we serve</div>
            <h2 className="sec-title">Homes, resorts <em>& institutions.</em></h2>
            <p className="sec-lede">Three pool worlds, one standard of water.</p>
          </Reveal>
          <div className="about-photos" style={{ gridTemplateColumns: "1fr 1fr 1fr", marginTop: 36 }}>
            {[IMG.villa, IMG.resort, IMG.lapLanes].map((src, i) => (
              <img key={i} src={src} alt="" onError={handleImgError} style={{ height: 240 }} />
            ))}
          </div>
          <div className="why-grid">
            {industries.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.08}>
                <div className="why-card"><span className="svc-detail-no">0{i + 1}</span><h3>{w.title}</h3><p>{w.copy}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="content-width">
          <Reveal><div className="sec-marker">03 · Why us</div>
            <h2 className="sec-title">Built with care. <em>Finished with precision.</em></h2>
          </Reveal>
          <div className="why-grid">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.08}>
                <div className="why-card"><span className="svc-icon" style={{ marginBottom: 4 }}><w.icon size={24} /></span><h3>{w.title}</h3><p>{w.copy}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="content-width">
          <Reveal><div className="sec-marker">04 · How we work</div>
            <h2 className="sec-title">Idea → Plan → Build → <em>Swim.</em></h2>
          </Reveal>
          <div className="steps">
            {steps.slice(0, 4).map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <div className="step"><span className="num">0{i + 1}</span><h4>{s.title}</h4><p>{s.copy}</p></div>
              </Reveal>
            ))}
          </div>
          <div className="chapter">
            <Reveal><ParallaxImage src={IMG.float} alt="Float day" label="FIELD NOTE / SUNDAY SWIM" /></Reveal>
            <Reveal delay={0.1}>
              <div className="chapter-text">
                <p className="chapter-eyebrow" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", opacity: 0.6 }}>FIELD NOTE</p>
                <h3>The pool is ready when <em>you forget the pump exists.</em></h3>
                <p>Silent plant room, salt-soft water, tiles aligned to the millimetre. That is the whole philosophy — everything else is decoration.</p>
                <div className="chapter-facts"><div><b>10-yr</b><span>Waterproof warranty</span></div><div><b>Salt + UV</b><span>Standard</span></div><div><b>48-hr</b><span>Estimate</span></div></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="content-width">
          <Reveal><div className="sec-marker">05 · Client words</div>
            <h2 className="sec-title">Loved <em>after the fill.</em></h2>
          </Reveal>
          <div className="testi-grid">
            {testimonials.slice(0, 3).map((t) => (
              <Reveal key={t.name}>
                <motion.figure className="quote" style={{ background: "var(--paper)", border: "1px solid #323131", borderRadius: 22, padding: "30px 26px", boxShadow: "4px 4px 0 #323131", display: "flex", flexDirection: "column", gap: 14 }} whileHover={{ y: -6, rotate: -0.4 }}>
                  <span style={{ display: "flex", gap: 3, color: "var(--gold)" }}>{Array.from({ length: 5 }).map((_, s) => <Star key={s} size={14} fill="currentColor" />)}</span>
                  <p style={{ fontFamily: "var(--serif)", fontSize: 19, margin: 0 }}>“{t.quote}”</p>
                  <footer style={{ display: "flex", gap: 12, alignItems: "center", marginTop: "auto" }}><span className="avatar" style={{ width: 44, height: 44, borderRadius: "50%", background: "#0a8a99", color: "#fff", display: "grid", placeItems: "center" }}>{t.initials}</span><div><b>{t.name}</b><br /><span style={{ fontSize: 12, opacity: 0.65 }}>{t.place}</span></div></footer>
                </motion.figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
