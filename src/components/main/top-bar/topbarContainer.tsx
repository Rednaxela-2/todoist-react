import React, { useContext, useState } from 'react'
import './styles/topbarContainer.scss'
import { Col, Row } from 'antd'
import { MenuOutlined } from '@ant-design/icons'



interface PropsType {
  menuControl: Function
}


const TopbarContainer : React.FC<PropsType> = ({menuControl}) => {
  
  
 
  return (
      <Row className="wrapper-topbar">
        <Col className="pane-left" span={5}>
          <MenuOutlined onClick={()=>{menuControl()}} className="icon-menu"/>
        </Col>
        <Col span={19}>

        </Col>
      </Row>
  )
}

export default TopbarContainer