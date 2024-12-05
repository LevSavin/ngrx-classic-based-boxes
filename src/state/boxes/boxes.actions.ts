import { createAction, props, emptyProps } from '@ngrx/store';
import type { IBox, IOption, IExample } from '../../types';

export const initBoxes = createAction('[BoxesPage] Init Boxes', emptyProps);
export const initBoxesSuccess = createAction('[BoxesPage] Init Boxes Success', props<{boxes: IBox[]}>());
export const selectBox = createAction('[BoxesPage] Select Box', props<{id: number}>());
export const selectOption = createAction('[BoxesPage] Select Option', props<{option: IOption}>());
export const clearBoxes = createAction('[BoxesPage] Clear Boxes', emptyProps);
export const loadExample = createAction('[BoxesPage] Load Example', props<{id: number}>());
export const loadExampleSuccess = createAction('[BoxesPage] Load Example Success', props<{ example: IExample }>());
export const loadExampleFailure = createAction('[BoxesPage] Load Example Failure', props<{ error: string }>());