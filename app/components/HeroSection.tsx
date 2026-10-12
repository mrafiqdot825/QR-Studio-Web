import { useState, useMemo } from "react";
import { Download, Sparkles, ArrowDown, ShieldCheck, Zap, Layers, CheckCircle2 } from "lucide-react";
import { THEME_PRESETS } from "../data/theme-presets";
import { generateQRSVGString } from "../utils/qr-generator";
import type { ModuleShape, EyeStyle, LogoPreset } from "../utils/qr-generator";
import { Button } from "./ui/Button";

export function HeroSection() {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [moduleShape, setModuleShape] = useState<ModuleShape>("rounded");
  const [eyeStyle, setEyeStyle] = useState<EyeStyle>("rounded");
  const [logo, setLogo] = useState<LogoPreset>("qrstudio");
  const [activeTab, setActiveTab] = useState<"live" | "app">("live");

  const currentTheme = THEME_PRESETS[selectedPresetIndex];

  const heroSvgString = useMemo(() => {
    return generateQRSVGString({
      text: "https://mrafiq.vercel.app",
      fgColor: currentTheme.qrColor,
      bgColor: "#FFFFFF",
      moduleShape,
      eyeStyle,
      logo,
    });
  }, [currentTheme.qrColor, moduleShape, eyeStyle, logo]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-1/4 w-[450px] h-[450px] bg-indigo-100/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute -top-20 right-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold badge-pill shadow-xs animate-in fade-in slide-in-from-bottom-2">
              <Sparkles className="w-3.5 h-3.5 text-[#3E6FA6] animate-pulse" />
              <span>NEXT-GEN QR MAKER • VERSION 2.0</span>
            </div>

            {/* Headline H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0E1B2A] leading-[1.08]">
              Scan-Stopping <br className="hidden sm:inline" />
              <span className="gradient-text">QR Codes.</span> <br />
              Designed in Seconds.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#5A6A7D] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Craft high-converting, on-brand QR codes with live interactive preview,
              custom shapes, luxury palettes, and infinite-resolution vector SVG exports.
              Free, offline, and 100% private.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="xl"
                href="#download"
                glow
                shimmer
                className="w-full sm:w-auto shadow-xl"
                icon={
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.007 2.007 0 0 1-.61-1.464V3.278c0-.575.228-1.096.609-1.464zm11.602 11.602l2.454 2.455-12.784 7.377 10.33-9.832zm2.454-2.832l-2.454 2.454L4.881.756l12.784 7.828zm1.092 1.092l2.84 1.737c.799.489.799 1.287 0 1.776l-2.84 1.737-1.996-1.996 1.996-1.654z"/>
                  </svg>
                }
              >
                Download for Android
              </Button>

              <Button
                variant="secondary"
                size="xl"
                href="#studio"
                className="w-full sm:w-auto"
                icon={<ArrowDown className="w-4 h-4 text-[#3E6FA6]" />}
                iconPosition="right"
              >
                Try Live Web Demo
              </Button>
            </div>

            {/* Trust points list */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-[#5A6A7D]">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Zero Cloud Tracking
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Infinite SVG Vector
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                100% Free & Open
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md relative">
              {/* Visual Card Container */}
              <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-2xl shadow-blue-900/10 border border-slate-200/90 transition-all">
                {/* Visual Header / Switcher */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold text-slate-500 ml-1">
                      {activeTab === "live" ? "Live Interactive Preview" : "App Screen (Pixel 10 Pro)"}
                    </span>
                  </div>

                  <div className="flex items-center bg-slate-100/90 p-1 rounded-xl text-xs font-medium border border-slate-200/50">
                    <button
                      onClick={() => setActiveTab("live")}
                      className={`px-3 py-1.5 rounded-lg transition-all duration-200 select-none active:scale-95 ${
                        activeTab === "live"
                          ? "segmented-pill-active font-bold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Interactive
                    </button>
                    <button
                      onClick={() => setActiveTab("app")}
                      className={`px-3 py-1.5 rounded-lg transition-all duration-200 select-none active:scale-95 ${
                        activeTab === "app"
                          ? "segmented-pill-active font-bold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      App Frame
                    </button>
                  </div>
                </div>

                {activeTab === "live" ? (
                  <>
                    {/* Live Interactive QR Card */}
                    <div
                      className="mt-5 p-6 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 shadow-inner"
                      style={{
                        background: `linear-gradient(135deg, ${currentTheme.gradient[0]}, ${currentTheme.gradient[1]}, ${currentTheme.gradient[2]})`,
                      }}
                    >
                      {/* Floating QR Code Box */}
                      <div className="w-56 h-56 sm:w-64 sm:h-64 p-3 bg-white rounded-2xl shadow-xl shadow-slate-900/10 flex items-center justify-center transition-all duration-300 hover:scale-[1.02]">
                        <div
                          className="w-full h-full"
                          dangerouslySetInnerHTML={{ __html: heroSvgString }}
                        />
                      </div>

                      {/* Live Status indicator */}
                      <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-slate-800 shadow-xs border border-white/60">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Preset: {currentTheme.name}</span>
                      </div>
                    </div>

                    {/* Interactive Swatches Bar */}
                    <div className="mt-5 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-700">Palette Swatches</span>
                        <span className="text-slate-400">Click to change theme</span>
                      </div>
                      <div className="flex items-center justify-between gap-1 sm:gap-2">
                        {THEME_PRESETS.slice(0, 6).map((preset, idx) => (
                          <button
                            key={preset.id}
                            onClick={() => setSelectedPresetIndex(idx)}
                            className={`group relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-all duration-200 flex items-center justify-center select-none active:scale-90 ${
                              selectedPresetIndex === idx
                                ? "ring-2 ring-offset-2 ring-[#3E6FA6] scale-110 shadow-md"
                                : "hover:scale-105 opacity-85 hover:opacity-100 shadow-2xs"
                            }`}
                            style={{
                              background: `linear-gradient(135deg, ${preset.gradient[0]}, ${preset.gradient[2]})`,
                              border: `1.5px solid ${preset.qrColor}`,
                            }}
                            title={preset.name}
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full shadow-inner transition-transform group-hover:scale-110"
                              style={{ backgroundColor: preset.qrColor }}
                            />
                          </button>
                        ))}
                      </div>

                      {/* Shape Quick Switcher */}
                      <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs text-slate-600">
                        <span className="font-semibold text-slate-700">Module Shape:</span>
                        <div className="flex gap-1.5 bg-slate-100/80 p-1 rounded-xl border border-slate-200/50">
                          {(["rounded", "dots", "square"] as ModuleShape[]).map((shape) => (
                            <button
                              key={shape}
                              onClick={() => setModuleShape(shape)}
                              className={`px-3 py-1 rounded-lg text-xs capitalize transition-all duration-200 select-none active:scale-95 ${
                                moduleShape === shape
                                  ? "segmented-pill-active font-bold text-slate-900"
                                  : "text-slate-600 hover:text-slate-900"
                              }`}
                            >
                              {shape}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  /* App Screenshot Frame */
                  <div className="mt-4 flex flex-col items-center justify-center animate-in fade-in">
                    <div className="relative w-full max-w-[280px] rounded-[36px] overflow-hidden border-[6px] border-slate-900 shadow-2xl bg-slate-900">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full z-10" />
                      <img
                        src="/screenshots/01-home.png"
                        alt="QR Studio Android App Home Screen"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <span className="mt-3 text-xs text-slate-500 font-medium">
                      Native React Native & Expo App running at 60 FPS
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
