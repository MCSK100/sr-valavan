import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link } from "wouter";
import { CtaBand, PageHero, openQuote } from "../components/Layout";
import { Reveal, cn } from "../components/motion";
import Seo from "../components/Seo";
import { IMG, poolTypes, services } from "../data/content";

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
        title={
          <>
            Complete Swimming <em>Pool Solutions.</em>
          </>
        }
        lede="Custom pools, infinity designs, residential retreats, commercial projects, water features, renovation and filtration — all managed from concept to completion."
        image={IMG.infinity}
        badge="7 SERVICES · ONE TEAM"
      />
      <section className="section" style={{ paddingTop: 70, paddingBottom: 30 }}>
        <div className="content-width">
          <Reveal>
            <div className="sec-marker">
              00 <span>End-to-end turnkey projects</span>
            </div>
            <h2 className="sec-title" style={{ fontSize: "clamp(28px,3.4vw,44px)" }}>
              Consult → Design → Build → <em>Dive.</em>
            </h2>
            <p className="sec-lede">
              From first idea to first dive: consultation, site assessment, design and
              planning, careful construction and finishing — your pool, ready for
              unforgettable moments.
            </p>
          </Reveal>
          <div className="type-grid">
            {[
              { n: "Consult & design", d: "Site study, drawings, 3D views and a line-item budget — approved before we dig." },
              { n: "Groundwork & shell", d: "Excavation, steel, waterproofing and plumbing — civil work with photo updates." },
              { n: "Finish & commission", d: "Tiling, coping, salt + filtration + lighting — balanced, tested and handed over." },
            ].map((t, i) => (
              <Reveal key={t.n} delay={(i % 3) * 0.07}>
                <div className="type-card">
                  <em>0{i + 1}</em>
                  <b>{t.n}</b>
                  <span>{t.d}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 40, paddingBottom: 30 }}>
        <div className="content-width">
          <Reveal>
            <div className="sec-marker">
              01 <span>Wide range of swimming pools</span>
            </div>
            <h2 className="sec-title" style={{ fontSize: "clamp(28px,3.4vw,44px)" }}>
              A Pool That Matches <em>Your Vision.</em>
            </h2>
          </Reveal>
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
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="content-width svc-detail-list">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <article className={cn("svc-detail", i % 2 === 1 && "flip")}>
                <div className="svc-detail-main">
                  <div className="svc-icon">
                    <s.icon size={26} />
                  </div>
                  <h2>{s.title}</h2>
                  <p>{s.copy}</p>
                  <ul className="svc-checks">
                    {s.details.map((d) => (
                      <li key={d}>
                        <Check size={15} /> {d}
                      </li>
                    ))}
                  </ul>
                  <div className="svc-detail-actions">
                    <button onClick={openQuote} className="link-arrow">
                      Get an estimate <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
                <div className="svc-detail-side">
                  <span className="svc-detail-no">0{i + 1}</span>
                  <ul className="svc-tags">
                    {s.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <Link href="/gallery" className="svc-go">
                    See related work <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
