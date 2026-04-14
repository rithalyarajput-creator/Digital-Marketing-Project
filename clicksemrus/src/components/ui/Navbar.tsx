"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Zap } from "lucide-react";

const services = [
  { label: "SEO Optimization", href: "/services#seo" },
  { label: "Social Media Marketing", href: "/services#social" },
  { label: "Pay-Per-Click (PPC)", href: "/services#ppc" },
  { label: "Web Design & Development", href: "/services#web" },
  { label: "Content Marketing", href: "/services#content" },
  { label: "Brand Strategy", href: "/services#brand" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
      backdropFilter: "blur(20px)",
      borderBottom: scrolled ? "1px solid #EAE7FF" : "1px solid transparent",
      boxShadow: scrolled ? "0 2px 20px rgba(108,71,255,0.08)" : "none",
      transition: "all 0.3s ease",
      padding: scrolled ? "12px 0" : "16px 0",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{
            width: "38px", height: "38px", borderRadius: "12px",
            background: "linear-gradient(135deg, #6C47FF, #FF6B2B)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 14px rgba(108,71,255,0.3)"
          }}>
            <Zap size={18} color="#fff" />
          </div>
          <span style={{ fontSize: "20px", fontWeight: 800, color: "#0D0B26", letterSpacing: "-0.02em" }}>
            Click<span style={{ color: "#6C47FF" }}>semrus</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              padding: "8px 14px", borderRadius: "10px", fontSize: "14px", fontWeight: 500,
              textDecoration: "none",
              color: pathname === link.href ? "#6C47FF" : "#4A4870",
              background: pathname === link.href ? "#EEE9FF" : "transparent",
              transition: "all 0.2s"
            }}>
              {link.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div style={{ position: "relative" }}
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}>
            <button style={{
              display: "flex", alignItems: "center", gap: "4px",
              padding: "8px 14px", borderRadius: "10px", fontSize: "14px", fontWeight: 500,
              background: "none", border: "none", cursor: "pointer",
              color: pathname === "/services" ? "#6C47FF" : "#4A4870"
            }}>
              Services <ChevronDown size={14} style={{ transform: svcOpen ? "rotate(180deg)" : "none", transition: "0.2s" }} />
            </button>
            {svcOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", left: "0",
                background: "#fff", borderRadius: "16px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)", border: "1px solid #EAE7FF",
                padding: "8px", minWidth: "240px", zIndex: 100
              }}>
                {services.map((s) => (
                  <Link key={s.href} href={s.href} style={{
                    display: "block", padding: "10px 14px", borderRadius: "10px",
                    fontSize: "14px", color: "#4A4870", textDecoration: "none",
                    transition: "all 0.15s"
                  }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.background = "#F5F2FF"; (e.target as HTMLElement).style.color = "#6C47FF"; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.background = "none"; (e.target as HTMLElement).style.color = "#4A4870"; }}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="desktop-nav">
          <a href="tel:+911234567890" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#6B6A8A", textDecoration: "none" }}>
            <Phone size={14} />+91 12345 67890
          </a>
          <Link href="/contact" className="btn-primary" style={{ padding: "10px 20px", fontSize: "14px" }}>
            Free Audit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "none" }}
          className="mobile-nav" aria-label="Menu">
          {mobileOpen ? <X size={22} color="#0D0B26" /> : <Menu size={22} color="#0D0B26" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #EAE7FF", padding: "16px 24px 20px" }}>
          {[...navLinks, { label: "Services", href: "/services" }].map((link) => (
            <Link key={link.href} href={link.href} style={{
              display: "block", padding: "12px 16px", borderRadius: "12px",
              fontSize: "15px", fontWeight: 500, textDecoration: "none", marginBottom: "4px",
              color: pathname === link.href ? "#6C47FF" : "#4A4870",
              background: pathname === link.href ? "#EEE9FF" : "none"
            }}>{link.label}</Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ marginTop: "12px", width: "100%", justifyContent: "center" }}>
            Get Free Audit
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
