"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-line bg-surface p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted transition hover:bg-surfaceLight hover:text-ink"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <p className="section-eyebrow mb-4">Project</p>
        <h2 id="project-modal-title" className="font-serif text-2xl font-light text-ink md:text-3xl">
          {project.title}
        </h2>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {project.meta.map((m) => (
            <span key={m} className="tag-chip">{m}</span>
          ))}
        </div>

        {project.metric && (
          <div className="mt-6 flex items-baseline gap-3 rounded-lg border border-line bg-canvas px-5 py-4">
            <span className="font-serif text-[2rem] font-light text-accent">
              {project.metric.value}
            </span>
            <span className="font-mono text-[0.68rem] text-muted">
              {project.metric.label}
            </span>
          </div>
        )}

        <p className="mt-6 text-[1rem] leading-relaxed text-inkSoft">
          {project.expanded}
        </p>

        {project.tags && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-chip">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const cardRef = useRef(null);
  const fromLeft = index % 2 === 0;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        {
          x: fromLeft ? -50 : 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 50%",
            scrub: 0.65,
          },
          ease: "none",
        }
      );
    }, card);
    return () => ctx.revert();
  }, [fromLeft]);

  return (
    <article
      ref={cardRef}
      className="group relative flex flex-col gap-4 border-b border-line pb-[8vh] transition-colors duration-300 last:border-0 md:flex-row md:items-start md:justify-between md:gap-8 md:pb-[12vh]"
    >
      {/* Left — title + description */}
      <div className="max-w-xl">
        <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted">
          {String(index + 1).padStart(2, "0")} — {project.meta.join(" / ")}
        </p>
        <h3 className="font-serif text-[clamp(1.6rem,3.5vw,2.8rem)] font-light leading-tight text-ink transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-4 max-w-lg text-[0.9rem] leading-relaxed text-inkSoft">
          {project.shortDescription}
        </p>

        {project.tags && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-chip">{tag}</span>
            ))}
          </div>
        )}

        <button
          type="button"
          data-cursor-hover
          onClick={() => onOpen(project)}
          className="mt-6 font-mono text-[0.72rem] font-medium uppercase tracking-[0.1em] text-inkSoft underline decoration-lineLight underline-offset-4 transition hover:decoration-accent hover:text-ink"
        >
          Read case study →
        </button>
      </div>

      {/* Right — metric */}
      {project.metric && (
        <div className="flex shrink-0 flex-col items-start gap-1 md:items-end md:pt-2 md:text-right">
          <span className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-none text-accent">
            {project.metric.value}
          </span>
          <span className="font-mono text-[0.65rem] leading-tight text-muted md:max-w-[140px]">
            {project.metric.label}
          </span>
        </div>
      )}
    </article>
  );
}

export default function SelectedWork() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(".work-reveal"), {
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
        y: 40,
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
      id="work"
      ref={sectionRef}
      className="relative px-[6vw] py-[12vh] md:px-[8vw] md:py-[15vh] lg:px-[10vw]"
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="work-reveal mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow mb-6">03 — Selected Work</p>
            <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] font-light leading-tight text-ink">
              Research &amp; systems, <span className="italic text-muted">from edge to clinic.</span>
            </h2>
          </div>
          <span className="hidden shrink-0 font-mono text-[0.7rem] text-muted md:block">
            {String(projects.length).padStart(2, "0")} / SELECTED
          </span>
        </div>

        <div className="flex flex-col gap-0">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
