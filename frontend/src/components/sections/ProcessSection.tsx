import { Search, Map, Rocket, BarChart2 } from 'lucide-react'

const steps = [
  { num: '01', title: 'Discovery & Audit', Icon: Search, desc: 'We deep-dive into your brand, competitors, and market to uncover opportunities others miss.', color: '#1A56DB', bg: '#EBF2FF' },
  { num: '02', title: 'Strategy Blueprint', Icon: Map, desc: 'A custom roadmap built around your specific goals, timeline, and budget — no generic playbooks.', color: '#F59E0B', bg: '#FEF3C7' },
  { num: '03', title: 'Execute & Launch', Icon: Rocket, desc: 'Our expert team executes across all channels simultaneously for maximum momentum.', color: '#059669', bg: '#D1FAE5' },
  { num: '04', title: 'Measure & Scale', Icon: BarChart2, desc: 'Real-time analytics, transparent reporting, and continuous optimization to maximize ROI.', color: '#7C3AED', bg: '#EDE9FE' },
]

export default function ProcessSection() {
  return (
    <section className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <span className="section-tag">How We Work</span>
          <div className="divider divider-center" />
          <h2 className="h2" style={{ marginTop: '18px' }}>
            Our <span className="gradient-text">Proven Process</span>
          </h2>
          <p className="body-md" style={{ marginTop: '14px', maxWidth: '480px', margin: '14px auto 0' }}>
            A battle-tested 4-step framework that delivers consistent, measurable growth.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }} className="process-grid">
          {steps.map(s => (
            <div key={s.num} className="card-base" style={{ background: s.bg, borderRadius: '20px', padding: '32px 24px', textAlign: 'center', border: `1.5px solid ${s.color}22` }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                <s.Icon size={22} color="#fff" />
              </div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: s.color, letterSpacing: '0.1em', marginBottom: '8px' }}>{s.num}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.process-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:500px){.process-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </section>
  )
}
