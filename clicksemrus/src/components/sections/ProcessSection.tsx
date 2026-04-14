const steps = [
  { num: "01", icon: "🎯", title: "Discovery & Audit", desc: "We deep-dive into your brand, competitors, and market to uncover untapped growth opportunities." },
  { num: "02", icon: "📊", title: "Strategy Development", desc: "We craft a data-backed, custom marketing roadmap aligned with your business goals." },
  { num: "03", icon: "✏️", title: "Content & Creative", desc: "Our creative team produces high-impact content, ads, and visuals that captivate your audience." },
  { num: "04", icon: "🚀", title: "Launch & Execute", desc: "Campaigns go live across all channels — optimized from day one for maximum performance." },
  { num: "05", icon: "📈", title: "Analyse & Scale", desc: "We track every metric, report transparently, and continuously optimize to scale your results." },
];

export default function ProcessSection() {
  return (
    <section className="section" style={{ background: "#F8F6FF" }} id="process">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="tag">How We Work</span>
          <h2 className="heading-xl">
            Our Proven <span className="gradient-text">5-Step Process</span>
          </h2>
          <p style={{ fontSize: "17px", color: "#6B6A8A", maxWidth: "480px", margin: "16px auto 0" }}>
            A proven framework that delivers consistent results, every time.
          </p>
        </div>

        {/* Desktop */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "0", position: "relative" }} className="process-desktop">
          {/* connector line */}
          <div style={{ position: "absolute", top: "44px", left: "10%", right: "10%", height: "2px", background: "linear-gradient(90deg, #6C47FF, #C840E9, #FF6B2B)" }} />
          {steps.map((s, i) => (
            <div key={s.num} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 12px" }}>
              <div style={{
                width: "88px", height: "88px", borderRadius: "20px",
                background: i === 2 ? "linear-gradient(135deg, #6C47FF, #7C5CFF)" : "#fff",
                border: i === 2 ? "none" : "2px solid #EAE7FF",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                position: "relative", zIndex: 2, marginBottom: "20px",
                boxShadow: i === 2 ? "0 12px 40px rgba(108,71,255,0.35)" : "0 4px 16px rgba(0,0,0,0.06)"
              }}>
                <span style={{ fontSize: "28px", display: "block" }}>{s.icon}</span>
                <span style={{ fontSize: "11px", fontWeight: 700, color: i === 2 ? "rgba(255,255,255,0.7)" : "#6C47FF" }}>{s.num}</span>
              </div>
              <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#0D0B26", marginBottom: "8px" }}>{s.title}</h3>
              <p style={{ fontSize: "12px", color: "#6B6A8A", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div style={{ display: "none", flexDirection: "column", gap: "12px" }} className="process-mobile">
          {steps.map((s, i) => (
            <div key={s.num} style={{
              display: "flex", gap: "16px", padding: "20px 24px", borderRadius: "16px",
              background: i === 2 ? "linear-gradient(135deg, #6C47FF, #7C5CFF)" : "#fff",
              border: i === 2 ? "none" : "1.5px solid #EAE7FF",
              boxShadow: i === 2 ? "0 12px 40px rgba(108,71,255,0.25)" : "none"
            }}>
              <div style={{
                width: "52px", height: "52px", borderRadius: "14px", flexShrink: 0,
                background: i === 2 ? "rgba(255,255,255,0.2)" : "#EEE9FF",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
              }}>
                <span style={{ fontSize: "20px" }}>{s.icon}</span>
                <span style={{ fontSize: "10px", fontWeight: 700, color: i === 2 ? "rgba(255,255,255,0.7)" : "#6C47FF" }}>{s.num}</span>
              </div>
              <div>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: i === 2 ? "#fff" : "#0D0B26", marginBottom: "4px" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", color: i === 2 ? "rgba(255,255,255,0.75)" : "#6B6A8A" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){
          .process-desktop{display:none!important;}
          .process-mobile{display:flex!important;}
        }
      `}</style>
    </section>
  );
}
