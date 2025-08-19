import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectUser = createSelector(selectAppState, (state) => state.user);
export const selectTheme = createSelector(selectAppState, (state) => state.theme);
export const selectLanguage = createSelector(selectAppState, (state) => state.language);
export const selectIsLoading  = createSelector(selectAppState, (state) => state.isLoading);
