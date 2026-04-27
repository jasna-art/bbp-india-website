import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/eyebrow";
import { ScoreDisplay } from "@/components/score-display";
import { Closer } from "@/components/closer";
import { BackLink } from "@/components/back-link";
import { STORIES, type Story } from "@/lib/content/stories";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return STORIES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const story = STORIES.find((s) => s.slug === params.slug);
  if (!story) return {};
  return {
    title: story.headline,
    description: story.dek,
    alternates: { canonical: `/stories/${story.slug}` },
  };
}

function getStory(slug: string): Story {
  const story = STORIES.find((s) => s.slug === slug);
  if (!story) notFound();
  return story;
}

export default function StoryPage({ params }: { params: Params }) {
  const story = getStory(params.slug);

  return (
    <main id="main">
      {/* Hero */}
      <section className="container-bbp pt-32 pb-12 lg:pt-48 lg:pb-20">
        <BackLink href="/stories" label="All stories" className="mb-10" />
        <Eyebrow>Story · {story.industry}</Eyebrow>
        <h1 className="heading-serif text-h1 mt-8 max-w-[24ch] font-bold tracking-tight">
          {story.headline}
        </h1>
        <p className="heading-serif text-lede mt-8 max-w-reading italic text-muted">
          {story.dek}
        </p>
        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t-heavy border-ink pt-6 lg:grid-cols-4">
          <div>
            <dt className="font-sans text-eyebrow uppercase text-muted">
              Engagement
            </dt>
            <dd className="mt-2 font-sans text-body text-ink">
              {story.engagement}
            </dd>
          </div>
          <div>
            <dt className="font-sans text-eyebrow uppercase text-muted">
              Duration
            </dt>
            <dd className="mt-2 font-sans text-body text-ink">
              {story.duration}
            </dd>
          </div>
          <div>
            <dt className="font-sans text-eyebrow uppercase text-muted">
              Score change
            </dt>
            <dd className="mt-2 font-sans text-body text-ink">
              {story.scoreBefore} → {story.scoreAfter}
            </dd>
          </div>
          <div>
            <dt className="font-sans text-eyebrow uppercase text-muted">
              Lead consultant
            </dt>
            <dd className="mt-2 font-sans text-body text-ink">
              {story.leadConsultant}
            </dd>
          </div>
        </dl>
      </section>

      {/* Diagnostic */}
      <section className="container-bbp section-y">
        <Eyebrow>The diagnostic</Eyebrow>
        <div className="mt-8 max-w-reading font-sans text-body text-ink">
          <p>{story.sections.diagnostic}</p>
        </div>
      </section>

      {/* Decision */}
      <section className="container-bbp section-y">
        <Eyebrow>The decision</Eyebrow>
        <div className="mt-8 max-w-reading font-sans text-body text-ink">
          <p>{story.sections.decision}</p>
        </div>
      </section>

      {/* Deployment */}
      <section className="container-bbp section-y">
        <Eyebrow>The deployment</Eyebrow>
        <div className="mt-8 max-w-reading font-sans text-body text-ink">
          <p>{story.sections.deployment}</p>
        </div>
      </section>

      {/* Result */}
      <section className="container-bbp section-y">
        <Eyebrow>The result</Eyebrow>
        <div className="mt-8">
          <ScoreDisplay
            before={story.scoreBefore}
            after={story.scoreAfter}
          />
        </div>
        <div className="mt-12 max-w-reading font-sans text-body text-ink">
          <p>{story.sections.result}</p>
        </div>
      </section>

      {/* What we learned */}
      <section className="container-bbp section-y">
        <Eyebrow>What we learned</Eyebrow>
        <div className="mt-8 max-w-reading font-sans text-body text-ink">
          <p>{story.sections.learned}</p>
        </div>
      </section>

      <Closer
        eyebrow="Start here"
        headline="If your situation rhymes with this one, run the Diagnostic."
        primary={{ label: "Book the Diagnostic", href: "/diagnostic" }}
        secondary={{ label: "Talk to us first", href: "/connect" }}
      />
    </main>
  );
}
