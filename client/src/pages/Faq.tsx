import { Plus } from "lucide-react";
import { useState } from "react";
import { CtaBand, PageHero } from "../components/Layout";
import { Reveal, cn } from "../components/motion";
import Seo from "../components/Seo";
import { faqs } from "../data/content";

export default function FaqPage() {
  const [open, setOpen] = useState(0);
  return (
    <main>
      <Seo
        title="Swimming Pool FAQs — Cost, Timeline, Maintenance | SR Valavan Enterprises"
        description="How much does a pool cost in Chennai? How long to build? Salt vs chlorine? Answers from 5 years of pool building."
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
        title={
          <>
            Questions, <em>answered honestly.</em>
          </>
        }
        lede="Cost, timelines, maintenance, warranties — the things every pool owner asks before the first dig."
      />
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="content-width">
          <div className="faq-list" style={{ marginTop: 0 }}>
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className={cn("faq", open === i && "open")}>
                  <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                    {f.q}
                    <span className="plus">
                      <Plus size={17} />
                    </span>
                  </button>
                  <div className="faq-a">
                    <div>
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
