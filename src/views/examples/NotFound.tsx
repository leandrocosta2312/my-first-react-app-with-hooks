import PageTitle from "@/components/layout/PageTitle"

export default function NotFound() {
  return (
    <div className="space-y-2">
      <PageTitle title="Página não encontrada" />
      <p className="text-sm text-muted-foreground">
        Verifique a URL ou use o menu lateral para navegar para uma página
        existente.
      </p>
    </div>
  )
}

