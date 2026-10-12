import { Download, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { Button } from "./ui/Button";

export function CtaBanner() {
  return (
    <section id="download" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0E1B2A] via-[#162C44] to-[#0E1B2A] text-white p-8 sm:p-14 md:p-16 overflow-hidden shadow-2xl border border-slate-800">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3E6FA6]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#635BFF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-sky-300 border border-white/15">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EXPERIENCE QR STUDIO TODAY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready to Create <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                  Scan-Stopping QR Codes?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Download QR Studio today. Fast, free, and completely private on your Android device.
                Zero subscriptions, zero tracking redirects, and infinite vector SVG exports.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  variant="secondary"
                  size="xl"
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  glow
                  shimmer
                  className="w-full sm:w-auto shadow-2xl hover:bg-white text-[#0E1B2A] btn-highlight-light"
                  icon={
                    <svg className="w-5 h-5 fill-current text-[#0E1B2A]" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.007 2.007 0 0 1-.61-1.464V3.278c0-.575.228-1.096.609-1.464zm11.602 11.602l2.454 2.455-12.784 7.377 10.33-9.832zm2.454-2.832l-2.454 2.454L4.881.756l12.784 7.828zm1.092 1.092l2.84 1.737c.799.489.799 1.287 0 1.776l-2.84 1.737-1.996-1.996 1.996-1.654z"/>
                    </svg>
                  }
                >
                  Download on Google Play
                </Button>

                <Button
                  variant="dark"
                  size="xl"
                  href="https://github.com/mrafiqdot825/QR-Studio/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto border-white/20 bg-white/10 hover:bg-white/15 text-white"
                  icon={<GithubIcon className="w-5 h-5" />}
                >
                  Download Direct APK
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Verified Safe & Clean
                </span>
                <span>•</span>
                <span>Requires Android 8.0+</span>
                <span>•</span>
                <span>Size: ~30MB</span>
              </div>
            </div>

            {/* Right Graphic Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl max-w-sm sm:max-w-md">
                <img
                  src="/assets/images/play-store-feature-graphic.png"
                  alt="QR Studio Google Play Store Feature Banner"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
