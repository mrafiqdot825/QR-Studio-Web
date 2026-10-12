import { useState } from "react";
import { Sparkles, Sliders, Eye, Palette, Award, Layers } from "lucide-react";
import { THEME_PRESETS } from "../data/theme-presets";

export function CustomizationShowcase() {
  const [activeShape, setActiveShape] = useState<"rounded" | "dots" | "square">("rounded");
  const [activeEye, setActiveEye] = useState<"rounded" | "circle" | "square">("circle");

  const customizationFeatures = [
    {
      title: "Module Shapes",
      badge: "Tile Geometry",
      desc: "Transform traditional blocky grids with sleek rounded pebbles, organic circular dots, or high-contrast crisp squares.",
      icon: Layers,
      highlight: "Square, Rounded & Dots variants",
    },
    {
      title: "Eye Styling",
      badge: "Locator Framing",
      desc: "Redesign the 3 corner finder patterns. Match rounded logos with circular eyes or architectural brands with sharp rectilinear bevels.",
      icon: Eye,
      highlight: "Concentric rings & softened radii",
    },
    {
      title: "Brand Center Badges",
      badge: "Logo Embedding",
      desc: "Place your emblem, star, or security shield right in the center. Protected by Reed-Solomon Level-H error correction without scanning loss.",
      icon: Award,
      highlight: "Auto-cleared center canvas",
    },
    {
      title: "Curated Luxury Palettes",
      badge: "Harmonized Color",
      desc: "Eliminate low-contrast scanning failures with pre-tested accessible duotones and radiant gradients designed by typographers.",
      icon: Palette,
      highlight: "Ocean Blue, Aurora, Sunset & Gold",
    },
  ];

  return (
    <section id="customization" className="py-20 md:py-28 bg-[#F0F8FF]/60 border-t border-slate-200/80 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold badge-pill">
            <Sliders className="w-3.5 h-3.5 text-[#3E6FA6]" />
            <span>UNLIMITED VISUAL EXPRESSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E1B2A]">
            Craft Your Unique Brand Identity
          </h2>
          <p className="text-base sm:text-lg text-[#5A6A7D]">
            Never settle for plain black modules again. Customize every millimeter to
            match your restaurant interior, corporate brand guidelines, or event tickets.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Feature Breakdown */}
          <div className="lg:col-span-7 space-y-5">
            {customizationFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#EBF3FC] text-[#3E6FA6] group-hover:bg-[#3E6FA6] group-hover:text-white transition-colors duration-200 flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-[#0E1B2A]">
                          {feat.title}
                        </h3>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {feat.badge}
                        </span>
                      </div>
                      <p className="text-sm text-[#5A6A7D] leading-relaxed">
                        {feat.desc}
                      </p>
                      <div className="text-xs font-semibold text-[#3E6FA6] pt-1">
                        ✨ {feat.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Native Screen Preview Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[320px] rounded-[40px] overflow-hidden border-[8px] border-slate-900 shadow-2xl bg-slate-900">
              {/* Dynamic Island / speaker notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-10" />
              <img
                src="/screenshots/03-customize.png"
                alt="QR Studio Customization Tab Screenshot"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs font-medium text-slate-500">
                Live interactive customization screen inside QR Studio for Android
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

