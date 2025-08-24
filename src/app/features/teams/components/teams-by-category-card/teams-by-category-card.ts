import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Team} from '../../models/team.model';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-teams-by-category-card',
  imports: [
    MatIconModule,
    CommonModule
  ],
  templateUrl: './teams-by-category-card.html',
  styleUrl: './teams-by-category-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsByCategoryCard {
  @Input() teamByCategory: Team[] = [];

}
