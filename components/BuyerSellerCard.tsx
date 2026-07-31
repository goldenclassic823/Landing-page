import type { ViewMode } from "../app/page";

const buyerSteps = [
  {
    icon: "💸",
    title: "Send Payment to NorthLane",
    desc: "Instead of paying the seller directly, send your money to NorthLane. We hold it safely until you're happy.",
  },
  {
    icon: "📦",
    title: "Seller Ships Your Order",
    desc: "The seller can see your payment is secured and ready for release. They ship your item with confidence.",
  },
  {
    icon: "✅",
    title: "Confirm and Release",
    desc: "Received your item? Confirm on the app and we instantly release the payment to the seller. Not satisfied? Open a dispute.",
  },
];

const sellerSteps = [
  {
    icon: "🔗",
    title: "Share Your NorthLane Link",
    desc: "Send buyers your NorthLane payment link instead of your bank account. They pay NorthLane — not you directly.",
  },
  {
    icon: "📦",
    title: "Ship When Payment is Secured",
    desc: "You get notified the moment the buyer's payment is locked in. Ship your item knowing you WILL get paid.",
  },
  {
    icon: "💰",
    title: "Get Paid Automatically",
    desc: "Buyer confirms delivery → money hits your account instantly. No waiting. No chasing. No excuses.",
  },
];

type BuyerSellerCardProps = {
  view: ViewMode;
};

export default function BuyerSellerCard({ view }: BuyerSellerCardProps) {
  const steps = view === "buyer" ? buyerSteps : sellerSteps;
  const accent = view === "seller" ? "seller" : "buyer";

  return (
    <section id="how" className="mx-auto max-w-7xl px-6 py-8 pb-20">
      <div className="mb-10 mx-auto max-w-3xl text-center">
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-heading sm:text-4xl">
          {view === "buyer"
            ? "How NorthLane Protects You"
            : "How NorthLane Works for Sellers"}
        </h2>
        <p className="mt-3 text-lg leading-8 text-muted">
          {view === "buyer"
            ? "Three simple steps between you and a safe purchase"
            : "Three simple steps to guaranteed payment on every sale."}
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12">
        {steps.map((step, i) => (
          <div key={step.title} className="relative flex flex-1">
            <div className={`w-full rounded-[30px] border border-${accent}/20 bg-linear-to-br from-${accent}-light to-white dark:to-[#292524] p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)] transition-all duration-300 hover:scale-[1.03]`}>
              <p className="text-4xl">{step.icon}</p>
              <h3 className="mt-4 text-xl font-semibold text-heading">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <span className={`absolute -right-6 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-lg text-${accent} shadow-lg lg:inline-flex`} style={{ background: `linear-gradient(135deg, var(--${accent}-light), var(--card, #fff))` }}>
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}