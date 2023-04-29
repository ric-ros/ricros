import { Component, EnvironmentInjector, OnInit, inject } from '@angular/core';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { PlatformService } from '../../services/platform.service';
import { Message } from '../../types/message';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, MessageComponent, NgForOf, NgIf, AsyncPipe],
})
export class HomePage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private dataService = inject(DataService);
  platformService = inject(PlatformService);

  folder: string | null = null;

  public messages$: Observable<Message[]> | undefined;

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    switch (this.folder) {
      case 'favorites':
        this.messages$ = this.dataService.favoriteMessages$;
        break;

      default:
        this.messages$ = this.dataService.inboxMessages$;
        break;
    }
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 1000);
  }
}
