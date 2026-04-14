import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Clicksemrus Digital Marketing Insights",
  description: "Read the latest digital marketing insights, tips, and strategies from the Clicksemrus team.",
};

const posts = [
  {
    slug: "seo-strategies-2024",
    title: "10 SEO Strategies That Will Dominate in 2024",
    excerpt: "Discover the most effective SEO techniques for driving organic traffic and ranking higher on Google in 2024 and beyond.",
    category: "SEO",
    readTime: "7 min read",
    date: "April 10, 2026",
    color: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    slug: "ppc-roas-optimization",
    title: "How to Achieve 5x ROAS with Google Ads",
    excerpt: "Learn the exact campaign structure, bidding strategies, and optimization tactics we use to consistently deliver 5x return on ad spend.",
    category: "PPC",
    readTime: "9 min read",
    date: "April 5, 2026",
    color: "from-[#6C47FF] to-[#A78BFA]",
    featured: true,
  },
  {
    slug: "social-media-growth",
    title: "From 0 to 50K: Our Instagram Growth Playbook",
    excerpt: "The exact content strategy, posting schedule, and engagement tactics that helped FreshBite grow from 2K to 50K followers in 3 months.",
    category: "Social Media",
    readTime: "6 min read",
    date: "April 1, 2026",
    color: "from-pink-500 to-rose-500",
    featured: true,
  },
  {
    slug: "content-marketing-roi",
    title: "Measuring Content Marketing ROI: A Complete Guide",
    excerpt: "Stop guessing whether your content is working. Learn exactly how to measure, track, and prove the ROI of your content marketing efforts.",
    category: "Content",
    readTime: "8 min read",
    date: "March 28, 2026",
    color: "from-green-500 to-emerald-500",
    featured: false,
  },
  {
    slug: "web-design-conversion",
    title: "7 Website Design Changes That Doubled Our Conversions",
    excerpt: "Simple but powerful design tweaks that dramatically improved conversion rates for our e-commerce clients.",
    category: "Web Design",
    readTime: "5 min read",
    date: "March 22, 2026",
    color: "from-orange-500 to-amber-500",
    featured: false,
  },
  {
    slug: "brand-strategy-guide",
    title: "Building a Brand That People Actually Remember",
    excerpt: "A practical guide to creating a brand identity that resonates with your target audience and stands out in a crowded market.",
    category: "Branding",
    readTime: "10 min read",
    date: "March 15, 2026",
    color: "from-purple-500 to-violet-500",
    featured: false,
  },
];

const categories = ["All", "SEO", "PPC", "Social Media", "Content", "Web Design", "Branding"];

export default function BlogPage() {
  const featured = posts.filter((p) => p.featured);
  const recent = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--surface)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--primary-light)] blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-5">
            Insights & Tips
          </span>
          <h1 className="text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-5">
            Digital Marketing <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Actionable strategies, industry insights, and expert tips to help your brand grow online.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="bg-white border-b border-[var(--border-light)] sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                cat === "All"
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Posts */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-[var(--text-primary)] mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {featured.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-3xl border border-[var(--border-light)] overflow-hidden hover:shadow-[var(--shadow-lg)] hover:-translate-y-2 transition-all duration-300 block">
                <div className={`bg-gradient-to-br ${post.color} p-8 text-white h-40 flex items-end`}>
                  <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold">{post.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-black text-[var(--text-primary)] text-lg mb-3 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-1"><Clock size={12} />{post.readTime}</div>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Recent Posts */}
          <h2 className="text-2xl font-black text-[var(--text-primary)] mb-8">Recent Articles</h2>
          <div className="space-y-4">
            {recent.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-6 p-6 rounded-2xl border border-[var(--border-light)] hover:shadow-[var(--shadow-md)] hover:border-[var(--primary)] transition-all bg-white items-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${post.color} shrink-0`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-medium">{post.category}</span>
                    <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]"><Clock size={11} />{post.readTime}</div>
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--primary)] transition-colors">{post.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] line-clamp-1">{post.excerpt}</p>
                </div>
                <ArrowRight size={18} className="text-[var(--text-muted)] group-hover:text-[var(--primary)] shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
