import { Injectable } from '@angular/core';

import { PRODUCTS } from './mock-products';
import { Product } from './product';
import { MessagesService } from './messages.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductService {

  getProducts(): Observable<Product[]> {
    this.messagesService.add('Your favorite products have been downloaded');
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    this.messagesService.add(`Selected product number: ${id}`);
    return of(PRODUCTS.find(product => product.id === id));
  }

  constructor(private messagesService: MessagesService) { }

}
