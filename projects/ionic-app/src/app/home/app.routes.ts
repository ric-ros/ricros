import { Routes } from '@angular/router';
import { CV_ROUTES } from '../shared/content/routes';

export const ROUTES_HOME: Routes = [
  {
    path: 'home',
    children: [
      ...CV_ROUTES,
      {
        path: ':id',
        loadChildren: () =>
          import('../shared/content/routes').then((m) => m.MESSAGE_ROUTES),
      },
      {
        path: '',
        redirectTo: 'inbox',
        pathMatch: 'full',
      },
    ],
  },
];
