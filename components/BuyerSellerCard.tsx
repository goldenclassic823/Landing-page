import type { ViewMode } from "../app/page";
import Button from "./ui/Button";
import InfoCard from "./ui/InfoCard";

const buyerBenefits = [
  "Discover curated listings tailored to your needs",
  "Pay securely within the platform for a trusted checkout",
  "Complete purchases with guided support and clear confirmation",
];

const sellerBenefits = [
  "Post items in minutes with a polished listing",
  "Reach buyers who are ready to purchase",
  "Receive payments safely and manage transactions with confidence",
];

type BuyerSellerCardProps = {
  view: ViewMode;
};

export default function BuyerSellerCard({ view }: BuyerSellerCardProps) {
  const buyerCard = (
    <div id="buy">
      <InfoCard
        eyebrow="For buyers"
        title="Buy with trust and ease"
        description="Browse refined listings, compare details, and complete payments on the platform with a secure and reassuring buying journey."
        accent="gold"
        action={<Button href="#buy" variant="accent">Browse available products</Button>}
      >
        <ul className="mt-6 space-y-3 text-sm text-slate-100/95">
          {buyerBenefits.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#b68134]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </InfoCard>
    </div>
  );

  const sellerCard = (
    <div id="sell">
      <InfoCard
        eyebrow="For sellers"
        title="Sell with confidence"
        description="Share what you are selling, reach interested buyers, and receive payment safely through a simple and professional process."
        accent="green"
        action={<Button href="#sell" variant="secondary">Start listing today</Button>}
      >
        <ul className="mt-6 space-y-3 text-sm text-slate-100/95">
          {sellerBenefits.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#5d745e]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </InfoCard>
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
            {buyerCard}
            {sellerCard}
          </>
        ) : view === "buyer" ? (
          buyerCard
        ) : (
          sellerCard
        )}
      </div>
    </section>
  );
}