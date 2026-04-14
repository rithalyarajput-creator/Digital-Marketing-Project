const steps = [
  { num: "01", icon: "🎯", title: "Discovery & Audit", desc: "We deep-dive into your brand, competitors, and market to uncover untapped growth opportunities." },
  { num: "02", icon: "📊", title: "Strategy Development", desc: "We craft a data-backed, custom marketing roadmap aligned with your business goals and budget." },
  { num: "03", icon: "✏️", title: "Content & Creative", desc: "Our creative team produces high-impact content, ads, and visuals that captivate your audience." },
  { num: "04", icon: "🚀", title: "Launch & Execute", desc: "Campaigns go live across all chosen channels — optimized from day one for maximum performance." },
  { num: "05", icon: "📈", title: "Analyse & Scale", desc: "We track every metric, report transparently, and continuously optimize to scale your results." },
];

export default function ProcessSection() {
  return (
    <section className="section-pad bg-white" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-4">
            How We Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[var(--text-primary)] mb-4">
            Our Proven <span className="gradient-text">5-Step Process</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto text-lg">
            A proven framework that delivers consistent results, every time.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[var(--primary)] via-[#A78BFA] to-[var(--secondary)]" />

          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center px-3 group">
              {/* Circle */}
              <div className={`relative w-20 h-20 rounded-2xl flex flex-col items-center justify-center mb-6 z-10 transition-all duration-300 group-hover:-translate-y-2 ${
                i === 2 ? "bg-[var(--primary)] shadow-[var(--shadow-md)]" : "bg-[var(--surface)] border-2 border-[var(--border)] group-hover:border-[var(--primary)]"
              }`}>
                <span className="text-2xl">{step.icon}</span>
                <span className={`text-xs font-bold ${i === 2 ? "text-white/80" : "text-[var(--primary)]"}`}>{step.num}</span>
              </div>
              <h3 className="font-bold text-[var(--text-primary)] mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile Steps */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-5 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-light)]">
              <div className={`w-14 h-14 shrink-0 rounded-2xl flex flex-col items-center justify-center ${
                i === 2 ? "bg-[var(--primary)]" : "bg-white border-2 border-[var(--border)]"
              }`}>
                <span className="text-xl">{step.icon}</span>
                <span className={`text-xs font-bold ${i === 2 ? "text-white/80" : "text-[var(--primary)]"}`}>{step.num}</span>
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] mb-1">{step.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
