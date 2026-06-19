import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    imports: [CommonModule],
    selector: 'app-button',
    templateUrl: './button.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type?: string;
}
