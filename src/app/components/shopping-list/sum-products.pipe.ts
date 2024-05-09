import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../product';

@Pipe({
  name: 'sumProducts',
  standalone: true
})
export class SumProductsPipe implements PipeTransform {
  transform(shoppingList: Product[]): any {
    return shoppingList.reduce((a, b) => a + (b.price * b.quantity), 0);
  }
}