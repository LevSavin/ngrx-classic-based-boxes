import { ActionReducerMap, ActionReducer } from '@ngrx/store';

import { boxesReducer, BoxesState } from './boxes/boxes.reducers';
import { BoxesEffects } from './boxes/boxes.effects';

export interface AppState {
  boxes: BoxesState
}

export const reducers: ActionReducerMap<AppState> = {
    boxes: boxesReducer
};

export const effects = [
    BoxesEffects,
]
