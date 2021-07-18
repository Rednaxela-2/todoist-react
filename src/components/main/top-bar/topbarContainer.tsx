import React, { useState } from 'react'
import './styles/topbarContainer.scss'
import { Col, Row } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

const TopbarContainer : React.FC = (props) => {
  
  const [ isCollapsed, setIsCollapsed ] = useState(false)

  return (
      <Row className="wrapper-topbar">
        <Col className="pane-left" span={5}>
          <MenuOutlined onClick={() => { setIsCollapsed(!isCollapsed) }} className="icon-menu"/>
        </Col>
        <Col span={19}>
          
        </Col>
      </Row>
  )
}

export default TopbarContainer