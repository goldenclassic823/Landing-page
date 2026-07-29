"use client";

import { useRef, useState } from "react";

type InfoCardProps = {
  title: string;
  description: string;
  eyebrow: string;
  accent: "gold" | "green";
  children?: React.ReactNode;
  action?: React.ReactNode;
};

export default function InfoCard({
  title,
  description,
  eyebrow,
  accent,
  children,
  action,
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
    gold: "border-[#b68134]/30 bg-gradient-to-br from-[#f8efe0] to-white",
    green: "border-[#5d745e]/20 bg-gradient-to-br from-[#eef4eb] to-white",
  };

  const badgeStyles = {
    gold: "bg-[#b68134]/15 text-[#8a5f16]",
    green: "bg-[#5d745e]/15 text-[#51684e]",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`rounded-[30px] border p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)] transition-transform duration-200 ease-out ${accentStyles[accent]}`}
    >
      <span
        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${badgeStyles[accent]}`}
      >
        {eyebrow}
      </span>
      <h3 className="mt-5 text-2xl font-semibold text-[#14213D]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-[#4b5563]">{description}</p>
      {children}
      {action ? <div className="mt-8">{action}</div> : null}
    </div>
  );
}
