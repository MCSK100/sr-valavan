import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { CtaBand, PageHero, openQuote } from "../components/Layout";
import { Counter, ParallaxImage, Reveal } from "../components/motion";
import Seo from "../components/Seo";
import { IMG, industries, steps, testimonials, whyChooseUs } from "../data/content";

export default function AboutPage() {
  return (
    <main>
      <Seo
        title="About Us — Pool Designers & Builders Since 2021 | SR Valavan Enterprises"
        description="Meet SR Valavan Enterprises: a Chennai pool studio with 5 years, 120+ pools and one promise — design, build and care, all under one roof."
        path="/about"
      />
      <PageHero
        marker="About the studio"
        title={
          <>
            A pool is not an amenity. <em>It is a horizon.</em>
          </>
        }
        lede="Since 2021 we have designed and built singular pools, spas and water landscapes across Tamil Nadu — and stayed around to care for them."
        image={IMG.evening}
        badge="THE STUDIO · SINCE 2021"
      />
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="content-width about-split">
          <Reveal>
            <ParallaxImage src={IMG.evening} alt="Luxury villa pool at dusk" label="THE STUDIO / SINCE 2021" />
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="sec-marker">
                01 <span>Our story</span>
              </div>
              <h2 className="sec-title" style={{ fontSize: "clamp(34px,4vw,54px)" }}>
                Built by engineers, <em>finished like artists.</em>
              </h2>
              <p className="about-copy">
                SR Valavan Enterprises began with a simple frustration: beautiful pools that
                leaked, and sturdy pools that looked ordinary. We set out to do both —
                structural engineering you never see, and finishes you never stop looking at.
              </p>
              <p className="about-copy">
                Today one crew handles your site visit, 3D design, civil work, waterproofing,
                equipment and weekly care. No subcontractor chains, no finger-pointing — one
                phone number from first dig to tenth summer.
              </p>
              <div className="brochure-band" style={{ marginTop: 28 }}>
                <div>
                  <h3>Create your perfect pool</h3>
                  <p>Download our brochure with pool types, finishes and cost ranges.</p>
                </div>
                <button className="btn-primary" onClick={openQuote}>
                  Get brochure + quote <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <div className="stats-band">
        <div className="content-width stats-grid">
          {[
            { to: 5, suffix: " +", label: "Years of experience" },
            { to: 120, suffix: "+", label: "Completed projects" },
            { to: 12, suffix: "", label: "Ongoing projects" },
            { to: 450, suffix: "+", label: "Happy customers" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat">
              <Counter to={s.to} suffix={s.suffix} />
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
      <section className="section">
        <div className="content-width">
          <Reveal>
            <div className="sec-marker">
              02 <span>Who we serve</span>
            </div>
            <h2 className="sec-title">
              Homes, businesses <em>& institutions.</em>
            </h2>
          </Reveal>
          <div className="why-grid">
            {industries.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.08}>
                <div className="why-card">
                  <span className="svc-detail-no">0{i + 1}</span>
                  <h3>{w.title}</h3>
                  <p>{w.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="content-width">
          <Reveal>
            <div className="sec-marker">
              03 <span>Why choose us</span>
            </div>
            <h2 className="sec-title">
              A pool partner, <em>not just a contractor.</em>
            </h2>
          </Reveal>
          <div className="why-grid">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.08}>
                <div className="why-card">
                  <span className="svc-icon" style={{ marginBottom: 4 }}>
                    <w.icon size={24} />
                  </span>
                  <h3>{w.title}</h3>
                  <p>{w.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="content-width">
          <Reveal>
            <div className="sec-marker">
              04 <span>How we work</span>
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
      <section className="section testi">
        <div className="content-width">
          <Reveal>
            <div className="sec-marker">
              05 <span>Client words</span>
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
      <CtaBand />
    </main>
  );
}
