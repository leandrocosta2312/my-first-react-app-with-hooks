import PageTitle from "@/components/layout/PageTitle"
import {
  WithUseCallbackEffectExample,
  WithUseCallbackExample,
  WithoutUseCallbackEffectExample,
  WithoutUseCallbackExample,
} from "@/components/useCallback"
import { Card, Col, Row, Space, Typography } from "antd"

const { Paragraph, Text } = Typography

export default function UseCallbackPage() {
  return (
    <Space orientation="vertical" size="large" style={{ width: "100%" }}>
      <PageTitle
        title="Hook useCallback"
        subtitle="Comparacoes praticas para entender o problema da referencia nova de funcao a cada render."
      />

      <Card>
        <Paragraph style={{ marginBottom: 0 }}>
          No React, a maior utilidade do <Text code>useCallback</Text> aparece quando
          a funcao passada para outro componente ou hook precisa manter a mesma
          referencia entre renderizacoes. Abaixo voce pode comparar o problema e a
          solucao em dois cenarios.
        </Paragraph>
      </Card>

      <Card title="1. Filho memoizado recebendo callback do pai">
        <Paragraph type="secondary" style={{ marginBottom: 24 }}>
          Clique em <Text strong>Incrementar outro contador</Text> nos dois exemplos.
          Sem <Text code>useCallback</Text>, o filho memoizado renderiza de novo porque
          recebeu uma nova funcao. Com <Text code>useCallback</Text>, a funcao continua
          estavel e o filho nao renderiza sem necessidade.
        </Paragraph>

        <Row gutter={[24, 24]} align="stretch">
          <Col xs={24} xl={12}>
            <WithoutUseCallbackExample />
          </Col>

          <Col xs={24} xl={12}>
            <WithUseCallbackExample />
          </Col>
        </Row>
      </Card>

      <Card title="2. useEffect dependendo de uma funcao de busca">
        <Paragraph type="secondary" style={{ marginBottom: 24 }}>
          Este e um caso mais proximo do mundo real. Pense em um componente filho ou
          hook customizado que depende de uma funcao para carregar usuarios da API.
          Sem <Text code>useCallback</Text>, qualquer renderizacao do pai muda a
          referencia da funcao e pode disparar o <Text code>useEffect</Text> de novo.
        </Paragraph>

        <Row gutter={[24, 24]} align="stretch">
          <Col xs={24} xl={12}>
            <WithoutUseCallbackEffectExample />
          </Col>

          <Col xs={24} xl={12}>
            <WithUseCallbackEffectExample />
          </Col>
        </Row>
      </Card>
    </Space>
  )
}
