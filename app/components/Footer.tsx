import { Globe, Mail, Heart, ArrowUp } from "lucide-react";
import { GithubIcon } from "./icons";
import { Button } from "./ui/Button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200/90 pt-16 pb-12 text-[#5A6A7D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/assets/images/icon.png"
                  alt="QR Studio Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-extrabold text-[#0E1B2A] tracking-tight">
                QR Studio
              </span>
            </div>
            <p className="text-sm text-[#5A6A7D] leading-relaxed max-w-sm">
              Artistic 3D & Vector QR Maker with 100% on-device privacy. Built for
              freelancers, business owners, graphic designers, and event organizers.
            </p>
            <div className="text-xs text-slate-500">
              Created with passion by{" "}
              <a
                href="https://mrafiq.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0E1B2A] hover:text-[#3E6FA6] transition-colors"
              >
                Muhammad Rafiq
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#0E1B2A] uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#studio" className="hover:text-[#0E1B2A] transition-colors">
                  Interactive Studio
                </a>
              </li>
              <li>
                <a href="#customization" className="hover:text-[#0E1B2A] transition-colors">
                  Custom Shapes & Eyes
                </a>
              </li>
              <li>
                <a href="#templates" className="hover:text-[#0E1B2A] transition-colors">
                  Designer Templates
                </a>
              </li>
              <li>
                <a href="#vector-quality" className="hover:text-[#0E1B2A] transition-colors">
                  Vector SVG Export
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-[#0E1B2A] transition-colors">
                  Download Android APK
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy & Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#0E1B2A] uppercase tracking-wider">
              Governance
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy-policy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0E1B2A] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#0E1B2A] transition-colors">
                  Offline Guarantee
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mrafiqdot825/QR-Studio/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0E1B2A] transition-colors"
                >
                  Open Source License
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#0E1B2A] transition-colors">
                  FAQ & Commercial Rights
                </a>
              </li>
            </ul>
          </div>

          {/* Developer & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#0E1B2A] uppercase tracking-wider">
              Developer
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://mrafiq.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#0E1B2A] transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Portfolio Site</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mrafiqdot825/QR-Studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#0E1B2A] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mrafiqdot825@gmail.com"
                  className="inline-flex items-center gap-1.5 hover:text-[#0E1B2A] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>mrafiqdot825@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 QR Studio. Engineered with React Native & Expo.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">
              100% On-Device • Zero Telemetry • Infinite Vector
            </span>
            <Button
              variant="secondary"
              size="icon-sm"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="border-slate-200/80 shadow-2xs text-slate-700 hover:text-slate-900"
              icon={<ArrowUp className="w-4 h-4" />}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
