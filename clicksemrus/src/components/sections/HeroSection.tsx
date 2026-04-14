"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Star, TrendingUp, Users, Award, CheckCircle } from "lucide-react";

const words = ["Customers.", "Revenue.", "Growth.", "Results.", "Success."];

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let wi = 0, ci = 0, del = false;
    let t: ReturnType<typeof setTimeout>;
    function run() {
      const el = typedRef.current; if (!el) return;
      const w = words[wi];
      el.textContent = del ? w.substring(0, ci - 1) : w.substring(0, ci + 1);
      del ? ci-- : ci++;
      let d = del ? 65 : 115;
      if (!del && ci === w.length) { d = 2200; del = true; }
      else if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; d = 450; }
      t = setTimeout(run, d);
    }
    run(); return () => clearTimeout(t);
  }, []);

  return (
    <section style={{ paddingTop: "70px", background: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>

      {/* Background shapes */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "55%", height: "100%", background: "linear-gradient(135deg, #EBF2FF 0%, #F0F7FF 100%)", borderRadius: "0 0 0 80px", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "60px", left: "5%", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "48px", paddingBottom: "48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="hero-grid">

          {/* LEFT */}
          <div>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#EBF2FF", border: "1px solid #BFDBFE", borderRadius: "100px", padding: "7px 16px", marginBottom: "28px" }}>
              <span style={{ width: "7px", height: "7px", background: "#22C55E", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 6px #22C55E" }} className="anim-pulse" />
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#1A56DB" }}>India&apos;s Result-Driven Marketing Agency</span>
            </div>

            {/* Headline */}
            <h1 style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#0F172A", marginBottom: "10px" }}>
              We Turn Clicks Into
            </h1>
            <h1 style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "20px", minHeight: "1.1em" }}>
              <span ref={typedRef} className="gradient-text" />
              <span className="anim-blink" style={{ color: "#1A56DB" }}>|</span>
            </h1>

            <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.75, maxWidth: "500px", marginBottom: "28px" }}>
              Clicksemrus helps ambitious brands dominate digital marketing through strategic SEO, paid media, social growth, and conversion-focused web design.
            </p>

            {/* Points */}
            <div style={{ marginBottom: "36px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Custom strategies for every brand", "Transparent reporting & dashboards", "200+ brands scaled successfully"].map(p => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle size={16} color="#1A56DB" />
                  <span style={{ fontSize: "14px", color: "#475569", fontWeight: 500 }}>{p}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "44px" }}>
              <Link href="/contact" className="btn btn-blue">
                Start Growing Today <ArrowRight size={17} />
              </Link>
              <Link href="/portfolio" className="btn btn-outline">
                View Our Work
              </Link>
            </div>

            {/* Social proof */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ display: "flex" }}>
                {[["RK","#1A56DB"],["PS","#F59E0B"],["AM","#22C55E"],["VG","#8B5CF6"]].map(([init, color], i) => (
                  <div key={i} style={{ width: "38px", height: "38px", borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "11px", fontWeight: 700, border: "2.5px solid #fff", marginLeft: i > 0 ? "-9px" : "0" }}>
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                  {[...Array(5)].map((_,i) => <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />)}
                  <span style={{ fontWeight: 700, fontSize: "14px", marginLeft: "5px", color: "#0F172A" }}>4.9/5</span>
                </div>
                <p style={{ fontSize: "12px", color: "#94A3B8", margin: 0, marginTop: "2px" }}>from 200+ happy clients</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ position: "relative", height: "500px" }} className="hero-right">

            {/* Center card */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "210px",
              background: "#fff", borderRadius: "24px",
              boxShadow: "0 24px 70px rgba(26,86,219,0.18)",
              border: "1.5px solid #BFDBFE", padding: "28px 24px",
              textAlign: "center", zIndex: 3
            }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg, #1A56DB, #3B74E8)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                <TrendingUp size={24} color="#fff" />
              </div>
              <div className="gradient-text" style={{ fontSize: "40px", fontWeight: 900, lineHeight: 1 }}>5x</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A", marginTop: "6px" }}>Average ROI</div>
              <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: "3px" }}>Across all campaigns</div>
            </div>

            {/* Top left float */}
            <div className="anim-float" style={{
              position: "absolute", top: "6%", left: "0",
              background: "#fff", borderRadius: "18px",
              boxShadow: "0 10px 36px rgba(0,0,0,0.09)", border: "1px solid #E2E8F0",
              padding: "16px 18px", zIndex: 4, width: "185px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Users size={17} color="#16A34A" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "18px", color: "#0F172A", lineHeight: 1 }}>200+</div>
                  <div style={{ fontSize: "11px", color: "#94A3B8" }}>Brands Scaled</div>
                </div>
              </div>
              <div style={{ height: "5px", background: "#F1F5F9", borderRadius: "5px" }}>
                <div style={{ width: "80%", height: "100%", background: "#22C55E", borderRadius: "5px" }} />
              </div>
            </div>

            {/* Bottom right float */}
            <div className="anim-float2" style={{
              position: "absolute", bottom: "6%", right: "0",
              background: "#fff", borderRadius: "18px",
              boxShadow: "0 10px 36px rgba(0,0,0,0.09)", border: "1px solid #E2E8F0",
              padding: "16px 18px", zIndex: 4, width: "175px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#EBF2FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Award size={17} color="#1A56DB" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "18px", color: "#0F172A", lineHeight: 1 }}>98%</div>
                  <div style={{ fontSize: "11px", color: "#94A3B8" }}>Retention Rate</div>
                </div>
              </div>
            </div>

            {/* Top right float */}
            <div className="anim-float3" style={{
              position: "absolute", top: "20%", right: "0",
              background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
              borderRadius: "18px", padding: "18px 20px", zIndex: 4, width: "152px",
              boxShadow: "0 10px 32px rgba(245,158,11,0.3)"
            }}>
              <div style={{ fontWeight: 900, fontSize: "26px", color: "#fff", lineHeight: 1 }}>500%</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.85)", marginTop: "4px" }}>Traffic Growth</div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.65)", marginTop: "2px" }}>in 6 months</div>
            </div>

            {/* Deco circle */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "280px", height: "280px", borderRadius: "50%", border: "1.5px dashed #BFDBFE", opacity: 0.6, zIndex: 1, pointerEvents: "none" }} />
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:960px){ .hero-grid{grid-template-columns:1fr!important;} .hero-right{display:none!important;} }
      `}</style>
    </section>
  );
}
