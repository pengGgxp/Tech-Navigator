import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { NavigationItem } from '../../models/navigation-item.model';

@Component({
  selector: 'app-navigation-card',
  templateUrl: './navigation-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationCardComponent {
  item = input.required<NavigationItem>();
  tagClicked = output<string>();

  onTagClick(tag: string, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.tagClicked.emit(tag);
  }
}
