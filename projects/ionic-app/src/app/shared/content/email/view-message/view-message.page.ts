import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DataService } from '../../../services/data.service';
import { Message } from '../../../types/message';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ViewMessagePage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private data = inject(DataService);

  public message$: Observable<Message | undefined> | undefined;

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('messageId');

    if (!id) {
      return;
    }

    // set as read
    this.data.toggleRead(+id, true);

    this.message$ = this.data.getMessageById$(+id);
  }
}
