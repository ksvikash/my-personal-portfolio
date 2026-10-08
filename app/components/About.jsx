"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { about, experienceItems, person } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

function BioParagraph({ parts }) {
  return (
    <p className="font-serif text-[1.3rem] font-light leading-[1.5] text-ink/90 lg:text-[1.7rem] lg:leading-[1.4]">
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <span key={i} className="italic text-accent">
            {part.highlight}
          </span>
        )
      )}
    </p>
  );
}

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(".about-reveal"), {
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex min-h-screen flex-col justify-center px-[6vw] py-[12vh] md:px-[8vw] md:py-[15vh] lg:px-[10vw]"
    >
      <div className="mx-auto w-full max-w-[640px]">
        <p className="about-reveal section-eyebrow mb-10">
          01 — About
        </p>

        <div className="about-reveal flex flex-col gap-8">
          {about.paragraphs.map((p, idx) => (
            <BioParagraph key={idx} parts={p.parts} />
          ))}
        </div>

        <p className="about-reveal mt-8 font-mono text-[0.7rem] leading-relaxed text-muted">
          {about.educationNote}
        </p>

        {/* Experience list */}
        <div className="about-reveal mt-14">
          <p className="mb-6 section-eyebrow">
            Experience
          </p>
          <ul className="flex flex-col">
            {experienceItems.map((row, i) => (
              <li
                key={i}
                className="group flex flex-col gap-2 border-b border-line py-5 transition-colors duration-300 hover:bg-surface/40 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[0.95rem] text-ink">{row.role}</span>
                  <span className="font-mono text-[0.68rem] text-muted">{row.company}</span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {row.tags.map((tag) => (
                      <span key={tag} className="tag-chip">{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="shrink-0 font-mono text-[0.68rem] text-muted sm:pt-1">
                  {row.date}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="about-reveal mt-10 flex flex-wrap items-center gap-4">
          <Link
            href={person.cvPath}
            target="_blank"
            data-cursor-hover
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3 text-[0.85rem] font-medium text-canvas transition-transform duration-300 ease-smooth hover:scale-105"
          >
            <span>View Full CV</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-2 rounded-full border border-lineLight px-7 py-3 font-mono text-[0.75rem] font-medium uppercase tracking-[0.1em] text-inkSoft transition-all duration-300 hover:border-accent hover:text-ink"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
