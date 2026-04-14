import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const points = [
  "Custom strategies — no cookie-cutter templates",
  "Transparent reporting with real-time dashboards",
  "Dedicated account manager for every client",
  "ROI-focused campaigns with measurable results",
];

export default function AboutSection() {
  return (
    <section className="section-pad bg-[var(--surface)]" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--primary)] to-[#7C5CFF] p-10 text-white">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="text-5xl mb-6">⚡</div>
                <h3 className="text-3xl font-black mb-3">Clicksemrus</h3>
                <p className="text-white/80 mb-8 text-lg">Your Digital Growth Partner</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "200+", label: "Brands Scaled" },
                    { number: "5x", label: "Avg. ROI" },
                    { number: "98%", label: "Retention Rate" },
                    { number: "24h", label: "Response Time" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/15 rounded-2xl p-4">
                      <div className="text-2xl font-black mb-1">{stat.number}</div>
                      <div className="text-xs text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Float badges */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-[var(--shadow-md)] border border-[var(--border-light)] p-4 animate-float">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <div className="font-bold text-sm text-[var(--text-primary)]">500% Traffic</div>
                  <div className="text-xs text-[var(--text-muted)]">Avg. growth in 6 months</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-[var(--shadow-md)] border border-[var(--border-light)] p-4" style={{ animation: "float 4s ease-in-out 2s infinite" }}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <div className="font-bold text-sm text-[var(--text-primary)]">4.9★ Rating</div>
                  <div className="text-xs text-[var(--text-muted)]">From 200+ clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-5">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-[var(--text-primary)] leading-tight mb-6">
              We Don&apos;t Just Market.
              <br />
              <span className="gradient-text">We Build Empires.</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-5">
              Clicksemrus is a full-service digital marketing agency founded on one belief — every brand deserves a strategy as unique as its DNA. We combine data, creativity, and technology to deliver growth that matters.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              From startups to established businesses, we&apos;ve helped brands across industries multiply their online presence, dominate search rankings, and convert traffic into revenue.
            </p>

            <div className="space-y-3 mb-10">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--primary)] mt-0.5 shrink-0" />
                  <span className="text-[var(--text-secondary)]">{point}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[var(--primary)] text-white font-semibold shadow-[var(--shadow-md)] hover:bg-[var(--primary-dark)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
