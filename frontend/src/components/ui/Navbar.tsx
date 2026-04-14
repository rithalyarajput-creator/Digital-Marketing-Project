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
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.95)' : '#fff',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid #F1F5F9',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.07)' : 'none',
        transition: 'all 0.3s',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg,#1A56DB,#3B74E8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={18} color="#fff" fill="#fff" />
            </div>
            <span style={{ fontSize: '19px', fontWeight: 900, letterSpacing: '-0.02em', color: '#0F172A' }}>
              Click<span style={{ color: '#1A56DB' }}>semrus</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            {navLinks.map(l => (
              <Link key={l.href} to={l.href}
                className={`nav-link${location.pathname === l.href ? ' active' : ''}`}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA + burger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link to="/contact" className="btn btn-blue" style={{ padding: '10px 22px', fontSize: '14px' }} >
              Get Free Audit
            </Link>
            <button
              onClick={() => setMenuOpen(v => !v)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'none', color: '#0F172A' }}
              className="burger-btn"
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid #F1F5F9', padding: '16px 24px 20px' }}>
            {navLinks.map(l => (
              <Link key={l.href} to={l.href}
                style={{ display: 'block', padding: '11px 0', fontWeight: 600, fontSize: '15px', color: location.pathname === l.href ? '#1A56DB' : '#475569', textDecoration: 'none', borderBottom: '1px solid #F8FAFC' }}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
      <div style={{ height: '70px' }} />

      <style>{`
        @media(max-width:900px){ .desktop-nav{display:none!important;} .burger-btn{display:block!important;} }
      `}</style>
    </>
  )
}
