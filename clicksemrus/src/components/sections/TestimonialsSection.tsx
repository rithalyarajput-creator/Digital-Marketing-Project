import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Kapoor",
    role: "CEO, TechBridge Solutions",
    initials: "RK",
    text: "Clicksemrus completely transformed our online presence. Our organic traffic grew by 400% in just 4 months. Absolutely phenomenal team!",
    rating: 5,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Priya Sharma",
    role: "Founder, StyleNest E-Commerce",
    initials: "PS",
    text: "The PPC campaigns they ran for us generated 6x ROAS in the first month. I've worked with agencies before — nobody comes close to Clicksemrus.",
    rating: 5,
    color: "from-[#6C47FF] to-[#A78BFA]",
    featured: true,
  },
  {
    name: "Arjun Mehta",
    role: "Marketing Head, FreshBite Foods",
    initials: "AM",
    text: "From branding to social media, they handle everything flawlessly. Our Instagram went from 2K to 50K followers in 3 months. Highly recommend!",
    rating: 5,
    color: "from-orange-500 to-amber-500",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-4">
            Client Love
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[var(--text-primary)] mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                t.featured
                  ? "bg-gradient-to-br from-[var(--primary)] to-[#7C5CFF] border-transparent text-white shadow-[var(--shadow-lg)]"
                  : "bg-white border-[var(--border-light)] hover:shadow-[var(--shadow-md)] hover:border-[var(--primary)]"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className={t.featured ? "fill-yellow-300 text-yellow-300" : "fill-yellow-400 text-yellow-400"} />
                ))}
              </div>

              <p className={`text-base leading-relaxed mb-8 ${t.featured ? "text-white/90" : "text-[var(--text-secondary)]"}`}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <div className={`font-bold text-sm ${t.featured ? "text-white" : "text-[var(--text-primary)]"}`}>{t.name}</div>
                  <div className={`text-xs ${t.featured ? "text-white/70" : "text-[var(--text-muted)]"}`}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
