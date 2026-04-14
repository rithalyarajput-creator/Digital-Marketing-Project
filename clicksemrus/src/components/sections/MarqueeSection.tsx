export default function MarqueeSection() {
  const items = [
    "SEO Optimization", "Social Media Marketing", "Google Ads",
    "Content Strategy", "Web Design", "Email Marketing",
    "Brand Identity", "Analytics & Reporting", "PPC Campaigns",
    "Lead Generation", "E-commerce Marketing", "Influencer Marketing",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="border-y border-[var(--border-light)] bg-[var(--surface)] overflow-hidden py-4">
      <div className="flex">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap pr-8">
          {doubled.map((item, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="text-sm font-medium text-[var(--text-secondary)]">{item}</span>
              <span className="text-[var(--primary)] text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
