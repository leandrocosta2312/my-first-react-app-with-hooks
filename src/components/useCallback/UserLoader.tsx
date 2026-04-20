import { Button, Card, Space, Tag, Typography } from "antd"
import { memo, useEffect, useRef } from "react"

const { Paragraph, Text } = Typography

type UserLoaderProps = {
  label: string
  onLoadUsers: () => void
}

const UserLoader = memo(function UserLoader({
  label,
  onLoadUsers,
}: UserLoaderProps) {
  const renderCount = useRef(0)
  const renderCountRef = useRef<HTMLSpanElement | null>(null)
  const callbackChanges = useRef(0)
  const callbackChangesRef = useRef<HTMLSpanElement | null>(null)
  const effectRuns = useRef(0)
  const effectRunsRef = useRef<HTMLSpanElement | null>(null)

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
  }, [onLoadUsers])

  useEffect(() => {
    effectRuns.current += 1

    if (effectRunsRef.current) {
      effectRunsRef.current.textContent = String(effectRuns.current)
    }
  }, [onLoadUsers])

  return (
    <Card title={label} size="small">
      <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
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

        <Text>
          Execucoes do <Text code>useEffect</Text>:{" "}
          <Tag color="geekblue">
            <span ref={effectRunsRef}>0</span>
          </Tag>
        </Text>

        <Paragraph type="secondary" style={{ marginBottom: 0 }}>
          Imagine que este filho e um componente de busca ou um hook customizado que
          depende da funcao <Text code>onLoadUsers</Text>. Se essa funcao muda de
          referencia, o <Text code>useEffect</Text> entende que a dependencia mudou e
          executa de novo.
        </Paragraph>

        <Button onClick={onLoadUsers} block>
          Carregar usuarios
        </Button>
      </Space>
    </Card>
  )
})

export default UserLoader
