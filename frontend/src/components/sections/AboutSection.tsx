import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Rocket, Star, Zap } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="section" style={{ background: '#F8FAFF' }} id="about">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }} className="about-grid">

          {/* Visual */}
          <div style={{ position: 'relative', minHeight: '460px' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'linear-gradient(145deg,#1A56DB,#2563EB)', borderRadius: '28px', padding: '36px', width: '230px', textAlign: 'center', color: '#fff', zIndex: 2, boxShadow: '0 24px 70px rgba(26,86,219,0.3)' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <Zap size={26} color="#fff" fill="#fff" />
              </div>
              <div style={{ fontSize: '20px', fontWeight: 800, marginBottom: '4px' }}>Clicksemrus</div>
              <div style={{ fontSize: '12px', opacity: 0.75, marginBottom: '18px' }}>Your Growth Partner</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                {['SEO', 'PPC', 'Social', 'Web'].map(t => (
                  <span key={t} style={{ background: 'rgba(255,255,255,0.2)', padding: '3px 10px', borderRadius: '100px', fontSize: '11px', fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="anim-float" style={{ position: 'absolute', top: '8%', left: '0', background: '#fff', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.09)', border: '1px solid #E2E8F0', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 3 }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#EBF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Rocket size={18} color="#1A56DB" />
              </div>
              <div><div style={{ fontWeight: 800, fontSize: '17px', color: '#0F172A' }}>200+</div><div style={{ fontSize: '11px', color: '#94A3B8' }}>Projects Done</div></div>
            </div>
            <div className="anim-float2" style={{ position: 'absolute', bottom: '8%', right: '0', background: '#fff', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.09)', border: '1px solid #E2E8F0', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 3 }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Star size={18} color="#F59E0B" fill="#F59E0B" />
              </div>
              <div><div style={{ fontWeight: 800, fontSize: '17px', color: '#0F172A' }}>4.9 / 5</div><div style={{ fontSize: '11px', color: '#94A3B8' }}>Client Rating</div></div>
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '290px', height: '290px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(26,86,219,0.08) 0%,transparent 70%)', zIndex: 1 }} />
          </div>

          {/* Content */}
          <div>
            <span className="section-tag">About Us</span>
            <div className="divider" style={{ marginBottom: '18px' }} />
            <h2 className="h2" style={{ marginBottom: '18px' }}>
              We Don't Just Market.<br />
              <span className="gradient-text">We Build Empires.</span>
            </h2>
            <p className="body-md" style={{ marginBottom: '14px' }}>
              Clicksemrus is a full-service digital marketing agency founded on one belief — every brand deserves a strategy as unique as its DNA. We combine data, creativity, and technology to deliver growth that matters.
            </p>
            <p className="body-md" style={{ marginBottom: '26px' }}>
              From startups to established businesses, we've helped brands multiply their online presence, dominate search rankings, and convert traffic into revenue.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '32px' }}>
              {['Custom strategies — no cookie-cutter templates', 'Transparent reporting with real-time dashboards', 'Dedicated account manager for every client', 'ROI-focused campaigns with measurable results'].map(p => (
                <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
                  <CheckCircle2 size={17} color="#1A56DB" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '14px', color: '#475569' }}>{p}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-blue">Learn More About Us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:960px){.about-grid{grid-template-columns:1fr!important;}.about-grid>div:first-child{display:none!important;}}`}</style>
    </section>
  )
}
