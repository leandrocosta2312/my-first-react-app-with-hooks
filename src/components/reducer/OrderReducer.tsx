import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from "antd"
import { Plus, RefreshCcw, Save, ShoppingCart, Trash2 } from "lucide-react"
import type { ColumnsType } from "antd/es/table"
import { useReducer, useState } from "react"

const { Text, Paragraph } = Typography

type OrderItem = {
  key: number
  produto: string
  quantidade: number
}

type Order = {
  cliente: string
  status: string
  produto: string
  quantidade: number
  itens: OrderItem[]
}

type OrderAction =
  | { type: "setCustomer"; value: string }
  | { type: "setStatus"; value: string }
  | { type: "setProduct"; value: string }
  | { type: "setQuantity"; value: number }
  | { type: "addItem" }
  | { type: "removeItem"; key: number }
  | { type: "reset" }

const initialOrderState: Order = {
  cliente: "Maria",
  status: "aberto",
  produto: "",
  quantidade: 1,
  itens: [],
}

const statusOptions = [
  { value: "aberto", label: "Aberto" },
  { value: "fechado", label: "Fechado" },
  { value: "cancelado", label: "Cancelado" },
]

const productOptions = [
  { value: "notebook", label: "Notebook" },
  { value: "mouse", label: "Mouse" },
  { value: "teclado", label: "Teclado" },
]

function orderReducer(order: Order, action: OrderAction): Order {
  switch (action.type) {
    case "setCustomer":
      return { ...order, cliente: action.value }
    case "setStatus":
      return { ...order, status: action.value }
    case "setProduct":
      return { ...order, produto: action.value }
    case "setQuantity":
      return { ...order, quantidade: action.value }
    case "addItem":
      if (!order.produto) return order

      return {
        ...order,
        itens: [
          ...order.itens,
          {
            key: Date.now(),
            produto: order.produto,
            quantidade: order.quantidade,
          },
        ],
        produto: "",
        quantidade: 1,
      }
    case "removeItem":
      return {
        ...order,
        itens: order.itens.filter((item) => item.key !== action.key),
      }
    case "reset":
      return initialOrderState
    default:
      return order
  }
}

export default function OrderReducer() {
  const [orderState, orderDispatch] = useReducer(orderReducer, initialOrderState)
  const [orderSaved, setOrderSaved] = useState<Order | null>(null)

  const itemColumns: ColumnsType<OrderItem> = [
    {
      title: "Produto",
      dataIndex: "produto",
      key: "produto",
      render: (value: string) =>
        productOptions.find((product) => product.value === value)?.label ?? value,
    },
    {
      title: "Quantidade",
      dataIndex: "quantidade",
      key: "quantidade",
    },
    {
      title: "Acoes",
      key: "acoes",
      render: (_, record) => (
        <Button
          danger
          type="text"
          icon={<Trash2 size={16} />}
          onClick={() => orderDispatch({ type: "removeItem", key: record.key })}
        >
          Remover
        </Button>
      ),
    },
  ]

  function saveOrder() {
    setOrderSaved(orderState)
  }

  function resetOrder() {
    orderDispatch({ type: "reset" })
    setOrderSaved(null)
  }

  return (
    <Row gutter={[24, 24]} align="top">
      <Col xs={24} xl={14}>
        <Card title="Pedido com useReducer" extra={<ShoppingCart size={18} />}>
          <Form layout="vertical" onFinish={saveOrder}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Form.Item label="Cliente">
                  <Input
                    value={orderState.cliente}
                    onChange={(e) =>
                      orderDispatch({ type: "setCustomer", value: e.target.value })
                    }
                    placeholder="Nome do cliente"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item label="Status">
                  <Select
                    value={orderState.status}
                    options={statusOptions}
                    onChange={(value) => orderDispatch({ type: "setStatus", value })}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item label="Produto do item">
                  <Select
                    value={orderState.produto || undefined}
                    placeholder="Selecione um produto"
                    options={productOptions}
                    onChange={(value) => orderDispatch({ type: "setProduct", value })}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item label="Quantidade do item">
                  <InputNumber
                    mode="spinner"
                    min={1}
                    value={orderState.quantidade}
                    onChange={(value) =>
                      orderDispatch({
                        type: "setQuantity",
                        value: Number(value ?? 1),
                      })
                    }
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Space wrap style={{ marginBottom: 16 }}>
              <Button
                type="dashed"
                icon={<Plus size={16} />}
                onClick={() => orderDispatch({ type: "addItem" })}
                disabled={!orderState.produto}
              >
                Adicionar item
              </Button>

              <Button type="primary" htmlType="submit" icon={<Save size={16} />}>
                Salvar pedido
              </Button>

              <Button onClick={resetOrder} icon={<RefreshCcw size={16} />}>
                Limpar
              </Button>
            </Space>

            <Table
              rowKey="key"
              columns={itemColumns}
              dataSource={orderState.itens}
              pagination={false}
              locale={{ emptyText: "Nenhum item adicionado ainda" }}
            />
          </Form>
        </Card>
      </Col>

      <Col xs={24} xl={10}>
        <Card title="Pedido montado ao salvar">
          <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
            <Paragraph type="secondary" style={{ marginBottom: 0 }}>
              Nesse exemplo, o reducer controla os campos do pedido e tambem a lista
              de itens da tabela. No salvar, enviamos tudo junto.
            </Paragraph>

            {orderSaved ? (
              <>
                <Text>Cliente: {orderSaved.cliente}</Text>
                <Text>Status: {orderSaved.status}</Text>
                <Text>Total de itens: {orderSaved.itens.length}</Text>
                <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                  {JSON.stringify(orderSaved, null, 2)}
                </pre>
              </>
            ) : (
              <Text type="secondary">
                Adicione itens na tabela e clique em salvar para ver o objeto final.
              </Text>
            )}
          </Space>
        </Card>
      </Col>
    </Row>
  )
}
