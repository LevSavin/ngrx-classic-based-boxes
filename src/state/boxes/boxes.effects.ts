import { Injectable, inject } from '@angular/core';
import { of, tap, switchMap } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as BoxesActions from './boxes.actions';
import { selectBoxes } from './boxes.selectors'

import { SelectionService } from '../../services/selection.service'
import { IBox, ILSData } from '../../types';
import { localStorageKey } from '../../constants';

@Injectable()
export class BoxesEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);
  private selectionService = inject(SelectionService);

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

  createDrawing$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoxesActions.loadExample),
      mergeMap((action) => {
        return this.selectionService.getExample(action.id).pipe(
          map((example) => BoxesActions.loadExampleSuccess({example})),
          catchError(error => of(BoxesActions.loadExampleFailure({ error })))
        )
      })
    )
  );
}