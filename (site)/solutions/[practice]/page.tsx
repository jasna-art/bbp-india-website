import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { Callout } from "@/components/callout";
import { Closer } from "@/components/closer";
import { ContentPending } from "@/components/content-pending";
import { Eyebrow } from "@/components/eyebrow";
import { TextCTA } from "@/components/text-cta";
import { SOLUTIONS, SOLUTION_SLUGS } from "@/lib/content/solutions";
import { STORIES } from "@/lib/content/stories";

type Params = { practice: string };

export function generateStaticParams(): Params[] {
  return SOLUTION_SLUGS.map((practice) => ({ practice }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const practice = params.practice as keyof typeof SOLUTIONS;
  const data = SOLUTIONS[practice];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/solutions/${data.slug}` },
  };
}

export default function SolutionPage({ params }: { params: Params }) {
  const practice = params.practice as keyof typeof SOLUTIONS;
  const data = SOLUTIONS[practice];
  if (!data) notFound();

  const recentStories = STORIES.filter((s) => s.category === practice).slice(
    0,
    3,
  );

  return (
    <main id="main">
      <PageHero
        eyebrow={data.eyebrow}
        headline={data.headline}
        sub={data.sub}
        back={{ href: "/what-we-do", label: "What we do" }}
      />

      {/* What we do */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="What we do"
          headline={<>The services this practice runs.</>}
        />
        <div className="mt-16 flex flex-col">
          {data.services.map((s, i) => (
            <article
              key={s.title}
              className={`grid grid-cols-1 gap-6 py-10 lg:grid-cols-[280px_1fr] lg:gap-16 ${
                i === 0 ? "border-y-hairline" : "border-b-hairline"
              } border-rule`}
            >
              <h3 className="heading-serif text-h4 font-bold text-ink">
                {s.title}
              </h3>
              <p className="max-w-reading font-sans text-body text-ink">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Field note (Growth) or Closing block (Brand, Marketing) */}
      {data.fieldNote ? (
        <section className="container-bbp section-y">
          <SectionHeader
            eyebrow="Field note"
            headline={<>From the practice.</>}
          />
          <div className="mt-16">
            <Callout attribution={data.fieldNote.attribution}>
              {data.fieldNote.quote}
            </Callout>
          </div>
        </section>
      ) : null}

      {data.closing ? (
        <section className="container-bbp section-y">
          <SectionHeader
            eyebrow={data.closing.heading}
            headline={data.closing.sub ?? data.closing.heading}
          />
          <div className="mt-16 max-w-reading">
            <p className="font-sans text-body text-ink">{data.closing.body}</p>
          </div>
        </section>
      ) : null}

      {/* Recent work */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="Recent work"
          headline={<>Engagements where this practice led.</>}
        />
        {recentStories.length === 0 ? (
          <div className="mt-16">
            <ContentPending
              block={`Three case study cards from /stories filtered by ${data.slug}`}
              source={`Stories CMS · ${data.slug} category · final case study selection pending`}
            />
          </div>
        ) : (
          <>
            <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {recentStories.map((s) => (
                <article
                  key={s.slug}
                  className="flex flex-col gap-4 border-t-hairline border-rule pt-8"
                >
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
                    {s.engagement} · {s.duration} · {s.scoreBefore} →{" "}
                    {s.scoreAfter}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-12">
              <TextCTA href={`/stories?practice=${data.slug}`}>
                See all {data.slug} stories
              </TextCTA>
            </div>
          </>
        )}
      </section>

      {/* Closer */}
      <Closer
        eyebrow="Start here"
        headline="Start with a Brand OS™ Diagnostic."
        primary={{ label: "Book the Diagnostic", href: "/diagnostic" }}
        secondary={{ label: "Talk to us first", href: "/connect" }}
      />
    </main>
  );
}
