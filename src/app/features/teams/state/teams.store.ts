import {ComponentStore} from '@ngrx/component-store';
import {Injectable} from '@angular/core';
import {TeamsCategoryModel} from '../models/teams-category.model';
import {switchMap, tap} from 'rxjs';
import {TeamsService} from '../services/teams.service';
import {TeamsCategoryType} from '../models/teams-category-type.model';
import {Team} from '../models/team.model';
import {Filters} from '../../../shared/models/filters.model';

interface State {
  selectedCategory: TeamsCategoryType | null;
  teamsCategory: TeamsCategoryModel[];
  teams: Team[];
  filters: Filters;

  newTeamsForProject: Team[];
}

@Injectable()
export class TeamsStore extends ComponentStore<State> {
  constructor(
    private teamsService: TeamsService
  ) {
    super({
      selectedCategory: null,
      teamsCategory: [],
      teams: [],
      filters: {
        search: '',
      },
      newTeamsForProject: []
    });
  }

  //Effects

  public chooseCategory = this.effect<TeamsCategoryType>(trigger$ =>
    trigger$.pipe(
      tap((categoryType) => {
        this.patchState({
          selectedCategory: categoryType
        })
        this.chooseTeamByCategory(categoryType);
      })
    ))

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

  public chooseTeamByCategory = this.effect<TeamsCategoryType>(trigger$ =>
    trigger$.pipe(
      switchMap((categoryType: TeamsCategoryType) => {
        return this.teamsService.getTeamByCategory(categoryType).pipe(
          tap((teamByCategory: Team[]) => {
            this.patchState({
              teams: teamByCategory
            })
          })
        )
      })
    ))

  public searchNewTeamForProject = this.effect<void>(trigger$ =>
    trigger$.pipe(
      switchMap(() => {
        return this.teamsService.searchNewTeamForProject()
          .pipe(
            tap((data: any) => {
              const worker = new Worker(
                new URL('../../../workers/team-filter.worker', import.meta.url)
              );

              worker.onmessage = ({data}) => {
                this.patchState({
                  selectedCategory: null
                })
                this.updateTeams(data)
                console.log(data);
                worker.terminate();
              };

              worker.postMessage({users: data.results});
            })
          )
      })
    ))

  //Updaters

  public updateFilters = this.updater<Partial<Filters>>((state, filters) => ({
    ...state,
    filters: {...state.filters, ...filters}
  }));

  public updateTeams = this.updater<Team[]>((state, team) => ({
    ...state,
    teams: team
  }))


  //Selectors
  public selectedCategory$ = this.select(state => state.selectedCategory);
  public teamsCategory$ = this.select(state => state.teamsCategory);
  public teams$ = this.select(state => state.teams);
  public filters$ = this.select(state => state.filters);

  public filteredTeams$ = this.select(
    this.teams$,
    this.filters$,
    (teams, filters) => {
      let result = [...teams];

      //Need create web workers for filters
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        result = result.filter(
          (t) =>
            t.firstName.toLowerCase().includes(searchLower) ||
            t.lastName.toLowerCase().includes(searchLower) ||
            t.position.toLowerCase().includes(searchLower) ||
            t.experienceYears.toString().toLowerCase().includes(searchLower) ||
            t.tasks.length.toString().toLowerCase().includes(searchLower)
        );
      }
      return result;
    }
  );
}
