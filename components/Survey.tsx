"use client";

import { useState, useCallback, useEffect, useRef } from "react";

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
];

export default function Survey() {
  const [current, setCurrent] = useState(0);
  const [selections, setSelections] = useState<Record<number, string[]>>({});
  const [otherText, setOtherText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [sliding, setSliding] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const progress = Math.round(((current + 1) / totalQuestions) * 100);

  const toggle = (option: string) => {
    setSelections((prev) => {
      const currentSelections = prev[current] || [];
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
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-14 text-center backdrop-blur-sm">
          <p className="text-4xl">&#10003;</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Thank you for your feedback!
          </h2>
          <p className="mt-2 text-slate-100/70">
            Your responses help us improve SafeSwap.
          </p>
        </div>
      </section>
    );
  }

  const selectedItems = selections[current] || [];

  return (
    <section id="survey" className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-2">
        <a
          href="#how"
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector("#how");
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="text-sm text-slate-100/60 underline underline-offset-4 transition hover:text-white/90"
        >
          How NorthLane works
        </a>
      </div>

      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
          Tell Us What You Need as a Seller
        </p>
        <p className="mt-2 text-sm text-slate-100/60">
          2 minutes. Your feedback shapes SafeSwap.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-slate-100/60">
          <span>Question {current + 1} of {totalQuestions}</span>
          <span>{progress}% Completed</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#b68134] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {selectedItems.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {selectedItems.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#b68134]/15 px-3 py-1 text-xs font-medium text-[#E8A33D]"
            >
              {item}
              <button
                type="button"
                onClick={() => toggle(item)}
                className="ml-0.5 leading-none hover:text-white"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      )}

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
          <p className="text-lg font-medium text-white">{q.question}</p>
          {q.instruction && (
            <p className="mt-1 text-sm text-slate-100/60">{q.instruction}</p>
          )}

          <div className="mt-6 space-y-3">
            {q.options.map((option) => {
              const selected = isSelected(option);
              return (
                <button
                  type="button"
                  key={option}
                  onClick={() => toggle(option)}
                  className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left text-sm font-medium transition duration-200 ${
                    selected
                      ? "border-[#b68134] bg-[#b68134]/10 text-[#E8A33D]"
                      : "border-white/10 text-slate-100/80 hover:border-white/25 hover:text-white"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
                      selected
                        ? "border-[#b68134] bg-[#b68134] text-white"
                        : "border-white/20"
                    }`}
                  >
                    {selected && (
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 12 12">
                        <path stroke="currentColor" strokeWidth="2" d="M2 6l3 3 5-5" />
                      </svg>
                    )}
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          {isSelected("Other") && (
            <input
              type="text"
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              placeholder="Please specify..."
              className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-slate-100/40 outline-none transition focus:border-[#b68134]/50"
            />
          )}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={goBack}
          className={`rounded-full border px-6 py-3 text-sm font-semibold transition ${
            current === 0
              ? "border-white/5 text-slate-100/30"
              : "border-white/20 text-slate-100/70 hover:border-white/40 hover:text-white"
          }`}
          disabled={current === 0}
        >
          Back
        </button>

        <button
          type="button"
          onClick={advance}
          className="rounded-full bg-[#b68134] px-8 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#a5722e]"
        >
          {current < questions.length - 1 ? "Next" : "Submit"}
        </button>
      </div>
    </section>
  );
}
