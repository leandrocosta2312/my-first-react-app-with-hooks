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
  Typography,
} from "antd"
import type { FormInstance } from "antd"
import { RefreshCcw, Save } from "lucide-react"
import { useRef, useState } from "react"

const { Text, Paragraph } = Typography

type Pedido = {
  cliente: string
  status: string
  produto: string
  quantidade: number
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

export default function UseRefPage() {
  const formRef = useRef<FormInstance<Pedido> | null>(null)
  const [pedido, setPedido] = useState<Pedido | null>(null)

  function salvar() {
    const valores = formRef.current?.getFieldsValue()
    if (!valores) return

    setPedido({
      cliente: String(valores.cliente ?? ""),
      status: String(valores.status ?? ""),
      produto: String(valores.produto ?? ""),
      quantidade: Number(valores.quantidade ?? 1),
    })
  }

  function limpar() {
    formRef.current?.resetFields()
    setPedido(null)
  }

  return (
    <Space orientation="vertical" size="large" style={{ width: "100%" }}>
      <PageTitle
        title="Hook useRef"
        subtitle="Exemplo de formulario nao-controlado com leitura dos dados apenas no submit."
      />

      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} lg={14} xl={12}>
          <Card title="Pedido com useRef">
            <Form
              ref={formRef}
              layout="vertical"
              initialValues={{
                cliente: "Maria",
                status: "aberto",
                quantidade: 1,
              }}
              onFinish={salvar}
            >
              <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
                <Form.Item<Pedido> label="Cliente" name="cliente">
                  <Input placeholder="Nome do cliente" />
                </Form.Item>

                <Form.Item<Pedido> label="Status" name="status">
                  <Select options={statusOptions} />
                </Form.Item>

                <Form.Item<Pedido> label="Produto" name="produto">
                  <Select
                    placeholder="Selecione um produto"
                    options={productOptions}
                  />
                </Form.Item>

                <Form.Item<Pedido> label="Quantidade" name="quantidade">
                  <InputNumber mode="spinner" min={1} style={{ width: "100%" }} />
                </Form.Item>

                <Space wrap>
                  <Button type="primary" htmlType="submit" icon={<Save size={16} />}>
                    Salvar
                  </Button>
                  <Button onClick={limpar} icon={<RefreshCcw size={16} />}>
                    Limpar
                  </Button>
                </Space>
              </Space>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={10} xl={8}>
          <Card title="Resultado capturado">
            <Space orientation="vertical" size="small" style={{ width: "100%" }}>
              <Paragraph type="secondary" style={{ marginBottom: 0 }}>
                Cada campo usa <Text code>Form.Item name="..."</Text> e a ref aponta
                para a instancia do formulario do Ant Design. No submit, os dados sao
                lidos com <Text code>formRef.current?.getFieldsValue()</Text>.
              </Paragraph>

              {pedido ? (
                <>
                  <Text>Cliente: {pedido.cliente}</Text>
                  <Text>Status: {pedido.status}</Text>
                  <Text>Produto: {pedido.produto || "Nao selecionado"}</Text>
                  <Text>Quantidade: {pedido.quantidade}</Text>
                </>
              ) : (
                <Text type="secondary">
                  Preencha o formulario e clique em salvar para montar o objeto com{" "}
                  <Text code>getFieldsValue()</Text>.
                </Text>
              )}
            </Space>
          </Card>
        </Col>
      </Row>
    </Space>
  )
}
