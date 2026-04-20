import { Button, Card, Space, Tag, Typography } from "antd"
import useOrderContext from "./useOrderContext"

const { Paragraph, Text } = Typography

export default function SidebarSummary() {
  const { customer, totalItems, clearOrder } = useOrderContext()

  return (
    <Card title="Resumo lateral" style={{ minHeight: 320 }}>
      <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
        <Paragraph type="secondary" style={{ marginBottom: 0 }}>
          Este componente tambem nao recebe props. Ele le os dados compartilhados pelo{" "}
          <Text code>OrderProvider</Text>.
        </Paragraph>

        <Text>Cliente: {customer}</Text>
        <Text>
          Total de itens no pedido: <Tag color="blue">{totalItems}</Tag>
        </Text>

        <Button onClick={clearOrder} disabled={totalItems === 0} block>
          Limpar pedido
        </Button>
      </Space>
    </Card>
  )
}
