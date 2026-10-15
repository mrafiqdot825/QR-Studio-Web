import { ScanLine, Zap, History, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

export function ScannerSection() {
  const scannerFeatures = [
    {
      title: "Real-Time Optical Lens Reader",
      desc: "Instant barcode and 2D QR decoding powered by on-device ML. Reads codes from wide angles and difficult lighting.",
      icon: ScanLine,
      pastel: "bg-[var(--lavender)]",
    },
    {
      title: "Torch & Low-Light Flash Toggle",
      desc: "Built-in camera flashlight control lets you effortlessly scan restaurant bills and event entry passes in dim ambient lighting.",
      icon: Zap,
      pastel: "bg-[var(--butter)]",
    },
    {
      title: "Local Scan History & Re-Styling",
      desc: "Every scan is archived in your private device database. Re-open, re-edit with custom palettes, and re-export into vector formats in one tap.",
      icon: History,
      pastel: "bg-[var(--sage)]",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[var(--bg-canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--bg-surface)] rounded-[32px] border border-[var(--border-subtle)] shadow-[0_16px_36px_rgba(74,15,58,0.06)] overflow-hidden p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Visual Mockup */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[270px] rounded-[38px] overflow-hidden border-[6px] border-[var(--ink)] shadow-xl bg-[var(--ink)]">
                <img
                  src="/screenshots/02-studio.png"
                  alt="QRLab Scanner & Studio Interface"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column: Copy & Highlights */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--bg-canvas)] text-[var(--plum)] border border-[var(--border-subtle)]">
                Integrated Hardware Lens Reader
              </span>

              <h2 className="h2-editorial font-bold text-[var(--ink)]">
                Scan any code, <br />
                <span className="italic font-normal text-[var(--plum)]">in milliseconds.</span>
              </h2>

              <p className="text-base text-[var(--ink-muted)] leading-relaxed">
                QRLab isn't just a designer—it's an all-in-one optical workstation.
                Read physical codes, parse complex Wi-Fi credentials, dial phone numbers,
                or customize previously scanned payloads right inside the app.
              </p>

              <div className="space-y-4 pt-2">
                {scannerFeatures.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className={`p-3 rounded-2xl ${item.pastel} text-[var(--plum)] flex-shrink-0 mt-0.5 shadow-2xs`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-[var(--ink)]">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3">
                <Button
                  variant="secondary"
                  size="md"
                  href="#download"
                  icon={<ArrowRight className="w-4 h-4 text-[var(--plum)]" />}
                  iconPosition="right"
                >
                  Experience the scanner on your phone
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
