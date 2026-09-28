import { ArrowRight, Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageHero } from "../components/Layout";
import { Reveal } from "../components/motion";
import Seo from "../components/Seo";
import { CONTACT, quoteServices } from "../data/content";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "", service: "", message: "" });
  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const cards = [
    { icon: Phone, title: "Call us", lines: [CONTACT.phoneDisplay, CONTACT.hours], href: CONTACT.phoneHref },
    { icon: Mail, title: "Write to us", lines: [CONTACT.email, "Replies within a day"], href: `mailto:${CONTACT.email}` },
    { icon: MapPin, title: "Visit us", lines: [CONTACT.address, "Landmark: near Vadapalani metro"] },
    { icon: Clock, title: "Site visits", lines: ["Free within the city", "Fixed within 48 hours"] },
  ];

  return (
    <main>
      <Seo
        title="Contact Us — Free Pool Site Visit in Chennai | SR Valavan Enterprises"
        description="Call +91 98410 45670 or book a free swimming pool site visit in Chennai, Bengaluru, Hyderabad or Kochi. Estimate within 48 hours."
        path="/contact"
      />
      <PageHero
        marker="Get in touch"
        title={
          <>
            Tell us where <em>the site is.</em>
          </>
        }
        lede="Call, WhatsApp, or leave your details — we will visit, measure and return a line-item estimate within 48 hours."
      />
      <section className="section" style={{ paddingTop: 80 }}>
        <div className="content-width">
          <div className="info-grid">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.07}>
                <div className="info-card">
                  <span className="svc-icon" style={{ marginBottom: 18 }}>
                    <c.icon size={24} />
                  </span>
                  <h3>{c.title}</h3>
                  {c.lines.map((l) =>
                    c.href ? (
                      <a key={l} href={c.href}>
                        {l}
                      </a>
                    ) : (
                      <p key={l}>{l}</p>
                    ),
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="contact-split">
            <Reveal>
              <div className="contact-form" style={{ boxShadow: "0 24px 60px rgba(6,32,37,.14)" }}>
                {submitted ? (
                  <div className="form-ok">
                    <span className="ok-ring">
                      <Check size={30} />
                    </span>
                    <h3>Request received.</h3>
                    <p>
                      Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""} — our studio
                      will call you back within 48 hours to fix a site visit.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <h3>Request a free quote</h3>
                    <p>Select a service, leave your details — estimate within 48 hours.</p>
                    <div className="f-row">
                      <div className="f-field">
                        <label htmlFor="cp-name">Name</label>
                        <input id="cp-name" required placeholder="Your name" value={form.name} onChange={set("name")} />
                      </div>
                      <div className="f-field">
                        <label htmlFor="cp-phone">Phone</label>
                        <input id="cp-phone" required placeholder="+91 …" value={form.phone} onChange={set("phone")} />
                      </div>
                    </div>
                    <div className="f-row">
                      <div className="f-field">
                        <label htmlFor="cp-service">Service</label>
                        <select id="cp-service" value={form.service} onChange={set("service")}>
                          <option value="">Select a service…</option>
                          {quoteServices.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div className="f-field">
                        <label htmlFor="cp-city">Site city</label>
                        <select id="cp-city" value={form.city} onChange={set("city")}>
                          <option value="">Select a city…</option>
                          {CONTACT.cities.map((c) => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="f-field">
                      <label htmlFor="cp-msg">About your project</label>
                      <textarea
                        id="cp-msg"
                        placeholder="Plot size, pool dream, timeline…"
                        value={form.message}
                        onChange={set("message")}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      className="btn-primary"
                      style={{ width: "100%", justifyContent: "center" }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Request callback <ArrowRight size={16} />
                    </motion.button>
                    <p className="form-note">Average response time: under 6 working hours.</p>
                  </form>
                )}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div>
                <h3 className="map-title">Find the studio</h3>
                <p className="map-sub">100 Feet Road, Vadapalani — 5 minutes from the metro.</p>
                <div className="map-frame">
                  <iframe
                    title="SR Valavan Enterprises on the map"
                    src="https://www.google.com/maps?q=Vadapalani,+Chennai&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
