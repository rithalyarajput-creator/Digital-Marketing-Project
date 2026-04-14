import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Zap, Menu, X, ChevronDown, Search, Smartphone, TrendingUp, Globe, PenLine, Palette, Mail, BarChart2, ShoppingCart, Video, MapPin, Link2, FileText, Camera, PlayCircle, Users, Briefcase, Target } from 'lucide-react'

const megaMenu = [
  {
    heading: 'SEO Services',
    color: '#1A56DB',
    bg: '#EBF2FF',
    items: [
      { label: 'Technical SEO', Icon: Search },
      { label: 'Local SEO', Icon: MapPin },
      { label: 'On-Page SEO', Icon: FileText },
      { label: 'Link Building', Icon: Link2 },
      { label: 'SEO Audit', Icon: BarChart2 },
      { label: 'E-commerce SEO', Icon: ShoppingCart },
    ],
  },
  {
    heading: 'Social Media Marketing',
    color: '#F97316',
    bg: '#FFF7ED',
    items: [
      { label: 'Instagram Marketing', Icon: Camera },
      { label: 'Facebook Marketing', Icon: Users },
      { label: 'LinkedIn Marketing', Icon: Briefcase },
      { label: 'YouTube Marketing', Icon: PlayCircle },
      { label: 'Reels & Short Videos', Icon: Video },
      { label: 'Influencer Marketing', Icon: Smartphone },
    ],
  },
  {
    heading: 'Paid Advertising (PPC)',
    color: '#7C3AED',
    bg: '#F5F3FF',
    items: [
      { label: 'Google Search Ads', Icon: Search },
      { label: 'Meta (FB & IG) Ads', Icon: Target },
      { label: 'YouTube Ads', Icon: PlayCircle },
      { label: 'Display Ads', Icon: Globe },
      { label: 'Google Shopping Ads', Icon: ShoppingCart },
      { label: 'Retargeting Campaigns', Icon: TrendingUp },
    ],
  },
  {
    heading: 'Web Design & Dev',
    color: '#059669',
    bg: '#F0FDF4',
    items: [
      { label: 'Custom Website Design', Icon: Globe },
      { label: 'E-commerce Website', Icon: ShoppingCart },
      { label: 'Landing Page Design', Icon: FileText },
      { label: 'WordPress Development', Icon: PenLine },
      { label: 'Website Speed Optimization', Icon: Zap },
      { label: 'Website Maintenance', Icon: BarChart2 },
    ],
  },
  {
    heading: 'Content & Brand',
    color: '#DC2626',
    bg: '#FEF2F2',
    items: [
      { label: 'Blog & Article Writing', Icon: PenLine },
      { label: 'Video Script & Production', Icon: Video },
      { label: 'Email Marketing', Icon: Mail },
      { label: 'Brand Identity Design', Icon: Palette },
      { label: 'Infographic Design', Icon: FileText },
      { label: 'Content Strategy', Icon: BarChart2 },
    ],
  },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasMega: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()

  const openMega = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current)
    setMegaOpen(true)
  }
  const closeMega = () => {
    megaTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: '#0F172A',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 2px 24px rgba(0,0,0,0.3)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: 'linear-gradient(135deg,#F97316,#EA580C)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={18} color="#fff" fill="#fff" />
            </div>
            <span style={{ fontSize: '19px', fontWeight: 900, letterSpacing: '-0.02em', color: '#fff' }}>
              Click<span style={{ color: '#F97316' }}>semrus</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
            {navLinks.map(l => {
              const isActive = location.pathname === l.href || (l.hasMega && location.pathname.startsWith('/services'))

              if (l.hasMega) {
                return (
                  <div key={l.href} style={{ position: 'relative' }}
                    onMouseEnter={openMega} onMouseLeave={closeMega}>
                    <Link to={l.href} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '5px',
                      fontSize: '14px', fontWeight: 600, padding: '8px 14px', borderRadius: '8px',
                      color: isActive ? '#F97316' : 'rgba(255,255,255,0.75)',
                      textDecoration: 'none', transition: 'all 0.15s',
                      background: isActive || megaOpen ? 'rgba(249,115,22,0.1)' : 'transparent',
                    }}>
                      Services <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: megaOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </Link>
                  </div>
                )
              }

              return (
                <Link key={l.href} to={l.href} style={{
                  fontSize: '14px', fontWeight: 600, padding: '8px 14px', borderRadius: '8px',
                  color: isActive ? '#F97316' : 'rgba(255,255,255,0.75)',
                  textDecoration: 'none', transition: 'all 0.15s',
                  background: isActive ? 'rgba(249,115,22,0.1)' : 'transparent',
                }}
                  onMouseEnter={e => { if (!isActive)(e.currentTarget as HTMLElement).style.color = '#fff' }}
                  onMouseLeave={e => { if (!isActive)(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)' }}>
                  {l.label}
                </Link>
              )
            })}
          </div>

          {/* CTA + burger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '9px 20px', borderRadius: '9px', fontSize: '13px', fontWeight: 700,
              background: '#F97316', color: '#fff', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(249,115,22,0.35)', transition: 'all 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#EA580C'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#F97316'}>
              Free Audit
            </Link>
            <button onClick={() => setMenuOpen(v => !v)}
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', cursor: 'pointer', padding: '7px', display: 'none', color: '#fff', lineHeight: 0 }}
              className="burger-btn" aria-label="Menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: '#1E293B', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '12px 20px 18px' }}>
            {navLinks.map(l => (
              <Link key={l.href} to={l.href} onClick={() => setMenuOpen(false)} style={{
                display: 'block', padding: '11px 12px', fontWeight: 600, fontSize: '15px',
                color: location.pathname === l.href ? '#F97316' : 'rgba(255,255,255,0.8)',
                textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>{l.label}</Link>
            ))}
          </div>
        )}
      </nav>

      {/* ── MEGA MENU DROPDOWN ── */}
      {megaOpen && (
        <div
          onMouseEnter={openMega} onMouseLeave={closeMega}
          style={{
            position: 'fixed', top: '68px', left: 0, right: 0, zIndex: 999,
            background: '#0F172A',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
            padding: '32px 0 36px',
            animation: 'megaFadeIn 0.18s ease',
          }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '8px' }}>
              {megaMenu.map(col => (
                <div key={col.heading}>
                  {/* Column heading */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: col.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '12px', fontWeight: 800, color: col.color, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                      {col.heading}
                    </span>
                  </div>
                  {/* Items */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {col.items.map(item => (
                      <Link key={item.label} to="/services"
                        onClick={() => setMegaOpen(false)}
                        style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.15s', color: 'rgba(255,255,255,0.65)', fontSize: '13px', fontWeight: 500 }}
                        onMouseEnter={e => {
                          const el = e.currentTarget as HTMLElement
                          el.style.background = 'rgba(255,255,255,0.06)'
                          el.style.color = '#fff'
                        }}
                        onMouseLeave={e => {
                          const el = e.currentTarget as HTMLElement
                          el.style.background = 'transparent'
                          el.style.color = 'rgba(255,255,255,0.65)'
                        }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: col.bg + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <item.Icon size={13} color={col.color} />
                        </div>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA bar */}
            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', margin: 0 }}>
                Not sure which service you need? Get a free strategy call.
              </p>
              <Link to="/contact" onClick={() => setMegaOpen(false)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '9px 20px', borderRadius: '9px', background: '#F97316', color: '#fff', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>
                Get Free Audit <ChevronDown size={13} style={{ transform: 'rotate(-90deg)' }} />
              </Link>
            </div>
          </div>
        </div>
      )}

      <div style={{ height: '68px' }} />

      <style>{`
        @media(max-width:900px){.desktop-nav{display:none!important;}.burger-btn{display:block!important;}}
        @keyframes megaFadeIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
      `}</style>
    </>
  )
}
