import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { CONTACT, waLink } from "../data/content";
import { Reveal, cn, usePageState } from "./motion";

export function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="SR Valavan Enterprises home">
      <span className="brand-mark">S</span>
      <span className="brand-text">
        <b>SR VALAVAN</b>
        <small style={dark ? { color: "var(--gold-soft)", opacity: 1 } : undefined}>
          ENTERPRISES
        </small>
      </span>
    </Link>
  );
}

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
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
  const links = [
    ...NAV_LINKS,
    { href: "/contact", label: "Get a site visit" },
  ];
  return (
    <motion.div
      className="mobile-menu"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mobile-menu-head">
        <Brand dark />
        <button onClick={onClose} aria-label="Close navigation">
          <X size={24} />
        </button>
      </div>
      <div className="mobile-menu-list">
        <button onClick={() => go("/")}>
          Home <ArrowUpRight size={20} />
        </button>
        {links.map((l) => (
          <button key={l.href} onClick={() => go(l.href)}>
            {l.label} <ArrowUpRight size={20} />
          </button>
        ))}
      </div>
      <div className="mobile-menu-foot">
        <span>SR VALAVAN ENTERPRISES · CHENNAI</span>
        <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
      </div>
    </motion.div>
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
            <span className="wa-avatar">S</span>
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
          <Brand dark />
          <p className="footer-blurb">
            Designer & builder of luxury swimming pools, spas and water landscapes across
            South India — since 2011.
          </p>
        </div>
        <div>
          <h5>Explore</h5>
          <ul>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            <li><Link href="/services">Residential pools</Link></li>
            <li><Link href="/services">Commercial & resorts</Link></li>
            <li><Link href="/services">Renovation</Link></li>
            <li><Link href="/services">AMC & care</Link></li>
          </ul>
        </div>
        <div>
          <h5>Reach us</h5>
          <ul>
            <li><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></li>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><Link href="/contact">Vadapalani, Chennai</Link></li>
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
}: {
  marker: string;
  title: ReactNode;
  lede?: string;
}) {
  return (
    <section className="page-hero">
      <div className="glow-orb glow-a" />
      <div className="glow-orb glow-b" />
      <div className="content-width page-hero-inner">
        <Reveal>
          <div className="sec-marker on-dark">
            <span>{marker}</span>
          </div>
          <h1 className="page-hero-title">{title}</h1>
          {lede && <p className="page-hero-lede">{lede}</p>}
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
            Make room <em>for water.</em>
          </h2>
          <p>Free site visit · Line-item estimate within 48 hours · No pressure, ever.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn-primary">
              Book a free site visit <ArrowRight size={16} />
            </Link>
            <a className="btn-ghost" href={waLink("Hi! I want a pool estimate.")} target="_blank" rel="noreferrer">
              <span className="play-ring">
                <MessageCircle size={16} />
              </span>
              WhatsApp us
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
  return (
    <div className="pro-page" id="top">
      <ScrollToTop />
      <div className="page-progress" style={{ transform: `scaleX(${progress})` }} />
      <Nav onMenu={() => setMenuOpen(true)} scrolled={scrolled} />
      {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      {children}
      <SiteFooter />
      <WhatsAppWidget />
    </div>
  );
}
