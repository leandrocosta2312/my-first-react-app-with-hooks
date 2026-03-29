import PageTitle from "@/components/layout/PageTitle"
import type { InputNumberProps } from "antd"
import { Card, Divider, InputNumber, Row, Col, Space, Typography } from "antd"
import { useEffect, useState } from "react"

const { Text } = Typography

export default function UseEffectPage() {
  function calcFactorial(n: number): number {
    if (n <= 1) return 1
    return n * calcFactorial(n - 1)
  }

  const [number, setNumber] = useState(0)
  const [factorial, setFactorial] = useState(0)

  useEffect(() => {
    const result = calcFactorial(number)
    setFactorial(result)
  }, [number])

  const onChange: InputNumberProps["onChange"] = (value) => {
    const n = value === null || value === undefined ? 0 : Number(value)
    setNumber(Number.isFinite(n) ? n : 0)
  }

  return (
    <Space orientation="vertical" size="large" style={{ width: "100%" }}>
      <PageTitle
        title="Hook useEffect"
        subtitle="Exemplo a ser implementado em aula."
      />
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} md={12} xl={10}>
          <Card title="Example with useEffect" style={{ minHeight: 280 }}>
            <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
              <InputNumber
                mode="spinner"
                min={0}
                value={number}
                onChange={onChange}
                style={{ width: 150 }}
              />
              <Divider />
              <Text>
                Factorial of {number} is: {factorial}
              </Text>
            </Space>
          </Card>
        </Col>
      </Row>
    </Space>
  )
}
