import {Team} from '../features/teams/models/team.model';
import {Filters} from '../shared/models/filters.model';

addEventListener('message', ({data}) =>{
  const { teams, filters } = data as { teams: Team[]; filters: Filters };
  let result = [...teams];

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    result = result.filter(
      (t) =>
        t.firstName.toLowerCase().includes(searchLower) ||
        t.lastName.toLowerCase().includes(searchLower) ||
        t.position.toLowerCase().includes(searchLower) ||
        t.experienceYears.toString().toLowerCase().includes(searchLower) ||
        t.tasks.length.toString().toLowerCase().includes(searchLower)
    );
  }

  postMessage(result);
})
