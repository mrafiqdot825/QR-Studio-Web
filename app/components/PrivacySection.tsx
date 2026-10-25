import { Lock, EyeOff, ServerOff, CheckCircle2, XCircle } from "lucide-react";

export function PrivacySection() {
  const securityPillars = [
    {
      title: "Zero Cloud Storage",
      desc: "All QR geometry generation occurs locally in your device's memory. We do not operate databases or cloud servers that store your payload data.",
      icon: ServerOff,
      badge: "Air-Gapped Safety",
      pastel: "bg-[var(--sage)]",
    },
    {
      title: "No Middleman Redirects",
      desc: "Online QR services wrap your URL in tracking redirects (e.g. track.ly/xyz) that expire unless you pay $30/month. QRLab codes encode your destination directly and permanently.",
      icon: Lock,
      badge: "Permanent Direct Links",
      pastel: "bg-[var(--lavender)]",
    },
    {
      title: "Zero Telemetry & Zero Ads",
      desc: "No analytics SDKs, no behavioral trackers, no invasive push notifications, and no user accounts. Your privacy is mathematically protected.",
      icon: EyeOff,
      badge: "Private By Design",
      pastel: "bg-[var(--butter)]",
    },
  ];

  return (
    <section
      id="privacy"
      className="py-20 md:py-28 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Morrow Signature Pattern */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[var(--ink-muted)] uppercase">
            Uncompromised privacy guarantee
          </p>
          <h2 className="h2-editorial font-bold text-[var(--ink)]">
            Your data never leaves, <br />
            <span className="italic font-normal text-[var(--plum)]">
              your device.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--ink-muted)] max-w-xl mx-auto leading-relaxed">
            Unlike commercial online generators that hijack your links and track
            user scans, QRLab works 100% on-device and offline.
          </p>
        </div>

        {/* 3 Pillars in Rounded Cards with Pastel Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-none p-7 flex flex-col justify-between shadow-[0_8px_24px_rgba(74,15,58,0.04)] hover:shadow-[0_14px_32px_rgba(74,15,58,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-none ${pillar.pastel} flex items-center justify-center shrink-0`}
                    >
                      <Icon className="w-5 h-5 text-[var(--plum)]" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[var(--bg-canvas)] text-[var(--ink)]">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[var(--ink)] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table vs Generic Services */}
        <div className="bg-[var(--bg-surface)] rounded-none border border-[var(--border-subtle)] shadow-[0_12px_32px_rgba(74,15,58,0.06)] p-6 sm:p-10">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-center text-[var(--ink)] mb-8">
            The Truth: QRLab vs. Subscription Redirect Sites
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] text-[var(--ink-muted)]">
                  <th className="pb-4 font-semibold">
                    Security & Privacy Feature
                  </th>
                  <th className="pb-4 font-semibold text-[var(--plum)]">
                    QRLab (Offline)
                  </th>
                  <th className="pb-4 font-semibold text-[#8B2C15]">
                    Online Web Generators
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--ink)]">
                <tr>
                  <td className="py-4 font-medium">
                    Link Hijacking / Expiration
                  </td>
                  <td className="py-4 text-[#1B3B2B] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--leaf)]" />{" "}
                    Never expires (Direct Link)
                  </td>
                  <td className="py-4 text-[#8B2C15] flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-[#C2410C]" /> Expired after
                    14-day trial
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-medium">Cloud Database Storage</td>
                  <td className="py-4 text-[#1B3B2B] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--leaf)]" /> Zero
                    data stored
                  </td>
                  <td className="py-4 text-[#8B2C15] flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-[#C2410C]" /> Scans logged
                    in server logs
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-medium">Pricing Model</td>
                  <td className="py-4 text-[#1B3B2B] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--leaf)]" /> 100%
                    Free Forever
                  </td>
                  <td className="py-4 text-[#8B2C15] flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-[#C2410C]" /> $25–$60 per
                    month billed yearly
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-medium">
                    Air-Gapped Offline Operation
                  </td>
                  <td className="py-4 text-[#1B3B2B] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--leaf)]" />{" "}
                    Works in Airplane Mode
                  </td>
                  <td className="py-4 text-[#8B2C15] flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-[#C2410C]" /> Requires
                    active internet & account
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
