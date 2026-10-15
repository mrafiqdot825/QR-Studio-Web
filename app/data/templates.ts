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
    desc: "Polished deep plum theme with vCard encoding for business cards & executive networking.",
    type: "vcard",
    sampleValue: "BEGIN:VCARD\nVERSION:3.0\nN:Rafiq;Muhammad;;;\nFN:Muhammad Rafiq\nORG:QRLab\nTITLE:Lead Engineer\nEMAIL:mrafiqdot825@gmail.com\nURL:https://mrafiq.vercel.app\nEND:VCARD",
    themeId: "signature-plum",
    color: "#4A0F3A",
    gradient: ["#FDF6F2", "#F7B9A5"],
    moduleShape: "rounded",
    eyeStyle: "rounded",
    logo: "qrstudio",
  },
  {
    id: "2",
    category: "Restaurant",
    title: "Digital Menu Portal",
    desc: "Warm terracotta and butter theme for contactless table-top restaurant menus & room service.",
    type: "url",
    sampleValue: "https://qrlab.me/menu-demo",
    themeId: "warm-butter",
    color: "#3A1308",
    gradient: ["#FEF9E7", "#FBE9A8"],
    moduleShape: "rounded",
    eyeStyle: "circle",
    logo: "star",
  },
  {
    id: "3",
    category: "Portfolio",
    title: "Design Showcase Link",
    desc: "Deep violet and lavender layout linking directly to Behance, Dribbble, or GitHub portfolios.",
    type: "url",
    sampleValue: "https://mrafiq.vercel.app",
    themeId: "soft-lavender",
    color: "#32164A",
    gradient: ["#F3F1FC", "#D9D4F5"],
    moduleShape: "dots",
    eyeStyle: "circle",
    logo: "star",
  },
  {
    id: "4",
    category: "Resume",
    title: "Interactive CV",
    desc: "Clean midnight ink template for attaching portfolio PDFs & LinkedIn to resumes.",
    type: "url",
    sampleValue: "https://qrlab.me/cv-demo",
    themeId: "classic-ink",
    color: "#1A1416",
    gradient: ["#FDF6F2", "#E8DFD8"],
    moduleShape: "rounded",
    eyeStyle: "square",
    logo: "none",
  },
  {
    id: "5",
    category: "Events",
    title: "VIP Pass & RSVP",
    desc: "Striking mulberry layout for tickets, event venue admission, and coordinates.",
    type: "text",
    sampleValue: "EVENT: VIP Design Summit 2026\nVENUE: Grand Hall\nSEAT: VIP-A12",
    themeId: "mulberry-rose",
    color: "#450C2C",
    gradient: ["#FDF6F2", "#F7B9A5"],
    moduleShape: "dots",
    eyeStyle: "rounded",
    logo: "shield",
  },
  {
    id: "6",
    category: "WiFi",
    title: "Cafe Guest Network",
    desc: "Botanical sage green Wi-Fi card with instant one-tap connection for guests.",
    type: "wifi",
    sampleValue: "WIFI:S:CafeGuest_5G;T:WPA;P:Welcome2026!;;",
    themeId: "botanical-sage",
    color: "#1B3B2B",
    gradient: ["#EEF4EA", "#C9D8BE"],
    moduleShape: "rounded",
    eyeStyle: "circle",
    logo: "shield",
  },
  {
    id: "7",
    category: "Payments",
    title: "Quick Checkout Pay",
    desc: "High-contrast dark ink on sage layout for point-of-sale customer payments & tips.",
    type: "url",
    sampleValue: "https://qrlab.me/pay-checkout",
    themeId: "botanical-sage",
    color: "#163824",
    gradient: ["#EEF4EA", "#C9D8BE"],
    moduleShape: "square",
    eyeStyle: "square",
    logo: "shield",
  },
  {
    id: "8",
    category: "Social",
    title: "Multi-Link Hub",
    desc: "Soft lavender social aggregation hub linking all media profiles in one single code.",
    type: "url",
    sampleValue: "https://qrlab.me/socials-all",
    themeId: "soft-lavender",
    color: "#32164A",
    gradient: ["#F3F1FC", "#D9D4F5"],
    moduleShape: "dots",
    eyeStyle: "rounded",
    logo: "heart",
  },
];
