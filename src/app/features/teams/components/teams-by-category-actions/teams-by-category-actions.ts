import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Search} from '../../../../shared/components/search/search';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Filters} from '../../../../shared/models/filters.model';

@Component({
  selector: 'app-teams-by-category-actions',
  imports: [
    Search,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './teams-by-category-actions.html',
  styleUrl: './teams-by-category-actions.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsByCategoryActions {
  @Input() teamsByCategoryTeamFilters: Filters | null = null;
  @Output() changeFilters = new EventEmitter<Filters>();

  public changeSearch(newFilter: string): void {
    if (!this.teamsByCategoryTeamFilters) return;
    this.teamsByCategoryTeamFilters = {
      ...this.teamsByCategoryTeamFilters,
      search: newFilter
    }

    this.updateFilters();
  }

  public updateFilters(): void {
    if (!this.teamsByCategoryTeamFilters) return;
    this.changeFilters.emit(this.teamsByCategoryTeamFilters);
  }
}
