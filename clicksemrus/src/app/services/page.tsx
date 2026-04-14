import { Search, Share2, TrendingUp, Monitor, FileText, Palette, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Clicksemrus Digital Marketing",
  description: "Explore Clicksemrus's full range of digital marketing services — SEO, Social Media, PPC, Web Design, Content Marketing, and Brand Strategy.",
};

const services = [
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization",
    tagline: "Rank Higher. Get Found. Grow Organically.",
    desc: "Our SEO strategies are built for long-term success. We combine technical excellence, content authority, and strategic link building to help your brand rank for keywords that drive real business.",
    features: ["Technical SEO Audit & Fixes", "Keyword Research & Strategy", "On-Page Optimization", "Link Building & Authority", "Local SEO", "Monthly Reporting"],
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Marketing",
    tagline: "Build Community. Drive Engagement. Convert Followers.",
    desc: "We create and execute social media strategies that build loyal communities, increase brand awareness, and turn followers into customers across Instagram, Facebook, LinkedIn, and more.",
    features: ["Platform Strategy", "Content Creation & Design", "Community Management", "Paid Social Campaigns", "Influencer Partnerships", "Analytics & Reporting"],
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
  },
  {
    id: "ppc",
    icon: TrendingUp,
    title: "Pay-Per-Click (PPC)",
    tagline: "Maximum ROI. Minimum Waste. Measurable Results.",
    desc: "Our data-driven PPC campaigns across Google, Meta, and YouTube are engineered for maximum return. We obsess over every metric to ensure your ad budget delivers the highest possible ROI.",
    features: ["Google Search & Display Ads", "Meta & Instagram Ads", "YouTube Advertising", "Remarketing Campaigns", "A/B Testing & Optimization", "Conversion Tracking"],
    color: "from-[#6C47FF] to-[#A78BFA]",
    bg: "bg-[var(--primary-light)]",
    featured: true,
  },
  {
    id: "web",
    icon: Monitor,
    title: "Web Design & Development",
    tagline: "Beautiful Design. Blazing Speed. More Conversions.",
    desc: "We design and develop websites that don't just look amazing — they convert. Every element is crafted with your business goals in mind, from the first pixel to the final CTA.",
    features: ["Custom Website Design", "Landing Page Development", "E-commerce Stores", "Mobile-First Design", "Speed Optimization", "Ongoing Maintenance"],
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
  },
  {
    id: "content",
    icon: FileText,
    title: "Content Marketing",
    tagline: "Educate. Engage. Convert. At Scale.",
    desc: "Quality content is the backbone of digital marketing. We create content that attracts your ideal customers, builds trust, and nurtures them through every stage of the buying journey.",
    features: ["Blog & Article Writing", "SEO Content Strategy", "Video Scripts", "Infographics & Visual Content", "Email Newsletter Campaigns", "Content Calendar Management"],
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
  },
  {
    id: "brand",
    icon: Palette,
    title: "Brand Strategy",
    tagline: "Stand Out. Be Remembered. Own Your Market.",
    desc: "A strong brand is your most valuable asset. We help you define your unique positioning, craft compelling messaging, and build a visual identity that resonates with your target audience.",
    features: ["Brand Audit & Research", "Positioning & Messaging", "Logo & Visual Identity", "Brand Style Guide", "Competitive Analysis", "Brand Voice Development"],
    color: "from-purple-500 to-violet-500",
    bg: "bg-purple-50",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--surface)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--primary-light)] blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-5">
            What We Do
          </span>
          <h1 className="text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-5">
            Services That Drive <span className="gradient-text">Real Results</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Every strategy is custom-built for your brand&apos;s unique goals and market position.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
              {/* Card */}
              <div className={`rounded-3xl p-10 ${s.featured ? "bg-gradient-to-br from-[var(--primary)] to-[#7C5CFF] text-white" : `${s.bg}`} relative overflow-hidden`}>
                <div className={`w-14 h-14 rounded-2xl ${s.featured ? "bg-white/20" : "bg-white"} flex items-center justify-center mb-6`}>
                  <s.icon size={26} className={s.featured ? "text-white" : ""} />
                </div>
                <h3 className={`text-2xl font-black mb-3 ${s.featured ? "text-white" : "text-[var(--text-primary)]"}`}>{s.title}</h3>
                <p className={`text-sm font-semibold mb-5 ${s.featured ? "text-white/70" : "text-[var(--primary)]"}`}>{s.tagline}</p>
                <div className="grid grid-cols-2 gap-2">
                  {s.features.map((f) => (
                    <div key={f} className={`flex items-center gap-2 text-sm ${s.featured ? "text-white/80" : "text-[var(--text-secondary)]"}`}>
                      <CheckCircle2 size={14} className={s.featured ? "text-white/60" : "text-[var(--primary)]"} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? "lg:col-start-1" : ""}>
                <span className={`inline-block w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} text-white text-lg flex items-center justify-center mb-5`}>
                  <s.icon size={18} />
                </span>
                <h2 className="text-3xl font-black text-[var(--text-primary)] mb-4">{s.title}</h2>
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">{s.desc}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-dark)] transition-all shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
                >
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-[var(--text-primary)] mb-5">
            Not Sure Which Service <span className="gradient-text">You Need?</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">Get a free consultation and we&apos;ll recommend the best strategy for your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[var(--primary)] text-white font-bold shadow-[var(--shadow-md)] hover:bg-[var(--primary-dark)] transition-all">
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
