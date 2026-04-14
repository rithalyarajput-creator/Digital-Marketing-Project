import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "🔍",
    title: "Search Engine Optimization",
    desc: "Rank higher on Google and drive organic traffic that converts. Long-term authority building for your brand.",
    points: ["Technical SEO Audit", "Keyword Research", "Link Building"],
    color: "#2563EB", bg: "#EFF6FF",
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    desc: "Build loyal communities and turn followers into paying customers through strategic content & engagement.",
    points: ["Content Creation", "Community Management", "Influencer Outreach"],
    color: "#DB2777", bg: "#FDF2F8",
  },
  {
    icon: "📈",
    title: "Pay-Per-Click (PPC)",
    desc: "Data-driven Google & Meta campaigns that deliver measurable ROI. Maximum returns on your ad spend.",
    points: ["Google Ads Management", "Meta & Instagram Ads", "Conversion Optimization"],
    color: "#6C47FF", bg: "#EEE9FF",
    featured: true,
  },
  {
    icon: "💻",
    title: "Web Design & Development",
    desc: "Beautiful, fast, conversion-optimized websites. Your brand stand out and sell more online.",
    points: ["Custom Website Design", "Landing Page Optimization", "E-commerce Solutions"],
    color: "#D97706", bg: "#FFFBEB",
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    desc: "High-quality content that educates your audience, builds trust, and fuels your marketing funnel.",
    points: ["Blog & Article Writing", "Video Scripts", "Email Newsletters"],
    color: "#059669", bg: "#ECFDF5",
  },
  {
    icon: "🎨",
    title: "Brand Strategy",
    desc: "Craft a powerful brand identity that resonates with your target audience and creates lasting impressions.",
    points: ["Brand Identity Design", "Positioning & Messaging", "Competitive Analysis"],
    color: "#7C3AED", bg: "#F5F3FF",
  },
];

export default function ServicesSection() {
  return (
    <section className="section" style={{ background: "#fff" }} id="services">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="tag">What We Do</span>
          <h2 className="heading-xl" style={{ marginBottom: "16px" }}>
            Services That Drive <span className="gradient-text">Real Results</span>
          </h2>
          <p style={{ fontSize: "17px", color: "#6B6A8A", maxWidth: "520px", margin: "0 auto" }}>
            Every strategy is custom-built for your brand&apos;s unique goals and market position.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="card" style={{
              padding: "32px",
              position: "relative",
              ...(s.featured ? {
                background: "linear-gradient(145deg, #6C47FF 0%, #7C5CFF 100%)",
                border: "none",
                boxShadow: "0 20px 60px rgba(108,71,255,0.35)"
              } : {})
            }}>
              {s.featured && (
                <span style={{
                  position: "absolute", top: "16px", right: "16px",
                  background: "rgba(255,255,255,0.2)", color: "#fff",
                  padding: "4px 12px", borderRadius: "100px",
                  fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em"
                }}>MOST POPULAR</span>
              )}

              {/* Icon */}
              <div style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: s.featured ? "rgba(255,255,255,0.2)" : s.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "24px", marginBottom: "20px"
              }}>{s.icon}</div>

              <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "10px", color: s.featured ? "#fff" : "#0D0B26" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: s.featured ? "rgba(255,255,255,0.8)" : "#6B6A8A", marginBottom: "18px" }}>
                {s.desc}
              </p>

              <ul style={{ listStyle: "none", marginBottom: "22px" }}>
                {s.points.map((p) => (
                  <li key={p} style={{ fontSize: "13px", color: s.featured ? "rgba(255,255,255,0.85)" : "#6B6A8A", padding: "4px 0", paddingLeft: "16px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: s.featured ? "rgba(255,255,255,0.7)" : s.color }}>→</span>
                    {p}
                  </li>
                ))}
              </ul>

              <Link href={`/services`} style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "14px", fontWeight: 600, textDecoration: "none",
                color: s.featured ? "#fff" : s.color
              }}>
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/services" className="btn-outline">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
