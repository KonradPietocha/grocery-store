import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CheckoutData {
  name: string;
  surname: string;
  address: string;
  paymentMethod: string;
}

@Component({
  selector: 'app-checkout-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.css'
})
export class CheckoutFormComponent {
  @Output() submitted = new EventEmitter<CheckoutData>();
  @Output() closed = new EventEmitter<void>();

  formData: CheckoutData = {
    name: '',
    surname: '',
    address: '',
    paymentMethod: ''
  };

  paymentMethods = [
    { value: 'credit-card', label: '💳 Credit Card' },
    { value: 'debit-card', label: '💳 Debit Card' },
    { value: 'paypal', label: '🔗 PayPal' },
    { value: 'cash', label: '💵 Cash on Delivery' }
  ];

  isFormValid(): boolean {
    return !!(
      this.formData.name.trim() &&
      this.formData.surname.trim() &&
      this.formData.address.trim() &&
      this.formData.paymentMethod
    );
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      this.submitted.emit(this.formData);
    }
  }

  onCancel(): void {
    this.closed.emit();
  }
}
