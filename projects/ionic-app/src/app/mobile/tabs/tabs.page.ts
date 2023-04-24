import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DARK_MODE } from '../../shared/utils/injection-tokens';
import { ThemeService } from '../../shared/services/theme-service.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, NgIf, AsyncPipe],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  public themeService: ThemeService = inject(ThemeService);

  darkMode = this.themeService.isDarkMode$.value;

  constructor() {}
}
