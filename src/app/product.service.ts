import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductService {

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  constructor() { }

}
