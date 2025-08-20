import {TeamsCategoryType} from './teams-category-type.model';

export interface TeamsCategory {
  name: string;
  type: TeamsCategoryType;
  teamsCount: number;
  tasksCount: number;
}
