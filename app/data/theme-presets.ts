export interface ThemePreset {
  id: string;
  name: string;
  gradient: [string, string, string];
  qrColor: string;
  qrBg: string;
  accentColor: string;
  glowColor: string;
  description: string;
}

/**
 * Curated luxury presets adhering to rule 5:
 * Dark, high-contrast scannable modules (plum, midnight ink, deep tones)
 * over clean white background with quiet zone, presented over pastel editorial canvases.
 */
export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "signature-plum",
    name: "Editorial Plum",
    gradient: ["#FDF6F2", "#FBEDE6", "#F7B9A5"],
    qrColor: "#4A0F3A",
    qrBg: "#FFFFFF",
    accentColor: "#4A0F3A",
    glowColor: "rgba(74, 15, 58, 0.12)",
    description: "Deep plum contrast on white with warm peach cream depth",
  },
  {
    id: "botanical-sage",
    name: "Botanical Sage",
    gradient: ["#FDF6F2", "#EEF4EA", "#C9D8BE"],
    qrColor: "#1B3B2B",
    qrBg: "#FFFFFF",
    accentColor: "#8FA67F",
    glowColor: "rgba(143, 166, 127, 0.15)",
    description: "Deep evergreen modules framed in soft soothing sage",
  },
  {
    id: "warm-butter",
    name: "Golden Butter",
    gradient: ["#FDF6F2", "#FEF9E7", "#FBE9A8"],
    qrColor: "#33220A",
    qrBg: "#FFFFFF",
    accentColor: "#D97706",
    glowColor: "rgba(251, 233, 168, 0.25)",
    description: "Espresso ink with warm golden buttermilk card glow",
  },
  {
    id: "soft-lavender",
    name: "Soft Lavender",
    gradient: ["#FDF6F2", "#F3F1FC", "#D9D4F5"],
    qrColor: "#32164A",
    qrBg: "#FFFFFF",
    accentColor: "#7C3AED",
    glowColor: "rgba(217, 212, 245, 0.25)",
    description: "Deep amethyst modules paired with tranquil lilac pastels",
  },
  {
    id: "peach-sorbet",
    name: "Peach Clay",
    gradient: ["#FDF6F2", "#FDEEE9", "#F7B9A5"],
    qrColor: "#3A1308",
    qrBg: "#FFFFFF",
    accentColor: "#E05A38",
    glowColor: "rgba(247, 185, 165, 0.25)",
    description: "Rich terracotta dusk with tactile soft peach warmth",
  },
  {
    id: "classic-ink",
    name: "Midnight Ink",
    gradient: ["#FDF6F2", "#FBEDE6", "#E8DFD8"],
    qrColor: "#1A1416",
    qrBg: "#FFFFFF",
    accentColor: "#4A0F3A",
    glowColor: "rgba(26, 20, 22, 0.1)",
    description: "Maximum-scannability midnight ink over pure crisp card",
  },
  {
    id: "periwinkle-mist",
    name: "Periwinkle Mist",
    gradient: ["#FDF6F2", "#EBF0FD", "#AFC0F5"],
    qrColor: "#132347",
    qrBg: "#FFFFFF",
    accentColor: "#476CD6",
    glowColor: "rgba(175, 192, 245, 0.25)",
    description: "Deep cobalt modules set against calming soft periwinkle",
  },
  {
    id: "mulberry-rose",
    name: "Mulberry Rose",
    gradient: ["#FDF6F2", "#F7EBF3", "#E8C2D8"],
    qrColor: "#450C2C",
    qrBg: "#FFFFFF",
    accentColor: "#4A0F3A",
    glowColor: "rgba(74, 15, 58, 0.15)",
    description: "Velvety mulberry modules with delicate rosewood undertones",
  },
];
