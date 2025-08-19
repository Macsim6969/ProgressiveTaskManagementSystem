import { createAction, props } from '@ngrx/store';
import { User } from './app.state';

// User
export const setUser = createAction('[App] Set User', props<{ user: User }>());
export const clearUser = createAction('[App] Clear User');

// Theme
export const setTheme = createAction('[App] Set Theme', props<{ theme: 'light' | 'dark' }>());

// Language
export const setLanguage = createAction('[App] Set Language', props<{ language: string }>());

//Loading

export const setLoading = createAction('[App] Set Loading', props<{ isLoading: boolean }>());
