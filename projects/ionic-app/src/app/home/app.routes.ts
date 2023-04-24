import { Routes } from '@angular/router';

export const ROUTES_HOME: Routes = [
  {
    path: 'home',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
];
