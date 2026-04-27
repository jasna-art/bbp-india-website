import { Eyebrow } from "./eyebrow";
import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  headline,
  lede,
  className,
  align = "left",
}: {
  eyebrow?: string;
  headline: React.ReactNode;
  lede?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="heading-serif text-h2 text-ink">{headline}</h2>
      {lede ? (
        <p className="heading-serif text-lede italic text-muted max-w-reading">
          {lede}
        </p>
      ) : null}
    </header>
  );
}
