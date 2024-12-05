import { createAction, props, emptyProps } from '@ngrx/store';
import type { IBox, IOption, ILSData } from '../../types';

export const initBoxes = createAction('[BoxesPage] Init Boxes', emptyProps);
export const initBoxesSuccess = createAction('[BoxesPage] Init Boxes Success', props<{boxes: IBox[]}>());

/* 

export const deleteDrawing = createAction(
  '[DrawingPage] Delete Drawing',
  props<{ id: number }>()
);
 */