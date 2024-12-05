import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BoxesState } from './boxes.reducers';

export const selectBoxesState = createFeatureSelector<BoxesState>('boxes');

export const selectBoxes = createSelector(selectBoxesState, (state) => state.boxes);
export const selectOptions = createSelector(selectBoxesState, (state) => state.options);
export const selectActiveBoxId = createSelector(selectBoxesState, (state) => state.activeBoxId);
export const selectActiveBox = createSelector(selectBoxesState, (state) => state.activeBox);
export const selectTotalValue = createSelector(selectBoxesState, (state) => {
  return +state.boxes
    .reduce((acc, box) => acc + (box?.option?.value || 0), 0)
    .toFixed(2);
});


