import React, { forwardRef } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "surface"
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
    "bg-[var(--plum)] hover:bg-[var(--plum-hover)] text-white shadow-[0_8px_20px_rgba(74,15,58,0.2)] hover:shadow-[0_12px_28px_rgba(74,15,58,0.28)] border border-transparent active:scale-[0.98]",
  secondary:
    "bg-white hover:bg-[var(--bg-surface)] text-[var(--ink)] border border-[var(--border-subtle)] shadow-[0_4px_16px_rgba(74,15,58,0.05)] hover:shadow-[0_8px_24px_rgba(74,15,58,0.09)] active:scale-[0.98]",
  surface:
    "bg-[var(--bg-surface)] hover:bg-white text-[var(--ink)] border border-[var(--border-subtle)] shadow-xs hover:shadow-md active:scale-[0.98]",
  outline:
    "bg-transparent hover:bg-white/70 text-[var(--ink)] border border-[var(--border-subtle)] hover:border-[var(--plum)] active:scale-[0.98]",
  ghost:
    "bg-transparent hover:bg-white/60 text-[var(--ink-muted)] hover:text-[var(--ink)] border border-transparent active:scale-[0.98]",
  dark:
    "bg-[var(--ink)] hover:bg-[#2C2226] text-white border border-transparent shadow-[0_8px_20px_rgba(26,20,22,0.25)] active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: "px-3 py-1 text-xs rounded-full gap-1.5 font-medium",
  sm: "px-4 py-2 text-xs sm:text-sm rounded-full gap-2 font-medium",
  md: "px-5 py-2.5 text-sm sm:text-base rounded-full gap-2.5 font-medium",
  lg: "px-7 py-3.5 text-base rounded-full gap-3 font-semibold",
  xl: "px-8 py-4 text-base sm:text-lg rounded-full gap-3.5 font-semibold",
  icon: "p-2.5 rounded-full aspect-square items-center justify-center",
  "icon-sm": "p-1.5 rounded-full aspect-square items-center justify-center",
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
      "relative inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--plum)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed group";

    const widthClass = fullWidth ? "w-full" : "";
    const glowClass = glow
      ? "relative after:absolute after:-inset-1 after:rounded-full after:bg-[var(--plum)]/20 after:blur-md after:-z-10 after:opacity-70 hover:after:opacity-100 after:transition-opacity"
      : "";
    const shimmerClass = shimmer ? "overflow-hidden" : "";

    const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${glowClass} ${shimmerClass} ${className}`.trim();

    const content = (
      <>
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
