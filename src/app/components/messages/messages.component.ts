import { Component } from '@angular/core';
import { MessagesService } from '../../common-services/messages-service/messages.service';
import { ButtonComponent } from '../button-component/button.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messagesService: MessagesService) { }
}
