import {ComponentStore} from '@ngrx/component-store';
import {Injectable} from '@angular/core';
import {TeamsCategory} from '../models/teams-category.model';
import {switchMap, tap} from 'rxjs';
import {TeamsService} from '../services/teams.service';

interface State {
  teamsCategory: TeamsCategory[];
}

@Injectable()
export class TeamsStore extends ComponentStore<State> {
  constructor(
    private teamsService: TeamsService
  ) {
    super();
  }

  //Effects
  public getTeamsCategory = this.effect<void>(trigger$ =>
    trigger$.pipe(
      switchMap(() => {
        return this.teamsService.getTeamsCategory().pipe(
          tap((teamsCategory) => {
            this.patchState({teamsCategory: teamsCategory})
          })
        )
      })
    ))

  //Selectors
  public teamsCategory$ = this.select(state => state.teamsCategory);
}
