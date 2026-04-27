import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { Eyebrow } from "@/components/eyebrow";
import {
  STORIES,
  type Story,
  type StoryCategory,
} from "@/lib/content/stories";

export const metadata: Metadata = {
  title: "Case Work and Brand Transformations",
  description:
    "Selected case studies from eleven years of BBP brand engagements — diagnostic, decision, deployment, and result.",
  alternates: { canonical: "/stories" },
};

const CATEGORIES: { slug: StoryCategory; eyebrow: string; headline: string }[] = [
  {
    slug: "brand",
    eyebrow: "Brand",
    headline: "Engagements where the brand chassis led the work.",
  },
  {
    slug: "marketing",
    eyebrow: "Marketing",
    headline: "Engagements where the expression layer led the work.",
  },
  {
    slug: "growth",
    eyebrow: "Growth",
    headline: "Engagements where the compounding engine led the work.",
  },
  {
    slug: "experience",
    eyebrow: "Experience",
    headline: "Engagements where the touchpoint layer led the work.",
  },
];

function StoryCard({ s }: { s: Story }) {
  return (
    <article className="flex flex-col gap-4 border-t-hairline border-rule pt-8">
      <Eyebrow tone="muted">Story · {s.industry}</Eyebrow>
      <h3 className="heading-serif text-h3 font-bold text-ink">
        <Link
          href={`/stories/${s.slug}`}
          className="transition-colors hover:text-muted"
        >
          {s.headline}
        </Link>
      </h3>
      <p className="font-sans text-body text-ink">{s.dek}</p>
      <p className="font-sans text-small text-muted">
        {s.engagement} · {s.duration} · {s.scoreBefore} → {s.scoreAfter}
      </p>
    </article>
  );
}

export default function StoriesHub() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Stories"
        headline="Eleven years. Sixty-plus brands. The case work behind the practice."
        sub="Selected engagements, told the way we wish more consultancies would tell their work — with the diagnostic, the decision, the deployment, and the result. Not the highlight reel."
      />

      {CATEGORIES.map((c) => {
        const cases = STORIES.filter((s) => s.category === c.slug);
        if (cases.length === 0) return null;
        return (
          <section key={c.slug} className="container-bbp section-y" id={c.slug}>
            <SectionHeader
              eyebrow={c.eyebrow}
              headline={<>{c.headline}</>}
            />
            <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {cases.map((s) => (
                <StoryCard key={s.slug} s={s} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
