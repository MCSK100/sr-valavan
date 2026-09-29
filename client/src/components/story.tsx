import { useEffect, useRef, useState } from "react";

/* Split headline into hoverable letters */
export function SplitLetters({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((ch, i) => (
        <span key={i} className="h-letter">
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </>
  );
}

/* Rotating word under hero */
const DEFAULT_WORDS = ["Backyards.", "Villas.", "Resorts.", "Rooftops.", "Farmhouses."];
export function RollingWord({ words = DEFAULT_WORDS }: { words?: string[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span className="roll" style={{ transform: `translateY(-${idx * 1.2}em)`, transition: "transform .7s cubic-bezier(.22,1,.36,1)" }}>
      {words.map((w) => (
        <span key={w} className="roll-word">
          <SplitLetters text={w} />
        </span>
      ))}
    </span>
  );
}

/* Vinyl-style pool story player */
const SCRIPT = [
  "Six years, 120+ pools — from ECR infinity edges to Coimbatore plunge courts.",
  "We design the shell, hydraulics and finish as one drawing. Not three.",
  "Salt + UV water, silent plant rooms, 10-year waterproof warranty.",
  "Press play on your site visit — estimate within 48 hours.",
];
export function DiskPlayer() {
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const dur = 120;
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setT((v) => (v >= dur ? 0 : v + 1)), 1000);
    return () => clearInterval(id);
  }, [playing]);
  const pct = (t / dur) * 100;
  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  const line = SCRIPT[Math.min(SCRIPT.length - 1, Math.floor(t / (dur / SCRIPT.length)))];
  return (
    <div className="recorder" role="region" aria-label="Our pool story player">
      <div className={`disk ${playing ? "spinning" : ""}`} aria-hidden />
      <div className="rec-center">
        <div className="rec-title">Our pool story, splashed · {line.slice(0, 34)}…</div>
        <div
          className="play-slider"
          onClick={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setT(Math.round(((e.clientX - r.left) / r.width) * dur));
          }}
        >
          <div className="slider-track">
            <div className="slider-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="slider-knob" style={{ left: `calc(${pct}% - 11px)` }} />
        </div>
        <div className="timestamps">
          <span>{fmt(t)}</span>
          <span>{fmt(dur)}</span>
        </div>
      </div>
      <button className="play-circle" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play"}>
        {playing ? (
          <span style={{ display: "flex", gap: 4 }}>
            <i style={{ width: 4, height: 14, background: "#fff", borderRadius: 2, display: "block" }} />
            <i style={{ width: 4, height: 14, background: "#fff", borderRadius: 2, display: "block" }} />
          </span>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2l9 6-9 6z" /></svg>
        )}
      </button>
    </div>
  );
}

/* Scroll-driven float travelling on a dotted trail */
export function FloatFly({ containerId }: { containerId: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const sprite = el.querySelector(".plane-sprite") as HTMLElement;
    const path = el.querySelector("path") as SVGPathElement;
    if (!sprite || !path) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const host = document.getElementById(containerId);
      if (!host) return;
      const hr = host.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, 1 - (hr.bottom - vh * 0.4) / (hr.height + vh * 0.4)));
      const len = path.getTotalLength();
      const pt = path.getPointAtLength(len * p);
      const pt2 = path.getPointAtLength(Math.min(len, len * p + 2));
      const ang = (Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180) / Math.PI;
      sprite.style.transform = `translate(${pt.x}px, ${pt.y}px) translate(-50%,-50%) rotate(${ang}deg)`;
      sprite.style.opacity = p <= 0.01 || p >= 0.995 ? "0" : "1";
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [containerId]);
  return (
    <div className="plane-fly" ref={ref} aria-hidden style={{ height: 900 }}>
      <svg className="plane-trail" viewBox="0 0 1200 900" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <path id="planeTrailPath" d="M -40 120 C 240 60, 420 260, 640 200 S 980 420, 1240 300" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="2 12" strokeLinecap="round" opacity="0.7" />
      </svg>
      <div className="plane-sprite">🦩</div>
    </div>
  );
}

/* Testimonial fan driven by scroll */
export function useFanSpread(ref: React.RefObject<HTMLElement | null>) {
  const [spread, setSpread] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.75 - r.top) / (vh * 0.6)));
      setSpread(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);
  return spread;
}

/* Tile row reveal */
export function useTileReveal() {
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      document.querySelectorAll<HTMLElement>(".tiles-row").forEach((row) => {
        const r = row.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.min(1, Math.max(0, (vh * 0.92 - r.top) / (vh * 0.55)));
        row.style.setProperty("--reveal", p.toFixed(3));
      });
      const hero = document.querySelector<HTMLElement>(".hero-content");
      if (hero) {
        const y = window.scrollY;
        const s = Math.max(0.82, 1 - y / 1400);
        hero.style.transform = `scale(${s.toFixed(3)})`;
        hero.style.opacity = String(Math.max(0.15, 1 - y / 900));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

/* Subtle falling water-drops (rain) overlay for the hero.
   Canvas-based, pauses off-screen, fades to minimal as you scroll. */
export function RainDrops({ density = 90 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0;
    let h = 0;
    let drops: Array<{ x: number; y: number; len: number; speed: number; opacity: number }> = [];
    const seed = () => {
      const count = w < 700 ? Math.round(density / 2) : density;
      drops = Array.from({ length: count }, () => ({
        x: Math.random() * (w + 60),
        y: Math.random() * (h + 60) - 30,
        len: 10 + Math.random() * 22,
        speed: 2 + Math.random() * 4,
        opacity: 0.08 + Math.random() * 0.2,
      }));
    };
    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };
    resize();
    window.addEventListener("resize", resize);
    let visible = true;
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0 });
    io.observe(canvas);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let fade = 1;
    const onScroll = () => {
      const vh = window.innerHeight || 1;
      fade = Math.max(0.12, 1 - window.scrollY / (vh * 0.9));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible || mq.matches) return;
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1.2;
      ctx.lineCap = "round";
      for (const d of drops) {
        ctx.strokeStyle = `rgba(200,235,245,${(d.opacity * fade).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - d.len * 0.18, d.y + d.len);
        ctx.stroke();
        d.y += d.speed;
        d.x -= d.speed * 0.18;
        if (d.y > h + 30) {
          d.y = -30;
          d.x = Math.random() * (w + 60);
        }
      }
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [density]);
  return <canvas ref={ref} className="rain-canvas" aria-hidden />;
}
