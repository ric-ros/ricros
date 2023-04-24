import { Routes } from '@angular/router';
import { ROUTES_HOME } from '../home/app.routes';
import { ROUTES_MOBILE } from '../mobile/app.routes';
import { AppSelectorComponent } from './app-selector.component';

// export const ROUTES = ROUTES_MOBILE;
// export const ROUTES = ROUTES_HOME;
// const ROUTES_SHARED: Routes = [
//   {
//     path: '',
//     component: AppSelectorComponent,
//   },
// ];

// export const ROUTES = ROUTES_SHARED.concat(ROUTES_MOBILE, ROUTES_HOME);
export const ROUTES = ROUTES_MOBILE.concat(ROUTES_HOME);
