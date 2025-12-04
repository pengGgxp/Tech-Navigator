import { AppCategory } from './category.type';

export interface NavigationItem {
  id: string;
  name: string;
  description: string;
  url: string;
  iconSvg: string; // SVG path data
  category: AppCategory;
  tags: string[];
}
