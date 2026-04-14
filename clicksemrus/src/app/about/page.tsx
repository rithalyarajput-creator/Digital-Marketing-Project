import { CheckCircle2, ArrowRight, Target, Eye, Heart } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Clicksemrus Digital Marketing Agency",
  description: "Learn about Clicksemrus — our mission, values, team, and why we are the best digital marketing partner for your brand.",
};

const values = [
  { icon: Target, title: "Results-First", desc: "Every decision we make is driven by data and focused on delivering measurable ROI for your business." },
  { icon: Eye, title: "Radical Transparency", desc: "You'll always know exactly what we're doing, why we're doing it, and what results it's delivering." },
  { icon: Heart, title: "Partnership Mindset", desc: "We treat your business like our own — your success is our success, and we're in this together." },
];

const team = [
  { name: "Rithal Rajput", role: "Founder & CEO", initials: "RR", color: "from-[#6C47FF] to-[#A78BFA]", bio: "Digital strategist with expertise in scaling brands through data-driven marketing." },
  { name: "Priya Singh", role: "Head of SEO", initials: "PS", color: "from-blue-500 to-cyan-500", bio: "SEO specialist with 6+ years of experience helping brands dominate search rankings." },
  { name: "Aryan Mehta", role: "Creative Director", initials: "AM", color: "from-orange-500 to-amber-500", bio: "Creative visionary who crafts compelling brand stories and visual identities." },
  { name: "Neha Gupta", role: "PPC Manager", initials: "NG", color: "from-pink-500 to-rose-500", bio: "Paid media expert driving 5x+ ROAS across Google and Meta platforms." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--surface)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--primary-light)] blur-3xl opacity-60" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-5">
              About Clicksemrus
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-[var(--text-primary)] leading-tight mb-6">
              We Don&apos;t Just Market.
              <br />
              <span className="gradient-text">We Build Empires.</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
              Clicksemrus is a full-service digital marketing agency helping ambitious brands grow online. We combine data, creativity, and technology to deliver results that matter.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[var(--primary)] text-white font-semibold shadow-[var(--shadow-md)] hover:bg-[var(--primary-dark)] transition-all">
              Work With Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[#7C5CFF] p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="text-6xl mb-6">⚡</div>
              <h2 className="text-3xl font-black mb-4">Our Story</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Founded with a mission to democratize world-class digital marketing for businesses of all sizes. We started with a small team and a big dream — to help brands compete and win online.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[["200+", "Brands Helped"], ["5x", "Avg. ROI"], ["15+", "Industries"], ["98%", "Retention"]].map(([n, l]) => (
                  <div key={l} className="bg-white/15 rounded-xl p-4">
                    <div className="text-2xl font-black">{n}</div>
                    <div className="text-xs text-white/70">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black text-[var(--text-primary)] mb-5">
              Built on <span className="gradient-text">Real Results</span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-5">
              We started Clicksemrus because we saw too many businesses being let down by agencies that overpromised and underdelivered. We built our agency differently — results first, always.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              Today, we&apos;re a team of passionate marketers, designers, and strategists who live and breathe digital growth. Every campaign we run is treated like it&apos;s our own business on the line.
            </p>
            <div className="space-y-3">
              {["Data-driven decisions over gut feelings", "Custom strategies for every client", "Full transparency in reporting", "Long-term partnerships over short wins"].map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[var(--primary)] shrink-0" />
                  <span className="text-[var(--text-secondary)]">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-4">Our Values</span>
            <h2 className="text-4xl font-black text-[var(--text-primary)]">What We <span className="gradient-text">Stand For</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-3xl p-8 border border-[var(--border-light)] hover:shadow-[var(--shadow-md)] hover:-translate-y-1 transition-all">
                <div className="w-13 h-13 rounded-2xl bg-[var(--primary-light)] flex items-center justify-center mb-5">
                  <v.icon size={24} className="text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{v.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-4">Our Team</span>
            <h2 className="text-4xl font-black text-[var(--text-primary)]">Meet the <span className="gradient-text">Experts</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-black mx-auto mb-5 group-hover:-translate-y-2 transition-transform shadow-[var(--shadow-md)]`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-1">{member.name}</h3>
                <div className="text-sm text-[var(--primary)] font-medium mb-3">{member.role}</div>
                <p className="text-sm text-[var(--text-secondary)]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-[var(--text-primary)] mb-5">
            Ready to Work <span className="gradient-text">Together?</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">Let&apos;s build something amazing for your brand.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[var(--primary)] text-white font-bold shadow-[var(--shadow-md)] hover:bg-[var(--primary-dark)] transition-all">
            Get Your Free Audit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
