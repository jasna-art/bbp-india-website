# BBP India website — developer handoff

This is the source for **bbp-india.com**, scaffolded against a comprehensive build brief and content document supplied by the client (Ahamed Shine, BBP India co-founder). What follows is the minimum a dev needs to pick this up, run it, and finish the launch tasks.

## 1. Stack

- **Next.js 14.2.35** (App Router, React 18.3.1, TypeScript strict)
- **Tailwind CSS 3.4** with a locked palette — only `ink`, `canvas`, `muted`, `rule`, `surface` are available; generic utilities like `bg-blue-500` or `rounded-lg` will not compile
- **next/font/google** loading Source Serif 4 (display), Inter (body), JetBrains Mono (code)
- **pnpm** (v10) for package management
- **Forms**: React server actions + `useFormState` from `react-dom`
- **No CMS yet** — Stories and Thinking content lives in `lib/content/*.ts` arrays. Migrate to Sanity (or similar) when content volume justifies it.

## 2. Run it locally

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck
pnpm build        # production verify (do NOT run while pnpm dev is up — they share .next and clobber each other)
pnpm lint
```

Node 20+ recommended. Node 24 was used during the build.

## 3. Project map

```
app/
├── (site)/                 ← marketing pages with header + footer
│   ├── layout.tsx          ← wraps every page with SiteHeader + SiteFooter
│   ├── page.tsx            ← homepage (8 sections, Organization JSON-LD)
│   ├── brand-os/           ← Brand OS™ methodology page
│   ├── diagnostic/         ← "Launching soon" page (booking destination)
│   ├── what-we-do/
│   ├── solutions/[practice]/ ← 4 dynamic routes: brand, marketing, growth, experience
│   ├── connect/
│   │   ├── page.tsx        ← three contact paths
│   │   ├── brief-form.tsx  ← client form, useFormState
│   │   └── actions.ts      ← server action: sendBrief (stubbed)
│   ├── people/
│   ├── stories/
│   │   ├── page.tsx        ← hub, organised by practice category
│   │   └── [slug]/page.tsx ← case study template (5 sections + score display)
│   ├── thinking/
│   │   ├── page.tsx        ← hub + Profitability Index series block
│   │   └── [slug]/page.tsx ← article template + Article JSON-LD
│   ├── venture-studio/
│   ├── life/
│   ├── work-with-us/
│   │   ├── page.tsx        ← roles + 4-step process + apply form section (#apply)
│   │   ├── apply-form.tsx  ← name/email/phone/role/brief/resume/portfolio
│   │   └── actions.ts      ← server action: sendApplication (stubbed)
│   ├── learn-with-us/
│   ├── vault/
│   ├── privacy/
│   └── terms/
├── brand-system/page.tsx   ← noindex internal reference (tokens, type, components)
├── layout.tsx              ← root: html, fonts, skip link, Cursor mount
├── globals.css             ← tokens, prose-bbp article styles, print, cursor visibility
├── not-found.tsx           ← 404
├── sitemap.ts              ← auto sitemap.xml
└── robots.ts               ← /robots.txt

components/
├── site-header.tsx         ← sticky, scroll-aware, multi-dropdown nav (client)
├── site-footer.tsx         ← four columns + copyright strip
├── mobile-menu.tsx         ← full-screen overlay (client)
├── wordmark.tsx            ← BBP wordmark (Inter Black, tight tracking)
├── cursor.tsx              ← custom cursor (↑↓ arrows / dot on click), respects reduced-motion
├── eyebrow.tsx
├── section-header.tsx      ← eyebrow + H2 + lede pattern (used 60+ times)
├── page-hero.tsx           ← reusable hero with optional `back` link
├── primary-cta.tsx         ← bold ink button, inverts on hover
├── text-cta.tsx            ← underlined arrow link
├── back-link.tsx           ← ← Back to [section] (used on /thinking/[slug] etc.)
├── callout.tsx             ← italic Source Serif behind 2px ink rule
├── editorial-table.tsx     ← heavy rule + hairlines, no fills
├── filter-chip.tsx         ← currently unused after stories restructure
├── form-field.tsx          ← FormField + TextAreaField (hairline-bottom inputs)
├── subscribe-block.tsx     ← bordered email capture, only border container on the site
├── score-display.tsx       ← Brand OS™ score before/after
├── closer.tsx              ← inverted dark closer block (homepage section 8 etc.)
├── content-pending.tsx     ← currently a no-op (placeholder markers removed)
└── dummy-image.tsx         ← solid ink placeholder for portraits/vault/leadership

lib/
├── nav.ts                  ← PRIMARY_NAV + FOOTER_NAV config + SITE_URL
├── cn.ts                   ← class merger
└── content/
    ├── dimensions.ts       ← Brand OS™ six dimensions (used on / and /brand-os)
    ├── personas.ts         ← homepage section 4 personas
    ├── solutions.ts        ← all four practice pages' content
    ├── stories.ts          ← case studies (currently 6 placeholders, isPlaceholder:true)
    ├── essays.ts           ← three real essays + two placeholder shells
    ├── leadership.ts       ← 6 placeholder leaders
    ├── roles.ts            ← 4 placeholder open roles
    ├── clients.ts          ← 8 placeholder client wordmarks for homepage logo wall
    └── vault.ts            ← 8 placeholder visual archive items

content/
└── website-content.md      ← SOURCE OF TRUTH for words. The live site must match this.
```

## 4. Critical brand rules — DO NOT BREAK

These are encoded in the build brief (sections 02, 03, 09) and treated as binding. The user is design-disciplined; violations get rebuilt before review.

- **Two colours only** — `--ink` (`#1A1A1A`) and `--canvas` (`#FFFFFF`). Plus three functional grays (`--muted`, `--rule`, `--surface`). **No accent colors. No gold. No category-tag pills.**
- **Editorial typography** — serif headlines (Source Serif 4), sans body (Inter), generous whitespace. **No SaaS gradients. No drop shadows. No rounded corners (default `border-radius: 0`).**
- **Voice** — words must come from `content/website-content.md` or be approved by the editor. Do not invent body copy. Do not paraphrase. Banned words: "transformative", "synergistic", "ecosystem of solutions", "best-in-class", "unlock value". **No exclamation marks anywhere.**
- **Allowed icons**: `→` `←` `·` `—` and the BBP wordmark. No SVG icon libraries (Feather, Lucide, Heroicons). No emoji bullets.
- **Founding year** — BBP founded **2016** (the original brief said 2011; it was wrong). Eleven years as of 2026.
- **Section 09 anti-patterns** — re-read it before each design decision. Generative agents drift toward generic SaaS aesthetics by default; this list exists to prevent that drift.

## 5. Launch checklist

These are the open tasks before the site can ship to production. The first two are non-negotiable launch blockers per the brief.

### Non-negotiable

- [ ] **Wire form delivery.** Both server actions ([app/(site)/connect/actions.ts](app/<site>/connect/actions.ts) `sendBrief` and [app/(site)/work-with-us/actions.ts](app/<site>/work-with-us/actions.ts) `sendApplication`) currently validate and return success but do **not** send email. Wire to **Resend** or **Postmark**. The application form must support resume attachments (PDF/DOC/DOCX up to 8MB). Body size limit is already configured to 10MB in `next.config.mjs`.
- [ ] **Provision inboxes.** Confirm `hello@bbp-india.com`, `shine@bbp-india.com`, `sabi@bbp-india.com`, and `hr@bbp-india.com` (used for internship and role applications) are active and routed before launch.
- [ ] **Resolve the legacy site.** The current bbp-india.com WordPress install has a `/bbp/` subdirectory serving Thangals Jewellery content from a previous engagement. This is indexed and undermines diligence. Implement **410 Gone** for all URLs under `/bbp/` and submit a removal request via Google Search Console in the same deploy as the new site goes live.
- [ ] **Page-level redirects from the old site.** Don't blanket-redirect to homepage; map old WP URLs to nearest equivalents.

### Content (replace placeholders)

- [ ] **Founder portraits** — `/people` currently uses `<DummyImage>` blocks. Commission new B&W tinted-to-ink portraits and replace with `next/image`.
- [ ] **Leadership team** — `lib/content/leadership.ts` has 6 placeholder leaders (`isPlaceholder: true`). Replace with real names, roles, bios, and photos.
- [ ] **Client logo wall** — homepage section 7 + `lib/content/clients.ts`. Currently shows "Brand Alpha", "Brand Beta" etc. Replace with real wordmarks (monochrome, ink-only). Permissions required.
- [ ] **Case studies** — `lib/content/stories.ts` has 6 placeholders. Each entry needs editor-approved diagnostic / decision / deployment / result / learned narrative. The case-study template renders any entry in this array.
- [ ] **Remaining essays** — `lib/content/essays.ts` has three real bodies (Transactional Velocity, Strategic Inflection Point, Icarus Paradox + Part 2) and two placeholder shells (`bury-the-fish`, `profitability-index-2026-preview`). Fill the shells.
- [ ] **Open roles** — `lib/content/roles.ts` has 4 placeholders. Replace with confirmed hiring list.
- [ ] **Vault images** — `lib/content/vault.ts` has 8 placeholder tiles. Curate real visual archive.
- [ ] **The retired fish mark** — `/vault` → "The fish, retired" block needs the actual Darwin's Fish wordmark image.
- [ ] **Privacy + Terms pages** — currently empty (heroes only). Counsel-reviewed copy required.
- [ ] **Compensation specifics** on `/life` — salary bands, leave, sabbatical eligibility. Section header is in place.
- [ ] **`/learn-with-us`** — Practitioner Program price + dates need confirming.

### Infrastructure

- [ ] **Deploy** to Vercel (preferred per brief) or Cloudflare Pages.
- [ ] **Analytics**: install **Plausible** (no cookie banner needed). Fallback to GA4 with consent banner if rejected.
- [ ] **OG images**: each page sets `metadata`, but a default OG image (1200×630, BBP wordmark on canvas) needs to be generated and placed at `public/og-default.png`, then referenced from `app/layout.tsx` metadata.
- [ ] **Custom logo file**: the wordmark is currently rendered in code (Inter Black, tight tracking). To use a pixel-perfect logo asset, drop `public/logo.svg` and replace the `<span>BBP</span>` inside `components/wordmark.tsx` with `<Image src="/logo.svg" .. />`.
- [ ] **Submit `/sitemap.xml`** to Google Search Console post-launch.

## 6. Acceptance criteria (per build brief section 11)

- Lighthouse Performance ≥ 90 on the homepage (Moto G Power throttled, incognito, median of three runs).
- LCP ≤ 2.0s, CLS ≤ 0.05, INP ≤ 200ms.
- Total homepage weight ≤ 800KB. Initial JS ≤ 100KB gzipped (currently ~96KB).
- WCAG 2.2 AA across the site. Lighthouse Accessibility ≥ 95.
- Diff every word against `content/website-content.md`. Identical or flagged for editor review. **No agent-invented copy.**
- Search the source for banned phrases: "transformative", "synergistic", "ecosystem", "unlock", "best-in-class", `!`. Zero hits expected.

## 7. Two specific things worth knowing

- **Route group `(site)`** wraps every marketing page with header + footer. The internal `/brand-system` reference page lives **outside** the group on purpose so it has no chrome.
- **The custom cursor** (`components/cursor.tsx`) hides the native cursor via a body class that's only applied at `≥1024px` on devices with `pointer: fine` and no `prefers-reduced-motion`. Text inputs keep the I-beam via a CSS exception. If users find this jarring, removing it is a one-line change in `app/layout.tsx` (drop `<Cursor />`).

## 8. Brief and contact

The full build brief and content document live in conversation history; the canonical content is mirrored at `content/website-content.md`. For ambiguous decisions, that file wins on words; the brief wins on structure and behaviour.

Direct any questions on intent to:
- **Ahamed Shine** — shine@bbp-india.com
- **Dr. Sabira Nalakath** — sabi@bbp-india.com
- General — hello@bbp-india.com
