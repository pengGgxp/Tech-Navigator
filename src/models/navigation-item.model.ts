import { AppCategory } from './category.type';

export interface NavigationItem {
  id: string;
  name: string;
  description: string;
  url: string;
  iconSvg: string; // SVG full tag string
  category: AppCategory;
  tags: string[];
}
