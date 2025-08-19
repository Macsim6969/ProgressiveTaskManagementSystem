import { Component } from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SkeletonIfDirective} from '../../shared/directives/skeleton-if';
import {Store} from '@ngrx/store';
import {selectIsLoading} from '../../state/app.selectors';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-menu-navigation',
  imports: [
    MatIconButton,
    MatIconModule,
    SkeletonIfDirective,
    AsyncPipe
  ],
  templateUrl: './menu-navigation.html',
  styleUrl: './menu-navigation.scss'
})
export class MenuNavigation {

  constructor(
    private store: Store
  ) {
  }
  
  get isLoading$(): Observable<boolean> {
    return this.store.select(selectIsLoading);
  }
}
