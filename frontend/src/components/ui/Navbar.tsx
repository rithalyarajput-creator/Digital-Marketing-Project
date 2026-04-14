import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Zap, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

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

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="desktop-nav">
            {navLinks.map(l => {
              const isActive = location.pathname === l.href
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
            <button
              onClick={() => setMenuOpen(v => !v)}
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', cursor: 'pointer', padding: '7px', display: 'none', color: '#fff', lineHeight: 0 }}
              className="burger-btn"
              aria-label="Menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: '#1E293B', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '12px 20px 18px' }}>
            {navLinks.map(l => (
              <Link key={l.href} to={l.href} style={{
                display: 'block', padding: '11px 12px', fontWeight: 600, fontSize: '15px',
                color: location.pathname === l.href ? '#F97316' : 'rgba(255,255,255,0.8)',
                textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px',
              }}>{l.label}</Link>
            ))}
          </div>
        )}
      </nav>
      <div style={{ height: '68px' }} />
      <style>{`@media(max-width:900px){.desktop-nav{display:none!important;}.burger-btn{display:block!important;}}`}</style>
    </>
  )
}
