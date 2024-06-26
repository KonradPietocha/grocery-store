import { Injectable } from '@angular/core';

import { Product } from '../../product';
import { MessagesService } from '../messages-service/messages.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
    shoppingList: Product[] = [];
    getDate: string = new Date().toLocaleString('en-GB');

    add(product: Product) {
        this.messagesService.add(`${this.getDate}: You add ${product.name} to cart`);
        this.shoppingList.push(product);
    }

    clearAll(wereBought?: boolean) {
        this.messagesService.add(
            wereBought
                ? `${this.getDate}: You have purchased all selected products`
                : `${this.getDate}: You clear all your shopping list`
        );
        this.shoppingList = [];
    }

    constructor(private messagesService: MessagesService) { }
}
