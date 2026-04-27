import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/eyebrow";
import { SubscribeBlock } from "@/components/subscribe-block";
import { DummyImage } from "@/components/dummy-image";
import { BackLink } from "@/components/back-link";
import { ESSAYS, type Essay } from "@/lib/content/essays";
import { SITE_URL } from "@/lib/nav";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return ESSAYS.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const essay = ESSAYS.find((e) => e.slug === params.slug);
  if (!essay) return {};
  return {
    title: essay.title,
    description: essay.dek,
    alternates: { canonical: `/thinking/${essay.slug}` },
  };
}

function getEssay(slug: string): Essay {
  const essay = ESSAYS.find((e) => e.slug === slug);
  if (!essay) notFound();
  return essay;
}

export default function EssayPage({ params }: { params: Params }) {
  const essay = getEssay(params.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: essay.title,
    description: essay.dek,
    author: { "@type": "Person", name: essay.author },
    datePublished: essay.publishedISO,
    publisher: { "@type": "Organization", name: "BBP India" },
    mainEntityOfPage: `${SITE_URL}/thinking/${essay.slug}`,
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="container-bbp pt-32 pb-12 lg:pt-48 lg:pb-16">
        <BackLink href="/thinking" label="All essays" className="mb-10" />
        <Eyebrow>Thinking · {essay.categoryLabel}</Eyebrow>
        <h1 className="heading-serif text-h1 mt-8 max-w-[24ch] font-bold tracking-tight">
          {essay.title}
        </h1>
        <p className="heading-serif mt-8 max-w-reading text-[28px] italic leading-snug text-muted">
          {essay.dek}
        </p>
        <p className="mt-10 font-sans text-small text-muted">
          By {essay.author} · {essay.authorRole} · Published{" "}
          {new Date(essay.publishedISO).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          · {essay.readingTime}
        </p>
      </section>

      {/* Body */}
      <section className="container-bbp pb-24">
        <article
          className="reading-column mx-0 font-sans text-body text-ink prose-bbp"
          dangerouslySetInnerHTML={{ __html: essay.body }}
        />
      </section>

      {/* Author bio */}
      <section className="container-bbp section-y">
        <div className="grid max-w-reading grid-cols-1 gap-6 border-t-heavy border-ink pt-8 md:grid-cols-[120px_1fr]">
          <DummyImage aspect="square" label={essay.author} />
          <div className="flex flex-col gap-3">
            <p className="font-sans text-body font-semibold text-ink">
              About {essay.author}
            </p>
            <p className="font-sans text-small italic text-muted">
              {essay.authorRole}
            </p>
            {essay.authorBio ? (
              <p className="font-sans text-body text-ink">{essay.authorBio}</p>
            ) : null}
          </div>
        </div>
      </section>

      {/* Subscribe re-prompt */}
      <section className="container-bbp section-y">
        <p className="heading-serif mb-8 max-w-reading text-h3 font-bold text-ink">
          If this resonated, the next one will too. Subscribe to BBP Thinking.
        </p>
        <SubscribeBlock />
      </section>
    </main>
  );
}
