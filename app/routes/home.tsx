import type { Route } from "./+types/home";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { MetricsStrip } from "../components/MetricsStrip";
import { InteractiveStudio } from "../components/InteractiveStudio";
import { CustomizationShowcase } from "../components/CustomizationShowcase";
import { DataFormatsGrid } from "../components/DataFormatsGrid";
import { TemplatesGallery } from "../components/TemplatesGallery";
import { VectorExportSection } from "../components/VectorExportSection";
import { PrivacySection } from "../components/PrivacySection";
import { ScannerSection } from "../components/ScannerSection";
import { FaqSection } from "../components/FaqSection";
import { CtaBanner } from "../components/CtaBanner";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QR Studio — Artistic 3D & Vector QR Code Maker" },
    { name: "title", content: "QR Studio — Artistic 3D & Vector QR Code Maker" },
    {
      name: "description",
      content:
        "Craft scan-stopping, custom branded QR codes with live interactive preview, custom shapes, luxury palettes, and infinite vector SVG export. 100% private & offline.",
    },
    {
      name: "keywords",
      content:
        "QR code maker, custom QR code generator, vector QR SVG, branded QR codes, Wi-Fi QR, vCard QR, offline QR creator, QR Studio",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://mrafiq.vercel.app/qr-studio" },
    {
      property: "og:title",
      content: "QR Studio — Artistic 3D & Vector QR Code Maker",
    },
    {
      property: "og:description",
      content:
        "Design scan-stopping QR codes with custom eye shapes, colors, logo badges, and crystal-clear vector exports. Free & 100% on-device privacy.",
    },
    {
      property: "og:image",
      content: "https://mrafiq.vercel.app/assets/images/play-store-feature-graphic.png",
    },
    { property: "twitter:card", content: "summary_large_image" },
    {
      property: "twitter:title",
      content: "QR Studio — Artistic 3D & Vector QR Code Maker",
    },
    {
      property: "twitter:description",
      content:
        "Craft high-converting, on-brand QR codes with vector SVG export and 100% on-device privacy.",
    },
    {
      property: "twitter:image",
      content: "https://mrafiq.vercel.app/assets/images/play-store-feature-graphic.png",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F8FC] text-[#0E1B2A] selection:bg-[#3E6FA6] selection:text-white">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Social Proof & Metrics Strip */}
        <MetricsStrip />

        {/* 4. Live Interactive Studio Demo Playground */}
        <InteractiveStudio />

        {/* 5. Visual Customization Showcase */}
        <div id="features">
          <CustomizationShowcase />
        </div>

        {/* 6. Supported Data Formats Grid */}
        <DataFormatsGrid />

        {/* 7. Curated Designer Templates Gallery */}
        <TemplatesGallery />

        {/* 8. Vector Export & Print Quality Section */}
        <VectorExportSection />

        {/* 9. Privacy & Offline Safety Guarantee */}
        <PrivacySection />

        {/* 10. Built-in Optical Scanner Highlight */}
        <ScannerSection />

        {/* 11. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 12. Final CTA Banner */}
        <CtaBanner />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
