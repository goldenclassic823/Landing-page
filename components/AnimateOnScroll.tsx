"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimateOnScroll({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      if (done.current) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        done.current = true;
        setVisible(true);
      }
    };

    const initTimer = setTimeout(check, 100);

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `all 0.7s ease-out ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(2rem)",
      }}
    >
      {children}
    </div>
  );
}
