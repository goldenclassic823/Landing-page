"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#how", label: "Overview" },
  { href: "#sell", label: "For sellers" },
  { href: "#buy", label: "For buyers" },
] as const;

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#how");

  useEffect(() => {
    const sectionIds = ["how", "sell", "buy"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          const id = visibleEntry.target.id;
          const nextLink =
            id === "how" ? "#how" : id === "sell" ? "#sell" : "#buy";
          setActiveLink(nextLink);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-30 border-b border-[#14213D]/10 bg-[#fcf8f1]/95 shadow-[0_10px_40px_-20px_rgba(20,33,61,0.25)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setActiveLink("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-semibold tracking-[0.01em] text-[#1f2a37]"
        >
          North<span className="text-[#5d745e]">Lane</span>
        </a>

        <div className="hidden items-center gap-3 text-sm font-medium md:flex">
          {links.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  setActiveLink(link.href);
                  const target = document.querySelector(link.href);
                  if (target) {
                    target.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className={`rounded-full px-4 py-2 transition duration-200 ${
                  isActive
                    ? "bg-[#f3eadf] text-[#4C7A5E]"
                    : "text-[#1f2a37]/80 hover:bg-[#f3eadf] hover:text-[#4C7A5E]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          href="#how"
          className="rounded-full border border-[#1f2a37]/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#1f2a37] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#f7f2e8]"
        >
          Get started
        </a>
      </div>
    </nav>
  );
}
