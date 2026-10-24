"use client";

import { useEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";

export default function ClientShell({ children }) {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("reduce-motion", reducedMotion);

    const mq = window.matchMedia("(pointer: fine)");
    const apply = () => {
      const useCustom = mq.matches && !reducedMotion;
      root.classList.toggle("has-custom-cursor", useCustom);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [reducedMotion]);

  return (
    <>
      {!reducedMotion && <CustomCursor />}
      <div className="noise-overlay" aria-hidden />
      {children}
    </>
  );
}
