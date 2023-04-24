import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent as MobileAppComponent } from '../mobile/app.component';
import { AppComponent as HomeAppComponent } from '../home/app.component';
import { Platform } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { DARK_MODE } from '../shared/utils/injection-tokens';
import { ThemeService } from '../shared/services/theme-service.service';

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
  isMobile: boolean;

  destroy$ = new Subject<boolean>();

  constructor(private platform: Platform, private router: Router) {
    this.themeService.setTheme();

    this.isMobile =
      !this.platform.is('desktop') || this.platform.width() < BREAK_POINTS.MD;

    this.checkRoutes(platform, router);
  }

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
          this.isMobile =
            this.isMobile != platform.width() < BREAK_POINTS.MD
              ? platform.width() < BREAK_POINTS.MD
              : this.isMobile;

          router.navigate([this.isMobile ? '/mobile' : '/home']);
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
