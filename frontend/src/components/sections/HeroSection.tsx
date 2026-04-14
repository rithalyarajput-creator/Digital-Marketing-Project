import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Rocket, TrendingUp, Star, DollarSign, CheckCircle2 } from 'lucide-react'

const typed = ['Organic Traffic', 'Brand Authority', 'Lead Generation', 'ROI & Revenue']

export default function HeroSection() {
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = typed[idx]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else {
      setDeleting(false)
      setIdx((idx + 1) % typed.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, idx])

  return (
    <section style={{ background: 'linear-gradient(160deg,#F0F6FF 0%,#fff 50%,#FFFBF0 100%)', padding: '72px 0 96px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }} className="hero-grid">

          {/* Left */}
          <div>
            <span className="section-tag" style={{ marginBottom: '20px', display: 'inline-block' }}>
              #1 Digital Marketing Agency in India
            </span>
            <h1 className="h1" style={{ marginBottom: '16px' }}>
              We Grow Your<br />
              <span className="gradient-text">{displayed}<span className="typed-cursor">|</span></span>
            </h1>
            <p className="body-md" style={{ fontSize: '17px', marginBottom: '32px', maxWidth: '480px' }}>
              Clicksemrus delivers data-driven digital marketing strategies that turn clicks into customers and brands into market leaders.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {['200+ brands scaled globally', 'Avg. 500% traffic growth in 90 days', '5x ROAS on paid campaigns'].map(p => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#1A56DB" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#475569', fontWeight: 500 }}>{p}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <Link to="/contact" className="btn btn-blue">
                Get Free Audit <ArrowRight size={16} />
              </Link>
              <Link to="/portfolio" className="btn btn-outline" style={{ gap: '8px' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#1A56DB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Play size={12} color="#fff" fill="#fff" />
                </span>
                See Our Work
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ display: 'flex' }}>
                {['RK', 'PS', 'AM', 'VG', 'NP'].map((ini, i) => (
                  <div key={ini} style={{ width: '34px', height: '34px', borderRadius: '50%', background: ['#1A56DB', '#F59E0B', '#059669', '#7C3AED', '#DC2626'][i], border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#fff', marginLeft: i === 0 ? 0 : '-10px', zIndex: 5 - i }}>
                    {ini}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '2px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} color="#F59E0B" fill="#F59E0B" />)}
                </div>
                <span style={{ fontSize: '12px', color: '#94A3B8' }}>200+ Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div style={{ position: 'relative', minHeight: '500px' }}>
            {/* Center card */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'linear-gradient(145deg,#1A56DB,#2563EB)', borderRadius: '28px', padding: '36px', width: '240px', textAlign: 'center', color: '#fff', zIndex: 2, boxShadow: '0 24px 70px rgba(26,86,219,0.35)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <TrendingUp size={28} color="#fff" />
              </div>
              <div style={{ fontSize: '32px', fontWeight: 900, marginBottom: '4px' }}>5x</div>
              <div style={{ fontSize: '14px', opacity: 0.85, marginBottom: '16px' }}>Average ROI</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                {['SEO', 'PPC', 'Social', 'Web'].map(t => (
                  <span key={t} style={{ background: 'rgba(255,255,255,0.2)', padding: '3px 10px', borderRadius: '100px', fontSize: '11px', fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Float card 1 */}
            <div className="anim-float" style={{ position: 'absolute', top: '6%', left: '-4%', background: '#fff', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.09)', border: '1px solid #E2E8F0', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 3 }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#EBF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Rocket size={18} color="#1A56DB" />
              </div>
              <div><div style={{ fontWeight: 800, fontSize: '17px', color: '#0F172A' }}>200+</div><div style={{ fontSize: '11px', color: '#94A3B8' }}>Brands Scaled</div></div>
            </div>

            {/* Float card 2 */}
            <div className="anim-float2" style={{ position: 'absolute', top: '6%', right: '-4%', background: '#FFF8F0', borderRadius: '16px', boxShadow: '0 8px 30px rgba(245,158,11,0.15)', border: '1px solid #FDE68A', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 3 }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <TrendingUp size={18} color="#D97706" />
              </div>
              <div><div style={{ fontWeight: 800, fontSize: '17px', color: '#D97706' }}>500%</div><div style={{ fontSize: '11px', color: '#94A3B8' }}>Avg Traffic</div></div>
            </div>

            {/* Float card 3 */}
            <div className="anim-float" style={{ position: 'absolute', bottom: '6%', right: '-4%', background: '#fff', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.09)', border: '1px solid #E2E8F0', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 3 }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#FFF8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Star size={18} color="#F59E0B" fill="#F59E0B" />
              </div>
              <div><div style={{ fontWeight: 800, fontSize: '17px', color: '#0F172A' }}>4.9 / 5</div><div style={{ fontSize: '11px', color: '#94A3B8' }}>Client Rating</div></div>
            </div>

            {/* Float card 4 */}
            <div className="anim-float2" style={{ position: 'absolute', bottom: '6%', left: '-4%', background: '#F0FDF4', borderRadius: '16px', boxShadow: '0 8px 30px rgba(5,150,105,0.12)', border: '1px solid #A7F3D0', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 3 }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DollarSign size={18} color="#059669" />
              </div>
              <div><div style={{ fontWeight: 800, fontSize: '17px', color: '#059669' }}>98%</div><div style={{ fontSize: '11px', color: '#94A3B8' }}>Retention Rate</div></div>
            </div>

            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(26,86,219,0.08) 0%,transparent 70%)', zIndex: 1 }} />
          </div>
        </div>
      </div>
      <style>{`@media(max-width:960px){.hero-grid{grid-template-columns:1fr!important;}.hero-grid>div:last-child{display:none!important;}}`}</style>
    </section>
  )
}
