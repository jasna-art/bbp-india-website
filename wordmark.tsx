import Link from "next/link";
import { cn } from "@/lib/cn";

type Size = "display" | "desktop" | "mobile" | "footer" | "small";
type Tone = "ink" | "canvas";

const SIZE_CLASS: Record<Size, string> = {
  display: "text-[64px]",
  desktop: "text-[30px]",
  mobile: "text-[24px]",
  footer: "text-[22px]",
  small: "text-[18px]",
};

// The BBP wordmark. The brand operates as a pure wordmark since 2025
// (Darwin's Fish retired). Heavy sans-serif, tight tracking, ink-on-canvas.
//
// To swap in a custom logo file, drop `public/logo.svg` (preferred) or
// `public/logo.png` and replace the inner <span> with <Image src="/logo.svg" .. />.
export function Wordmark({
  size = "desktop",
  tone = "ink",
  asLink = true,
  className,
}: {
  size?: Size;
  tone?: Tone;
  asLink?: boolean;
  className?: string;
}) {
  const inner = (
    <span
      aria-label="BBP"
      className={cn(
        // font-black = 900; tracking is tight so the letters read as a single block.
        // line-height suppressed so vertical alignment matches the cap height.
        "inline-block font-sans font-black leading-[0.85] tracking-[-0.06em]",
        SIZE_CLASS[size],
        tone === "ink" ? "text-ink" : "text-canvas",
        className,
      )}
    >
      BBP
    </span>
  );

  if (!asLink) return inner;

  return (
    <Link
      href="/"
      aria-label="BBP India home"
      className="inline-block"
    >
      {inner}
    </Link>
  );
}
