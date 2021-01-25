import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MessagesComponent } from './messages/messages.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ShoppingCart } from './shopping-cart/shopping-cart.component';
import { ButtonComponent } from './button-component/button.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './product.service';
import { MessagesService } from './messages.service';
import { ShoppingService } from './shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    GroceriesComponent,
    ProductDetailsComponent,
    MessagesComponent,
    TopbarComponent,
    ShoppingCart,
    ButtonComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    MessagesService,
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
