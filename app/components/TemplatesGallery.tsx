import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
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
    <section
      id="templates"
      className="py-20 md:py-28 bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)] relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Morrow Signature Pattern */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[var(--ink-muted)] uppercase">
            Curated designer blueprints
          </p>
          <h2 className="h2-editorial font-bold text-[var(--ink)]">
            Ready-to-use, <br />
            <span className="italic font-normal text-[var(--plum)]">
              thoughtful templates.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--ink-muted)] max-w-xl mx-auto leading-relaxed">
            Kickstart your brand presence with layouts crafted for business
            cards, hospitality tables, design portfolios, and VIP passes.
          </p>
        </div>

        {/* Filter Chip Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 mb-10 no-scrollbar">
          {TEMPLATE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 select-none active:scale-95 ${
                selectedCategory === cat
                  ? "bg-[var(--plum)] text-white shadow-xs font-semibold"
                  : "bg-[var(--bg-surface)] text-[var(--ink-muted)] hover:text-[var(--ink)] border border-[var(--border-subtle)] hover:bg-white"
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
                className="bg-[var(--bg-surface)] rounded-[28px] p-5 border border-[var(--border-subtle)] shadow-[0_8px_24px_rgba(74,15,58,0.04)] hover:shadow-[0_16px_36px_rgba(74,15,58,0.09)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Preview Container */}
                  <div
                    className="p-5 rounded-[22px] flex items-center justify-center relative mb-4 shadow-inner"
                    style={{
                      background: `linear-gradient(135deg, ${template.gradient[0]}, ${template.gradient[1]})`,
                    }}
                  >
                    <div className="w-36 h-36 p-2.5 bg-white rounded-xl shadow-[0_4px_16px_rgba(74,15,58,0.06)] border border-[var(--border-subtle)] flex items-center justify-center transition-transform group-hover:scale-105">
                      <div
                        className="w-full h-full"
                        dangerouslySetInnerHTML={{ __html: svgString }}
                      />
                    </div>
                  </div>

                  {/* Badge & Category */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--bg-canvas)] text-[var(--plum)]">
                      {template.category}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--ink-muted)] uppercase">
                      {template.type}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[var(--ink)] mb-1 group-hover:text-[var(--plum)] transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-xs text-[var(--ink-muted)] leading-relaxed line-clamp-2">
                    {template.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[var(--ink-muted)]">
                    Shape:{" "}
                    <span className="capitalize text-[var(--ink)]">
                      {template.moduleShape}
                    </span>
                  </span>
                  <Button
                    variant="secondary"
                    size="xs"
                    href="#studio"
                    className="text-[var(--plum)] hover:text-[var(--plum-hover)]"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    iconPosition="right"
                  >
                    Use template
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore More Banner with app screenshot */}
        <div className="mt-14 bg-[var(--bg-surface)] rounded-[32px] p-8 sm:p-10 border border-[var(--border-subtle)] shadow-[0_12px_32px_rgba(74,15,58,0.06)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2.5 max-w-xl text-center md:text-left">
            <span className="text-xs font-semibold text-[var(--plum)] uppercase tracking-wider">
              Explore Tab in Mobile App
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--ink)]">
              Browse 50+ Specialized Use-Case Presets
            </h3>
            <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
              Every template inside QRLab is completely editable. Modify contact
              cards, Wi-Fi network keys, restaurant menus, and payment links
              with zero design skills.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <Button variant="primary" size="lg" href="#download">
              Get Template Gallery in App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
