"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { n: 200, s: "+", label: "Brands Scaled", sub: "Across 15+ industries", icon: "🚀" },
  { n: 500, s: "%", label: "Avg. Traffic Growth", sub: "SEO clients in 6 months", icon: "📈" },
  { n: 5,   s: "x", label: "Return on Ad Spend", sub: "Average ROAS for PPC", icon: "💰" },
  { n: 98,  s: "%", label: "Client Retention", sub: "Stay because results are real", icon: "❤️" },
];

function Counter({ t, s, go }: { t: number; s: string; go: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!go) return;
    const step = t / (1800 / 16); let cur = 0;
    const id = setInterval(() => { cur += step; if (cur >= t) { setV(t); clearInterval(id); } else setV(Math.floor(cur)); }, 16);
    return () => clearInterval(id);
  }, [t, go]);
  return <>{v}{s}</>;
}

export default function StatsSection() {
  const [go, setGo] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGo(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#FFF8F0", padding: "80px 0" }} ref={ref}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: "50px" }}>
          <span className="section-tag" style={{ background: "#FEF3C7", color: "#B45309" }}>Our Numbers</span>
          <h2 className="h2" style={{ marginTop: "14px" }}>
            Results That <span className="gradient-text">Speak Louder</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} style={{
              background: "#fff", borderRadius: "20px", padding: "36px 24px",
              textAlign: "center", border: "1.5px solid #FDE68A",
              boxShadow: i === 1 ? "0 12px 40px rgba(245,158,11,0.18)" : "0 4px 16px rgba(0,0,0,0.05)"
            }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{s.icon}</div>
              <div style={{ fontSize: "clamp(2.2rem,4vw,3rem)", fontWeight: 900, lineHeight: 1, background: "linear-gradient(135deg,#1A56DB,#F59E0B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "10px" }}>
                <Counter t={s.n} s={s.s} go={go} />
              </div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#0F172A", marginBottom: "5px" }}>{s.label}</div>
              <div style={{ fontSize: "12px", color: "#94A3B8" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  );
}
