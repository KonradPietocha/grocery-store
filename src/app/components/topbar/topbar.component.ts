import { Component } from '@angular/core';

import { MessagesService } from '../../common-services/messages-service/messages.service';
import { ShoppingService } from '../../common-services/shopping-service/shopping.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
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
