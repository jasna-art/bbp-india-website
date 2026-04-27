import { cn } from "@/lib/cn";

type Aspect = "square" | "video" | "portrait" | "wide" | "tall";

const ASPECT_CLASS: Record<Aspect, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
  tall: "aspect-[2/3]",
};

// Visual placeholder for any image slot. Solid ink fill mirrors the brief's
// B&W ink-tinted photo treatment so the layout reads like a real photo will,
// without shipping any actual imagery. Marked clearly as `data-dummy-image`
// for find-and-replace before launch.
export function DummyImage({
  aspect = "square",
  label,
  caption,
  className,
}: {
  aspect?: Aspect;
  label?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div
      data-dummy-image
      role="img"
      aria-label={label ?? "Image"}
      className={cn(
        "relative flex flex-col justify-end overflow-hidden bg-ink p-4",
        ASPECT_CLASS[aspect],
        className,
      )}
    >
      {label ? (
        <span className="font-sans text-small font-semibold text-canvas">
          {label}
        </span>
      ) : null}
      {caption ? (
        <span className="font-sans text-small text-rule">{caption}</span>
      ) : null}
    </div>
  );
}
