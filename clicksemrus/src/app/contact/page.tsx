"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

// Can't export metadata from client component, so we use a separate export
// Move metadata to layout or use generateMetadata pattern

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "hello@clicksemrus.com", href: "mailto:hello@clicksemrus.com" },
  { icon: Phone, label: "Call Us", value: "+91 12345 67890", href: "tel:+911234567890" },
  { icon: MapPin, label: "Location", value: "India (Serving Globally)", href: null },
  { icon: Clock, label: "Working Hours", value: "Mon–Sat, 10AM–6PM IST", href: null },
];

const services = [
  "SEO Optimization", "Social Media Marketing", "Pay-Per-Click (PPC)",
  "Web Design & Development", "Content Marketing", "Brand Strategy", "Full Package",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--surface)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--primary-light)] blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-5">
            Get In Touch
          </span>
          <h1 className="text-5xl lg:text-6xl font-black text-[var(--text-primary)] mb-5">
            Let&apos;s Start Your <span className="gradient-text">Growth Journey</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Tell us about your brand and goals. We&apos;ll respond within 24 hours with a custom strategy.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Left Info */}
          <div>
            <h2 className="text-3xl font-black text-[var(--text-primary)] mb-4">
              How Can We <span className="gradient-text">Help You?</span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              Whether you&apos;re looking to grow your organic traffic, run paid campaigns, build a new website, or completely transform your digital presence — we&apos;ve got you covered.
            </p>

            <div className="space-y-5 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--primary-light)] flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-medium text-[var(--text-primary)]">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick response promise */}
            <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border-light)] p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-3">What happens next?</h3>
              <div className="space-y-3">
                {[
                  "We review your message within 2-4 business hours",
                  "Our team prepares a custom audit of your current marketing",
                  "We schedule a free 30-minute strategy call",
                  "You receive a detailed proposal with clear pricing",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)]">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-10">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-black text-[var(--text-primary)] mb-3">Message Sent!</h3>
                  <p className="text-[var(--text-secondary)]">
                    Thanks for reaching out! Our team will contact you within <strong>24 hours</strong> with your free audit.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-[var(--surface)] rounded-3xl p-8 border border-[var(--border-light)]">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { name: "name", label: "Full Name", type: "text", placeholder: "Your Name" },
                      { name: "email", label: "Email Address", type: "email", placeholder: "you@company.com" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.name !== "company"}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent placeholder:text-[var(--text-muted)]"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Brand"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent placeholder:text-[var(--text-muted)]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent placeholder:text-[var(--text-muted)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Service Needed</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    >
                      <option value="">Select a Service</option>
                      {services.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Your Goals</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your current challenges and what growth you want to achieve..."
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent placeholder:text-[var(--text-muted)] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[var(--primary)] text-white font-bold text-base hover:bg-[var(--primary-dark)] transition-all shadow-[var(--shadow-md)] disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message & Get Free Audit <Send size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-[var(--text-muted)]">
                    ✓ Response within 24 hours · ✓ 100% confidential · ✓ No commitment
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
