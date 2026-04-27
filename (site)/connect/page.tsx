import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { PrimaryCTA } from "@/components/primary-cta";
import { Eyebrow } from "@/components/eyebrow";
import { BriefForm } from "./brief-form";

export const metadata: Metadata = {
  title: "Connect with BBP India",
  description:
    "Three ways to start with BBP — book the Brand OS™ Diagnostic, send a brief, or bring us a venture. Kochi office. shine@bbp-india.com.",
  alternates: { canonical: "/connect" },
};

export default function ConnectPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Connect"
        headline="Three ways to start a conversation with BBP."
      />

      {/* Path 1 */}
      <section className="container-bbp section-y">
        <article className="flex flex-col gap-8 border-t-heavy border-ink pt-10 max-w-reading">
          <Eyebrow>Path 1</Eyebrow>
          <h2 className="heading-serif text-h2 font-bold text-ink">
            Run the Brand OS™ Diagnostic.
          </h2>
          <p className="font-sans text-body text-ink">
            The fastest, most rigorous way to start. Two to four weeks. One
            diagnostic. Clear roadmap. Decide everything else after.
          </p>
          <div>
            <PrimaryCTA href="/diagnostic">Book the diagnostic</PrimaryCTA>
          </div>
        </article>
      </section>

      {/* Path 2 — brief */}
      <section className="container-bbp section-y" id="send-a-brief">
        <article className="flex flex-col gap-8 border-t-heavy border-ink pt-10">
          <Eyebrow>Path 2</Eyebrow>
          <h2 className="heading-serif text-h2 max-w-reading font-bold text-ink">
            Send us a brief.
          </h2>
          <p className="max-w-reading font-sans text-body text-ink">
            You have a specific problem. You want to talk to a strategist.
            We'll come back within two business days with a thirty-minute
            conversation slot.
          </p>
          <div className="mt-4">
            <BriefForm />
          </div>
        </article>
      </section>

      {/* Path 3 — venture */}
      <section className="container-bbp section-y" id="sample-report">
        <article className="flex flex-col gap-8 border-t-heavy border-ink pt-10 max-w-reading">
          <Eyebrow>Path 3</Eyebrow>
          <h2 className="heading-serif text-h2 font-bold text-ink">
            Bring us a venture.
          </h2>
          <p className="font-sans text-body text-ink">
            You're building a brand from zero and you want to know if the BBP
            Venture Studio is the right co-founder. Send a one-pager.
          </p>
          <div>
            <PrimaryCTA href="mailto:hello@bbp-india.com?subject=Venture Studio one-pager">
              One-pager submission
            </PrimaryCTA>
          </div>
        </article>
      </section>

      {/* Office, contact, social */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="Office, contact, social"
          headline={<>Kochi. Direct lines. One business day.</>}
        />
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="flex flex-col gap-4 border-t-hairline border-rule pt-8">
            <Eyebrow tone="muted">Kochi</Eyebrow>
            <address className="not-italic font-sans text-body text-ink">
              No. 46/2978, Third Avenue
              <br />
              Sobha Road, Vennala
              <br />
              Kochi, Kerala 682028
              <br />
              India
            </address>
            <a
              href="tel:+917356444771"
              className="font-sans text-body text-ink underline decoration-ink underline-offset-4 transition-colors hover:text-muted"
            >
              +91 73564 44771
            </a>
          </div>
          <div className="flex flex-col gap-4 border-t-hairline border-rule pt-8">
            <Eyebrow tone="muted">Email</Eyebrow>
            <ul className="flex flex-col gap-3">
              <li className="font-sans text-body text-ink">
                Senior strategy:{" "}
                <a
                  href="mailto:shine@bbp-india.com"
                  className="underline decoration-ink underline-offset-4 hover:text-muted"
                >
                  shine@bbp-india.com
                </a>
              </li>
              <li className="font-sans text-body text-ink">
                Senior research:{" "}
                <a
                  href="mailto:sabi@bbp-india.com"
                  className="underline decoration-ink underline-offset-4 hover:text-muted"
                >
                  sabi@bbp-india.com
                </a>
              </li>
              <li className="font-sans text-body text-ink">
                General:{" "}
                <a
                  href="mailto:hello@bbp-india.com"
                  className="underline decoration-ink underline-offset-4 hover:text-muted"
                >
                  hello@bbp-india.com
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 border-t-hairline border-rule pt-8">
            <Eyebrow tone="muted">Hours</Eyebrow>
            <p className="font-sans text-body text-ink">
              Monday to Friday, 9.30 to 6.30 IST. We respond to enquiries
              within one business day.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
