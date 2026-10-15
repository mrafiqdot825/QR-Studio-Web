import { useState, useEffect } from "react";
import { Menu, X, Home, Compass, Layers, Smartphone } from "lucide-react";

export function Navbar() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Studio", href: "#studio" },
    { label: "Templates", href: "#templates" },
    { label: "FAQ", href: "#faq" },
  ];

  const allMobileLinks = [
    { label: "Overview", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Live Studio", href: "#studio" },
    { label: "Customization", href: "#customization" },
    { label: "Templates", href: "#templates" },
    { label: "Print & Vector", href: "#vector-quality" },
    { label: "Privacy", href: "#privacy" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    label: string,
  ) => {
    e.preventDefault();
    setActiveTab(label);
    if (mobileMenuOpen) setMobileMenuOpen(false);

    if (href === "#" || href === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        window.history.pushState(null, "", window.location.pathname);
      }
      return;
    }

    const targetId = href.replace(/^#/, "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Bottom-to-top evaluation matching the DOM order in home.tsx
      const sections = [
        { id: "download", name: "Download" },
        { id: "faq", name: "FAQ" },
        { id: "templates", name: "Templates" },
        { id: "studio", name: "Studio" },
        { id: "customization", name: "Features" },
        { id: "features", name: "Features" },
      ];

      const scrollPos = window.scrollY + 180;
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none">
        <div className="max-w-6xl mx-auto pointer-events-auto">
          {/* Morrow Translucent Editorial Floating Capsule */}
          <div className="editorial-glass-nav rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300">
            {/* 1. Left: Serif Wordmark & Warm Brand Pill */}
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "#", "Overview")}
              className="flex items-center gap-2.5 sm:gap-3 group select-none shrink-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[var(--plum)] flex items-center justify-center p-1.5 shadow-xs border border-[var(--plum-hover)] shrink-0 transition-transform group-hover:scale-105">
                <img
                  src="/assets/images/navbar-logo.png"
                  alt="QRLab Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[var(--ink)]">
                  QRLab
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--plum-light)] text-[var(--plum)]">
                  v3.0
                </span>
              </div>
            </a>

            {/* 2. Center: Rounded Floating Nav Links */}
            <nav className="hidden lg:flex items-center justify-center bg-white/70 border border-[var(--border-subtle)] rounded-full p-1 gap-1 shrink-0 shadow-xs">
              {navLinks.map((link) => {
                const isActive = activeTab === link.label;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.label)}
                    className={`text-xs xl:text-sm whitespace-nowrap shrink-0 transition-all duration-200 select-none rounded-full px-4 xl:px-5 py-1.5 font-medium ${
                      isActive
                        ? "bg-[var(--plum)] text-white shadow-xs font-semibold"
                        : "text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-surface)]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* 3. Right: Action Button (Download App) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Primary Download App Plum Pill Button */}
              <a
                href="#download"
                onClick={(e) => handleNavClick(e, "#download", "Download")}
                className="rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center gap-2 text-xs sm:text-sm font-semibold bg-[var(--plum)] hover:bg-[var(--plum-hover)] text-white shadow-[0_4px_16px_rgba(74,15,58,0.2)] transition-all duration-200 active:scale-95"
              >
                <Smartphone className="w-4 h-4 text-[var(--butter)]" />
                <span className="whitespace-nowrap">Download App</span>
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xs flex items-center justify-center text-[var(--ink)] hover:bg-[var(--bg-canvas)] ml-1 transition-all"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Sheet Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 bg-[var(--bg-surface)]/95 backdrop-blur-xl rounded-[28px] p-5 border border-[var(--border-subtle)] shadow-[0_16px_36px_rgba(74,15,58,0.12)] animate-in fade-in slide-in-from-top-3">
              <div className="space-y-1">
                {allMobileLinks.map((link) => {
                  const isActive = activeTab === link.label;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, link.label)}
                      className={`block px-4 py-2.5 rounded-2xl text-sm transition-all ${
                        isActive
                          ? "bg-[var(--plum)] text-white font-semibold shadow-xs"
                          : "text-[var(--ink-muted)] font-medium hover:text-[var(--ink)] hover:bg-[var(--bg-surface)]"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-2">
                <a
                  href="#download"
                  onClick={(e) => handleNavClick(e, "#download", "Download")}
                  className="rounded-full py-3 flex items-center justify-center gap-2 font-semibold text-sm bg-[var(--plum)] text-white shadow-md active:scale-98 transition-all"
                >
                  <Smartphone className="w-4 h-4 text-[var(--butter)]" />
                  <span>Download for Android</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Floating Bottom Tab Bar on Mobile */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-24px)] max-w-sm bg-white/90 backdrop-blur-xl rounded-full px-3 py-2 border border-[var(--border-subtle)] shadow-[0_10px_30px_rgba(74,15,58,0.12)] flex items-center justify-around"
      >
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#", "Overview")}
          className={`flex flex-col items-center justify-center transition-all ${
            activeTab === "Overview"
              ? "w-14 h-12 rounded-2xl bg-[var(--plum)] text-white shadow-xs"
              : "w-12 h-12 text-[var(--ink-muted)] hover:text-[var(--ink)]"
          }`}
          aria-label="Home"
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-0.5">Home</span>
        </a>

        <a
          href="#features"
          onClick={(e) => handleNavClick(e, "#features", "Features")}
          className={`flex flex-col items-center justify-center transition-all ${
            activeTab === "Features"
              ? "w-14 h-12 rounded-2xl bg-[var(--plum)] text-white shadow-xs"
              : "w-12 h-12 text-[var(--ink-muted)] hover:text-[var(--ink)]"
          }`}
          aria-label="Features"
        >
          <Layers className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-0.5">Features</span>
        </a>

        <a
          href="#studio"
          onClick={(e) => handleNavClick(e, "#studio", "Studio")}
          className={`flex flex-col items-center justify-center transition-all ${
            activeTab === "Studio"
              ? "w-14 h-12 rounded-2xl bg-[var(--plum)] text-white shadow-xs"
              : "w-12 h-12 text-[var(--ink-muted)] hover:text-[var(--ink)]"
          }`}
          aria-label="Studio"
        >
          <Compass className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-0.5">Studio</span>
        </a>

        <a
          href="#templates"
          onClick={(e) => handleNavClick(e, "#templates", "Templates")}
          className={`flex flex-col items-center justify-center transition-all ${
            activeTab === "Templates"
              ? "w-14 h-12 rounded-2xl bg-[var(--plum)] text-white shadow-xs"
              : "w-12 h-12 text-[var(--ink-muted)] hover:text-[var(--ink)]"
          }`}
          aria-label="Templates"
        >
          <Layers className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-0.5">Templates</span>
        </a>

        <a
          href="#download"
          onClick={(e) => handleNavClick(e, "#download", "Download")}
          className={`flex flex-col items-center justify-center transition-all ${
            activeTab === "Download"
              ? "w-14 h-12 rounded-2xl bg-[var(--plum)] text-white shadow-xs"
              : "w-12 h-12 text-[var(--ink-muted)] hover:text-[var(--ink)]"
          }`}
          aria-label="Get App"
        >
          <Smartphone className="w-4 h-4" />
          <span className="text-[10px] font-medium mt-0.5">App</span>
        </a>
      </nav>
    </>
  );
}
