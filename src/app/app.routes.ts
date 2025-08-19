import { Routes } from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./features/auth/auth').then(c => c.Auth),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard').then(c => c.Dashboard),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];
