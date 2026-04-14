import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Clicksemrus Digital Marketing",
  description: "See how Clicksemrus has helped brands grow online with real case studies and results.",
};

const projects = [
  {
    company: "TechBridge Solutions",
    initials: "TB",
    industry: "B2B SaaS",
    service: "SEO + Content",
    color: "from-blue-500 to-cyan-500",
    result: "+400% Organic Traffic",
    duration: "4 Months",
    desc: "Complete SEO overhaul that took their domain authority from 18 to 52 and drove 400% more organic visitors.",
    stats: [["400%", "Traffic Growth"], ["52", "Domain Authority"], ["120+", "Keywords Ranked"]],
    tags: ["SEO", "Content Marketing"],
  },
  {
    company: "StyleNest E-Commerce",
    initials: "SN",
    industry: "Fashion E-commerce",
    service: "PPC + Social Media",
    color: "from-[#6C47FF] to-[#A78BFA]",
    result: "6x ROAS",
    duration: "1 Month",
    desc: "Meta and Google Ad campaigns that generated 6x return on ad spend with conversion rate optimization.",
    stats: [["6x", "ROAS"], ["₹12L", "Revenue Generated"], ["2.8%", "Conversion Rate"]],
    tags: ["PPC", "Social Ads"],
    featured: true,
  },
  {
    company: "FreshBite Foods",
    initials: "FB",
    industry: "Food & Beverage",
    service: "Social Media Marketing",
    color: "from-orange-500 to-amber-500",
    result: "2K → 50K Followers",
    duration: "3 Months",
    desc: "Built a loyal Instagram community from 2K to 50K followers with viral content strategy and influencer partnerships.",
    stats: [["50K", "Followers"], ["48x", "Growth"], ["8.2%", "Engagement Rate"]],
    tags: ["Social Media", "Content"],
  },
  {
    company: "GreenLeaf Clinic",
    initials: "GL",
    industry: "Healthcare",
    service: "Local SEO + Web Design",
    color: "from-green-500 to-emerald-500",
    result: "+300% Local Leads",
    duration: "5 Months",
    desc: "New website and local SEO strategy that tripled clinic appointments from organic search.",
    stats: [["300%", "More Leads"], ["#1", "Local Search Rank"], ["4.9★", "Google Reviews"]],
    tags: ["Local SEO", "Web Design"],
  },
  {
    company: "UrbanWear Brand",
    initials: "UW",
    industry: "Apparel",
    service: "Brand Strategy + PPC",
    color: "from-pink-500 to-rose-500",
    result: "₹50L Revenue in 90 Days",
    duration: "3 Months",
    desc: "Full brand identity refresh and aggressive PPC campaigns that generated ₹50 lakh in sales in 90 days.",
    stats: [["₹50L", "Revenue"], ["4.1x", "ROAS"], ["35%", "Brand Recall Lift"]],
    tags: ["Brand Strategy", "PPC"],
  },
  {
    company: "EduPath Academy",
    initials: "EP",
    industry: "EdTech",
    service: "Content + SEO",
    color: "from-purple-500 to-violet-500",
    result: "10K Monthly Signups",
    duration: "6 Months",
    desc: "Content marketing machine that drove 10,000 monthly course signups through organic traffic and email nurturing.",
    stats: [["10K", "Monthly Signups"], ["550%", "Organic Growth"], ["28%", "Email Open Rate"]],
    tags: ["Content Marketing", "SEO"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--surface)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--primary-light)] blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-5">
            Our Work
          </span>
          <h1 className="text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-5">
            Real Brands. <span className="gradient-text">Real Results.</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Explore our case studies and see how we&apos;ve helped brands across industries achieve remarkable growth.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-[var(--primary)] to-[#7C5CFF] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[["200+", "Projects Completed"], ["₹10Cr+", "Revenue Generated"], ["15+", "Industries"], ["5x", "Avg. ROI"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl font-black mb-1">{n}</div>
                <div className="text-white/70 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.company}
                className={`rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)] ${
                  p.featured ? "border-[var(--primary)] ring-2 ring-[var(--primary)] ring-offset-2" : "border-[var(--border-light)]"
                }`}
              >
                {/* Card Top */}
                <div className={`bg-gradient-to-br ${p.color} p-8 text-white relative overflow-hidden`}>
                  {p.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
                      Featured
                    </span>
                  )}
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white text-xl font-black mb-4">
                    {p.initials}
                  </div>
                  <h3 className="font-black text-xl mb-1">{p.company}</h3>
                  <div className="text-white/70 text-sm mb-4">{p.industry} · {p.service}</div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={18} />
                    <span className="font-bold text-lg">{p.result}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">{p.desc}</p>

                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {p.stats.map(([num, label]) => (
                      <div key={label} className="text-center p-3 rounded-xl bg-[var(--surface)]">
                        <div className="font-black text-[var(--primary)] text-base">{num}</div>
                        <div className="text-xs text-[var(--text-muted)] mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                    <span className="px-3 py-1 rounded-full bg-[var(--surface)] text-[var(--text-muted)] text-xs">{p.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-[var(--text-primary)] mb-5">
            Want Results Like <span className="gradient-text">These?</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">Let&apos;s create your success story. Get a free strategy session today.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[var(--primary)] text-white font-bold shadow-[var(--shadow-md)] hover:bg-[var(--primary-dark)] transition-all">
            Get Your Free Audit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
