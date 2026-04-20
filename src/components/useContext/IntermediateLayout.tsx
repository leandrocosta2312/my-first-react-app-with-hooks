import { Col, Row } from "antd"
import ProductCatalog from "./ProductCatalog"
import SidebarSummary from "./SidebarSummary"

export default function IntermediateLayout() {
  return (
    <Row gutter={[24, 24]} align="top">
      <Col xs={24} xl={14}>
        <ProductCatalog />
      </Col>

      <Col xs={24} xl={10}>
        <SidebarSummary />
      </Col>
    </Row>
  )
}
