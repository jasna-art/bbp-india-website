export type Role = {
  slug: string;
  title: string;
  level: string;
  location: string;
  description: string;
  isPlaceholder?: boolean;
};

// Placeholder open roles for layout review. Replace with the team's confirmed
// hiring list before shipping.
export const ROLES: readonly Role[] = [
  {
    slug: "senior-strategist",
    title: "Senior Strategist",
    level: "Senior · 6–10 years",
    location: "Kochi",
    description:
      "Lead Brand OS™ diagnostics and Brand-practice engagements. Co-author the Thinking essays. Sit close to the founders on the strategic recommendation.",
    isPlaceholder: true,
  },
  {
    slug: "research-lead",
    title: "Research Lead",
    level: "Lead · 8+ years",
    location: "Kochi",
    description:
      "Own the methodology and the data inside every Brand OS™ engagement. Reports to the COO. Signs off on every research instrument before it ships.",
    isPlaceholder: true,
  },
  {
    slug: "growth-strategist",
    title: "Growth Strategist",
    level: "Mid–Senior · 4–8 years",
    location: "Kochi",
    description:
      "Lead the unglamorous, decisive layer — channel, pricing, retention, distribution. Translate brand decisions into P&L decisions.",
    isPlaceholder: true,
  },
  {
    slug: "design-lead",
    title: "Design Lead",
    level: "Lead · 7+ years",
    location: "Kochi",
    description:
      "Own the visual brand framework across BBP engagements and the BBP wordmark itself. Editorial-typography fluency required; SaaS-aesthetic fluency disqualifying.",
    isPlaceholder: true,
  },
];
