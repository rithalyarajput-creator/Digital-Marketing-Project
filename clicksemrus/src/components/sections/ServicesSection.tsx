import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { icon: "🔍", title: "Search Engine Optimization", desc: "Rank higher on Google and drive organic traffic that converts. Long-term authority building for your brand.", points: ["Technical SEO Audit","Keyword Research","Link Building"], accent: "#1A56DB", light: "#EBF2FF" },
  { icon: "📱", title: "Social Media Marketing", desc: "Build loyal communities and turn followers into paying customers through strategic content.", points: ["Content Creation","Community Management","Influencer Outreach"], accent: "#7C3AED", light: "#F5F3FF" },
  { icon: "📈", title: "Pay-Per-Click (PPC)", desc: "Data-driven Google & Meta campaigns that deliver measurable ROI fast.", points: ["Google Ads Management","Meta & Instagram Ads","Conversion Optimization"], accent: "#F59E0B", light: "#FFFBEB", featured: true },
  { icon: "💻", title: "Web Design & Development", desc: "Beautiful, fast, conversion-optimized websites that make your brand stand out.", points: ["Custom Website Design","Landing Pages","E-commerce Solutions"], accent: "#059669", light: "#ECFDF5" },
  { icon: "✍️", title: "Content Marketing", desc: "High-quality content that educates your audience, builds trust and fuels your funnel.", points: ["Blog & Article Writing","Video Scripts","Email Newsletters"], accent: "#DC2626", light: "#FEF2F2" },
  { icon: "🎨", title: "Brand Strategy", desc: "Craft a powerful brand identity that resonates with your audience and creates impressions.", points: ["Brand Identity Design","Positioning & Messaging","Competitive Analysis"], accent: "#0891B2", light: "#ECFEFF" },
];

export default function ServicesSection() {
  return (
    <section className="section" style={{ background: "#F8FAFF" }} id="services">
      <div className="container">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: "60px" }}>
          <span className="section-tag">What We Do</span>
          <div className="divider divider-center" />
          <h2 className="h2" style={{ marginTop: "20px", marginBottom: "14px" }}>
            Services That Drive <span className="gradient-text">Real Results</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: "500px", margin: "0 auto" }}>
            Every strategy is custom-built for your brand&apos;s unique goals and market position.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="svc-grid">
          {services.map((s) => (
            <div key={s.title} style={{
              background: s.featured ? "linear-gradient(145deg, #1A56DB 0%, #2563EB 100%)" : "#fff",
              border: `1.5px solid ${s.featured ? "transparent" : "#E2E8F0"}`,
              borderRadius: "20px", padding: "32px",
              boxShadow: s.featured ? "0 20px 60px rgba(26,86,219,0.25)" : "none",
              position: "relative", transition: "transform 0.25s, box-shadow 0.25s",
              cursor: "pointer"
            }}
            className={s.featured ? "" : "card-base"}>

              {s.featured && (
                <span style={{ position: "absolute", top: "14px", right: "14px", background: "#F59E0B", color: "#fff", padding: "4px 12px", borderRadius: "100px", fontSize: "10px", fontWeight: 800, letterSpacing: "0.08em" }}>
                  ⭐ MOST POPULAR
                </span>
              )}

              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: s.featured ? "rgba(255,255,255,0.15)" : s.light, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "18px" }}>
                {s.icon}
              </div>

              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "10px", color: s.featured ? "#fff" : "#0F172A", lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: "13.5px", lineHeight: 1.65, color: s.featured ? "rgba(255,255,255,0.78)" : "#64748B", marginBottom: "16px" }}>{s.desc}</p>

              <ul style={{ listStyle: "none", marginBottom: "20px" }}>
                {s.points.map((p) => (
                  <li key={p} style={{ fontSize: "13px", color: s.featured ? "rgba(255,255,255,0.82)" : "#475569", padding: "3px 0 3px 16px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: s.featured ? "#FBBF24" : s.accent, fontWeight: 700 }}>→</span>
                    {p}
                  </li>
                ))}
              </ul>

              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "13px", fontWeight: 700, color: s.featured ? "#FBBF24" : s.accent, textDecoration: "none" }}>
                Learn More <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "44px" }}>
          <Link href="/services" className="btn btn-outline">View All Services <ArrowRight size={15} /></Link>
        </div>
      </div>
      <style>{`
        @media(max-width:960px){.svc-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:600px){.svc-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </section>
  );
}
