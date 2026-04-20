import { useMemo, useState } from "react"
import { OrderContext } from "./OrderContext"
import type { Product } from "./types"

export default function OrderProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [items, setItems] = useState<Product[]>([])

  function addItem(product: Product) {
    setItems((current) => [...current, product])
  }

  function clearOrder() {
    setItems([])
  }

  const value = useMemo(
    () => ({
      customer: "Maria",
      items,
      totalItems: items.length,
      addItem,
      clearOrder,
    }),
    [items]
  )

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}
