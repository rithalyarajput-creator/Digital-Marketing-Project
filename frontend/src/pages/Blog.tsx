import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Calendar, Search, TrendingUp, Globe, Smartphone, PenLine, Tag, ChevronRight } from 'lucide-react'

const categories = ['All', 'SEO', 'PPC', 'Social Media', 'Web Design', 'Content', 'Brand']

const posts = [
  {
    slug: '1', title: 'How We Achieved 400% Traffic Growth for a B2B SaaS Brand in 4 Months',
    category: 'SEO', date: 'Apr 8, 2025', readTime: '6 min read', featured: true,
    excerpt: 'A behind-the-scenes case study revealing the exact SEO framework we used to take a SaaS brand from page 3 to #1 rankings across 50+ keywords.',
    icon: TrendingUp, iconColor: '#1A56DB', bg: 'linear-gradient(135deg,#0F172A 0%,#1E2D5A 100%)',
  },
  {
    slug: '2', title: 'The Ultimate Guide to Google Ads for Indian E-Commerce Brands in 2025',
    category: 'PPC', date: 'Mar 28, 2025', readTime: '9 min read', featured: false,
    excerpt: 'Everything you need to know about running profitable Google Shopping and Search ads for your Indian e-commerce store.',
    icon: TrendingUp, iconColor: '#7C3AED', bg: 'linear-gradient(135deg,#1E1B4B,#312E81)',
  },
  {
    slug: '3', title: "Why Your Instagram Reels Aren't Growing (And How to Fix It)",
    category: 'Social Media', date: 'Mar 15, 2025', readTime: '5 min read', featured: false,
    excerpt: 'The 7 most common mistakes brands make with Reels and the algorithm-friendly strategies that consistently hit 100K+ views.',
    icon: Smartphone, iconColor: '#F97316', bg: 'linear-gradient(135deg,#1C1400,#2D1E00)',
  },
  {
    slug: '4', title: '10 Website Design Mistakes That Are Killing Your Conversion Rate',
    category: 'Web Design', date: 'Mar 2, 2025', readTime: '7 min read', featured: false,
    excerpt: 'Is your website costing you customers? These 10 design and UX mistakes are silently destroying your conversion rate.',
    icon: Globe, iconColor: '#059669', bg: 'linear-gradient(135deg,#001A12,#00291D)',
  },
  {
    slug: '5', title: 'Content Marketing ROI: How to Measure What Actually Matters',
    category: 'Content', date: 'Feb 18, 2025', readTime: '8 min read', featured: false,
    excerpt: "Stop measuring vanity metrics. Here's the content marketing measurement framework that ties directly to revenue.",
    icon: PenLine, iconColor: '#DC2626', bg: 'linear-gradient(135deg,#1A0000,#2D0000)',
  },
  {
    slug: '6', title: 'Local SEO in 2025: The Complete Playbook for Indian Businesses',
    category: 'SEO', date: 'Feb 5, 2025', readTime: '11 min read', featured: false,
    excerpt: 'Dominate Google Maps and local search results with this comprehensive Local SEO guide built specifically for Indian markets.',
    icon: TrendingUp, iconColor: '#1A56DB', bg: 'linear-gradient(135deg,#0F172A,#1E2D5A)',
  },
  {
    slug: '7', title: 'How to Build a Brand Identity That Commands Premium Pricing',
    category: 'Brand', date: 'Jan 24, 2025', readTime: '6 min read', featured: false,
    excerpt: "Your brand is either charging premium or competing on price. Here's how to position yourself in the premium tier.",
    icon: Tag, iconColor: '#0891B2', bg: 'linear-gradient(135deg,#001A20,#00293B)',
  },
  {
    slug: '8', title: 'Meta Ads vs Google Ads: Where Should Your Budget Go in 2025?',
    category: 'PPC', date: 'Jan 10, 2025', readTime: '7 min read', featured: false,
    excerpt: 'A data-backed comparison of Meta and Google advertising performance across 50+ Indian business campaigns.',
    icon: TrendingUp, iconColor: '#7C3AED', bg: 'linear-gradient(135deg,#1E1B4B,#312E81)',
  },
]

const categoryColors: Record<string, string> = {
  SEO: '#1A56DB', PPC: '#7C3AED', 'Social Media': '#F97316',
  'Web Design': '#059669', Content: '#DC2626', Brand: '#0891B2',
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  const featuredPost = filtered[0]
  const gridPosts = filtered.slice(1)

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#0F172A 0%,#1E293B 100%)', padding: '72px 0 56px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: '100px', padding: '5px 16px', marginBottom: '20px' }}>
            <PenLine size={13} color="#F97316" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#F97316', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Our Blog</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Marketing Insights &<br /><span style={{ color: '#F97316' }}>Growth Strategies</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Actionable digital marketing advice from the team that has scaled 200+ brands.
          </p>
          {/* Search */}
          <div style={{ maxWidth: '480px', margin: '0 auto', position: 'relative' }}>
            <Search size={17} color="#64748B" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
            <input
              type="text" placeholder="Search articles..."
              value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '13px 16px 13px 46px', borderRadius: '12px', border: '1.5px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.07)', color: '#fff', fontSize: '14px', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
            />
          </div>
        </div>
      </section>

      {/* Category filter */}
      <div style={{ background: '#1E293B', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0', position: 'sticky', top: '68px', zIndex: 100 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', padding: '10px 0', scrollbarWidth: 'none' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: '7px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
                background: activeCategory === cat ? '#F97316' : 'transparent',
                color: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.55)',
                transition: 'all 0.15s',
              }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section style={{ background: '#0F172A', padding: '52px 0 80px' }}>
        <div className="container">

          {/* Featured post */}
          {featuredPost && (
            <div style={{ marginBottom: '48px' }}>
              <Link to={`/blog/${featuredPost.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', transition: 'transform 0.25s' }}
                  className="featured-post"
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}>
                  {/* Image area */}
                  <div style={{ background: featuredPost.bg, minHeight: '340px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />
                    <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '140px', height: '140px', borderRadius: '50%', background: 'rgba(249,115,22,0.08)' }} />
                    <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', zIndex: 1 }}>
                      <featuredPost.icon size={36} color={featuredPost.iconColor} />
                    </div>
                    <div style={{ background: categoryColors[featuredPost.category] || '#F97316', color: '#fff', fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '100px', letterSpacing: '0.08em', textTransform: 'uppercase', zIndex: 1 }}>
                      {featuredPost.category}
                    </div>
                  </div>
                  {/* Text area */}
                  <div style={{ background: '#1E293B', padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: '100px', padding: '4px 12px', marginBottom: '18px', width: 'fit-content' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#F97316', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Featured Article</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)', fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: '14px' }}>{featuredPost.title}</h2>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '24px' }}>{featuredPost.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '24px', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>
                        <Calendar size={12} /> {featuredPost.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>
                        <Clock size={12} /> {featuredPost.readTime}
                      </span>
                    </div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', color: '#F97316', fontWeight: 700, fontSize: '14px' }}>
                      Read Full Article <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Grid */}
          {gridPosts.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }} className="blog-grid">
              {gridPosts.map(post => (
                <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <article style={{ background: '#1E293B', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', transition: 'transform 0.22s, box-shadow 0.22s', height: '100%' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.35)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                    {/* Card image */}
                    <div style={{ background: post.bg, height: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <post.icon size={22} color={post.iconColor} />
                      </div>
                      <span style={{ background: categoryColors[post.category] || '#F97316', color: '#fff', fontSize: '10px', fontWeight: 800, padding: '3px 10px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                        {post.category}
                      </span>
                    </div>
                    {/* Card body */}
                    <div style={{ padding: '18px' }}>
                      <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F1F5F9', lineHeight: 1.45, marginBottom: '8px' }}>{post.title}</h3>
                      <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '14px' }}>{post.excerpt.slice(0, 90)}...</p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>
                            <Clock size={10} /> {post.readTime}
                          </span>
                        </div>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#F97316', fontWeight: 700 }}>
                          Read <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(255,255,255,0.4)' }}>
              <Search size={40} style={{ marginBottom: '16px', opacity: 0.4 }} />
              <p style={{ fontSize: '16px' }}>No articles found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: '#1E293B', padding: '72px 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <PenLine size={22} color="#F97316" />
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>Get Weekly Marketing Tips</h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', marginBottom: '28px' }}>Join 2,000+ marketers getting actionable insights every week. No spam, ever.</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input type="email" placeholder="Your email address"
                style={{ padding: '13px 18px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: '14px', outline: 'none', fontFamily: 'inherit', width: '280px' }} />
              <button style={{ padding: '13px 24px', borderRadius: '10px', background: '#F97316', color: '#fff', border: 'none', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                Subscribe Free
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:1000px){.blog-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:600px){.blog-grid{grid-template-columns:1fr!important;}}
        @media(max-width:860px){.featured-post{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  )
}
