"use client";
import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard, Users, FileText, MessageSquare, Settings,
  TrendingUp, Eye, CheckCircle, Clock, AlertCircle, LogOut, Zap,
  BarChart2, Mail, Plus, Bell
} from "lucide-react";

const stats = [
  { label: "Total Leads", value: "142", change: "+12 this week", icon: Users, color: "bg-blue-50 text-blue-600" },
  { label: "Blog Posts", value: "24", change: "3 drafts pending", icon: FileText, color: "bg-purple-50 text-purple-600" },
  { label: "Messages", value: "18", change: "5 unread", icon: MessageSquare, color: "bg-green-50 text-green-600" },
  { label: "Page Views", value: "8.4K", change: "+28% this month", icon: TrendingUp, color: "bg-orange-50 text-orange-600" },
];

const recentLeads = [
  { name: "Vikram Singh", email: "vikram@company.com", service: "SEO", status: "new", date: "Today 2:30 PM" },
  { name: "Anita Patel", email: "anita@brand.com", service: "PPC", status: "contacted", date: "Today 11:15 AM" },
  { name: "Rohit Kumar", email: "rohit@startup.com", service: "Web Design", status: "new", date: "Yesterday 4:00 PM" },
  { name: "Sonal Mehta", email: "sonal@biz.com", service: "Social Media", status: "proposal", date: "Yesterday 1:00 PM" },
  { name: "Dev Sharma", email: "dev@tech.com", service: "Brand Strategy", status: "closed", date: "Apr 12, 2026" },
];

const statusConfig: Record<string, { label: string; color: string; icon: typeof CheckCircle }> = {
  new: { label: "New", color: "bg-blue-100 text-blue-700", icon: AlertCircle },
  contacted: { label: "Contacted", color: "bg-yellow-100 text-yellow-700", icon: Clock },
  proposal: { label: "Proposal Sent", color: "bg-purple-100 text-purple-700", icon: Mail },
  closed: { label: "Closed", color: "bg-green-100 text-green-700", icon: CheckCircle },
};

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin", active: true },
  { icon: Users, label: "Leads", href: "/admin/leads" },
  { icon: FileText, label: "Blog Manager", href: "/admin/blog" },
  { icon: MessageSquare, label: "Messages", href: "/admin/messages" },
  { icon: BarChart2, label: "Analytics", href: "/admin/analytics" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[var(--surface)] overflow-hidden">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-16"} bg-[var(--text-primary)] text-white flex flex-col transition-all duration-300 shrink-0`}>
        {/* Logo */}
        <div className="p-5 border-b border-white/10 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center shrink-0">
            <Zap size={18} className="text-white" />
          </div>
          {sidebarOpen && <span className="font-bold text-lg">Admin Panel</span>}
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                item.active ? "bg-[var(--primary)] text-white" : "text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon size={18} className="shrink-0" />
              {sidebarOpen && item.label}
            </Link>
          ))}
        </nav>

        {/* View Website */}
        {sidebarOpen && (
          <div className="p-4 border-t border-white/10">
            <Link href="/" target="_blank" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <Eye size={16} />
              View Website
            </Link>
          </div>
        )}
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-[var(--border-light)] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
              <LayoutDashboard size={20} />
            </button>
            <h1 className="text-lg font-bold text-[var(--text-primary)]">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative w-9 h-9 rounded-xl bg-[var(--surface)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)]">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
            </button>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white text-sm font-bold">
              RR
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 border border-[var(--border-light)] shadow-[var(--shadow-sm)]">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                    <stat.icon size={18} />
                  </div>
                </div>
                <div className="text-2xl font-black text-[var(--text-primary)] mb-0.5">{stat.value}</div>
                <div className="text-xs font-medium text-[var(--text-muted)]">{stat.label}</div>
                <div className="text-xs text-green-600 mt-1">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Recent Leads */}
          <div className="bg-white rounded-2xl border border-[var(--border-light)] shadow-[var(--shadow-sm)] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-light)]">
              <h2 className="font-bold text-[var(--text-primary)]">Recent Leads</h2>
              <Link href="/admin/leads" className="text-sm text-[var(--primary)] font-medium hover:underline">
                View All →
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--surface)] text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Email</th>
                    <th className="px-6 py-3 text-left">Service</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-light)]">
                  {recentLeads.map((lead) => {
                    const s = statusConfig[lead.status];
                    const Icon = s.icon;
                    return (
                      <tr key={lead.email} className="hover:bg-[var(--surface)] transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-[var(--text-primary)]">{lead.name}</td>
                        <td className="px-6 py-4 text-sm text-[var(--text-secondary)]">{lead.email}</td>
                        <td className="px-6 py-4">
                          <span className="px-2.5 py-1 rounded-lg bg-[var(--primary-light)] text-[var(--primary)] text-xs font-medium">
                            {lead.service}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${s.color}`}>
                            <Icon size={12} />
                            {s.label}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-[var(--text-muted)]">{lead.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Plus, label: "New Blog Post", href: "/admin/blog/new", color: "bg-purple-500" },
              { icon: Mail, label: "View Messages", href: "/admin/messages", color: "bg-green-500" },
              { icon: Users, label: "Manage Leads", href: "/admin/leads", color: "bg-blue-500" },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[var(--border-light)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition-all"
              >
                <div className={`w-10 h-10 rounded-xl ${action.color} flex items-center justify-center text-white`}>
                  <action.icon size={18} />
                </div>
                <span className="font-semibold text-sm text-[var(--text-primary)]">{action.label}</span>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
