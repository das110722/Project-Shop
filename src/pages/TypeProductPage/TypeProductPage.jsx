import React from 'react'
import NavbarComponent from '@/components/NavbarComponent/NavbarComponent'
import CardComponent from '@/components/CardComponent/CardComponent'
import { Row, Col } from 'antd'

const TypeProductPage = () => {
  return (
    <Row style={{padding: "0 120px", backgroundColor: "var(--color-gray)", flexWrap: "nowrap", paddingTop: "10px"}}>
        <Col span={6} style={{backgroundColor: "var(--color-white)", marginRight: "10px", borderRadius: "6px", padding: "10px"}}>
            <NavbarComponent/>
        </Col>
        <Col span={18}>
            <CardComponent />
        </Col>
    </Row>
  )
}

export default TypeProductPage