import { ShieldCheck } from "lucide-react";
import { LeafSpray, BotanicalBranch } from "./icons";
import { Button } from "./ui/Button";

export function CtaBanner() {
  return (
    <section
      id="download"
      className="py-20 relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wide Pastel Editorial Banner Card */}
        <div className="relative rounded-none bg-gradient-to-br from-[var(--bg-surface)] via-[var(--peach-light)] to-[var(--butter-light)] p-8 sm:p-14 md:p-16 overflow-hidden shadow-[0_20px_48px_rgba(74,15,58,0.08)] border border-[var(--border-subtle)]">
          {/* Soft background pastel blobs and botanical flourishes */}
          <div className="absolute top-0 right-10 w-80 h-80 bg-[var(--peach)]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[var(--lavender)]/35 rounded-full blur-3xl pointer-events-none" />
          <div className="hidden lg:block absolute -top-8 -right-8 opacity-25 pointer-events-none">
            <LeafSpray className="w-64 h-64" />
          </div>
          <div className="hidden lg:block absolute -bottom-10 right-1/3 opacity-20 pointer-events-none -scale-x-100">
            <BotanicalBranch className="w-48 h-48" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Signature Roman + Italic Headline */}
              <h2 className="h2-editorial font-bold text-[var(--ink)] leading-tight">
                Ready to create, <br />
                <span className="italic font-normal text-[var(--plum)]">
                  beautiful QR codes?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[var(--ink-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Download QRLab today for your Android device. Fast, free, and
                completely offline. Zero subscriptions, zero tracking redirects,
                and infinite vector SVG exports.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  variant="primary"
                  size="xl"
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto shadow-xl"
                  icon={
                    <svg
                      className="w-5 h-5 fill-current text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.007 2.007 0 0 1-.61-1.464V3.278c0-.575.228-1.096.609-1.464zm11.602 11.602l2.454 2.455-12.784 7.377 10.33-9.832zm2.454-2.832l-2.454 2.454L4.881.756l12.784 7.828zm1.092 1.092l2.84 1.737c.799.489.799 1.287 0 1.776l-2.84 1.737-1.996-1.996 1.996-1.654z" />
                    </svg>
                  }
                >
                  Download From Play Store
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-[var(--ink-muted)]">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[var(--leaf)]" />
                  Verified Safe & Clean
                </span>
                <span>•</span>
                <span>Requires Android 8.0+</span>
                <span>•</span>
                <span>Free & Open Source</span>
              </div>
            </div>

            {/* Right Graphic Preview - Google Play Feature Graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group max-w-sm sm:max-w-md w-full">
                <img
                  src="/assets/images/play-store-feature-graphic.png"
                  alt="QRLab Google Play Store Feature Banner"
                  className="w-full h-auto object-contain block shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
