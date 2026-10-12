import { QrCode, Sparkles, ShieldCheck, Cpu } from "lucide-react";

export function MetricsStrip() {
  const metrics = [
    {
      stat: "6+ Formats",
      title: "Universal Payloads",
      desc: "Full native support for URLs, Wi-Fi credentials, vCard contacts, emails, and SMS.",
      icon: QrCode,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      stat: "Vector SVG",
      title: "Infinite Scalability",
      desc: "Mathematical vector exports ready for Adobe Illustrator, Figma, merch & 50-ft billboards.",
      icon: Sparkles,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      stat: "100% On-Device",
      title: "Zero Cloud & Tracking",
      desc: "Zero intermediate redirect servers, zero telemetry logs, zero registration required.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      stat: "60 FPS Physics",
      title: "Fluid Mobile UX",
      desc: "Hardware-accelerated animations and live tactile feedback engineered with Expo.",
      icon: Cpu,
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
  ];

  return (
    <section className="relative py-12 bg-white/60 border-y border-slate-200/80 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold tracking-tight text-[#0E1B2A]">
                    {item.stat}
                  </span>
                  <div className={`p-2.5 rounded-xl border ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6A7D] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

