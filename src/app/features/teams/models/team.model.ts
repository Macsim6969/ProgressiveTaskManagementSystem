import {Task} from '../../tasks/models/task.model';

export interface Team {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  salary: number;
  experienceYears: number;
  birthDate: string;
  tasks: Task[];
}
