import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../product.service';
import { ShoppingService } from '../shopping.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = + this.route.snapshot.params['id'];
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  addToCart(): void {
    this.shoppingService.add(this.product);
    this.location.back();
  }

}
