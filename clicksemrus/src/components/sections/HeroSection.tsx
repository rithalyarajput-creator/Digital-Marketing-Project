"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Star, TrendingUp, Users, Award } from "lucide-react";

const words = ["Customers.", "Revenue.", "Growth.", "Results.", "Success."];

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let wordIndex = 0, charIndex = 0, isDeleting = false;
    let timer: NodeJS.Timeout;

    function type() {
      const el = typedRef.current;
      if (!el) return;
      const current = words[wordIndex];
      el.textContent = isDeleting
        ? current.substring(0, charIndex - 1)
        : current.substring(0, charIndex + 1);
      isDeleting ? charIndex-- : charIndex++;

      let delay = isDeleting ? 60 : 110;
      if (!isDeleting && charIndex === current.length) { delay = 2000; isDeleting = true; }
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
      }
      timer = setTimeout(type, delay);
    }
    type();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle, #6C47FF 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#EEE9FF] via-[#F5F0FF] to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FFF0E8] via-transparent to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center py-16">
        {/* Left */}
        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-light)] border border-[var(--border)] text-sm font-medium text-[var(--primary)] mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Result-Driven Digital Marketing Agency
          </div>

          <h1 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[var(--text-primary)] mb-6">
            We Turn Clicks Into
            <br />
            <span
              ref={typedRef}
              className="gradient-text"
              aria-label="animated text"
            />
            <span className="text-[var(--primary)] animate-pulse">|</span>
          </h1>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-10 max-w-[520px]">
            Clicksemrus helps ambitious brands dominate the digital world through strategic SEO, paid media, social growth, and conversion-focused web design.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[var(--primary)] text-white font-semibold text-base shadow-[var(--shadow-md)] hover:bg-[var(--primary-dark)] hover:-translate-y-1 transition-all duration-200"
            >
              Start Growing Today
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border-2 border-[var(--border)] text-[var(--text-primary)] font-semibold text-base hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex -space-x-2">
              {["RK", "PS", "AM", "VG"].map((initials, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white text-xs font-bold border-2 border-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm font-bold text-[var(--text-primary)] ml-1">4.9/5</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">from 200+ happy clients</p>
            </div>
          </div>
        </div>

        {/* Right — Stats Cards */}
        <div className="relative hidden lg:block">
          <div className="relative w-full h-[520px]">
            {/* Main card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-white rounded-3xl shadow-[var(--shadow-lg)] border border-[var(--border-light)] p-8 text-center z-10">
              <div className="w-14 h-14 rounded-2xl bg-[var(--primary-light)] flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-[var(--primary)]" size={26} />
              </div>
              <div className="text-4xl font-black gradient-text mb-1">5x</div>
              <div className="text-sm font-semibold text-[var(--text-primary)] mb-1">Average ROI</div>
              <div className="text-xs text-[var(--text-muted)]">Across all campaigns</div>
            </div>

            {/* Float card 1 */}
            <div className="absolute top-8 left-4 bg-white rounded-2xl shadow-[var(--shadow-md)] border border-[var(--border-light)] p-5 w-52 animate-float">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                  <Users size={18} className="text-green-500" />
                </div>
                <div>
                  <div className="text-xl font-black text-[var(--text-primary)]">200+</div>
                  <div className="text-xs text-[var(--text-muted)]">Brands Scaled</div>
                </div>
              </div>
              <div className="h-1.5 rounded-full bg-[var(--surface)]">
                <div className="h-full w-4/5 rounded-full bg-green-500" />
              </div>
            </div>

            {/* Float card 2 */}
            <div className="absolute bottom-8 right-4 bg-white rounded-2xl shadow-[var(--shadow-md)] border border-[var(--border-light)] p-5 w-52" style={{ animation: "float 4s ease-in-out 2s infinite" }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--primary-light)] flex items-center justify-center">
                  <Award size={18} className="text-[var(--primary)]" />
                </div>
                <div>
                  <div className="text-xl font-black text-[var(--text-primary)]">98%</div>
                  <div className="text-xs text-[var(--text-muted)]">Client Retention</div>
                </div>
              </div>
            </div>

            {/* Float card 3 */}
            <div className="absolute top-1/4 right-0 bg-gradient-to-br from-[var(--primary)] to-[#A78BFA] rounded-2xl shadow-[var(--shadow-md)] p-5 w-44 text-white" style={{ animation: "float 4s ease-in-out 1s infinite" }}>
              <div className="text-2xl font-black mb-1">500%</div>
              <div className="text-xs opacity-80">Avg. Traffic Growth</div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-8 rounded-3xl bg-[var(--surface)] -z-10" />
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]">
        <div className="w-6 h-10 rounded-full border-2 border-[var(--border)] flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[var(--primary)]" style={{ animation: "float 2s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
