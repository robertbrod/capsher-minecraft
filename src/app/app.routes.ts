import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
    children: [
      {
        path: '',
        redirectTo: 'setup',
        pathMatch: 'full',
      },
      {
        path: 'setup',
        loadComponent: () => import('./setup/setup').then((m) => m.Setup),
        
      }
    ]
  },
];
