import { Component } from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SkeletonIfDirective} from '../../shared/directives/skeleton-if';
import {Store} from '@ngrx/store';
import {selectIsLoading} from '../../state/app.selectors';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {menuNavigations} from './constants/menu-navigation.constant';
import {MenuNavigations} from './models/menu-navigations.model';
import {MatTooltip} from '@angular/material/tooltip';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-menu-navigation',
  imports: [
    MatIconButton,
    MatIconModule,
    SkeletonIfDirective,
    AsyncPipe,
    MatTooltip,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu-navigation.html',
  styleUrl: './menu-navigation.scss'
})
export class MenuNavigation {

  public readonly menuNavigations: MenuNavigations[]  = menuNavigations;

  constructor(
    private store: Store
  ) {
  }

  get isLoading$(): Observable<boolean> {
    return this.store.select(selectIsLoading);
  }
}
