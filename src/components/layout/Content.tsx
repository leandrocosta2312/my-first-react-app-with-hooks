import { Routes, Route } from "react-router-dom"

import Home from "@/views/examples/Home"
import UseStatePage from "@/views/examples/UseState"
import UseEffectPage from "@/views/examples/UseEffect"
import UseRefPage from "@/views/examples/UseRef"
import UseCallbackPage from "@/views/examples/UseCallback"
import UseMemoPage from "@/views/examples/UseMemo"
import UseContextPage from "@/views/examples/UseContext"
import UseReducerPage from "@/views/examples/UseReducer"
import UseCustomPage from "@/views/examples/UseCustom"
import NotFound from "@/views/examples/NotFound"

export function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/use-state" element={<UseStatePage />} />
      <Route path="/use-effect" element={<UseEffectPage />} />
      <Route path="/use-ref" element={<UseRefPage />} />
      <Route path="/use-callback" element={<UseCallbackPage />} />
      <Route path="/use-memo" element={<UseMemoPage />} />
      <Route path="/use-context" element={<UseContextPage />} />
      <Route path="/use-reducer" element={<UseReducerPage />} />
      <Route path="/use-custom" element={<UseCustomPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Content
