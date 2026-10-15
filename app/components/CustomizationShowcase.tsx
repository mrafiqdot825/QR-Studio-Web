import { Eye, Palette, Award, Layers, ChevronRight } from "lucide-react";

export function CustomizationShowcase() {
  const customizationFeatures = [
    {
      title: "Module Shapes",
      badge: "Tile Geometry",
      desc: "Transform traditional blocky grids with sleek rounded pebbles, organic circular dots, or high-contrast crisp squares.",
      icon: Layers,
      highlight: "Square, Rounded & Dots variants",
      pastel: "bg-[var(--lavender)]",
    },
    {
      title: "Eye Styling",
      badge: "Locator Framing",
      desc: "Redesign the 3 corner finder patterns. Match rounded logos with circular eyes or architectural brands with sharp rectilinear bevels.",
      icon: Eye,
      highlight: "Concentric rings & softened radii",
      pastel: "bg-[var(--sage)]",
    },
    {
      title: "Brand Center Badges",
      badge: "Logo Embedding",
      desc: "Place your emblem, star, or security shield right in the center. Protected by Reed-Solomon Level-H error correction without scanning loss.",
      icon: Award,
      highlight: "Auto-cleared center canvas",
      pastel: "bg-[var(--butter)]",
    },
    {
      title: "Curated Luxury Palettes",
      badge: "Harmonized Color",
      desc: "Eliminate low-contrast scanning failures with pre-tested accessible duotones and radiant gradients designed by typographers.",
      icon: Palette,
      highlight: "Editorial Plum, Sage & Butter tones",
      pastel: "bg-[var(--peach)]",
    },
  ];

  return (
    <section
      id="customization"
      className="py-20 md:py-28 relative scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Morrow Signature Pattern */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[var(--ink-muted)] uppercase">
            Unlimited visual expression
          </p>
          <h2 className="h2-editorial font-bold text-[var(--ink)]">
            Craft your brand, <br />
            <span className="italic font-normal text-[var(--plum)]">
              in every millimeter.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--ink-muted)] max-w-xl mx-auto leading-relaxed">
            Never settle for plain black squares again. Customize modules,
            corner finders, and logos to harmoniously match your identity.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Feature Section Cards with soft shadows & "See details" chevron circles */}
          <div className="lg:col-span-7 space-y-4">
            {customizationFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-[28px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[0_8px_24px_rgba(74,15,58,0.04)] hover:shadow-[0_14px_32px_rgba(74,15,58,0.08)] transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Pastel Rounded Square Icon */}
                      <div
                        className={`p-3 rounded-2xl ${feat.pastel} text-[var(--ink)] flex-shrink-0 group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-5 h-5 text-[var(--plum)]" />
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--ink)]">
                            {feat.title}
                          </h3>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[var(--bg-canvas)] text-[var(--plum)]">
                            {feat.badge}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                          {feat.desc}
                        </p>
                        <div className="text-xs font-semibold text-[var(--plum)] pt-1">
                          ✨ {feat.highlight}
                        </div>
                      </div>
                    </div>

                    {/* Chevron in soft circle */}
                    <div className="hidden sm:flex w-8 h-8 rounded-full bg-[var(--bg-canvas)] items-center justify-center shrink-0 text-[var(--ink-muted)] group-hover:bg-[var(--plum)] group-hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Native Screen Preview Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[300px] rounded-[40px] overflow-hidden border-[6px] border-[var(--ink)] shadow-[0_20px_48px_rgba(74,15,58,0.12)] bg-[var(--ink)]">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-[var(--ink)] rounded-full z-10" />
              <img
                src="/screenshots/03-customize.png"
                alt="QRLab Customization Tab Screenshot"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs font-medium text-[var(--ink-muted)]">
                Live interactive customization screen inside QRLab for Android
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
