import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Search, TrendingUp, Globe, Smartphone, PenLine, Tag, Zap, ChevronRight } from 'lucide-react'
// Clock still used in featured post

const categories = ['All', 'SEO', 'PPC', 'Social Media', 'Web Design', 'Content', 'Brand']

const posts = [
  {
    slug: '1',
    title: 'How We Achieved 400% Traffic Growth for a B2B SaaS Brand in 4 Months',
    category: 'SEO',
    date: 'Apr 8, 2025',
    readTime: '6 min',
    excerpt: 'The exact SEO framework we used to take a SaaS brand from page 3 to #1 rankings across 50+ keywords.',
    Icon: TrendingUp,
    imgBg: 'linear-gradient(145deg,#1A56DB,#1e40af)',
    tagColor: '#1A56DB',
    tagBg: '#EBF2FF',
  },
  {
    slug: '2',
    title: 'The Ultimate Guide to Google Ads for Indian E-Commerce Brands',
    category: 'PPC',
    date: 'Mar 28, 2025',
    readTime: '9 min',
    excerpt: 'Everything you need to run profitable Google Shopping and Search ads for your Indian e-commerce store.',
    Icon: Zap,
    imgBg: 'linear-gradient(145deg,#7C3AED,#6d28d9)',
    tagColor: '#7C3AED',
    tagBg: '#F5F3FF',
  },
  {
    slug: '3',
    title: "Why Your Instagram Reels Aren't Growing (And How to Fix It)",
    category: 'Social Media',
    date: 'Mar 15, 2025',
    readTime: '5 min',
    excerpt: 'The 7 most common Reels mistakes and algorithm-friendly strategies that consistently hit 100K+ views.',
    Icon: Smartphone,
    imgBg: 'linear-gradient(145deg,#F97316,#ea580c)',
    tagColor: '#EA580C',
    tagBg: '#FFF7ED',
  },
  {
    slug: '4',
    title: '10 Website Design Mistakes That Are Killing Your Conversion Rate',
    category: 'Web Design',
    date: 'Mar 2, 2025',
    readTime: '7 min',
    excerpt: 'These 10 design and UX mistakes are silently destroying your conversion rate. Is your website guilty?',
    Icon: Globe,
    imgBg: 'linear-gradient(145deg,#059669,#047857)',
    tagColor: '#059669',
    tagBg: '#F0FDF4',
  },
  {
    slug: '5',
    title: 'Content Marketing ROI: How to Measure What Actually Matters',
    category: 'Content',
    date: 'Feb 18, 2025',
    readTime: '8 min',
    excerpt: "Stop measuring vanity metrics. Here's the framework that ties content marketing directly to revenue.",
    Icon: PenLine,
    imgBg: 'linear-gradient(145deg,#DC2626,#b91c1c)',
    tagColor: '#DC2626',
    tagBg: '#FEF2F2',
  },
  {
    slug: '6',
    title: 'Local SEO in 2025: The Complete Playbook for Indian Businesses',
    category: 'SEO',
    date: 'Feb 5, 2025',
    readTime: '11 min',
    excerpt: 'Dominate Google Maps and local search results with this complete Local SEO guide built for India.',
    Icon: TrendingUp,
    imgBg: 'linear-gradient(145deg,#1A56DB,#1e40af)',
    tagColor: '#1A56DB',
    tagBg: '#EBF2FF',
  },
  {
    slug: '7',
    title: 'How to Build a Brand Identity That Commands Premium Pricing',
    category: 'Brand',
    date: 'Jan 24, 2025',
    readTime: '6 min',
    excerpt: "Your brand is either charging premium or competing on price. Here's how to position yourself at the top.",
    Icon: Tag,
    imgBg: 'linear-gradient(145deg,#0891B2,#0e7490)',
    tagColor: '#0891B2',
    tagBg: '#F0F9FF',
  },
  {
    slug: '8',
    title: 'Meta Ads vs Google Ads: Where Should Your Budget Go in 2025?',
    category: 'PPC',
    date: 'Jan 10, 2025',
    readTime: '7 min',
    excerpt: 'A data-backed comparison of Meta and Google advertising across 50+ Indian business campaigns.',
    Icon: Zap,
    imgBg: 'linear-gradient(145deg,#7C3AED,#6d28d9)',
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
      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(160deg,#F0F6FF 0%,#fff 55%,#FFF8F0 100%)', padding: '72px 0 52px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag">Our Blog</span>
          <div className="divider divider-center" />
          <h1 className="h1" style={{ marginTop: '18px', marginBottom: '14px' }}>
            Marketing Insights &<br />
            <span className="gradient-text">Growth Strategies</span>
          </h1>
          <p className="body-md" style={{ maxWidth: '460px', margin: '0 auto 30px' }}>
            Actionable advice from the team that has scaled 200+ brands.
          </p>
          {/* Search bar */}
          <div style={{ maxWidth: '440px', margin: '0 auto', position: 'relative' }}>
            <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
            <input type="text" placeholder="Search articles..." value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '12px 16px 12px 44px', borderRadius: '12px', border: '1.5px solid #E2E8F0', background: '#fff', fontSize: '14px', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', color: '#0F172A' }} />
          </div>
        </div>
      </section>

      {/* ── CATEGORY TABS ── */}
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

      {/* ── MAIN CONTENT ── */}
      <section style={{ background: '#F8FAFF', padding: '56px 0 88px' }}>
        <div className="container">

          {/* ── FEATURED POST — dcrayons style ── */}
          {featuredPost && (
            <Link to={`/blog/${featuredPost.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '56px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 48px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.25s, box-shadow 0.25s' }}
                className="featured-card"
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.14)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 48px rgba(0,0,0,0.1)' }}>

                {/* Left: text side */}
                <div style={{ background: '#0F172A', padding: '52px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ display: 'inline-block', background: 'rgba(249,115,22,0.18)', border: '1px solid rgba(249,115,22,0.3)', color: '#F97316', fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '100px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
                      Featured Article
                    </span>
                    <h2 style={{ fontSize: 'clamp(1.3rem,2.2vw,1.8rem)', fontWeight: 900, color: '#fff', lineHeight: 1.3, marginBottom: '14px' }}>
                      {featuredPost.title}
                    </h2>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '28px' }}>
                      {featuredPost.excerpt}
                    </p>
                  </div>
                  <div>
                    <div style={{ height: '3px', background: 'linear-gradient(90deg,#F97316,#F59E0B)', borderRadius: '2px', marginBottom: '20px', width: '60px' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Clock size={11} /> {featuredPost.readTime} read
                      </span>
                      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{featuredPost.date}</span>
                    </div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#F97316', color: '#fff', fontWeight: 700, fontSize: '14px', padding: '10px 22px', borderRadius: '10px' }}>
                      Read More <ChevronRight size={16} />
                    </span>
                  </div>
                </div>

                {/* Right: image/visual side */}
                <div style={{ background: featuredPost.imgBg, minHeight: '360px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-60px', left: '-60px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                  <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(0,0,0,0.12)' }} />
                  <div style={{ width: '100px', height: '100px', borderRadius: '26px', background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', zIndex: 1 }}>
                    <featuredPost.Icon size={46} color="#fff" />
                  </div>
                  <span style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '6px 18px', borderRadius: '100px', zIndex: 1 }}>
                    {featuredPost.category}
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* ── GRID: dcrayons style — rounded image TOP, white info box overlapping BELOW ── */}
          {gridPosts.length > 0 && (
            <>
              <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>
                Latest Articles
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px' }} className="blog-grid">
                {gridPosts.map(post => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{ transition: 'transform 0.22s', paddingBottom: '4px' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}>

                      {/* ── IMAGE: rounded corners all sides ── */}
                      <div style={{
                        height: '200px', borderRadius: '20px', background: post.imgBg,
                        position: 'relative', overflow: 'hidden',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                      }}>
                        {/* decorative circles */}
                        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
                        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '140px', height: '140px', borderRadius: '50%', background: 'rgba(0,0,0,0.12)' }} />
                        {/* icon */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', zIndex: 1 }}>
                          <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(255,255,255,0.18)', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <post.Icon size={30} color="#fff" />
                          </div>
                          <span style={{ background: 'rgba(255,255,255,0.22)', border: '1px solid rgba(255,255,255,0.35)', color: '#fff', fontSize: '11px', fontWeight: 800, padding: '5px 16px', borderRadius: '100px', letterSpacing: '0.05em' }}>
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* ── INFO BOX: white, rounded, overlapping image ── */}
                      <div style={{
                        background: '#fff', borderRadius: '16px',
                        margin: '0 14px', marginTop: '-28px',
                        padding: '20px 20px 18px',
                        position: 'relative', zIndex: 2,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                        border: '1px solid rgba(241,245,249,0.8)',
                      }}>
                        <h3 style={{
                          fontSize: '15px', fontWeight: 800, color: '#0F172A', lineHeight: 1.45,
                          margin: '0 0 10px',
                          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                        }}>
                          {post.title}
                        </h3>
                        <p style={{
                          fontSize: '13px', color: '#64748B', lineHeight: 1.65, margin: '0 0 14px',
                          display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                        }}>
                          {post.excerpt}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '12px', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <Clock size={11} /> {post.readTime} read
                          </span>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '13px', fontWeight: 700, color: '#F97316' }}>
                            Read More <ArrowRight size={13} />
                          </span>
                        </div>
                      </div>

                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#94A3B8' }}>
              <Search size={36} style={{ marginBottom: '14px', opacity: 0.4 }} />
              <p>No articles found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ background: '#fff', padding: '72px 0', textAlign: 'center', borderTop: '1px solid #F1F5F9' }}>
        <div className="container">
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <span className="section-tag">Newsletter</span>
            <div className="divider divider-center" />
            <h2 className="h2" style={{ marginTop: '18px', marginBottom: '12px' }}>
              Get Weekly Marketing Tips
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px', marginBottom: '28px' }}>
              Join 2,000+ marketers getting actionable insights every week.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input type="email" placeholder="Your email address" className="form-input" style={{ maxWidth: '280px' }} />
              <button style={{ padding: '13px 24px', borderRadius: '10px', background: '#F97316', color: '#fff', border: 'none', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#EA580C'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#F97316'}>
                Subscribe Free
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:1100px){.blog-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:600px){.blog-grid{grid-template-columns:1fr!important;}}
        @media(max-width:780px){.featured-card{grid-template-columns:1fr!important;}}
        @media(max-width:780px){.featured-card>div:last-child{min-height:220px!important;}}
        .card-info, .card-info *{text-align:left!important;}
      `}</style>
    </>
  )
}
