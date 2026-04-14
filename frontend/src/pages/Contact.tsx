import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call — replace with actual backend URL
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#F0F6FF,#fff)', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag">Contact Us</span>
          <div className="divider divider-center" />
          <h1 className="h1" style={{ marginTop: '20px', marginBottom: '16px' }}>
            Let's Grow Your<br /><span className="gradient-text">Business Together</span>
          </h1>
          <p className="body-md" style={{ maxWidth: '480px', margin: '0 auto' }}>
            Get your free 30-minute strategy call and detailed marketing audit — no commitment required.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '64px', alignItems: 'start' }} className="contact-grid">

            {/* Info */}
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>Get In Touch</h2>
              <p className="body-md" style={{ marginBottom: '36px' }}>
                Ready to start? Fill out the form and we'll get back to you within 24 hours with a customized growth plan.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                {[
                  { icon: <Mail size={18} color="#1A56DB" />, label: 'Email', val: 'hello@clicksemrus.com', href: 'mailto:hello@clicksemrus.com' },
                  { icon: <Phone size={18} color="#1A56DB" />, label: 'Phone', val: '+91 12345 67890', href: 'tel:+911234567890' },
                  { icon: <MapPin size={18} color="#1A56DB" />, label: 'Location', val: 'India (Serving Globally)', href: undefined },
                  { icon: <Clock size={18} color="#1A56DB" />, label: 'Hours', val: 'Mon–Sat: 10AM – 6PM IST', href: undefined },
                ].map(c => (
                  <div key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#EBF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{c.label}</div>
                      {c.href ? (
                        <a href={c.href} style={{ fontSize: '15px', fontWeight: 600, color: '#0F172A', textDecoration: 'none' }}>{c.val}</a>
                      ) : (
                        <div style={{ fontSize: '15px', fontWeight: 600, color: '#0F172A' }}>{c.val}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Free audit highlight */}
              <div style={{ background: 'linear-gradient(135deg,#1A56DB,#2563EB)', borderRadius: '16px', padding: '24px', color: '#fff' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎁</div>
                <h4 style={{ fontWeight: 800, marginBottom: '6px' }}>Free Marketing Audit</h4>
                <p style={{ fontSize: '13px', opacity: 0.85, lineHeight: 1.6 }}>
                  Every inquiry includes a complimentary website and marketing audit worth ₹15,000 — absolutely free.
                </p>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: '#F8FAFF', borderRadius: '24px', padding: '40px', border: '1.5px solid #E2E8F0' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>Message Sent!</h3>
                  <p style={{ color: '#64748B' }}>We'll get back to you within 24 hours with your free audit.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '24px' }}>Send Us a Message</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
                    <div>
                      <label className="form-label">Your Name *</label>
                      <input type="text" required className="form-input" placeholder="John Doe"
                        value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} />
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input type="email" required className="form-input" placeholder="john@example.com"
                        value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} />
                    </div>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-input" placeholder="+91 98765 43210"
                      value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))} />
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label className="form-label">Service Interested In</label>
                    <select className="form-input" value={form.service} onChange={e => setForm(f => ({...f, service: e.target.value}))}>
                      <option value="">Select a service...</option>
                      <option>SEO Optimization</option>
                      <option>Social Media Marketing</option>
                      <option>Pay-Per-Click Ads</option>
                      <option>Web Design & Development</option>
                      <option>Content Marketing</option>
                      <option>Brand Strategy</option>
                      <option>Full-Service Package</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label className="form-label">Tell Us About Your Business *</label>
                    <textarea required className="form-input" rows={4} placeholder="Describe your business, current challenges, and goals..."
                      value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))}
                      style={{ resize: 'vertical', minHeight: '110px' }} />
                  </div>
                  <button type="submit" className="btn btn-blue" style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '15px' }} disabled={loading}>
                    {loading ? 'Sending...' : (<>Send Message & Get Free Audit <Send size={16} /></>)}
                  </button>
                  <p style={{ fontSize: '12px', color: '#94A3B8', textAlign: 'center', marginTop: '12px' }}>
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:860px){.contact-grid{grid-template-columns:1fr!important;} .form-row{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  )
}
