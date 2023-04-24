import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppHomeItem } from '../shared/types/appHomePages';
import { ThemeService } from '../shared/services/theme-service.service';
@Component({
  selector: 'app-root-home',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    RouterOutlet,
  ],
})
export class AppComponent {
  public themeService: ThemeService = inject(ThemeService);

  public appPages: AppHomeItem[] = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];

  public labels = ['Family', 'Friends', 'Work', 'Notes'];

  settings: AppHomeItem[] = [
    {
      title: this.themeService.isDarkMode$.value ? 'Light Mode' : 'Dark Mode',
      icon: 'moon',
      command: () => this.themeService.toggleDarkMode(),
    },
  ];

  constructor() {}
}
