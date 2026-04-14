import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section style={{ background: "#FFF8F0", padding: "96px 0" }}>
      <div className="container">
        <div style={{ background: "linear-gradient(145deg,#1A56DB 0%,#2563EB 60%,#3B74E8 100%)", borderRadius: "28px", padding: "64px 48px", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 28px 80px rgba(26,86,219,0.3)" }}>
          <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "260px", height: "260px", borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(245,158,11,0.15)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
            <span style={{ display: "inline-block", padding: "5px 16px", background: "#F59E0B", color: "#fff", borderRadius: "100px", fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "20px" }}>
              ⚡ Limited Spots Available
            </span>
            <h2 style={{ fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Ready to 10x Your Digital Growth?
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: "38px" }}>
              Get a FREE 30-minute strategy call and a detailed audit — no strings attached.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginBottom: "26px" }}>
              <Link href="/contact" className="btn btn-yellow" style={{ fontSize: "15px", padding: "14px 30px" }}>
                Claim Free Audit Now <ArrowRight size={17} />
              </Link>
              <Link href="/portfolio" className="btn" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.35)", fontSize: "15px", padding: "14px 30px" }}>
                See Our Work
              </Link>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "28px", flexWrap: "wrap", fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
              <span>✓ No commitment</span><span>✓ 100% Free</span><span>✓ Response in 24hrs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
