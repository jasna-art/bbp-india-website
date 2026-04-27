export type VaultItem = {
  slug: string;
  brand: string;
  engagement: string;
  year: string;
  isPlaceholder?: boolean;
};

// Placeholder vault items for layout review. Replace with curated images,
// brand names, and engagement metadata before shipping.
export const VAULT_ITEMS: readonly VaultItem[] = [
  {
    slug: "v-001",
    brand: "Brand Alpha",
    engagement: "Identity system",
    year: "2024",
    isPlaceholder: true,
  },
  {
    slug: "v-002",
    brand: "Brand Beta",
    engagement: "Packaging architecture",
    year: "2024",
    isPlaceholder: true,
  },
  {
    slug: "v-003",
    brand: "Brand Gamma",
    engagement: "Retail experience",
    year: "2023",
    isPlaceholder: true,
  },
  {
    slug: "v-004",
    brand: "Brand Delta",
    engagement: "Brand book",
    year: "2023",
    isPlaceholder: true,
  },
  {
    slug: "v-005",
    brand: "Brand Epsilon",
    engagement: "Visual experiment",
    year: "2022",
    isPlaceholder: true,
  },
  {
    slug: "v-006",
    brand: "Brand Zeta",
    engagement: "Identity system",
    year: "2022",
    isPlaceholder: true,
  },
  {
    slug: "v-007",
    brand: "Brand Eta",
    engagement: "Packaging architecture",
    year: "2021",
    isPlaceholder: true,
  },
  {
    slug: "v-008",
    brand: "Brand Theta",
    engagement: "Wordmark study",
    year: "2021",
    isPlaceholder: true,
  },
];
