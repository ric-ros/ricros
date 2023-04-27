import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { environment } from './environments/environment';
import { AppSelectorComponent } from './app/app-selector/app-selector.component';
import { ROUTES } from './app/app-selector/routes';
import {
  DARK_MODE,
  DARK_MODE_DEFAULT,
} from './app/shared/utils/injection-tokens';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppSelectorComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: DARK_MODE, useValue: DARK_MODE_DEFAULT },
    importProvidersFrom(
      IonicModule.forRoot({

        platform: {
          /** The default `desktop` function returns false for devices with a touchscreen.
           * This is not always wanted, so this function tests the User Agent instead.
           **/
          desktop: (win) => {
            const isMobile =
              /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                win.navigator.userAgent
              );
            return !isMobile;
          },
        },
      })
    ),
    provideRouter(ROUTES),
  ],
});
