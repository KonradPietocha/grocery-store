import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCart } from './shopping-cart/shopping-cart.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { MessagesComponent } from './messages/messages.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: ShoppingCart },
    { path: 'groceries', component: GroceriesComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'shopping', component: ShoppingListComponent },
    { path: 'detail/:id', component: ProductDetailsComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
