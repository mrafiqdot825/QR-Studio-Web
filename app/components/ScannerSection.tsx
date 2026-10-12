import { ScanLine, Zap, History, Smartphone, Check, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

export function ScannerSection() {
  const scannerFeatures = [
    {
      title: "Real-Time Optical Lens Reader",
      desc: "Instant barcode and 2D QR decoding powered by on-device camera ML. Detects codes from wide angles and difficult lighting.",
      icon: ScanLine,
    },
    {
      title: "Torch & Low-Light Flash Toggle",
      desc: "Built-in camera flashlight control lets you effortlessly scan restaurant bills and event entry passes in dim ambient lighting.",
      icon: Zap,
    },
    {
      title: "Local Scan History & Re-Styling",
      desc: "Every scan is archived in your private device database. Re-open, re-edit with custom palettes, and re-export into vector formats in one tap.",
      icon: History,
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#F4F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Visual Mockup */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[280px] rounded-[36px] overflow-hidden border-[6px] border-slate-900 shadow-2xl bg-slate-900">
                <img
                  src="/screenshots/02-studio.png"
                  alt="QR Studio Scanner & Studio Interface"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column: Copy & Highlights */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold badge-pill">
                <ScanLine className="w-3.5 h-3.5 text-[#3E6FA6]" />
                <span>INTEGRATED HARDWARE LENS READER</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E1B2A]">
                Scan Any QR Code in Milliseconds
              </h2>

              <p className="text-base text-[#5A6A7D] leading-relaxed">
                QR Studio isn't just a designer—it's an all-in-one optical workstation.
                Read physical codes, parse complex Wi-Fi credentials, dial phone numbers,
                or customize previously scanned payloads right inside the app.
              </p>

              <div className="space-y-4 pt-2">
                {scannerFeatures.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-blue-50 text-[#3E6FA6] border border-blue-100 flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#5A6A7D] leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4">
                <Button
                  variant="secondary"
                  size="md"
                  href="#download"
                  className="text-[#3E6FA6] hover:text-[#2A5280] shadow-xs hover:shadow-md"
                  icon={<ArrowRight className="w-4 h-4" />}
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

