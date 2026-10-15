import { QrCode, Sparkles, ShieldCheck, Smartphone } from "lucide-react";

export function MetricsStrip() {
  const metrics = [
    {
      stat: "6+ Formats",
      title: "Universal Payloads",
      desc: "Native support for URLs, Wi-Fi networks, vCard contacts, emails, phone dials, and text.",
      icon: QrCode,
      pastelBg: "bg-[var(--lavender)]",
      textColor: "text-[var(--plum)]",
    },
    {
      stat: "Vector SVG",
      title: "Infinite Scalability",
      desc: "Mathematical path exports ready for Figma, Adobe Illustrator, packaging & billboards.",
      icon: Sparkles,
      pastelBg: "bg-[var(--butter)]",
      textColor: "text-[var(--ink)]",
    },
    {
      stat: "100% On-Device",
      title: "Zero Cloud & Tracking",
      desc: "Zero intermediate redirect servers, zero telemetry logs, zero registration needed.",
      icon: ShieldCheck,
      pastelBg: "bg-[var(--sage)]",
      textColor: "text-[var(--ink)]",
    },
    {
      stat: "60 FPS Fluidity",
      title: "Tactile Mobile UX",
      desc: "Hardware-accelerated animations and live tactile controls engineered with Expo.",
      icon: Smartphone,
      pastelBg: "bg-[var(--peach)]",
      textColor: "text-[var(--ink)]",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 bg-[var(--bg-canvas)] border-y border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-[24px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[0_8px_24px_rgba(74,15,58,0.04)] hover:shadow-[0_12px_28px_rgba(74,15,58,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-bold tracking-tight text-[var(--ink)]">
                    {item.stat}
                  </span>
                  <div className={`w-10 h-10 rounded-2xl ${item.pastelBg} flex items-center justify-center shrink-0 shadow-xs`}>
                    <Icon className={`w-5 h-5 ${item.textColor}`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--ink)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
