import { Globe, Mail, ArrowUp } from "lucide-react";
import { GithubIcon } from "./icons";
import { Button } from "./ui/Button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--bg-surface)] rounded-t-[40px] sm:rounded-t-[48px] border-t border-[var(--border-subtle)] pt-16 pb-14 text-[var(--ink-muted)] mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--border-subtle)]">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-xs border border-[var(--border-subtle)]">
                <img
                  src="/assets/images/icon.png"
                  alt="QRLab Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-2xl font-bold text-[var(--ink)] tracking-tight">
                QRLab
              </span>
            </div>
            <p className="text-sm text-[var(--ink-muted)] leading-relaxed max-w-sm">
              Artistic 3D & Vector QR Maker with 100% on-device privacy. Built for
              freelancers, business owners, graphic designers, and event organizers.
            </p>
            <div className="text-xs text-[var(--ink-muted)]">
              Crafted by{" "}
              <a
                href="https://mrafiq.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--ink)] hover:text-[var(--plum)] transition-colors underline underline-offset-2"
              >
                Muhammad Rafiq
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#studio" className="hover:text-[var(--plum)] transition-colors">
                  Interactive Studio
                </a>
              </li>
              <li>
                <a href="#customization" className="hover:text-[var(--plum)] transition-colors">
                  Custom Shapes & Eyes
                </a>
              </li>
              <li>
                <a href="#templates" className="hover:text-[var(--plum)] transition-colors">
                  Designer Templates
                </a>
              </li>
              <li>
                <a href="#vector-quality" className="hover:text-[var(--plum)] transition-colors">
                  Vector SVG Export
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-[var(--plum)] transition-colors">
                  Download Android APK
                </a>
              </li>
            </ul>
          </div>

          {/* Governance Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
              Governance
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy-policy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--plum)] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[var(--plum)] transition-colors">
                  Offline Guarantee
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mrafiqdot825/QRLab/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--plum)] transition-colors"
                >
                  Open Source License
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[var(--plum)] transition-colors">
                  FAQ & Commercial Rights
                </a>
              </li>
            </ul>
          </div>

          {/* Developer Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
              Developer
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://mrafiq.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[var(--plum)] transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Portfolio Site</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mrafiqdot825/QRLab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[var(--plum)] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mrafiqdot825@gmail.com"
                  className="inline-flex items-center gap-1.5 hover:text-[var(--plum)] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>mrafiqdot825@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 QRLab. Engineered with React Native & Expo.</p>
          <div className="flex items-center gap-5">
            <span className="text-[var(--ink-muted)]">
              100% On-Device • Zero Telemetry • Infinite Vector
            </span>
            <Button
              variant="secondary"
              size="icon-sm"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="text-[var(--ink)] hover:text-[var(--plum)]"
              icon={<ArrowUp className="w-4 h-4" />}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
