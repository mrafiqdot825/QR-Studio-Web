import { ShieldCheck, Lock, EyeOff, ServerOff, CheckCircle, XCircle, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";

export function PrivacySection() {
  const securityPillars = [
    {
      title: "Zero Cloud Storage",
      desc: "All QR geometry generation occurs locally in your device's memory. We do not operate databases or cloud servers that store your payload data.",
      icon: ServerOff,
      badge: "Air-Gapped Safety",
    },
    {
      title: "No Middleman Redirects",
      desc: "Online QR services wrap your URL in tracking redirects (e.g. track.ly/xyz) that expire unless you pay $30/month. QR Studio codes encode your exact destination URL directly and permanently.",
      icon: Lock,
      badge: "Permanent Direct Links",
    },
    {
      title: "Zero Telemetry & Zero Ads",
      desc: "No analytics SDKs, no behavioral trackers, no invasive push notifications, and no user accounts. Your privacy is mathematically protected.",
      icon: EyeOff,
      badge: "Private By Design",
    },
  ];

  return (
    <section id="privacy" className="py-20 md:py-28 bg-[#0E1B2A] text-white relative overflow-hidden scroll-mt-20">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>UNCOMPROMISED PRIVACY GUARANTEE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Your Data Never Leaves Your Device
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Unlike commercial online generators that hijack your links and track user scans,
            QR Studio works 100% on-device and offline.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between hover:border-slate-700 transition duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table vs Generic Services */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
            The Truth: QR Studio vs. Online QR Subscription Sites
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="pb-4 font-semibold">Security & Privacy Feature</th>
                  <th className="pb-4 font-semibold text-emerald-400">QR Studio (Offline)</th>
                  <th className="pb-4 font-semibold text-rose-400">Online Web Generators</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="py-4 font-medium">Link Hijacking / Expiration</td>
                  <td className="py-4 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Never expires (Direct Link)
                  </td>
                  <td className="py-4 text-rose-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" /> Expired after 14-day trial
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-medium">Network Connection Required</td>
                  <td className="py-4 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Works 100% in Airplane Mode
                  </td>
                  <td className="py-4 text-rose-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" /> Requires continuous web access
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-medium">User Telemetry & Tracking</td>
                  <td className="py-4 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Zero data collection
                  </td>
                  <td className="py-4 text-rose-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" /> Scans & IP logs tracked for ad profiles
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-medium">Vector SVG Export</td>
                  <td className="py-4 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Free & unlimited
                  </td>
                  <td className="py-4 text-rose-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" /> Locked behind $25–$50/mo plan
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span>Read our complete legal and transparency documentation.</span>
            <Button
              variant="dark"
              size="sm"
              href="/privacy-policy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-300 hover:text-white border-slate-700 hover:border-slate-600 bg-slate-800/90"
              icon={<ArrowUpRight className="w-4 h-4" />}
              iconPosition="right"
            >
              View Official Privacy Policy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

