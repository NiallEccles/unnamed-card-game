import { createReducer, on } from '@ngrx/store';
import { Card } from 'src/app/models/card';
import { damage } from './card.action';

export const initialState: Card = {
  name: '',
  attributes: {
    health: 0,
    defence: 0,
    attack: 0,
  },
};

export const cardReducer = createReducer(
  initialState,
  on(damage, (state, props) => ({
    ...state,
    ...props,
  }))
);
