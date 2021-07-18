import React, { useState } from 'react'
import { Menu, } from 'antd'
import { MedicineBoxTwoTone, CalendarTwoTone, ClockCircleTwoTone } from '@ant-design/icons'

const LeftSideMenuContainer : React.FC = (props)=> {

  const [ isCollapsed, setIsCollapsed ] = useState(false)

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