import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'app/product';

@Pipe({
  name: 'sumProducts'
})
export class SumProductsPipe implements PipeTransform {
  transform(shoppingList: Product[]): any {
    return shoppingList.reduce((a, b) => a + (b.price * b.quantity), 0);
  }
}