import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Award, Users, TrendingUp, Globe } from 'lucide-react'
import CTABanner from '../components/sections/CTABanner'

const values = [
  { icon: '🎯', title: 'Results First', desc: 'Every strategy, every campaign, every decision is driven by one goal — your measurable growth.' },
  { icon: '🔬', title: 'Data Driven', desc: 'We let numbers guide us. No guesswork, no assumptions — just insights backed by real analytics.' },
  { icon: '🤝', title: 'True Partnership', desc: 'Your success is our success. We work as an extension of your team, not just a vendor.' },
  { icon: '💡', title: 'Always Innovating', desc: 'Digital marketing evolves fast. We stay ahead of every algorithm, trend, and platform change.' },
]

const team = [
  { name: 'Aryan Sharma', role: 'Founder & CEO', initials: 'AS', color: '#1A56DB' },
  { name: 'Neha Gupta', role: 'Head of SEO', initials: 'NG', color: '#F59E0B' },
  { name: 'Vikram Patel', role: 'PPC Specialist', initials: 'VP', color: '#059669' },
  { name: 'Riya Joshi', role: 'Social Media Lead', initials: 'RJ', color: '#7C3AED' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#F0F6FF,#fff)', padding: '80px 0 64px' }}>
        <div className="container text-center">
          <span className="section-tag">About Clicksemrus</span>
          <div className="divider divider-center" />
          <h1 className="h1" style={{ marginTop: '20px', marginBottom: '18px' }}>
            We Don't Just Market.<br /><span className="gradient-text">We Build Empires.</span>
          </h1>
          <p className="body-md" style={{ maxWidth: '560px', margin: '0 auto 32px' }}>
            Founded with a mission to democratize world-class digital marketing, Clicksemrus has grown into one of India's most trusted growth agencies.
          </p>
          <Link to="/contact" className="btn btn-blue">
            Work With Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Stats row */}
      <section style={{ background: '#FFF8F0', padding: '56px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px', textAlign: 'center' }} className="about-stats">
            {[
              { icon: <Award size={28} color="#1A56DB" />, val: '200+', label: 'Brands Scaled' },
              { icon: <Users size={28} color="#F59E0B" />, val: '98%', label: 'Retention Rate' },
              { icon: <TrendingUp size={28} color="#059669" />, val: '5x', label: 'Avg ROAS' },
              { icon: <Globe size={28} color="#7C3AED" />, val: '15+', label: 'Countries Served' },
            ].map(s => (
              <div key={s.label} style={{ background: '#fff', borderRadius: '16px', padding: '28px 16px', border: '1.5px solid #FDE68A' }}>
                <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', marginBottom: '4px' }}>{s.val}</div>
                <p style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:700px){.about-stats{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* Story */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }} className="story-grid">
            <div>
              <span className="section-tag">Our Story</span>
              <div className="divider" />
              <h2 className="h2" style={{ marginTop: '18px', marginBottom: '18px' }}>Built From Passion,<br /><span className="gradient-text">Driven by Results</span></h2>
              <p className="body-md" style={{ marginBottom: '14px' }}>
                Clicksemrus was born from a simple observation — most businesses were spending big on marketing but seeing little return because agencies focused on vanity metrics instead of actual revenue.
              </p>
              <p className="body-md" style={{ marginBottom: '28px' }}>
                We set out to change that. By combining deep analytical thinking with creative execution, we built a framework that consistently delivers 5x–10x returns for our clients.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Founded in 2020 with a team of 3','Grown to 25+ specialists across all channels','Served clients in 15+ countries','₹50 Cr+ in tracked client revenue generated'].map(p => (
                  <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
                    <CheckCircle2 size={16} color="#1A56DB" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', color: '#475569' }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'linear-gradient(145deg,#EBF2FF,#F0F6FF)', borderRadius: '24px', padding: '48px', textAlign: 'center' }}>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>⚡</div>
              <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#1A56DB', marginBottom: '8px' }}>Our Mission</h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.8 }}>
                To be the growth partner that every ambitious brand deserves — one that combines enterprise-level strategy with startup-level hustle.
              </p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.story-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Values */}
      <section className="section" style={{ background: '#F8FAFF' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="section-tag">Our Values</span>
            <div className="divider divider-center" />
            <h2 className="h2" style={{ marginTop: '18px' }}>What We <span className="gradient-text">Stand For</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }} className="vals-grid">
            {values.map(v => (
              <div key={v.title} className="card-base" style={{ background: '#fff', borderRadius: '18px', padding: '28px 22px', border: '1.5px solid #E2E8F0', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{v.icon}</div>
                <h4 style={{ fontWeight: 800, fontSize: '15px', color: '#0F172A', marginBottom: '8px' }}>{v.title}</h4>
                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:900px){.vals-grid{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:500px){.vals-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* Team */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="section-tag">The Team</span>
            <div className="divider divider-center" />
            <h2 className="h2" style={{ marginTop: '18px' }}>Meet the <span className="gradient-text">Experts</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '22px', justifyContent: 'center' }} className="team-grid">
            {team.map(m => (
              <div key={m.name} className="card-base" style={{ background: '#F8FAFF', borderRadius: '20px', padding: '32px 20px', textAlign: 'center', border: '1.5px solid #E2E8F0' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '22px', margin: '0 auto 16px' }}>
                  {m.initials}
                </div>
                <div style={{ fontWeight: 800, fontSize: '15px', color: '#0F172A', marginBottom: '4px' }}>{m.name}</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:800px){.team-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      <CTABanner />
    </>
  )
}
