"use client";

import { person } from "../data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-0 overflow-hidden px-[6vw] py-[12vh] md:px-[8vw] md:py-[15vh] lg:px-[10vw]"
    >
      <div
        className="pointer-events-none absolute bottom-[-20vh] left-1/2 h-[60vh] w-[120vw] -translate-x-1/2 rounded-full opacity-40 blur-[100px]"
        style={{
          background: "radial-gradient(circle at center, rgba(75,134,247,0.3) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[700px] text-center">
        <p className="section-eyebrow mx-auto mb-8 justify-center">05 — Contact</p>
        <h2 className="font-serif text-[clamp(2rem,6vw,4rem)] font-light leading-[1.15] text-ink">
          Let&apos;s build something <span className="italic text-accent">great.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[420px] text-[1.05rem] leading-relaxed text-inkSoft">
          Open for collaborations, full-time roles, and interesting projects.
        </p>

        {/* Availability strip */}
        <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted">
          <span className="text-success">●</span> Available Q2 2026 · {person.location} · {person.timezone}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-4 sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <a
            href={`mailto:${person.email}`}
            data-cursor-hover
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-8 py-3.5 text-[0.9rem] font-medium text-canvas transition-transform duration-300 ease-smooth hover:scale-105 sm:w-auto"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M22 6l-10 7L2 6M2 4h20v16H2z" />
            </svg>
            <span>Send an Email</span>
          </a>
          <a
            href={person.cvPath}
            download
            data-cursor-hover
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-lineLight px-8 py-3.5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.1em] text-inkSoft transition-all duration-300 hover:border-accent hover:text-ink sm:w-auto"
          >
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 font-mono text-[0.72rem] uppercase tracking-[0.1em]">
          <a
            href={person.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-inkSoft transition-colors hover:text-accent"
          >
            LinkedIn ↗
          </a>
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-inkSoft transition-colors hover:text-accent"
          >
            GitHub ↗
          </a>
          <a
            href={`mailto:${person.email}`}
            className="text-inkSoft transition-colors hover:text-accent"
          >
            {person.email}
          </a>
        </div>
      </div>
    </section>
  );
}
