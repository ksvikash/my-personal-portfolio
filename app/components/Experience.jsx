"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceItems } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(".experience-reveal"), {
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
      id="experience"
      ref={sectionRef}
      className="px-[6vw] py-[12vh] md:px-[8vw] md:py-[15vh] lg:px-[10vw]"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="experience-reveal mb-12">
          <p className="section-eyebrow mb-6">
            03 — Experience
          </p>

          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] font-light leading-tight text-ink">
            Work that shaped{" "}
            <span className="italic text-muted">my practice.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-line bg-line">
          {experienceItems.map((experience, i) => (
            <div
              key={i}
              className="experience-reveal group flex flex-col gap-6 bg-canvas p-6 transition-colors duration-300 hover:bg-surface/50 md:flex-row md:items-start md:gap-8 md:p-8"
            >
              <div className="shrink-0 md:w-32">
                <span className="font-mono text-[0.68rem] text-muted">
                  {experience.date}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-[1.2rem] font-light text-ink md:text-[1.4rem]">
                    {experience.role}
                  </h3>

                  <p className="text-[0.9rem] text-inkSoft">
                    {experience.company}
                  </p>
                </div>

                {experience.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {experience.tags.map((tag) => (
                      <span key={tag} className="tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}