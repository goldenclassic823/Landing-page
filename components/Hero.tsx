"use client";

import Image from "next/image";
import Button from "./ui/Button";

const highlights = [
  { value: "10k+", label: "verified listings" },
  { value: "98%", label: "secure handoffs" },
  { value: "24/7", label: "buyer support" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&auto=format&fit=crop",
    alt: "Elegant retail display",
  },
  {
    src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&auto=format&fit=crop",
    alt: "Buyer and seller connecting",
  },
  {
    src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&auto=format&fit=crop",
    alt: "Secure transaction experience",
  },
];

const scrollTo = (id: string) => {
  const target = document.querySelector(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function Hero() {

  return (
    <section className="relative px-6 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px] bg-white/20 p-6 shadow-[0_30px_100px_-34px_rgba(20,33,61,0.3)] sm:p-8 lg:p-10 backdrop-blur-sm">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_44%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_45%,transparent_100%)]" />
          <div className="absolute -right-8 -top-8 -z-10 h-48 w-48 rounded-full bg-white/12 blur-3xl" />

          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <h1 className="mt-0 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white/90 sm:text-5xl lg:text-6xl">
                A trusted place to buy, sell, and complete payments online.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100/80">
                Buy, sell, and pay securely with a marketplace built for trusted
                connections and smooth transactions from start to finish.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button onClick={() => scrollTo("#how")} variant="primary">
                  Take the seller survey
                </Button>
                <a href="/how it work">How it work</a>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="min-w-37.5 bg-white/75 px-4 py-3 shadow-sm backdrop-blur"
                  >
                    <p className="text-xl font-semibold text-[#0f172a]">
                      {item.value}
                    </p>
                    <p className="text-sm text-[#334155]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-0 shadow-none backdrop-blur-none">
              <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                <div className="overflow-hidden bg-white/60 shadow-none">
                  <div className="relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&auto=format&fit=crop"
                      alt="A polished marketplace experience"
                      className="h-105 w-full object-cover"
                      width={1200}
                      height={620}
                    />
                    <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/70 to-transparent" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.28),transparent_40%,rgba(255,255,255,0.15))]" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {galleryImages.slice(0, 2).map((image) => (
                    <div
                      key={image.alt}
                      className="overflow-hidden bg-white/60 shadow-none"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          className="h-50 w-full object-cover"
                          width={600}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_50%,rgba(255,255,255,0.12))]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 bg-white/70 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8a5f16]">
                      Secure payments
                    </p>
                    <p className="mt-1 text-lg font-semibold text-[#1f2a37]">
                      From listing to payment, everything stays protected
                    </p>
                  </div>
                  <span className="inline-flex w-fit rounded-full bg-[#b68134]/20 px-3 py-1 text-sm font-medium text-[#8a5f16]">
                    4-step process
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
