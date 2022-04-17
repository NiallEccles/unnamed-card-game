import { ActionReducerMap } from "@ngrx/store"
import { Card } from "./models/card"
import { cardReducer } from "./ui/card/state/card.reducer"

export interface AppState {
    card: Card
}

export const reducers: ActionReducerMap<AppState> = {
    card: cardReducer
}