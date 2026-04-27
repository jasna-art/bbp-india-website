import Link from "next/link";
import { Eyebrow } from "./eyebrow";
import { cn } from "@/lib/cn";

type CTA = { label: string; href: string };

export function Closer({
  eyebrow,
  headline,
  body,
  primary,
  secondary,
  inverted = true,
}: {
  eyebrow?: string;
  headline: React.ReactNode;
  body?: React.ReactNode;
  primary: CTA;
  secondary?: CTA;
  inverted?: boolean;
}) {
  return (
    <section
      className={cn(
        inverted ? "bg-ink text-canvas" : "bg-canvas text-ink",
      )}
    >
      <div className="container-bbp section-y flex flex-col items-start gap-8">
        {eyebrow ? (
          <Eyebrow
            tone="muted"
            className={inverted ? "text-rule" : undefined}
          >
            {eyebrow}
          </Eyebrow>
        ) : null}
        <h2
          className={cn(
            "heading-serif text-h2 max-w-reading font-bold",
            inverted ? "text-canvas" : "text-ink",
          )}
        >
          {headline}
        </h2>
        {body ? (
          <p
            className={cn(
              "max-w-reading font-sans text-body",
              inverted ? "text-rule" : "text-muted",
            )}
          >
            {body}
          </p>
        ) : null}
        <div className="flex flex-col gap-6 pt-2 sm:flex-row sm:items-center">
          <Link
            href={primary.href}
            className={cn(
              "group inline-flex items-center gap-3 border-b-heavy px-1 py-3 font-sans text-body font-semibold transition-colors duration-150",
              inverted
                ? "border-canvas text-canvas hover:bg-canvas hover:text-ink"
                : "border-ink text-ink hover:bg-ink hover:text-canvas",
            )}
          >
            <span>{primary.label}</span>
            <span
              aria-hidden
              className="transition-transform duration-200 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              className={cn(
                "group inline-flex items-baseline gap-2 font-sans text-body font-semibold underline decoration-1 underline-offset-4 transition-colors duration-150",
                inverted
                  ? "text-canvas decoration-canvas hover:text-rule"
                  : "text-ink decoration-ink hover:text-muted",
              )}
            >
              <span>{secondary.label}</span>
              <span
                aria-hidden
                className="transition-transform duration-200 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
