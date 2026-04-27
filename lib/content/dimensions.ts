export type Dimension = {
  number: string;
  name: string;
  question: string;
  subMetricsShort: string;
  subMetricsLong: string;
  description: string;
};

export const DIMENSIONS: readonly Dimension[] = [
  {
    number: "01",
    name: "Brand Vitality",
    question: "Is the brand alive in the market?",
    subMetricsShort:
      "Awareness, share of voice, search volume, media presence, community strength",
    subMetricsLong:
      "Unaided Brand Awareness · Share of Voice · Branded Search Trend · Media & PR Presence · Community Strength",
    description:
      "Vitality measures whether the brand exists in the consumer's mind without being prompted, paid for, or pushed. A brand with low vitality is a brand that has to keep buying its own attention.",
  },
  {
    number: "02",
    name: "Relevance Quotient",
    question: "Does the brand still answer a question consumers are asking?",
    subMetricsShort:
      "Brand-market fit, trend alignment, differentiation, price premium, consideration",
    subMetricsLong:
      "Brand-Market Fit · Trend Alignment · Competitive Differentiation · Price Premium · Category Consideration",
    description:
      "Relevance is the dimension most legacy brands lose first and most fundraised brands never had. It's not about being modern. It's about being needed.",
  },
  {
    number: "03",
    name: "Profitability Architecture",
    question: "Does the brand make money on purpose, or by accident?",
    subMetricsShort:
      "Margin, CAC:LTV, channel profitability, revenue concentration, brand premium value",
    subMetricsLong:
      "Gross Margin Health · CAC:LTV Ratio · Channel Profitability · Revenue Concentration · Brand Premium Value",
    description:
      "The dimension every founder tells us they care about and most consultancies refuse to measure. We measure it. The brand is either a profit lever or it isn't.",
  },
  {
    number: "04",
    name: "Experience Coherence",
    question: "Does the brand feel like one brand, or several?",
    subMetricsShort:
      "NPS, touchpoint consistency, digital quality, service quality, retail experience",
    subMetricsLong:
      "NPS · Touchpoint Consistency · Digital Experience · Service Quality · Physical/Retail Experience",
    description:
      "Coherence is the dimension that quietly destroys premium positioning. The packaging is beautiful. The website is fine. The customer service is broken. The brand pays for that gap forever.",
  },
  {
    number: "05",
    name: "Growth Velocity",
    question: "Is the brand compounding, or running on a treadmill?",
    subMetricsShort:
      "Revenue growth, market expansion, acquisition, innovation, retention",
    subMetricsLong:
      "Revenue Growth Rate · Market Expansion · Customer Acquisition · Innovation Pipeline · Customer Retention",
    description:
      "Velocity is not the same as size. A small brand can have high velocity. A category leader can have none. Velocity is what makes a brand investable.",
  },
  {
    number: "06",
    name: "Future Readiness",
    question: "Will this brand still be relevant in five years?",
    subMetricsShort:
      "Digital maturity, AI & data readiness, talent brand, sustainability, adaptability",
    subMetricsLong:
      "Digital Maturity · AI & Data Readiness · Talent Brand · Sustainability · Adaptability",
    description:
      "The dimension most consultancies skip and every investor cares about. Future readiness is what separates a brand from a balance-sheet line item.",
  },
];
