"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Zap, Phone } from "lucide-react";

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6C47FF] to-[#FF6B2B] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Zap size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold text-[var(--text-primary)] font-[var(--font-inter)]">
            Click<span className="text-[var(--primary)]">semrus</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[var(--primary)] bg-[var(--primary-light)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${
                pathname === "/services"
                  ? "text-[var(--primary)] bg-[var(--primary-light)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]"
              }`}
            >
              Services
              <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-2xl shadow-[var(--shadow-lg)] border border-[var(--border-light)] py-2 z-50">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--surface)] transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+911234567890" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
            <Phone size={14} />
            +91 12345 67890
          </a>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:bg-[var(--primary-dark)] transition-all shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5"
          >
            Free Audit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--surface)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--border-light)] px-6 py-4 space-y-1">
          {[...navLinks, { label: "Services", href: "/services" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[var(--primary)] bg-[var(--primary-light)]"
                  : "text-[var(--text-secondary)] hover:bg-[var(--surface)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/contact"
              className="block w-full text-center px-5 py-3 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold"
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
