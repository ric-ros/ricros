import { Routes } from '@angular/router';

export const MESSAGE_ROUTES: Routes = [
  {
    path: ':messageId',
    loadComponent: () =>
      import('./email/view-message/view-message.page').then(
        (m) => m.ViewMessagePage
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./email/home/home.page').then((m) => m.HomePage),
  },
];

export const CV_ROUTES: Routes = [
  {
    path: 'curriculum-vitae',
    loadComponent: () => import('./CV/cv.component').then((m) => m.CvComponent),
  },
];
