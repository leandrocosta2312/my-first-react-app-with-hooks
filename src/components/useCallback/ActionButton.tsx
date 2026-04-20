import { Button, Card, Space, Tag, Typography } from "antd"
import { memo, useEffect, useRef } from "react"

const { Paragraph, Text } = Typography

type ActionButtonProps = {
  label: string
  onIncrement: () => void
}

const ActionButton = memo(function ActionButton({
  label,
  onIncrement,
}: ActionButtonProps) {
  const renderCount = useRef(0)
  const renderCountRef = useRef<HTMLSpanElement | null>(null)
  const callbackChanges = useRef(0)
  const callbackChangesRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    renderCount.current += 1

    if (renderCountRef.current) {
      renderCountRef.current.textContent = String(renderCount.current)
    }
  })

  useEffect(() => {
    callbackChanges.current += 1

    if (callbackChangesRef.current) {
      callbackChangesRef.current.textContent = String(callbackChanges.current)
    }
  }, [onIncrement])

  return (
    <Card title={label} size="small">
      <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
        <Text>Este filho usa <Tag color="blue">memo</Tag></Text>

        <Text>
          Renderizacoes do filho:{" "}
          <Tag color="blue">
            <span ref={renderCountRef}>0</span>
          </Tag>
        </Text>

        <Text>
          Mudancas na funcao recebida:{" "}
          <Tag color="cyan">
            <span ref={callbackChangesRef}>0</span>
          </Tag>
        </Text>

        <Paragraph type="secondary" style={{ marginBottom: 0 }}>
          Quando a prop <Text code>onIncrement</Text> muda de referencia, o React
          entende que a prop mudou e o filho memoizado pode renderizar novamente.
        </Paragraph>

        <Button type="primary" onClick={onIncrement} block>
          Incrementar contador principal
        </Button>
      </Space>
    </Card>
  )
})

export default ActionButton
