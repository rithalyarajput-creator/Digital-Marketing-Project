"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Zap } from "lucide-react";

const services = [
  "SEO Optimization", "Social Media Marketing",
  "Pay-Per-Click (PPC)", "Web Design & Development",
  "Content Marketing", "Brand Strategy",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        background: "#fff",
        borderBottom: `1px solid ${scrolled ? "#E2E8F0" : "transparent"}`,
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s",
      }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 28px", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "12px",
              background: "linear-gradient(135deg, #1A56DB, #3B74E8)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 12px rgba(26,86,219,0.3)"
            }}>
              <Zap size={20} color="#fff" fill="#fff" />
            </div>
            <div>
              <span style={{ fontSize: "20px", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.03em", lineHeight: 1 }}>
                Click<span style={{ color: "#1A56DB" }}>semrus</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2px" }} className="desk-nav">
            {links.map((l) => (
              <Link key={l.href} href={l.href} style={{
                padding: "8px 14px", borderRadius: "8px",
                fontSize: "14px", fontWeight: 500, textDecoration: "none",
                color: pathname === l.href ? "#1A56DB" : "#475569",
                background: pathname === l.href ? "#EBF2FF" : "transparent",
                transition: "all 0.15s"
              }}>
                {l.label}
              </Link>
            ))}
            {/* Services */}
            <div style={{ position: "relative" }}
              onMouseEnter={() => setSvcOpen(true)}
              onMouseLeave={() => setSvcOpen(false)}>
              <button style={{
                display: "flex", alignItems: "center", gap: "4px",
                padding: "8px 14px", borderRadius: "8px",
                fontSize: "14px", fontWeight: 500, color: "#475569",
                background: "none", border: "none", cursor: "pointer",
                transition: "all 0.15s"
              }}>
                Services <ChevronDown size={13} style={{ transition: "0.2s", transform: svcOpen ? "rotate(180deg)" : "none" }} />
              </button>
              {svcOpen && (
                <div style={{
                  position: "absolute", top: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)",
                  background: "#fff", borderRadius: "16px",
                  boxShadow: "0 16px 50px rgba(0,0,0,0.12)", border: "1px solid #E2E8F0",
                  padding: "8px", minWidth: "230px", zIndex: 100
                }}>
                  {services.map((s, i) => (
                    <Link key={i} href={`/services`} style={{
                      display: "block", padding: "10px 14px", borderRadius: "10px",
                      fontSize: "13px", color: "#475569", textDecoration: "none",
                      transition: "all 0.15s"
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#EBF2FF"; (e.currentTarget as HTMLElement).style.color = "#1A56DB"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "none"; (e.currentTarget as HTMLElement).style.color = "#475569"; }}>
                      {s}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }} className="desk-nav">
            <a href="tel:+911234567890" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#64748B", textDecoration: "none", fontWeight: 500 }}>
              <Phone size={14} color="#1A56DB" /> +91 12345 67890
            </a>
            <Link href="/contact" className="btn btn-blue" style={{ padding: "10px 20px", fontSize: "13px" }}>
              Free Audit ✦
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", padding: "4px" }}
            className="mob-btn">
            {mobileOpen ? <X size={22} color="#0F172A" /> : <Menu size={22} color="#0F172A" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background: "#fff", borderTop: "1px solid #E2E8F0", padding: "16px 28px 20px" }}>
            {[...links, { label: "Services", href: "/services" }].map((l) => (
              <Link key={l.href} href={l.href} style={{
                display: "block", padding: "12px 14px", borderRadius: "10px",
                fontSize: "15px", fontWeight: 500, textDecoration: "none",
                color: pathname === l.href ? "#1A56DB" : "#475569",
                background: pathname === l.href ? "#EBF2FF" : "none",
                marginBottom: "4px"
              }}>{l.label}</Link>
            ))}
            <div style={{ marginTop: "12px" }}>
              <Link href="/contact" className="btn btn-blue" style={{ width: "100%", justifyContent: "center" }}>
                Get Free Audit
              </Link>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media(max-width:960px){ .desk-nav{display:none!important;} .mob-btn{display:flex!important;} }
      `}</style>
    </>
  );
}
