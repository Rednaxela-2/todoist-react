import  TopbarContainer from './components/main/top-bar/topbarContainer'
import  LeftSideMenuContainer from './components/main/lefe-side-menu/leftSideMenuContainer'
import { Row, Col} from 'antd'
import './App.scss'

function App() {
  return (
    <>
      <Row>
        <TopbarContainer></TopbarContainer>
      </Row>

      <Row>
        <Col className="panel-left" span={5}>
          <LeftSideMenuContainer></LeftSideMenuContainer>
        </Col>

        <Col className="panel-right" span={19}>

        </Col>
      </Row>
    </>
  );
}

export default App;
