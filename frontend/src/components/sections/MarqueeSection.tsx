export default function MarqueeSection() {
  const items = ['SEO Optimization','Social Media Marketing','Google Ads','Content Strategy','Web Design','Email Marketing','Brand Identity','Analytics & Reporting','PPC Campaigns','Lead Generation','E-commerce Marketing','Influencer Marketing']
  const d = [...items, ...items]
  return (
    <div style={{ background: '#EBF2FF', borderTop: '1px solid #BFDBFE', borderBottom: '1px solid #BFDBFE', padding: '14px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div className="anim-marquee" style={{ display: 'inline-flex', alignItems: 'center', gap: '28px', paddingRight: '28px' }}>
          {d.map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '28px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#1A56DB' }}>{item}</span>
              <span style={{ color: '#F59E0B', fontSize: '10px' }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
