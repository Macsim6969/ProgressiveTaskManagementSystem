import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'comparus-game',
    loadComponent: () => import('./features/comparus-game/comparus-game').then(c => c.ComparusGame)
  },
  {
    path: '**',
    redirectTo: '/comparus-game',
  },
];
