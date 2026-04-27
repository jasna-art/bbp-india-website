import Link from "next/link";
import { cn } from "@/lib/cn";

export function TextCTA({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-baseline gap-2 font-sans text-body font-semibold text-ink underline decoration-ink decoration-1 underline-offset-4 transition-colors duration-150 ease-out hover:text-muted",
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-200 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
