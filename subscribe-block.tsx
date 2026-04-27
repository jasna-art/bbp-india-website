import { cn } from "@/lib/cn";

export function SubscribeBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border-hairline border-rule p-8 max-w-reading",
        className,
      )}
    >
      <form className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="subscribe-email"
            className="block font-sans text-eyebrow uppercase text-ink"
          >
            Email
          </label>
          <input
            id="subscribe-email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-2 w-full border-0 border-b-hairline border-rule bg-transparent px-0 py-3 font-sans text-body text-ink placeholder:text-muted focus:border-b-heavy focus:border-ink focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="group inline-flex items-center gap-3 border-b-heavy border-ink bg-canvas px-1 py-3 font-sans text-body font-semibold text-ink transition-colors duration-150 ease-out hover:bg-ink hover:text-canvas focus:bg-ink focus:text-canvas focus:outline-none whitespace-nowrap"
        >
          <span>Subscribe to BBP Thinking</span>
          <span aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
        </button>
      </form>
      <p className="mt-6 font-sans text-small text-muted">
        One essay every two to four weeks. No promotional emails. Unsubscribe in one click.
      </p>
    </div>
  );
}
