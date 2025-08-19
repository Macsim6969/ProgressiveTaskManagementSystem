import {UserRole} from '../../../shared/types/user-role.type';

export interface UserResponse {
  user: User;
  token: string;
}

export interface User {
  id: string,
  email: string,
  name: string
  role: UserRole;
}
