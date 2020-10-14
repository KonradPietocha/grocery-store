import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  comestible: Product = {
    id: 1,
    name: 'sausage',
    price: 25,
    quantity: 1
  };
  constructor() { }

  ngOnInit() {
  }

}
