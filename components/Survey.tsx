"use client";

import { useState, useCallback, useRef } from "react";
import type { ViewMode } from "../app/page";

const totalQuestions = 8;

const questions = [
  {
    question: "What platform do you primarily sell on?",
    instruction: "Select all that apply",
    multiple: true,
    options: [
      "Instagram",
      "WhatsApp",
      "Jiji",
      "Facebook Marketplace",
      "My own website",
      "Physical shop + online",
      "Other",
    ],
  },
  {
    question: "What is your biggest challenge as an online seller?",
    instruction: "Select all that apply",
    multiple: true,
    options: [
      "Buyers not trusting me to send first",
      "Buyers disputing after receiving item",
      "Delayed or failed payments",
      "Buyers ghosting after I ship",
      "Managing many transactions manually",
    ],
  },
  {
    question: "How do you currently handle payments from buyers?",
    instruction: "Select all that apply",
    multiple: true,
    options: [
      "Bank transfer",
      "Mobile money",
      "Cash on delivery",
      "Payment link / POS",
      "Crypto",
    ],
  },
  {
    question: "Would you use a platform that holds payment securely until the buyer confirms delivery?",
    instruction: "Select one",
    multiple: false,
    options: [
      "Yes, I trust that model",
      "Maybe, depends on the fee",
      "No, I prefer instant payment",
      "I need to learn more",
    ],
  },
  {
    question: "What would make you feel safer when selling online?",
    instruction: "Select all that apply",
    multiple: true,
    options: [
      "Payment held securely until delivery confirmed",
      "Buyer verified identity",
      "Dispute resolution team",
      "Tracking on every shipment",
      "Clear return and refund policy",
    ],
  },
  {
    question: "What type of items do you sell most often?",
    instruction: "Select all that apply",
    multiple: true,
    options: [
      "Clothing & fashion",
      "Electronics & gadgets",
      "Home & furniture",
      "Beauty & personal care",
      "Food & groceries",
      "Digital products",
      "Services",
    ],
  },
  {
    question: "How many transactions do you complete per month on average?",
    instruction: "Select one",
    multiple: false,
    options: [
      "1 - 5",
      "6 - 20",
      "21 - 50",
      "50+",
      "I have not started selling yet",
    ],
  },
  {
    question: "What would convince you to switch to a new marketplace platform?",
    instruction: "Select all that apply",
    multiple: true,
    options: [
      "Built-in secure payment system",
      "Lower fees than current platform",
      "Buyer and seller protection",
      "Easy listing management",
      "Fast payout to my account",
      "Good customer support",
    ],
  },
];

export default function Survey({ view = "seller" }: { view?: ViewMode }) {
  const [current, setCurrent] = useState(0);
  const [selections, setSelections] = useState<Record<number, string[]>>({});
  const [otherText, setOtherText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [sliding, setSliding] = useState(false);
  const [nextHovered, setNextHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const accent = view === "seller" ? "seller" : "buyer";

  const progress = Math.round(((current + 1) / totalQuestions) * 100);

  const toggle = (option: string) => {
    setSelections((prev) => {
      const q = questions[current];
      const currentSelections = prev[current] || [];
      if (!q.multiple) {
        return {
          ...prev,
          [current]: currentSelections.includes(option) ? [] : [option],
        };
      }
      const updated = currentSelections.includes(option)
        ? currentSelections.filter((o) => o !== option)
        : [...currentSelections, option];
      return { ...prev, [current]: updated };
    });
  };

  const isSelected = (option: string) =>
    (selections[current] || []).includes(option);

  const advance = useCallback(() => {
    if (sliding) return;
    if (current < questions.length - 1) {
      setDirection("left");
      setSliding(true);
      setTimeout(() => {
        setCurrent((prev) => prev + 1);
        setSliding(false);
      }, 250);
    } else {
      setSubmitted(true);
    }
  }, [current, sliding]);

  const goBack = useCallback(() => {
    if (sliding || current === 0) return;
    setDirection("right");
    setSliding(true);
    setTimeout(() => {
      setCurrent((prev) => prev - 1);
      setSliding(false);
    }, 250);
  }, [current, sliding]);

  const q = questions[current];

  if (submitted) {
    return (
    <section id="survey" className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-[40px] bg-card p-8 shadow-[0_30px_100px_-34px_rgba(20,33,61,0.4)] sm:p-10">
        <div className="rounded-3xl border border-card bg-card px-8 py-14 text-center">
          <p className="text-4xl">&#10003;</p>
          <h2 className="mt-4 text-2xl font-semibold text-heading">
            Thank you for your feedback!
          </h2>
          <p className="mt-2 text-muted">
            Your responses help us improve NorthLane.
          </p>
        </div>
      </div>
    </section>
    );
  }

  const selectedItems = selections[current] || [];

  return (
    <section id="survey" className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-[-0.02em] text-heading sm:text-3xl">
          Tell Us What You Need as a Seller
        </h2>
        <p className="mt-3 text-base font-normal leading-7 text-muted">
          2 minutes. Your feedback shapes NorthLane.
        </p>
      </div>

      {selectedItems.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {selectedItems.map((item) => (
            <span
              key={item}
              className={`inline-flex items-center gap-1.5 rounded-full bg-${accent}/15 px-3 py-1 text-xs font-medium text-${accent}`}
            >
              {item}
              <button
                type="button"
                onClick={() => toggle(item)}
                className="ml-0.5 cursor-pointer leading-none hover:text-white"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="rounded-[40px] bg-card p-8 shadow-[0_30px_100px_-34px_rgba(20,33,61,0.4)] sm:p-10">
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-muted">
          <span>Question <span className={`text-${accent}`}>{current + 1}</span> of {totalQuestions}</span>
          <span className={`text-${accent}`}>{progress}% Completed</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-[#44403c]">
          <div
            className={`h-full rounded-full bg-${accent} transition-all duration-300`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className={`transition-all duration-250 ${
            sliding
              ? direction === "left"
                ? "-translate-x-8 opacity-0"
                : "translate-x-8 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
           <p className="text-lg font-medium text-heading">{q.question}</p>
          {q.instruction && (
            <p className="mt-1 text-sm text-muted">{q.instruction}</p>
          )}

          <div className="mt-6 space-y-3">
            {q.options.map((option) => {
              const selected = isSelected(option);
              return (
                <button
                  type="button"
                  key={option}
                  onClick={() => toggle(option)}
                  className={`flex w-full cursor-pointer items-center gap-4 rounded-2xl border px-5 py-4 text-left text-sm font-medium transition duration-200 ${
                    selected
                      ? `border-${accent} bg-${accent}/10 text-${accent}`
                      : `border-gray-200 text-muted hover:border-${accent}/50 hover:text-heading dark:border-gray-600`
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center border transition ${
                      q.multiple ? "rounded-md" : "rounded-full"
                    } ${
                      selected
                        ? `border-${accent} bg-${accent} text-white`
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    {selected && q.multiple && (
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 12 12">
                        <path stroke="currentColor" strokeWidth="2" d="M2 6l3 3 5-5" />
                      </svg>
                    )}
                    {selected && !q.multiple && (
                      <span className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          {q.options.includes("Other") && isSelected("Other") && (
            <input
              type="text"
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              placeholder="Please specify..."
              className={`mt-3 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm text-heading placeholder-gray-400 outline-none transition focus:border-${accent}/50 dark:border-gray-600 dark:bg-[#1c1917]`}
            />
          )}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        {current > 0 && (
          <button
            type="button"
            onClick={goBack}
            className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-muted transition hover:text-heading"
          >
            ← Back
          </button>
        )}
        <div className={current > 0 ? "" : "ml-auto"}>
          <button
            type="button"
            onClick={advance}
            disabled={selectedItems.length === 0}
            onMouseEnter={() => setNextHovered(true)}
            onMouseLeave={() => setNextHovered(false)}
            style={{
              backgroundColor: selectedItems.length === 0
                ? `${accent === "seller" ? "#0B6E70" : "#C4842D"}66`
                : nextHovered
                  ? accent === "seller" ? "#0A5F61" : "#AD7530"
                  : accent === "seller" ? "#0B6E70" : "#C4842D",
              color: selectedItems.length === 0 ? "#00000080" : "white",
              cursor: selectedItems.length === 0 ? "not-allowed" : "pointer",
            }}
            className="rounded-full px-8 py-3 text-sm font-semibold shadow-sm transition duration-200"
          >
            {current < questions.length - 1 ? "Next →" : "Submit"}
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
