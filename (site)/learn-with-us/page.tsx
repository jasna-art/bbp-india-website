import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { TextCTA } from "@/components/text-cta";

export const metadata: Metadata = {
  title:
    "Brand OS™ Practitioner Program, Executive Briefings, and the BBP Internship",
  description:
    "The Brand OS™ Practitioner Program, executive briefings, and a paid six-month internship — taught by, and worked alongside, the BBP practice.",
  alternates: { canonical: "/learn-with-us" },
};

export default function LearnWithUsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Learn with us"
        headline="The Practitioner Program, executive briefings, and the BBP internship."
        sub="BBP runs the Brand OS™ Practitioner Program, in-house executive briefings, and a paid six-month internship. All taught by, and worked alongside, the people who do the work."
      />

      {/* Brand OS™ Practitioner Program */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="The Brand OS™ Practitioner Program"
          headline={<>Two days. The whole instrument. In-house.</>}
        />
        <div className="mt-16 grid max-w-3xl grid-cols-1 gap-12 lg:grid-cols-[1fr_auto]">
          <p className="font-sans text-body text-ink">
            A two-day program for in-house brand and marketing teams that
            want to run the Brand OS™ instrument themselves. You leave with
            the framework, the question bank, the scoring methodology, and
            the right to use Brand OS™ inside your organisation.
          </p>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-4 lg:grid-cols-1">
            <div>
              <dt className="font-sans text-eyebrow uppercase text-muted">
                Format
              </dt>
              <dd className="mt-1 font-sans text-body text-ink">
                Two-day in-house · on-site
              </dd>
            </div>
            <div>
              <dt className="font-sans text-eyebrow uppercase text-muted">
                Cohort
              </dt>
              <dd className="mt-1 font-sans text-body text-ink">
                Up to twelve practitioners
              </dd>
            </div>
            <div>
              <dt className="font-sans text-eyebrow uppercase text-muted">
                Price
              </dt>
              <dd className="mt-1 font-sans text-body text-ink">
                On request
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-12">
          <TextCTA href="mailto:hello@bbp-india.com?subject=Brand%20OS%E2%84%A2%20Practitioner%20Program">
            Request the program brief
          </TextCTA>
        </div>
      </section>

      {/* Executive briefings */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="Executive briefings"
          headline={<>One hour. On-site. Free for qualified organisations.</>}
        />
        <div className="mt-16 flex max-w-reading flex-col gap-8">
          <p className="font-sans text-body text-ink">
            A one-hour, on-site briefing for a leadership team or board on
            the state of brand profitability in your category. Built from
            BBP's research and field experience. Free for qualified
            organisations.
          </p>
          <div>
            <TextCTA href="mailto:hello@bbp-india.com?subject=Executive briefing request">
              Request a briefing
            </TextCTA>
          </div>
        </div>
      </section>

      {/* Intern with us */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="Intern with us"
          headline={<>Six months. Paid. Start your career inside the practice.</>}
        />
        <div className="mt-16 flex max-w-reading flex-col gap-8">
          <p className="font-sans text-body text-ink">
            An opportunity to start your career with BBP — a paid six-month
            internship inside the strategy, research, or design practice.
            Real engagements, real research, and the same access to the
            founders that the team has. Open to recent graduates and
            final-year students.
          </p>
          <div>
            <TextCTA href="mailto:hr@bbp-india.com?subject=Internship application">
              Apply for an internship
            </TextCTA>
          </div>
        </div>
      </section>
    </main>
  );
}
