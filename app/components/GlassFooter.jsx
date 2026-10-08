"use client";

import { useEffect, useState } from "react";

export default function GlassFooter() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-[100] h-[120px] transition-opacity duration-[600ms] ease-smooth"
      style={{
        opacity: visible ? 1 : 0,
        background:
          "linear-gradient(to top, rgba(13,13,17,0.98) 0%, rgba(13,13,17,0.5) 45%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 55%, transparent 100%)",
        maskImage: "linear-gradient(to top, black 55%, transparent 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      aria-hidden
    />
  );
}
