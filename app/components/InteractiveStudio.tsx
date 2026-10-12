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
  Sparkles,
  Sliders,
  Layers,
  Palette,
  Eye,
  Shield,
  Smartphone,
  ExternalLink,
} from "lucide-react";
import { THEME_PRESETS } from "../data/theme-presets";
import type { ThemePreset } from "../data/theme-presets";
import {
  generateQRSVGString,
  downloadSVG,
  downloadPNG,
} from "../utils/qr-generator";
import type {
  ModuleShape,
  EyeStyle,
  LogoPreset,
} from "../utils/qr-generator";
import { Button } from "./ui/Button";

type FormatTab = "url" | "wifi" | "vcard" | "email" | "phone" | "text";

export function InteractiveStudio() {
  const [activeFormat, setActiveFormat] = useState<FormatTab>("url");
  const [selectedTheme, setSelectedTheme] = useState<ThemePreset>(THEME_PRESETS[0]);
  const [moduleShape, setModuleShape] = useState<ModuleShape>("rounded");
  const [eyeStyle, setEyeStyle] = useState<EyeStyle>("rounded");
  const [logo, setLogo] = useState<LogoPreset>("qrstudio");
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
  const [vcardOrg, setVcardOrg] = useState("QR Studio");
  const [vcardTitle, setVcardTitle] = useState("Lead Engineer");
  const [vcardPhone, setVcardPhone] = useState("+1 555-0199");
  const [vcardEmail, setVcardEmail] = useState("mrafiqdot825@gmail.com");
  const [vcardUrl, setVcardUrl] = useState("https://mrafiq.vercel.app");

  const [emailTo, setEmailTo] = useState("contact@qrstudio.me");
  const [emailSubject, setEmailSubject] = useState("Partnership Inquiry");
  const [emailBody, setEmailBody] = useState("Hello! I loved creating QR codes with QR Studio.");

  const [phoneNumber, setPhoneNumber] = useState("+15550199825");

  const [textInput, setTextInput] = useState("Scan-Stopping Artistic QR Codes with 100% On-Device Privacy.");

  // Generate payload string
  const currentPayload = useMemo(() => {
    switch (activeFormat) {
      case "url":
        return urlInput.trim() || "https://qrstudio.me";
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
        return textInput || "QR Studio";
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
    downloadSVG(svgString, `qr-studio-${activeFormat}.svg`);
  };

  const handleDownloadPNG = () => {
    downloadPNG(svgString, `qr-studio-${activeFormat}.png`, 2048);
  };

  const formats = [
    { id: "url", label: "Website (URL)", icon: Globe },
    { id: "wifi", label: "Wi-Fi Network", icon: Wifi },
    { id: "vcard", label: "Digital vCard", icon: Contact },
    { id: "email", label: "Email Pre-fill", icon: Mail },
    { id: "phone", label: "Phone Call", icon: Phone },
    { id: "text", label: "Plain Text", icon: FileText },
  ] as const;

  return (
    <section id="studio" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold badge-pill">
            <Sparkles className="w-3.5 h-3.5 text-[#3E6FA6]" />
            <span>INTERACTIVE STUDIO PLAYGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E1B2A]">
            Try The Live Generator
          </h2>
          <p className="text-base sm:text-lg text-[#5A6A7D]">
            Experience the design engine powering the Android app. Select your format,
            tweak the geometry and palettes, and export infinite vector SVG right now.
          </p>
        </div>

        {/* Studio Workspace Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 border-b lg:border-b-0 lg:border-r border-slate-200/80">
            {/* 1. Format Tabs */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                1. Select Payload Format
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {formats.map((fmt) => {
                  const Icon = fmt.icon;
                  const isActive = activeFormat === fmt.id;
                  return (
                    <button
                      key={fmt.id}
                      onClick={() => setActiveFormat(fmt.id as FormatTab)}
                      className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 select-none active:scale-95 ${
                        isActive
                          ? "bg-[#3E6FA6] text-white shadow-md shadow-[#3E6FA6]/20 border border-white/20 btn-highlight"
                          : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-slate-300"
                      }`}
                    >
                      <Icon className={`w-4 h-4 transition-transform ${isActive ? "text-white scale-110" : "text-[#3E6FA6]"}`} />
                      <span className="truncate">{fmt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Format Input Forms */}
            <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200/70">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                2. Configure Payload Data
              </label>

              {activeFormat === "url" && (
                <div className="space-y-2">
                  <span className="text-xs font-medium text-slate-600">Destination Website URL</span>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#3E6FA6]"
                    />
                  </div>
                </div>
              )}

              {activeFormat === "wifi" && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="text-xs font-medium text-slate-600">Network Name (SSID)</span>
                      <input
                        type="text"
                        value={wifiSsid}
                        onChange={(e) => setWifiSsid(e.target.value)}
                        placeholder="MyHomeWifi"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-slate-600">Password / Key</span>
                      <input
                        type="text"
                        value={wifiPass}
                        onChange={(e) => setWifiPass(e.target.value)}
                        placeholder="SecretKey123"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600">Encryption:</span>
                      {(["WPA", "WEP", "nopass"] as const).map((enc) => (
                        <button
                          key={enc}
                          onClick={() => setWifiEnc(enc)}
                          className={`px-3 py-1 rounded-lg border font-semibold transition-all select-none active:scale-95 ${
                            wifiEnc === enc
                              ? "bg-[#3E6FA6] text-white border-[#3E6FA6] shadow-xs"
                              : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          {enc === "nopass" ? "Open" : enc}
                        </button>
                      ))}
                    </div>
                    <label className="flex items-center gap-1.5 cursor-pointer text-slate-700">
                      <input
                        type="checkbox"
                        checked={wifiHidden}
                        onChange={(e) => setWifiHidden(e.target.checked)}
                        className="rounded text-[#3E6FA6]"
                      />
                      <span>Hidden SSID</span>
                    </label>
                  </div>
                </div>
              )}

              {activeFormat === "vcard" && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={vcardFirst}
                      onChange={(e) => setVcardFirst(e.target.value)}
                      placeholder="First Name"
                      className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm"
                    />
                    <input
                      type="text"
                      value={vcardLast}
                      onChange={(e) => setVcardLast(e.target.value)}
                      placeholder="Last Name"
                      className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={vcardOrg}
                      onChange={(e) => setVcardOrg(e.target.value)}
                      placeholder="Company / Org"
                      className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm"
                    />
                    <input
                      type="text"
                      value={vcardTitle}
                      onChange={(e) => setVcardTitle(e.target.value)}
                      placeholder="Job Title"
                      className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="tel"
                      value={vcardPhone}
                      onChange={(e) => setVcardPhone(e.target.value)}
                      placeholder="Phone Number"
                      className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm"
                    />
                    <input
                      type="email"
                      value={vcardEmail}
                      onChange={(e) => setVcardEmail(e.target.value)}
                      placeholder="Email Address"
                      className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm"
                    />
                  </div>
                </div>
              )}

              {activeFormat === "email" && (
                <div className="space-y-3">
                  <input
                    type="email"
                    value={emailTo}
                    onChange={(e) => setEmailTo(e.target.value)}
                    placeholder="Recipient email address"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm"
                  />
                  <input
                    type="text"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    placeholder="Subject line"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm"
                  />
                  <textarea
                    rows={2}
                    value={emailBody}
                    onChange={(e) => setEmailBody(e.target.value)}
                    placeholder="Pre-filled email body..."
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm"
                  />
                </div>
              )}

              {activeFormat === "phone" && (
                <div className="space-y-2">
                  <span className="text-xs font-medium text-slate-600">Telephone Number</span>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+1 555-0199"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm"
                    />
                  </div>
                </div>
              )}

              {activeFormat === "text" && (
                <div className="space-y-2">
                  <span className="text-xs font-medium text-slate-600">Alphanumeric Text</span>
                  <textarea
                    rows={3}
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Enter any text or notes..."
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-sm"
                  />
                </div>
              )}
            </div>

            {/* 3. Theme Presets Swatches */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  3. Color Palette Preset
                </label>
                <span className="text-xs font-semibold text-[#3E6FA6]">
                  {selectedTheme.name}
                </span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {THEME_PRESETS.map((preset) => {
                  const isSelected = selectedTheme.id === preset.id && !customFg;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setSelectedTheme(preset);
                        setCustomFg("");
                      }}
                      className={`relative p-2 rounded-xl flex flex-col items-center gap-1.5 transition-all duration-200 select-none active:scale-90 ${
                        isSelected
                          ? "ring-2 ring-offset-2 ring-[#3E6FA6] bg-blue-50/70 scale-105 shadow-sm"
                          : "hover:bg-slate-50 opacity-85 hover:opacity-100"
                      }`}
                      title={preset.name}
                    >
                      <span
                        className="w-7 h-7 rounded-lg shadow-xs flex items-center justify-center border transition-transform hover:scale-105"
                        style={{
                          backgroundColor: preset.qrColor,
                          borderColor: "rgba(0,0,0,0.1)",
                        }}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                      </span>
                      <span className="text-[10px] font-medium text-slate-600 truncate max-w-[56px]">
                        {preset.name.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Geometry Styling (Shapes, Eyes, Badges) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {/* Module Shape */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Module Shape
                </label>
                <div className="grid grid-cols-3 gap-1 bg-slate-100/90 p-1 rounded-xl text-xs font-medium border border-slate-200/50">
                  {(["rounded", "dots", "square"] as ModuleShape[]).map((shape) => (
                    <button
                      key={shape}
                      onClick={() => setModuleShape(shape)}
                      className={`py-1.5 rounded-lg capitalize transition-all duration-200 select-none active:scale-95 ${
                        moduleShape === shape
                          ? "segmented-pill-active font-bold text-slate-900"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {shape}
                    </button>
                  ))}
                </div>
              </div>

              {/* Eye Style */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Corner Eye Style
                </label>
                <div className="grid grid-cols-3 gap-1 bg-slate-100/90 p-1 rounded-xl text-xs font-medium border border-slate-200/50">
                  {(["rounded", "circle", "square"] as EyeStyle[]).map((eye) => (
                    <button
                      key={eye}
                      onClick={() => setEyeStyle(eye)}
                      className={`py-1.5 rounded-lg capitalize transition-all duration-200 select-none active:scale-95 ${
                        eyeStyle === eye
                          ? "segmented-pill-active font-bold text-slate-900"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {eye}
                    </button>
                  ))}
                </div>
              </div>

              {/* Center Logo */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Center Emblem
                </label>
                <div className="grid grid-cols-4 gap-1 bg-slate-100/90 p-1 rounded-xl text-xs font-medium border border-slate-200/50">
                  {(["none", "qrstudio", "star", "shield"] as LogoPreset[]).map((badge) => (
                    <button
                      key={badge}
                      onClick={() => setLogo(badge)}
                      className={`py-1.5 rounded-lg capitalize transition-all duration-200 select-none active:scale-95 text-[11px] ${
                        logo === badge
                          ? "segmented-pill-active font-bold text-slate-900"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {badge === "qrstudio" ? "Studio" : badge}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Preview & Export Column (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Live Preview Output
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  100% Scannable (Level H)
                </span>
              </div>

              {/* Generated QR Canvas Card */}
              <div
                className="mt-6 p-6 sm:p-8 rounded-3xl flex flex-col items-center justify-center relative shadow-inner transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${selectedTheme.gradient[0]}, ${selectedTheme.gradient[1]}, ${selectedTheme.gradient[2]})`,
                }}
              >
                <div className="w-60 h-60 sm:w-68 sm:h-68 p-4 bg-white rounded-2xl shadow-xl shadow-slate-900/10 flex items-center justify-center transition-all hover:scale-[1.02]">
                  <div
                    className="w-full h-full"
                    dangerouslySetInnerHTML={{ __html: svgString }}
                  />
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs font-medium text-slate-700">
                    Theme: <strong className="text-slate-900">{selectedTheme.name}</strong>
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-medium text-slate-700">
                    Shape: <strong className="capitalize text-slate-900">{moduleShape}</strong>
                  </span>
                </div>
              </div>

              {/* Payload viewer snippet */}
              <div className="mt-5 p-3 rounded-xl bg-slate-100/90 border border-slate-200 flex items-center justify-between gap-2">
                <div className="truncate text-xs font-mono text-slate-600 max-w-[240px] sm:max-w-[280px]">
                  {currentPayload}
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#3E6FA6] hover:text-[#2A5280] px-2.5 py-1.5 rounded-lg bg-white shadow-xs border border-slate-200 flex-shrink-0 active:scale-95 transition-all select-none"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Export Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  glow
                  shimmer
                  onClick={handleDownloadSVG}
                  icon={<Download className="w-4 h-4 text-sky-400" />}
                >
                  Download SVG
                </Button>

                <Button
                  variant="brand"
                  size="lg"
                  glow
                  shimmer
                  onClick={handleDownloadPNG}
                  icon={<Download className="w-4 h-4 text-white" />}
                >
                  Download PNG
                </Button>
              </div>

              <p className="text-center text-[11px] text-slate-500">
                Vector SVG allows infinite loss-less scaling for signage, merch & print.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
