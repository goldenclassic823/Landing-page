"use client";

import type { ViewMode } from "../app/page";
import ThemeToggle from "./ThemeToggle";

type NavbarProps = {
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
};

export default function Navbar({ view, onViewChange }: NavbarProps) {
  return (
    <nav className="fixed inset-x-0 top-0 z-30 border-b border-[#111827]/10 bg-[#fcf8f1]/95 shadow-[0_10px_40px_-20px_rgba(17,24,39,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-[#1c1917]/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-1.5 text-xl font-semibold tracking-[0.01em] text-heading"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-seller">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
          North<span className="text-seller">Lane</span>
        </a>

        <div className="relative hidden items-center md:flex">
          <div className="relative flex rounded-full bg-[#f3eadf]/60 p-0.5 dark:bg-[#292524]/60">
            <div
              className={`absolute top-0.5 h-[calc(100%-4px)] w-1/2 rounded-full bg-white shadow-sm transition-all duration-300 dark:bg-[#44403c] ${
                view === "seller" ? "left-0.5" : "left-[calc(50%-2px)]"
              }`}
            />
            <button onClick={() => onViewChange("seller")}
              className={`relative z-10 cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                view === "seller" ? "text-seller" : "text-heading/60"
              }`}
            >
              For sellers
            </button>
            <button onClick={() => onViewChange("buyer")}
              className={`relative z-10 cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                view === "buyer" ? "text-buyer" : "text-heading/60"
              }`}
            >
              For buyers
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => {
              const target = document.querySelector("#how");
              if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="cursor-pointer rounded-full border border-[#1f2a37]/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#1f2a37] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#f7f2e8] dark:border-white/10 dark:bg-[#292524] dark:text-white/80 dark:hover:bg-[#33302e]"
          >
            Join Waitlist→
          </button>
        </div>
      </div>
    </nav>
  );
}
