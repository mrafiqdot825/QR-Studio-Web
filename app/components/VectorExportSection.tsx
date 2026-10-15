import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export function VectorExportSection() {
  const [zoomLevel, setZoomLevel] = useState<number>(4);

  return (
    <section
      id="vector-quality"
      className="py-20 md:py-28 relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Morrow Signature Pattern */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[var(--ink-muted)] uppercase">
            Commercial print standards
          </p>
          <h2 className="h2-editorial font-bold text-[var(--ink)]">
            From phone screen, <br />
            <span className="italic font-normal text-[var(--plum)]">
              to 50-foot billboard.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--ink-muted)] max-w-xl mx-auto leading-relaxed">
            Never worry about blur, compression artifacts, or pixelation. Your
            codes scan reliably at any physical distance or scale.
          </p>
        </div>

        {/* Comparison Showcase Card */}
        <div className="bg-[var(--bg-surface)] rounded-[32px] border border-[var(--border-subtle)] shadow-[0_16px_36px_rgba(74,15,58,0.06)] overflow-hidden p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Magnifier Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[var(--border-subtle)] gap-3">
                <span className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider">
                  Microscopic Zoom ({zoomLevel}x Magnification)
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[var(--ink-muted)] font-medium">
                    Zoom Level:
                  </span>
                  <div className="flex items-center gap-1 bg-white/70 p-1 rounded-full border border-[var(--border-subtle)]">
                    {[2, 4, 8].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setZoomLevel(lvl)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all select-none ${
                          zoomLevel === lvl
                            ? "bg-[var(--plum)] text-white shadow-xs font-semibold"
                            : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                        }`}
                      >
                        {lvl}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Generic Low-Res Raster */}
                <div className="p-6 rounded-[24px] bg-[var(--peach)]/25 border border-[var(--peach)]/60 flex flex-col items-center">
                  <div className="flex items-center gap-2 text-[#8B2C15] font-semibold text-xs uppercase tracking-wider mb-3">
                    <XCircle className="w-4 h-4 text-[#C2410C]" />
                    <span>Generic Raster (PNG)</span>
                  </div>

                  <div className="w-44 h-44 rounded-2xl overflow-hidden bg-white border border-[var(--peach)]/50 flex items-center justify-center p-4 relative shadow-inner">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full"
                      style={{ filter: `blur(${zoomLevel * 0.6}px)` }}
                    >
                      <rect
                        x="10"
                        y="10"
                        width="80"
                        height="80"
                        rx="15"
                        fill="#1A1416"
                      />
                      <rect
                        x="25"
                        y="25"
                        width="50"
                        height="50"
                        rx="8"
                        fill="#FFFFFF"
                      />
                      <rect
                        x="38"
                        y="38"
                        width="24"
                        height="24"
                        rx="4"
                        fill="#1A1416"
                      />
                    </svg>
                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-xs font-semibold text-[#8B2C15]">
                      Severe pixelation & optical blur
                    </span>
                    <p className="text-[11px] text-[var(--ink-muted)] mt-1">
                      Causes scanner dropouts, ink bleed, and customer dropoff.
                    </p>
                  </div>
                </div>

                {/* QRLab Vector SVG */}
                <div className="p-6 rounded-[24px] bg-[var(--sage)]/30 border border-[var(--sage)] flex flex-col items-center">
                  <div className="flex items-center gap-2 text-[#1B3B2B] font-semibold text-xs uppercase tracking-wider mb-3">
                    <CheckCircle2 className="w-4 h-4 text-[var(--leaf)]" />
                    <span>QRLab Vector (SVG)</span>
                  </div>

                  <div className="w-44 h-44 rounded-2xl overflow-hidden bg-white border border-[var(--sage)] flex items-center justify-center p-4 relative shadow-inner">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <rect
                        x="10"
                        y="10"
                        width="80"
                        height="80"
                        rx="20"
                        fill="#4A0F3A"
                      />
                      <rect
                        x="25"
                        y="25"
                        width="50"
                        height="50"
                        rx="12"
                        fill="#FFFFFF"
                      />
                      <rect
                        x="38"
                        y="38"
                        width="24"
                        height="24"
                        rx="6"
                        fill="#4A0F3A"
                      />
                    </svg>
                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-xs font-semibold text-[#1B3B2B]">
                      Razor-sharp mathematical paths
                    </span>
                    <p className="text-[11px] text-[var(--ink-muted)] mt-1">
                      Infinite clarity for offset printing, laser etching &
                      signs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Explanatory Copy */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold text-[var(--plum)] uppercase tracking-wider">
                Infinite Scalability Guarantee
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--ink)] leading-snug">
                Export once, print anywhere without compromise.
              </h3>
              <p className="text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed">
                When you scale a standard PNG to fit a trade-show banner or
                storefront window, the barcode edges fuzz and cameras fail to
                decode.
              </p>
              <p className="text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed">
                QRLab outputs clean, standards-compliant SVG files. Drop them
                straight into Adobe InDesign, Illustrator, Canva, or Figma with
                mathematically perfect vector paths.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
