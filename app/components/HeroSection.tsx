import { useState, useMemo } from "react";
import { Sparkles, ArrowDown, ShieldCheck, CheckCircle2 } from "lucide-react";
import { THEME_PRESETS } from "../data/theme-presets";
import { generateQRSVGString } from "../utils/qr-generator";
import type { ModuleShape, EyeStyle, LogoPreset } from "../utils/qr-generator";
import { Button } from "./ui/Button";
import { BotanicalBranch, LeafSpray } from "./icons";

export function HeroSection() {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [moduleShape, setModuleShape] = useState<ModuleShape>("rounded");
  const [eyeStyle, setEyeStyle] = useState<EyeStyle>("rounded");
  const [logo, setLogo] = useState<LogoPreset>("qrlab");
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
    <section className="relative min-h-screen min-h-[100dvh] flex flex-col justify-between overflow-hidden">
      {/* Background Soft Organic Pastels & Botanical Spray */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        {/* Soft Warm Blobs */}
        <div className="absolute top-12 left-10 w-96 h-96 bg-[var(--peach)]/25 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-36 right-16 w-[440px] h-[440px] bg-[var(--sage)]/30 rounded-full blur-3xl opacity-70" />
        <div className="absolute -top-10 right-1/3 w-80 h-80 bg-[var(--butter)]/35 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-64 left-1/4 w-72 h-72 bg-[var(--lavender)]/30 rounded-full blur-3xl opacity-60" />

        {/* Botanical illustration accents */}
        <div className="hidden lg:block absolute top-28 right-8 opacity-40">
          <LeafSpray className="w-48 h-48" />
        </div>
        <div className="hidden lg:block absolute bottom-12 left-4 opacity-30 -scale-x-100">
          <BotanicalBranch className="w-40 h-40" />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-6 sm:pb-8 my-auto flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Signature Morrow-Style Headline */}
            <h1 className="h1-editorial font-bold text-[var(--ink)] tracking-tight">
              Make QR codes, <br />
              <span className="italic font-normal text-[var(--plum)]">
                beautifully.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[var(--ink-muted)] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Craft scan-stopping, on-brand QR codes with live interactive
              preview, custom eye shapes, curated editorial palettes, and
              infinite-resolution vector SVG exports. 100% private & on-device.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="xl"
                href="#download"
                className="w-full sm:w-auto"
                icon={
                  <svg
                    className="w-5 h-5 fill-current text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.007 2.007 0 0 1-.61-1.464V3.278c0-.575.228-1.096.609-1.464zm11.602 11.602l2.454 2.455-12.784 7.377 10.33-9.832zm2.454-2.832l-2.454 2.454L4.881.756l12.784 7.828zm1.092 1.092l2.84 1.737c.799.489.799 1.287 0 1.776l-2.84 1.737-1.996-1.996 1.996-1.654z" />
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
                icon={<ArrowDown className="w-4 h-4 text-[var(--plum)]" />}
                iconPosition="right"
              >
                Try Live Web Studio
              </Button>
            </div>

            {/* Trust points list in soft rounded pills */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-[var(--ink-muted)]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[var(--border-subtle)] shadow-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-[var(--leaf)]" />
                Zero Cloud Tracking
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[var(--border-subtle)] shadow-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-[var(--leaf)]" />
                Infinite SVG Vector
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[var(--border-subtle)] shadow-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-[var(--leaf)]" />
                100% Free & Offline
              </span>
            </div>
          </div>

          {/* Right Column: Live QR Preview Card over Soft Blob */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md relative">
              {/* Soft Organic Dynamic Blob Backdrop - harmonized with active theme */}
              <div
                className="absolute -inset-6 rounded-[56px] filter blur-2xl -z-10 transition-all duration-700 ease-out"
                style={{
                  background: `radial-gradient(ellipse at 65% 35%, ${currentTheme.gradient[2]} 0%, ${currentTheme.gradient[1]} 50%, ${currentTheme.gradient[0]} 100%)`,
                  opacity: 0.85,
                }}
              />
              <div
                className="absolute -inset-3 rounded-[44px] filter blur-xl -z-10 transition-all duration-700 ease-out"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.gradient[1]} 0%, ${currentTheme.gradient[2]} 100%)`,
                  boxShadow: `0 24px 60px ${currentTheme.glowColor}`,
                  opacity: 0.6,
                }}
              />

              {/* Editorial Preview Card - harmonized with warm body canvas */}
              <div
                className="relative rounded-[32px] bg-[var(--bg-surface)]/95 backdrop-blur-md p-6 sm:p-7 border border-[var(--border-subtle)] transition-all duration-500"
                style={{
                  boxShadow: `0 20px 48px -12px ${currentTheme.glowColor}, 0 12px 32px rgba(74, 15, 58, 0.06)`,
                }}
              >
                {/* Visual Header / Switcher */}
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full transition-colors duration-500"
                      style={{ backgroundColor: currentTheme.accentColor }}
                    />
                    <span
                      className="w-2.5 h-2.5 rounded-full transition-colors duration-500"
                      style={{ backgroundColor: currentTheme.gradient[2] }}
                    />
                    <span
                      className="w-2.5 h-2.5 rounded-full transition-colors duration-500"
                      style={{ backgroundColor: currentTheme.gradient[1] }}
                    />
                    <span className="text-xs font-semibold text-[var(--ink-muted)] ml-1">
                      {activeTab === "live"
                        ? "Live Scannable Preview"
                        : "Mobile Screen"}
                    </span>
                  </div>

                  <div className="flex items-center bg-white/70 backdrop-blur-xs p-1 rounded-full text-xs font-medium border border-[var(--border-subtle)]">
                    <button
                      onClick={() => setActiveTab("live")}
                      className={`px-3 py-1 rounded-full transition-all duration-200 select-none ${
                        activeTab === "live"
                          ? "bg-[var(--plum)] text-white font-semibold shadow-xs"
                          : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                      }`}
                    >
                      Interactive
                    </button>
                    <button
                      onClick={() => setActiveTab("app")}
                      className={`px-3 py-1 rounded-full transition-all duration-200 select-none ${
                        activeTab === "app"
                          ? "bg-[var(--plum)] text-white font-semibold shadow-xs"
                          : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                      }`}
                    >
                      App View
                    </button>
                  </div>
                </div>

                {activeTab === "live" ? (
                  <>
                    {/* Live Scannable QR Canvas Container */}
                    <div
                      className="mt-5 p-6 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 shadow-inner"
                      style={{
                        background: `linear-gradient(135deg, ${currentTheme.gradient[0]}, ${currentTheme.gradient[1]}, ${currentTheme.gradient[2]})`,
                      }}
                    >
                      {/* Floating QR Code Box (pure white background for 100% scannability) */}
                      <div className="w-56 h-56 sm:w-60 sm:h-60 p-3.5 bg-white rounded-2xl shadow-[0_8px_24px_rgba(74,15,58,0.08)] border border-[var(--border-subtle)] flex items-center justify-center transition-all duration-300 hover:scale-[1.02]">
                        <div
                          className="w-full h-full"
                          dangerouslySetInnerHTML={{ __html: heroSvgString }}
                        />
                      </div>

                      {/* Status indicator */}
                      <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[var(--ink)] shadow-xs border border-[var(--border-subtle)]">
                        <span
                          className="w-2 h-2 rounded-full animate-pulse transition-colors duration-500"
                          style={{ backgroundColor: currentTheme.accentColor }}
                        />
                        <span>Theme: {currentTheme.name}</span>
                      </div>
                    </div>

                    {/* Interactive Swatches Bar */}
                    <div className="mt-5 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[var(--ink)]">
                          Curated Palettes
                        </span>
                        <span className="text-[var(--ink-muted)]">
                          Select preset
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-1.5">
                        {THEME_PRESETS.slice(0, 6).map((preset, idx) => (
                          <button
                            key={preset.id}
                            onClick={() => setSelectedPresetIndex(idx)}
                            className={`group relative w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 flex items-center justify-center select-none active:scale-90 ${
                              selectedPresetIndex === idx
                                ? "ring-2 ring-offset-2 ring-[var(--plum)] scale-110 shadow-sm"
                                : "hover:scale-105 opacity-85 hover:opacity-100"
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
                      <div className="pt-2 flex items-center justify-between border-t border-[var(--border-subtle)] text-xs">
                        <span className="font-semibold text-[var(--ink)]">
                          Module Shape:
                        </span>
                        <div className="flex gap-1 bg-white/70 backdrop-blur-xs p-1 rounded-full border border-[var(--border-subtle)]">
                          {(["rounded", "dots", "square"] as ModuleShape[]).map(
                            (shape) => (
                              <button
                                key={shape}
                                onClick={() => setModuleShape(shape)}
                                className={`px-3 py-1 rounded-full text-xs capitalize transition-all duration-200 select-none active:scale-95 ${
                                  moduleShape === shape
                                    ? "bg-[var(--plum)] text-white font-semibold shadow-xs"
                                    : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                                }`}
                              >
                                {shape}
                              </button>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  /* App Screenshot Frame */
                  <div className="mt-4 flex flex-col items-center justify-center animate-in fade-in">
                    <div className="relative w-full max-w-[260px] rounded-[36px] overflow-hidden border-[6px] border-[var(--ink)] shadow-xl bg-[var(--ink)]">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-[var(--ink)] rounded-full z-10" />
                      <img
                        src="/screenshots/01-home.png"
                        alt="QRLab Android App Home Screen"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <span className="mt-3 text-xs text-[var(--ink-muted)] font-medium">
                      Native Android App • 60 FPS Tactile Design
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="hidden sm:flex justify-center pb-4 pt-1 text-[var(--ink-muted)]">
        <a
          href="#features"
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/70 hover:bg-white text-xs font-medium text-[var(--ink-muted)] hover:text-[var(--plum)] border border-[var(--border-subtle)] shadow-xs transition-all hover:scale-102"
          aria-label="Scroll to features"
        >
          <span>Explore features</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[var(--plum)]" />
        </a>
      </div>
    </section>
  );
}
