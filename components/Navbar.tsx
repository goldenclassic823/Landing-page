"use client";

import type { ViewMode } from "../app/page";

type NavbarProps = {
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
};

export default function Navbar({ view, onViewChange }: NavbarProps) {
  const isActive = (v: ViewMode) => view === v;

  return (
    <nav className="fixed inset-x-0 top-0 z-30 border-b border-[#14213D]/10 bg-[#fcf8f1]/95 shadow-[0_10px_40px_-20px_rgba(20,33,61,0.25)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            onViewChange("overview");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-semibold tracking-[0.01em] text-[#1f2a37]"
        >
          North<span className="text-[#5d745e]">Lane</span>
        </a>

        <div className="hidden items-center gap-3 text-sm font-medium md:flex">
          <button
            onClick={() => {
              onViewChange("seller");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`rounded-full px-4 py-2 transition duration-200 ${
              isActive("seller")
                ? "bg-[#f3eadf] text-[#4C7A5E]"
                : "text-[#1f2a37]/80 hover:bg-[#f3eadf] hover:text-[#4C7A5E]"
            }`}
          >
            For sellers
          </button>
          <button
            onClick={() => {
              onViewChange("buyer");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`rounded-full px-4 py-2 transition duration-200 ${
              isActive("buyer")
                ? "bg-[#f3eadf] text-[#4C7A5E]"
                : "text-[#1f2a37]/80 hover:bg-[#f3eadf] hover:text-[#4C7A5E]"
            }`}
          >
            For buyers
          </button>
        </div>

        <button
          onClick={() => {
            onViewChange("overview");
            const target = document.querySelector("#how");
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="rounded-full border border-[#1f2a37]/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#1f2a37] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#f7f2e8]"
        >
          Join waitlist
        </button>
      </div>
    </nav>
  );
}
