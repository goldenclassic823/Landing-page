"use client";

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
  const baseClass =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition duration-200 hover:-translate-y-0.5";

  const variants = {
    primary: "bg-[#1f2a37] text-white hover:bg-[#283647]",
    secondary: "bg-[#5d745e] text-white hover:bg-[#50624f]",
    accent: "bg-[#b68134] text-[#1f2a37] hover:bg-[#a5722e]",
  };

  const classes = `${baseClass} ${variants[variant]} ${className}`.trim();

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
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
