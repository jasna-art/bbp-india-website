import { cn } from "@/lib/cn";

export function Callout({
  children,
  className,
  attribution,
}: {
  children: React.ReactNode;
  className?: string;
  attribution?: string;
}) {
  return (
    <figure
      className={cn(
        "border-l-heavy border-ink pl-6 py-2 max-w-reading",
        className,
      )}
    >
      <blockquote className="heading-serif text-lede italic text-ink">
        {children}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-4 font-sans text-small text-muted">
          — {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
