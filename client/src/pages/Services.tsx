import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link } from "wouter";
import { CtaBand, PageHero, openQuote } from "../components/Layout";
import { ParallaxImage, Reveal, cn, handleImgError } from "../components/motion";
import Seo from "../components/Seo";
import { IMG, companyBlurb, pageHeroSlides, poolTypes, services } from "../data/content";

const chapterImages = [IMG.infinity, IMG.vanishing, IMG.villa, IMG.hotel, IMG.float, IMG.lagoon, IMG.plumber, IMG.worker];
const chapterFacts = [
  [{ b: "14 m", s: "Vanishing edge" }, { b: "Salt + UV", s: "Water" }, { b: "6 wks", s: "Shell → fill" }],
  [{ b: "38 °C", s: "Heated plunge" }, { b: "12 jets", s: "Hydrotherapy" }, { b: "Silent", s: "Plant room" }],
  [{ b: "21 days", s: "Typical refit" }, { b: "10-yr", s: "Waterproof" }, { b: "-40%", s: "Running cost" }],
];

export default function ServicesPage() {
  return (
    <main>
      <Seo
        title="Complete Swimming Pool Solutions | SR Valavan Enterprises"
        description="Custom pools, infinity & overflow pools, residential and commercial pools, water features, renovation and filtration — designed for your space, built for your lifestyle."
        path="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Swimming pool services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            description: s.copy,
          })),
        }}
      />
      <PageHero
        marker="Our services"
        title={<>Three ways <em>into the blue.</em></>}
        lede={companyBlurb}
        image={IMG.infinity}
        images={pageHeroSlides.services}
        badge="8 SERVICES · ONE TEAM"
      />
      <section className="section" style={{ paddingTop: 70, paddingBottom: 10 }}>
        <div className="content-width">
          <Reveal><div className="sec-marker">00 · Turnkey</div>
            <h2 className="sec-title" style={{ fontSize: "clamp(28px,3.4vw,44px)" }}>Consult → Design → Build → <em>Dive.</em></h2>
          </Reveal>
          <div className="about-photos" style={{ gridTemplateColumns: "1fr 1fr 1fr", marginTop: 30 }}>
            {[IMG.villa, IMG.detail, IMG.duskPool].map((src, i) => (
              <img key={i} src={src} alt="" onError={handleImgError} style={{ height: 230 }} />
            ))}
          </div>
          <div className="type-grid">
            {[
              { n: "Consult & design", d: "Site study, drawings, 3D views and a line-item budget — approved before we dig." },
              { n: "Groundwork & shell", d: "Excavation, steel, waterproofing and plumbing — civil work with photo updates." },
              { n: "Finish & commission", d: "Tiling, coping, salt + filtration + lighting — balanced, tested and handed over." },
            ].map((t, i) => (
              <Reveal key={t.n} delay={(i % 3) * 0.07}>
                <div className="type-card"><em>0{i + 1}</em><b>{t.n}</b><span>{t.d}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 60, paddingBottom: 10 }}>
        <div className="content-width">
          <Reveal><div className="sec-marker">01 · Pool types</div>
            <h2 className="sec-title" style={{ fontSize: "clamp(28px,3.4vw,44px)" }}>A pool that matches <em>your plot.</em></h2>
          </Reveal>
          <div className="type-grid">
            {poolTypes.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.07}>
                <div className="type-card"><em>0{i + 1}</em><b>{t.name}</b><span>{t.desc}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 60 }}>
        <div className="content-width">
          <Reveal><div className="sec-marker">02 · Selected capabilities</div>
            <h2 className="sec-title">Each service, <em>like a case study.</em></h2>
            <p className="sec-lede">Numbered chapters with site photos, facts and checklists — the same rigour we bring to the waterline.</p>
          </Reveal>
          {services.map((s, i) => (
            <article key={s.title} className={cn("chapter", i % 2 === 1 && "flip")}>
              <Reveal><ParallaxImage src={chapterImages[i % chapterImages.length]} alt={s.title} label={`${String(i + 1).padStart(2, "0")} / ${s.tags[0]?.toUpperCase()}`} /></Reveal>
              <Reveal delay={0.1}>
                <div className="chapter-text">
                  <span style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.16em", color: "var(--pool)" }}>{String(i + 1).padStart(2, "0")} — {s.tags[0]}</span>
                  <h3>{s.title}</h3>
                  <p>{s.copy}</p>
                  <ul className="svc-checks">
                    {s.details.map((d) => (<li key={d}><Check size={15} /> {d}</li>))}
                  </ul>
                  <div className="chapter-facts">
                    {chapterFacts[i % chapterFacts.length].map((f) => (<div key={f.s}><b>{f.b}</b><span>{f.s}</span></div>))}
                  </div>
                  <div style={{ display: "flex", gap: 18, marginTop: 22, flexWrap: "wrap" }}>
                    <button onClick={openQuote} className="link-arrow" style={{ marginTop: 0 }}>Get an estimate <ArrowUpRight size={14} /></button>
                    <Link href="/gallery" className="link-arrow" style={{ marginTop: 0 }}>See related work <ArrowRight size={13} /></Link>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
