"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(".skills-reveal"), {
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
      id="skills"
      ref={sectionRef}
      className="px-[6vw] py-[12vh] md:px-[8vw] md:py-[15vh] lg:px-[10vw]"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="skills-reveal mb-12">
          <p className="section-eyebrow mb-6">02 — Stack &amp; Skills</p>
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] font-light leading-tight text-ink">
            Tools for <span className="italic text-muted">building</span> and{" "}
            <span className="italic text-muted">deploying</span> intelligent systems.
          </h2>
        </div>

        <div className="skills-reveal grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="group flex flex-col gap-4 bg-canvas p-6 transition-colors duration-300 hover:bg-surface/60 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.12em] text-inkSoft">
                  {group.label}
                </span>
                <span className="font-mono text-[0.68rem] text-muted">{group.count}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag-chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
