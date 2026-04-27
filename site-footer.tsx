import Link from "next/link";
import { FOOTER_NAV } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="border-t-hairline border-rule bg-canvas">
      <div className="container-bbp grid grid-cols-2 gap-12 py-24 lg:grid-cols-4 lg:py-32">
        {Object.entries(FOOTER_NAV).map(([heading, items]) => (
          <div key={heading} className="flex flex-col gap-6">
            <p className="font-sans text-eyebrow uppercase text-ink">
              {heading}
            </p>
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="font-sans text-body text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t-hairline border-rule">
        <div className="container-bbp flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <p className="font-sans text-small text-muted">
            © BBP India 2016–2026 · Built in Kochi · Made for India
          </p>
          <ul className="flex gap-6">
            <li>
              <Link
                href="/privacy"
                className="font-sans text-small text-muted transition-colors hover:text-ink"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="font-sans text-small text-muted transition-colors hover:text-ink"
              >
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
