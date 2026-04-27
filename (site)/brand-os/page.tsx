import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { SectionHeader } from "@/components/section-header";
import { PrimaryCTA } from "@/components/primary-cta";
import { TextCTA } from "@/components/text-cta";
import { Closer } from "@/components/closer";
import { DIMENSIONS } from "@/lib/content/dimensions";

export const metadata: Metadata = {
  title: "Brand OS™ — The Operating System for Your Brand",
  description:
    "Brand OS™ is BBP's proprietary brand diagnostic — six dimensions, thirty sub-metrics, 750 questions. Composite score, tier, dimension breakdown, prioritised roadmap. Four-week diagnostic engagement.",
  alternates: { canonical: "/brand-os" },
};

const OUTPUTS = [
  "A composite Brand OS™ Score (0–100) and tier — Leader, Challenger, At Risk, or In Crisis.",
  "Six dimension scores, each on a 0–100 scale, with benchmark comparisons against your category.",
  "Thirty sub-metric scores, each with a one-page breakdown of what's working, what's broken, and what to do about it.",
  "A prioritised 12-month roadmap, sequenced by impact and effort, owned by named people on your team and ours.",
  "A board-ready summary deck — the version you can hand to investors, the CFO, or the next CEO.",
  "Optional quarterly re-scoring, so the diagnostic becomes a tracking instrument, not a one-time event.",
];

const WEEKS = [
  {
    number: "Week 1",
    title: "Discovery",
    body: "Stakeholder interviews. Data room access. Document review. Consumer research design.",
  },
  {
    number: "Week 2",
    title: "Diagnostic",
    body: "Brand OS™ instrument runs across the organisation. Audit work, consumer research, financial review, competitive benchmark.",
  },
  {
    number: "Week 3",
    title: "Synthesis",
    body: "Scoring, ranking, gap analysis, roadmap design. Cross-checked against three external benchmarks per dimension.",
  },
  {
    number: "Week 4",
    title: "Read-out",
    body: "Full presentation to leadership. Roadmap walkthrough. Decision: stop here, or move into Design + Deploy.",
  },
];

const MOMENTS = [
  "Before a fundraise, when the brand needs to be legible to investors.",
  "After a fundraise, when the brand needs to scale into the new capital base.",
  "Before a category expansion, to test whether the brand can stretch.",
  "After a leadership change, to give the new CEO or CMO a baseline.",
  "Annually, as a discipline, the way a CFO runs an audit.",
];

export default function BrandOsPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="container-bbp pt-32 pb-20 lg:pt-48 lg:pb-28">
        <Eyebrow>The instrument</Eyebrow>
        <h1 className="heading-serif text-h1 mt-8 max-w-[22ch] font-bold tracking-tight">
          Brand OS™ — the operating system for your brand.
        </h1>
        <p className="heading-serif text-lede mt-8 max-w-reading italic text-muted">
          A proprietary diagnostic that scores your brand across six
          dimensions, thirty sub-metrics, and 750 data points. Built over
          eleven years. Refined across sixty-plus engagements. The
          instrument every BBP engagement starts with.
        </p>
        <div className="mt-12">
          <PrimaryCTA href="/diagnostic">Book a Brand OS™ Diagnostic</PrimaryCTA>
        </div>
      </section>

      {/* Why we built it */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="Why we built it"
          headline={
            <>Most brand audits read like horoscopes. We got tired of writing them.</>
          }
        />
        <div className="mt-16 flex max-w-reading flex-col gap-8">
          <p className="font-sans text-body text-ink">
            The default brand audit is a deck. It has a positioning statement,
            a brand house diagram, three to five recommendations, and a price
            tag. The recommendations sound smart. The CFO can't act on any of
            them. Six months later, nothing has changed in the P&L, and the
            brand audit is in a folder nobody opens.
          </p>
          <p className="font-sans text-body text-ink">
            We built Brand OS™ because brand work deserves the same rigour
            finance work gets. A CFO has a balance sheet, a P&L, and a cash
            flow statement. A brand owner should have the equivalent. Six
            dimensions, thirty sub-metrics, 750 questions, one composite
            score, one tier, one prioritised roadmap.
          </p>
          <p className="font-sans text-body text-ink">
            The instrument is the joint product of BBP's strategy practice —
            led by Ahamed Shine — and the research practice, led by Dr. Sabira
            Nalakath. The methodology, the question bank, the scoring
            framework, and the benchmark architecture were designed by the
            research practice, then stress-tested across sixty-plus engagements
            over eleven years.
          </p>
          <p className="font-sans text-body text-ink">
            It's not a deck. It's an instrument. You can re-run it every
            quarter, every year, every change of leadership. The score moves.
            The roadmap updates. The brand becomes legible to the people who
            fund it.
          </p>
        </div>
      </section>

      {/* Six dimensions */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="The six dimensions"
          headline={<>Six dimensions. Thirty sub-metrics. One score.</>}
          lede="Each dimension carries equal weight in the composite. Each sub-metric is scored 0–100 based on twenty-five diagnostic questions answered through interviews, data analysis, audit, and consumer research. The full Brand OS™ instrument runs 750 questions."
        />
        <div className="mt-16 flex flex-col">
          {DIMENSIONS.map((d, i) => (
            <article
              key={d.number}
              className={`grid grid-cols-1 gap-8 py-12 lg:grid-cols-[120px_1fr] lg:gap-16 ${
                i === 0 ? "border-y-hairline" : "border-b-hairline"
              } border-rule`}
            >
              <Eyebrow tone="muted" className="lg:pt-2">
                {d.number}
              </Eyebrow>
              <div className="flex flex-col gap-6">
                <h3 className="heading-serif text-h3 font-bold text-ink">
                  {d.name}
                </h3>
                <p className="heading-serif text-[22px] italic leading-snug text-ink">
                  {d.question}
                </p>
                <p className="font-sans text-small uppercase tracking-wide text-muted">
                  {d.subMetricsLong}
                </p>
                <p className="max-w-reading font-sans text-body text-ink">
                  {d.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* The output */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="The output"
          headline={<>What you walk away with.</>}
        />
        <ul className="mt-16 flex max-w-reading flex-col gap-6">
          {OUTPUTS.map((line, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-6 border-t-hairline border-rule pt-6"
            >
              <span className="heading-serif text-h4 font-bold text-muted tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-sans text-body text-ink">{line}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* How the engagement runs */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="How the engagement runs"
          headline={<>Four weeks from kick-off to roadmap.</>}
        />
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {WEEKS.map((w) => (
            <div key={w.number} className="flex flex-col gap-6">
              <Eyebrow tone="muted">{w.number}</Eyebrow>
              <h3 className="heading-serif text-h3 font-bold text-ink">
                {w.title}
              </h3>
              <p className="font-sans text-body text-ink">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* When to run it */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="When to run it"
          headline={<>Five moments when the diagnostic earns its fee.</>}
        />
        <ul className="mt-16 flex max-w-reading flex-col">
          {MOMENTS.map((line, i) => (
            <li
              key={i}
              className={`grid grid-cols-[auto_1fr] gap-6 py-6 ${
                i === 0 ? "border-y-hairline" : "border-b-hairline"
              } border-rule`}
            >
              <span className="heading-serif text-h4 font-bold text-muted tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-sans text-body text-ink">{line}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Who runs it */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="Who runs it"
          headline={
            <>Diagnostic co-led by Ahamed Shine and Dr. Sabira Nalakath.</>
          }
        />
        <div className="mt-16 flex max-w-reading flex-col gap-8">
          <p className="font-sans text-body text-ink">
            Every Brand OS™ engagement is co-led by BBP's two founders. Ahamed
            Shine, Principal Consultant — Strategy and Innovation, owns the
            strategic synthesis and the recommendation. Dr. Sabira Nalakath,
            Principal Consultant — Research, owns the methodology, the data,
            and the rigour that makes the score defensible.
          </p>
          <p className="font-sans text-body text-ink">
            This is not a feature of marketing copy. It is how the diagnostic
            was built and how it runs. Strategy without research is opinion.
            Research without strategy is a report. Brand OS™ insists on both,
            in the same room, on every engagement.
          </p>
          <p className="font-sans text-body text-ink">
            The wider team is drawn from the BBP strategy, research, and
            analytics practices. Typical engagement team: four to six people.
            Engagement length: four weeks for the diagnostic, twelve months
            for the full Diagnose-Design-Deploy cycle.
          </p>
        </div>
        <div className="mt-12">
          <TextCTA href="/people">Meet the founders</TextCTA>
        </div>
      </section>

      {/* Closer */}
      <Closer
        eyebrow="Start here"
        headline="Don't take a brand to the board without a Brand OS™ score."
        primary={{ label: "Book the Diagnostic", href: "/diagnostic" }}
        secondary={{
          label: "Download a sample Brand OS™ report",
          href: "/connect#sample-report",
        }}
      />
    </main>
  );
}
