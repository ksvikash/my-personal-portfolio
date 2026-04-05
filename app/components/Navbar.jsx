"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { person } from "../data/content";

const NAV_LINKS = ["About", "Work", "Contact"];

function SocialIcon({ href, label, download, children }) {
  const className =
    "flex h-12 w-12 items-center justify-center rounded-full border border-black/15 text-ink transition-all duration-300 ease-smooth hover:scale-105 hover:border-ink";

  if (download) {
    return (
      <a href={href} download className={className} aria-label={label} data-cursor-hover>
        {children}
      </a>
    );
  }

  const mailto = href.startsWith("mailto:");

  return (
    <a
      href={href}
      {...(!mailto && { target: "_blank", rel: "noopener noreferrer" })}
      className={className}
      aria-label={label}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", closeOnDesktop);
    return () => mq.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 transition-all duration-[400ms] ease-smooth ${menuOpen ? "z-[280]" : "z-[200]"}`}
        style={{
          padding: scrolled ? "0.875rem 5vw" : "1.25rem 5vw",
          backgroundColor: scrolled ? "rgba(247, 247, 247, 0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        }}
      >
        <nav className="flex items-center justify-between gap-4">
          <Link
            href="#top"
            onClick={closeMenu}
            className="min-w-0 max-w-[min(100%,14rem)] truncate font-serif text-[clamp(0.95rem,2.5vw,1.1rem)] font-normal tracking-[-0.02em] text-ink sm:max-w-none sm:overflow-visible sm:whitespace-normal md:max-w-none"
          >
            {person.fullName}
          </Link>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 md:flex md:items-center md:gap-6 lg:gap-10">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="nav-link text-[0.8rem] font-normal text-muted transition-colors duration-300 hover:text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-3">
            <a
              href={person.cvPath}
              download
              data-cursor-hover
              className="hidden items-center justify-center rounded-full bg-ink px-5 py-[0.6rem] text-[0.75rem] font-medium text-white transition-transform duration-300 ease-smooth hover:scale-[1.03] hover:bg-[#2a2a2a] md:inline-flex lg:px-6"
            >
              Download CV
            </a>

            <button
              type="button"
              className="relative z-[260] flex h-11 w-11 items-center justify-center md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="relative block h-5 w-6">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-ink transition-all duration-[400ms] ease-smooth ${
                    menuOpen ? "top-[7px] -rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-6 rounded-full bg-ink transition-all duration-[400ms] ease-smooth ${
                    menuOpen ? "translate-x-4 opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-6 rounded-full bg-ink transition-all duration-[400ms] ease-smooth ${
                    menuOpen ? "top-[7px] rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[230] flex flex-col bg-[rgba(247,247,247,0.95)] backdrop-blur-[30px] md:hidden"
          >
            <nav className="flex flex-1 flex-col items-center justify-center gap-10 px-8 pt-20">
              {NAV_LINKS.map((label, i) => (
                <motion.a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 * (i + 1),
                    duration: 0.45,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="font-serif text-[clamp(1.75rem,8vw,2.75rem)] font-light text-ink"
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 pb-10 pt-6"
            >
              <SocialIcon href={person.linkedIn} label="LinkedIn">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={person.github} label="GitHub">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={person.cvPath} label="Download CV" download>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                </svg>
              </SocialIcon>
              <SocialIcon href={`mailto:${person.email}`} label="Email">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M22 6l-10 7L2 6M2 4h20v16H2z" />
                </svg>
              </SocialIcon>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
