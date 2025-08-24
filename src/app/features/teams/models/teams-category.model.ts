import {TeamsCategoryType} from './teams-category-type.model';

export interface TeamsCategoryModel {
  name: string;
  type: TeamsCategoryType;
  teamsCount: number;
  tasksCount: number;
}
