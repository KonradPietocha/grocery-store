import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../common-services/product-service/product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe((products: Product[]) => this.products = products);
  }

}
