import { Button, Card, Col, Row, Space, Typography } from "antd"
import { Minus, Plus, RefreshCcw } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useReducer } from "react"

const { Text, Paragraph } = Typography

type CounterState = {
  count: number
}

type CounterAction =
  | { type: "increment"; value: number }
  | { type: "decrement"; value: number }
  | { type: "reset" }

type ActionButton = {
  label: string
  icon: LucideIcon
  action: CounterAction
  type?: "primary" | "default"
}

const actionButtons: ActionButton[] = [
  { label: "+1", icon: Plus, action: { type: "increment", value: 1 }, type: "primary" },
  { label: "-1", icon: Minus, action: { type: "decrement", value: 1 } },
  { label: "+10", icon: Plus, action: { type: "increment", value: 10 }, type: "primary" },
  { label: "-10", icon: Minus, action: { type: "decrement", value: 10 } },
  { label: "Reset", icon: RefreshCcw, action: { type: "reset" } },
]

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value }
    case "decrement":
      return { count: state.count - action.value }
    case "reset":
      return { count: 0 }
    default:
      return state
  }
}

export default function CounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  return (
    <Row gutter={[24, 24]} justify="center">
      <Col xs={24} md={12} xl={10}>
        <Card title="Contador com useReducer" style={{ minHeight: 280 }}>
          <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
            <Text>Valor atual: {state.count}</Text>

            {actionButtons.map((button) => {
              const Icon = button.icon
              return (
                <Button
                  key={button.label}
                  type={button.type ?? "default"}
                  onClick={() => dispatch(button.action)}
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
        <Card title="Como o reducer pensa" style={{ minHeight: 280 }}>
          <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
            <Paragraph type="secondary" style={{ marginBottom: 0 }}>
              O componente nao altera o estado diretamente. Ele apenas dispara uma{" "}
              <Text code>action</Text> com <Text code>dispatch(...)</Text>.
            </Paragraph>

            <Paragraph style={{ marginBottom: 0 }}>
              Exemplo:
              <br />
              <Text code>dispatch({"{ type: 'increment', value: 1 }"})</Text>
            </Paragraph>

            <Paragraph type="secondary" style={{ marginBottom: 0 }}>
              O <Text code>counterReducer</Text> recebe o estado atual e decide qual
              sera o proximo estado com base no <Text code>type</Text> da action.
            </Paragraph>
          </Space>
        </Card>
      </Col>
    </Row>
  )
}
