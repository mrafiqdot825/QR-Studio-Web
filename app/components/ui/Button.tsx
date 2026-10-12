import React, { forwardRef } from "react";

export type ButtonVariant =
  | "primary"
  | "brand"
  | "secondary"
  | "glass"
  | "ghost"
  | "outline"
  | "dark";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "icon" | "icon-sm";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  target?: string;
  rel?: string;
  glow?: boolean;
  shimmer?: boolean;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0E1B2A] hover:bg-[#162C44] text-white shadow-md shadow-slate-900/15 hover:shadow-xl hover:shadow-slate-900/20 border border-slate-700/50 active:scale-[0.98]",
  brand:
    "bg-gradient-to-r from-[#3E6FA6] to-[#635BFF] hover:from-[#355f8f] hover:to-[#554de6] text-white shadow-md shadow-blue-500/20 hover:shadow-xl hover:shadow-indigo-500/30 border border-white/20 active:scale-[0.98]",
  secondary:
    "bg-white hover:bg-slate-50 text-[#0E1B2A] border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 active:scale-[0.98]",
  glass:
    "bg-white/80 hover:bg-white text-[#0E1B2A] backdrop-blur-md border border-white/70 shadow-xs hover:shadow-md active:scale-[0.98]",
  outline:
    "bg-transparent hover:bg-slate-100/70 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 active:scale-[0.98]",
  ghost:
    "bg-transparent hover:bg-slate-100/80 text-slate-600 hover:text-slate-900 border border-transparent active:scale-[0.98]",
  dark:
    "bg-slate-900/90 hover:bg-slate-900 text-white border border-slate-800 shadow-md hover:shadow-lg active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: "px-2.5 py-1 text-xs rounded-lg gap-1.5 font-semibold",
  sm: "px-3.5 py-1.5 text-xs sm:text-sm rounded-xl gap-2 font-semibold",
  md: "px-5 py-2.5 text-sm rounded-xl gap-2.5 font-semibold",
  lg: "px-6 py-3.5 text-base rounded-2xl gap-3 font-semibold",
  xl: "px-8 py-4 text-base sm:text-lg rounded-2xl gap-3.5 font-bold",
  icon: "p-2.5 rounded-xl aspect-square items-center justify-center",
  "icon-sm": "p-1.5 rounded-lg aspect-square items-center justify-center",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      href,
      target,
      rel,
      glow = false,
      shimmer = false,
      fullWidth = false,
      className = "",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "relative inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#3E6FA6] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed group";

    const widthClass = fullWidth ? "w-full" : "";
    const glowClass = glow
      ? "relative after:absolute after:-inset-1 after:rounded-2xl after:bg-gradient-to-r after:from-sky-400/30 after:to-indigo-500/30 after:blur-md after:-z-10 after:opacity-75 hover:after:opacity-100 after:transition-opacity"
      : "";
    const shimmerClass = shimmer ? "overflow-hidden" : "";

    const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${glowClass} ${shimmerClass} ${className}`.trim();

    const content = (
      <>
        {/* Shimmer sweep effect on hover */}
        {shimmer && (
          <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
        )}

        {icon && iconPosition === "left" && (
          <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:scale-105">
            {icon}
          </span>
        )}

        {children && <span>{children}</span>}

        {icon && iconPosition === "right" && (
          <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          className={combinedClasses}
          {...(props as any)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

