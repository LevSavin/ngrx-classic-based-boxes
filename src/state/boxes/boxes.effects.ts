import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType, provideEffects } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BoxesActions from './boxes.actions';
import { options, localStorageKey } from '../../constants';
import { IBox, IOption, ILSData } from '../../types';

@Injectable()
export class BoxesEffects {
  private actions$ = inject(Actions);
  //private drawingsApiService = inject(DrawingsApiService);

  getEmptyBoxes(): IBox[] {
    return new Array(10).fill(null).map((_, index) => ({
      id: index + 1,
      option: null,
    }));
  }

  initBoxes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoxesActions.initBoxes),
      map(() => {
        const dataString = window.localStorage.getItem(localStorageKey);
        const boxes = dataString
          ? JSON.parse(dataString)?.boxes
          : this.getEmptyBoxes();
          return BoxesActions.initBoxesSuccess({boxes});
      }),
      catchError(() => {
        console.error('Error loading local storage data');
        return of();
      })
    )
  );
}