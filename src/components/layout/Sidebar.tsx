import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"

const links = [
  { to: "/", label: "Início" },
  { to: "/use-state", label: "useState()" },
  { to: "/use-effect", label: "useEffect()" },
  { to: "/use-ref", label: "useRef()" },
  { to: "/use-callback", label: "useCallback()" },
  { to: "/use-memo", label: "useMemo()" },
  { to: "/use-context", label: "useContext()" },
  { to: "/use-reducer", label: "useReducer()" },
  { to: "/use-custom", label: "useMyHook()" },
]

export function Sidebar() {
  return (
    <aside className="border-r bg-muted/40">
      <nav className="flex h-full w-64 flex-col gap-2 p-4 text-sm">
        <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Módulo Hooks
        </div>
        <ul className="flex flex-1 flex-col gap-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  )
                }
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

