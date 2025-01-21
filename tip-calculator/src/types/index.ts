export type TMenuItem = {
    id: number
    name: string
    price: number
}

export type TOrderItem = TMenuItem & {
    quantity: number
}