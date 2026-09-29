import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { CtaBand, PageHero, openQuote } from "../components/Layout";
import { Counter, Reveal, handleImgError } from "../components/motion";
import Seo from "../components/Seo";
import { galleryCategories, galleryItems, IMG } from "../data/content";

const stats = [
  { to: 6, suffix: " +", label: "Years of splashes" },
  { to: 120, suffix: "+", label: "Pools handed over" },
  { to: 12, suffix: "", label: "Live sites today" },
  { to: 450, suffix: "+", label: "Happy swimmers" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [active, setActive] = useState<number | null>(null);
  const items = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <main>
      <Seo
        title="Swimming Pool Gallery — Infinity, Family & Plunge Pools | SR Valavan Enterprises"
        description="Browse infinity edges, family pools, terrace plunges, commercial pools and spa features designed, built and maintained by SR Valavan Enterprises across Tamil Nadu."
        path="/gallery"
      />
      <PageHero
        marker="Selected work"
        title={<>Water, <em>on record.</em></>}
        lede="Every project below was designed, engineered, built — and is still cared for — by our own crew. Filter by pool type, tap any tile to view it large."
        image={IMG.resort}
        badge="120+ POOLS BUILT"
      />
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
      <section className="featured-work" style={{ paddingBottom: 120 }}>
        <div className="content-width">
          <div className="logo-marquee-wrap" aria-hidden style={{ marginBottom: 40 }}>
            <div className="logo-marquee-inner">
              {[0, 1].map((dup) => (
                <span key={dup} style={{ display: "flex", gap: 56 }}>
                  {galleryCategories.filter((c) => c !== "All").map((c) => (
                    <span key={`${dup}-${c}`} className="client-logo"><i>✦</i> {c}</span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          <div className="filter-row" role="tablist" aria-label="Filter gallery by pool type">
            {galleryCategories.map((c) => (
              <button key={c} role="tab" aria-selected={filter === c} className={filter === c ? "filter-chip active" : "filter-chip"}
                onClick={() => { setFilter(c); setActive(null); }}>{c}</button>
            ))}
          </div>
          <div className="project-tiles" style={{ padding: 0, marginTop: 34 }}>
            {Array.from({ length: Math.ceil(items.length / 2) }).map((_, ri) => (
              <div key={ri} className="tiles-row" style={{ ["--reveal" as string]: 1, transform: "none", opacity: 1 }}>
                {items.slice(ri * 2, ri * 2 + 2).map((g, i) => (
                  <button key={`${g.title}-${ri}-${i}`} onClick={() => setActive(ri * 2 + i)}
                    className={i === 0 ? "project-tile tile-wide" : "project-tile tile-narrow"}
                    aria-label={`View ${g.title}`}>
                    <img src={g.image} alt={`${g.title} — ${g.location}`} loading="lazy" onError={handleImgError} />
                    <span className="tile-overlay" style={{ opacity: 0 }}>
                      <span className="tile-overlay-title">{g.title}</span>
                      <span className="tile-overlay-subtitle">{g.location} · {g.category}</span>
                      <span className="tile-cta">View large <ArrowUpRight size={14} /></span>
                    </span>
                    <span className="tile-cta" style={{ position: "absolute", left: 18, bottom: 16 }}>{g.location} · {g.category}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div style={{ marginTop: 34, display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
              <button onClick={openQuote} className="link-arrow" style={{ marginTop: 0 }}>Like what you see? Get an estimate <ArrowUpRight size={14} /></button>
              <Link href="/contact" className="link-arrow" style={{ marginTop: 0 }}>Book a site visit →</Link>
            </div>
          </Reveal>
        </div>
      </section>
      {active !== null && items[active] && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label="Gallery image viewer">
          <button onClick={() => setActive(null)} aria-label="Close viewer"><X size={20} /></button>
          <div onClick={(e) => e.stopPropagation()}>
            <img src={items[active].image} alt={`${items[active].title} — ${items[active].location}`} onError={handleImgError} />
            <p>{items[active].title} — {items[active].location} · {items[active].category}</p>
          </div>
        </div>
      )}
      <CtaBand />
    </main>
  );
}
