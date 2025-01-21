import React, { useMemo } from 'react'

import { formatCurrency } from '../helpers'
import { TOrderItem } from '../types'

type TOrderTotalsProps = {
    order: TOrderItem[]
}

export default function OrderTotals({ order }: TOrderTotalsProps): React.JSX.Element {
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Total and Tip:</h2>
                <p>Subtotal: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>Tip: {''}
                    <span className="font-bold">0</span>
                </p>
                <p>Total: {''}
                    <span className="font-bold">0</span>
                </p>
            </div>

            <button></button>
        </>
    )
}