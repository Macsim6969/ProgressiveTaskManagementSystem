import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {TeamsCategoryType} from '../../models/teams-category-type.model';
import {NgClass} from '@angular/common';
import {SkeletonIfDirective} from '../../../../shared/directives/skeleton-if';
import {TeamsCategoryModel} from '../../models/teams-category.model';

@Component({
  selector: 'app-teams-category',
  imports: [
    MatIcon,
    NgClass,
    MatIconModule,
    SkeletonIfDirective
  ],
  templateUrl: './teams-category.html',
  styleUrl: './teams-category.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsCategory {
  @Input() teamsCategory:  TeamsCategoryModel[] = [];
  @Input() selectedTypeTeam: TeamsCategoryType | null = null;

  @Output() selectedTypeChange = new EventEmitter<TeamsCategoryType>();

  public chooseTeam(team: TeamsCategoryType): void {
    this.selectedTypeChange.emit(team);
  }

}
