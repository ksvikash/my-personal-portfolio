"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "motion/react";
import { hero, person } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rootRef = useRef(null);
  const contentRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % hero.rotatingWords.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { opacity: 0, y: 16, duration: 0.6 }, 0)
        .from(".hero-headline", { opacity: 0, y: 24, duration: 0.7 }, 0.15)
        .from(".hero-sub", { opacity: 0, y: 12, duration: 0.5 }, 0.35)
        .from(".hero-terminal", { opacity: 0, y: 16, duration: 0.5 }, 0.45)
        .from(".hero-scroll", { opacity: 0, y: 8, duration: 0.5 }, 0.6);

      const heroEl = rootRef.current;
      if (heroEl && contentRef.current) {
        gsap.to(contentRef.current, {
          scrollTrigger: {
            trigger: heroEl,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
          opacity: 0,
          scale: 0.96,
          filter: "blur(5px)",
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-[6vw] pb-32 pt-28 md:px-[8vw] md:pt-32 lg:px-[10vw]"
    >
      {/* Ambient background gradients */}
      <div
        className="pointer-events-none fixed inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(75,134,247,0.12) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(34,197,94,0.06) 0%, transparent 50%), radial-gradient(ellipse 70% 50% at 50% 100%, rgba(75,134,247,0.08) 0%, transparent 55%)",
        }}
        aria-hidden
      />

      {/* Grid overlay */}
      <div className="bg-grid pointer-events-none fixed inset-0 -z-10 opacity-60" aria-hidden />

      <div
        ref={contentRef}
        className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center"
      >
        {/* Availability badge */}
        <div className="hero-badge mb-8 inline-flex items-center gap-2.5 rounded-full border border-success/30 bg-success/10 px-4 py-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.15em] text-success sm:mb-10 sm:text-[0.72rem]">
          <span
            className="relative h-2 w-2 rounded-full bg-success shadow-[0_0_10px_rgba(34,197,94,0.7)] animate-pulseDot"
            aria-hidden
          />
          Open to Work · {person.location}
        </div>

        {/* Headline */}
        <h1 className="hero-headline font-serif text-[clamp(2rem,7vw,3.5rem)] font-light leading-[1.15] lg:text-[clamp(2.5rem,5.5vw,4.5rem)]">
          Building{" "}
          <span className="inline-block min-w-0 text-accent">
            <AnimatePresence mode="wait">
              <motion.span
                key={hero.rotatingWords[wordIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="inline-block whitespace-nowrap italic"
              >
                {hero.rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          AI systems.
        </h1>

        {/* Subtitle */}
        <p className="hero-sub mt-6 max-w-xl font-mono text-[0.72rem] tracking-[0.05em] text-inkSoft sm:text-[0.78rem]">
          {hero.subtitle}
        </p>

        {/* Terminal strip */}
        <div className="hero-terminal mt-10 flex w-full max-w-md items-center gap-3 rounded-lg border border-line bg-term px-4 py-3 sm:max-w-lg">
          <div className="flex shrink-0 gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
          </div>
          <span className="truncate font-mono text-[0.7rem] text-inkSoft sm:text-[0.75rem]">
            ~/vikash $ deploy intelligent-systems
          </span>
          <span className="caret shrink-0" aria-hidden />
        </div>
      </div>

      {/* Stack marquee */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-line bg-surface/50 py-4 backdrop-blur-sm">
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-8 px-4">
            {[...hero.stack, ...hero.stack].map((tech, i) => (
              <span
                key={i}
                className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted"
              >
                {tech}
                <span className="ml-8 text-lineLight">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-20 z-10 flex justify-center px-[6vw] md:bottom-24 md:px-[8vw] lg:px-[10vw]">
        <p className="hero-scroll text-center font-mono text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted animate-scrollHint sm:text-[0.65rem]">
          ↓ Scroll
        </p>
      </div>
    </section>
  );
}
