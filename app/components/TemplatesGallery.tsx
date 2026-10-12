import { useState, useMemo } from "react";
import { Sparkles, LayoutGrid, ArrowRight, ExternalLink, Download } from "lucide-react";
import { TEMPLATES_DATA, TEMPLATE_CATEGORIES } from "../data/templates";
import { generateQRSVGString } from "../utils/qr-generator";
import { Button } from "./ui/Button";

export function TemplatesGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredTemplates = useMemo(() => {
    if (selectedCategory === "All") return TEMPLATES_DATA;
    return TEMPLATES_DATA.filter((t) => t.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="templates" className="py-20 md:py-28 bg-[#F0F8FF]/50 border-t border-slate-200/80 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold badge-pill">
            <LayoutGrid className="w-3.5 h-3.5 text-[#3E6FA6]" />
            <span>CURATED DESIGNER BLUEPRINTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E1B2A]">
            Ready-to-Use Designer Templates
          </h2>
          <p className="text-base sm:text-lg text-[#5A6A7D]">
            Kickstart your brand presence with curated layouts crafted for business cards,
            hospitality tables, design portfolios, and VIP event passes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 mb-10 no-scrollbar">
          {TEMPLATE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 select-none active:scale-95 ${
                selectedCategory === cat
                  ? "bg-[#0E1B2A] text-white shadow-md shadow-slate-900/15 btn-highlight"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:bg-slate-50 shadow-2xs"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => {
            const svgString = generateQRSVGString({
              text: template.sampleValue,
              fgColor: template.color,
              bgColor: "#FFFFFF",
              moduleShape: template.moduleShape,
              eyeStyle: template.eyeStyle,
              logo: template.logo,
            });

            return (
              <div
                key={template.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Preview */}
                  <div
                    className="p-5 rounded-xl flex items-center justify-center relative mb-4 shadow-inner"
                    style={{
                      background: `linear-gradient(135deg, ${template.gradient[0]}, ${template.gradient[1]})`,
                    }}
                  >
                    <div className="w-36 h-36 p-2 bg-white rounded-xl shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
                      <div
                        className="w-full h-full"
                        dangerouslySetInnerHTML={{ __html: svgString }}
                      />
                    </div>
                  </div>

                  {/* Badge & Category */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {template.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {template.type}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0E1B2A] mb-1 group-hover:text-[#3E6FA6] transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-xs text-[#5A6A7D] leading-relaxed line-clamp-2">
                    {template.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">
                    Shape: <span className="capitalize text-slate-800">{template.moduleShape}</span>
                  </span>
                  <Button
                    variant="secondary"
                    size="xs"
                    href="#studio"
                    className="text-[#3E6FA6] hover:text-[#2A5280] shadow-2xs border-slate-200"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    iconPosition="right"
                  >
                    Use layout
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore More Banner with app screenshot */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-[#3E6FA6] uppercase tracking-wider">
              Explore Tab in Mobile App
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B2A]">
              Browse 50+ Specialized Use-Case Presets
            </h3>
            <p className="text-sm text-[#5A6A7D] leading-relaxed">
              Every template inside QR Studio is completely editable. Modify contact cards,
              Wi-Fi network keys, restaurant menus, and payment links with zero design skills.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <Button
              variant="brand"
              size="lg"
              glow
              shimmer
              href="#download"
            >
              Get Template Gallery in App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

