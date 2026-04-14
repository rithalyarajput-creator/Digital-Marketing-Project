"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 200, suffix: "+", label: "Brands Scaled", desc: "Across 15+ industries" },
  { number: 500, suffix: "%", label: "Avg. Traffic Growth", desc: "For SEO clients in 6 months" },
  { number: 5, suffix: "x", label: "Return on Ad Spend", desc: "Average ROAS for PPC" },
  { number: 98, suffix: "%", label: "Client Retention", desc: "Stay because results are real" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, started }: { stat: typeof stats[0]; started: boolean }) {
  const count = useCountUp(stat.number, 2000, started);
  return (
    <div className="text-center p-8">
      <div className="text-5xl lg:text-6xl font-black gradient-text mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-lg font-bold text-[var(--text-primary)] mb-1">{stat.label}</div>
      <div className="text-sm text-[var(--text-muted)]">{stat.desc}</div>
    </div>
  );
}

export default function StatsSection() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-pad bg-[var(--surface)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-4">
            Our Numbers
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[var(--text-primary)]">
            Results That <span className="gradient-text">Speak Louder</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[var(--border-light)] border border-[var(--border-light)] rounded-3xl bg-white overflow-hidden shadow-[var(--shadow-sm)]">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
