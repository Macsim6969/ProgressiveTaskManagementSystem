export interface Task {
  id: number;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  deadline: string;
  priority: 'low' | 'medium' | 'high';
}
