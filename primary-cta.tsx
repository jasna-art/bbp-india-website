import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
};

export function PrimaryCTA({ children, href, type = "button", className, onClick }: Props) {
  const classes = cn(
    "group inline-flex items-center gap-3 border-b-heavy border-ink bg-canvas px-1 py-3 font-sans text-body font-semibold text-ink transition-colors duration-150 ease-out hover:bg-ink hover:text-canvas focus:bg-ink focus:text-canvas focus:outline-none focus-visible:focus-ring",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        <span aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      <span>{children}</span>
      <span aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
    </button>
  );
}
