"use client";

import { useRef, useState } from "react";

type InfoCardProps = {
  title?: string;
  description?: string;
  eyebrow: string;
  accent: "gold" | "green";
  children?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

export default function InfoCard({
  title,
  description,
  eyebrow,
  accent,
  children,
  action,
  className,
}: InfoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const centerY = rect.height / 2;
    const rotateX = Math.min(0, ((centerY - y) / centerY) * 6);
    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({});
  };

  const accentStyles = {
    gold: "border-buyer/30 bg-linear-to-br from-buyer-light to-white dark:to-[#292524]",
    green: "border-seller/20 bg-linear-to-br from-seller-light to-white dark:to-[#292524]",
  };

  const badgeStyles = {
    gold: "bg-buyer/15 text-buyer",
    green: "bg-seller/15 text-seller",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`rounded-[30px] border p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)] transition-transform duration-200 ease-out ${accentStyles[accent]} ${className ?? ""}`}
    >
      <span
        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${badgeStyles[accent]}`}
      >
        {eyebrow}
      </span>
      <h3 className="mt-5 text-2xl font-semibold text-heading">{title}</h3>
      <p className="mt-3 text-base leading-7 text-muted">{description}</p>
      {children}
      {action ? <div className="mt-8">{action}</div> : null}
    </div>
  );
}
