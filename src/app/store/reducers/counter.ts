import { ActionReducer, Action } from '@ngrx/store'


export const counterReducer: ActionReducer<number> =
    (state: number = 0, action: Action) => {
        switch (action.type) {
            case ('INCREMENT'):
                return state + 1
            case ('DECREMENT'):
                return state - 1
            default:
                return state;

        }
    };