import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

import { NAVIGATION_DATA } from "../../data/navigation.data";
import { CATEGORIES } from "../../data/categories.data";
import { NavigationItem } from "../../models/navigation-item.model";
import { NavigationCardComponent } from "../../components/navigation-card/navigation-card.component";
import { FilterCategory } from "../../models/category.type";
import { Category } from "../../models/category.model";
import { SafeHtmlPipe } from "../../pipes/safe-html.pipe";

@Component({
  selector: "app-home",
  imports: [
    CommonModule,
    NavigationCardComponent,
    TranslateModule,
    SafeHtmlPipe,
  ],
  templateUrl: "./home.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  allItems = signal<NavigationItem[]>(NAVIGATION_DATA);
  searchTerm = signal("");
  selectedCategory = signal<FilterCategory>("All");

  readonly categories: Category[] = CATEGORIES;

  constructor(private translate: TranslateService) {}

  filteredItems = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const category = this.selectedCategory();

    return this.allItems().filter((item) => {
      const matchesCategory = category === "All" || item.category === category;

      // Translate fields before searching so we search against what the user sees
      const name = this.translate.instant(item.name).toLowerCase();
      const desc = this.translate.instant(item.description).toLowerCase();
      const matchesTags = item.tags.some((tag) =>
        this.translate.instant(tag).toLowerCase().includes(term)
      );

      const matchesSearch =
        name.includes(term) || desc.includes(term) || matchesTags;
      return matchesCategory && matchesSearch;
    });
  });

  handleSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  selectCategory(category: FilterCategory): void {
    this.selectedCategory.set(category);
  }

  handleTagClick(tag: string): void {
    // Set the translated value to search term
    this.searchTerm.set(this.translate.instant(tag));
    this.selectedCategory.set("All");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
