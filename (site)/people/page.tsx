import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { Callout } from "@/components/callout";
import { TextCTA } from "@/components/text-cta";
import { DummyImage } from "@/components/dummy-image";
import { LEADERSHIP } from "@/lib/content/leadership";

export const metadata: Metadata = {
  title: "The BBP Team — Strategists and Operators",
  description:
    "BBP is a small, senior consulting team co-founded by Ahamed Shine and Dr. Sabira Nalakath, working from Kochi across India. Strategy practice. Research practice. One team.",
  alternates: { canonical: "/people" },
};

export default function PeoplePage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="People"
        headline="Strategists, researchers, and operators. Not personalities."
        sub="BBP is built around a small, senior team that does the work itself. We don't subcontract strategy. We don't run a junior pyramid. The person who pitches you is the person who runs the engagement."
      />

      {/* Founders */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="Founders"
          headline={
            <>BBP was built by two people, and is still run by them.</>
          }
        />
        <p className="mt-8 max-w-reading font-sans text-body text-ink">
          The strategy practice and the research practice — the two halves of
          every Brand OS™ engagement — are led by the founders themselves.
          That isn't a marketing claim. It's how the work actually gets done.
        </p>

        {/* Ahamed */}
        <article
          id="ahamed"
          className="mt-20 grid grid-cols-1 gap-12 border-t-heavy border-ink pt-12 lg:grid-cols-[40%_1fr]"
        >
          <DummyImage
            aspect="square"
            label="Ahamed Shine"
            caption="Founder portrait pending"
          />
          <div className="flex flex-col gap-6">
            <h3 className="heading-serif text-h2 font-bold text-ink">
              Ahamed Shine
            </h3>
            <p className="heading-serif text-lede italic text-muted">
              Founder & Principal Consultant — Strategy and Innovation
            </p>
            <p className="font-sans text-body text-ink">
              Ahamed Shine is the co-founder of BBP India and leads the
              strategy practice. He has spent close to two decades working
              with founders, family businesses, and CMOs across FMCG, retail,
              jewellery, hospitality, and D2C, building the discipline that
              became Brand OS™ and the PSG model.
            </p>
            <p className="font-sans text-body text-ink">
              He writes the BBP Thinking essays, leads every Brand OS™
              diagnostic alongside Dr. Sabira, and sits on the cap table of
              the brands the BBP Venture Studio backs. He works out of Kochi
              and travels weekly across India.
            </p>
            <Callout>If the strategy matters, he runs it.</Callout>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              <li>
                <Link
                  href="mailto:shine@bbp-india.com"
                  className="font-sans text-body text-ink underline decoration-ink underline-offset-4 hover:text-muted"
                >
                  shine@bbp-india.com
                </Link>
              </li>
              <li>
                <TextCTA href="/thinking">Recent essays</TextCTA>
              </li>
            </ul>
          </div>
        </article>

        {/* Sabira */}
        <article
          id="sabira"
          className="mt-20 grid grid-cols-1 gap-12 border-t-heavy border-ink pt-12 lg:grid-cols-[40%_1fr]"
        >
          <DummyImage
            aspect="square"
            label="Dr. Sabira Nalakath"
            caption="Founder portrait pending"
          />
          <div className="flex flex-col gap-6">
            <h3 className="heading-serif text-h2 font-bold text-ink">
              Dr. Sabira Nalakath
            </h3>
            <p className="heading-serif text-lede italic text-muted">
              Co-Founder, COO & Principal Consultant — Research
            </p>
            <p className="font-sans text-body text-ink">
              Dr. Sabira Nalakath is the co-founder and Chief Operating
              Officer of BBP India, and leads the research practice. The
              doctorate is real, and so is its purpose — every Brand OS™
              score, every consumer insight, every category benchmark BBP
              publishes is built on research methodology she designed and
              signs off on.
            </p>
            <p className="font-sans text-body text-ink">
              She runs the operating engine of the firm — research,
              analytics, delivery — and co-leads every Brand OS™ diagnostic
              with Ahamed. The strategy practice is the visible half of BBP.
              The research practice is the half that makes the strategy
              defensible. Both halves are equal.
            </p>
            <Callout>If the evidence matters, she runs it.</Callout>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              <li>
                <Link
                  href="mailto:sabi@bbp-india.com"
                  className="font-sans text-body text-ink underline decoration-ink underline-offset-4 hover:text-muted"
                >
                  sabi@bbp-india.com
                </Link>
              </li>
              <li>
                <TextCTA href="/thinking">Recent papers</TextCTA>
              </li>
            </ul>
          </div>
        </article>
      </section>

      {/* Leadership team */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="Leadership team"
          headline={<>The senior practitioners alongside the founders.</>}
        />
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP.map((leader) => (
            <article key={leader.name} className="flex flex-col gap-5">
              <DummyImage aspect="square" label={leader.name} />
              <div className="flex flex-col gap-2">
                <h3 className="heading-serif text-h4 font-bold text-ink">
                  {leader.name}
                </h3>
                <p className="font-sans text-small italic text-muted">
                  {leader.role}
                </p>
                <p className="font-sans text-small text-ink">{leader.bio}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <TextCTA href="/work-with-us">Meet the wider team</TextCTA>
        </div>
      </section>
    </main>
  );
}
