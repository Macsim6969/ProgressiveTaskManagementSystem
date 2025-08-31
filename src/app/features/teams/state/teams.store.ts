import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { TeamsCategoryModel } from '../models/teams-category.model';
import { Observable, fromEvent, switchMap, map, take, tap } from 'rxjs';
import { TeamsService } from '../services/teams.service';
import { TeamsCategoryType } from '../models/teams-category-type.model';
import { Team } from '../models/team.model';
import { Filters } from '../../../shared/models/filters.model';

interface State {
  selectedCategory: TeamsCategoryType | null;
  teamsCategory: TeamsCategoryModel[];
  teams: Team[];
  filters: Filters;
  newTeamsForProject: Team[];
}

@Injectable()
export class TeamsStore extends ComponentStore<State> {
  constructor(private teamsService: TeamsService) {
    super({
      selectedCategory: null,
      teamsCategory: [],
      teams: [],
      filters: { search: '' },
      newTeamsForProject: [],
    });
  }

  // -----------------
  // Effects
  // -----------------

  readonly chooseCategory = this.effect<TeamsCategoryType>((trigger$) =>
    trigger$.pipe(
      tap((categoryType) => {
        this.patchState({ selectedCategory: categoryType });
        this.chooseTeamByCategory(categoryType);
      })
    )
  );

  readonly getTeamsCategory = this.effect<void>((trigger$) =>
    trigger$.pipe(
      switchMap(() =>
        this.teamsService.getTeamsCategory().pipe(
          tap((teamsCategory) => this.patchState({ teamsCategory }))
        )
      )
    )
  );

  readonly chooseTeamByCategory = this.effect<TeamsCategoryType>((trigger$) =>
    trigger$.pipe(
      switchMap((categoryType) =>
        this.teamsService.getTeamByCategory(categoryType).pipe(
          tap((teams) => this.patchState({ teams }))
        )
      )
    )
  );

  readonly searchNewTeamForProject = this.effect<void>((trigger$) =>
    trigger$.pipe(
      switchMap(() =>
        this.teamsService.searchNewTeamForProject().pipe(
          switchMap((data: any) => {
            // создаём воркер под конкретный запрос
            const worker = new Worker(
              new URL('../../../workers/team-filter.worker', import.meta.url)
            );

            worker.postMessage({ users: data.results });

            return fromEvent<MessageEvent<Team[]>>(worker, 'message').pipe(
              take(1), // один ответ и завершаем
              tap(({ data }) => {
                this.patchState({
                  selectedCategory: null,
                  teams: data,
                });
                worker.terminate();
              })
            );
          })
        )
      )
    )
  );

  // -----------------
  // Updaters
  // -----------------

  readonly updateFilters = this.updater<Partial<Filters>>((state, filters) => ({
    ...state,
    filters: { ...state.filters, ...filters },
  }));

  readonly updateTeams = this.updater<Team[]>((state, teams) => ({
    ...state,
    teams,
  }));

  // -----------------
  // Selectors
  // -----------------

  readonly selectedCategory$ = this.select((state) => state.selectedCategory);
  readonly teamsCategory$ = this.select((state) => state.teamsCategory);
  readonly teams$ = this.select((state) => state.teams);
  readonly filters$ = this.select((state) => state.filters);

  readonly filteredTeams$: Observable<Team[]> = this.select(
    this.teams$,
    this.filters$,
    (teams, filters) => ({ teams, filters })
  ).pipe(
    switchMap(({ teams, filters }) => {
      // если нет фильтра → сразу отдаём команды
      if (!filters.search?.trim()) {
        return new Observable<Team[]>((subscriber) => {
          subscriber.next(teams);
          subscriber.complete();
        });
      }

      const worker = new Worker(
        new URL('../../../workers/search-team.worker', import.meta.url)
      );

      worker.postMessage({ teams, filters });

      return fromEvent<MessageEvent<Team[]>>(worker, 'message').pipe(
        map((event) => event.data),
        take(1),
        tap(() => worker.terminate())
      );
    })
  );
}
