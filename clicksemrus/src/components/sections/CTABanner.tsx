import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section style={{ background: "#F8F6FF", padding: "100px 0" }}>
      <div className="container">
        <div style={{
          background: "linear-gradient(145deg, #6C47FF 0%, #7C5CFF 60%, #9B74FF 100%)",
          borderRadius: "32px", padding: "72px 48px", textAlign: "center",
          position: "relative", overflow: "hidden",
          boxShadow: "0 32px 80px rgba(108,71,255,0.35)"
        }}>
          {/* Decoration */}
          <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto" }}>
            <span style={{
              display: "inline-block", padding: "6px 16px",
              background: "rgba(255,255,255,0.2)", color: "#fff",
              borderRadius: "100px", fontSize: "12px", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "20px"
            }}>
              Limited Spots Available
            </span>
            <h2 style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "18px", letterSpacing: "-0.02em" }}>
              Ready to 10x Your Digital Growth?
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.8)", marginBottom: "40px", lineHeight: 1.7 }}>
              Get a FREE 30-minute strategy call and a detailed audit of your current marketing — no strings attached.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "28px" }}>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "16px 32px", borderRadius: "14px",
                background: "#fff", color: "#6C47FF",
                fontWeight: 700, fontSize: "15px", textDecoration: "none",
                boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
                transition: "all 0.2s"
              }}>
                Claim Your Free Audit <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "16px 32px", borderRadius: "14px",
                border: "2px solid rgba(255,255,255,0.4)", color: "#fff",
                fontWeight: 600, fontSize: "15px", textDecoration: "none",
                transition: "all 0.2s"
              }}>
                See Our Work
              </Link>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap", fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
              <span>✓ No commitment required</span>
              <span>✓ 100% free</span>
              <span>✓ Response within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
