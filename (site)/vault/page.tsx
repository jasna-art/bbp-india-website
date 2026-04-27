import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { TextCTA } from "@/components/text-cta";
import { DummyImage } from "@/components/dummy-image";
import { VAULT_ITEMS } from "@/lib/content/vault";

export const metadata: Metadata = {
  title: "The BBP Vault — Visual Archive",
  description:
    "Selected design work, identity systems, and packaging from eleven years of BBP engagements and ventures.",
  alternates: { canonical: "/vault" },
};

export default function VaultPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Vault"
        headline="The visual archive of eleven years."
        sub="Selected design work, identity systems, packaging, and visual experiments from across BBP's case work and ventures. Curated rather than complete. Updated quarterly."
      />

      {/* Image grid */}
      <section className="container-bbp section-y">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {VAULT_ITEMS.map((item) => (
            <figure key={item.slug} className="flex flex-col gap-3">
              <DummyImage
                aspect="square"
                label={item.brand}
                caption={`${item.engagement} · ${item.year}`}
              />
              <figcaption className="font-sans text-small text-muted">
                {item.brand} · {item.engagement} · {item.year}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* The fish, retired */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="The fish, retired"
          headline={<>Honoured here. Where it belongs.</>}
        />
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[40%_1fr] lg:items-start">
          <DummyImage
            aspect="square"
            label="Darwin's Fish"
            caption="2016–2025 · retired wordmark"
          />
          <div className="flex flex-col gap-6">
            <p className="font-sans text-body text-ink">
              For nine years, BBP's mark was a walking fish — Darwin's Fish —
              a sketch from the original theory of evolution. In 2025, we
              retired the fish and shipped a new identity system that better
              matched the consultancy we've become. The fish is honoured
              here, in the Vault, where it belongs.
            </p>
            <div>
              <TextCTA href="/thinking/bury-the-fish">
                Read the essay — "It's Time to Bury the Fish"
              </TextCTA>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
