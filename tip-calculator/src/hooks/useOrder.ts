import { useState } from 'react'

import type { TMenuItem, TOrderItem } from '../types'

export default function useOrder() {
    const [order, setOrder] = useState<TOrderItem[]>([])

    const addItem = (item: TMenuItem) => {
        const itemExists = order.find(orderItem => orderItem.id === item.id)

        if (itemExists) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 } :
                orderItem
            )

            setOrder(updatedOrder)
        } else {
            const newItem: TOrderItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    return {
        addItem
    }
}