import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent as MobileAppComponent } from '../mobile/app.component';
import { AppComponent as HomeAppComponent } from '../home/app.component';
import { Platform } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { ThemeService } from '../shared/services/theme.service';
import { SwUpdateService } from '../shared/services/sw-update.service';

enum BREAK_POINTS {
  XS = 0,
  SM = 576,
  MD = 768,
  LG = 992,
  XL = 1200,
  XXL = 1920,
}

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [CommonModule, MobileAppComponent, HomeAppComponent],
  templateUrl: './app-selector.component.html',
})
export class AppSelectorComponent implements OnDestroy {
  themeService = inject(ThemeService);
  swUpdateService = inject(SwUpdateService);

  isMobile: boolean;

  destroy$ = new Subject<boolean>();

  constructor() {
    this.themeService.setTheme();

    // Decomment this to enable mobile app with the TABS navigation.
    // Routes and components are already defined in the mobile folder and ready to go!.
    /*
    this.isMobile =
      !this.platform.is('desktop') || this.platform.width() < BREAK_POINTS.MD;

    this.checkRoutes(platform, router);
    */

    // In the meantime, we will force the SIDEBAR navigation.
    this.isMobile = false;

    // enable the SW Update Service.
    this.swUpdateService;
  }

  /**
   * Check if the user is on mobile or desktop and navigate to the correct page.
   * @param platform from ionic to check if the user is on mobile or desktop
   * @param router to navigate to the correct page
   */
  checkRoutes(platform: Platform, router: Router) {
    if (this.isMobile) {
      router.navigate(['/mobile']);
    }

    if (platform.is('desktop')) {
      router.navigate([
        platform.width() < BREAK_POINTS.MD ? '/mobile' : '/home',
      ]);

      platform.resize
        .asObservable()
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          if (this.isMobile != platform.width() < BREAK_POINTS.MD) {
            this.isMobile = platform.width() < BREAK_POINTS.MD;
            router.navigate([this.isMobile ? '/mobile' : '/home']);
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
