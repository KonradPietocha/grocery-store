import { Routes } from '@angular/router';
import { ShoppingCart } from './components/shopping-cart/shopping-cart.component';
import { GroceriesComponent } from './components/groceries/groceries.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: ShoppingCart },
    { path: 'groceries', component: GroceriesComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'shopping', component: ShoppingListComponent },
    { path: 'detail/:id', component: ProductDetailsComponent }
];
