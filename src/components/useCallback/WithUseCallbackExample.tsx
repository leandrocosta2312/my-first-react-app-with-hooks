import { Button, Card, Divider, Space, Typography } from "antd"
import { useCallback, useState } from "react"
import ActionButton from "./ActionButton"

const { Paragraph, Text } = Typography

export default function WithUseCallbackExample() {
  const [count, setCount] = useState(0)
  const [otherCount, setOtherCount] = useState(0)

  const handleIncrement = useCallback(() => {
    setCount((current) => current + 1)
  }, [])

  return (
    <Card title="Com useCallback" style={{ height: "100%" }}>
      <Space orientation="vertical" size="large" style={{ width: "100%" }}>
        <Paragraph type="secondary" style={{ marginBottom: 0 }}>
          Aqui o <Text code>useCallback</Text> guarda a mesma referencia da funcao
          entre as renderizacoes. Quando o pai renderiza por causa do outro contador,
          o filho memoizado nao precisa renderizar de novo.
        </Paragraph>

        <ActionButton
          label="Filho memoizado recebendo funcao estavel"
          onIncrement={handleIncrement}
        />

        <Divider style={{ margin: 0 }} />

        <Text>Contador principal: {count}</Text>
        <Text>Outro contador: {otherCount}</Text>

        <Button onClick={() => setOtherCount((current) => current + 1)} block>
          Incrementar outro contador
        </Button>
      </Space>
    </Card>
  )
}
