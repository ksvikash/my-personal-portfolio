"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(".edu-reveal"), {
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="px-[6vw] py-[12vh] md:px-[8vw] md:py-[15vh] lg:px-[10vw]"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="edu-reveal mb-12">
          <p className="section-eyebrow mb-6">02 — Education</p>
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] font-light leading-tight text-ink">
            Academic <span className="italic text-muted">foundations.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-line bg-line">
          {education.map((edu, i) => (
            <div
              key={i}
              className="edu-reveal group flex flex-col gap-6 bg-canvas p-6 transition-colors duration-300 hover:bg-surface/50 md:flex-row md:items-start md:gap-8 md:p-8"
            >
              {/* Logo */}
              <div className="flex shrink-0 items-center justify-center rounded-lg border border-line bg-surface p-4 md:h-20 md:w-28">
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="max-h-12 max-w-full opacity-90"
                />
              </div>

              {/* Main content */}
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-[1.2rem] font-light text-ink md:text-[1.4rem]">
                    {edu.institution}
                  </h3>
                  <p className="text-[0.9rem] text-inkSoft">{edu.degree}</p>
                  <p className="font-mono text-[0.68rem] text-muted">
                    {edu.location} · {edu.period}
                  </p>
                </div>

                {/* Coursework */}
                <div className="mt-2">
                  <p className="mb-2 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span key={course} className="tag-chip">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
