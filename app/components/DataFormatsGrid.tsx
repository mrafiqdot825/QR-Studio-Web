import { ChevronRight, Sparkles } from "lucide-react";
import {
  BotanicalBranch,
  LeafSpray,
  FloralSprig,
  CircularArrowButton,
} from "./icons";

export function DataFormatsGrid() {
  const tiles = [
    {
      id: "url",
      title: "Website & Socials",
      tagline: "Direct URL links",
      desc: "Instant portals for design portfolios, Instagram, YouTube, Notion docs & shop storefronts.",
      bgColor: "bg-[var(--lavender)]",
      textColor: "text-[var(--ink)]",
      mutedColor: "text-[#3E373B]", // WCAG AA compliant on lavender
      illustration: (
        <BotanicalBranch className="w-24 h-24 sm:w-28 sm:h-28 text-[var(--plum)]" />
      ),
      hash: "#studio",
    },
    {
      id: "wifi",
      title: "Wi-Fi Quick-Connect",
      tagline: "Zero password typing",
      desc: "Effortless instant internet access for cafe guests, co-working spaces & dining tables.",
      bgColor: "bg-[var(--sage)]",
      textColor: "text-[var(--ink)]",
      mutedColor: "text-[#313C2C]", // WCAG AA compliant on sage
      illustration: (
        <LeafSpray className="w-24 h-24 sm:w-28 sm:h-28 text-[var(--leaf)]" />
      ),
      hash: "#studio",
    },
    {
      id: "vcard",
      title: "Digital vCard",
      tagline: "Instant address book sync",
      desc: "Full contact cards, phone numbers, job titles & corporate emails saved in one single tap.",
      bgColor: "bg-[var(--butter)]",
      textColor: "text-[var(--ink)]",
      mutedColor: "text-[#4A3D1E]", // WCAG AA compliant on butter
      illustration: <FloralSprig className="w-24 h-24 sm:w-28 sm:h-28" />,
      hash: "#studio",
    },
    {
      id: "messages",
      title: "Messages & Phone",
      tagline: "One-touch dialer & email",
      desc: "Trigger pre-filled support emails, one-tap hotline phone calls, or offline text vouchers.",
      bgColor: "bg-[var(--peach)]",
      textColor: "text-[var(--ink)]",
      mutedColor: "text-[#472D24]", // WCAG AA compliant on peach
      illustration: (
        <BotanicalBranch className="w-24 h-24 sm:w-28 sm:h-28 text-[#9E4A35] -scale-x-100" />
      ),
      hash: "#studio",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative scroll-mt-24">
      <span id="formats" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Morrow Signature Pattern */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[var(--ink-muted)] uppercase">
            Explore formats
          </p>
          <h2 className="h2-editorial font-bold text-[var(--ink)]">
            One creator, <br />
            <span className="italic font-normal text-[var(--plum)]">
              every connection.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--ink-muted)] max-w-xl mx-auto leading-relaxed">
            Choose from versatile data formats engineered for maximum
            scannability and zero friction.
          </p>
        </div>

        {/* 2x2 Feature Pastel Tiles Grid (matching Morrow reference screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {tiles.map((tile) => (
            <a
              key={tile.id}
              href={tile.hash}
              className={`group relative ${tile.bgColor} rounded-none p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(74,15,58,0.06)] hover:shadow-[0_16px_36px_rgba(74,15,58,0.12)] transition-all duration-300 hover:-translate-y-1.5`}
            >
              {/* Copy */}
              <div className="relative z-10 max-w-[260px] sm:max-w-[290px] space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-muted)]/80">
                  {tile.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--ink)] leading-snug">
                  {tile.title}
                </h3>
                <p
                  className={`text-sm sm:text-base ${tile.mutedColor} leading-relaxed pt-1`}
                >
                  {tile.desc}
                </p>
              </div>

              {/* Bottom Row: White Circular Arrow Button + Decorative Illustration */}
              <div className="relative z-10 pt-8 flex items-center justify-between">
                <CircularArrowButton size="md" />

                {/* Decorative botanical illustration positioned nicely */}
                <div className="opacity-90 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2 pointer-events-none">
                  {tile.illustration}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Morrow Signature "Not sure where to start?" Row Card */}
        <div className="max-w-5xl mx-auto mt-8">
          <a
            href="#templates"
            className="group block bg-[var(--bg-surface)] rounded-none p-5 sm:p-6 border border-[var(--border-subtle)] shadow-[0_8px_24px_rgba(74,15,58,0.04)] hover:shadow-[0_14px_32px_rgba(74,15,58,0.08)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Lavender icon tile */}
                <div className="w-12 h-12 rounded-none bg-[var(--lavender)] flex items-center justify-center shrink-0 text-[var(--plum)] shadow-2xs group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[var(--ink)]">
                    Not sure where to start?
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--ink-muted)]">
                    Explore curated designer blueprints and get instant
                    scannable presets.
                  </p>
                </div>
              </div>

              {/* Chevron in soft circle */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-canvas)] flex items-center justify-center shrink-0 text-[var(--ink)] group-hover:bg-[var(--plum)] group-hover:text-white transition-all shadow-2xs">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
