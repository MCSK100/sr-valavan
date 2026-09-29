import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { CtaBand, PageHero, openQuote } from "../components/Layout";
import { Reveal, cn, handleImgError } from "../components/motion";
import Seo from "../components/Seo";
import { IMG, faqs, pageHeroSlides } from "../data/content";

export default function FaqPage() {
  const [open, setOpen] = useState(0);
  return (
    <main>
      <Seo
        title="Swimming Pool FAQs — Cost, Timeline, Maintenance | SR Vallavan Enterprises"
        description="How much does a pool cost in Chennai? How long to build? Salt vs chlorine? Answers from 6 years of pool building."
        path="/faq"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        marker="Good to know"
        title={<>Questions, <em>answered honestly.</em></>}
        lede="Cost, timelines, maintenance, warranties — everything pool owners ask before the first dig, answered from 120+ builds."
        image={IMG.detail}
        images={pageHeroSlides.faq}
        badge={`${faqs.length} ANSWERS · 0 JARGON`}
      />
      <section className="section" style={{ paddingTop: 70 }}>
        <div className="content-width faq-split">
          <div className="faq-list" style={{ marginTop: 0 }}>
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i * 0.03, 0.3)}>
                <div className={cn("faq", open === i && "open")}>
                  <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                    <span><span style={{ fontFamily: "var(--mono)", fontSize: 11, opacity: 0.5, display: "block", letterSpacing: "0.14em" }}>{String(i + 1).padStart(2, "0")}</span>{f.q}</span>
                    <span className="plus"><Plus size={17} /></span>
                  </button>
                  <div className="faq-a"><div><p>{f.a}</p></div></div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div style={{ position: "sticky", top: 110, display: "flex", flexDirection: "column", gap: 16 }}>
              <img src={IMG.float} alt="Still have questions" onError={handleImgError} style={{ borderRadius: 24, border: "1px solid #323131", boxShadow: "4px 4px 0 #323131", height: 260, objectFit: "cover", width: "100%" }} />
              <div className="play-card">
                <h4>Still curious?</h4>
                <p>Share your plot sketch on WhatsApp — two fitting options + pricing within 48 hours.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
                  <button onClick={openQuote} className="btn-primary" style={{ justifyContent: "center" }}>Ask a free question</button>
                  <Link href="/gallery" className="link-arrow" style={{ marginTop: 0 }}>See the proof first <ArrowUpRight size={14} /></Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
