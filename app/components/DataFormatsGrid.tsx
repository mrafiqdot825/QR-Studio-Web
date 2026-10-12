import { Globe, Wifi, Contact, Mail, Phone, FileText, ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/Button";

export function DataFormatsGrid() {
  const formats = [
    {
      title: "Website & Socials (URL)",
      tagline: "High-Converting Portals",
      desc: "Direct visitors straight to portfolio showcases, YouTube channels, Linktree hubs, Notion docs, and e-commerce stores without typing typos.",
      icon: Globe,
      example: "https://mrafiq.vercel.app",
      pill: "Universal Scannability",
      color: "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-200",
    },
    {
      title: "Wi-Fi Quick-Connect",
      tagline: "Zero Password Typing",
      desc: "Provide effortless internet access for restaurant diners, hotel guests, and co-working spaces. Encodes WPA, WEP, or open credentials securely.",
      icon: Wifi,
      example: "WIFI:S:GuestNet;T:WPA;P:Secret!;;",
      pill: "One-Tap Connect",
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-200",
    },
    {
      title: "Digital vCard (Contacts)",
      tagline: "Instant Rolodex Sync",
      desc: "Save full name, mobile number, corporate email, job title, company name, and address directly into phone address books in a single scan.",
      icon: Contact,
      example: "BEGIN:VCARD ... END:VCARD",
      pill: "Native Phonebook Import",
      color: "from-purple-500/10 to-violet-500/10 text-purple-600 border-purple-200",
    },
    {
      title: "Email Pre-Fill",
      tagline: "Direct Mail Generation",
      desc: "Trigger default email apps on iOS and Android with recipient address, custom subject line, and boilerplate message ready to fire.",
      icon: Mail,
      example: "mailto:support@domain.com",
      pill: "Zero Friction Support",
      color: "from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-200",
    },
    {
      title: "Instant Calling (Phone)",
      tagline: "One-Touch Dialer",
      desc: "Connect customers instantly to emergency hotlines, sales reps, concierge desks, or restaurant reservations without dialing numbers.",
      icon: Phone,
      example: "tel:+15550199825",
      pill: "Instant Dialing",
      color: "from-rose-500/10 to-pink-500/10 text-rose-600 border-rose-200",
    },
    {
      title: "Plain Text & Alphanumeric",
      tagline: "Raw Payload Storage",
      desc: "Encode serial numbers, offline coupon vouchers, inventory barcodes, Wi-Fi keys, cryptographic keys, or private instructions.",
      icon: FileText,
      example: "VOUCHER-SUMMER2026-VIP",
      pill: "100% Offline Compatible",
      color: "from-slate-500/10 to-gray-500/10 text-slate-700 border-slate-200",
    },
  ];

  return (
    <section id="formats" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold badge-pill">
            <Globe className="w-3.5 h-3.5 text-[#3E6FA6]" />
            <span>UNIVERSAL PAYLOAD ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E1B2A]">
            One Creator. Every QR Use Case.
          </h2>
          <p className="text-base sm:text-lg text-[#5A6A7D]">
            Encode any data payload with optimized barcode encoding for maximum scannability
            across iOS Camera, Android Google Lens, and industrial laser scanners.
          </p>
        </div>

        {/* 6 Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {formats.map((fmt, idx) => {
            const Icon = fmt.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${fmt.color} border`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {fmt.pill}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0E1B2A] mb-1">
                    {fmt.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#3E6FA6] mb-3">
                    {fmt.tagline}
                  </div>

                  <p className="text-sm text-[#5A6A7D] leading-relaxed mb-5">
                    {fmt.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-slate-400 truncate max-w-[170px]">
                    {fmt.example}
                  </span>
                  <Button
                    variant="secondary"
                    size="xs"
                    href="#studio"
                    className="text-[#3E6FA6] hover:text-[#2A5280] shadow-2xs border-slate-200"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    iconPosition="right"
                  >
                    Try preset
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

