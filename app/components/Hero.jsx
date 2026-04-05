"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "motion/react";
import { hero } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

const BLOBS = [
  {
    className:
      "left-[-25%] top-[-15%] h-[70vw] max-h-[900px] w-[70vw] max-w-[900px] bg-gradient-to-br from-lavender via-accent/35 to-ice",
  },
  {
    className:
      "left-[35%] top-[-20%] h-[60vw] max-h-[780px] w-[60vw] max-w-[780px] bg-gradient-to-br from-ice via-cream/80 to-lavender/90",
  },
  {
    className:
      "left-[-15%] top-[25%] h-[55vw] max-h-[720px] w-[55vw] max-w-[720px] bg-gradient-to-br from-cream via-lavender/95 to-accent/25",
  },
  {
    className:
      "left-[15%] top-[55%] h-[65vw] max-h-[820px] w-[65vw] max-w-[820px] bg-gradient-to-br from-lavender/90 via-ice to-cream/70",
  },
];

export default function Hero() {
  const rootRef = useRef(null);
  const contentRef = useRef(null);
  const blobsRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % hero.rotatingWords.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { opacity: 0, y: 16, duration: 0.6 }, 0)
        .from(".hero-label", { opacity: 0, y: 12, duration: 0.5 }, 0.15)
        .from(".hero-headline", { opacity: 0, y: 24, duration: 0.7 }, 0.25)
        .from(".hero-sub", { opacity: 0, y: 12, duration: 0.5 }, 0.45)
        .from(".hero-scroll", { opacity: 0, y: 8, duration: 0.5 }, 0.6);

      const heroEl = rootRef.current;
      const blobs = blobsRef.current;
      if (heroEl && contentRef.current) {
        gsap.to(contentRef.current, {
          scrollTrigger: {
            trigger: heroEl,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
          opacity: 0,
          scale: 0.95,
          filter: "blur(5px)",
        });
      }
      if (blobs) {
        const blobNodes = blobs.querySelectorAll("[data-blob]");
        blobNodes.forEach((el, i) => {
          gsap.to(el, {
            scrollTrigger: {
              trigger: heroEl,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
            y: `${-30 + i * 5}%`,
            scale: 0.75,
            opacity: 0.12,
          });
        });
        blobNodes.forEach((el, i) => {
          gsap.to(el, {
            scrollTrigger: {
              trigger: heroEl,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            x: `${(i % 2 === 0 ? -1 : 1) * 3}%`,
          });
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-[100dvh] min-h-screen flex-col items-center justify-center overflow-hidden px-[6vw] pb-12 pt-24 md:px-[8vw] md:pt-28 lg:px-[10vw]"
    >
      {/* Base mesh — stronger ambient gradient flow */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-br from-lavender/55 via-canvas via-ice/40 to-cream/45"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-20 opacity-95"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 10% 10%, rgba(232,213,247,0.95) 0%, transparent 55%), radial-gradient(ellipse 80% 60% at 90% 20%, rgba(213,232,247,0.85) 0%, transparent 50%), radial-gradient(ellipse 70% 50% at 50% 100%, rgba(247,232,213,0.75) 0%, transparent 55%), radial-gradient(ellipse 60% 45% at 70% 60%, rgba(75,134,247,0.22) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <div
        ref={blobsRef}
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        {BLOBS.map((b, i) => (
          <div
            key={i}
            data-blob
            className={`absolute rounded-full opacity-[0.72] blur-[90px] animate-blobFloat ${b.className}`}
            style={{ animationDelay: `${i * 2.5}s` }}
          />
        ))}
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center"
      >
        <div className="hero-badge mb-8 inline-flex items-center gap-[0.6rem] rounded-full border border-[#22C55E40] bg-[#22C55E15] px-4 py-2 text-[0.75rem] font-medium text-successDark sm:mb-12 sm:text-[0.8rem]">
          <span
            className="relative h-2.5 w-2.5 rounded-full bg-success shadow-[0_0_12px_rgba(34,197,94,0.7)] animate-pulseDot"
            aria-hidden
          />
          Open to Work
        </div>

        <p className="hero-label mb-6 text-[0.8rem] font-normal uppercase tracking-[0.2em] text-muted sm:mb-8 sm:text-[0.85rem]">
          Vikash Kalyani Sankararaman
        </p>

        <h1 className="hero-headline font-serif text-[clamp(2rem,8vw,3.5rem)] font-light leading-[1.1] lg:text-[clamp(2.5rem,6vw,5rem)]">
          Building for{" "}
          <span className="inline-block min-w-0 text-accent lg:min-w-[200px] xl:min-w-[240px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={hero.rotatingWords[wordIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="inline-block whitespace-nowrap"
              >
                {hero.rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          AI
        </h1>

        <p className="hero-sub mt-6 text-[0.85rem] tracking-[0.05em] text-muted sm:mt-8 sm:text-[0.9rem]">
          {hero.subtitle}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-16 z-10 flex justify-center px-[6vw] md:bottom-24 md:px-[8vw] lg:px-[10vw]">
        <p className="hero-scroll text-center text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ink/50 animate-scrollHint sm:text-[0.7rem]">
          Scroll to explore
        </p>
      </div>
    </section>
  );
}
