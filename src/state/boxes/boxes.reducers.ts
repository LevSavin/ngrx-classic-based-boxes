import { createReducer, on } from '@ngrx/store';
import { IBox, IOption, ILSData } from '../../types';
import * as BoxesActions from './boxes.actions';

export interface BoxesState {
  boxes: IBox[];
  loading: boolean;
  error: any;
}

export const initialState: BoxesState = {
  boxes: [],
  loading: false,
  error: null,
};

export const boxesReducer = createReducer(
  initialState,
  on(BoxesActions.initBoxesSuccess, (state, { boxes }) => ({ ...state, boxes })),
);