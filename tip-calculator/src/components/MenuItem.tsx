import React from 'react'

import { TMenuItem } from '../types'

type TMenuItemProps = {
    item: TMenuItem
    addItem: (item: TMenuItem) => void
}

export default function MenuItem({ item, addItem }: TMenuItemProps): React.JSX.Element {
    return (
        <button onClick={() => addItem(item)} className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}