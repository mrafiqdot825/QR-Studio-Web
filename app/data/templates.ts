export interface TemplateItem {
  id: string;
  category: "Business" | "Restaurant" | "Portfolio" | "Resume" | "Events" | "WiFi" | "Payments" | "Social";
  title: string;
  desc: string;
  type: "url" | "vcard" | "wifi" | "text";
  sampleValue: string;
  themeId: string;
  color: string;
  gradient: [string, string];
  moduleShape: "square" | "rounded" | "dots";
  eyeStyle: "square" | "rounded" | "circle";
  logo: "none" | "qrstudio" | "star" | "heart" | "shield";
}

export const TEMPLATE_CATEGORIES = [
  "All",
  "Business",
  "Restaurant",
  "Portfolio",
  "Resume",
  "Events",
  "WiFi",
  "Payments",
  "Social",
] as const;

export const TEMPLATES_DATA: TemplateItem[] = [
  {
    id: "1",
    category: "Business",
    title: "Executive Digital Card",
    desc: "Polished navy theme with vCard encoding for business cards & executive networking.",
    type: "vcard",
    sampleValue: "BEGIN:VCARD\nVERSION:3.0\nN:Rafiq;Muhammad;;;\nFN:Muhammad Rafiq\nORG:QR Studio\nTITLE:Lead Engineer\nEMAIL:mrafiqdot825@gmail.com\nURL:https://mrafiq.vercel.app\nEND:VCARD",
    themeId: "ocean-blue",
    color: "#2563EB",
    gradient: ["#EFF6FF", "#DBEAFE"],
    moduleShape: "rounded",
    eyeStyle: "rounded",
    logo: "qrstudio",
  },
  {
    id: "2",
    category: "Restaurant",
    title: "Digital Menu Portal",
    desc: "Warm amber theme for contactless table-top restaurant menus & room service.",
    type: "url",
    sampleValue: "https://qrstudio.me/menu-demo",
    themeId: "sunset",
    color: "#F59E0B",
    gradient: ["#FFF7ED", "#FFEDD5"],
    moduleShape: "rounded",
    eyeStyle: "circle",
    logo: "star",
  },
  {
    id: "3",
    category: "Portfolio",
    title: "Design Showcase Link",
    desc: "Royal purple layout linking directly to Behance, Dribbble, or GitHub portfolios.",
    type: "url",
    sampleValue: "https://mrafiq.vercel.app",
    themeId: "lavender",
    color: "#7C3AED",
    gradient: ["#F5F3FF", "#EDE9FE"],
    moduleShape: "dots",
    eyeStyle: "circle",
    logo: "star",
  },
  {
    id: "4",
    category: "Resume",
    title: "Interactive CV",
    desc: "Clean slate gray template for attaching portfolio PDFs & LinkedIn to resumes.",
    type: "url",
    sampleValue: "https://qrstudio.me/cv-demo",
    themeId: "minimal-white",
    color: "#475569",
    gradient: ["#F8FAFC", "#E2E8F0"],
    moduleShape: "rounded",
    eyeStyle: "square",
    logo: "none",
  },
  {
    id: "5",
    category: "Events",
    title: "VIP Pass & RSVP",
    desc: "Striking coral red layout for tickets, event venue admission, and coordinates.",
    type: "text",
    sampleValue: "EVENT: VIP Design Summit 2026\nVENUE: Grand Hall\nSEAT: VIP-A12",
    themeId: "sunset",
    color: "#EF4444",
    gradient: ["#FEF2F2", "#FEE2E2"],
    moduleShape: "dots",
    eyeStyle: "rounded",
    logo: "shield",
  },
  {
    id: "6",
    category: "WiFi",
    title: "Cafe Guest Network",
    desc: "Emerald green Wi-Fi card with instant one-tap connection for guests.",
    type: "wifi",
    sampleValue: "WIFI:S:CafeGuest_5G;T:WPA;P:Welcome2026!;;",
    themeId: "emerald",
    color: "#10B981",
    gradient: ["#ECFDF5", "#D1FAE5"],
    moduleShape: "rounded",
    eyeStyle: "circle",
    logo: "shield",
  },
  {
    id: "7",
    category: "Payments",
    title: "Quick Checkout Pay",
    desc: "High-converting green layout for point-of-sale customer payments & tips.",
    type: "url",
    sampleValue: "https://qrstudio.me/pay-checkout",
    themeId: "aurora",
    color: "#16A34A",
    gradient: ["#F0FDF4", "#BBF7D0"],
    moduleShape: "square",
    eyeStyle: "square",
    logo: "shield",
  },
  {
    id: "8",
    category: "Social",
    title: "Multi-Link Hub",
    desc: "Violet social aggregation hub linking all media profiles in one single code.",
    type: "url",
    sampleValue: "https://qrstudio.me/socials-all",
    themeId: "lavender",
    color: "#9333EA",
    gradient: ["#FAF5FF", "#E9D5FF"],
    moduleShape: "dots",
    eyeStyle: "rounded",
    logo: "heart",
  },
];

