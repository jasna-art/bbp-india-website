import Link from "next/link";
import { cn } from "@/lib/cn";

export function BackLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-baseline gap-3 font-sans text-eyebrow uppercase tracking-eyebrow text-muted transition-colors duration-150 ease-out hover:text-ink",
        className,
      )}
    >
      <span
        aria-hidden
        className="transition-transform duration-200 ease-out group-hover:-translate-x-1"
      >
        ←
      </span>
      <span>{label}</span>
    </Link>
  );
}
