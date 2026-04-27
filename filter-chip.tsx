import Link from "next/link";
import { cn } from "@/lib/cn";

export function FilterChip({
  children,
  href,
  active = false,
}: {
  children: React.ReactNode;
  href: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "inline-block py-1 font-sans text-body font-semibold transition-colors duration-150 ease-out",
        active
          ? "text-ink underline decoration-ink decoration-[2px] underline-offset-[6px]"
          : "text-muted hover:text-ink",
      )}
    >
      {children}
    </Link>
  );
}
