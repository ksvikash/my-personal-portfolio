"use client";

import { person } from "../data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-0 overflow-hidden px-[6vw] py-[12vh] md:px-[8vw] md:py-[15vh] lg:px-[10vw]"
    >
      <div
        className="pointer-events-none absolute bottom-[-20vh] left-1/2 h-[60vh] w-[120vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(75,134,247,0.55)_0%,transparent_65%)] opacity-60 blur-[80px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[700px] text-center">
        <p className="mb-8 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-muted">
          CONTACT
        </p>
        <h2 className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-light leading-[1.1] text-ink lg:text-[clamp(2.5rem,5vw,4.5rem)]">
          Let&apos;s build something great.
        </h2>
        <p className="mx-auto mt-6 max-w-[400px] text-[1.1rem] leading-relaxed text-muted">
          Open for collaborations, full-time roles, and interesting projects.
        </p>

        <div className="mt-12 flex w-full max-w-md flex-col items-stretch gap-4 sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <a
            href={`mailto:${person.email}`}
            data-cursor-hover
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-8 py-3.5 text-[0.95rem] font-medium text-white transition-transform duration-300 ease-smooth hover:scale-105 sm:w-auto"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M4 4h16v16H4z" opacity="0" />
              <path d="M22 6l-10 7L2 6M2 4h20v16H2z" />
            </svg>
            <span>Send an Email</span>
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-[0.85rem]">
          <a
            href={person.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-ink"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
