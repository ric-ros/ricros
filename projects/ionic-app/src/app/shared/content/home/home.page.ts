import { Component, EnvironmentInjector, OnInit, inject } from '@angular/core';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { NgForOf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService, Message } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, MessageComponent, NgForOf],
})
export class HomePage implements OnInit {
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  folder: string | null = null;

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
}
