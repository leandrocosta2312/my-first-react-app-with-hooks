export type Product = {
  id: number
  name: string
}

export type OrderContextValue = {
  customer: string
  items: Product[]
  totalItems: number
  addItem: (product: Product) => void
  clearOrder: () => void
}
