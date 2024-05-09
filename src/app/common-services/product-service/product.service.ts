import { Injectable } from '@angular/core';

import { PRODUCTS } from '../../mock-products';
import { Product } from '../../product';
import { MessagesService } from '../messages-service/messages.service';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getDate: string = new Date().toLocaleString('en-GB');

  constructor(private messagesService: MessagesService) { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    return this.getProducts().pipe(
      map((products: Product[]) => products?.find(product => product.id === id) ?? {} as Product),
      tap((product: Product) => this.messagesService.add(`${this.getDate}: Selected product: #${ product.id }-${ product.name }`))
    )
  }
}
