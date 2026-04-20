import { Button, Card, Divider, Space, Typography } from "antd"
import { useState } from "react"
import UserLoader from "./UserLoader"

const { Paragraph, Text } = Typography

export default function WithoutUseCallbackEffectExample() {
  const [otherCount, setOtherCount] = useState(0)
  const [usersLoaded, setUsersLoaded] = useState(0)

  const loadUsers = () => {
    setUsersLoaded((current) => current + 1)
  }

  return (
    <Card title="Sem useCallback no useEffect" style={{ height: "100%" }}>
      <Space orientation="vertical" size="large" style={{ width: "100%" }}>
        <Paragraph type="secondary" style={{ marginBottom: 0 }}>
          O pai recria a funcao <Text code>loadUsers</Text> em toda renderizacao.
          Como o filho usa essa funcao em um <Text code>useEffect</Text>, o efeito
          tambem executa de novo sem necessidade.
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
