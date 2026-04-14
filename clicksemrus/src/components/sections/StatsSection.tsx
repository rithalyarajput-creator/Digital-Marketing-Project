"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 200, suffix: "+", label: "Brands Scaled", desc: "Across 15+ industries" },
  { number: 500, suffix: "%", label: "Avg. Traffic Growth", desc: "SEO clients in 6 months" },
  { number: 5, suffix: "x", label: "Return on Ad Spend", desc: "Average ROAS for PPC" },
  { number: 98, suffix: "%", label: "Client Retention", desc: "Stay because results are real" },
];

function Counter({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [target, started]);
  return <>{count}{suffix}</>;
}

export default function StatsSection() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" style={{ background: "#0D0B26" }} ref={ref}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ display: "inline-block", padding: "6px 16px", background: "rgba(108,71,255,0.3)", color: "#A78BFA", borderRadius: "100px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "18px" }}>
            Our Numbers
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
            Results That <span className="gradient-text">Speak Louder</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.08)", borderRadius: "24px", overflow: "hidden" }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} style={{
              background: "#0D0B26", padding: "40px 28px", textAlign: "center",
              position: "relative", overflow: "hidden"
            }}>
              <div style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1,
                background: "linear-gradient(135deg, #6C47FF 0%, #C840E9 50%, #FF6B2B 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text", marginBottom: "12px"
              }}>
                <Counter target={s.number} suffix={s.suffix} started={started} />
              </div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>{s.label}</div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>{s.desc}</div>
              {i === 2 && <div style={{ position: "absolute", inset: 0, background: "rgba(108,71,255,0.06)", pointerEvents: "none" }} />}
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  );
}
