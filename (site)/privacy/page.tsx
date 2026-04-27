import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContentPending } from "@/components/content-pending";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How BBP India collects, uses, and protects information shared through bbp-india.com.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Privacy"
        headline="How we handle the information you share with us."
      />

      <section className="container-bbp section-y">
        <ContentPending
          block="Privacy policy body — single-column reading layout, BBP voice on opening paragraph, standard legal template thereafter"
          source="Section 12 (handoff) / Privacy · counsel-reviewed copy required"
        />
      </section>
    </main>
  );
}
