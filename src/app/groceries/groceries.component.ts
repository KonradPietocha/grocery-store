import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

import { ProductService } from '../product.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;

  constructor(
    private productService: ProductService,
    private messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.messagesService.add(`GroceriesComponent: Selected product id = ${product.id}`);
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

}
