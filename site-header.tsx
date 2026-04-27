"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { PRIMARY_NAV } from "@/lib/nav";
import { MobileMenu } from "./mobile-menu";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href) ?? false;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b-hairline transition-colors duration-200",
        scrolled
          ? "bg-canvas border-rule"
          : "bg-canvas/0 border-transparent",
      )}
    >
      <div className="container-bbp flex h-20 items-center justify-between">
        <Wordmark size="desktop" />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 lg:flex"
        >
          {PRIMARY_NAV.map((item) => {
            if (item.children) {
              const active = item.children.some((c) => isActive(c.href));
              const isOpen = openDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onBlur={(e) => {
                    if (
                      !e.currentTarget.contains(
                        e.relatedTarget as Node | null,
                      )
                    ) {
                      setOpenDropdown((current) =>
                        current === item.label ? null : current,
                      );
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    onFocus={() => setOpenDropdown(item.label)}
                    onClick={() =>
                      setOpenDropdown((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                    className={cn(
                      "relative font-sans text-body font-semibold transition-colors",
                      active
                        ? "text-ink after:absolute after:inset-x-0 after:-bottom-2 after:h-[2px] after:bg-ink"
                        : "text-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                  </button>
                  {isOpen ? (
                    <div
                      role="menu"
                      className="fade-in absolute left-0 top-full min-w-[200px] pt-4"
                    >
                      <div className="border-t-heavy border-ink bg-canvas py-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className={cn(
                              "block px-4 py-2 font-sans text-body transition-colors",
                              isActive(child.href)
                                ? "text-ink"
                                : "text-muted hover:text-ink",
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative font-sans text-body font-semibold transition-colors",
                  isActive(item.href)
                    ? "text-ink after:absolute after:inset-x-0 after:-bottom-2 after:h-[2px] after:bg-ink"
                    : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/connect"
            className="group ml-4 inline-flex items-center gap-2 border-b-heavy border-ink px-1 py-2 font-sans text-body font-semibold text-ink transition-colors hover:bg-ink hover:text-canvas"
          >
            <span>Book a Diagnostic</span>
            <span
              aria-hidden
              className="transition-transform duration-200 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </nav>

        <MobileMenu nav={PRIMARY_NAV} className="lg:hidden" />
      </div>
    </header>
  );
}
