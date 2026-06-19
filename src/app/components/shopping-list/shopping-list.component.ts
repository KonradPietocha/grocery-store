import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingService } from '../../common-services/shopping-service/shopping.service';
import { Product } from '../../product';
import { ButtonComponent } from '../button-component/button.component';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';
import { SumProductsPipe } from './sum-products.pipe';


@Component({
    imports: [ButtonComponent, CheckoutFormComponent, SumProductsPipe],
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Product[] = [];
  wereBought: boolean = false;
  showCheckoutForm: boolean = false;

  constructor(private readonly _shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.shoppingList = this._shoppingService.shoppingList;
  }

  clearProducts(): void {
    this._shoppingService.clearAll();
    this.shoppingList = this._shoppingService.shoppingList;
    this.wereBought = false;
  }

  openForm(): void {
    this.showCheckoutForm = true;
  }

  onCheckoutSubmit(data: any): void {
    console.log('Checkout submitted:', data);
    this.showCheckoutForm = false;
    this.buyProducts();
  }

  onCheckoutClosed(): void {
    this.showCheckoutForm = false;
  }

  buyProducts(): void {
    this._shoppingService.clearAll(true);
    this.shoppingList = this._shoppingService.shoppingList;
    this.wereBought = true;
  }
}
