"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { about, experienceItems, person } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

function BioParagraph({ parts }) {
  return (
    <p className="font-serif text-[1.4rem] font-light leading-[1.45] text-ink lg:text-[1.8rem] lg:leading-[1.4]">
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <span key={i} className="text-muted">
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
      <div className="mx-auto w-full max-w-[600px]">
        <p className="about-reveal mb-8 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-muted">
          ABOUT
        </p>

        <div className="about-reveal flex flex-col gap-10">
          {about.paragraphs.map((p, idx) => (
            <BioParagraph key={idx} parts={p.parts} />
          ))}
        </div>

        <p className="about-reveal mt-10 text-[0.8rem] leading-relaxed text-muted/90">
          {about.educationNote}
        </p>

        <div className="about-reveal mt-16">
          <p className="mb-6 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-muted">
            EXPERIENCE
          </p>
          <ul className="flex flex-col">
            {experienceItems.map((row, i) => (
              <li
                key={i}
                className="flex flex-col gap-1 border-b border-black/[0.08] py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <span className="text-[0.85rem] text-muted">{row.date}</span>
                <span className="text-[0.95rem] text-ink">{row.role}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-reveal mt-10">
          <Link
            href={person.cvPath}
            target="_blank"
            data-cursor-hover
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-3 text-[0.9rem] font-medium text-white transition-transform duration-300 ease-smooth hover:scale-105"
          >
            <span>View Full CV</span>
            <svg
              width="20"
              height="20"
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
        </div>
      </div>
    </section>
  );
}
