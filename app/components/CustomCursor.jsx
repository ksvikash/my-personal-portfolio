"use client";

import { useEffect, useRef, useState } from "react";

const LERP = 0.15;
const MAX_PARTICLES = 50;

export default function CustomCursor() {
  const ringRef = useRef(null);
  const canvasRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const hoverRef = useRef(false);
  const particles = useRef([]);
  const raf = useRef(0);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const sync = () => setFinePointer(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!finePointer) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    pos.current = { ...target.current };

    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      let el = e.target;
      let h = false;
      while (el && el !== document.body) {
        if (el.dataset && el.dataset.cursorHover !== undefined) {
          h = true;
          break;
        }
        el = el.parentElement;
      }
      hoverRef.current = h;

      const p = particles.current;
      if (p.length < MAX_PARTICLES) {
        p.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 3.5,
          vy: (Math.random() - 0.5) * 3.5,
          life: 1,
          size: 1 + Math.random() * 3,
        });
      }
    };

    window.addEventListener("mousemove", move, { passive: true });

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * LERP;
      pos.current.y += (target.current.y - pos.current.y) * LERP;

      const ring = ringRef.current;
      const hover = hoverRef.current;
      if (ring) {
        const size = hover ? 48 : 24;
        ring.style.width = `${size}px`;
        ring.style.height = `${size}px`;
        ring.style.left = `${pos.current.x - size / 2}px`;
        ring.style.top = `${pos.current.y - size / 2}px`;
        ring.style.borderColor = hover
          ? "rgba(75,134,247,0.8)"
          : "rgba(237,237,237,0.4)";
      }

      const ctx = canvas.getContext("2d");
      if (ctx) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        ctx.clearRect(0, 0, w, h);
        const list = particles.current;
        for (let i = list.length - 1; i >= 0; i--) {
          const pt = list[i];
          pt.x += pt.vx * 0.35;
          pt.y += pt.vy * 0.35;
          pt.life -= 0.018;
          if (pt.life <= 0) {
            list.splice(i, 1);
            continue;
          }
          ctx.fillStyle = `rgba(75, 134, 247, ${0.4 * pt.life})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.size * (0.4 + 0.6 * pt.life), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf.current);
    };
  }, [finePointer]);

  if (!finePointer) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[10001] mix-blend-difference rounded-full border-[1.5px]"
        style={{
          width: 24,
          height: 24,
          borderColor: "rgba(237,237,237,0.4)",
        }}
        aria-hidden
      />
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9999]"
        aria-hidden
      />
    </>
  );
}
