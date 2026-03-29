import { Layout } from "antd"
import Sidebar from "@/components/layout/Sidebar"
import Content from "@/components/layout/Content"

export function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Layout.Content style={{ padding: 24, overflow: "auto" }}>
          <Content />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default App
