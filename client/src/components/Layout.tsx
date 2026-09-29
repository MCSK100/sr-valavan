import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Facebook, Instagram, Menu, MessageCircle, Moon, Phone, Sun, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { CONTACT, quoteServices, waLink } from "../data/content";
import { Reveal, cn, handleImgError, usePageState } from "./motion";

export const openQuote = () => window.dispatchEvent(new CustomEvent("sr:open-quote"));

function useNight() {
  const [night, setNight] = useState(() => document.body.classList.contains("night"));
  useEffect(() => {
    document.body.classList.toggle("night", night);
  }, [night]);
  return { night, setNight };
}

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="SR Valavan Enterprises home">
      <img src="/srv_logo_2.png" alt="SR Valavan Enterprises — Swimming Pool Construction" className="brand-logo" />
    </Link>
  );
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Work" },
  { href: "/contact", label: "Contact" },
];

function Nav({ onMenu }: { onMenu: () => void }) {
  const { night, setNight } = useNight();
  return (
    <header className="pro-nav">
      <Brand />
      <nav className="pro-links" aria-label="Main navigation">
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="nav-end">
        <span className="theme-toggle" role="group" aria-label="Day night toggle">
          <button className={!night ? "active" : ""} onClick={() => setNight(false)} aria-label="Day mode">
            <Sun size={15} />
          </button>
          <button className={night ? "active" : ""} onClick={() => setNight(true)} aria-label="Night mode">
            <Moon size={15} />
          </button>
        </span>
        <button className="nav-cta" onClick={openQuote}>
          Get a Quote <ArrowUpRight size={14} />
        </button>
        <button className="mobile-trigger" aria-label="Open navigation" onClick={onMenu}>
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}

function MenuOverlay({ onClose }: { onClose: () => void }) {
  const [, navigate] = useLocation();
  const go = (href: string) => {
    navigate(href);
    onClose();
  };
  return (
    <motion.div className="mobile-menu" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }}>
      <div className="mobile-menu-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Brand />
        <button onClick={onClose} aria-label="Close navigation">
          <X size={24} />
        </button>
      </div>
      <div className="mobile-menu-list">
        {NAV_LINKS.map((l) => (
          <button key={l.href} onClick={() => go(l.href)}>
            {l.label} <ArrowUpRight size={20} />
          </button>
        ))}
      </div>
      <div className="mobile-menu-foot">
        <span>SR VALAVAN · COIMBATORE → CHENNAI</span>
        <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
      </div>
    </motion.div>
  );
}

function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", city: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));
  useEffect(() => {
    if (!open) setSent(false);
  }, [open ]);
  if (!open) return null;
  return (
    <div className="quote-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Request a quote">
      <motion.div className="quote-modal" onClick={(e) => e.stopPropagation()} initial={{ opacity: 0, y: 26, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
        <div className="quote-modal-head">
          <div>
            <span className="sec-marker">Get a quote</span>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, margin: "10px 0 6px" }}>Splash-brief your dream pool</h3>
            <p style={{ margin: 0, opacity: 0.65, fontSize: 14 }}>Free site visit · Line-item estimate within 48 hours.</p>
          </div>
          <button onClick={onClose} aria-label="Close quote form"><X size={20} /></button>
        </div>
        {sent ? (
          <div style={{ textAlign: "center", padding: 20 }}>
            <span style={{ width: 64, height: 64, borderRadius: "50%", display: "grid", placeItems: "center", background: "#0a8a99", color: "#fff", margin: "0 auto 16px" }}><Check size={28} /></span>
            <h3 style={{ margin: 0 }}>Request received.</h3>
            <p style={{ opacity: 0.7 }}>Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""} — we call back within 48 hours.</p>
            <a className="btn-primary" href={waLink(`Hi! I requested a quote for ${form.service || "a swimming pool"}. Name: ${form.name}, Phone: ${form.phone}, City: ${form.city}`)} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> Confirm on WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="f-row">
              <div className="f-field"><label>Name*</label><input required placeholder="Your name" value={form.name} onChange={set("name")} /></div>
              <div className="f-field"><label>Phone*</label><input required placeholder="+91 …" value={form.phone} onChange={set("phone")} /></div>
            </div>
            <div className="f-row">
              <div className="f-field"><label>Service*</label>
                <select required value={form.service} onChange={set("service")}>
                  <option value="">Select…</option>
                  {quoteServices.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="f-field"><label>City</label><input placeholder="Chennai…" value={form.city} onChange={set("city")} /></div>
            </div>
            <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Submit request <ArrowRight size={16} />
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="wa-wrap">
      {open && (
        <motion.div className="wa-card" initial={{ opacity: 0, y: 18, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
          <div className="wa-head">
            <div className="t-avatar" style={{ background: "#fff", color: "#075e54" }}>SR</div>
            <div><b>SR Valavan</b><div style={{ fontSize: 11, opacity: 0.9 }}>Online · replies within an hour</div></div>
            <button style={{ marginLeft: "auto" }} onClick={() => setOpen(false)} aria-label="Close chat"><X size={18} /></button>
          </div>
          <div className="wa-body">
            <div className="wa-msg">Hi! Pool, spa or fountain? Tap below — we reply fast with cost + site-visit slot.</div>
          </div>
          <a className="wa-cta" href={waLink("Hi SR Valavan! I want a free pool quote.")} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Start WhatsApp chat
          </a>
        </motion.div>
      )}
      <button className="wa-btn" onClick={() => setOpen((o) => !o)} aria-label="Open WhatsApp chat">
        {open ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="content-width footer-grid">
        <div>
          <Brand />
          <p style={{ maxWidth: 34, display: "contents" }} />
          <p style={{ maxWidth: "34ch", fontSize: 14, lineHeight: 1.75, opacity: 0.65 }}>Creating beautiful swimming spaces, built around your vision.</p>
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <a href="https://www.facebook.com/share/1CEGdVDSAZ/" target="_blank" rel="noreferrer" aria-label="Facebook" style={{ width: 42, height: 42, borderRadius: "50%", border: "1px solid rgba(255,255,255,.3)", display: "grid", placeItems: "center" }}><Facebook size={18} /></a>
            <a href="https://www.instagram.com/sr_vallavan_enterprises" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ width: 42, height: 42, borderRadius: "50%", border: "1px solid rgba(255,255,255,.3)", display: "grid", placeItems: "center" }}><Instagram size={18} /></a>
          </div>
        </div>
        <div>
          <h5>Explore</h5>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            <li><Link href="/services">Swimming Pool Construction</Link></li>
            <li><Link href="/services">Custom Pool Design</Link></li>
            <li><Link href="/services">Residential Pools</Link></li>
            <li><Link href="/services">Commercial Pools</Link></li>
            <li><Link href="/services">Pool Renovation</Link></li>
            <li><Link href="/services">Pool Equipment</Link></li>
          </ul>
        </div>
        <div>
          <h5>Reach us</h5>
          <ul>
            <li><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></li>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li>Kuniyamuthur, Coimbatore</li>
            <li><button onClick={openQuote} style={{ padding: 0, color: "var(--gold-soft)" }}>Get a free quote →</button></li>
          </ul>
        </div>
      </div>
      <div className="content-width footer-bottom">
        <span>© {new Date().getFullYear()} SR Valavan Enterprises · Design / Details / Dive</span>
        <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}><Phone size={12} /> {CONTACT.phoneDisplay}</span>
      </div>
    </footer>
  );
}

export function PageHero({ marker, title, lede, image, images, badge }: { marker: string; title: ReactNode; lede?: string; image?: string; images?: string[]; badge?: string }) {
  const slides = images && images.length > 0 ? images : image ? [image] : [];
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);
  return (
    <section className="story-hero">
      <div className="story-sun" aria-hidden />
      <div className="story-cloud c1" aria-hidden />
      <div className="story-cloud c2" aria-hidden />
      <div className="content-width story-hero-grid">
        <Reveal>
          <div className="sec-marker"><span>{marker}</span></div>
          <h1 className="story-hero-title">{title}</h1>
          {lede && <p className="story-hero-lede">{lede}</p>}
          <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap", alignItems: "center" }}>
            <button className="btn-primary" onClick={openQuote}>Get a free quote <ArrowRight size={16} /></button>
            <a className="link-arrow" style={{ marginTop: 0 }} href={CONTACT.phoneHref}><Phone size={14} /> {CONTACT.phoneDisplay}</a>
          </div>
          {badge && <span className="story-badge">{badge}</span>}
        </Reveal>
        <Reveal delay={0.15}>
          <div className="story-hero-card">
            {slides.map((src, i) => (
              <img
                key={src + i}
                src={src}
                alt=""
                aria-hidden
                loading={i === 0 ? "eager" : "lazy"}
                onError={handleImgError}
                className="ph-slide"
                style={{ opacity: slides.length < 2 || slide === i ? 1 : 0 }}
              />
            ))}
            {slides.length > 1 && (
              <div className="ph-dots" role="tablist" aria-label="Hero images">
                {slides.map((src, i) => (
                  <button
                    key={src + i}
                    role="tab"
                    aria-selected={slide === i}
                    aria-label={`Show image ${i + 1}`}
                    className={slide === i ? "active" : ""}
                    onClick={() => setSlide(i)}
                  />
                ))}
              </div>
            )}
            <span>{badge ?? "SR VALAVAN · TAMIL NADU"}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="contact-sec">
      <div className="content-width" style={{ textAlign: "center" }}>
        <Reveal>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(36px,5vw,64px)", margin: 0 }}>Ready to make <em style={{ color: "var(--gold-soft)" }}>a splash?</em></h2>
          <p style={{ opacity: 0.72 }}>Your resort-at-home is one site visit away.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 26, flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={openQuote}>Request a Consultation <ArrowRight size={16} /></button>
            <a className="btn-ghost" style={{ color: "#fff" }} href={waLink("Hi! I want to plan my dream pool.")} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp Us</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const { progress } = usePageState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [path] = useLocation();
  useEffect(() => {
    const fn = () => setQuoteOpen(true);
    window.addEventListener("sr:open-quote", fn);
    return () => window.removeEventListener("sr:open-quote", fn);
  }, []);
  useEffect(() => { window.scrollTo(0, 0); }, [path]);
  return (
    <div className="pro-page" id="top">
      <div className="page-progress" style={{ transform: `scaleX(${progress})` }} />
      <Nav onMenu={() => setMenuOpen(true)} />
      <AnimatePresence>{menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}</AnimatePresence>
      {children}
      <SiteFooter />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <WhatsAppWidget />
    </div>
  );
}
