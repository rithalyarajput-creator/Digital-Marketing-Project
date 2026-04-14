import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="section-pad bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative rounded-3xl bg-gradient-to-br from-[var(--primary)] via-[#7C5CFF] to-[#A855F7] p-12 lg:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-widest mb-6">
              Limited Spots Available
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-5">
              Ready to 10x Your Digital Growth?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Get a FREE 30-minute strategy call and a detailed audit of your current marketing — no strings attached.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-[var(--primary)] font-bold text-base hover:bg-[var(--surface)] hover:-translate-y-1 transition-all duration-200 shadow-lg"
              >
                Claim Your Free Audit <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all duration-200"
              >
                See Our Work
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/70 text-sm">
              <span>✓ No commitment required</span>
              <span>✓ 100% free</span>
              <span>✓ Response within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
