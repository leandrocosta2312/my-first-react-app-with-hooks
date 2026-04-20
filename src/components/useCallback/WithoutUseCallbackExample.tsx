import { Button, Card, Divider, Space, Typography } from "antd"
import { useState } from "react"
import ActionButton from "./ActionButton"

const { Paragraph, Text } = Typography

export default function WithoutUseCallbackExample() {
  const [count, setCount] = useState(0)
  const [otherCount, setOtherCount] = useState(0)

  const handleIncrement = () => {
    setCount((current) => current + 1)
  }

  return (
    <Card title="Sem useCallback" style={{ height: "100%" }}>
      <Space orientation="vertical" size="large" style={{ width: "100%" }}>
        <Paragraph type="secondary" style={{ marginBottom: 0 }}>
          Aqui a funcao <Text code>handleIncrement</Text> e criada novamente toda vez
          que o pai renderiza. Mesmo com <Text code>memo</Text>, o filho renderiza de
          novo porque recebeu uma nova referencia de funcao.
        </Paragraph>

        <ActionButton
          label="Filho memoizado recebendo funcao nova"
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
