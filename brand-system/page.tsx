import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { SectionHeader } from "@/components/section-header";
import { PrimaryCTA } from "@/components/primary-cta";
import { TextCTA } from "@/components/text-cta";
import { Callout } from "@/components/callout";
import { EditorialTable } from "@/components/editorial-table";
import { FormField, TextAreaField } from "@/components/form-field";
import { SubscribeBlock } from "@/components/subscribe-block";
import { ScoreDisplay } from "@/components/score-display";
import { FilterChip } from "@/components/filter-chip";

export const metadata: Metadata = {
  title: "Brand system",
  description:
    "Internal reference. Tokens, type scale, and components for the BBP India site.",
  robots: { index: false, follow: false },
};

const colorTokens = [
  { name: "ink", hex: "#1A1A1A", role: "Body, headlines, structure" },
  { name: "canvas", hex: "#FFFFFF", role: "Page and surface background" },
  { name: "muted", hex: "#6B6B6B", role: "Captions, role labels, asides" },
  { name: "rule", hex: "#D4D4D4", role: "Dividers, hairlines, input borders" },
  { name: "surface", hex: "#FAFAFA", role: "Code blocks, quiet hover only" },
] as const;

const typeRows = [
  { label: "Eyebrow", className: "text-eyebrow font-sans uppercase font-semibold", sample: "SECTION LABEL" },
  { label: "Small", className: "text-small font-sans text-muted", sample: "Caption-size text used for meta and bylines." },
  { label: "Body", className: "text-body font-sans", sample: "Body copy at 18px / 1.6 line-height. The reading default." },
  { label: "H4", className: "text-h4 font-sans font-semibold", sample: "H4 inline title" },
  { label: "H3", className: "heading-serif text-h3 font-bold", sample: "H3 subsection headline" },
  { label: "H2", className: "heading-serif text-h2 font-bold", sample: "H2 section headline" },
  { label: "H1", className: "heading-serif text-h1 font-bold tracking-tight", sample: "H1 page title" },
  { label: "Hero", className: "heading-serif text-hero font-bold tracking-tight", sample: "Hero headline" },
  { label: "Display", className: "heading-serif text-display font-bold tracking-tight", sample: "Display" },
  { label: "Lede", className: "heading-serif text-lede italic text-muted", sample: "Lede / dek — italic Source Serif in muted tone." },
];

const sixDimensions = [
  { label: "Identity", description: "Who the brand is. The story it can tell with a straight face." },
  { label: "Equity", description: "What the brand has earned in memory, trust, and pricing power." },
  { label: "Experience", description: "What the brand actually delivers, from first ad to twentieth purchase." },
  { label: "Distribution", description: "Where the brand is and isn't, and what that costs to defend." },
  { label: "Profitability", description: "What the brand contributes to the P&L, after the marketing line." },
  { label: "Resilience", description: "What survives a category shift, a leadership change, or a recession." },
];

export default function BrandSystem() {
  return (
    <main id="main">
      {/* Page header */}
      <section className="container-bbp section-y">
        <Eyebrow>Internal reference</Eyebrow>
        <h1 className="heading-serif text-h1 font-bold tracking-tight mt-6">
          Brand system.
        </h1>
        <p className="heading-serif text-lede italic text-muted mt-6 max-w-reading">
          The tokens, type scale, and components that build bbp-india.com. If a
          section of the site does not use this kit, it is wrong and gets rebuilt.
        </p>
      </section>

      <hr className="border-t-heavy border-ink" />

      {/* Colour tokens */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="01 · Tokens"
          headline="Colour."
          lede="Two brand colours, two functional grays, one near-white. Nothing else exists."
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {colorTokens.map((c) => (
            <div key={c.name} className="flex flex-col gap-4">
              <div
                className="h-40 w-full border-hairline border-rule"
                style={{ backgroundColor: c.hex }}
                aria-hidden
              />
              <div className="flex flex-col gap-1">
                <Eyebrow>--{c.name}</Eyebrow>
                <p className="font-mono text-small text-ink">{c.hex}</p>
                <p className="font-sans text-small text-muted">{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t-hairline border-rule" />

      {/* Type scale */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="02 · Tokens"
          headline="Type scale."
          lede="Source Serif 4 for headlines and ledes. Inter for body and UI. JetBrains Mono for technical content. Nothing else."
        />
        <div className="mt-16 flex flex-col">
          {typeRows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-8 ${
                i === 0 ? "border-y-hairline" : "border-b-hairline"
              } border-rule`}
            >
              <Eyebrow tone="muted" className="md:pt-2">
                {row.label}
              </Eyebrow>
              <p className={row.className}>{row.sample}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t-hairline border-rule" />

      {/* Section header */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="03 · Components"
          headline="Section header."
          lede="The pattern that opens every section. Used 60+ times across the site."
        />
        <div className="mt-16 border-l-heavy border-ink pl-8">
          <SectionHeader
            eyebrow="Example eyebrow"
            headline="A section headline rendered in Source Serif."
            lede="And the optional italic lede that sits below it in muted tone."
          />
        </div>
      </section>

      <hr className="border-t-hairline border-rule" />

      {/* CTAs */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="04 · Components"
          headline="Calls to action."
          lede="Primary buttons invert on hover. Text links shift their arrow on hover. No other state."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <Eyebrow tone="muted">Primary CTA</Eyebrow>
            <div>
              <PrimaryCTA href="#">Book the Diagnostic</PrimaryCTA>
            </div>
            <p className="font-sans text-small text-muted max-w-reading">
              Bold ink text on canvas with a 2px ink underline. Hover inverts to
              ink background, canvas text. Arrow moves 4px right.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Eyebrow tone="muted">Text CTA</Eyebrow>
            <div>
              <TextCTA href="#">Read all essays</TextCTA>
            </div>
            <p className="font-sans text-small text-muted max-w-reading">
              Underlined link with arrow. Used inline in body copy and on cards.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t-hairline border-rule" />

      {/* Callout */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="05 · Components"
          headline="Callout."
          lede="Italic Source Serif with a 2px left rule. Used for pull-quotes and editorial emphasis."
        />
        <div className="mt-16">
          <Callout attribution="Sample attribution, Role">
            We don't make brands more creative. We make them more profitable.
          </Callout>
        </div>
      </section>

      <hr className="border-t-hairline border-rule" />

      {/* Editorial table */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="06 · Components"
          headline="Editorial table."
          lede="Heavy ink rule above and below the header. Hairlines between rows. No fills, no zebra stripes."
        />
        <div className="mt-16">
          <EditorialTable
            headers={["Dimension", "What it measures"]}
            rows={sixDimensions.map((d) => ({
              label: d.label,
              description: d.description,
            }))}
          />
        </div>
      </section>

      <hr className="border-t-hairline border-rule" />

      {/* Score display */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="07 · Components"
          headline="Score display."
          lede="Used in case studies for Brand OS™ score changes. Static. No gauge, no progress bar."
        />
        <div className="mt-16">
          <ScoreDisplay before={47} after={78} />
        </div>
      </section>

      <hr className="border-t-hairline border-rule" />

      {/* Filter chips */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="08 · Components"
          headline="Filter chips."
          lede="Text-only filter pills. Used on Stories and Thinking. Active state has an underline. That's it."
        />
        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3">
          <FilterChip href="#" active>
            All
          </FilterChip>
          <FilterChip href="#">Brand</FilterChip>
          <FilterChip href="#">Marketing</FilterChip>
          <FilterChip href="#">Growth</FilterChip>
          <FilterChip href="#">Experience</FilterChip>
          <FilterChip href="#">Field notes</FilterChip>
        </div>
      </section>

      <hr className="border-t-hairline border-rule" />

      {/* Form fields */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="09 · Components"
          headline="Form fields."
          lede="Inputs use a single 1px hairline at the bottom. Focus deepens to a 2px ink rule. No fills, no rounded corners, no decoration."
        />
        <form className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl">
          <FormField label="Name" name="name" required />
          <FormField label="Role" name="role" />
          <FormField label="Organisation" name="org" />
          <FormField label="Email" name="email" type="email" required />
          <TextAreaField
            className="md:col-span-2"
            label="Brief"
            name="brief"
            placeholder="What's the situation?"
          />
          <FormField
            label="Email (error state demo)"
            name="email-error"
            type="email"
            error="Enter a valid work email address."
          />
          <div className="md:col-span-2 pt-4">
            <PrimaryCTA type="submit">Send brief</PrimaryCTA>
          </div>
        </form>
      </section>

      <hr className="border-t-hairline border-rule" />

      {/* Subscribe block */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="10 · Components"
          headline="Subscribe block."
          lede="The only bordered container on the site. Sits inline on /thinking, never as a popup."
        />
        <div className="mt-16">
          <SubscribeBlock />
        </div>
      </section>

      <hr className="border-t-hairline border-rule" />

      {/* Spacing */}
      <section className="container-bbp section-y">
        <SectionHeader
          eyebrow="11 · Layout"
          headline="Whitespace."
          lede="Sections breathe at 200px top and bottom on desktop, 120px on mobile. The container caps at 1280px. The reading column caps at 680px."
        />
        <div className="mt-16 flex flex-col gap-6">
          <div className="border-hairline border-rule p-8">
            <Eyebrow tone="muted">Reading column · 680px max</Eyebrow>
            <p className="mt-4 font-sans text-body max-w-reading">
              Long-form text never exceeds 680 pixels. This keeps the line length
              between roughly 60 and 75 characters — the editorial sweet spot. If
              a paragraph runs wider than this on desktop, the reader's eye will
              lose its place between lines and the page will read as a brochure.
            </p>
          </div>
          <div className="border-hairline border-rule p-8">
            <Eyebrow tone="muted">Container · 1280px max</Eyebrow>
            <p className="mt-4 font-sans text-body">
              Multi-column grids and tables can use the full 1280px container.
              Side gutters auto-center on viewports wider than the container.
            </p>
          </div>
        </div>
      </section>

      {/* Closer — the only inverted section. */}
      <section className="bg-ink text-canvas">
        <div className="container-bbp section-y flex flex-col gap-8 items-start">
          <Eyebrow tone="muted" className="text-rule">
            12 · Inverted section
          </Eyebrow>
          <h2 className="heading-serif text-h2 font-bold text-canvas max-w-reading">
            Colour inversion is permitted in exactly one place. It must be used there.
          </h2>
          <p className="font-sans text-body text-rule max-w-reading">
            Reserved for the homepage closer and rare moments of editorial weight.
            If you find yourself reaching for the inverted treatment elsewhere, the
            section needs better typography, not a darker background.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 sm:items-center pt-2">
            <PrimaryCTA href="#" className="bg-ink text-canvas border-canvas hover:bg-canvas hover:text-ink">
              Book the Diagnostic
            </PrimaryCTA>
            <TextCTA href="#" className="text-canvas decoration-canvas hover:text-rule">
              Send a brief instead
            </TextCTA>
          </div>
        </div>
      </section>
    </main>
  );
}
