import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingService {
    shoppingList: object[] = [];

    add(product: object) {
        this.shoppingList.push(product);
    }

    clearAll() {
        this.shoppingList = [];
    }
}
