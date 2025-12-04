import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NAVIGATION_DATA } from './data/navigation.data';
import { CATEGORIES } from './data/categories.data';
import { NavigationItem } from './models/navigation-item.model';
import { NavigationCardComponent } from './components/navigation-card/navigation-card.component';
import { FilterCategory } from './models/category.type';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavigationCardComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  allItems = signal<NavigationItem[]>(NAVIGATION_DATA);
  searchTerm = signal('');
  selectedCategory = signal<FilterCategory>('All');
  
  readonly categories: Category[] = CATEGORIES;

  filteredItems = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const category = this.selectedCategory();
    
    return this.allItems().filter(item => {
      const matchesCategory = category === 'All' || item.category === category;
      const matchesSearch = item.name.toLowerCase().includes(term) || 
                            item.description.toLowerCase().includes(term) || 
                            item.tags.some(tag => tag.toLowerCase().includes(term));
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
    this.searchTerm.set(tag);
    this.selectedCategory.set('All');
    // Optional: scroll to top/search bar for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
