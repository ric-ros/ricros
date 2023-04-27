import { Routes } from '@angular/router';

export const ROUTES_HOME: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        redirectTo: 'folder',
        pathMatch: 'full',
      },
      {
        path: 'folder',
        loadComponent: () =>
          import('./folder/folder.page').then((m) => m.FolderPage),
        loadChildren: () => [
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
    ],
  },
];
