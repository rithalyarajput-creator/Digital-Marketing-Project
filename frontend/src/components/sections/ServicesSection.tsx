import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const services = [
  { id: 'seo', icon: '🔍', title: 'SEO Optimization', color: '#1A56DB', bg: '#EBF2FF', desc: 'Dominate search rankings with technical SEO, content strategy, and authoritative link building that drives sustainable organic growth.' },
  { id: 'social', icon: '📱', title: 'Social Media Marketing', color: '#F59E0B', bg: '#FFF8F0', desc: 'Build a loyal community and amplify your brand across Instagram, LinkedIn, Facebook, and Twitter with engaging content.' },
  { id: 'ppc', icon: '⚡', title: 'Pay-Per-Click Ads', color: '#7C3AED', bg: '#F5F3FF', desc: 'Laser-targeted Google & Meta ad campaigns engineered for maximum ROAS. Every rupee spent, tracked and optimized.' },
  { id: 'web', icon: '🌐', title: 'Web Design & Dev', color: '#059669', bg: '#F0FDF4', desc: 'Stunning, conversion-optimized websites that load fast, rank higher, and turn visitors into paying customers.' },
  { id: 'content', icon: '✍️', title: 'Content Marketing', color: '#DC2626', bg: '#FEF2F2', desc: 'Strategic content that educates, engages, and converts — blogs, videos, infographics, and more that build brand authority.' },
  { id: 'brand', icon: '🎨', title: 'Brand Strategy', color: '#0891B2', bg: '#F0F9FF', desc: 'From logo to voice, we craft cohesive brand identities that leave lasting impressions and command premium positioning.' },
]

export default function ServicesSection() {
  return (
    <section className="section" id="services" style={{ background: '#fff' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <span className="section-tag">What We Do</span>
          <div className="divider divider-center" />
          <h2 className="h2" style={{ marginTop: '18px' }}>
            Services That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="body-md" style={{ marginTop: '14px', maxWidth: '520px', margin: '14px auto 0' }}>
            Full-spectrum digital marketing solutions tailored to your goals, budget, and industry.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }} className="services-grid">
          {services.map(s => (
            <div key={s.id} className="card-base" style={{ background: '#fff', borderRadius: '20px', padding: '32px', border: '1.5px solid #E2E8F0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', marginBottom: '18px' }}>
                {s.icon}
              </div>
              <h3 className="h3" style={{ marginBottom: '10px', color: s.color }}>{s.title}</h3>
              <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.7, marginBottom: '20px' }}>{s.desc}</p>
              <Link to={`/services#${s.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: s.color, textDecoration: 'none' }}>
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.services-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:600px){.services-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </section>
  )
}
