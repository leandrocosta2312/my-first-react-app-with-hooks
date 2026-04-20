import { Card, Space, Tag, Typography } from "antd"
import useOrderContext from "./useOrderContext"

const { Paragraph, Text } = Typography

export default function OrderItems() {
  const { items } = useOrderContext()

  return (
    <Card title="Itens do pedido">
      <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
        <Paragraph type="secondary" style={{ marginBottom: 0 }}>
          Repare que a lista e montada em outro ponto da tela, mas continua lendo o
          mesmo estado compartilhado.
        </Paragraph>

        {items.length > 0 ? (
          <Space wrap>
            {items.map((item, index) => (
              <Tag key={`${item.id}-${index}`} color="green">
                {item.name}
              </Tag>
            ))}
          </Space>
        ) : (
          <Text type="secondary">
            Nenhum item no pedido ainda. Adicione produtos no catalogo.
          </Text>
        )}
      </Space>
    </Card>
  )
}
