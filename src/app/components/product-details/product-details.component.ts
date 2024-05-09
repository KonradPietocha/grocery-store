import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location, UpperCasePipe } from '@angular/common';
import { ProductService } from '../../common-services/product-service/product.service';
import { ShoppingService } from '../../common-services/shopping-service/shopping.service';
import { Product } from '../../product';
import { ButtonComponent } from '../button-component/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ButtonComponent, UpperCasePipe, CommonModule, FormsModule],
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {} as Product;

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
      .subscribe((product: Product) => this.product = product);
  }

  addToCart(): void {
    this.shoppingService.add(this.product);
    this.location.back();
  }

  cancelAdding(): void {
    this.location.back();
  }
}
