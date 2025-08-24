import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TeamsCategoryModel} from './models/teams-category.model';
import {TeamsService} from './services/teams.service';
import {TeamsStore} from './state/teams.store';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {TeamsCategoryType} from './models/teams-category-type.model';
import {Team} from './models/team.model';
import {TeamsCategory} from './components/teams-category/teams-category';
import {TeamsByCategoryCard} from './components/teams-by-category-card/teams-by-category-card';
import {TeamsByCategoryActions} from './components/teams-by-category-actions/teams-by-category-actions';
import {Filters} from '../../shared/models/filters.model';

@Component({
  selector: 'app-teams',
  imports: [
    AsyncPipe,
    TeamsCategory,
    TeamsByCategoryCard,
    TeamsByCategoryActions,
  ],
  providers: [TeamsService, TeamsStore],
  templateUrl: './teams.html',
  styleUrl: './teams.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Teams implements OnInit {

  constructor(
    private teamsStore: TeamsStore
  ) {
  }

  get teamsCategory$(): Observable<TeamsCategoryModel[]> {
    return this.teamsStore.teamsCategory$;
  }

  get selectedTypeTeam$(): Observable<TeamsCategoryType | null> {
    return this.teamsStore.selectedCategory$;
  }

  get teamsByCategoryTeamFilters$(): Observable<Filters> {
    return this.teamsStore.filters$;
  }

  get filteredTeams$(): Observable<Team[]> {
    return this.teamsStore.filteredTeams$;
  }

  ngOnInit() {
    this.teamsStore.getTeamsCategory();
  }

  public chooseTeam(team: TeamsCategoryType): void {
    this.teamsStore.chooseCategory(team);
  }

  public updatedFilters(newFilters: Filters): void {
    this.teamsStore.updateFilters(newFilters);
  }
}
