import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CTABanner from '../components/sections/CTABanner'

const projects = [
  { title: 'TechBridge Solutions', category: 'SEO + Content', tag: 'B2B SaaS', color: '#1A56DB', bg: '#EBF2FF', result: '+400% Organic Traffic', icon: '🔍', desc: 'Complete SEO overhaul and content marketing strategy that took TechBridge from page 3 to #1 for their primary keywords.' },
  { title: 'StyleNest E-Commerce', category: 'PPC + Social', tag: 'E-Commerce', color: '#F59E0B', bg: '#FFF8F0', result: '6x ROAS in Month 1', icon: '⚡', desc: 'Google Shopping + Meta retargeting campaigns that turned a struggling fashion store into a ₹2Cr/month revenue machine.' },
  { title: 'FreshBite Foods', category: 'Social Media', tag: 'F&B', color: '#059669', bg: '#F0FDF4', result: '2K → 50K Followers', icon: '📱', desc: "Organic social media strategy with Reels and influencer partnerships grew FreshBite's Instagram by 2,400% in 3 months." },
  { title: 'LegalEase India', category: 'Web + SEO', tag: 'Legal Services', color: '#7C3AED', bg: '#F5F3FF', result: '350% More Leads', icon: '🌐', desc: 'New conversion-optimized website plus local SEO dominated their city search results, tripling inbound leads month over month.' },
  { title: 'BuildRight Infra', category: 'Brand + PPC', tag: 'Real Estate', color: '#DC2626', bg: '#FEF2F2', result: '₹5Cr Pipeline Generated', icon: '🎨', desc: 'Full brand refresh and aggressive Google Ads campaign generated a massive sales pipeline for this real estate developer.' },
  { title: 'MedCare Clinics', category: 'SEO + Content', tag: 'Healthcare', color: '#0891B2', bg: '#F0F9FF', result: '#1 Local Rankings', icon: '🔍', desc: 'Multi-location local SEO and authoritative health content strategy made MedCare the top-ranked clinic chain in their city.' },
]

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#F0F6FF,#fff)', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag">Our Portfolio</span>
          <div className="divider divider-center" />
          <h1 className="h1" style={{ marginTop: '20px', marginBottom: '16px' }}>
            Real Results for<br /><span className="gradient-text">Real Businesses</span>
          </h1>
          <p className="body-md" style={{ maxWidth: '520px', margin: '0 auto' }}>
            Every case study below is a real client — real numbers, real growth, real impact.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '26px' }} className="port-grid">
            {projects.map(p => (
              <div key={p.title} className="card-base" style={{ background: '#fff', borderRadius: '22px', overflow: 'hidden', border: '1.5px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
                {/* Card header */}
                <div style={{ background: p.bg, padding: '32px', textAlign: 'center', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '14px', right: '14px', background: p.color, color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '100px' }}>{p.tag}</span>
                  <div style={{ fontSize: '40px', marginBottom: '10px' }}>{p.icon}</div>
                  <div style={{ fontWeight: 900, fontSize: '20px', color: p.color }}>{p.result}</div>
                </div>
                {/* Card body */}
                <div style={{ padding: '24px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>{p.category}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>{p.title}</h3>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:900px){.port-grid{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:600px){.port-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* Trust strip */}
      <section style={{ background: '#F8FAFF', padding: '56px 0', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Trusted by Growing Brands Across India & Beyond</h3>
          <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '32px' }}>From D2C startups to established enterprises — we've helped them all grow.</p>
          <Link to="/contact" className="btn btn-blue">
            Start Your Growth Story <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
