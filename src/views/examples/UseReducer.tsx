import PageTitle from "@/components/layout/PageTitle"
import CounterReducer from "@/components/reducer/CounterReducer"
import OrderReducer from "@/components/reducer/OrderReducer"
import { Divider, Space } from "antd"

export default function UseReducerPage() {
  return (
    <Space orientation="vertical" size="large" style={{ width: "100%" }}>
      <PageTitle
        title="Hook useReducer"
        subtitle="Exemplos separados para facilitar a leitura do reducer."
      />

      <Divider>Exemplo com contador</Divider>

      <CounterReducer />

      <Divider>Exemplo com formulario e itens</Divider>

      <OrderReducer />
    </Space>
  )
}
