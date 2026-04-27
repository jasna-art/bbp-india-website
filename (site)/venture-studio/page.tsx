import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { PrimaryCTA } from "@/components/primary-cta";

export const metadata: Metadata = {
  title: "BBP Venture Studio — Building Indian Consumer Brands",
  description:
    "The BBP Venture Studio co-founds two to four Indian consumer brands a year. Capital, brand, and operating discipline contributed alongside the founding team.",
  alternates: { canonical: "/venture-studio" },
};

export default function VentureStudioPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Venture Studio"
        headline="We don't only consult on brands. We build them."
        sub="The BBP Venture Studio is where we put our own capital, our own thinking, and our own time into building consumer brands from zero. It exists for two reasons — to keep our practice honest, and to back ideas the consultancy alone can't ship."
      />

      {/* What the Studio does */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="What the Studio does"
          headline={<>Co-founder, not vendor.</>}
        />
        <div className="mt-16 flex max-w-reading flex-col gap-8">
          <p className="font-sans text-body text-ink">
            The Studio incubates two to four new consumer brands a year, in
            categories where we believe Indian consumers are underserved and
            existing brands are structurally complacent. We operate as a
            co-founder, not a vendor — capital, brand, growth strategy, and
            operating discipline contributed alongside the founding team.
          </p>
          <p className="font-sans text-body text-ink">
            A Studio engagement is different from a consulting engagement.
            We're on the cap table. We're in the operating reviews. We carry
            the upside and the downside.
          </p>
          <p className="font-sans text-body text-ink">
            The Studio also serves an internal purpose. It's the proving
            ground for Brand OS™. Every framework we sell to clients is first
            stress-tested on a brand we co-own. If it doesn't work for our
            brands, it doesn't ship to yours.
          </p>
        </div>
      </section>

      {/* How to bring us a venture */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="How to bring us a venture"
          headline={<>One page. Three traits.</>}
        />
        <div className="mt-16 flex max-w-reading flex-col gap-8">
          <p className="font-sans text-body text-ink">
            We look at fifty to a hundred ventures a year and back two to
            four. The ones we back tend to share three traits — a clear
            category dislocation, a founder who can hold both the brand and
            the operating model, and a path to ₹100 Cr revenue with healthy
            margin within five years.
          </p>
          <p className="font-sans text-body text-ink">
            If that sounds like your venture, send us a one-pager. No deck.
            Just the dislocation, the founder story, and the unit economics
            on a single page.
          </p>
          <div className="mt-4">
            <PrimaryCTA href="mailto:hello@bbp-india.com?subject=Venture Studio one-pager">
              Send us your one-pager
            </PrimaryCTA>
          </div>
        </div>
      </section>

      {/* Current portfolio */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="Current portfolio"
          headline={<>Two ventures, both in stealth.</>}
        />
        <p className="mt-8 max-w-reading font-sans text-body text-muted">
          Currently incubating two ventures, both in stealth.
        </p>
      </section>
    </main>
  );
}
