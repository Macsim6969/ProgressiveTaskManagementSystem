import {Component, OnInit} from '@angular/core';
import {teamsCategory} from './constants/teams-category.constant';
import {TeamsCategory} from './models/teams-category.model';
import {MatIcon} from '@angular/material/icon';
import {SkeletonIfDirective} from '../../shared/directives/skeleton-if';
import {TeamsService} from './services/teams.service';
import {TeamsStore} from './state/teams.store';
import {Observable, of} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-teams',
  imports: [
    MatIcon,
    SkeletonIfDirective,
    AsyncPipe
  ],
  providers: [TeamsService, TeamsStore],
  templateUrl: './teams.html',
  styleUrl: './teams.scss'
})
export class Teams implements OnInit{

  constructor(
    private teamsStore: TeamsStore
  ) {}


  ngOnInit() {
    this.teamsStore.getTeamsCategory();

  }

  get teamsCategory$(): Observable<TeamsCategory[]> {
    return this.teamsStore.teamsCategory$;
  }
}
