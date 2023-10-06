import { Injectable } from '@angular/core';

import { PRODUCTS } from './mock-products';
import { Product } from './product';
import { MessagesService } from './messages.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ProductService {
  getDate: string = new Date().toLocaleString('en-GB');

  constructor(private messagesService: MessagesService) { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    return this.getProducts().pipe(
      map((products: Product[]) => products.find(product => product.id === id)),
      tap((product: Product) => this.messagesService.add(`${this.getDate}: Selected product: #${ product.id }-${ product.name }`))
    )
  }
}
