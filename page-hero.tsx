import { Eyebrow } from "./eyebrow";
import { BackLink } from "./back-link";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  headline,
  sub,
  back,
  children,
  className,
}: {
  eyebrow: string;
  headline: React.ReactNode;
  sub?: React.ReactNode;
  back?: { href: string; label: string };
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "container-bbp pt-32 pb-24 lg:pt-48 lg:pb-32",
        className,
      )}
    >
      {back ? (
        <BackLink href={back.href} label={back.label} className="mb-10" />
      ) : null}
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="heading-serif text-h1 mt-8 max-w-[20ch] font-bold tracking-tight">
        {headline}
      </h1>
      {sub ? (
        <p className="heading-serif text-lede mt-8 max-w-reading italic text-muted">
          {sub}
        </p>
      ) : null}
      {children ? <div className="mt-12">{children}</div> : null}
    </section>
  );
}
