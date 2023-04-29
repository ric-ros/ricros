import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  ViewChild,
} from '@angular/core';
import { IonicModule, IonItemSliding } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { PlatformService } from '../../../services/platform.service';
import { Message } from '../../../types/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonicModule, RouterLink, NgIf, NgClass],
})
export class MessageComponent {
  public platform = inject(PlatformService);
  public dataService = inject(DataService);

  @ViewChild(IonItemSliding) itemSlidingSection: IonItemSliding | undefined;

  @Input() message: Message | undefined;

  constructor() {}

  public markRead(messageId: number): void {
    this.dataService.toggleRead(messageId);

    this.itemSlidingSection?.closeOpened();
  }

  public markImportant(messageId: number): void {
    this.dataService.toggleImportant(messageId);

    this.itemSlidingSection?.closeOpened();
  }
}
