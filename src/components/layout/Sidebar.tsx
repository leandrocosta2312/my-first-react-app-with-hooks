import { useNavigate, useLocation } from "react-router-dom"
import { Layout, Menu, Typography } from "antd"

const links = [
  { key: "/", label: "Início" },
  { key: "/use-state", label: "useState()" },
  { key: "/use-effect", label: "useEffect()" },
  { key: "/use-ref", label: "useRef()" },
  { key: "/use-callback", label: "useCallback()" },
  { key: "/use-memo", label: "useMemo()" },
  { key: "/use-context", label: "useContext()" },
  { key: "/use-reducer", label: "useReducer()" },
  { key: "/use-custom", label: "useMyHook()" },
]

export function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Layout.Sider width={256} theme="light">
      <div style={{ padding: "16px 16px 0" }}>
        <Typography.Text
          strong
          style={{ fontSize: 12, textTransform: "uppercase", color: "inherit", opacity: 0.65 }}
        >
          Módulo Hooks
        </Typography.Text>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={links}
        onClick={({ key }: { key: string }) => navigate(key)}
        style={{ borderRight: 0 }}
      />
    </Layout.Sider>
  )
}

export default Sidebar
