import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../common-services/shopping-service/shopping.service';
import { Product } from '../../product';
import { ButtonComponent } from '../button-component/button.component';
import { SumProductsPipe } from './sum-products.pipe';


@Component({
    imports: [ButtonComponent, SumProductsPipe],
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Product[] = [];
  wereBought: boolean = false;

  constructor(private readonly _shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.shoppingList = this._shoppingService.shoppingList;
  }

  clearProducts(): void {
    this._shoppingService.clearAll();
    this.shoppingList = this._shoppingService.shoppingList;
    this.wereBought = false;
  }

  buyProducts(): void {
    this._shoppingService.clearAll(true);
    this.shoppingList = this._shoppingService.shoppingList;
    this.wereBought = true;
  }
}
