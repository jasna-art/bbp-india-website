"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/lib/nav";
import { Wordmark } from "./wordmark";

export function MobileMenu({
  nav,
  className,
}: {
  nav: NavItem[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="font-sans text-body font-semibold text-ink"
      >
        Menu
      </button>

      {open ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fade-in fixed inset-0 z-50 flex flex-col bg-canvas"
        >
          <div className="container-bbp flex h-20 items-center justify-between">
            <Wordmark size="mobile" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="font-sans text-body font-semibold text-ink"
            >
              Close
            </button>
          </div>

          <nav
            aria-label="Primary"
            className="container-bbp mt-12 flex flex-1 flex-col gap-10 overflow-y-auto pb-24"
          >
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="flex flex-col gap-5">
                  <p className="font-sans text-eyebrow uppercase text-muted">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="heading-serif text-h3 font-bold text-ink"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="heading-serif text-h3 font-bold text-ink"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="container-bbp pb-12">
            <Link
              href="/connect"
              className={cn(
                "group inline-flex items-center gap-3 border-b-heavy border-ink py-3 font-sans text-body font-semibold text-ink",
              )}
            >
              <span>Book a Diagnostic</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
