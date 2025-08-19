export interface User {
  id: string | null;
  name: string;
  email: string;
}

export interface AppState {
  user: User;
  theme: 'light' | 'dark';
  language: string;
  notifications: number;
  isLoading: boolean;
}

export const initialAppState: AppState = {
  user: { id: null, name: '', email: '' },
  theme: 'light',
  language: 'en',
  notifications: 0,
  isLoading: false
};
