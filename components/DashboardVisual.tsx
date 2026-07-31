type DashboardVisualProps = {
  view: "buyer" | "seller";
};

function ReceiptDashboard() {
  const items = [
    { name: "Vintage Camera", price: 245, status: "held", qty: 1 },
    { name: "Leather Jacket", price: 189, status: "released", qty: 1 },
    { name: "Wireless Earbuds", price: 79, status: "held", qty: 2 },
    { name: "Mechanical Keyboard", price: 159, status: "held", qty: 1 },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/30 to-amber-600/20 shadow-[0_0_12px_rgba(196,132,45,0.2)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4842D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M12 9v4" /><path d="M12 17h.01" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">Payment Activity</p>
            <p className="text-[12px] text-white/40">NorthLane Escrow</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.15)]">
          3 active
        </span>
      </div>

      <div className="space-y-2.5">
        {items.map((item) => (
          <div
            key={item.name}
            className="group flex items-center justify-between rounded-xl bg-white/[0.07] px-4 py-3 backdrop-blur-sm transition hover:bg-white/[0.12]"
          >
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-white/15 to-white/5 text-sm font-bold text-white/70 shadow-inner">
                {item.name.charAt(0)}
              </div>
              <div>
                <p className="text-base font-medium text-white/90">{item.name}</p>
                <p className="text-[13px] text-white/45">
                  ₦{item.price} x{item.qty} &middot;{" "}
                  {item.status === "held" ? (
                    <span className="text-amber-400">Payment held</span>
                  ) : (
                    <span className="text-emerald-400">Released</span>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-white/75">₦{item.price * item.qty}</span>
              <div
                className={`h-2.5 w-2.5 rounded-full ${
                  item.status === "held"
                    ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.7)]"
                    : "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-1 flex items-center justify-between rounded-xl border border-dashed border-white/[0.08] bg-white/[0.03] px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center text-xs font-bold text-amber-400">#</span>
          <span className="text-sm text-white/50">Total held in escrow</span>
        </div>
        <span className="text-xl font-bold text-amber-400 shadow-[0_0_20px_rgba(196,132,45,0.15)]">₦483</span>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-white/30">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        Your payment is protected until you confirm delivery
      </div>
    </div>
  );
}

function SellerDashboard() {
  const bars = [
    { label: "Mon", value: 65 },
    { label: "Tue", value: 45 },
    { label: "Wed", value: 85 },
    { label: "Thu", value: 55 },
    { label: "Fri", value: 75 },
    { label: "Sat", value: 90 },
    { label: "Sun", value: 40 },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400/30 to-teal-600/20 shadow-[0_0_12px_rgba(11,110,112,0.2)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B6E70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 7h6v6" /><path d="m22 7-8.5 8.5-5-5L2 17" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">Sales Overview</p>
            <p className="text-[12px] text-white/40">Last 7 days</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[11px] text-white/40">Revenue</p>
          <p className="text-2xl font-bold text-white">₦2,845</p>
        </div>
      </div>

      <div className="flex items-end gap-2.5">
        {bars.map((bar) => (
          <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
            <div
              className="w-full rounded-[4px] bg-gradient-to-t from-teal-600/70 to-teal-400/40 shadow-[0_0_16px_rgba(11,110,112,0.3)] transition-all hover:from-teal-500/80 hover:to-teal-300/50"
              style={{ height: `${bar.value * 1.8}px` }}
            />
            <span className="text-[11px] font-medium text-white/40">{bar.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] px-4 py-3.5 backdrop-blur-sm">
          <div className="mb-1 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <p className="text-xs text-white/50">Orders</p>
          </div>
          <p className="text-xl font-bold text-white">24</p>
          <p className="text-[11px] text-emerald-400">+12% vs last week</p>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] px-4 py-3.5 backdrop-blur-sm">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="flex h-4 w-4 items-center justify-center text-[10px] font-bold text-white/30">#</span>
            <p className="text-xs text-white/50">Payouts</p>
          </div>
          <p className="text-xl font-bold text-emerald-400">18</p>
          <p className="text-[11px] text-emerald-400">₦2,012 sent</p>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] px-4 py-3.5 backdrop-blur-sm">
          <div className="mb-1 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
            <p className="text-xs text-white/50">Pending</p>
          </div>
          <p className="text-xl font-bold text-amber-400">6</p>
          <p className="text-[11px] text-amber-400/80">₦833 in escrow</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-white/30">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 12 2 2 4-4" /><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        Payment is locked in before you ship
      </div>
    </div>
  );
}

export default function DashboardVisual({ view }: DashboardVisualProps) {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.14] to-white/[0.03] p-6 shadow-[0_30px_80px_-16px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <div className="absolute -right-12 -top-12 -z-10 h-36 w-36 rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute -bottom-12 -left-12 -z-10 h-36 w-36 rounded-full bg-white/[0.03] blur-3xl" />
        {view === "buyer" ? <ReceiptDashboard /> : <SellerDashboard />}
      </div>
      <div className="absolute -bottom-4 -left-4 -right-4 -z-10 h-full rounded-3xl bg-gradient-to-br from-white/[0.08] to-transparent blur-2xl" />
    </div>
  );
}
