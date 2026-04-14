import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 200, suffix: '+', label: 'Brands Scaled', icon: '🚀', color: '#1A56DB' },
  { value: 500, suffix: '%', label: 'Avg Traffic Growth', icon: '📈', color: '#F59E0B' },
  { value: 5, suffix: 'x', label: 'Average ROAS', icon: '💰', color: '#059669' },
  { value: 98, suffix: '%', label: 'Client Retention', icon: '⭐', color: '#7C3AED' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1800
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current = Math.min(current + increment, target)
          setCount(Math.floor(current))
          if (current >= target) clearInterval(timer)
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsSection() {
  return (
    <section style={{ background: '#FFF8F0', padding: '72px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px', textAlign: 'center' }} className="stats-grid">
          {stats.map(s => (
            <div key={s.label} style={{ background: '#fff', borderRadius: '20px', padding: '32px 24px', border: '1.5px solid #FDE68A', boxShadow: '0 4px 20px rgba(245,158,11,0.06)' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{s.icon}</div>
              <div style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 900, background: `linear-gradient(135deg,${s.color},#F59E0B)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '6px' }}>
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p style={{ fontSize: '14px', color: '#64748B', fontWeight: 600 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;}} @media(max-width:480px){.stats-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
