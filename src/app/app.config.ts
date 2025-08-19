import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideStore} from '@ngrx/store';
import {appReducer} from './state/app.reducer';
import {provideEffects} from '@ngrx/effects';
import {AppEffects} from './state/app.effects';
import {provideRouterStore} from '@ngrx/router-store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),

    importProvidersFrom(HttpClientModule),

    provideStore({ app: appReducer}),
    provideEffects([AppEffects]),
    provideRouterStore(),
    provideStoreDevtools({
      maxAge: 25
    }),
  ]
};
