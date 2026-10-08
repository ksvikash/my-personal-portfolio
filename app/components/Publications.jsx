"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { publications, leadership } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

function MonogramBadge({ monogram }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-lineLight bg-surface font-mono text-[0.7rem] font-medium text-inkSoft transition-colors duration-300 group-hover:border-accent group-hover:text-accent md:h-14 md:w-14 md:text-[0.8rem]">
      {monogram}
    </div>
  );
}

export default function Publications() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(".pub-reveal"), {
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="relative overflow-hidden px-[6vw] py-[12vh] md:px-[8vw] md:py-[15vh] lg:px-[10vw]"
    >
      {/* Grid overlay */}
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      {/* Blue radial glow */}
      <div
        className="pointer-events-none absolute -right-10 top-1/4 h-[50vh] w-[50vh] rounded-full opacity-30 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(75,134,247,0.4) 0%, transparent 65%)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="pub-reveal mb-12">
          <p className="section-eyebrow mb-6">05 — Publications &amp; Awards</p>
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] font-light leading-tight text-ink">
            Peer-reviewed work, <span className="italic text-accent">recognized at IEEE.</span>
          </h2>
        </div>

        {/* Publications */}
        <div className="flex flex-col gap-8">
          {publications.map((pub, i) => (
            <div
              key={i}
              className="pub-reveal grid grid-cols-1 gap-6 border-b border-line pb-8 md:grid-cols-[280px_1fr] md:gap-10"
            >
              {/* Left column — meta */}
              <div className="flex flex-col gap-3">
                <span className="tag-chip w-fit">{pub.type}</span>
                <span className="w-fit rounded-full border border-warning/30 bg-warning/10 px-3 py-1 font-mono text-[0.65rem] font-medium text-warning">
                  {pub.award}
                </span>
                <span className="font-mono text-[0.7rem] text-muted">
                  {pub.venue} · {pub.year}
                </span>
              </div>

              {/* Right column — content */}
              <div className="flex flex-col gap-3">
                <h3 className="font-serif text-[1.3rem] font-light leading-snug text-ink md:text-[1.5rem]">
                  {pub.title}
                </h3>
                <p className="font-mono text-[0.68rem] text-muted">{pub.authors}</p>
                <p className="text-[0.9rem] leading-relaxed text-inkSoft">
                  {pub.abstract}
                </p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="mt-2 inline-flex w-fit items-center gap-1 font-mono text-[0.72rem] font-medium uppercase tracking-[0.1em] text-accent transition-colors hover:text-ink"
                >
                  Read on IEEE Xplore ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & Extracurriculars */}
        <div className="pub-reveal mt-16">
          <p className="section-eyebrow mb-8">Leadership &amp; Extracurriculars</p>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
            {leadership.map((item, i) => (
              <div
                key={i}
                className="group flex flex-col gap-4 bg-canvas p-6 transition-colors duration-300 hover:bg-surface/50"
              >
                <div className="flex items-start gap-4">
                  <MonogramBadge monogram={item.monogram} />
                  <div className="flex min-w-0 flex-col gap-1">
                    <span className="text-[0.95rem] text-ink">{item.role}</span>
                    <span className="font-mono text-[0.68rem] text-muted">{item.org}</span>
                    <span className="font-mono text-[0.62rem] text-mutedSoft">{item.period}</span>
                  </div>
                </div>
                <p className="text-[0.85rem] leading-relaxed text-inkSoft">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
