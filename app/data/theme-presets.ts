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

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "ocean-blue",
    name: "Ocean Blue",
    gradient: ["#F0F8FF", "#E3F2FD", "#BBDEFB"],
    qrColor: "#1E40AF",
    qrBg: "#FFFFFF",
    accentColor: "#1E40AF",
    glowColor: "rgba(30, 64, 175, 0.15)",
    description: "Deep sea calm tones with vibrant cobalt accent",
  },
  {
    id: "aurora",
    name: "Aurora",
    gradient: ["#F0FDF4", "#F4F8FC", "#E0F2FE"],
    qrColor: "#059669",
    qrBg: "#FFFFFF",
    accentColor: "#059669",
    glowColor: "rgba(5, 150, 105, 0.15)",
    description: "Ethereal northern lights gradient with emerald contrast",
  },
  {
    id: "luxury-gold",
    name: "Luxury Gold",
    gradient: ["#FFFBEB", "#FEF3C7", "#FDE68A"],
    qrColor: "#B45309",
    qrBg: "#FFFFFF",
    accentColor: "#D97706",
    glowColor: "rgba(217, 119, 6, 0.15)",
    description: "Opulent champagne glow designed for high-end dining & VIP passes",
  },
  {
    id: "sunset",
    name: "Sunset",
    gradient: ["#FFF7ED", "#FFEDD5", "#FED7AA"],
    qrColor: "#C2410C",
    qrBg: "#FFFFFF",
    accentColor: "#EA580C",
    glowColor: "rgba(234, 88, 12, 0.15)",
    description: "Warm radiant amber to terracotta dusk",
  },
  {
    id: "lavender",
    name: "Lavender",
    gradient: ["#FAF5FF", "#F3E8FF", "#E9D5FF"],
    qrColor: "#7C3AED",
    qrBg: "#FFFFFF",
    accentColor: "#7C3AED",
    glowColor: "rgba(124, 58, 237, 0.15)",
    description: "Velvety violet and lilac for creative studios and designers",
  },
  {
    id: "minimal-white",
    name: "Minimal White",
    gradient: ["#FFFFFF", "#F8FAFC", "#F1F5F9"],
    qrColor: "#1E2A38",
    qrBg: "#FFFFFF",
    accentColor: "#3E6FA6",
    glowColor: "rgba(30, 42, 56, 0.12)",
    description: "Ultra-clean monochrome with subtle steel depth",
  },
  {
    id: "emerald",
    name: "Emerald",
    gradient: ["#ECFDF5", "#D1FAE5", "#A7F3D0"],
    qrColor: "#065F46",
    qrBg: "#FFFFFF",
    accentColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.15)",
    description: "Fresh jade hues ideal for eco-friendly brands and Wi-Fi portals",
  },
  {
    id: "arctic",
    name: "Arctic",
    gradient: ["#F8FAFC", "#F0F8FF", "#E2E8F0"],
    qrColor: "#1D4ED8",
    qrBg: "#FFFFFF",
    accentColor: "#3E6FA6",
    glowColor: "rgba(62, 111, 166, 0.12)",
    description: "Crisp glacial contrast engineered for corporate identity",
  },
];

