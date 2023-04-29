import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-message-list',
  templateUrl: 'message-list.component.html',
  styleUrls: ['message-list.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class MessageListComponent {
  constructor() {}
}
