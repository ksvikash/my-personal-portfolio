"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
      className="fixed inset-0 z-[500] flex items-center justify-center bg-ink/40 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-canvas p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted transition hover:bg-black/5 hover:text-ink"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <p className="mb-2 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-muted">
          Project
        </p>
        <h2 id="project-modal-title" className="font-serif text-2xl font-light text-ink md:text-3xl">
          {project.title}
        </h2>
        <p className="mt-2 text-[0.85rem] text-muted">
          {project.meta.join(" · ")}
        </p>
        <p className="mt-6 font-sans text-[1.05rem] leading-relaxed text-ink/90">
          {project.expanded}
        </p>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const hoverRef = useRef(false);
  const [hover, setHover] = useState(false);
  const fromLeft = index % 2 === 0;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        {
          x: fromLeft ? -60 : 60,
          rotation: fromLeft ? 5 : -5,
          opacity: 0,
        },
        {
          x: 0,
          rotation: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 40%",
            scrub: 0.65,
          },
          ease: "none",
        }
      );
    }, card);
    return () => ctx.revert();
  }, [fromLeft]);

  const onMove = (e) => {
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img || !hoverRef.current) return;
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 48;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 48;
    img.style.transform = `translate(calc(-50% + ${x}px), calc(-30% + ${y}px)) scale(1)`;
  };

  return (
    <article
      ref={cardRef}
      className="relative flex min-h-0 flex-col gap-6 border-b border-black/[0.08] pb-[10vh] last:border-0 md:min-h-[320px] md:gap-8 md:pb-[15vh]"
      onMouseEnter={() => {
        hoverRef.current = true;
        setHover(true);
      }}
      onMouseLeave={() => {
        hoverRef.current = false;
        setHover(false);
        const img = imgRef.current;
        if (img) img.style.transform = "translate(-50%, -20%) scale(0.85)";
      }}
      style={{ perspective: "1000px" }}
      onMouseMove={onMove}
    >
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
        <div className="max-w-xl">
          <h3 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-4 font-sans text-[0.95rem] leading-relaxed text-muted">
            {project.shortDescription}
          </p>
          <button
            type="button"
            data-cursor-hover
            onClick={() => onOpen(project)}
            className="mt-6 text-[0.85rem] font-medium text-ink underline decoration-black/20 underline-offset-4 transition hover:decoration-ink"
          >
            Read full case study
          </button>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-1 text-left text-[0.8rem] text-muted md:items-end md:pt-2 md:text-right">
          {project.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>

      <div className="relative mt-2 h-44 w-full overflow-hidden rounded-xl md:hidden">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority={index === 0}
        />
      </div>

      <div
        className={`pointer-events-none absolute left-1/2 top-[40%] z-10 hidden w-[45vw] max-w-3xl transition-opacity duration-500 md:top-1/3 md:block ${
          hover ? "opacity-100" : "opacity-0"
        }`}
        style={{ height: "min(60vh, 420px)" }}
      >
        <div
          ref={imgRef}
          className="absolute left-1/2 h-full w-full -translate-x-1/2 -translate-y-[20%] scale-[0.85] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-out"
          style={{ transform: "translate(-50%, -20%) scale(0.85)" }}
        >
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 45vw"
            priority={index === 0}
          />
        </div>
      </div>
    </article>
  );
}

export default function SelectedWork() {
  const bgRef = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;
    const ctx = gsap.context(() => {
      gsap.to(bg, {
        scrollTrigger: {
          trigger: "#work",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: "-8%",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      className="relative min-h-screen px-[6vw] py-[12vh] md:px-[8vw] md:py-[15vh] lg:px-[10vw]"
    >
      <div
        ref={bgRef}
        className="pointer-events-none absolute left-0 top-[-20%] h-[140%] w-full bg-gradient-to-b from-transparent via-lavender/30 to-transparent opacity-70"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="mb-8 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-muted">
          SELECTED WORK
        </p>

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
