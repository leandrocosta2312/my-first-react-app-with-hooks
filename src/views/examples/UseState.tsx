import PageTitle from "@/components/layout/PageTitle"
import { Button, Card, Input, Row, Col, Space, Typography } from "antd"
import { Plus, Minus, RefreshCcw } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useState } from "react"

const { Text } = Typography

export default function UseStatePage() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  function changeCount(delta: number) {
    setCount((current) => current + delta)
  }

  function reset() {
    setCount(0)
  }

  const buttons: {
    label: string
    icon: LucideIcon
    value?: number
    type?: "primary" | "default"
  }[] = [
    { label: "1", value: 1, icon: Plus, type: "primary" },
    { label: "1", value: 1, icon: Minus, type: "default" },
    { label: "100", value: 100, icon: Plus, type: "primary" },
    { label: "100", value: -100, icon: Minus, type: "default" },
    { label: "Reset", icon: RefreshCcw, type: "default" },
  ]

  return (
    <Space orientation="vertical" size="large" style={{ width: "100%" }}>
      <PageTitle
        title="Hook useState"
        subtitle="Exemplo a ser implementado em aula."
      />
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} md={12} xl={10}>
          <Card title="Example with useState" style={{ minHeight: 280 }}>
            <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
              <Text>Value: {count}</Text>
              {buttons.map((button) => {
                const Icon = button.icon
                const handleClick =
                  button.value !== undefined
                    ? () => changeCount(button.value as number)
                    : reset
                return (
                  <Button
                    key={button.label}
                    type={button.type ?? "primary"}
                    onClick={handleClick}
                    icon={<Icon size={16} />}
                    block
                  >
                    {button.label}
                  </Button>
                )
              })}
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12} xl={10}>
          <Card title="Controlled component" style={{ minHeight: 280 }}>
            <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
              <Text type="secondary">
                This is a controlled component, the value is updated when the
                input changes
              </Text>
              <Input
                type="text"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
            </Space>
          </Card>
        </Col>
      </Row>
    </Space>
  )
}
