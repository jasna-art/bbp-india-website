export type Service = {
  title: string;
  description: string;
};

export type SolutionPractice = {
  slug: "brand" | "marketing" | "growth" | "experience";
  eyebrow: string;
  headline: string;
  sub: string;
  services: Service[];
  closing?: {
    heading: string;
    sub?: string;
    body: string;
  };
  fieldNote?: {
    quote: string;
    attribution: string;
  };
  metaTitle: string;
  metaDescription: string;
};

export const SOLUTIONS: Record<
  SolutionPractice["slug"],
  SolutionPractice
> = {
  brand: {
    slug: "brand",
    eyebrow: "Solutions · Brand",
    headline: "The strategic chassis the rest of the business runs on.",
    sub: "The Brand practice owns the strategic foundation — purpose, positioning, architecture, identity, and the systems that keep them coherent across years and markets. Most engagements start here, because most problems start here.",
    services: [
      {
        title: "Purpose, Positioning, Relevance",
        description:
          "Why the brand exists, who it's for, and what it owns in the consumer's mind. Tested, written, and defended.",
      },
      {
        title: "Portfolio Design",
        description:
          "The architecture of master brands, sub-brands, line extensions, and ingredient brands. Built so the portfolio compounds rather than competes with itself.",
      },
      {
        title: "Brand & Product Blueprint",
        description:
          "The translation of strategy into product and pricing decisions. Where the brand actually meets the P&L.",
      },
      {
        title: "Go-to-Market Strategy & Roll-out",
        description:
          "Launch architecture for new brands, new categories, and new markets. Designed to compress time-to-relevance.",
      },
      {
        title: "Functional Branding & Tone of Voice",
        description:
          "The verbal identity system — naming, taglines, copy systems, voice guides. Written, not generated.",
      },
      {
        title: "Visual Brand Framework",
        description:
          "Identity, design language, asset systems, governance. Designed to scale and survive changes of agency, designer, and CMO.",
      },
      {
        title: "Brand Tracking & Evolution",
        description:
          "The longitudinal system — Brand OS™ re-scoring, equity tracking, evolution roadmaps. Brand as a living instrument, not a one-time project.",
      },
    ],
    closing: {
      heading: "What an engagement looks like",
      sub: "Six to twelve weeks. One strategic chassis. Built to last a decade.",
      body: "A typical Brand engagement runs six to twelve weeks after the Brand OS™ diagnostic. The team sits with leadership, runs consumer and competitive research, drafts the strategic chassis, tests it in market, and ships the final identity, governance, and rollout plan. We stay on the engagement through the first ninety days of deployment.",
    },
    metaTitle: "Brand Strategy, Positioning, and Identity",
    metaDescription:
      "BBP's Brand practice owns the strategic chassis — purpose, positioning, architecture, identity — for founders, CMOs, and family businesses across Indian consumer categories.",
  },
  marketing: {
    slug: "marketing",
    eyebrow: "Solutions · Marketing",
    headline: "The expression layer — content, channel, communication.",
    sub: "The Marketing practice translates the brand chassis into communication that earns attention, builds equity, and moves the P&L. We do not run media buying as a commodity service. We run it as a strategic discipline tied to the Brand OS™ score.",
    services: [
      {
        title: "Communication Strategy",
        description:
          "Brand communication architecture — campaign systems, narrative arcs, message hierarchies. The thinking that makes individual campaigns add up.",
      },
      {
        title: "Content & Editorial",
        description:
          "Long-form, short-form, social, video, podcast. Written and produced by people who have actually published, not by content factories.",
      },
      {
        title: "Performance & Brand Integration",
        description:
          "The hardest problem in modern marketing — running performance and brand from the same dashboard. We do it because the alternative is structural waste.",
      },
      {
        title: "Media Strategy & Investment",
        description:
          "Channel mix, weight, timing, and measurement. Built around the Brand OS™ Vitality and Relevance dimensions, not vanity reach.",
      },
      {
        title: "PR & Earned Media",
        description:
          "Story design, press strategy, founder visibility, crisis preparation. Earned media as a strategic instrument, not a press release service.",
      },
      {
        title: "Influence & Community",
        description:
          "Creator partnerships, advocacy programs, owned community design. Influence as compounding equity, not as a media-line item.",
      },
    ],
    closing: {
      heading: "What we don't do",
      sub: "A short, honest list.",
      body: "We don't sell media buying as a standalone service. We don't take agency-of-record retainers in the absence of a strategic engagement. We don't pitch creative ideas without a brief that ties to the Brand OS™ score. If you need any of those things from a vendor, there are excellent firms in India that do them well. We're not one of them, and we'd rather tell you so up front.",
    },
    metaTitle: "Marketing Strategy, Communication, and Media",
    metaDescription:
      "BBP's Marketing practice integrates brand and performance marketing — communication strategy, content, media, PR, and influence — tied to measurable Brand OS™ outcomes.",
  },
  growth: {
    slug: "growth",
    eyebrow: "Solutions · Growth",
    headline:
      "The compounding engine — distribution, pricing, retention, expansion.",
    sub: "Growth is what most founders ask us about first. It's almost never what's actually broken. The Growth practice fixes the parts of the business where brand decisions become P&L decisions — channel architecture, pricing, retention systems, and expansion sequencing.",
    services: [
      {
        title: "Channel Architecture",
        description:
          "The strategic shape of D2C, marketplace, modern trade, general trade, and quick commerce. Designed to maximise the Brand OS™ Profitability score, not just revenue.",
      },
      {
        title: "Pricing & Premium Strategy",
        description:
          "Price ladders, premiumisation paths, promo discipline. Built to protect margin while growing volume — the hardest brief in Indian consumer business.",
      },
      {
        title: "Retention Architecture",
        description:
          "Cohort design, lifecycle systems, loyalty programs, repeat economics. Where the LTV side of the CAC:LTV equation is actually engineered.",
      },
      {
        title: "Expansion Strategy",
        description:
          "Geographic expansion, category extension, format expansion. Sequenced to protect equity in core markets while opening new ones.",
      },
      {
        title: "Distribution & Trade Strategy",
        description:
          "The unglamorous, decisive layer. Trade margin design, distributor management, retail visibility. The reason brands win or lose in India.",
      },
      {
        title: "Sales Capability & Org Design",
        description:
          "The structural changes that turn a marketing-led organisation into a transaction-velocity organisation. The Three-Layer Transformation Model in practice.",
      },
    ],
    fieldNote: {
      quote:
        "Most brand strategies fail at the trade margin conversation. We've learned to put that conversation first.",
      attribution: "Ahamed Shine, BBP Field Notes",
    },
    metaTitle: "Growth, Distribution, Pricing, and Retention",
    metaDescription:
      "BBP's Growth practice fixes the parts of the business where brand decisions become P&L decisions — channel architecture, pricing, retention, and expansion.",
  },
  experience: {
    slug: "experience",
    eyebrow: "Solutions · Experience",
    headline: "The touchpoint layer where the brand actually lives.",
    sub: "The Experience practice owns the gap between what the brand promises and what the customer actually feels. Most premium-positioning erosion happens in this gap. We close it.",
    services: [
      {
        title: "Customer Experience Design",
        description:
          "End-to-end journey design — pre-purchase, purchase, post-purchase, advocacy. Mapped, measured, and re-engineered against the Brand OS™ Experience Coherence score.",
      },
      {
        title: "Retail & Physical Experience",
        description:
          "Store design, retail formats, in-store theatre, packaging-as-experience. Where the brand becomes a place.",
      },
      {
        title: "Digital Experience",
        description:
          "Website, app, mobile commerce, conversational interfaces. Designed for the Brand OS™ Digital Experience sub-metric, not for a Behance award.",
      },
      {
        title: "Service Design & Operations",
        description:
          "Service blueprints, training systems, complaint architecture, recovery design. The behind-the-scenes work that makes service feel intentional.",
      },
      {
        title: "Employee Experience",
        description:
          "The talent brand, internal narrative, ritual design, leadership communication. The brand the employee experiences, which is the brand the customer eventually receives.",
      },
      {
        title: "Sensory & Signature Moments",
        description:
          "The five-second moments that build memory — the unboxing, the welcome, the recovery. Engineered, not improvised.",
      },
    ],
    metaTitle: "Customer Experience, Retail, Digital, and Service Design",
    metaDescription:
      "BBP's Experience practice closes the gap between brand promise and customer reality — across digital, retail, service, and signature touchpoints.",
  },
};

export const SOLUTION_SLUGS: SolutionPractice["slug"][] = [
  "brand",
  "marketing",
  "growth",
  "experience",
];
