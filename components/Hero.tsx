import type { ViewMode } from "../app/page";
import Button from "./ui/Button";
import DashboardVisual from "./DashboardVisual";

type HeroProps = {
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
};

const scrollTo = (id: string) => {
  const target = document.querySelector(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const content = {
  buyer: {
    heading: "Shop Anywhere Online. Pay with Total Peace of Mind.",
    sub: "NorthLane holds your payment until you confirm delivery. Item arrived as described? Release the funds. Didn't show up? You get your money back. No stress. No risk.",
    highlights: [
      { value: "10k+", label: "verified listings" },
      { value: "98%", label: "secure handoffs" },
      { value: "24/7", label: "buyer support" },
    ],
    badge: "Buyer protection",
    badgeSub: "Your payment is held until you confirm delivery",
        badgeLabel: "3 Steps",
  },
  seller: {
    heading: "Sell to anyone, anywhere.",
    sub: "NorthLane lets buyers know their payment is locked in before you ship. The moment they confirm delivery, the money lands in your account. No chasing. No risk. Just getting paid.",
    highlights: [
      { value: "500+", label: "active sellers" },
      { value: "98%", label: "secure handoffs" },
      { value: "Instant", label: "payout on delivery" },
    ],
    badge: "Seller protection",
    badgeSub: "Payment is locked in before you ship",
        badgeLabel: "3 Steps",
  },
};

export default function Hero({ view }: HeroProps) {
  const c = content[view];

  const buyerButtons = (
    <>
      <Button onClick={() => scrollTo("#survey")} variant="primary" className="whitespace-nowrap">
        Take the Survey — 2 mins
      </Button>
      <a
        href="#how"
        onClick={(e) => { e.preventDefault(); scrollTo("#how"); }}
        className="inline-flex cursor-pointer items-center whitespace-nowrap text-sm font-medium text-white/80 underline underline-offset-4 transition hover:text-white"
      >
        See How It Works →
      </a>
    </>
  );

  const sellerButtons = (
    <>
      <Button onClick={() => scrollTo("#survey")} variant="primary" className="whitespace-nowrap">
        Take the Seller Survey
      </Button>
      <a
        href="#how"
        onClick={(e) => { e.preventDefault(); scrollTo("#how"); }}
        className="inline-flex cursor-pointer items-center whitespace-nowrap text-sm font-medium text-white/80 underline underline-offset-4 transition hover:text-white"
      >
        See How It Works →
      </a>
    </>
  );

  const buttons =
    view === "buyer" ? buyerButtons : sellerButtons;

  return (
    <section className="relative px-6 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className={`relative overflow-hidden rounded-[40px] bg-[#1c1917] p-6 shadow-[0_30px_100px_-34px_rgba(0,0,0,0.5)] sm:p-8 lg:p-10 ${view === "seller" ? "border-2 border-seller/50" : ""}`}>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_44%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_45%,transparent_100%)]" />
          <div className="absolute -right-8 -top-8 -z-10 h-48 w-48 rounded-full bg-white/12 blur-3xl" />

          <div className="items-center gap-14 lg:grid lg:grid-cols-2">
            <div>
              {view === "seller" ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-seller bg-seller/10 px-3.5 py-1 text-xs font-semibold tracking-[-0.02em] text-seller sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-seller">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                  Get Paid. Always.
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-buyer bg-buyer/10 px-3.5 py-1 text-xs font-semibold tracking-[-0.02em] text-buyer sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-buyer">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  Pay with Confidence
                </span>
              )}
              <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white/90 sm:text-5xl lg:text-6xl">
                {c.heading}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100/80">
                {c.sub}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {buttons}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {c.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="min-w-37.5 bg-white/75 px-4 py-3 shadow-sm backdrop-blur dark:bg-[#292524]/75"
                  >
                    <p className="text-xl font-semibold text-heading">
                      {item.value}
                    </p>
                    <p className="text-sm text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <DashboardVisual view={view} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
