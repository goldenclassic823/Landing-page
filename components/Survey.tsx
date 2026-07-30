"use client";

import { useState } from "react";

const questions = [
  {
    question: "Are you here to buy or sell?",
    options: ["Buy", "Sell", "Both", "Just browsing"],
  },
  {
    question: "What type of items interest you?",
    options: ["Electronics", "Fashion", "Home & Garden", "Collectibles", "Other"],
  },
  {
    question: "How did you hear about us?",
    options: ["Social media", "Friend or family", "Search engine", "Ad", "Other"],
  },
  {
    question: "What matters most to you?",
    options: ["Security", "Price", "Variety", "Speed", "All of the above"],
  },
];

export default function Survey() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [customText, setCustomText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const select = (qIndex: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-14 backdrop-blur-sm">
          <p className="text-4xl">&#10003;</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Thank you for your feedback!
          </h2>
          <p className="mt-2 text-slate-100/70">
            Your responses help us improve the platform.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="survey" className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
          We want to hear from you
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
          Help us improve
        </h2>
        <p className="mt-3 text-lg leading-8 text-slate-100/80">
          Answer a few quick questions and help us build a better marketplace.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {questions.map((q, qIndex) => (
          <div key={qIndex}>
            <p className="mb-3 text-sm font-medium text-white/80">
              {q.question}
            </p>
            <div className="flex flex-wrap gap-2">
              {q.options.map((option) => {
                const selected = answers[qIndex] === option;
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() => select(qIndex, option)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-200 ${
                      selected
                        ? "border-[#b68134] bg-[#b68134]/20 text-[#E8A33D]"
                        : "border-white/15 text-slate-100/70 hover:border-white/30 hover:text-white/90"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div>
          <p className="mb-3 text-sm font-medium text-white/80">
            Anything else you would like to share?
          </p>
          <textarea
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Write your thoughts here..."
            rows={4}
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-slate-100/40 backdrop-blur-sm outline-none transition focus:border-[#b68134]/50"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="rounded-full bg-[#b68134] px-8 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#a5722e]"
          >
            Submit feedback
          </button>
        </div>
      </form>
    </section>
  );
}
