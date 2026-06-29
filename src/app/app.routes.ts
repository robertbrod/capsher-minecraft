import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./side-nav/side-nav').then((m) => m.SideNav),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home').then((m) => m.Home),
      },
      {
        path: 'setup',
        loadComponent: () => import('./setup/setup').then((m) => m.Setup),
      },
      {
        path: 'pre-lv-gallery',
        loadComponent: () => import('./gallery/pre-lv-gallery').then((m) => m.preLVGallery),
      },
       {
        path: 'lv-gallery',
        loadComponent: () => import('./gallery/lv-gallery').then((m) => m.LVGallery),
      },
       {
        path: 'mv-gallery',
        loadComponent: () => import('./gallery/mv-gallery').then((m) => m.MVGallery),
      },
      {
        path: 'hv-gallery',
        loadComponent: () => import('./gallery/hv-gallery').then((m) => m.HVGallery),
      },
    ],
  },
];
