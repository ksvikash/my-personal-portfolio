"use client";

import { useEffect } from "react";
import CustomCursor from "./components/CustomCursor";

export default function ClientShell({ children }) {
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const apply = () => {
      if (mq.matches) {
        document.documentElement.classList.add("has-custom-cursor");
      } else {
        document.documentElement.classList.remove("has-custom-cursor");
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="noise-overlay" aria-hidden />
      {children}
    </>
  );
}
