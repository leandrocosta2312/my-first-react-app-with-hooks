import { ReactNode } from "react"

type PageTitleProps = {
  title: ReactNode
  subtitle?: ReactNode
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <header className="mb-6 space-y-1">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      {subtitle ? (
        <p className="max-w-2xl text-sm text-muted-foreground">{subtitle}</p>
      ) : null}
    </header>
  )
}

export default PageTitle

