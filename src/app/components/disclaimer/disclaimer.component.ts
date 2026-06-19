import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  imports: [],
  templateUrl: './disclaimer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './disclaimer.component.css'
})
export class DisclaimerComponent {
  @Output() confirmed = new EventEmitter<void>();

  onConfirm() {
    this.confirmed.emit();
  }
}
