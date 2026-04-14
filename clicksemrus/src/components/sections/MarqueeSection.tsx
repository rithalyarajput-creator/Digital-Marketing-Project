export default function MarqueeSection() {
  const items = [
    "SEO Optimization","Social Media Marketing","Google Ads","Content Strategy",
    "Web Design","Email Marketing","Brand Identity","Analytics & Reporting",
    "PPC Campaigns","Lead Generation","E-commerce Marketing","Influencer Marketing",
  ];
  const doubled = [...items, ...items];

  return (
    <div style={{ borderTop: "1px solid #EAE7FF", borderBottom: "1px solid #EAE7FF", background: "#F8F6FF", padding: "16px 0", overflow: "hidden" }}>
      <div style={{ display: "flex", overflow: "hidden" }}>
        <div className="anim-marquee" style={{ display: "flex", alignItems: "center", gap: "32px", whiteSpace: "nowrap", paddingRight: "32px" }}>
          {doubled.map((item, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "32px" }}>
              <span style={{ fontSize: "14px", fontWeight: 500, color: "#4A4870" }}>{item}</span>
              <span style={{ color: "#6C47FF", fontSize: "10px" }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
