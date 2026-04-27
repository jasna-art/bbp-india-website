export type StoryCategory =
  | "brand"
  | "marketing"
  | "growth"
  | "experience";

export type Story = {
  slug: string;
  category: StoryCategory;
  industry: string;
  headline: string;
  dek: string;
  engagement: string;
  duration: string;
  scoreBefore: number;
  scoreAfter: number;
  leadConsultant: string;
  isPlaceholder?: boolean;
  sections: {
    diagnostic: string;
    decision: string;
    deployment: string;
    result: string;
    learned: string;
  };
};

const PLACEHOLDER_SECTION =
  "Full case narrative published with the case edit.";

// NOTE: Every entry below is a layout placeholder. Industries, durations, and
// score deltas are illustrative — none represent a real BBP engagement. Replace
// each entry with editor-approved copy before shipping.
export const STORIES: readonly Story[] = [
  {
    slug: "regional-jewellery-modernisation",
    category: "brand",
    industry: "Jewellery",
    headline:
      "How a 56-year-old jewellery brand became the most-considered name in Kerala.",
    dek: "Modernised the brand for a new generation of consumers without breaking the equity that took five decades to build.",
    engagement: "Brand · Experience",
    duration: "14 months",
    scoreBefore: 47,
    scoreAfter: 78,
    leadConsultant: "Ahamed Shine",
    isPlaceholder: true,
    sections: {
      diagnostic: PLACEHOLDER_SECTION,
      decision: PLACEHOLDER_SECTION,
      deployment: PLACEHOLDER_SECTION,
      result: PLACEHOLDER_SECTION,
      learned: PLACEHOLDER_SECTION,
    },
  },
  {
    slug: "fmcg-trade-margin-rebuild",
    category: "growth",
    industry: "FMCG",
    headline:
      "How a regional spices brand recaptured nine points of trade margin in eight months.",
    dek: "Re-engineered distribution architecture and trade incentives — without raising shelf price.",
    engagement: "Growth · Marketing",
    duration: "8 months",
    scoreBefore: 52,
    scoreAfter: 71,
    leadConsultant: "Ahamed Shine",
    isPlaceholder: true,
    sections: {
      diagnostic: PLACEHOLDER_SECTION,
      decision: PLACEHOLDER_SECTION,
      deployment: PLACEHOLDER_SECTION,
      result: PLACEHOLDER_SECTION,
      learned: PLACEHOLDER_SECTION,
    },
  },
  {
    slug: "d2c-cohort-retention-recovery",
    category: "growth",
    industry: "D2C Consumer",
    headline:
      "How a D2C wellness brand turned a collapsing cohort into a compounding one.",
    dek: "Diagnosed retention as a positioning problem, not a discount problem. Rebuilt the post-purchase experience.",
    engagement: "Growth · Experience",
    duration: "10 months",
    scoreBefore: 41,
    scoreAfter: 69,
    leadConsultant: "Dr. Sabira Nalakath",
    isPlaceholder: true,
    sections: {
      diagnostic: PLACEHOLDER_SECTION,
      decision: PLACEHOLDER_SECTION,
      deployment: PLACEHOLDER_SECTION,
      result: PLACEHOLDER_SECTION,
      learned: PLACEHOLDER_SECTION,
    },
  },
  {
    slug: "hospitality-service-redesign",
    category: "experience",
    industry: "Hospitality",
    headline:
      "How a heritage hotel group rebuilt its service blueprint and recovered NPS in a season.",
    dek: "Engineered the five-second moments. Rewrote the employee narrative. The brand the consumer actually receives.",
    engagement: "Experience",
    duration: "6 months",
    scoreBefore: 58,
    scoreAfter: 82,
    leadConsultant: "Dr. Sabira Nalakath",
    isPlaceholder: true,
    sections: {
      diagnostic: PLACEHOLDER_SECTION,
      decision: PLACEHOLDER_SECTION,
      deployment: PLACEHOLDER_SECTION,
      result: PLACEHOLDER_SECTION,
      learned: PLACEHOLDER_SECTION,
    },
  },
  {
    slug: "edtech-positioning-pivot",
    category: "brand",
    industry: "Education",
    headline:
      "How an edtech brand pivoted positioning without losing its founding cohort.",
    dek: "Repositioned from skill-as-a-service to outcome-as-a-service. Held existing learners. Opened the next category.",
    engagement: "Brand · Marketing",
    duration: "9 months",
    scoreBefore: 45,
    scoreAfter: 74,
    leadConsultant: "Ahamed Shine",
    isPlaceholder: true,
    sections: {
      diagnostic: PLACEHOLDER_SECTION,
      decision: PLACEHOLDER_SECTION,
      deployment: PLACEHOLDER_SECTION,
      result: PLACEHOLDER_SECTION,
      learned: PLACEHOLDER_SECTION,
    },
  },
  {
    slug: "family-business-portfolio-architecture",
    category: "brand",
    industry: "Family Business",
    headline:
      "How a third-generation textiles family rebuilt a portfolio that had grown into itself.",
    dek: "Architected master, sub, and ingredient brands so each could grow without cannibalising the others.",
    engagement: "Brand",
    duration: "12 months",
    scoreBefore: 49,
    scoreAfter: 73,
    leadConsultant: "Ahamed Shine",
    isPlaceholder: true,
    sections: {
      diagnostic: PLACEHOLDER_SECTION,
      decision: PLACEHOLDER_SECTION,
      deployment: PLACEHOLDER_SECTION,
      result: PLACEHOLDER_SECTION,
      learned: PLACEHOLDER_SECTION,
    },
  },
];
