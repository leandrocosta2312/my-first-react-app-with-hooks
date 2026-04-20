import PageTitle from "@/components/layout/PageTitle"
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
import { Plus, RefreshCcw, Save, Trash2 } from "lucide-react"
import type { ColumnsType } from "antd/es/table"
import { useMemo, useState } from "react"

const { Text, Paragraph } = Typography

type ProductOption = {
  value: string
  label: string
  price: number
}

type OrderItem = {
  key: number
  produto: string
  quantidade: number
}

type Order = {
  cliente: string
  status: string
  itens: OrderItem[]
}

const statusOptions = [
  { value: "aberto", label: "Aberto" },
  { value: "fechado", label: "Fechado" },
  { value: "cancelado", label: "Cancelado" },
]

const productOptions: ProductOption[] = [
  { value: "notebook", label: "Notebook", price: 3500 },
  { value: "mouse", label: "Mouse", price: 80 },
  { value: "teclado", label: "Teclado", price: 150 },
]

export default function UseMemoPage() {
  const [customer, setCustomer] = useState("Maria")
  const [status, setStatus] = useState("aberto")
  const [product, setProduct] = useState<string>()
  const [quantity, setQuantity] = useState(1)
  const [itens, setItens] = useState<OrderItem[]>([])
  const [orderSaved, setOrderSaved] = useState<Order | null>(null)

  const itensComPreco = useMemo(() => {
    return itens.map((item) => {
      const product = productOptions.find((option) => option.value === item.produto)
      return {
        ...item,
        nomeProduto: product?.label ?? item.produto,
        precoUnitario: product?.price ?? 0,
        subtotal: (product?.price ?? 0) * item.quantidade,
      }
    })
  }, [itens])

  const totalItens = useMemo(() => {
    return itens.reduce((total, item) => total + item.quantidade, 0)
  }, [itens])

  const valorTotal = useMemo(() => {
    return itensComPreco.reduce((total, item) => total + item.subtotal, 0)
  }, [itensComPreco])

  const resumoProdutos = useMemo(() => {
    if (itensComPreco.length === 0) return "Nenhum item adicionado"

    return itensComPreco.map((item) => item.nomeProduto).join(", ")
  }, [itensComPreco])

  const itemColumns: ColumnsType<(typeof itensComPreco)[number]> = [
    {
      title: "Produto",
      dataIndex: "nomeProduto",
      key: "nomeProduto",
    },
    {
      title: "Quantidade",
      dataIndex: "quantidade",
      key: "quantidade",
    },
    {
      title: "Preco unitario",
      dataIndex: "precoUnitario",
      key: "precoUnitario",
      render: (value: number) => `R$ ${value.toFixed(2)}`,
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      key: "subtotal",
      render: (value: number) => `R$ ${value.toFixed(2)}`,
    },
    {
      title: "Acoes",
      key: "acoes",
      render: (_, record) => (
        <Button
          danger
          type="text"
          icon={<Trash2 size={16} />}
          onClick={() => removerItem(record.key)}
        >
          Remover
        </Button>
      ),
    },
  ]

  function adicionarItem() {
    if (!product) return

    setItens((current) => [
      ...current,
      {
        key: Date.now(),
        produto: product,
        quantidade: quantity,
      },
    ])

    setProduct(undefined)
    setQuantity(1)
  }

  function removerItem(key: number) {
    setItens((current) => current.filter((item) => item.key !== key))
  }

  function salvarPedido() {
    setOrderSaved({
      cliente: customer,
      status,
      itens,
    })
  }

  function limparPedido() {
    setCustomer("Maria")
    setStatus("aberto")
    setProduct(undefined)
    setQuantity(1)
    setItens([])
    setOrderSaved(null)
  }

  return (
    <Space orientation="vertical" size="large" style={{ width: "100%" }}>
      <PageTitle
        title="Hook useMemo"
        subtitle="Exemplo de pedido com calculos derivados memoizados."
      />

      <Row gutter={[24, 24]} align="top">
        <Col xs={24} xl={15}>
          <Card title="Pedido com useMemo">
            <Form layout="vertical" onFinish={salvarPedido}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Form.Item label="Cliente">
                    <Input
                      value={customer}
                      onChange={(e) => setCustomer(e.target.value)}
                      placeholder="Nome do cliente"
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label="Status">
                    <Select
                      value={status}
                      options={statusOptions}
                      onChange={setStatus}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label="Produto do item">
                    <Select
                      value={product}
                      placeholder="Selecione um produto"
                      options={productOptions.map(({ value, label }) => ({
                        value,
                        label,
                      }))}
                      onChange={setProduct}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label="Quantidade do item">
                    <InputNumber
                      mode="spinner"
                      min={1}
                      value={quantity}
                      onChange={(value) => setQuantity(Number(value ?? 1))}
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Space wrap style={{ marginBottom: 16 }}>
                <Button
                  type="dashed"
                  icon={<Plus size={16} />}
                  onClick={adicionarItem}
                  disabled={!product}
                >
                  Adicionar item
                </Button>

                <Button type="primary" htmlType="submit" icon={<Save size={16} />}>
                  Salvar pedido
                </Button>

                <Button onClick={limparPedido} icon={<RefreshCcw size={16} />}>
                  Limpar
                </Button>
              </Space>

              <Table
                rowKey="key"
                columns={itemColumns}
                dataSource={itensComPreco}
                pagination={false}
                locale={{ emptyText: "Nenhum item adicionado ainda" }}
              />
            </Form>
          </Card>
        </Col>

        <Col xs={24} xl={9}>
          <Card title="Valores calculados com useMemo">
            <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
              <Paragraph type="secondary" style={{ marginBottom: 0 }}>
                Aqui o <Text code>useMemo</Text> guarda resultados derivados da lista de
                itens, como total de quantidades, total do pedido e tabela enriquecida
                com preco e subtotal.
              </Paragraph>

              <Text>Total de itens: {totalItens}</Text>
              <Text>Valor total: R$ {valorTotal.toFixed(2)}</Text>
              <Text>Produtos no pedido: {resumoProdutos}</Text>

              {orderSaved ? (
                <>
                  <Text>Cliente salvo: {orderSaved.cliente}</Text>
                  <Text>Status salvo: {orderSaved.status}</Text>
                  <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                    {JSON.stringify(
                      {
                        ...orderSaved,
                        totalItens,
                        valorTotal,
                      },
                      null,
                      2
                    )}
                  </pre>
                </>
              ) : (
                <Text type="secondary">
                  Adicione itens e clique em salvar para ver o pedido final.
                </Text>
              )}
            </Space>
          </Card>
        </Col>
      </Row>
    </Space>
  )
}
