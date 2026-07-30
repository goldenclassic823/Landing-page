"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BuyerSellerCard from "../components/BuyerSellerCard";
import FAQ from "../components/FAQ";
import Button from "../components/ui/Button";

export type ViewMode = "overview" | "buyer" | "seller";

export default function Home() {
  const [view, setView] = useState<ViewMode>("overview");

  const ctaContent = {
    overview: {
      eyebrow: "Ready to launch",
      title: "Turn browsing into a trusted payment experience.",
      desc: "Join a marketplace designed for modern buyers, thoughtful sellers, and secure payments built into every exchange.",
      btnLabel: "Create your listing",
      btnHref: "#sell",
    },
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

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-transparent pt-24 text-[#1B1B1B]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_42%)]" />
      <div className="absolute -left-16 top-40 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 top-88 -z-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative">
        <Navbar view={view} onViewChange={setView} />
        <Hero view={view} onViewChange={setView} />
        <BuyerSellerCard view={view} />
        <FAQ view={view} />

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-4xl border border-[#14213D]/10 bg-[#14213D] p-8 text-white shadow-[0_20px_70px_-24px_rgba(20,33,61,0.8)] md:flex md:items-center md:justify-between md:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#E8A33D]">
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
                variant="accent"
                className="bg-white text-[#14213D] hover:bg-[#f2f2f2]"
              >
                {cta.btnLabel}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
