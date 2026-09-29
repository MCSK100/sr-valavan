import { ArrowRight, Check, Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageHero } from "../components/Layout";
import { Reveal, handleImgError } from "../components/motion";
import Seo from "../components/Seo";
import { CONTACT, IMG, pageHeroSlides, poolSizes, quoteServices, waLink } from "../data/content";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "", service: "", message: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const cards = [
    { icon: Phone, title: "Call us", lines: [CONTACT.phoneDisplay, CONTACT.hours], href: CONTACT.phoneHref },
    { icon: Mail, title: "Write to us", lines: [CONTACT.email, "Replies within a day"], href: `mailto:${CONTACT.email}` },
    { icon: MapPin, title: "Visit us", lines: [CONTACT.address, "Kuniyamuthur, Coimbatore"] },
    { icon: Clock, title: "Site visits", lines: ["Free within the city", "Fixed within 48 hours"] },
  ];

  return (
    <main>
      <Seo
        title="Contact Us — Free Pool Site Visit | SR Vallavan Enterprises"
        description="Call +91 78718 31029 or book a free swimming pool site visit in Chennai, Coimbatore, Madurai or Trichy. Estimate within 48 hours."
        path="/contact"
      />
      <PageHero
        marker="Get in touch"
        title={<>Tell us where <em>the site is.</em></>}
        lede="Call, WhatsApp, or leave your details — we will visit, measure and return a line-item estimate within 48 hours. Average response: under 6 working hours."
        image={IMG.interior}
        images={pageHeroSlides.contact}
        badge="48-HR ESTIMATE · FREE VISIT"
      />
      <section className="section" style={{ paddingTop: 70 }}>
        <div className="content-width">
          <div className="logo-marquee-wrap" aria-hidden style={{ marginBottom: 44 }}>
            <div className="logo-marquee-inner">
              {[0, 1].map((dup) => (
                <span key={dup} style={{ display: "flex", gap: 56 }}>
                  {CONTACT.cities.concat(["Free site visit", "48-hr estimate"]).map((c) => (
                    <span key={`${dup}-${c}`} className="client-logo"><i>✦</i> {c}</span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          <div className="info-grid">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.07}>
                <div className="info-card">
                  <span className="svc-icon" style={{ marginBottom: 18 }}><c.icon size={24} /></span>
                  <h3>{c.title}</h3>
                  {c.lines.map((l) => (c.href ? <a key={l} href={c.href}>{l}</a> : <p key={l}>{l}</p>))}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="contact-split">
            <Reveal>
              <div>
                <div className="sec-marker">01 · Sizes</div>
                <h3 className="map-title" style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 30 }}>What size pool do you need?</h3>
                <p className="map-sub">Three starting points — we fine-tune dimensions to your site and budget.</p>
                <img src={IMG.lagoon} alt="Pool sizes" onError={handleImgError} style={{ borderRadius: 22, border: "1px solid #323131", boxShadow: "4px 4px 0 #323131", height: 240, width: "100%", objectFit: "cover", marginBottom: 18 }} />
                <div className="why-grid" style={{ marginTop: 0, gridTemplateColumns: "1fr" }}>
                  {poolSizes.map((p, i) => (
                    <div key={p.name} className="why-card"><span className="svc-detail-no">0{i + 1}</span><h3>{p.name}</h3><p><b>{p.dims}</b><br />{p.copy}</p></div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 18, alignItems: "center", fontSize: 13 }}>
                  <span style={{ display: "inline-flex", color: "var(--gold)" }}>{Array.from({ length: 5 }).map((_, s) => <Star key={s} size={13} fill="currentColor" />)}</span>
                  <span><b>4.9</b> from 120+ pool owners</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="contact-form">
                {submitted ? (
                  <div style={{ textAlign: "center", padding: 20 }}>
                    <span style={{ width: 64, height: 64, borderRadius: "50%", display: "grid", placeItems: "center", background: "#0a8a99", color: "#fff", margin: "0 auto 14px" }}><Check size={28} /></span>
                    <h3>Request received.</h3>
                    <p style={{ opacity: 0.65 }}>Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""} — we call back within 48 hours.</p>
                    <a className="btn-primary" href={waLink(`Hi! Site visit request. Name: ${form.name}, Phone: ${form.phone}, City: ${form.city}, Service: ${form.service}`)} target="_blank" rel="noreferrer">Confirm on WhatsApp <ArrowRight size={15} /></a>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <h3>Request a free quote</h3>
                    <p style={{ opacity: 0.6, fontSize: 13.5 }}>Estimate within 48 hours. No spam, ever.</p>
                    <div className="f-row">
                      <div className="f-field"><label>Name</label><input required placeholder="Your name" value={form.name} onChange={set("name")} /></div>
                      <div className="f-field"><label>Phone</label><input required placeholder="+91 …" value={form.phone} onChange={set("phone")} /></div>
                    </div>
                    <div className="f-row">
                      <div className="f-field"><label>Service</label>
                        <select value={form.service} onChange={set("service")}><option value="">Select…</option>{quoteServices.map((s) => <option key={s}>{s}</option>)}</select>
                      </div>
                      <div className="f-field"><label>Site city</label>
                        <select value={form.city} onChange={set("city")}><option value="">Select…</option>{CONTACT.cities.map((c) => <option key={c}>{c}</option>)}</select>
                      </div>
                    </div>
                    <div className="f-field"><label>About your project</label><textarea placeholder="Plot size, pool dream, timeline…" value={form.message} onChange={set("message")} /></div>
                    <motion.button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      Request callback <ArrowRight size={16} />
                    </motion.button>
                  </form>
                )}
              </div>
              <div style={{ marginTop: 22 }}>
                <h3 className="map-title" style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 26 }}>Find the studio</h3>
                <p className="map-sub">17/27 Bharathi Nagar, Kuniyamuthur, Coimbatore 641008.</p>
                <div className="map-frame">
                  <iframe title="SR Vallavan Enterprises on the map" src="https://www.google.com/maps?q=Bharathi+Nagar,+Kuniyamuthur,+Coimbatore+641008&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
