import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TeamsCategory} from '../models/teams-category.model';
import {Observable, of} from 'rxjs';
import {teamsCategory} from '../constants/teams-category.constant';


@Injectable()

export class TeamsService {
  constructor(
    private http: HttpClient
  ) {}

  public getTeamsCategory(): Observable<TeamsCategory[]> {
    this.http.get<TeamsCategory[]>('');
    return of(teamsCategory);
  }
}
