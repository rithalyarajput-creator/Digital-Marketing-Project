"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Star, TrendingUp, Users, Award, CheckCircle } from "lucide-react";

const words = ["Customers.", "Revenue.", "Growth.", "Results.", "Success."];

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let wordIndex = 0, charIndex = 0, isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;
    function type() {
      const el = typedRef.current;
      if (!el) return;
      const current = words[wordIndex];
      el.textContent = isDeleting ? current.substring(0, charIndex - 1) : current.substring(0, charIndex + 1);
      isDeleting ? charIndex-- : charIndex++;
      let delay = isDeleting ? 60 : 110;
      if (!isDeleting && charIndex === current.length) { delay = 2200; isDeleting = true; }
      else if (isDeleting && charIndex === 0) { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; delay = 500; }
      timer = setTimeout(type, delay);
    }
    type();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{ background: "linear-gradient(160deg, #F8F6FF 0%, #FFFFFF 50%, #FFF8F5 100%)", minHeight: "100vh", paddingTop: "88px" }} className="relative flex items-center overflow-hidden">

      {/* Grid pattern */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(108,71,255,0.07) 1px, transparent 1px)",
        backgroundSize: "44px 44px"
      }} />

      {/* Blobs */}
      <div style={{ position: "absolute", top: "-100px", right: "-50px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(108,71,255,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-100px", left: "-50px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,43,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 24px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
          className="lg-grid">

          {/* ===== LEFT CONTENT ===== */}
          <div style={{ position: "relative", zIndex: 1 }}>

            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "8px 18px", borderRadius: "100px",
              background: "rgba(108,71,255,0.08)", border: "1px solid rgba(108,71,255,0.2)",
              marginBottom: "28px", fontSize: "13px", fontWeight: 600, color: "#6C47FF"
            }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22C55E", display: "inline-block" }} className="animate-pulse-dot" />
              India&apos;s Result-Driven Marketing Agency
            </div>

            {/* Headline */}
            <h1 style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#0D0B26", marginBottom: "20px" }}>
              We Turn Clicks Into
              <br />
              <span ref={typedRef} className="gradient-text" style={{ display: "inline" }} />
              <span className="animate-blink" style={{ color: "#6C47FF" }}>|</span>
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: "1.1rem", color: "#6B6A8A", lineHeight: 1.75, maxWidth: "520px", marginBottom: "36px" }}>
              Clicksemrus helps ambitious brands dominate the digital world through strategic SEO, paid media, social growth, and conversion-focused web design.
            </p>

            {/* Trust points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
              {["Custom strategies for every brand", "Transparent reporting & real-time dashboards", "200+ brands scaled across India"].map((p) => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#4A4870" }}>
                  <CheckCircle size={16} color="#6C47FF" />
                  {p}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 28px", borderRadius: "14px",
                background: "linear-gradient(135deg, #6C47FF, #7C5CFF)",
                color: "#fff", fontWeight: 700, fontSize: "15px",
                textDecoration: "none", boxShadow: "0 8px 32px rgba(108,71,255,0.35)",
                transition: "all 0.2s"
              }}>
                Start Growing Today <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 28px", borderRadius: "14px",
                border: "2px solid #E8E3FF", color: "#0D0B26",
                fontWeight: 600, fontSize: "15px", textDecoration: "none",
                background: "#fff", transition: "all 0.2s"
              }}>
                View Our Work
              </Link>
            </div>

            {/* Social Proof */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex" }}>
                {["RK", "PS", "AM", "VG"].map((init, i) => (
                  <div key={init} style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    background: `linear-gradient(135deg, ${["#6C47FF","#FF6B2B","#22C55E","#E040FB"][i]}, ${["#9B74FF","#FF8F5E","#4ADE80","#F06292"][i]})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontSize: "11px", fontWeight: 700,
                    border: "2px solid #fff", marginLeft: i > 0 ? "-8px" : "0"
                  }}>
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#FBBF24" color="#FBBF24" />)}
                  <span style={{ fontWeight: 700, fontSize: "14px", marginLeft: "4px", color: "#0D0B26" }}>4.9/5</span>
                </div>
                <p style={{ fontSize: "12px", color: "#9896B8", margin: 0 }}>from 200+ happy clients</p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT CARDS ===== */}
          <div style={{ position: "relative", height: "520px" }} className="hero-right">

            {/* Center card */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "220px",
              background: "#fff", borderRadius: "24px",
              boxShadow: "0 20px 60px rgba(108,71,255,0.18)",
              border: "1px solid rgba(108,71,255,0.15)",
              padding: "32px 24px", textAlign: "center", zIndex: 3
            }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "16px",
                background: "linear-gradient(135deg, #6C47FF, #7C5CFF)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px"
              }}>
                <TrendingUp size={26} color="#fff" />
              </div>
              <div className="gradient-text" style={{ fontSize: "42px", fontWeight: 900, lineHeight: 1 }}>5x</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#0D0B26", marginTop: "6px" }}>Average ROI</div>
              <div style={{ fontSize: "11px", color: "#9896B8", marginTop: "3px" }}>Across all campaigns</div>
            </div>

            {/* Card 1 — top left */}
            <div className="animate-float" style={{
              position: "absolute", top: "8%", left: "0",
              background: "#fff", borderRadius: "20px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
              border: "1px solid #F0EDFF",
              padding: "18px 20px", width: "200px", zIndex: 4
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "12px", background: "#F0FDF4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Users size={18} color="#22C55E" />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: "20px", color: "#0D0B26", lineHeight: 1 }}>200+</div>
                  <div style={{ fontSize: "11px", color: "#9896B8" }}>Brands Scaled</div>
                </div>
              </div>
              <div style={{ background: "#F0FDF4", borderRadius: "6px", height: "6px", overflow: "hidden" }}>
                <div style={{ width: "82%", height: "100%", background: "#22C55E", borderRadius: "6px" }} />
              </div>
            </div>

            {/* Card 2 — bottom right */}
            <div className="animate-float2" style={{
              position: "absolute", bottom: "8%", right: "0",
              background: "#fff", borderRadius: "20px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
              border: "1px solid #F0EDFF",
              padding: "18px 20px", width: "190px", zIndex: 4
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "12px", background: "#EEE9FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Award size={18} color="#6C47FF" />
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: "20px", color: "#0D0B26", lineHeight: 1 }}>98%</div>
                  <div style={{ fontSize: "11px", color: "#9896B8" }}>Client Retention</div>
                </div>
              </div>
            </div>

            {/* Card 3 — top right */}
            <div style={{
              position: "absolute", top: "18%", right: "0",
              background: "linear-gradient(135deg, #6C47FF, #9B74FF)",
              borderRadius: "20px",
              boxShadow: "0 12px 40px rgba(108,71,255,0.35)",
              padding: "20px", width: "160px", zIndex: 4,
              animation: "float 4s ease-in-out 1s infinite"
            }}>
              <div style={{ fontSize: "28px", fontWeight: 900, color: "#fff", lineHeight: 1 }}>500%</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", marginTop: "4px" }}>Traffic Growth</div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", marginTop: "2px" }}>in 6 months</div>
            </div>

            {/* Background circle */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "320px", height: "320px", borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(108,71,255,0.06), rgba(108,71,255,0.02))",
              border: "1px solid rgba(108,71,255,0.08)",
              zIndex: 1
            }} />
          </div>
        </div>
      </div>

      {/* Mobile responsive style */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-right { display: none; }
          .lg-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
