import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { TextCTA } from "@/components/text-cta";
import { Closer } from "@/components/closer";

export const metadata: Metadata = {
  title: "What We Do — Brand, Marketing, Growth, Experience",
  description:
    "BBP runs four integrated practices — Brand, Marketing, Growth, Experience — built around a single instrument, Brand OS™. The PSG model: Profitability, Sustenance, Growth.",
  alternates: { canonical: "/what-we-do" },
};

const PSG = [
  {
    title: "Profitability",
    body: "Brand premium that holds. Margin that compounds. Pricing power that doesn't depend on discount cycles. We engineer the brand for the P&L.",
  },
  {
    title: "Sustenance",
    body: "Relevance across decades, not quarters. The brand survives generational shifts in consumer behaviour, channel mix, and category structure.",
  },
  {
    title: "Growth",
    body: "Compounding, not linear. Earned, not bought. We grow the brand by deepening it, not by spending more on it.",
  },
];

const PRACTICES = [
  {
    title: "Brand",
    body: "Purpose, positioning, architecture, identity. The strategic chassis.",
    href: "/solutions/brand",
  },
  {
    title: "Marketing",
    body: "Communication, content, channels, performance. The expression layer.",
    href: "/solutions/marketing",
  },
  {
    title: "Growth",
    body: "Distribution, pricing, retention, expansion. The compounding engine.",
    href: "/solutions/growth",
  },
  {
    title: "Experience",
    body: "Product, service, retail, digital. The touchpoint layer where the brand actually lives.",
    href: "/solutions/experience",
  },
];

export default function WhatWeDoPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="What we do"
        headline="Brand, run as an operating system."
        sub="BBP is a Profitability, Sustenance, and Growth consultancy built around a single conviction — that brand is not an asset, an identity, or a campaign. It's the operating system of the business. We diagnose it, design it, and deploy it that way."
      />

      {/* PSG model */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="The PSG model"
          headline={<>Three outcomes. One discipline.</>}
        />
        <div className="mt-16 flex max-w-reading flex-col gap-8">
          <p className="font-sans text-body text-ink">
            Most consultancies offer either growth or branding. Either the
            McKinsey deck or the agency campaign. We don't see those as
            separate problems, because they aren't.
          </p>
          <p className="font-sans text-body text-ink">
            A brand that grows but doesn't sustain is a sugar high. A brand
            that sustains but doesn't grow is a museum piece. A brand that's
            profitable today but not future-ready is a liability dressed as an
            asset. PSG is the discipline of holding all three at once.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
          {PSG.map((p) => (
            <div
              key={p.title}
              className="flex flex-col gap-6 border-t-heavy border-ink pt-8"
            >
              <h3 className="heading-serif text-h3 font-bold text-ink">
                {p.title}
              </h3>
              <p className="font-sans text-body text-ink">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Four solution areas */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="The four solution areas"
          headline={<>Four practices. One operating system.</>}
        />
        <div className="mt-16 flex max-w-reading flex-col gap-8">
          <p className="font-sans text-body text-ink">
            Every BBP engagement starts with Brand OS™. The diagnostic
            surfaces the binding constraint. The constraint determines which
            of our four solution areas leads the engagement. Most engagements
            involve two or three. The integration is the point.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {PRACTICES.map((p) => (
            <article
              key={p.title}
              className="flex flex-col gap-6 border-t-hairline border-rule pt-8"
            >
              <h3 className="heading-serif text-h3 font-bold text-ink">
                {p.title}
              </h3>
              <p className="font-sans text-body text-ink">{p.body}</p>
              <div>
                <TextCTA href={p.href}>Visit the {p.title} practice</TextCTA>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* The Rectangular Loop */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="The Rectangular Loop"
          headline={<>Process. Culture. Experience. Business. Repeat.</>}
        />
        <div className="mt-16 flex max-w-reading flex-col gap-8">
          <p className="font-sans text-body text-ink">
            Internally, every BBP engagement runs on what we call the
            Rectangular Loop — a continuous cycle that connects four functions
            most consultancies treat as separate.
          </p>
          <p className="font-sans text-body text-ink">
            Process designs the systems aligned to the strategy. Culture
            shapes the behaviours and rituals that bring those systems to
            life. Experience is what the customer, the employee, and the
            partner actually feel. Business is the result — measurable,
            repeatable, profitable transactions.
          </p>
          <p className="font-sans text-body text-ink">
            Then the loop sharpens itself and runs again. That's how we keep
            transformation from being a one-time project.
          </p>
        </div>
      </section>

      {/* Closer */}
      <Closer
        eyebrow="Start here"
        headline="Every engagement starts with the diagnostic."
        primary={{ label: "Run the Brand OS™ Diagnostic", href: "/diagnostic" }}
        secondary={{ label: "Talk to us first", href: "/connect" }}
      />
    </main>
  );
}
