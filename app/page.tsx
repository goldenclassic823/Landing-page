"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BuyerSellerCard from "../components/BuyerSellerCard";
import FAQ from "../components/FAQ";
import Survey from "../components/Survey";
import Button from "../components/ui/Button";
import AnimateOnScroll from "../components/AnimateOnScroll";

export type ViewMode = "buyer" | "seller";

export default function Home() {
  const [view, setView] = useState<ViewMode>("seller");

  const ctaContent = {
    buyer: {
      eyebrow: "Start exploring",
      title: "Find what you need, pay with confidence.",
      desc: "Browse curated listings, compare details, and complete your purchase securely on the platform.",
      btnLabel: "Browse products",
      btnHref: "#buy",
    },
    seller: {
      eyebrow: "Start selling",
      title: "Turn your items into sales, safely.",
      desc: "List in minutes, reach ready buyers, and get paid securely through our trusted platform.",
      btnLabel: "Create your listing",
      btnHref: "#sell",
    },
  };

  const cta = ctaContent[view];

  const buyerWhyCards = [
    { icon: "🔒", title: "Your Money is Safe", desc: "Because you pay NorthLane, not the seller. We hold your funds in escrow until you confirm you got what you ordered." },
    { icon: "✅", title: "No Delivery? Get Refunded", desc: "Because if the item never shows up or isn't what you agreed on, you get every kobo back. No questions asked." },
    { icon: "🛡️", title: "Shop From Anyone", desc: "Because escrow removes the risk. You can buy from a stranger on Instagram or WhatsApp without worrying about losing your money." },
    { icon: "🤝", title: "Fair Disputes", desc: "Because if there's an issue, NorthLane reviews both sides. You're not at the mercy of the seller's goodwill." },
    { icon: "📦", title: "Confirm Before Pay", desc: "Because the money only leaves your account after you inspect your item and say 'Yes, this is it.' You stay in control." },
    { icon: "💬", title: "Seller Transparency", desc: "Because every seller on NorthLane knows their payment depends on delivering what they promised. That means better service for you." },
  ];

  const sellerWhyCards = [
    { icon: "💰", title: "Get Paid. Every Time.", desc: "Because buyers pay NorthLane first. We hold the funds until delivery is confirmed. You never ship without knowing the money is already there." },
    { icon: "🛡️", title: "Scam-Proof Reputation", desc: "Because your buyer's payment is locked in escrow. They can't run off, and you can't lose. Both sides are protected from the start." },
    { icon: "📈", title: "Sell More, Worry Less", desc: "Because escrow removes the trust barrier. Buyers who would never pay a stranger upfront feel safe paying you through NorthLane." },
    { icon: "🔒", title: "No Chargebacks", desc: "Because the payment is already settled in escrow. Buyers can't reverse or dispute after confirming delivery — your money stays yours." },
    { icon: "⚡", title: "Instant Payout", desc: "Because the moment the buyer confirms delivery, the funds hit your account automatically. No waiting days for bank transfers." },
    { icon: "🤝", title: "Fair Dispute Resolution", desc: "Because if something goes wrong, NorthLane steps in. You and the buyer get a fair review — not a automatic refund." },
  ];

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-transparent pt-16 text-theme">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_42%)]" />
      <div className="absolute -left-16 top-40 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 top-88 -z-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative">
        <Navbar view={view} onViewChange={setView} />
        <div key={view} className="animate-[fadeIn_0.35s_ease-in-out]">
        <Hero view={view} onViewChange={setView} />
        <AnimateOnScroll>
        <BuyerSellerCard view={view} />
        </AnimateOnScroll>

        {view === "seller" && (
          <section className="mx-auto max-w-7xl px-6 py-16">
            <AnimateOnScroll>
            <div className="mb-10 mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-heading sm:text-3xl">
                Why Sellers Love NorthLane
              </h2>
              <p className="mt-3 text-base font-normal leading-7 text-muted">
                Equipping vendors to sell with confidence and grow their reputation.
              </p>
            </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sellerWhyCards.map((card) => (
                <div key={card.title} className="w-full rounded-[30px] border border-seller/20 bg-linear-to-br from-seller-light to-white dark:to-[#292524] p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)] transition-all duration-300 hover:scale-[1.03] hover:border-seller/50 hover:from-[#d4eceb] hover:shadow-[0_24px_50px_-20px_rgba(11,110,112,0.3)]">
                  <p className="text-4xl">{card.icon}</p>
                  <h3 className="mt-4 text-xl font-semibold text-heading">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{card.desc}</p>
                </div>
              ))}
            </div>
            </AnimateOnScroll>
          </section>
        )}

        {view === "seller" && (
          <section className="mx-auto max-w-7xl px-6 py-16">
            <AnimateOnScroll>
            <div className="mb-10 mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-heading sm:text-3xl">
                Built for Every Nigerian Seller
              </h2>
              <p className="mt-3 text-base font-normal leading-7 text-muted">
                Whether you sell on Instagram, WhatsApp, or marketplaces, NorthLane works for you.
              </p>
            </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="w-full rounded-[30px] border border-seller/20 bg-linear-to-br from-seller-light to-white dark:to-[#292524] p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)] transition-all duration-300 hover:scale-[1.03]">
                <p className="text-4xl">💬</p>
                <h3 className="mt-4 text-xl font-semibold text-heading">Instagram & WhatsApp Vendors</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Turn DMs into sales. When buyers know their payment is secured, they send money without the fear.</p>
              </div>
              <div className="w-full rounded-[30px] border border-seller/20 bg-linear-to-br from-seller-light to-white dark:to-[#292524] p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)] transition-all duration-300 hover:scale-[1.03]">
                <p className="text-4xl">🏪</p>
                <h3 className="mt-4 text-xl font-semibold text-heading">Jiji & Marketplace Sellers</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Stand out from the crowd. Offering escrow-backed payments makes buyers pick you every time.</p>
              </div>
              <div className="w-full rounded-[30px] border border-seller/20 bg-linear-to-br from-seller-light to-white dark:to-[#292524] p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)] transition-all duration-300 hover:scale-[1.03]">
                <p className="text-4xl">✨</p>
                <h3 className="mt-4 text-xl font-semibold text-heading">Fashion & Beauty Vendors</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Ship your products with confidence. No more worrying if the buyer will pay up after delivery.</p>
              </div>
              <div className="w-full rounded-[30px] border border-seller/20 bg-linear-to-br from-seller-light to-white dark:to-[#292524] p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)] transition-all duration-300 hover:scale-[1.03]">
                <p className="text-4xl">🔌</p>
                <h3 className="mt-4 text-xl font-semibold text-heading">Tech & Gadget Sellers</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Sell high-value gadgets without the risk. Payment is locked before you hand over the item.</p>
              </div>
            </div>
            </AnimateOnScroll>
          </section>
        )}

        {view === "buyer" && (
          <section className="mx-auto max-w-7xl px-6 py-16">
            <AnimateOnScroll>
            <div className="mb-10 mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-heading sm:text-3xl">
                Why Buyers Love NorthLane
              </h2>
              <p className="mt-3 text-base font-normal leading-7 text-muted">
                Shop from any seller without worrying about your money.
              </p>
            </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {buyerWhyCards.map((card) => (
                <div key={card.title} className="w-full rounded-[30px] border border-buyer/20 bg-linear-to-br from-buyer-light to-white dark:to-[#292524] p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)] transition-all duration-300 hover:scale-[1.03] hover:border-buyer/50 hover:from-[#f7e5cc] hover:shadow-[0_24px_50px_-20px_rgba(196,132,45,0.3)]">
                  <p className="text-4xl">{card.icon}</p>
                  <h3 className="mt-4 text-xl font-semibold text-heading">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{card.desc}</p>
                </div>
              ))}
            </div>
            </AnimateOnScroll>
          </section>
        )}

        {view === "buyer" && (
          <section className="mx-auto max-w-7xl px-6 py-16">
            <AnimateOnScroll>
            <div className="mb-10 mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-heading sm:text-3xl">
                Built for Nigerian Buyers
              </h2>
              <p className="mt-3 text-base font-normal leading-7 text-muted">
                Whether you shop on Instagram, WhatsApp, or marketplaces, NorthLane protects your payment.
              </p>
            </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="w-full rounded-[30px] border border-buyer/20 bg-linear-to-br from-buyer-light to-white dark:to-[#292524] p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)] transition-all duration-300 hover:scale-[1.03]">
                <p className="text-4xl">🛍️</p>
                <h3 className="mt-4 text-xl font-semibold text-heading">Social Media Shoppers</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Buy from Instagram and WhatsApp sellers without the fear of losing your money.</p>
              </div>
              <div className="w-full rounded-[30px] border border-buyer/20 bg-linear-to-br from-buyer-light to-white dark:to-[#292524] p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)] transition-all duration-300 hover:scale-[1.03]">
                <p className="text-4xl">🏠</p>
                <h3 className="mt-4 text-xl font-semibold text-heading">Home & Furniture Shoppers</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Pay for large items confidently. Your money releases only when everything arrives as promised.</p>
              </div>
              <div className="w-full rounded-[30px] border border-buyer/20 bg-linear-to-br from-buyer-light to-white dark:to-[#292524] p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)] transition-all duration-300 hover:scale-[1.03]">
                <p className="text-4xl">📱</p>
                <h3 className="mt-4 text-xl font-semibold text-heading">Gadget & Electronics Buyers</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Buy phones, laptops, and consoles from verified sellers. Your payment stays safe until you confirm.</p>
              </div>
              <div className="w-full rounded-[30px] border border-buyer/20 bg-linear-to-br from-buyer-light to-white dark:to-[#292524] p-8 shadow-[0_18px_40px_-24px_rgba(20,33,61,0.2)] transition-all duration-300 hover:scale-[1.03]">
                <p className="text-4xl">🎁</p>
                <h3 className="mt-4 text-xl font-semibold text-heading">Gift & Surprise Buyers</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Send gifts to loved ones without worrying. The seller only gets paid when the recipient confirms delivery.</p>
              </div>
            </div>
            </AnimateOnScroll>
          </section>
        )}

        <FAQ view={view} />

        <Survey view={view} />

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-4xl border border-[#1c1917]/20 bg-[#1c1917] p-8 text-white shadow-[0_10px_40px_-20px_rgba(0,0,0,0.3)] md:flex md:items-center md:justify-between md:p-10 dark:border-[#44403c]/50 dark:bg-[#292524] dark:shadow-[0_10px_40px_-16px_rgba(0,0,0,0.5)]">
            <div className="max-w-2xl">
              <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${view === "seller" ? "text-seller" : "text-[#E8A33D]"}`}>
                {cta.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                {cta.title}
              </h2>
              <p className="mt-3 text-lg leading-8 text-white/80">
                {cta.desc}
              </p>
            </div>

            <div className="mt-6 md:mt-0">
                <Button
                href={cta.btnHref}
                variant={view === "seller" ? "secondary" : "accent"}
              >
                {cta.btnLabel}
              </Button>
            </div>
          </div>
        </section>
        </div>
      </div>
    </main>
  );
}
