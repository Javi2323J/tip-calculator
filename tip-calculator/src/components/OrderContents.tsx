import React from 'react'

import { formatCurrency } from '../helpers'
import { TMenuItem, TOrderItem } from '../types'

type TOrderContentProps = {
    order: TOrderItem[]
    removeItem: (id: TMenuItem['id']) => void
}

export default function OrderContents({ order, removeItem }: TOrderContentProps): React.JSX.Element {
    return (
        <div>
            <h2 className="font-black text-4xl">Consume</h2>

            <div className="space-y-3 mt-10">
                {order.map(item => (
                    <div key={item.id}
                        className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Quantity: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>

                        <button onClick={() => removeItem(item.id)} className="bg-red-600 h-8 w-8 rounded-full text-white font-black">
                            X
                        </button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}