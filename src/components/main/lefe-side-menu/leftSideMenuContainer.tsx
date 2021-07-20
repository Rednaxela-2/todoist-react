import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Menu, } from 'antd'
import { MedicineBoxTwoTone, CalendarTwoTone, ClockCircleTwoTone } from '@ant-design/icons'


interface PropsType {
  sendToParent : Function
}

const LeftSideMenuContainer : React.FC<PropsType>  = ({sendToParent})=> {

  const [isCollapsed, setIsCollapsed] = useState(false)
  
  const toggleMenuState = ()=> {
    setIsCollapsed(!isCollapsed)
  }
  sendToParent(toggleMenuState)

  
  // const [isCollapsed, setIsCollapsed ] = useState(false)

  // useImperativeHandle(ref, () => ({
  //   toggleIsColllapsed: ()=> setIsCollapsed(!isCollapsed)
  // }))

  return (
    <Menu inlineCollapsed={isCollapsed} >
      <Menu.Item icon={<MedicineBoxTwoTone />}>
        收件箱
      </Menu.Item>
      <Menu.Item icon={<ClockCircleTwoTone />}>
        今天
      </Menu.Item>
      <Menu.Item icon={<CalendarTwoTone />}>
        预览
      </Menu.Item>
    </Menu>
  )
}



export default LeftSideMenuContainer