import { Component, OnInit } from '@angular/core';

import { ShoppingService } from '../shopping.service';
import { Product } from 'app/product';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Product[] = [];
  wereBought: boolean;

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
