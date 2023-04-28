import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppHomeItem } from '../shared/types/appHomePages';
import { ThemeService } from '../shared/services/theme.service';
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
    { title: 'Inbox', url: '/home/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/home/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/home/favorites', icon: 'heart' },
    { title: 'Archived', url: '/home/archived', icon: 'archive' },
    { title: 'Trash', url: '/home/trash', icon: 'trash' },
    { title: 'Spam', url: '/home/spam', icon: 'warning' },
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
