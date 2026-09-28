import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { CtaBand, PageHero, openQuote } from "../components/Layout";
import { Counter, Reveal, handleImgError } from "../components/motion";
import Seo from "../components/Seo";
import { galleryCategories, galleryItems } from "../data/content";

const stats = [
  { to: 14, suffix: " +", label: "Years of experience" },
  { to: 120, suffix: "+", label: "Completed projects" },
  { to: 12, suffix: "", label: "Ongoing projects" },
  { to: 450, suffix: "+", label: "Happy customers" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [active, setActive] = useState<number | null>(null);
  const items =
    filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <main>
      <Seo
        title="Swimming Pool Gallery — Infinity, Family & Plunge Pools | SR Valavan Enterprises"
        description="Browse infinity edges, family pools, terrace plunges, commercial pools and spa features designed, built and maintained by SR Valavan Enterprises across South India."
        path="/gallery"
      />
      <PageHero
        marker="Gallery"
        title={
          <>
            Water, <em>on record.</em>
          </>
        }
        lede="Every project below was designed, engineered, built — and is still cared for — by our own crew. Filter by pool type, tap any image to view it large."
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
      <section className="section" style={{ paddingTop: 70 }}>
        <div className="content-width">
          <div className="filter-row" role="tablist" aria-label="Filter gallery by pool type">
            {galleryCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                className={filter === c ? "filter-chip active" : "filter-chip"}
                onClick={() => {
                  setFilter(c);
                  setActive(null);
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {items.map((g, i) => (
              <Reveal key={`${g.title}-${i}`} delay={(i % 3) * 0.07}>
                <button
                  className="gallery-item"
                  onClick={() => setActive(i)}
                  aria-label={`View ${g.title}`}
                >
                  <img
                    src={g.image}
                    alt={`${g.title} — ${g.location}`}
                    loading="lazy"
                    onError={handleImgError}
                  />
                  <span>
                    {g.location} · {g.category}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div style={{ marginTop: 34 }}>
              <button onClick={openQuote} className="link-arrow">
                Like what you see? Get an estimate <ArrowUpRight size={14} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
      {active !== null && items[active] && (
        <div
          className="lightbox"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button onClick={() => setActive(null)} aria-label="Close viewer">
            <X size={20} />
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={items[active].image}
              alt={`${items[active].title} — ${items[active].location}`}
              onError={handleImgError}
            />
            <p>
              {items[active].title} — {items[active].location} · {items[active].category}
            </p>
          </div>
        </div>
      )}
      <CtaBand />
    </main>
  );
}
