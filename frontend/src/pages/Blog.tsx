import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Calendar, Search, TrendingUp, Globe, Smartphone, PenLine, Tag } from 'lucide-react'

const categories = ['All', 'SEO', 'PPC', 'Social Media', 'Web Design', 'Content', 'Brand']

const posts = [
  {
    slug: '1',
    title: 'How We Achieved 400% Traffic Growth for a B2B SaaS Brand in 4 Months',
    category: 'SEO',
    date: 'Apr 8, 2025',
    readTime: '6 min read',
    featured: true,
    excerpt: 'A behind-the-scenes case study revealing the exact SEO framework we used to take a SaaS brand from page 3 to #1 rankings across 50+ keywords.',
    Icon: TrendingUp,
    imgBg: 'linear-gradient(135deg,#1A56DB 0%,#1e40af 100%)',
    iconColor: '#fff',
    tagColor: '#1A56DB',
    tagBg: '#EBF2FF',
  },
  {
    slug: '2',
    title: 'The Ultimate Guide to Google Ads for Indian E-Commerce Brands in 2025',
    category: 'PPC',
    date: 'Mar 28, 2025',
    readTime: '9 min read',
    featured: false,
    excerpt: 'Everything you need to know about running profitable Google Shopping and Search ads for your Indian e-commerce store with maximum ROAS.',
    Icon: TrendingUp,
    imgBg: 'linear-gradient(135deg,#7C3AED 0%,#6d28d9 100%)',
    iconColor: '#fff',
    tagColor: '#7C3AED',
    tagBg: '#F5F3FF',
  },
  {
    slug: '3',
    title: "Why Your Instagram Reels Aren't Growing (And How to Fix It)",
    category: 'Social Media',
    date: 'Mar 15, 2025',
    readTime: '5 min read',
    featured: false,
    excerpt: 'The 7 most common mistakes brands make with Reels and algorithm-friendly strategies that consistently hit 100K+ views.',
    Icon: Smartphone,
    imgBg: 'linear-gradient(135deg,#F97316 0%,#ea580c 100%)',
    iconColor: '#fff',
    tagColor: '#EA580C',
    tagBg: '#FFF7ED',
  },
  {
    slug: '4',
    title: '10 Website Design Mistakes That Are Killing Your Conversion Rate',
    category: 'Web Design',
    date: 'Mar 2, 2025',
    readTime: '7 min read',
    featured: false,
    excerpt: 'Is your website costing you customers? These 10 design and UX mistakes are silently destroying your conversion rate.',
    Icon: Globe,
    imgBg: 'linear-gradient(135deg,#059669 0%,#047857 100%)',
    iconColor: '#fff',
    tagColor: '#059669',
    tagBg: '#F0FDF4',
  },
  {
    slug: '5',
    title: 'Content Marketing ROI: How to Measure What Actually Matters',
    category: 'Content',
    date: 'Feb 18, 2025',
    readTime: '8 min read',
    featured: false,
    excerpt: "Stop measuring vanity metrics. Here's the content marketing measurement framework that ties directly to revenue.",
    Icon: PenLine,
    imgBg: 'linear-gradient(135deg,#DC2626 0%,#b91c1c 100%)',
    iconColor: '#fff',
    tagColor: '#DC2626',
    tagBg: '#FEF2F2',
  },
  {
    slug: '6',
    title: 'Local SEO in 2025: The Complete Playbook for Indian Businesses',
    category: 'SEO',
    date: 'Feb 5, 2025',
    readTime: '11 min read',
    featured: false,
    excerpt: 'Dominate Google Maps and local search results with this comprehensive Local SEO guide built for Indian markets.',
    Icon: TrendingUp,
    imgBg: 'linear-gradient(135deg,#1A56DB 0%,#1e40af 100%)',
    iconColor: '#fff',
    tagColor: '#1A56DB',
    tagBg: '#EBF2FF',
  },
  {
    slug: '7',
    title: 'How to Build a Brand Identity That Commands Premium Pricing',
    category: 'Brand',
    date: 'Jan 24, 2025',
    readTime: '6 min read',
    featured: false,
    excerpt: "Your brand is either charging premium or competing on price. Here's how to position yourself in the premium tier.",
    Icon: Tag,
    imgBg: 'linear-gradient(135deg,#0891B2 0%,#0e7490 100%)',
    iconColor: '#fff',
    tagColor: '#0891B2',
    tagBg: '#F0F9FF',
  },
  {
    slug: '8',
    title: 'Meta Ads vs Google Ads: Where Should Your Budget Go in 2025?',
    category: 'PPC',
    date: 'Jan 10, 2025',
    readTime: '7 min read',
    featured: false,
    excerpt: 'A data-backed comparison of Meta and Google advertising performance across 50+ Indian business campaigns.',
    Icon: TrendingUp,
    imgBg: 'linear-gradient(135deg,#7C3AED 0%,#6d28d9 100%)',
    iconColor: '#fff',
    tagColor: '#7C3AED',
    tagBg: '#F5F3FF',
  },
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  const featuredPost = filtered[0]
  const gridPosts = filtered.slice(1)

  return (
    <>
      {/* Hero — light */}
      <section style={{ background: 'linear-gradient(160deg,#F0F6FF 0%,#fff 60%,#FFF8F0 100%)', padding: '72px 0 56px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag">Our Blog</span>
          <div className="divider divider-center" />
          <h1 className="h1" style={{ marginTop: '18px', marginBottom: '14px' }}>
            Marketing Insights &<br /><span className="gradient-text">Growth Strategies</span>
          </h1>
          <p className="body-md" style={{ maxWidth: '480px', margin: '0 auto 32px' }}>
            Actionable digital marketing advice from the team that has scaled 200+ brands.
          </p>
          {/* Search */}
          <div style={{ maxWidth: '460px', margin: '0 auto', position: 'relative' }}>
            <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '13px 16px 13px 44px', borderRadius: '12px', border: '1.5px solid #E2E8F0', background: '#fff', color: '#0F172A', fontSize: '14px', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
            />
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <div style={{ background: '#fff', borderBottom: '1px solid #F1F5F9', position: 'sticky', top: '68px', zIndex: 100 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', padding: '10px 0', scrollbarWidth: 'none' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: '7px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 700,
                border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s',
                background: activeCategory === cat ? '#1A56DB' : 'transparent',
                color: activeCategory === cat ? '#fff' : '#64748B',
              }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog content */}
      <section style={{ background: '#F8FAFF', padding: '52px 0 80px' }}>
        <div className="container">

          {/* Featured post */}
          {featuredPost && (
            <div style={{ marginBottom: '44px' }}>
              <Link to={`/blog/${featuredPost.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{
                  background: '#fff', borderRadius: '20px', overflow: 'hidden',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.08)', border: '1.5px solid #E2E8F0',
                  display: 'grid', gridTemplateColumns: '1.1fr 1fr', transition: 'transform 0.25s, box-shadow 0.25s',
                }} className="featured-card"
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 56px rgba(0,0,0,0.12)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.08)' }}>

                  {/* Image area */}
                  <div style={{ background: featuredPost.imgBg, minHeight: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                    <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(0,0,0,0.1)' }} />
                    <div style={{ width: '88px', height: '88px', borderRadius: '22px', background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, marginBottom: '16px' }}>
                      <featuredPost.Icon size={40} color="#fff" />
                    </div>
                    <span style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: '12px', fontWeight: 700, padding: '5px 14px', borderRadius: '100px', zIndex: 1 }}>
                      {featuredPost.category}
                    </span>
                  </div>

                  {/* Text area */}
                  <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ display: 'inline-block', background: '#FFF3E0', color: '#F97316', fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '100px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px', width: 'fit-content' }}>
                      Featured Article
                    </span>
                    <h2 style={{ fontSize: 'clamp(1.2rem,2vw,1.65rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.3, marginBottom: '12px' }}>
                      {featuredPost.title}
                    </h2>
                    <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.75, marginBottom: '22px' }}>
                      {featuredPost.excerpt}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '22px', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#94A3B8' }}>
                        <Calendar size={12} /> {featuredPost.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#94A3B8' }}>
                        <Clock size={12} /> {featuredPost.readTime}
                      </span>
                    </div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', color: '#F97316', fontWeight: 700, fontSize: '14px' }}>
                      Read More <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Cards grid */}
          {gridPosts.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }} className="blog-grid">
              {gridPosts.map(post => (
                <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <article style={{
                    background: '#fff', borderRadius: '16px', overflow: 'hidden',
                    border: '1.5px solid #E2E8F0', boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                    transition: 'transform 0.22s, box-shadow 0.22s', height: '100%', display: 'flex', flexDirection: 'column',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)' }}>

                    {/* Card image area */}
                    <div style={{ background: post.imgBg, height: '172px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                      <div style={{ width: '54px', height: '54px', borderRadius: '14px', background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                        <post.Icon size={24} color="#fff" />
                      </div>
                      <span style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '100px', zIndex: 1 }}>
                        {post.category}
                      </span>
                    </div>

                    {/* Card body */}
                    <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                        <span style={{ background: post.tagBg, color: post.tagColor, fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '100px' }}>
                          {post.category}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#94A3B8' }}>
                          <Clock size={10} /> {post.readTime}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', lineHeight: 1.45, marginBottom: '8px', flex: 1 }}>
                        {post.title}
                      </h3>
                      <p style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.65, marginBottom: '14px' }}>
                        {post.excerpt.slice(0, 100)}...
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '11px', color: '#94A3B8' }}>{post.date}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#F97316', fontWeight: 700 }}>
                          Read More <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#94A3B8' }}>
              <Search size={40} style={{ marginBottom: '16px', opacity: 0.4 }} />
              <p style={{ fontSize: '16px' }}>No articles found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter — light */}
      <section style={{ background: '#fff', padding: '72px 0', textAlign: 'center', borderTop: '1px solid #F1F5F9' }}>
        <div className="container">
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <span className="section-tag">Newsletter</span>
            <div className="divider divider-center" />
            <h2 className="h2" style={{ marginTop: '18px', marginBottom: '12px' }}>Get Weekly Marketing Tips</h2>
            <p style={{ color: '#64748B', fontSize: '15px', marginBottom: '28px' }}>
              Join 2,000+ marketers getting actionable insights every week. No spam, ever.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input type="email" placeholder="Your email address" className="form-input" style={{ maxWidth: '280px' }} />
              <button style={{ padding: '13px 24px', borderRadius: '10px', background: '#F97316', color: '#fff', border: 'none', fontWeight: 700, fontSize: '14px', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#EA580C'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#F97316'}>
                Subscribe Free
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){.blog-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:580px){.blog-grid{grid-template-columns:1fr!important;}}
        @media(max-width:760px){.featured-card{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  )
}
