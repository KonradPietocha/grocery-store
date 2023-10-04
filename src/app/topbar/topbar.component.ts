import { Component } from '@angular/core';

import { MessagesService } from '../messages.service';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  constructor(
    public messagesService: MessagesService,
    public shoppingService: ShoppingService
  ) { }
}
