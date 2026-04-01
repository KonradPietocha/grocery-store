import { Component } from '@angular/core';
import { MessagesService } from '../../common-services/messages-service/messages.service';
import { ButtonComponent } from '../button-component/button.component';


@Component({
    imports: [ButtonComponent],
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messagesService: MessagesService) { }
}
