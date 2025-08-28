import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TeamsCategoryModel} from '../models/teams-category.model';
import {delay, Observable, of} from 'rxjs';
import {teamsCategory} from '../constants/teams-category.constant';
import {TeamsCategoryType} from '../models/teams-category-type.model';
import {Team} from '../models/team.model';
import {teamMembers} from '../constants/teams-by-category.constant';


@Injectable()

export class TeamsService {
  constructor(
    private http: HttpClient
  ) {
  }

  public getTeamsCategory(): Observable<TeamsCategoryModel[]> {
    this.http.get<TeamsCategoryModel[]>('')

    return of(teamsCategory).pipe(
      delay(300)
    )
  }

  public getTeamByCategory(categoryType: TeamsCategoryType): Observable<Team[]> {
    this.http.get<Team[]>('');

    return of(teamMembers[categoryType]).pipe(
      delay(300)
    )
  }

  public searchNewTeamForProject(): Observable<unknown> {
    return this.http.get<unknown>('https://randomuser.me/api/?results=5000&nat=us')
  }
}
