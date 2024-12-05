import {isDevMode} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects'
import { reducers, effects } from './state/';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore(reducers),
    provideEffects(...effects),
    provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode(),
        autoPause: true,
        trace: false,
        traceLimit: 75,
        connectInZone: true
    }),
    provideEffects()
]
});
