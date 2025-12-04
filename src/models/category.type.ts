export type AppCategory =
  | "Code & Dev"
  | "Design & Creative"
  | "DevOps & Cloud"
  | "AI & Data"
  | "Productivity & Comms"
  | "Business & Finance"
  | "Utilities & Security"
  | "Games"
  | (string & {});

export type FilterCategory = "All" | AppCategory;
