import  TopbarContainer from './components/main/top-bar/topbarContainer'
import  LeftSideMenuContainer from './components/main/lefe-side-menu/leftSideMenuContainer'
import { Row, Col} from 'antd'
import './App.scss'
import React, { SetStateAction, useRef, useState } from 'react'


const App : React.FC = ()=> {

  
  // const leftSideMenuRef = useRef()

  // const toggleIsCollapsed = ()=> {
  //   leftSideMenuRef.current!.toggleIsColllapsed()
  // }
  
  const [toggleMenuState, setToggleMenuState] = useState(Function)

  const sendToParent = (method : Function)=> {
    setToggleMenuState(method)
  }
  

  return (
    <>
      <Row>
        <TopbarContainer menuControl={toggleMenuState} ></TopbarContainer>
      </Row>

      <Row>
        <Col className="panel-left" span={5}>
          <LeftSideMenuContainer sendToParent={sendToParent}></LeftSideMenuContainer>
        </Col>
        
        <Col className="panel-right" span={19}>

        </Col>
      </Row>
    </>
  );
}

export default App;
