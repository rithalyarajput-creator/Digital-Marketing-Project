import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTABanner() {
  return (
    <section style={{ background: '#FFF8F0', padding: '96px 0' }}>
      <div className="container">
        <div style={{ background: 'linear-gradient(145deg,#0F172A 0%,#1E2D5A 60%,#1A56DB 100%)', borderRadius: '28px', padding: '64px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 28px 80px rgba(15,23,42,0.4)' }}>
          <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(249,115,22,0.08)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(26,86,219,0.15)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '6px 18px', background: '#F97316', color: '#fff', borderRadius: '100px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '22px' }}>
              <Zap size={12} fill="#fff" color="#fff" /> Limited Spots Available
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Ready to 10x Your Digital Growth?
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '38px' }}>
              Get a FREE 30-minute strategy call and a detailed audit — no strings attached.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '26px' }}>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 30px', borderRadius: '12px', background: '#F97316', color: '#fff', fontWeight: 700, fontSize: '15px', textDecoration: 'none', boxShadow: '0 6px 20px rgba(249,115,22,0.4)', transition: 'all 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#EA580C'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#F97316'}>
                Claim Free Audit Now <ArrowRight size={17} />
              </Link>
              <Link to="/portfolio" className="btn btn-ghost" style={{ fontSize: '15px', padding: '14px 30px' }}>
                See Our Work
              </Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', flexWrap: 'wrap', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
              <span>No commitment</span><span>100% Free</span><span>Response in 24hrs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
