import PageTitle from "@/components/layout/PageTitle"

export default function Home() {
  return (
    <div className="space-y-4">
      <PageTitle
        title="Módulo Hooks"
        subtitle="Hooks são uma forma moderna de usar estado e outros recursos do React em componentes funcionais."
      />
      <p className="text-sm text-muted-foreground">
        Use o menu lateral para navegar entre os exemplos de cada hook.
      </p>
    </div>
  )
}

