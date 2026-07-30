import type { ViewMode } from "../app/page";
import Button from "./ui/Button";

type BuyerSellerCardProps = {
  view: ViewMode;
};

const scrollTo = (id: string) => {
  const target = document.querySelector(id);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function BuyerSellerCard({ view }: BuyerSellerCardProps) {
  const buyerContent = (
    <div id="buy" className="rounded-[30px] border border-[#b68134]/30 bg-gradient-to-br from-[#f8efe0] to-white p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)]">
      <a
        href="#how"
        onClick={(e) => { e.preventDefault(); scrollTo("#how"); }}
        className="mb-5 inline-block text-sm font-medium text-[#8a5f16] underline underline-offset-4 transition hover:text-[#6b4a10]"
      >
        See How It Works →
      </a>
      <h3 className="text-2xl font-semibold text-[#14213D]">Take the Survey — 2 mins</h3>
      <ul className="mt-6 space-y-3 text-sm text-slate-700">
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#b68134]" />
          <span>Funds held securely</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#b68134]" />
          <span>Free to use as a buyer</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#b68134]" />
          <span>Full refund if undelivered</span>
        </li>
      </ul>
      <div className="mt-8">
        <Button onClick={() => scrollTo("#survey")} variant="accent">
          Take the Survey — 2 mins
        </Button>
      </div>
    </div>
  );

  const sellerContent = (
    <div id="sell" className="rounded-[30px] border border-[#5d745e]/20 bg-gradient-to-br from-[#eef4eb] to-white p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)]">
      <a
        href="#how"
        onClick={(e) => { e.preventDefault(); scrollTo("#how"); }}
        className="mb-5 inline-block text-sm font-medium text-[#5d745e] underline underline-offset-4 transition hover:text-[#4a5c4b]"
      >
        See How It Works →
      </a>
      <h3 className="text-2xl font-semibold text-[#14213D]">Take the Seller Survey</h3>
      <ul className="mt-6 space-y-3 text-sm text-slate-700">
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#5d745e]" />
          <span>Get paid on delivery confirmation</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#5d745e]" />
          <span>No more payment disputes</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#5d745e]" />
          <span>Sell to buyers who trust you</span>
        </li>
      </ul>
      <div className="mt-8">
        <Button onClick={() => scrollTo("#survey")} variant="secondary">
          Take the Seller Survey
        </Button>
      </div>
    </div>
  );

  return (
    <section id="how" className="mx-auto max-w-7xl px-6 py-8 pb-20">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
          {view === "overview" ? "Built for modern commerce" : view === "buyer" ? "Made for buyers" : "Built for sellers"}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
          {view === "overview"
            ? "Everything you need to buy, sell, and pay in one place"
            : view === "buyer"
              ? "A buying experience you can trust"
              : "A selling experience built for you"}
        </h2>
        <p className="mt-3 text-lg leading-8 text-slate-100/95">
          {view === "overview"
            ? "Every step is designed to feel simple, secure, and trustworthy from discovery to payment."
            : view === "buyer"
              ? "From discovery to delivery, every step is designed with your peace of mind in mind."
              : "From listing to payout, every step is designed to help you sell with confidence."}
        </p>
      </div>

      <div className={`grid gap-8 ${view === "overview" ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-2xl mx-auto"}`}>
        {view === "overview" ? (
          <>
            {buyerContent}
            {sellerContent}
          </>
        ) : view === "buyer" ? (
          buyerContent
        ) : (
          sellerContent
        )}
      </div>
    </section>
  );
}