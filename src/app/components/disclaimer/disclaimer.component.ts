import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  imports: [],
  templateUrl: './disclaimer.component.html',
  styleUrl: './disclaimer.component.css'
})
export class DisclaimerComponent {
  @Output() confirmed = new EventEmitter<void>();

  onConfirm() {
    this.confirmed.emit();
  }
}
