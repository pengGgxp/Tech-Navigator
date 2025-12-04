import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationItem } from '../../models/navigation-item.model';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-navigation-card',
  templateUrl: './navigation-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, SafeHtmlPipe]
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
