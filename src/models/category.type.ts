export type AppCategory =
  | "Code & Dev"
  | "Design & Creative"
  | "DevOps & Cloud"
  | "AI & Data"
  | "Productivity & Comms"
  | "Business & Finance"
  | "Utilities & Security"
  | "Games"
  | "My Tools"
  | (string & {});

export type FilterCategory = "All" | AppCategory;
