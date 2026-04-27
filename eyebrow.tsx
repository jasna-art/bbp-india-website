import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  as: Tag = "p",
  tone = "ink",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
  tone?: "ink" | "muted";
}) {
  return (
    <Tag
      className={cn(
        "font-sans text-eyebrow uppercase",
        tone === "ink" ? "text-ink" : "text-muted",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
