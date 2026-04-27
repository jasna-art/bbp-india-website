"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="menuitem"], [role="button"], summary, label, input[type="checkbox"], input[type="radio"]';

export function Cursor() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  // Only enable on desktop devices with a fine pointer and no reduced-motion preference.
  useEffect(() => {
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 1024px)",
    );
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setEnabled(fine.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  // Mark the body so CSS can hide the native cursor only when ours is active.
  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("bbp-cursor-active");
    return () => {
      document.body.classList.remove("bbp-cursor-active");
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;
    const ease = 0.22;

    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * ease;
      current.current.y += (target.current.y - current.current.y) * ease;
      const node = wrapRef.current;
      if (node) {
        node.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible) {
        current.current.x = e.clientX;
        current.current.y = e.clientY;
        setVisible(true);
      }
    };

    const onOver = (e: MouseEvent) => {
      const node = e.target as Element | null;
      if (!node || !("closest" in node)) {
        setActive(false);
        return;
      }
      setActive(Boolean(node.closest(INTERACTIVE_SELECTOR)));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
    // visible is intentionally read via closure, not subscribed to.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className={[
        "bbp-cursor",
        "pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block",
        "transition-opacity duration-200 ease-out",
        visible ? "opacity-100" : "opacity-0",
      ].join(" ")}
      style={{ willChange: "transform" }}
    >
      <div className="relative flex h-7 w-7 items-center justify-center">
        {/* Click affordance: solid ink circle */}
        <span
          className={[
            "absolute h-3 w-3 rounded-full bg-ink transition-all duration-150 ease-out",
            active ? "scale-100 opacity-100" : "scale-50 opacity-0",
          ].join(" ")}
        />

        {/* Scroll affordance: stacked up/down arrows */}
        <span
          aria-hidden
          className={[
            "flex flex-col items-center font-sans font-semibold text-ink leading-[0.55]",
            "transition-all duration-150 ease-out",
            active ? "scale-75 opacity-0" : "scale-100 opacity-100",
          ].join(" ")}
        >
          <span className="text-[16px]">↑</span>
          <span className="text-[16px]">↓</span>
        </span>
      </div>
    </div>
  );
}
