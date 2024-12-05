import { createReducer, on } from '@ngrx/store';
import { IBox, IOption, ILSData, IExample } from '../../types';
import * as BoxesActions from './boxes.actions';
import { options } from '../../constants';

export interface BoxesState {
  boxes: IBox[];
  options: IOption[];
  activeBoxId: number | null;
  activeBox: IBox | null;
  example: IExample | null;
  loading: boolean;
  error: any;
}

export const initialState: BoxesState = {
  boxes: [],
  options: options(),
  activeBoxId: null,
  activeBox: null,
  example: null,
  loading: false,
  error: null,
};

export const boxesReducer = createReducer(
  initialState,
  on(BoxesActions.initBoxesSuccess, (state, { boxes }) => ({ ...state, boxes })),
  on(BoxesActions.selectBox, (state, { id }) => {
    const index = state.boxes.findIndex(
      (el) => el.id === id
    );
    let box: IBox | null = null;
    if (index !== -1) {
      box = state.boxes[index];
    }
    return {
      ...state,
      activeBoxId: id,
      activeBox: box,
    }
  }),
  on(BoxesActions.selectOption, (state, { option }) => {
    const boxes = structuredClone(state.boxes);
    const idx = boxes.findIndex((el) => el.id === state.activeBoxId);
    if (idx !== -1) {
      boxes[idx].option = option;
    }

    let nextId = boxes[idx].id;
    let box: IBox = boxes[idx];
    if (idx + 1 < boxes.length) {
      nextId = boxes[idx + 1].id;
      box = boxes[idx + 1];
    }
    return {
      ...state,
      boxes,
      activeBoxId: nextId,
      activeBox: box
    }
  }),
  on(BoxesActions.clearBoxes, (state) => {
    const boxes = structuredClone(state.boxes);
    boxes.forEach((box) => {
      box.option = null;
    });
    const box = structuredClone(state.activeBox);
    if (box?.option) {
      box.option = null;
    }
    return {
      ...state,
      boxes,
      activeBox: box
    }
  }),
  on(BoxesActions.loadExample, state => ({ ...state, loading: true })),
  on(BoxesActions.loadExampleSuccess, (state, { example }) => ({
    ...state,
    example,
    loading: false,
    error: null,
  })),
  on(BoxesActions.loadExampleFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);