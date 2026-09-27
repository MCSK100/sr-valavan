import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { CtaBand, PageHero } from "../components/Layout";
import { Counter, Reveal, TiltCard, handleImgError } from "../components/motion";
import Seo from "../components/Seo";
import { projects } from "../data/content";

const stats = [
  { to: 120, suffix: "+", label: "Pools designed & built" },
  { to: 14, suffix: " yrs", label: "At the waterline" },
  { to: 98, suffix: "%", label: "Clients who refer us" },
  { to: 48, suffix: " hr", label: "Site-visit response" },
];

export default function WorkPage() {
  return (
    <main>
      <Seo
        title="Our Pool Projects — Infinity, Lap & Plunge Pools | SR Valavan Enterprises"
        description="Infinity edges in ECR Chennai, lap pools in Bengaluru, plunge courts in Kochi — browse pools designed, built and maintained by SR Valavan Enterprises."
        path="/work"
      />
      <PageHero
        marker="Selected work"
        title={
          <>
            Places where water <em>became the idea.</em>
          </>
        }
        lede="Every project below was designed, engineered, built — and is still cared for — by our own crew."
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
      <section className="section">
        <div className="content-width portfolio-grid">
          {projects.map((p, i) => (
            <Reveal key={p.no} delay={(i % 3) * 0.1}>
              <TiltCard>
                <Link href="/contact" className="proj">
                  <div className="proj-img">
                    <img src={p.image} alt={`${p.title} — ${p.location}`} onError={handleImgError} loading="lazy" />
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
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
