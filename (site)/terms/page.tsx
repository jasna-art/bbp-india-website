import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContentPending } from "@/components/content-pending";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "The terms under which bbp-india.com and BBP India services are provided.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Terms"
        headline="The terms under which this site, and our work, are offered."
      />

      <section className="container-bbp section-y">
        <ContentPending
          block="Terms body — single-column reading layout, BBP voice on opening paragraph, standard legal template thereafter"
          source="Section 12 (handoff) / Terms · counsel-reviewed copy required"
        />
      </section>
    </main>
  );
}
