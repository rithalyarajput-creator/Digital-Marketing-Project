import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import CTABanner from '../components/sections/CTABanner'

const services = [
  {
    id: 'seo', icon: '🔍', title: 'SEO Optimization', color: '#1A56DB', bg: '#EBF2FF',
    desc: 'Dominate search rankings with our comprehensive SEO service covering technical audits, on-page optimization, content strategy, and authoritative link building.',
    features: ['Technical SEO Audit & Fixes','Keyword Research & Mapping','On-Page Content Optimization','Link Building & PR Outreach','Monthly Rank Tracking Reports','Local SEO for Area-Based Businesses'],
  },
  {
    id: 'social', icon: '📱', title: 'Social Media Marketing', color: '#F59E0B', bg: '#FFF8F0',
    desc: 'Build an engaged community and amplify your brand across all major platforms with data-driven content strategy and paid social campaigns.',
    features: ['Content Calendar & Strategy','Instagram, LinkedIn & Facebook','Reels & Short-Form Video','Community Management','Paid Social Campaigns','Influencer Partnerships'],
  },
  {
    id: 'ppc', icon: '⚡', title: 'Pay-Per-Click Advertising', color: '#7C3AED', bg: '#F5F3FF',
    desc: 'Maximize every ad rupee with laser-targeted Google Ads and Meta campaigns engineered for conversion — not just clicks.',
    features: ['Google Search & Display Ads','Meta (Facebook & Instagram) Ads','Landing Page Optimization','A/B Testing & Experimentation','Conversion Rate Optimization','Detailed ROAS Reporting'],
  },
  {
    id: 'web', icon: '🌐', title: 'Web Design & Development', color: '#059669', bg: '#F0FDF4',
    desc: 'Stunning, fast, conversion-optimized websites that rank higher on Google and turn visitors into paying customers.',
    features: ['Custom UI/UX Design','Mobile-First Development','Core Web Vitals Optimization','CMS Integration (WordPress, etc.)','E-commerce Development','Website Speed Optimization'],
  },
  {
    id: 'content', icon: '✍️', title: 'Content Marketing', color: '#DC2626', bg: '#FEF2F2',
    desc: 'Strategic content that educates, engages, and converts — from blog posts to video scripts to infographics that build authority.',
    features: ['Blog & Article Writing','Video Script & Production','Infographic Design','Case Studies & Whitepapers','Email Newsletter Campaigns','Content Distribution Strategy'],
  },
  {
    id: 'brand', icon: '🎨', title: 'Brand Strategy & Identity', color: '#0891B2', bg: '#F0F9FF',
    desc: 'From logo to voice, we craft cohesive brand identities that command premium positioning and leave lasting impressions.',
    features: ['Brand Audit & Positioning','Logo & Visual Identity','Brand Voice & Messaging','Brand Guidelines Document','Social Media Kit','Pitch Deck & Collateral Design'],
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#F0F6FF,#fff)', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag">Our Services</span>
          <div className="divider divider-center" />
          <h1 className="h1" style={{ marginTop: '20px', marginBottom: '16px' }}>
            Everything You Need to<br /><span className="gradient-text">Dominate Online</span>
          </h1>
          <p className="body-md" style={{ maxWidth: '540px', margin: '0 auto 32px' }}>
            From SEO to paid ads to web design — a full-service digital marketing agency that covers every growth channel.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {services.map((s, i) => (
              <div key={s.id} id={s.id} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', direction: i % 2 === 1 ? 'rtl' : 'ltr' }} className="svc-item">
                <div style={{ direction: 'ltr' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginBottom: '18px', border: `1px solid ${s.color}22` }}>
                    {s.icon}
                  </div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, color: s.color, marginBottom: '14px' }}>{s.title}</h2>
                  <p className="body-md" style={{ marginBottom: '28px' }}>{s.desc}</p>
                  <Link to="/contact" className="btn btn-blue">
                    Get Started <ArrowRight size={16} />
                  </Link>
                </div>
                <div style={{ direction: 'ltr', background: s.bg, borderRadius: '20px', padding: '32px', border: `1.5px solid ${s.color}22` }}>
                  <h4 style={{ fontWeight: 800, fontSize: '14px', color: s.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>What's Included</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {s.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2 size={16} color={s.color} style={{ flexShrink: 0, marginTop: '1px' }} />
                        <span style={{ fontSize: '14px', color: '#475569' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:860px){.svc-item{grid-template-columns:1fr!important;direction:ltr!important;}}`}</style>
      </section>

      <CTABanner />
    </>
  )
}
