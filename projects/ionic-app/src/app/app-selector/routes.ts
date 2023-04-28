import { Routes } from '@angular/router';
import { ROUTES_MOBILE } from '../mobile/app.routes';
import { ROUTES_HOME } from '../home/app.routes';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  ...ROUTES_HOME,
  // ...ROUTES_MOBILE, // Decomment this to enable mobile app with the TABS navigation.
];


