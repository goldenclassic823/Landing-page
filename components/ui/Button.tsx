"use client";
import { useState } from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  const baseClass =
    "inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition duration-200 hover:-translate-y-0.5";

  const variantStyles = {
    primary: { bg: "#44403c", hover: "#55514d" },
    secondary: { bg: "#0B6E70", hover: "#0A5F61" },
    accent: { bg: "#C4842D", hover: "#AD7530" },
  };

  const c = variantStyles[variant];
  const classes = `${baseClass} ${className}`.trim();
  const btnStyle = { backgroundColor: hovered ? c.hover : c.bg, color: "white" };

  if (href) {
    return (
      <a
        href={href}
        onClick={(event) => {
          if (onClick) onClick();
          const target = document.querySelector(href);
          if (target && href.startsWith("#")) {
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        className={classes}
        style={btnStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      style={btnStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}
