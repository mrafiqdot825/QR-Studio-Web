import { useState, useMemo } from "react";
import {
  Globe,
  Wifi,
  Contact,
  Mail,
  Phone,
  FileText,
  Download,
  Copy,
  Check,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { THEME_PRESETS } from "../data/theme-presets";
import type { ThemePreset } from "../data/theme-presets";
import {
  generateQRSVGString,
  downloadSVG,
  downloadPNG,
} from "../utils/qr-generator";
import type { ModuleShape, EyeStyle, LogoPreset } from "../utils/qr-generator";
import { Button } from "./ui/Button";

type FormatTab = "url" | "wifi" | "vcard" | "email" | "phone" | "text";

export function InteractiveStudio() {
  const [activeFormat, setActiveFormat] = useState<FormatTab>("url");
  const [selectedTheme, setSelectedTheme] = useState<ThemePreset>(
    THEME_PRESETS[0],
  );
  const [moduleShape, setModuleShape] = useState<ModuleShape>("rounded");
  const [eyeStyle, setEyeStyle] = useState<EyeStyle>("rounded");
  const [logo, setLogo] = useState<LogoPreset>("qrlab");
  const [copied, setCopied] = useState(false);
  const [customFg, setCustomFg] = useState<string>("");

  // Form states
  const [urlInput, setUrlInput] = useState("https://mrafiq.vercel.app");

  const [wifiSsid, setWifiSsid] = useState("Studio_Guest_5G");
  const [wifiPass, setWifiPass] = useState("Artistic2026!");
  const [wifiEnc, setWifiEnc] = useState<"WPA" | "WEP" | "nopass">("WPA");
  const [wifiHidden, setWifiHidden] = useState(false);

  const [vcardFirst, setVcardFirst] = useState("Muhammad");
  const [vcardLast, setVcardLast] = useState("Rafiq");
  const [vcardOrg, setVcardOrg] = useState("QRLab");
  const [vcardTitle, setVcardTitle] = useState("Lead Engineer");
  const [vcardPhone, setVcardPhone] = useState("+1 555-0199");
  const [vcardEmail, setVcardEmail] = useState("mrafiqdot825@gmail.com");
  const [vcardUrl, setVcardUrl] = useState("https://mrafiq.vercel.app");

  const [emailTo, setEmailTo] = useState("contact@qrlab.me");
  const [emailSubject, setEmailSubject] = useState("Partnership Inquiry");
  const [emailBody, setEmailBody] = useState(
    "Hello! I loved creating QR codes with QRLab.",
  );

  const [phoneNumber, setPhoneNumber] = useState("+15550199825");

  const [textInput, setTextInput] = useState(
    "Scan-Stopping Artistic QR Codes with 100% On-Device Privacy.",
  );

  // Generate payload string
  const currentPayload = useMemo(() => {
    switch (activeFormat) {
      case "url":
        return urlInput.trim() || "https://qrlab.me";
      case "wifi":
        return `WIFI:S:${wifiSsid};T:${wifiEnc};P:${wifiPass};${wifiHidden ? "H:true;" : ""};`;
      case "vcard":
        return `BEGIN:VCARD\nVERSION:3.0\nN:${vcardLast};${vcardFirst};;;\nFN:${vcardFirst} ${vcardLast}\nORG:${vcardOrg}\nTITLE:${vcardTitle}\nTEL:${vcardPhone}\nEMAIL:${vcardEmail}\nURL:${vcardUrl}\nEND:VCARD`;
      case "email":
        return `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      case "phone":
        return `tel:${phoneNumber.replace(/\s+/g, "")}`;
      case "text":
      default:
        return textInput || "QRLab";
    }
  }, [
    activeFormat,
    urlInput,
    wifiSsid,
    wifiPass,
    wifiEnc,
    wifiHidden,
    vcardFirst,
    vcardLast,
    vcardOrg,
    vcardTitle,
    vcardPhone,
    vcardEmail,
    vcardUrl,
    emailTo,
    emailSubject,
    emailBody,
    phoneNumber,
    textInput,
  ]);

  const effectiveFgColor = customFg || selectedTheme.qrColor;

  const svgString = useMemo(() => {
    return generateQRSVGString({
      text: currentPayload,
      fgColor: effectiveFgColor,
      bgColor: "#FFFFFF",
      moduleShape,
      eyeStyle,
      logo,
    });
  }, [currentPayload, effectiveFgColor, moduleShape, eyeStyle, logo]);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPayload);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSVG = () => {
    downloadSVG(svgString, `qrlab-${activeFormat}.svg`);
  };

  const handleDownloadPNG = () => {
    downloadPNG(svgString, `qrlab-${activeFormat}.png`, 2048);
  };

  const formats = [
    {
      id: "url",
      label: "Website",
      icon: Globe,
      pastel: "bg-[var(--lavender)]",
    },
    { id: "wifi", label: "Wi-Fi", icon: Wifi, pastel: "bg-[var(--sage)]" },
    {
      id: "vcard",
      label: "vCard",
      icon: Contact,
      pastel: "bg-[var(--butter)]",
    },
    { id: "email", label: "Email", icon: Mail, pastel: "bg-[var(--peach)]" },
    {
      id: "phone",
      label: "Phone",
      icon: Phone,
      pastel: "bg-[var(--periwinkle)]",
    },
    {
      id: "text",
      label: "Text",
      icon: FileText,
      pastel: "bg-[var(--bg-canvas)]",
    },
  ];

  return (
    <section
      id="studio"
      className="py-20 md:py-28 bg-[var(--bg-surface)] relative scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[var(--ink-muted)] uppercase">
            Live Interactive Studio
          </p>
          <h2 className="h2-editorial font-bold text-[var(--ink)]">
            Design in real-time, <br />
            <span className="italic font-normal text-[var(--plum)]">
              tailored to you.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--ink-muted)] max-w-xl mx-auto leading-relaxed">
            Customize eye geometries, module curves, curated editorial palettes,
            and download vector SVG instantly.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Options Left, Sticky Preview Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: Controls & Input Panels */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            {/* 1. Format Chip Selector Group */}
            <div className="bg-[var(--bg-surface)] rounded-none p-5 sm:p-6 border border-[var(--border-subtle)] shadow-[0_8px_24px_rgba(74,15,58,0.04)]">
              <span className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider block mb-3">
                1. Select Payload Type
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {formats.map((fmt) => {
                  const Icon = fmt.icon;
                  const isActive = activeFormat === fmt.id;
                  return (
                    <button
                      key={fmt.id}
                      onClick={() => setActiveFormat(fmt.id as FormatTab)}
                      className={`flex flex-col items-center justify-center py-3 px-2 rounded-none transition-all duration-200 select-none ${
                        isActive
                          ? "bg-[var(--plum)] text-white shadow-xs font-semibold scale-102"
                          : "bg-[var(--bg-canvas)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-white"
                      }`}
                    >
                      <Icon className="w-5 h-5 mb-1" />
                      <span className="text-xs truncate w-full text-center">
                        {fmt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Payload Form Fields Card */}
            <div className="bg-[var(--bg-surface)] rounded-[28px] p-6 sm:p-7 border border-[var(--border-subtle)] shadow-[0_8px_24px_rgba(74,15,58,0.04)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider">
                  2. Enter Payload Details
                </span>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--bg-canvas)] text-[var(--plum)]">
                  100% Offline
                </span>
              </div>

              {/* URL Input */}
              {activeFormat === "url" && (
                <div className="space-y-3">
                  <label
                    htmlFor="url-input"
                    className="block text-sm font-semibold text-[var(--ink)]"
                  >
                    Target Destination URL
                  </label>
                  <input
                    id="url-input"
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://example.com"
                    className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-[var(--ink)] placeholder:text-[var(--ink-muted)]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:bg-white transition-all"
                  />
                  <p className="text-xs text-[var(--ink-muted)]">
                    Direct permanent URL. Zero intermediate redirects, zero
                    subscription expiration.
                  </p>
                </div>
              )}

              {/* Wi-Fi Input */}
              {activeFormat === "wifi" && (
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="wifi-ssid"
                      className="block text-sm font-semibold text-[var(--ink)] mb-1"
                    >
                      Network Name (SSID)
                    </label>
                    <input
                      id="wifi-ssid"
                      type="text"
                      value={wifiSsid}
                      onChange={(e) => setWifiSsid(e.target.value)}
                      placeholder="My_Guest_WiFi"
                      className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-[var(--ink)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="wifi-pass"
                      className="block text-sm font-semibold text-[var(--ink)] mb-1"
                    >
                      Network Password
                    </label>
                    <input
                      id="wifi-pass"
                      type="text"
                      value={wifiPass}
                      onChange={(e) => setWifiPass(e.target.value)}
                      placeholder="Enter Wi-Fi password"
                      className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-[var(--ink)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-1 text-xs">
                    <span className="font-semibold text-[var(--ink)]">
                      Security:
                    </span>
                    {(["WPA", "WEP", "nopass"] as const).map((enc) => (
                      <button
                        key={enc}
                        onClick={() => setWifiEnc(enc)}
                        className={`px-3 py-1.5 rounded-none transition-all ${
                          wifiEnc === enc
                            ? "bg-[var(--plum)] text-white font-semibold"
                            : "bg-[var(--bg-surface)] text-[var(--ink-muted)] hover:text-[var(--ink)]"
                        }`}
                      >
                        {enc === "nopass" ? "Open" : enc}
                      </button>
                    ))}

                    <label className="flex items-center gap-2 cursor-pointer ml-auto text-[var(--ink-muted)]">
                      <input
                        type="checkbox"
                        checked={wifiHidden}
                        onChange={(e) => setWifiHidden(e.target.checked)}
                        className="rounded accent-[var(--plum)]"
                      />
                      <span>Hidden SSID</span>
                    </label>
                  </div>
                </div>
              )}

              {/* vCard Input */}
              {activeFormat === "vcard" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="vcard-first"
                      className="block text-xs font-semibold text-[var(--ink)] mb-1"
                    >
                      First Name
                    </label>
                    <input
                      id="vcard-first"
                      type="text"
                      value={vcardFirst}
                      onChange={(e) => setVcardFirst(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vcard-last"
                      className="block text-xs font-semibold text-[var(--ink)] mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      id="vcard-last"
                      type="text"
                      value={vcardLast}
                      onChange={(e) => setVcardLast(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vcard-org"
                      className="block text-xs font-semibold text-[var(--ink)] mb-1"
                    >
                      Company / Organization
                    </label>
                    <input
                      id="vcard-org"
                      type="text"
                      value={vcardOrg}
                      onChange={(e) => setVcardOrg(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vcard-title"
                      className="block text-xs font-semibold text-[var(--ink)] mb-1"
                    >
                      Job Title
                    </label>
                    <input
                      id="vcard-title"
                      type="text"
                      value={vcardTitle}
                      onChange={(e) => setVcardTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vcard-phone"
                      className="block text-xs font-semibold text-[var(--ink)] mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="vcard-phone"
                      type="tel"
                      value={vcardPhone}
                      onChange={(e) => setVcardPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vcard-email"
                      className="block text-xs font-semibold text-[var(--ink)] mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      id="vcard-email"
                      type="email"
                      value={vcardEmail}
                      onChange={(e) => setVcardEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:bg-white"
                    />
                  </div>
                </div>
              )}

              {/* Email Input */}
              {activeFormat === "email" && (
                <div className="space-y-3">
                  <div>
                    <label
                      htmlFor="email-to"
                      className="block text-xs font-semibold text-[var(--ink)] mb-1"
                    >
                      Recipient Email
                    </label>
                    <input
                      id="email-to"
                      type="email"
                      value={emailTo}
                      onChange={(e) => setEmailTo(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email-subject"
                      className="block text-xs font-semibold text-[var(--ink)] mb-1"
                    >
                      Pre-filled Subject
                    </label>
                    <input
                      id="email-subject"
                      type="text"
                      value={emailSubject}
                      onChange={(e) => setEmailSubject(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email-body"
                      className="block text-xs font-semibold text-[var(--ink)] mb-1"
                    >
                      Pre-filled Body Message
                    </label>
                    <textarea
                      id="email-body"
                      rows={2}
                      value={emailBody}
                      onChange={(e) => setEmailBody(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:bg-white"
                    />
                  </div>
                </div>
              )}

              {/* Phone Input */}
              {activeFormat === "phone" && (
                <div className="space-y-3">
                  <label
                    htmlFor="phone-input"
                    className="block text-sm font-semibold text-[var(--ink)]"
                  >
                    Dialer Phone Number
                  </label>
                  <input
                    id="phone-input"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+1 555-0199"
                    className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-[var(--ink)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:bg-white"
                  />
                  <p className="text-xs text-[var(--ink-muted)]">
                    Opening the QR code triggers the native phone dialer with
                    this number.
                  </p>
                </div>
              )}

              {/* Plain Text Input */}
              {activeFormat === "text" && (
                <div className="space-y-3">
                  <label
                    htmlFor="plain-text-input"
                    className="block text-sm font-semibold text-[var(--ink)]"
                  >
                    Raw Text or Voucher String
                  </label>
                  <textarea
                    id="plain-text-input"
                    rows={3}
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Enter plain text, promo coupon, or offline token..."
                    className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-[var(--ink)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--plum)] focus:bg-white"
                  />
                </div>
              )}
            </div>

            {/* 3. Customization Controls Card */}
            <div className="bg-[var(--bg-surface)] rounded-none p-6 sm:p-7 border border-[var(--border-subtle)] shadow-[0_8px_24px_rgba(74,15,58,0.04)] space-y-6">
              <span className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider block">
                3. Customize Shapes & Curated Palettes
              </span>

              {/* Module Shape Picker */}
              <div>
                <label className="block text-xs font-semibold text-[var(--ink)] mb-2">
                  Module Shape Geometry
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["rounded", "dots", "square"] as ModuleShape[]).map(
                    (shape) => (
                      <button
                        key={shape}
                        onClick={() => setModuleShape(shape)}
                        className={`py-2 px-3 rounded-none text-xs capitalize transition-all select-none ${
                          moduleShape === shape
                            ? "bg-[var(--plum)] text-white font-semibold shadow-xs"
                            : "bg-white/70 border border-[var(--border-subtle)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-white"
                        }`}
                      >
                        {shape}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* Eye Style Picker */}
              <div>
                <label className="block text-xs font-semibold text-[var(--ink)] mb-2">
                  Eye / Finder Pattern Corners
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["rounded", "circle", "square"] as EyeStyle[]).map(
                    (eye) => (
                      <button
                        key={eye}
                        onClick={() => setEyeStyle(eye)}
                        className={`py-2 px-3 rounded-none text-xs capitalize transition-all select-none ${
                          eyeStyle === eye
                            ? "bg-[var(--plum)] text-white font-semibold shadow-xs"
                            : "bg-white/70 border border-[var(--border-subtle)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-white"
                        }`}
                      >
                        {eye}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* Logo / Badge Preset */}
              <div>
                <label className="block text-xs font-semibold text-[var(--ink)] mb-2">
                  Center Logo Badge (Level-H Protected)
                </label>
                <div className="grid grid-cols-5 gap-1.5">
                  {(
                    ["none", "qrlab", "star", "heart", "shield"] as LogoPreset[]
                  ).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLogo(l)}
                      className={`py-2 px-1 text-[11px] rounded-none capitalize transition-all select-none ${
                        logo === l
                          ? "bg-[var(--plum)] text-white font-semibold shadow-xs"
                          : "bg-white/70 border border-[var(--border-subtle)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-white"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Curated Editorial Palettes */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-[var(--ink)]">
                    Curated Scannable Editorial Palettes
                  </label>
                  <span className="text-[11px] text-[var(--ink-muted)]">
                    {selectedTheme.name}
                  </span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {THEME_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setSelectedTheme(preset);
                        setCustomFg("");
                      }}
                      className={`group relative h-10 rounded-2xl transition-all flex items-center justify-center select-none ${
                        selectedTheme.id === preset.id && !customFg
                          ? "ring-2 ring-offset-2 ring-[var(--plum)] scale-105 shadow-xs"
                          : "hover:scale-102 opacity-85 hover:opacity-100"
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${preset.gradient[0]}, ${preset.gradient[2]})`,
                        border: `1.5px solid ${preset.qrColor}`,
                      }}
                      title={preset.name}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full shadow-inner"
                        style={{ backgroundColor: preset.qrColor }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Live Scannable Preview & Download Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 order-1 lg:order-2">
            <div className="bg-[var(--bg-surface)] rounded-none p-6 sm:p-8 border border-[var(--border-subtle)] shadow-[0_16px_36px_rgba(74,15,58,0.08)] space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[var(--ink)]">
                    Live QR Preview
                  </h3>
                  <p className="text-xs text-[var(--ink-muted)]">
                    Updates instantly as you type
                  </p>
                </div>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-medium bg-white/70 hover:bg-white text-[var(--ink)] transition-colors border border-[var(--border-subtle)] shadow-2xs"
                  title="Copy encoded payload"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--leaf)]" />
                      <span className="text-[var(--leaf)] font-semibold">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Payload</span>
                    </>
                  )}
                </button>
              </div>

              {/* Scannable QR Container (Pure White Canvas with Quiet Zone) */}
              <div
                className="p-6 sm:p-8 rounded-none flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 shadow-inner"
                style={{
                  background: `linear-gradient(135deg, ${selectedTheme.gradient[0]}, ${selectedTheme.gradient[1]}, ${selectedTheme.gradient[2]})`,
                }}
              >
                <div className="w-60 h-60 sm:w-64 sm:h-64 p-4 bg-white rounded-none shadow-[0_8px_24px_rgba(74,15,58,0.09)] border border-[var(--border-subtle)] flex items-center justify-center transition-transform hover:scale-[1.01]">
                  <div
                    className="w-full h-full"
                    dangerouslySetInnerHTML={{ __html: svgString }}
                  />
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[var(--ink)] bg-white/90 backdrop-blur-sm px-3.5 py-1 rounded-full border border-[var(--border-subtle)] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--leaf)]" />
                  <span>High Contrast • 100% Scannable</span>
                </div>
              </div>

              {/* Download Action Buttons */}
              <div className="space-y-3 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleDownloadSVG}
                  icon={<Download className="w-4 h-4" />}
                >
                  Download Infinite Vector (SVG)
                </Button>

                <Button
                  variant="secondary"
                  size="md"
                  fullWidth
                  onClick={handleDownloadPNG}
                  icon={<Download className="w-4 h-4 text-[var(--plum)]" />}
                >
                  Download High-Res 2048px (PNG)
                </Button>
              </div>

              {/* Guarantee badges */}
              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--ink-muted)]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--leaf)]" />
                  Commercial License
                </span>
                <span>•</span>
                <span>Permanent Link</span>
                <span>•</span>
                <span>No Paywalls</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
