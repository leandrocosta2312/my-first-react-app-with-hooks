import PageTitle from "@/components/layout/PageTitle"
import {
  IntermediateLayout,
  OrderItems,
  OrderProvider,
} from "@/components/useContext"
import { Card, Space, Typography } from "antd"

const { Paragraph, Text, Title } = Typography

export default function UseContextPage() {
  return (
    <Space orientation="vertical" size="large" style={{ width: "100%" }}>
      <PageTitle
        title="Hook useContext"
        subtitle="Exemplo de estado compartilhado sem prop drilling."
      />

      <Card>
        <Paragraph style={{ marginBottom: 0 }}>
          O <Text code>useContext</Text> ajuda quando varios componentes precisam ler
          ou alterar o mesmo dado. Em vez de passar props por varios niveis, o estado
          fica disponivel para qualquer componente dentro do provider.
        </Paragraph>
      </Card>

      <OrderProvider>
        <Card title="Fluxo com contexto compartilhado">
          <Space orientation="vertical" size="large" style={{ width: "100%" }}>
            <Paragraph type="secondary" style={{ marginBottom: 0 }}>
              Neste exemplo, o pedido fica dentro do <Text code>OrderProvider</Text>.
              O catalogo adiciona produtos, o resumo mostra a quantidade total e a
              lista abaixo exibe os itens. Nenhum deles precisa receber props do
              componente pai.
            </Paragraph>

            <IntermediateLayout />

            <OrderItems />

            <Card size="small">
              <Title level={5} style={{ marginTop: 0 }}>
                O que observar
              </Title>
              <Space orientation="vertical" size="small" style={{ width: "100%" }}>
                <Text>1. O estado do pedido fica centralizado no provider.</Text>
                <Text>2. Componentes distantes acessam o mesmo dado com contexto.</Text>
                <Text>3. Isso evita passar props por varios niveis sem necessidade.</Text>
              </Space>
            </Card>
          </Space>
        </Card>
      </OrderProvider>
    </Space>
  )
}
