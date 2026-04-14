import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import CTABanner from '../components/sections/CTABanner'

const posts = [
  { slug: '1', title: 'How We Achieved 400% Traffic Growth for a B2B SaaS Brand in 4 Months', category: 'SEO', tag: '#1A56DB', bg: '#EBF2FF', date: 'Apr 8, 2025', readTime: '6 min read', icon: '🔍', excerpt: 'A behind-the-scenes case study revealing the exact SEO framework we used to take a SaaS brand from page 3 to #1 rankings.' },
  { slug: '2', title: 'The Ultimate Guide to Google Ads for Indian E-Commerce Brands in 2025', category: 'PPC', tag: '#7C3AED', bg: '#F5F3FF', date: 'Mar 28, 2025', readTime: '9 min read', icon: '⚡', excerpt: 'Everything you need to know about running profitable Google Shopping and Search ads for your Indian e-commerce store.' },
  { slug: '3', title: 'Why Your Instagram Reels Aren\'t Growing (And How to Fix It)', category: 'Social Media', tag: '#F59E0B', bg: '#FFF8F0', date: 'Mar 15, 2025', readTime: '5 min read', icon: '📱', excerpt: 'The 7 most common mistakes brands make with Reels and the algorithm-friendly strategies that consistently hit 100K+ views.' },
  { slug: '4', title: '10 Website Design Mistakes That Are Killing Your Conversion Rate', category: 'Web Design', tag: '#059669', bg: '#F0FDF4', date: 'Mar 2, 2025', readTime: '7 min read', icon: '🌐', excerpt: 'Is your website costing you customers? These 10 design and UX mistakes are silently destroying your conversion rate.' },
  { slug: '5', title: 'Content Marketing ROI: How to Measure What Actually Matters', category: 'Content', tag: '#DC2626', bg: '#FEF2F2', date: 'Feb 18, 2025', readTime: '8 min read', icon: '✍️', excerpt: 'Stop measuring vanity metrics. Here\'s the content marketing measurement framework that ties directly to revenue.' },
  { slug: '6', title: 'Local SEO in 2025: The Complete Playbook for Indian Businesses', category: 'SEO', tag: '#1A56DB', bg: '#EBF2FF', date: 'Feb 5, 2025', readTime: '11 min read', icon: '🔍', excerpt: 'Dominate Google Maps and local search results with this comprehensive Local SEO guide built specifically for Indian markets.' },
]

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#F0F6FF,#fff)', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag">The Blog</span>
          <div className="divider divider-center" />
          <h1 className="h1" style={{ marginTop: '20px', marginBottom: '16px' }}>
            Marketing Insights &<br /><span className="gradient-text">Growth Strategies</span>
          </h1>
          <p className="body-md" style={{ maxWidth: '500px', margin: '0 auto' }}>
            Actionable digital marketing advice from the team that's scaled 200+ brands.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '26px' }} className="blog-grid">
            {posts.map(p => (
              <article key={p.slug} className="card-base" style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1.5px solid #E2E8F0', boxShadow: '0 3px 12px rgba(0,0,0,0.04)' }}>
                {/* Image placeholder */}
                <div style={{ background: p.bg, height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>
                  {p.icon}
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span style={{ background: p.bg, color: p.tag, fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '100px' }}>{p.category}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#94A3B8' }}>
                      <Clock size={11} /> {p.readTime}
                    </span>
                    <span style={{ fontSize: '11px', color: '#94A3B8' }}>{p.date}</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', lineHeight: 1.4, marginBottom: '10px' }}>{p.title}</h3>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.65, marginBottom: '18px' }}>{p.excerpt}</p>
                  <Link to={`/blog/${p.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '13px', fontWeight: 700, color: '#1A56DB', textDecoration: 'none' }}>
                    Read More <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:900px){.blog-grid{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:600px){.blog-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* Newsletter */}
      <section style={{ background: '#F8FAFF', padding: '72px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <span className="section-tag">Newsletter</span>
            <div className="divider divider-center" />
            <h2 className="h2" style={{ marginTop: '18px', marginBottom: '14px' }}>Get Weekly Marketing Tips</h2>
            <p style={{ color: '#64748B', fontSize: '15px', marginBottom: '24px' }}>Join 2,000+ marketers getting actionable insights every week.</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input type="email" placeholder="Your email address" className="form-input" style={{ maxWidth: '300px' }} />
              <button className="btn btn-blue" style={{ whiteSpace: 'nowrap' }}>Subscribe Free</button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
