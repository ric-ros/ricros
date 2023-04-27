import { Routes } from '@angular/router';

export const MESSAGE_ROUTES: Routes = [
  {
    path: ':messageId',
    loadComponent: () =>
      import('./view-message/view-message.page').then((m) => m.ViewMessagePage),
  },
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
];
