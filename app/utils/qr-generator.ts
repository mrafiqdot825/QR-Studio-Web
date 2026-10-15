import QRCode from "qrcode";

export type ModuleShape = "square" | "rounded" | "dots";
export type EyeStyle = "square" | "rounded" | "circle";
export type LogoPreset = "none" | "qrlab" | "qrstudio" | "star" | "heart" | "shield";

export interface QRCodeOptions {
  text: string;
  fgColor?: string;
  bgColor?: string;
  moduleShape?: ModuleShape;
  eyeStyle?: EyeStyle;
  logo?: LogoPreset;
  size?: number; // output rendered dimension in px
}

interface EyeCoords {
  x: number;
  y: number;
}

export function generateQRMatrix(text: string) {
  try {
    const qr = QRCode.create(text || "https://mrafiq.vercel.app", {
      errorCorrectionLevel: "H",
    });
    return qr.modules;
  } catch (err) {
    console.error("QR creation error:", err);
    const fallback = QRCode.create("https://mrafiq.vercel.app", {
      errorCorrectionLevel: "H",
    });
    return fallback.modules;
  }
}

export function isFinderPattern(row: number, col: number, size: number): boolean {
  // Top-left
  if (row < 8 && col < 8) return true;
  // Top-right
  if (row < 8 && col >= size - 8) return true;
  // Bottom-left
  if (row >= size - 8 && col < 8) return true;
  return false;
}

export function isCenterLogoArea(
  row: number,
  col: number,
  size: number,
  logo: LogoPreset
): boolean {
  if (logo === "none") return false;
  const center = Math.floor(size / 2);
  const radius = 3; // 7x7 module clearing in center
  return (
    row >= center - radius &&
    row <= center + radius &&
    col >= center - radius &&
    col <= center + radius
  );
}

export function renderEyeSVG(
  x: number,
  y: number,
  style: EyeStyle,
  fgColor: string,
  bgColor: string
): string {
  if (style === "circle") {
    return `
      <!-- Outer Circle Eye -->
      <circle cx="${x + 3.5}" cy="${y + 3.5}" r="3" fill="none" stroke="${fgColor}" stroke-width="1" />
      <!-- Inner Circle Pupil -->
      <circle cx="${x + 3.5}" cy="${y + 3.5}" r="1.5" fill="${fgColor}" />
    `;
  }

  if (style === "rounded") {
    return `
      <!-- Outer Rounded Eye -->
      <rect x="${x + 0.5}" y="${y + 0.5}" width="6" height="6" rx="1.8" ry="1.8" fill="none" stroke="${fgColor}" stroke-width="1" />
      <!-- Inner Rounded Pupil -->
      <rect x="${x + 2}" y="${y + 2}" width="3" height="3" rx="0.9" ry="0.9" fill="${fgColor}" />
    `;
  }

  // Classic Square
  return `
    <!-- Outer Square Eye -->
    <rect x="${x + 0.5}" y="${y + 0.5}" width="6" height="6" fill="none" stroke="${fgColor}" stroke-width="1" />
    <!-- Inner Square Pupil -->
    <rect x="${x + 2}" y="${y + 2}" width="3" height="3" fill="${fgColor}" />
  `;
}

export function getLogoSVGContent(logo: LogoPreset, cx: number, cy: number, size: number, fgColor: string): string {
  const iconSize = size * 0.55;
  const half = iconSize / 2;
  const x = cx - half;
  const y = cy - half;

  if (logo === "qrlab" || logo === "qrstudio") {
    // Stylized QRLab viewfinder logo
    return `
      <g transform="translate(${x}, ${y}) scale(${iconSize / 24})">
        <path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" stroke="${fgColor}" stroke-width="1.6" stroke-linecap="round" fill="none" />
        <rect x="7" y="7" width="4.5" height="4.5" rx="1" fill="${fgColor}" />
        <rect x="12.5" y="7" width="4.5" height="4.5" rx="1" fill="${fgColor}" />
        <rect x="7" y="12.5" width="4.5" height="4.5" rx="1" fill="${fgColor}" />
        <rect x="13.5" y="13.5" width="3.5" height="3.5" rx="0.8" fill="${fgColor}" />
      </g>
    `;
  }

  if (logo === "star") {
    return `
      <g transform="translate(${x}, ${y}) scale(${iconSize / 24})">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="${fgColor}" />
      </g>
    `;
  }

  if (logo === "shield") {
    return `
      <g transform="translate(${x}, ${y}) scale(${iconSize / 24})">
        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14.5l-3.5-3.5 1.41-1.41L11 13.67l5.59-5.59 1.41 1.41L11 16.5z" fill="${fgColor}" />
      </g>
    `;
  }

  if (logo === "heart") {
    return `
      <g transform="translate(${x}, ${y}) scale(${iconSize / 24})">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${fgColor}" />
      </g>
    `;
  }

  return "";
}

export function generateQRSVGString(options: QRCodeOptions): string {
  const {
    text,
    fgColor = "#1A1416",
    bgColor = "#FFFFFF",
    moduleShape = "rounded",
    eyeStyle = "rounded",
    logo = "none",
  } = options;

  const modules = generateQRMatrix(text);
  const size = modules.size;
  const padding = 3;
  const viewBoxSize = size + padding * 2;

  let elements: string[] = [];

  // Data modules
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (modules.get(r, c)) {
        if (isFinderPattern(r, c, size)) continue;
        if (isCenterLogoArea(r, c, size, logo)) continue;

        const x = c + padding;
        const y = r + padding;

        if (moduleShape === "dots") {
          elements.push(`<circle cx="${x + 0.5}" cy="${y + 0.5}" r="0.44" fill="${fgColor}" />`);
        } else if (moduleShape === "rounded") {
          elements.push(
            `<rect x="${x + 0.05}" y="${y + 0.05}" width="0.9" height="0.9" rx="0.32" ry="0.32" fill="${fgColor}" />`
          );
        } else {
          // square
          elements.push(
            `<rect x="${x}" y="${y}" width="1.01" height="1.01" fill="${fgColor}" />`
          );
        }
      }
    }
  }

  // Finder eyes
  const eyeCoords: EyeCoords[] = [
    { x: padding, y: padding }, // TL
    { x: size - 7 + padding, y: padding }, // TR
    { x: padding, y: size - 7 + padding }, // BL
  ];

  eyeCoords.forEach((eye) => {
    elements.push(renderEyeSVG(eye.x, eye.y, eyeStyle, fgColor, bgColor));
  });

  // Center Logo Badge
  if (logo !== "none") {
    const center = Math.floor(size / 2) + padding;
    const badgeSize = 6.4;
    const badgeX = center - badgeSize / 2 + 0.5;
    const badgeY = center - badgeSize / 2 + 0.5;

    elements.push(`
      <!-- Center Badge Plate -->
      <rect x="${badgeX}" y="${badgeY}" width="${badgeSize}" height="${badgeSize}" rx="1.6" fill="${bgColor}" stroke="${fgColor}" stroke-opacity="0.15" stroke-width="0.3" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.1))" />
      ${getLogoSVGContent(logo, center + 0.5, center + 0.5, badgeSize, fgColor)}
    `);
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewBoxSize} ${viewBoxSize}" width="100%" height="100%" style="background-color: ${bgColor}; border-radius: 12px;">
      <rect width="100%" height="100%" fill="${bgColor}" rx="12" />
      ${elements.join("\n")}
    </svg>
  `.trim();
}

export function downloadSVG(svgString: string, filename = "qrlab-code.svg") {
  const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadPNG(svgString: string, filename = "qrlab-code.png", dimension = 2048) {
  const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const img = new Image();

  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = dimension;
    canvas.height = dimension;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, dimension, dimension);
      const pngUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    URL.revokeObjectURL(url);
  };
  img.src = url;
}

