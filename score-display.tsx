import { cn } from "@/lib/cn";

export function ScoreDisplay({
  before,
  after,
  label = "Brand OS™ Score",
  className,
}: {
  before: number;
  after: number;
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <p className="font-sans text-eyebrow uppercase text-muted">{label}</p>
      <div className="flex items-baseline gap-6">
        <span className="heading-serif text-[80px] font-bold leading-none text-ink tabular-nums">
          {before}
        </span>
        <span aria-hidden className="heading-serif text-[56px] leading-none text-muted">
          →
        </span>
        <span className="heading-serif text-[80px] font-bold leading-none text-ink tabular-nums">
          {after}
        </span>
      </div>
      <span className="sr-only">
        Score moved from {before} to {after}.
      </span>
    </div>
  );
}
