import { useState, useEffect } from "react";
import { QrCode, Search, Menu, X } from "lucide-react";
import { GithubIcon } from "./icons";

export function Navbar() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Streamlined 5 links matching the reference image layout (Overview, Features, Studio, Templates, FAQ)
  const navLinks = [
    { label: "Overview", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Studio", href: "#studio" },
    { label: "Templates", href: "#templates" },
    { label: "FAQ", href: "#faq" },
  ];

  // Full links for mobile dropdown
  const allMobileLinks = [
    { label: "Overview", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Studio", href: "#studio" },
    { label: "Customization", href: "#customization" },
    { label: "Templates", href: "#templates" },
    { label: "Vector Quality", href: "#vector-quality" },
    { label: "Privacy", href: "#privacy" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = [
        { id: "faq", name: "FAQ" },
        { id: "templates", name: "Templates" },
        { id: "studio", name: "Studio" },
        { id: "features", name: "Features" },
      ];

      const scrollPos = window.scrollY + 160;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(section.name);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveTab("Overview");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        {/* Neumorphic Capsule Shell */}
        <div className="neu-navbar-shell rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300">
          
          {/* 1. Left: Brand Icon Disc & Name (matching reference image) */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group select-none shrink-0">
            {/* Raised circular disc with QR Code and coral dot */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full neu-circle-btn flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
              {/* QR Code Graphic */}
              <QrCode className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-slate-800 transition-colors group-hover:text-[#3E6FA6]" />
              
              {/* Glowing Coral Dot Accent */}
              <span className="absolute top-1 right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-br from-[#FF6B4A] to-[#FF4B26] shadow-[0_0_6px_rgba(255,75,38,0.85)] ring-1.5 ring-[#EBEDF2] group-hover:scale-110 transition-transform" />
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-extrabold text-base sm:text-xl tracking-tight text-[#0E1B2A] font-heading">
                QR Studio
              </span>
              <span className="hidden xl:inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-semibold bg-[#DEE3E9] text-[#3E6FA6] border border-white/60">
                v2.0
              </span>
            </div>
          </a>

          {/* 2. Center: Recessed / Debossed Inset Trough (all 5 items fit 100% inside with zero overflow) */}
          <nav className="hidden lg:flex items-center justify-center neu-inset-track rounded-full p-1 gap-1 shrink-0 overflow-hidden">
            {navLinks.map((link) => {
              const isActive = activeTab === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveTab(link.label)}
                  className={`text-xs xl:text-sm whitespace-nowrap shrink-0 transition-all duration-200 select-none ${
                    isActive
                      ? "neu-pill-active rounded-full px-4 xl:px-5 py-1.5 font-bold text-[#0E1B2A]"
                      : "px-3 xl:px-3.5 py-1.5 rounded-full font-medium text-slate-500 hover:text-slate-800 hover:bg-white/30"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* 3. Right: Neumorphic Action Elements */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search circular button */}
            <a
              href="#studio"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full neu-circle-btn flex items-center justify-center text-slate-700 hover:text-slate-950"
              aria-label="Live Studio Search"
              title="Jump to Interactive Studio"
            >
              <Search className="w-4 h-4" />
            </a>

            {/* GitHub circular button */}
            <a
              href="https://github.com/mrafiqdot825/QR-Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full neu-circle-btn flex items-center justify-center text-slate-700 hover:text-slate-950"
              aria-label="GitHub Repository"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* "Get Started" Neumorphic Pill Button with Cyan Indicator Dot */}
            <a
              href="#download"
              className="neu-pill-btn rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-bold text-[#0E1B2A] select-none shrink-0"
            >
              {/* Electric Cyan Glowing Dot from reference */}
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] shrink-0 animate-pulse" />
              <span className="whitespace-nowrap">Get Started</span>
            </a>

            {/* Mobile Menu Hamburger (Visible on small screens) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full neu-circle-btn flex items-center justify-center text-slate-700 hover:text-slate-950 ml-1"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Neumorphic) */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 neu-navbar-shell rounded-3xl p-4 animate-in fade-in slide-in-from-top-3">
            <div className="neu-inset-track rounded-2xl p-2 space-y-1">
              {allMobileLinks.map((link) => {
                const isActive = activeTab === link.label;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setActiveTab(link.label);
                      setMobileMenuOpen(false);
                    }}
                    className={`block px-4 py-2.5 rounded-xl text-sm transition-all ${
                      isActive
                        ? "neu-pill-active font-bold text-[#0E1B2A]"
                        : "text-slate-600 font-medium hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-200/50 flex flex-col gap-2">
              <a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="neu-pill-btn rounded-xl py-3 flex items-center justify-center gap-2 font-bold text-sm text-[#0E1B2A]"
              >
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
                <span>Get App on Google Play</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
