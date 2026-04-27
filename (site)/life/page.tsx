import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { ContentPending } from "@/components/content-pending";
import { TextCTA } from "@/components/text-cta";

export const metadata: Metadata = {
  title: "Working at BBP — Brand Strategy Careers in Kochi",
  description:
    "A long, honest look at working at BBP India — the team, the work, the compensation, and how we hire.",
  alternates: { canonical: "/life" },
};

export default function LifePage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Life"
        headline="A small, serious place to do the best work of your career."
        sub="BBP is sixty-some people in Kochi who have decided the most interesting brand work in India is being done from outside the metro agency circuit. This page is a long, honest look at what working here actually looks like."
      />

      {/* What the work feels like */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="What the work feels like"
          headline={<>Three to five engagements. Always research first.</>}
        />
        <div className="mt-16 flex max-w-reading flex-col gap-8">
          <p className="font-sans text-body text-ink">
            You'll be on three to five engagements at any given time, two as
            a lead, the rest as support. Every engagement starts with a
            Brand OS™ diagnostic, which means you'll spend real hours in
            primary research, financial review, and competitive benchmarking
            before you write a single recommendation. We don't ship slides
            without evidence.
          </p>
          <p className="font-sans text-body text-ink">
            You'll write. A lot. The Thinking essays are a team effort, not a
            founder soliloquy. If you can't write, you'll be uncomfortable
            here. If you can, you'll find this is one of very few places in
            India where strategists are read, not just billed.
          </p>
          <p className="font-sans text-body text-ink">
            You'll sit close to the founders. The team is small enough that
            Ahamed sees every strategic recommendation and Sabira signs off
            on every research methodology before it ships. That's a feature,
            not a bug. The compounding learning is the whole point.
          </p>
        </div>
      </section>

      {/* What we don't do */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="What we don't do"
          headline={<>A short list. Honest.</>}
        />
        <div className="mt-16 max-w-reading">
          <p className="font-sans text-body text-ink">
            We don't run pitch theatre. We don't bill by the hour. We don't
            have a junior pyramid. We don't do all-night work for vanity
            awards. We don't pretend Kochi is a disadvantage, because it
            isn't.
          </p>
        </div>
      </section>

      {/* Compensation, leave, and the rest */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="Compensation, leave, and the rest"
          headline={<>Plain language. Specifics where we can.</>}
        />
        <div className="mt-16">
          <ContentPending
            block="Salary bands by level. Leave policy. Insurance. Sabbatical eligibility. Plain-language summary."
            source="Section 14 / Compensation · specifics pending"
          />
        </div>
      </section>

      {/* How hiring works */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="How hiring works"
          headline={<>Four steps. Four to six weeks. Slow on purpose.</>}
        />
        <div className="mt-12">
          <TextCTA href="/work-with-us">See open roles</TextCTA>
        </div>
      </section>
    </main>
  );
}
