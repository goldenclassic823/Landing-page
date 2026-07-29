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
      className={`rounded-[30px] border p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)] ${accentStyles[accent]}`}
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
