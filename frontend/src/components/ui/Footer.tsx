import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Zap } from 'lucide-react'

const links = {
  services: ['SEO Optimization','Social Media Marketing','Pay-Per-Click','Web Design','Content Marketing','Brand Strategy'],
  company: ['About Us','Portfolio','Blog','Contact'],
}
const hrefs = {
  services: ['/services#seo','/services#social','/services#ppc','/services#web','/services#content','/services#brand'],
  company: ['/about','/portfolio','/blog','/contact'],
}

const socials = [
  { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'Twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', color: '#fff' }}>
      <div className="container" style={{ paddingTop: '72px', paddingBottom: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.4fr', gap: '48px', marginBottom: '56px' }} className="footer-grid">

          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '18px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg,#1A56DB,#3B74E8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={20} color="#fff" fill="#fff" />
              </div>
              <span style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.02em', color: '#fff' }}>
                Click<span style={{ color: '#60A5FA' }}>semrus</span>
              </span>
            </Link>
            <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.75, maxWidth: '260px', marginBottom: '24px' }}>
              Result-driven digital marketing agency helping brands grow, dominate search rankings, and convert traffic into revenue.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                  style={{ width: '36px', height: '36px', borderRadius: '9px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#1A56DB'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'}>
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '14px', height: '14px', color: '#94A3B8' }}>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748B', marginBottom: '18px' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.services.map((l, i) => (
                <li key={l}>
                  <Link to={hrefs.services[i]}
                    style={{ fontSize: '14px', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#94A3B8'}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748B', marginBottom: '18px' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.company.map((l, i) => (
                <li key={l}>
                  <Link to={hrefs.company[i]}
                    style={{ fontSize: '14px', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#94A3B8'}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748B', marginBottom: '18px' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              <a href="mailto:hello@clicksemrus.com" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#94A3B8', textDecoration: 'none', fontSize: '14px' }}>
                <Mail size={15} color="#60A5FA" style={{ flexShrink: 0, marginTop: '2px' }} />
                hello@clicksemrus.com
              </a>
              <a href="tel:+911234567890" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#94A3B8', textDecoration: 'none', fontSize: '14px' }}>
                <Phone size={15} color="#60A5FA" style={{ flexShrink: 0, marginTop: '2px' }} />
                +91 12345 67890
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#94A3B8', fontSize: '14px' }}>
                <MapPin size={15} color="#60A5FA" style={{ flexShrink: 0, marginTop: '2px' }} />
                India (Serving Globally)
              </div>
            </div>
            <div style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '10px', padding: '10px 14px' }}>
              <p style={{ fontSize: '12px', color: '#F59E0B', margin: 0, fontWeight: 600 }}>Mon–Sat: 10AM – 6PM IST</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>© {new Date().getFullYear()} Clicksemrus. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/privacy" style={{ fontSize: '13px', color: '#475569', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ fontSize: '13px', color: '#475569', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:960px){.footer-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:600px){.footer-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </footer>
  )
}
