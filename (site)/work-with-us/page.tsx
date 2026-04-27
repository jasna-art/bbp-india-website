import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { Eyebrow } from "@/components/eyebrow";
import { ROLES } from "@/lib/content/roles";
import { ApplyForm } from "./apply-form";

export const metadata: Metadata = {
  title: "Open Roles at BBP India | Brand Strategy Careers",
  description:
    "Current openings on the BBP team — strategy, research, design, and operating roles. Based in Kochi.",
  alternates: { canonical: "/work-with-us" },
};

const STEPS = [
  {
    number: "One",
    title: "Written response",
    body: "Every applicant submits a short written brief in response to a real problem. No CV-only applications. No one-line cover letters. We read every brief.",
  },
  {
    number: "Two",
    title: "Conversation",
    body: "A 60-minute conversation with one of the practice leads. Not an interview. A working session.",
  },
  {
    number: "Three",
    title: "Case work",
    body: "A small, paid piece of consulting work. Two weeks, on a real engagement. You see how we work. We see how you work.",
  },
  {
    number: "Four",
    title: "Offer",
    body: "If the case work goes well, we make an offer. Senior hires meet both founders before the offer.",
  },
];

export default function WorkWithUsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Work with us"
        headline="Open roles, and how we hire."
      />

      {/* Open roles */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="Open roles"
          headline={<>Currently hiring.</>}
        />
        <ul className="mt-16 flex flex-col">
          {ROLES.map((role, i) => (
            <li
              key={role.slug}
              className={`grid grid-cols-1 gap-6 py-10 lg:grid-cols-[280px_1fr_auto] lg:gap-12 ${
                i === 0 ? "border-y-hairline" : "border-b-hairline"
              } border-rule`}
            >
              <div className="flex flex-col gap-2">
                <h3 className="heading-serif text-h3 font-bold text-ink">
                  {role.title}
                </h3>
                <p className="font-sans text-small text-muted">
                  {role.level} · {role.location}
                </p>
              </div>
              <p className="max-w-reading font-sans text-body text-ink">
                {role.description}
              </p>
              <div className="lg:self-center">
                <Link
                  href="#apply"
                  className="group inline-flex items-center gap-2 border-b-heavy border-ink px-1 py-2 font-sans text-body font-semibold text-ink transition-colors hover:bg-ink hover:text-canvas whitespace-nowrap"
                >
                  <span>Apply</span>
                  <span aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-12 font-sans text-body text-muted max-w-reading">
          Don't see a fit?{" "}
          <Link
            href="#apply"
            className="font-semibold text-ink underline decoration-ink underline-offset-4 hover:text-muted"
          >
            Send a speculative application
          </Link>
          . We hire when the brief is right, even if the role isn't posted.
        </p>
      </section>

      {/* How we hire */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="How we hire"
          headline={<>Four steps. Four to six weeks.</>}
        />
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <article key={s.number} className="flex flex-col gap-6">
              <Eyebrow tone="muted">{s.number}</Eyebrow>
              <h3 className="heading-serif text-h3 font-bold text-ink">
                {s.title}
              </h3>
              <p className="font-sans text-body text-ink">{s.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-16 max-w-reading font-sans text-body text-ink">
          The whole process takes four to six weeks. We don't believe in
          faster hiring at this level.
        </p>
      </section>

      {/* Apply form */}
      <section className="container-bbp section-y" id="apply">
        <SectionHeader
          eyebrow="Apply"
          headline={<>Send your brief.</>}
          lede="Step one of the four-step process. We read every application."
        />
        <div className="mt-16">
          <ApplyForm />
        </div>
      </section>
    </main>
  );
}
