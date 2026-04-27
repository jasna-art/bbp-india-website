import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { FilterChip } from "@/components/filter-chip";
import { SubscribeBlock } from "@/components/subscribe-block";
import { ContentPending } from "@/components/content-pending";
import { Eyebrow } from "@/components/eyebrow";
import { TextCTA } from "@/components/text-cta";
import { ESSAYS } from "@/lib/content/essays";

export const metadata: Metadata = {
  title: "BBP Thinking — Essays, Frameworks, Field Notes",
  description:
    "Long-form brand and business essays from Ahamed Shine and the BBP team. Subscribe to receive new essays in your inbox.",
  alternates: { canonical: "/thinking" },
};

const FILTERS = [
  { label: "All", href: "/thinking" },
  { label: "Frameworks", href: "/thinking?category=framework" },
  { label: "Essays", href: "/thinking?category=essay" },
  { label: "Field Notes", href: "/thinking?category=field-note" },
  {
    label: "The Profitability Index",
    href: "/thinking?category=profitability-index",
  },
];

export default function ThinkingHub() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Thinking"
        headline="Frameworks, essays, and field notes from the practice."
        sub="Long-form essays from Ahamed Shine and the BBP team. We publish when we have something to say, not on a content calendar. Subscribe to read the next one in your inbox."
      />

      <section className="container-bbp pb-16">
        <SubscribeBlock />
      </section>

      <section className="container-bbp pb-16">
        <nav aria-label="Filter essays" className="flex flex-wrap gap-x-8 gap-y-3">
          {FILTERS.map((f) => (
            <FilterChip key={f.label} href={f.href} active={f.label === "All"}>
              {f.label}
            </FilterChip>
          ))}
        </nav>
      </section>

      <section className="container-bbp section-y">
        {ESSAYS.length === 0 ? (
          <ContentPending
            block="Grid of article cards — H3 headline, 2-line dek, byline + reading time + date in muted caption. 2 cols desktop, 1 mobile, hairline rule between cards."
            source="Section 12 / Thinking hub · essay bodies pending"
          />
        ) : (
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
            {ESSAYS.map((e) => (
              <article
                key={e.slug}
                className="flex flex-col gap-4 border-t-hairline border-rule pt-8"
              >
                <Eyebrow tone="muted">Thinking · {e.categoryLabel}</Eyebrow>
                <h3 className="heading-serif text-h3 font-bold text-ink">
                  <Link
                    href={`/thinking/${e.slug}`}
                    className="hover:text-muted transition-colors"
                  >
                    {e.title}
                  </Link>
                </h3>
                <p className="font-sans text-body text-ink">{e.dek}</p>
                <p className="font-sans text-small text-muted">
                  By {e.author} · {e.readingTime} ·{" "}
                  {new Date(e.publishedISO).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Profitability Index series */}
      <section className="container-bbp section-y">
        <article className="flex flex-col gap-6 border-t-heavy border-ink pt-10 max-w-reading">
          <Eyebrow>Series · The Profitability Index</Eyebrow>
          <h2 className="heading-serif text-h2 font-bold text-ink">
            The India Brand Profitability Index — coming 2026.
          </h2>
          <p className="font-sans text-body text-ink">
            BBP is preparing the first comprehensive index of brand
            profitability across Indian consumer categories. Six dimensions.
            Thirty sub-metrics. Three hundred brands. Six categories. One
            ranking. Released annually.
          </p>
          <div>
            <TextCTA href="/connect">
              Be the first to read it — register interest
            </TextCTA>
          </div>
        </article>
      </section>
    </main>
  );
}
