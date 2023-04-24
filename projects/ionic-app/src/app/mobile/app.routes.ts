import { Routes } from '@angular/router';

export const ROUTES_MOBILE: Routes = [
  {
    path: 'mobile',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
];
