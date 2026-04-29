export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "What We Do", href: "/what-we-do" },
  {
    label: "Solutions",
    href: "/solutions/brand",
    children: [
      { label: "Brand", href: "/solutions/brand" },
      { label: "Marketing", href: "/solutions/marketing" },
      { label: "Growth", href: "/solutions/growth" },
      { label: "Experience", href: "/solutions/experience" },
      { label: "Brand OS™", href: "/brand-os" },
    ],
  },
  {
    label: "Practice",
    href: "/stories",
    children: [
      { label: "Stories", href: "/stories" },
      { label: "Thinking", href: "/thinking" },
      { label: "Venture Studio", href: "/venture-studio" },
    ],
  },
  {
    label: "Culture",
    href: "/people",
    children: [
      { label: "People", href: "/people" },
      { label: "Life at BBP", href: "/life" },
      { label: "Work with Us", href: "/work-with-us" },
      { label: "Learn with Us", href: "/learn-with-us" },
    ],
  },
  { label: "Connect", href: "/connect" },
];

export const FOOTER_NAV: Record<string, NavItem[]> = {
  Solutions: [
    { label: "Brand", href: "/solutions/brand" },
    { label: "Marketing", href: "/solutions/marketing" },
    { label: "Growth", href: "/solutions/growth" },
    { label: "Experience", href: "/solutions/experience" },
    { label: "Brand OS™", href: "/brand-os" },
  ],
  Practice: [
    { label: "What We Do", href: "/what-we-do" },
    { label: "Stories", href: "/stories" },
    { label: "Thinking", href: "/thinking" },
    { label: "Venture Studio", href: "/venture-studio" },
  ],
  Culture: [
    { label: "People", href: "/people" },
    { label: "Life", href: "/life" },
    { label: "Work with Us", href: "/work-with-us" },
    { label: "Learn with Us", href: "/learn-with-us" },
  ],
  Contact: [
    { label: "hello@bbp-india.com", href: "mailto:hello@bbp-india.com" },
    { label: "shine@bbp-india.com", href: "mailto:shine@bbp-india.com" },
    { label: "sabi@bbp-india.com", href: "mailto:sabi@bbp-india.com" },
    { label: "Send a brief", href: "/connect" },
  ],
};

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bbp-india.com";
