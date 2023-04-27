import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { IonicModule, Platform } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Message } from '../../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonicModule, RouterLink, NgIf],
})
export class MessageComponent {
  private platform = inject(Platform);
  @Input() message: Message;

  constructor() {
    this.message = {
      fromName: 'No name',
      subject: 'Error loading message',
      date: 'No date',
      id: 0,
      read: false,
    };
  }

  isIos() {
    return this.platform.is('ios');
  }
}
