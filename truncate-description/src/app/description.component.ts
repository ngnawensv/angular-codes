/**
 *
 * @since Nov 07, 2021 @t 09:38:15
 * @author Salathiel &lt;salathiel@genese.name&gt;
 *
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  template: `
    {{ expanded ? description : description.substr(0, summarySize) }}
    <button type="button" (click)="expanded = !expanded">
      <span *ngIf="expanded">
        <i class="far fa-angle-right"></i>
      </span>
      <span *ngIf="!expanded">
        <i class='fas fa-angle-right fa-lg'></i>
      </span>
    </button>
  `,
})
export class DescriptionComponent {
  @Input()
  summarySize = 50;

  @Input()
  description!: string;

  expanded = false;
}
