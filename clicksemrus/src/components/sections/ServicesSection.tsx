import Link from "next/link";
import { Search, Share2, TrendingUp, Monitor, FileText, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Rank higher on Google and drive organic traffic that converts. We build long-term authority for your brand.",
    points: ["Technical SEO Audit", "Keyword Research & Strategy", "Link Building & Authority"],
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    href: "/services#seo",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build a loyal community and turn followers into paying customers through strategic content.",
    points: ["Content Creation & Posting", "Community Management", "Influencer Outreach"],
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    href: "/services#social",
  },
  {
    icon: TrendingUp,
    title: "Pay-Per-Click (PPC)",
    desc: "Maximize your ad spend with data-driven Google & Meta campaigns that deliver measurable ROI.",
    points: ["Google Ads Management", "Meta & Instagram Ads", "Conversion Optimization"],
    color: "from-[#6C47FF] to-[#A78BFA]",
    bg: "bg-[var(--primary-light)]",
    href: "/services#ppc",
    featured: true,
  },
  {
    icon: Monitor,
    title: "Web Design & Development",
    desc: "Beautiful, fast, and conversion-optimized websites that make your brand stand out and sell more.",
    points: ["Custom Website Design", "Landing Page Optimization", "E-commerce Solutions"],
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    href: "/services#web",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "High-quality content that educates your audience, builds trust, and fuels your marketing funnel.",
    points: ["Blog & Article Writing", "Video Script Writing", "Email Newsletters"],
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
    href: "/services#content",
  },
  {
    icon: Palette,
    title: "Brand Strategy",
    desc: "Craft a powerful brand identity that resonates with your audience and creates lasting impressions.",
    points: ["Brand Identity Design", "Positioning & Messaging", "Competitive Analysis"],
    color: "from-purple-500 to-violet-500",
    bg: "bg-purple-50",
    href: "/services#brand",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-pad bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[var(--text-primary)] mb-4">
            Services That Drive <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-lg">
            Every strategy is custom-built for your brand's unique goals and market position.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)] cursor-pointer ${
                service.featured
                  ? "bg-gradient-to-br from-[var(--primary)] to-[#7C5CFF] border-transparent text-white"
                  : "bg-white border-[var(--border-light)] hover:border-[var(--primary)]"
              }`}
            >
              {service.featured && (
                <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                  Most Popular
                </span>
              )}

              {/* Icon */}
              <div className={`w-13 h-13 rounded-2xl flex items-center justify-center mb-6 ${service.featured ? "bg-white/20" : service.bg}`}>
                <service.icon
                  size={26}
                  className={service.featured ? "text-white" : ""}
                  style={!service.featured ? {} : {}}
                />
              </div>

              <h3 className={`text-xl font-bold mb-3 ${service.featured ? "text-white" : "text-[var(--text-primary)]"}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-5 ${service.featured ? "text-white/80" : "text-[var(--text-secondary)]"}`}>
                {service.desc}
              </p>

              <ul className="space-y-2 mb-6">
                {service.points.map((point) => (
                  <li key={point} className={`flex items-center gap-2 text-sm ${service.featured ? "text-white/90" : "text-[var(--text-secondary)]"}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${service.featured ? "bg-white/60" : "bg-[var(--primary)]"}`} />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href={service.href}
                className={`inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all ${
                  service.featured ? "text-white" : "text-[var(--primary)]"
                }`}
              >
                Learn More <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border-2 border-[var(--primary)] text-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-white transition-all duration-200"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
