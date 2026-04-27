import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { PrimaryCTA } from "@/components/primary-cta";
import { TextCTA } from "@/components/text-cta";
import { BackLink } from "@/components/back-link";

export const metadata: Metadata = {
  title: "Brand OS™ Diagnostic — Launching Soon",
  description:
    "Intake for the Brand OS™ Diagnostic opens later this year. Leave your email and we'll write the moment slots are available.",
  alternates: { canonical: "/diagnostic" },
};

export default function DiagnosticLaunchingSoonPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="container-bbp pt-32 pb-16 lg:pt-48 lg:pb-24">
        <BackLink
          href="/brand-os"
          label="Back to Brand OS™"
          className="mb-10"
        />
        <Eyebrow>Brand OS™ Diagnostic</Eyebrow>
        <h1 className="heading-serif text-h1 mt-8 max-w-[18ch] font-bold tracking-tight">
          Launching soon.
        </h1>
        <p className="heading-serif text-lede mt-8 max-w-reading italic text-muted">
          Intake for the Brand OS™ Diagnostic opens later this year. We're
          finalising the engagement runbook, the benchmark library, and the
          delivery cohort. Leave a note and we'll write the moment slots are
          available.
        </p>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
          <PrimaryCTA href="mailto:hello@bbp-india.com?subject=Notify%20me%20when%20the%20Brand%20OS%E2%84%A2%20Diagnostic%20opens">
            Notify me when intake opens
          </PrimaryCTA>
          <TextCTA href="/connect#send-a-brief">Or send a brief instead</TextCTA>
        </div>
      </section>

      {/* What it is */}
      <section className="container-bbp section-y">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Eyebrow tone="muted">What you're booking</Eyebrow>
          <div className="flex max-w-reading flex-col gap-6">
            <p className="font-sans text-body text-ink">
              A four-week diagnostic that scores your brand across six
              dimensions, thirty sub-metrics, and 750 questions. You leave
              with a composite score, a tier (Leader, Challenger, At Risk, In
              Crisis), six dimension scores, thirty sub-metric breakdowns,
              and a sequenced 12-month roadmap.
            </p>
            <p className="font-sans text-body text-ink">
              Co-led by Ahamed Shine and Dr. Sabira Nalakath. Engagement team
              of four to six. The full methodology is on the{" "}
              <Link
                href="/brand-os"
                className="underline decoration-ink underline-offset-4 hover:text-muted"
              >
                Brand OS™ page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="container-bbp section-y">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Eyebrow tone="muted">Status</Eyebrow>
          <ul className="flex max-w-reading flex-col">
            <li className="grid grid-cols-[120px_1fr] gap-6 border-y-hairline border-rule py-6">
              <span className="heading-serif text-h4 font-bold text-muted">
                Now
              </span>
              <p className="font-sans text-body text-ink">
                Pilot engagements with a small cohort of Indian consumer
                brands. Closed list, by introduction.
              </p>
            </li>
            <li className="grid grid-cols-[120px_1fr] gap-6 border-b-hairline border-rule py-6">
              <span className="heading-serif text-h4 font-bold text-muted">
                Later this year
              </span>
              <p className="font-sans text-body text-ink">
                General intake opens. Email subscribers and pilot referrers
                get the first slots.
              </p>
            </li>
            <li className="grid grid-cols-[120px_1fr] gap-6 border-b-hairline border-rule py-6">
              <span className="heading-serif text-h4 font-bold text-muted">
                Until then
              </span>
              <p className="font-sans text-body text-ink">
                If you want to talk to a strategist before the diagnostic
                opens,{" "}
                <Link
                  href="/connect#send-a-brief"
                  className="underline decoration-ink underline-offset-4 hover:text-muted"
                >
                  send a brief
                </Link>
                . We'll come back within one business day.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
