const testimonials = [
  { name: "Rahul Kapoor", role: "CEO, TechBridge Solutions", initials: "RK", color: "#1A56DB", text: "Clicksemrus completely transformed our online presence. Our organic traffic grew by 400% in just 4 months. Absolutely phenomenal team!" },
  { name: "Priya Sharma", role: "Founder, StyleNest E-Commerce", initials: "PS", color: "#F59E0B", text: "The PPC campaigns generated 6x ROAS in the first month. I've worked with agencies before — nobody comes close to Clicksemrus.", featured: true },
  { name: "Arjun Mehta", role: "Marketing Head, FreshBite Foods", initials: "AM", color: "#059669", text: "From branding to social media, they handle everything flawlessly. Instagram went from 2K to 50K followers in 3 months. Highly recommend!" },
];

export default function TestimonialsSection() {
  return (
    <section className="section" style={{ background: "#F8FAFF" }} id="testimonials">
      <div className="container">
        <div className="text-center" style={{ marginBottom: "56px" }}>
          <span className="section-tag">Client Love</span>
          <div className="divider divider-center" />
          <h2 className="h2" style={{ marginTop: "18px" }}>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }} className="testi-grid">
          {testimonials.map((t) => (
            <div key={t.name} style={{
              background: t.featured ? "linear-gradient(145deg,#1A56DB,#2563EB)" : "#fff",
              borderRadius: "22px", padding: "34px",
              border: t.featured ? "none" : "1.5px solid #E2E8F0",
              boxShadow: t.featured ? "0 20px 60px rgba(26,86,219,0.3)" : "0 4px 16px rgba(0,0,0,0.04)",
              transition: "transform 0.25s",
            }} className={t.featured ? "" : "card-base"}>
              <div style={{ display: "flex", gap: "3px", marginBottom: "18px" }}>
                {[...Array(5)].map((_,i) => <span key={i} style={{ fontSize: "16px", color: t.featured ? "#FCD34D" : "#F59E0B" }}>★</span>)}
              </div>
              <p style={{ fontSize: "15px", lineHeight: 1.75, color: t.featured ? "rgba(255,255,255,0.88)" : "#475569", marginBottom: "26px", fontStyle: "italic" }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: t.featured ? "rgba(255,255,255,0.2)" : t.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "13px", flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px", color: t.featured ? "#fff" : "#0F172A" }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: t.featured ? "rgba(255,255,255,0.6)" : "#94A3B8" }}>{t.role}</div>
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
