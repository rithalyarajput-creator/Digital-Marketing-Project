import { useState } from 'react'
import { LayoutDashboard, Users, FileText, MessageSquare, BarChart2, Settings, LogOut, Zap, TrendingUp, Eye, CheckCircle2 } from 'lucide-react'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'leads', label: 'Leads', icon: Users },
  { id: 'blog', label: 'Blog Posts', icon: FileText },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'analytics', label: 'Analytics', icon: BarChart2 },
  { id: 'settings', label: 'Settings', icon: Settings },
]

const leads = [
  { id: 1, name: 'Rohit Verma', email: 'rohit@example.com', service: 'SEO', status: 'New', date: '2025-04-12' },
  { id: 2, name: 'Sunita Patel', email: 'sunita@example.com', service: 'PPC', status: 'Contacted', date: '2025-04-11' },
  { id: 3, name: 'Amit Kumar', email: 'amit@example.com', service: 'Social Media', status: 'Converted', date: '2025-04-10' },
  { id: 4, name: 'Priya Singh', email: 'priya@example.com', service: 'Web Design', status: 'New', date: '2025-04-09' },
  { id: 5, name: 'Karan Shah', email: 'karan@example.com', service: 'Brand Strategy', status: 'Contacted', date: '2025-04-08' },
]

const statusColors: Record<string, { bg: string; color: string }> = {
  New: { bg: '#EBF2FF', color: '#1A56DB' },
  Contacted: { bg: '#FFF8F0', color: '#D97706' },
  Converted: { bg: '#F0FDF4', color: '#059669' },
}

export default function AdminDashboard() {
  const [active, setActive] = useState('dashboard')
  const [sidebarOpen] = useState(false)

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFF', fontFamily: "'Inter','Segoe UI',system-ui,sans-serif" }}>
      {/* Sidebar */}
      <aside style={{
        width: '240px', background: '#0F172A', color: '#fff', display: 'flex', flexDirection: 'column',
        position: 'fixed', left: sidebarOpen ? 0 : '-240px', top: 0, bottom: 0, zIndex: 200,
        transition: 'left 0.25s',
      }} className="admin-sidebar">
        <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg,#1A56DB,#3B74E8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={18} color="#fff" fill="#fff" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '15px' }}>Clicksemrus</div>
              <div style={{ fontSize: '11px', color: '#64748B' }}>Admin Panel</div>
            </div>
          </div>
        </div>

        <nav style={{ flex: 1, padding: '16px 12px' }}>
          {navItems.map(item => {
            const Icon = item.icon
            const isActive = active === item.id
            return (
              <button key={item.id} onClick={() => setActive(item.id)}
                style={{ display: 'flex', alignItems: 'center', gap: '11px', width: '100%', padding: '11px 14px', borderRadius: '10px', background: isActive ? 'rgba(26,86,219,0.2)' : 'transparent', color: isActive ? '#60A5FA' : '#94A3B8', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: isActive ? 700 : 500, marginBottom: '2px', transition: 'all 0.15s', textAlign: 'left' }}>
                <Icon size={17} />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '11px', width: '100%', padding: '11px 14px', borderRadius: '10px', background: 'transparent', color: '#94A3B8', border: 'none', cursor: 'pointer', fontSize: '14px' }}>
            <LogOut size={17} /> Log Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, marginLeft: '240px', minHeight: '100vh' }} className="admin-main">
        {/* Top bar */}
        <header style={{ background: '#fff', borderBottom: '1px solid #E2E8F0', padding: '0 28px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', textTransform: 'capitalize' }}>{active}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '13px', color: '#94A3B8' }}>Admin</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1A56DB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '13px' }}>A</div>
          </div>
        </header>

        <div style={{ padding: '28px' }}>
          {active === 'dashboard' && <DashboardContent />}
          {active === 'leads' && <LeadsContent />}
          {active !== 'dashboard' && active !== 'leads' && (
            <div style={{ background: '#fff', borderRadius: '16px', padding: '48px', textAlign: 'center', border: '1.5px solid #E2E8F0' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🚧</div>
              <h3 style={{ fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Coming Soon</h3>
              <p style={{ color: '#64748B' }}>This section is under development.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .admin-sidebar{left:0!important;position:fixed!important;}
          .admin-main{margin-left:0!important;}
        }
        @media(min-width:901px){
          .admin-sidebar{left:0!important;}
        }
      `}</style>
    </div>
  )
}

function DashboardContent() {
  const cards = [
    { label: 'Total Leads', value: '47', change: '+12 this week', icon: <Users size={22} color="#1A56DB" />, bg: '#EBF2FF' },
    { label: 'Conversions', value: '12', change: '+3 this week', icon: <CheckCircle2 size={22} color="#059669" />, bg: '#F0FDF4' },
    { label: 'Page Views', value: '8.2K', change: '+18% this month', icon: <Eye size={22} color="#7C3AED" />, bg: '#F5F3FF' },
    { label: 'Revenue Pipeline', value: '₹4.8L', change: 'Estimated', icon: <TrendingUp size={22} color="#F59E0B" />, bg: '#FFF8F0' },
  ]
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px', marginBottom: '28px' }} className="dash-cards">
        {cards.map(c => (
          <div key={c.label} style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1.5px solid #E2E8F0' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748B' }}>{c.label}</span>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{c.icon}</div>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '4px' }}>{c.value}</div>
            <div style={{ fontSize: '12px', color: '#94A3B8' }}>{c.change}</div>
          </div>
        ))}
      </div>
      <div style={{ background: '#fff', borderRadius: '16px', border: '1.5px solid #E2E8F0', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #F1F5F9' }}>
          <h3 style={{ fontWeight: 800, fontSize: '15px', color: '#0F172A' }}>Recent Leads</h3>
        </div>
        <LeadsTable />
      </div>
      <style>{`@media(max-width:900px){.dash-cards{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </div>
  )
}

function LeadsContent() {
  return (
    <div style={{ background: '#fff', borderRadius: '16px', border: '1.5px solid #E2E8F0', overflow: 'hidden' }}>
      <div style={{ padding: '20px 24px', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontWeight: 800, fontSize: '15px', color: '#0F172A' }}>All Leads ({leads.length})</h3>
      </div>
      <LeadsTable />
    </div>
  )
}

function LeadsTable() {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
        <thead>
          <tr style={{ background: '#F8FAFF' }}>
            {['Name','Email','Service','Status','Date'].map(h => (
              <th key={h} style={{ padding: '12px 20px', textAlign: 'left', fontWeight: 700, fontSize: '12px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {leads.map((l, i) => (
            <tr key={l.id} style={{ borderTop: '1px solid #F1F5F9', background: i % 2 === 0 ? '#fff' : '#FAFBFF' }}>
              <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>{l.name}</td>
              <td style={{ padding: '14px 20px', color: '#64748B' }}>{l.email}</td>
              <td style={{ padding: '14px 20px', color: '#64748B' }}>{l.service}</td>
              <td style={{ padding: '14px 20px' }}>
                <span style={{ background: statusColors[l.status]?.bg, color: statusColors[l.status]?.color, fontSize: '12px', fontWeight: 700, padding: '3px 10px', borderRadius: '100px' }}>{l.status}</span>
              </td>
              <td style={{ padding: '14px 20px', color: '#94A3B8', fontSize: '13px' }}>{l.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
