import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MessagesComponent } from './messages/messages.component';
import { TopbarComponent } from './topbar/topbar.component';

import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './product.service';
import { MessagesService } from './messages.service';

@NgModule({
  declarations: [
    AppComponent,
    GroceriesComponent,
    ProductDetailsComponent,
    MessagesComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
