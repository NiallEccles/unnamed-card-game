import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/models/card';

export const create = createAction('[Card] Create', props<Card>());
export const damage = createAction('[Card] Deal Damage', props<{ damage: number }>());