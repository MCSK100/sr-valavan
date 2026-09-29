import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Facebook, Instagram, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { CONTACT, IMG, quoteServices, waLink } from "../data/content";
import { Reveal, cn, usePageState } from "./motion";

export const openQuote = () => window.dispatchEvent(new CustomEvent("sr:open-quote"));

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="SR Valavan Enterprises home">
      <img src="/srv_logo_2.png" alt="SR Valavan Enterprises logo" className="brand-logo" />
    </Link>
  );
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

function Nav({ onMenu, scrolled }: { onMenu: () => void; scrolled: boolean }) {
  return (
    <header className={cn("pro-nav", scrolled && "scrolled")}>
      <Brand />
      <nav className="pro-links" aria-label="Main navigation">
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="nav-end">
        <a className="nav-call" href={CONTACT.phoneHref} aria-label="Call now">
          <Phone size={15} /> <span>{CONTACT.phoneDisplay}</span>
        </a>
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
  const links = [...NAV_LINKS, { href: "/contact", label: "Get a site visit" }];
  return (
    <motion.div
      className="mobile-menu"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mobile-menu-head">
        <Brand />
        <button onClick={onClose} aria-label="Close navigation">
          <X size={24} />
        </button>
      </div>
      <div className="mobile-menu-list">
        {links.map((l) => (
          <button key={`${l.href}-${l.label}`} onClick={() => go(l.href)}>
            {l.label} <ArrowUpRight size={20} />
          </button>
        ))}
      </div>
      <div className="mobile-menu-cta">
        <button className="nav-cta" style={{ display: "inline-flex" }} onClick={() => { onClose(); openQuote(); }}>
          Get a Quote <ArrowUpRight size={14} />
        </button>
        <a href={CONTACT.phoneHref} className="mobile-call">
          <Phone size={16} /> {CONTACT.phoneDisplay}
        </a>
      </div>
      <div className="mobile-menu-foot">
        <span>SR VALAVAN ENTERPRISES · CHENNAI</span>
        <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
      </div>
    </motion.div>
  );
}

function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", city: "" });
  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));
  useEffect(() => {
    if (!open) setSent(false);
  }, [open ]);
  if (!open) return null;
  return (
    <div className="quote-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Request a quote">
      <motion.div
        className="quote-modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 26, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="quote-modal-head">
          <div>
            <span className="sec-marker" style={{ margin: 0 }}>Get a quote</span>
            <h3>Request a quote for your dream pool</h3>
            <p>Free site visit · Line-item estimate within 48 hours.</p>
          </div>
          <button onClick={onClose} aria-label="Close quote form"><X size={20} /></button>
        </div>
        {sent ? (
          <div className="form-ok">
            <span className="ok-ring"><Check size={28} /></span>
            <h3>Request received.</h3>
            <p>Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""} — we will call {form.phone || "you"} back within 48 hours to fix a site visit.</p>
            <a className="btn-primary" href={waLink(`Hi! I requested a quote for ${form.service || "a swimming pool"} in ${form.city || "my city"}. Name: ${form.name}, Phone: ${form.phone}`)} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> Confirm faster on WhatsApp
            </a>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="f-row">
              <div className="f-field">
                <label htmlFor="q-name">Name*</label>
                <input id="q-name" required placeholder="Your name" value={form.name} onChange={set("name")} />
              </div>
              <div className="f-field">
                <label htmlFor="q-phone">Contact No*</label>
                <input id="q-phone" required placeholder="+91 …" value={form.phone} onChange={set("phone")} />
              </div>
            </div>
            <div className="f-field">
              <label htmlFor="q-email">Email</label>
              <input id="q-email" type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} />
            </div>
            <div className="f-row">
              <div className="f-field">
                <label htmlFor="q-service">Service*</label>
                <select id="q-service" required value={form.service} onChange={set("service")}>
                  <option value="">Select a service…</option>
                  {quoteServices.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="f-field">
                <label htmlFor="q-city">City</label>
                <input id="q-city" placeholder="Chennai…" value={form.city} onChange={set("city")} list="sr-cities" />
                <datalist id="sr-cities">
                  {CONTACT.cities.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
              </div>
            </div>
            <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Submit request <ArrowRight size={16} />
            </button>
            <p className="form-note">Prefer to talk? <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a> · {CONTACT.hours}</p>
          </form>
        )}
      </motion.div>
    </div>
  );
}

function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);
  const toggle = () => {
    setOpen((o) => !o);
    setSeen(true);
  };
  const chips = [
    { label: "Pool cost?", msg: "Hi! What does a home swimming pool cost?" },
    { label: "Book a site visit", msg: "Hi! I would like to book a free site visit." },
    { label: "AMC plans", msg: "Hi! Please share your pool AMC plans." },
  ];
  return (
    <div className="wa-wrap">
      {open && (
        <motion.div
          className="wa-card"
          initial={{ opacity: 0, y: 18, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="wa-head">
            <img src="/srv_logo_2.png" alt="SR Valavan Enterprises" className="wa-avatar-img" width={36} height={36} />
            <div>
              <b>SR Valavan Enterprises</b>
              <span>
                <i className="wa-online" /> Online · replies within an hour
              </span>
            </div>
            <button className="wa-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>
          <div className="wa-body">
            <div className="wa-msg">
              Hi there! Looking for a pool, spa or AMC? Tap a topic below or start a chat —
              we reply fast.
              <small>Just now</small>
            </div>
            <div className="wa-chips">
              {chips.map((c) => (
                <button key={c.label} onClick={() => window.open(waLink(c.msg), "_blank")}>
                  {c.label}
                </button>
              ))}
            </div>
          </div>
          <a
            className="wa-cta"
            href={waLink("Hi SR Valavan Enterprises! I want to enquire about a swimming pool.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Start WhatsApp chat
          </a>
        </motion.div>
      )}
      {!open && <span className="wa-hint">Questions? Chat with us</span>}
      <button className="wa-btn" onClick={toggle} aria-label="Open WhatsApp chat">
        {!seen && <span className="wa-badge">1</span>}
        {open ? <X size={26} /> : <MessageCircle size={28} />}
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
          <p className="footer-blurb">
            Crafting Pools. Creating Experiences.
          </p>
          <p className="footer-sub">
            Swimming Pool Construction | Water Features | Renovation | Commercial &amp; Residential Projects
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/share/1CEGdVDSAZ/" target="_blank" rel="noreferrer" aria-label="SR Valavan Enterprises on Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/sr_vallavan_enterprises?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" aria-label="SR Valavan Enterprises on Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        <div>
          <h5>Explore</h5>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            <li><Link href="/services">Custom pool construction</Link></li>
            <li><Link href="/services">Infinity & overflow pools</Link></li>
            <li><Link href="/services">Residential pools</Link></li>
            <li><Link href="/services">Commercial & resort pools</Link></li>
            <li><Link href="/services">Water features & fountains</Link></li>
            <li><Link href="/services">Renovation & filtration</Link></li>
          </ul>
        </div>
        <div>
          <h5>Reach us</h5>
          <ul>
            <li><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></li>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><Link href="/contact">Kuniyamuthur, Coimbatore</Link></li>
            <li><button onClick={openQuote} style={{ padding: 0, color: "inherit", textAlign: "left" }}>Get a free quote →</button></li>
          </ul>
        </div>
      </div>
      <div className="content-width footer-bottom">
        <span>
          © {new Date().getFullYear()} SR Valavan Enterprises ·{" "}
          <Link href="/privacy-policy">Privacy</Link> · <Link href="/terms">Terms</Link>
        </span>
        <Link href="/">
          Back to top <ArrowUpRight size={13} />
        </Link>
      </div>
    </footer>
  );
}

export function PageHero({
  marker,
  title,
  lede,
  image = IMG.hero,
  badge = "SR VALAVAN · TAMIL NADU",
}: {
  marker: string;
  title: ReactNode;
  lede?: string;
  image?: string;
  badge?: string;
}) {
  return (
    <section className="page-hero">
      <div className="glow-orb glow-a" />
      <div className="glow-orb glow-b" />
      <div className="content-width page-hero-grid">
        <Reveal>
          <div className="sec-marker on-dark">
            <span>{marker}</span>
          </div>
          <h1 className="page-hero-title">{title}</h1>
          {lede && <p className="page-hero-lede">{lede}</p>}
          <div className="page-hero-actions">
            <button className="btn-primary" onClick={openQuote}>
              Get a free quote <ArrowRight size={16} />
            </button>
            <a className="btn-ghost" href={CONTACT.phoneHref}>
              <span className="play-ring">
                <Phone size={16} />
              </span>
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="page-hero-card">
            <img src={image} alt="" aria-hidden />
            <span>{badge}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="content-width cta-inner">
        <Reveal>
          <h2>
            Ready to Make <em>a Splash?</em>
          </h2>
          <p>Your dream pool could be closer than you think. Let&apos;s turn your vision into water.</p>
          <div className="cta-actions">
            <button className="btn-primary" onClick={openQuote}>
              Request a Consultation <ArrowRight size={16} />
            </button>
            <a className="btn-ghost" href={CONTACT.phoneHref}>
              <span className="play-ring">
                <Phone size={16} />
              </span>
              Call Us
            </a>
            <a className="btn-ghost" href={waLink("Hi! I want to plan my dream pool.")} target="_blank" rel="noreferrer">
              <span className="play-ring">
                <MessageCircle size={16} />
              </span>
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ScrollToTop() {
  const [path] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return null;
}

export default function Layout({ children }: { children: ReactNode }) {
  const { scrolled, progress } = usePageState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  useEffect(() => {
    const fn = () => setQuoteOpen(true);
    window.addEventListener("sr:open-quote", fn);
    return () => window.removeEventListener("sr:open-quote", fn);
  }, []);
  return (
    <div className="pro-page" id="top">
      <ScrollToTop />
      <div className="page-progress" style={{ transform: `scaleX(${progress})` }} />
      <Nav onMenu={() => setMenuOpen(true)} scrolled={scrolled} />
      {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      {children}
      <SiteFooter />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <WhatsAppWidget />
    </div>
  );
}
