import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BoxesState } from './boxes.reducers';
import { IBox, IOption, ILSData } from '../../types';

export const selectBoxesState = createFeatureSelector<BoxesState>('boxes');

export const selectBoxes = createSelector(selectBoxesState, (state) => state.boxes);

