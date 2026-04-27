export type Leader = {
  name: string;
  role: string;
  bio: string;
  isPlaceholder?: boolean;
};

// Placeholder leadership blocks for layout review only. Replace with real
// names, roles, and bios before shipping.
export const LEADERSHIP: readonly Leader[] = [
  {
    name: "Leader One",
    role: "Practice Lead — Brand",
    bio: "Bio to be published alongside the team page edit.",
    isPlaceholder: true,
  },
  {
    name: "Leader Two",
    role: "Practice Lead — Marketing",
    bio: "Bio to be published alongside the team page edit.",
    isPlaceholder: true,
  },
  {
    name: "Leader Three",
    role: "Practice Lead — Growth",
    bio: "Bio to be published alongside the team page edit.",
    isPlaceholder: true,
  },
  {
    name: "Leader Four",
    role: "Practice Lead — Experience",
    bio: "Bio to be published alongside the team page edit.",
    isPlaceholder: true,
  },
  {
    name: "Leader Five",
    role: "Head of Research",
    bio: "Bio to be published alongside the team page edit.",
    isPlaceholder: true,
  },
  {
    name: "Leader Six",
    role: "Head of Analytics",
    bio: "Bio to be published alongside the team page edit.",
    isPlaceholder: true,
  },
];
