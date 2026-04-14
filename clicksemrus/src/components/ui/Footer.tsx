import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
  services: [
    { label: "SEO Optimization", href: "/services#seo" },
    { label: "Social Media Marketing", href: "/services#social" },
    { label: "Pay-Per-Click", href: "/services#ppc" },
    { label: "Web Design", href: "/services#web" },
    { label: "Content Marketing", href: "/services#content" },
    { label: "Brand Strategy", href: "/services#brand" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Admin Panel", href: "/admin" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--text-primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6C47FF] to-[#FF6B2B] flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold">Click<span className="text-[#A78BFA]">semrus</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Result-driven digital marketing agency helping brands grow, dominate search rankings, and convert traffic into revenue.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[var(--primary)] flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:hello@clicksemrus.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <Mail size={16} className="mt-0.5 shrink-0 text-[#A78BFA]" />
                hello@clicksemrus.com
              </a>
              <a href="tel:+911234567890" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <Phone size={16} className="mt-0.5 shrink-0 text-[#A78BFA]" />
                +91 12345 67890
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#A78BFA]" />
                India (Serving Globally)
              </div>
            </div>
            <div className="mt-6 p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-gray-400">🕐 Mon–Sat: 10:00 AM – 6:00 PM IST</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Clicksemrus. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
