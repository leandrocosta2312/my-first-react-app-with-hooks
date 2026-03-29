import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ConfigProvider, theme } from "antd"
import "antd/dist/reset.css"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider, useTheme } from "@/components/theme-provider.tsx"

function AntdThemeWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme()
  return (
    <ConfigProvider
      theme={{
        algorithm:
          resolvedTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AntdThemeWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AntdThemeWrapper>
    </ThemeProvider>
  </StrictMode>
)
