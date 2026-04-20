import { useContext } from "react"
import { OrderContext } from "./OrderContext"

export default function useOrderContext() {
  const context = useContext(OrderContext)

  if (!context) {
    throw new Error("useOrderContext deve ser usado dentro de OrderProvider")
  }

  return context
}
