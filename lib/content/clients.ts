export type Client = {
  name: string;
  industry: string;
  isPlaceholder?: boolean;
};

// Placeholder client wall for the homepage Selected Work section. The visual
// treatment should be a monochrome wordmark per client; here each tile renders
// the placeholder name in serif. Replace with real logos + permissions.
export const CLIENTS: readonly Client[] = [
  { name: "Brand Alpha", industry: "FMCG", isPlaceholder: true },
  { name: "Brand Beta", industry: "Jewellery", isPlaceholder: true },
  { name: "Brand Gamma", industry: "Hospitality", isPlaceholder: true },
  { name: "Brand Delta", industry: "Education", isPlaceholder: true },
  { name: "Brand Epsilon", industry: "D2C", isPlaceholder: true },
  { name: "Brand Zeta", industry: "Retail", isPlaceholder: true },
  { name: "Brand Eta", industry: "FMCG", isPlaceholder: true },
  { name: "Brand Theta", industry: "Family Business", isPlaceholder: true },
];
