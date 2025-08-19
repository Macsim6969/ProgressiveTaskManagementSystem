import {createReducer, on} from '@ngrx/store';
import {AppState, initialAppState} from './app.state';
import {setUser, clearUser, setTheme, setLanguage, setLoading} from './app.actions';

export const appReducer = createReducer<AppState>(
  initialAppState,

  // User
  on(setUser, (state, {user}) => ({...state, user})),
  on(clearUser, (state) => ({...state, user: {id: null, name: '', email: ''}})),

  // Theme
  on(setTheme, (state, {theme}) => ({...state, theme})),

  // Language
  on(setLanguage, (state, {language}) => ({...state, language})),

  //Loading
  on(setLoading, (state, {isLoading}) => ({...state, isLoading})),
);
