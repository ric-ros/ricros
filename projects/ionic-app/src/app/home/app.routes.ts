import { Routes } from '@angular/router';

export const ROUTES_HOME: Routes = [
  {
    path: 'home',
    children: [
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
