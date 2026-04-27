export type Persona = {
  label: string;
  quote: string;
  body: string;
  cta: { label: string; href: string };
};

export const PERSONAS: readonly Persona[] = [
  {
    label: "Founders",
    quote:
      "We're growing revenue but our margin is shrinking and we don't know why.",
    body: "You scaled to ₹50 Cr on performance marketing and product-market fit. The next ₹100 Cr needs brand. We diagnose the profitability leak, fix the positioning and pricing architecture, and rebuild the brand for compounding margin.",
    cta: { label: "Built for founders", href: "/brand-os" },
  },
  {
    label: "CMOs",
    quote: "I need to defend my brand spend in front of the CFO.",
    body: "You know brand investment matters. You also know the CFO needs proof. Brand OS™ gives you a quantified baseline, a measurable trajectory, and a board-ready narrative that ties brand to revenue and margin.",
    cta: { label: "Built for CMOs", href: "/brand-os" },
  },
  {
    label: "Family Businesses",
    quote: "Our brand was built for a consumer who doesn't exist anymore.",
    body: "The brand your father or grandfather built earned trust over decades. The next generation of consumers is shopping differently, valuing differently, and trusting differently. We modernise the brand without breaking the equity that took fifty years to build.",
    cta: { label: "Built for family businesses", href: "/brand-os" },
  },
  {
    label: "Investors",
    quote: "We need a brand health view across the portfolio.",
    body: "We run Brand OS™ across portfolio companies as a standardised diagnostic. You get comparable scores, comparable risks, and comparable upside across every brand you've backed. It's the closest thing to a Bloomberg terminal for brand health.",
    cta: { label: "Built for investors", href: "/brand-os" },
  },
];
