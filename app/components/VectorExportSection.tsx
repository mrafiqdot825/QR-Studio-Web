import { useState } from "react";
import { ZoomIn, CheckCircle2, XCircle, Printer, Sparkles, Layers, ShieldCheck } from "lucide-react";

export function VectorExportSection() {
  const [zoomLevel, setZoomLevel] = useState<number>(4);

  return (
    <section id="vector-quality" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold badge-pill">
            <Printer className="w-3.5 h-3.5 text-[#3E6FA6]" />
            <span>COMMERCIAL PRINT STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E1B2A]">
            From Phone Screen to 50-Foot Billboard
          </h2>
          <p className="text-base sm:text-lg text-[#5A6A7D]">
            Never worry about blur, compression artifacts, or pixelation. Your codes
            scan reliably at any physical distance or scale.
          </p>
        </div>

        {/* Comparison Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Magnifier Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Microscopic Zoom Comparison (At {zoomLevel}x Magnification)
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-semibold">Zoom Level:</span>
                  <div className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200/50">
                    {[2, 4, 8].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setZoomLevel(lvl)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-200 select-none active:scale-95 ${
                          zoomLevel === lvl
                            ? "bg-[#3E6FA6] text-white shadow-xs btn-highlight"
                            : "text-slate-600 hover:text-slate-900"
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
                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200/80 flex flex-col items-center">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-3">
                    <XCircle className="w-4 h-4 text-rose-500" />
                    <span>Generic Online Generator (Raster PNG)</span>
                  </div>

                  <div className="w-48 h-48 rounded-xl overflow-hidden bg-white border border-rose-200 flex items-center justify-center p-4 relative shadow-inner">
                    {/* Simulated pixelated blurry edge */}
                    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: `blur(${zoomLevel * 0.6}px)` }}>
                      <rect x="10" y="10" width="80" height="80" rx="15" fill="#1E293B" />
                      <rect x="25" y="25" width="50" height="50" rx="8" fill="#FFFFFF" />
                      <rect x="38" y="38" width="24" height="24" rx="4" fill="#1E293B" />
                    </svg>
                    <div className="absolute inset-0 bg-rose-500/5 pointer-events-none" />
                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-xs font-semibold text-rose-800">
                      Severe pixelation & optical blur
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Causes scanner dropouts, print smudging, and poor conversion.
                    </p>
                  </div>
                </div>

                {/* QR Studio Vector SVG */}
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 flex flex-col items-center">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>QR Studio True Vector (SVG)</span>
                  </div>

                  <div className="w-48 h-48 rounded-xl overflow-hidden bg-white border border-emerald-200 flex items-center justify-center p-4 relative shadow-inner">
                    {/* Infinite crisp vector */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <rect x="10" y="10" width="80" height="80" rx="20" fill="#0E1B2A" />
                      <rect x="25" y="25" width="50" height="50" rx="12" fill="#FFFFFF" />
                      <rect x="38" y="38" width="24" height="24" rx="6" fill="#0E1B2A" />
                    </svg>
                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-xs font-semibold text-emerald-800">
                      Razor-sharp mathematical paths
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1">
                      100% loss-less fidelity whether printed at 1 inch or 10 meters.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-4">
                <h3 className="text-xl font-bold text-[#0E1B2A]">
                  Print Production Standards
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Infinite SVG Vector Export</strong>
                      <span className="text-slate-600 text-xs leading-relaxed">
                        Ready for Adobe Illustrator, Figma, CorelDRAW, and precision laser engraving machines.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Ultra HD 300 DPI PNG</strong>
                      <span className="text-slate-600 text-xs leading-relaxed">
                        Export rasters up to 4096 × 4096 pixels with alpha transparency for digital graphics and mockups.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Reed-Solomon Level H Error Correction</strong>
                      <span className="text-slate-600 text-xs leading-relaxed">
                        Up to 30% data recovery allowance—scans reliably even on curved coffee mugs, folded menus, or distressed paper.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

