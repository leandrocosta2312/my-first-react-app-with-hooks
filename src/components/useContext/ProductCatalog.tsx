import { Button, Card, Space, Typography } from "antd"
import useOrderContext from "./useOrderContext"
import type { Product } from "./types"

const { Paragraph, Text } = Typography

const products: Product[] = [
  { id: 1, name: "Notebook" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Teclado" },
]

export default function ProductCatalog() {
  const { addItem } = useOrderContext()

  return (
    <Card title="Catalogo de produtos" style={{ minHeight: 320 }}>
      <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
        <Paragraph type="secondary" style={{ marginBottom: 0 }}>
          Este componente consegue adicionar itens no pedido sem receber nenhuma prop.
          Ele acessa a funcao <Text code>addItem</Text> diretamente do contexto.
        </Paragraph>

        {products.map((product) => (
          <Button key={product.id} type="dashed" onClick={() => addItem(product)} block>
            Adicionar {product.name}
          </Button>
        ))}
      </Space>
    </Card>
  )
}
