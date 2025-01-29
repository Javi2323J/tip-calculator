import { TMenuItem, TOrderItem } from '../types'

export type OrderActions =
    { type: 'add-item', payload: { item: TMenuItem } } |
    { type: 'remove-item', payload: { item: TMenuItem['id'] } } |
    { type: 'place-order', } |
    { type: 'add-tip', payload: { value: number } }

export type OrderState = {
    order: TOrderItem[],
    tip: number
}

export const initialState: OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (state: OrderState, action: OrderActions) => {
    if (action.type === 'add-item') {

    }
    if (action.type === 'remove-item') {

    }
    if (action.type === 'place-order') {

    }
    if (action.type === 'remove-item') {

    }

    return state
}