import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const points = [
  "Custom strategies — no cookie-cutter templates",
  "Transparent reporting with real-time dashboards",
  "Dedicated account manager for every client",
  "ROI-focused campaigns with measurable results",
];

export default function AboutSection() {
  return (
    <section className="section" style={{ background: "#F8F6FF" }} id="about">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="about-grid">

          {/* Visual */}
          <div style={{ position: "relative", minHeight: "460px" }}>
            {/* Main card */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              background: "linear-gradient(145deg, #6C47FF 0%, #7C5CFF 100%)",
              borderRadius: "28px", padding: "40px", width: "240px",
              textAlign: "center", color: "#fff", zIndex: 2,
              boxShadow: "0 24px 80px rgba(108,71,255,0.35)"
            }}>
              <div style={{ fontSize: "48px", marginBottom: "12px" }}>⚡</div>
              <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "4px" }}>Clicksemrus</h3>
              <p style={{ fontSize: "13px", opacity: 0.75, marginBottom: "20px" }}>Your Growth Partner</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
                {["SEO","PPC","Social","Web"].map((t) => (
                  <span key={t} style={{ background: "rgba(255,255,255,0.2)", padding: "4px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Float 1 */}
            <div className="anim-float" style={{
              position: "absolute", top: "10%", left: "0",
              background: "#fff", borderRadius: "18px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.1)", border: "1px solid #EAE7FF",
              padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px", zIndex: 3
            }}>
              <span style={{ fontSize: "28px" }}>🚀</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: "18px", color: "#0D0B26" }}>200+</div>
                <div style={{ fontSize: "11px", color: "#9896B8" }}>Projects Done</div>
              </div>
            </div>

            {/* Float 2 */}
            <div className="anim-float2" style={{
              position: "absolute", bottom: "10%", right: "0",
              background: "#fff", borderRadius: "18px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.1)", border: "1px solid #EAE7FF",
              padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px", zIndex: 3
            }}>
              <span style={{ fontSize: "28px" }}>⭐</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: "18px", color: "#0D0B26" }}>4.9★</div>
                <div style={{ fontSize: "11px", color: "#9896B8" }}>Client Rating</div>
              </div>
            </div>

            {/* Bg decoration */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px", height: "300px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(108,71,255,0.1) 0%, transparent 70%)",
              zIndex: 1
            }} />
          </div>

          {/* Content */}
          <div>
            <span className="tag">About Us</span>
            <h2 className="heading-xl" style={{ marginBottom: "20px" }}>
              We Don&apos;t Just Market.<br />
              <span className="gradient-text">We Build Empires.</span>
            </h2>
            <p style={{ fontSize: "16px", color: "#6B6A8A", lineHeight: 1.75, marginBottom: "16px" }}>
              Clicksemrus is a full-service digital marketing agency founded on one belief — every brand deserves a strategy as unique as its DNA. We combine data, creativity, and technology to deliver growth that matters.
            </p>
            <p style={{ fontSize: "16px", color: "#6B6A8A", lineHeight: 1.75, marginBottom: "28px" }}>
              From startups to established businesses, we&apos;ve helped brands multiply their online presence, dominate search rankings, and convert traffic into revenue.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
              {points.map((point) => (
                <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "15px", color: "#4A4870" }}>
                  <CheckCircle2 size={18} color="#6C47FF" style={{ flexShrink: 0, marginTop: "2px" }} />
                  {point}
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:1024px){.about-grid{grid-template-columns:1fr!important;} .about-grid > div:first-child{display:none;}}`}</style>
    </section>
  );
}
