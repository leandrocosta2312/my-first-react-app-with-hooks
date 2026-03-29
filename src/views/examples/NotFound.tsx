import PageTitle from "@/components/layout/PageTitle"
import { Space, Typography } from "antd"

export default function NotFound() {
  return (
    <Space orientation="vertical" size="middle">
      <PageTitle title="Página não encontrada" />
      <Typography.Text type="secondary">
        Verifique a URL ou use o menu lateral para navegar para uma página
        existente.
      </Typography.Text>
    </Space>
  )
}
