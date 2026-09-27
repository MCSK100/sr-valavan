import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link } from "wouter";
import { CtaBand, PageHero } from "../components/Layout";
import { Reveal, cn } from "../components/motion";
import Seo from "../components/Seo";
import { services } from "../data/content";

export default function ServicesPage() {
  return (
    <main>
      <Seo
        title="Swimming Pool Services — Construction, Renovation & AMC | SR Valavan Enterprises"
        description="Residential & commercial pools, spas, renovations, filtration automation and AMC across Chennai, Bengaluru, Hyderabad & Kochi. One accountable studio."
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
            Everything water, <em>under one roof.</em>
          </>
        }
        lede="Design, civil work, waterproofing, equipment and after-care — a single contract and a single accountable team."
      />
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
                    <Link href="/contact" className="link-arrow">
                      Get an estimate <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
                <div className="svc-detail-side">
                  <span className="svc-detail-no">0{i + 1}</span>
                  <ul className="svc-tags">
                    {s.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <Link href="/work" className="svc-go">
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
