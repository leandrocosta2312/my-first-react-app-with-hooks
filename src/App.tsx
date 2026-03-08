import Sidebar from "@/components/layout/Sidebar"
import Content from "@/components/layout/Content"

export function App() {
  return (
    <div className="flex min-h-svh bg-background text-foreground">
      <Sidebar />
      <Content />
    </div>
  )
}

export default App
