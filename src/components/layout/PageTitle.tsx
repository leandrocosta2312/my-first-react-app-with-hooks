import type { ReactNode } from "react"
import { Typography } from "antd"

const { Title, Text } = Typography

type PageTitleProps = {
  title: ReactNode
  subtitle?: ReactNode
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div>
      <Title level={2} style={{ marginBottom: subtitle ? 4 : 24 }}>
        {title}
      </Title>
      {subtitle ? (
        <Text type="secondary" style={{ display: "block", marginBottom: 24 }}>
          {subtitle}
        </Text>
      ) : null}
    </div>
  )
}

export default PageTitle
