import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GroceriesComponent } from './components/groceries/groceries.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ShoppingCart } from './components/shopping-cart/shopping-cart.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ProductService } from './common-services/product-service/product.service';
import { MessagesService } from './common-services/messages-service/messages.service';
import { ShoppingService } from './common-services/shopping-service/shopping.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppComponent,
    BrowserModule,
    ShoppingCart,
    GroceriesComponent,
    MessagesComponent,
    ShoppingListComponent,
    ProductDetailsComponent,
  ],
  providers: [ProductService, MessagesService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
