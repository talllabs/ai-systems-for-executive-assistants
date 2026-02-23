"use client";

import { useEffect, useRef } from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  animate = true,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!animate) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const targets = el.querySelectorAll(".fade-in");
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [animate]);

  return (
    <section id={id} ref={ref} className={`py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}
