import PageTitle from "@/components/layout/PageTitle"
import { Space, Typography } from "antd"

export default function Home() {
  return (
    <Space orientation="vertical" size="middle">
      <PageTitle
        title="Módulo Hooks"
        subtitle="Hooks são uma forma moderna de usar estado e outros recursos do React em componentes funcionais."
      />
      <Typography.Text type="secondary">
        Use o menu lateral para navegar entre os exemplos de cada hook.
      </Typography.Text>
    </Space>
  )
}
