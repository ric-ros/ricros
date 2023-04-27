import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppHomeItem } from '../../shared/types/appHomePages';
import { ThemeService } from '../../shared/services/theme-service.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MessageListComponent } from '../../shared/content/message-list.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonicModule, MessageListComponent, CommonModule, RouterLink],
})
export class FolderPage {
  constructor() {}
}
