"use client";

import { useState } from "react";
import type { ViewMode } from "../app/page";

const allFaqs = [
  { role: "buyer", question: "How do I receive my product after purchasing?", answer: "Once you place an order, the seller ships the item directly to the address you provide. You will receive tracking information so you can follow the delivery every step of the way." },
  { role: "both", question: "Does the platform handle shipping?", answer: "Shipping is arranged between the buyer and seller. We provide guidelines and recommend tracked shipping to ensure both parties have visibility on delivery status." },
  { role: "buyer", question: "Can I return an item if I am not satisfied?", answer: "Returns are handled between the buyer and seller based on the listing terms. If you cannot reach an agreement, our support team can step in to help find a fair resolution." },
  { role: "both", question: "How does the platform protect my payment?", answer: "Your payment is held securely on the platform until you confirm that you have received the item and are satisfied. This protects both buyers and sellers throughout the exchange." },
  { role: "seller", question: "How do I start selling on Marketstand?", answer: "Create a listing in minutes with photos, a description, and your price. Once approved, your item will be visible to buyers on the platform." },
  { role: "buyer", question: "How do I know the product quality before buying?", answer: "Each listing includes photos, a detailed description, and the seller's reputation score. You can also message the seller directly through the platform if you have specific questions." },
  { role: "both", question: "Is there a fee for using the platform?", answer: "We charge a small transaction fee on completed sales. Listing items and browsing are completely free for everyone." },
  { role: "seller", question: "How long does it take to receive my payment as a seller?", answer: "Payments are released to your account within 1–2 business days after the buyer confirms receipt and satisfaction with the product." },
  { role: "both", question: "Is my personal information safe on the platform?", answer: "Yes. Your personal information is encrypted and never shared with third parties. We follow strict security practices to keep your data safe." },
  { role: "both", question: "What happens if there is an issue with my order?", answer: "Our support team mediates disputes and ensures a fair resolution. Both parties can submit evidence and we review each case thoroughly before making a decision." },
];

type FAQProps = {
  view: ViewMode;
};

export default function FAQ({ view }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = view === "overview"
    ? allFaqs
    : allFaqs.filter((f) => f.role === view || f.role === "both");

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
          Questions?
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
          {view === "overview" ? "Frequently asked questions" : view === "buyer" ? "Questions from buyers" : "Questions from sellers"}
        </h2>
        <p className="mt-3 text-lg leading-8 text-slate-100/80">
          {view === "overview"
            ? "Everything you need to know about buying, selling, and staying secure on Marketstand."
            : view === "buyer"
              ? "Common questions buyers ask about shopping on Marketstand."
              : "Common questions sellers ask about listing and selling on Marketstand."}
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-medium text-white/90 transition hover:text-white"
            >
              <span>{faq.question}</span>
              <span
                className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 text-lg transition duration-200 ${
                  openIndex === index
                    ? "rotate-45 bg-[#b68134] text-white"
                    : "text-white/60"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-slate-100/80">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
