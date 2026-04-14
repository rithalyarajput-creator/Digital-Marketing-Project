const testimonials = [
  {
    name: "Rahul Kapoor", role: "CEO, TechBridge Solutions", initials: "RK",
    text: "Clicksemrus completely transformed our online presence. Our organic traffic grew by 400% in just 4 months. Absolutely phenomenal team!",
    color: "#2563EB",
  },
  {
    name: "Priya Sharma", role: "Founder, StyleNest E-Commerce", initials: "PS",
    text: "The PPC campaigns generated 6x ROAS in the first month. I've worked with agencies before — nobody comes close to Clicksemrus.",
    color: "#6C47FF", featured: true,
  },
  {
    name: "Arjun Mehta", role: "Marketing Head, FreshBite Foods", initials: "AM",
    text: "From branding to social media, they handle everything flawlessly. Instagram went from 2K to 50K followers in 3 months. Highly recommend!",
    color: "#D97706",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section" style={{ background: "#fff" }} id="testimonials">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="tag">Client Love</span>
          <h2 className="heading-xl">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }} className="testi-grid">
          {testimonials.map((t) => (
            <div key={t.name} style={{
              borderRadius: "24px", padding: "36px",
              ...(t.featured ? {
                background: "linear-gradient(145deg, #6C47FF, #7C5CFF)",
                boxShadow: "0 20px 60px rgba(108,71,255,0.3)"
              } : {
                background: "#fff", border: "1.5px solid #EAE7FF"
              })
            }} className={t.featured ? "" : "card"}>

              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "20px" }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: t.featured ? "#FCD34D" : "#FBBF24", fontSize: "18px" }}>★</span>
                ))}
              </div>

              <p style={{
                fontSize: "15px", lineHeight: 1.75,
                color: t.featured ? "rgba(255,255,255,0.9)" : "#4A4870",
                marginBottom: "28px", fontStyle: "italic"
              }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "46px", height: "46px", borderRadius: "50%",
                  background: t.featured ? "rgba(255,255,255,0.2)" : t.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 700, fontSize: "14px", flexShrink: 0
                }}>{t.initials}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "15px", color: t.featured ? "#fff" : "#0D0B26" }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: t.featured ? "rgba(255,255,255,0.65)" : "#9896B8" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.testi-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
