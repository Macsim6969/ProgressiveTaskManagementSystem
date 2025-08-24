import {TeamsCategoryType} from '../models/teams-category-type.model';
import {TeamsCategoryModel} from '../models/teams-category.model';

export const teamsCategory: TeamsCategoryModel[] = [
  {
    name: 'Project Manager',
    type: TeamsCategoryType.ProjectManager,
    teamsCount: 3,
    tasksCount: 24
  },
  {
    name: 'Team Lead',
    type: TeamsCategoryType.TeamLead,
    teamsCount: 4,
    tasksCount: 24
  },
  {
    name: 'QA',
    type: TeamsCategoryType.QA,
    teamsCount: 6,
    tasksCount: 45
  },
  {
    name: 'Front-end developer',
    type: TeamsCategoryType.FrontendDeveloper,
    teamsCount: 10,
    tasksCount: 86
  },
  {
    name: 'Backend Developer',
    type: TeamsCategoryType.BackendDeveloper,
    teamsCount: 10,
    tasksCount: 90
  },
  {
    name: 'Devops',
    type: TeamsCategoryType.Devops,
    teamsCount: 3,
    tasksCount: 7
  },
]
