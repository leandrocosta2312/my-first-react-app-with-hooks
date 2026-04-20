import { Button, Card, Divider, Space, Typography } from "antd"
import { useCallback, useState } from "react"
import UserLoader from "./UserLoader"

const { Paragraph, Text } = Typography

export default function WithUseCallbackEffectExample() {
  const [otherCount, setOtherCount] = useState(0)
  const [usersLoaded, setUsersLoaded] = useState(0)

  const loadUsers = useCallback(() => {
    setUsersLoaded((current) => current + 1)
  }, [])

  return (
    <Card title="Com useCallback no useEffect" style={{ height: "100%" }}>
      <Space orientation="vertical" size="large" style={{ width: "100%" }}>
        <Paragraph type="secondary" style={{ marginBottom: 0 }}>
          Aqui o callback de busca fica estavel. Quando o pai renderiza por outro
          motivo, a dependencia do <Text code>useEffect</Text> continua igual e o
          efeito nao dispara de novo.
        </Paragraph>

        <UserLoader
          label="Filho com useEffect dependente da funcao"
          onLoadUsers={loadUsers}
        />

        <Divider style={{ margin: 0 }} />

        <Text>Chamadas de carregamento: {usersLoaded}</Text>
        <Text>Outro contador: {otherCount}</Text>

        <Button onClick={() => setOtherCount((current) => current + 1)} block>
          Renderizar pai sem mudar dados da busca
        </Button>
      </Space>
    </Card>
  )
}
