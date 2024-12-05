import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType, provideEffects } from '@ngrx/effects';
import { of, tap, switchMap } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BoxesActions from './boxes.actions';
import { options, localStorageKey } from '../../constants';
import { IBox, IOption, ILSData } from '../../types';
import { Store, select } from '@ngrx/store';
import { selectBoxes } from './boxes.selectors'

@Injectable()
export class BoxesEffects {
  private store = inject(Store);
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

  saveBoxes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoxesActions.selectOption),
      switchMap(() =>
        this.store.pipe(
          select(selectBoxes),
          tap(boxes => {
            const data: ILSData = { boxes };
            localStorage.setItem(localStorageKey, JSON.stringify(data));
          })
        )
      )
    ),
    { dispatch: false }
  );

  clearBoxes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoxesActions.clearBoxes),
      tap(() => {
        localStorage.removeItem(localStorageKey);
      })
    ),
    { dispatch: false }
  );
}