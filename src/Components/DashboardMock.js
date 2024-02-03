import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CircleProgress from '../Assets/circle-pro.png'
import PersentOfRisk from '../Assets/percent.png'
import His1 from '../Assets/history1.png'
import His2 from '../Assets/history2.png'
import His3 from '../Assets/history3.png'
import './DashboardMock.css'
import { useNavigate } from 'react-router-dom'

const DashboardMock = () => {
    const navigate = useNavigate();

    const findHos = () => {
        navigate('/Place')
    }
  return (
    <Container>
        <h1>DASHBOARD</h1>
        <Row className='up-con'>
            <Col className='risk-kn-con'>
                <p>คุณมีความเสี่ยงในการเป็นโรคไตเรื้อรังโดยภาพรวม</p>
                <img src={CircleProgress} />
                <h1>ระยะที่ 3</h1>
            </Col>
            <Col className='suggest-of-risk'>
                <p>คำแนะนำสำหรับระยะที่คุณมีความเสี่ยง</p>
                <h1>ระยะที่ 3</h1>
                <h2>ไตเสื่อมมากขึ้น การทำหน้าที่กรองของเสียลดลง รักษาด้วยการควบคุมอาหาร</h2>
                <h2>ออกกำลังกายตามคำแนะนำของแพทย์ ตรวจโปรตีนในปัสสาวะ</h2>
                <h2>และติดตามอาการอย่างต่อเนื่อง</h2>
            </Col>
        </Row>
        <Row className='down-con'>
            <Col className='risk-percent-container'>
                <p>ความเสี่ยงการเป็นในแต่ละระยะ</p>
                <img src={PersentOfRisk} />
            </Col>
            <Col className='history-container'>
                <p>ประวัติการใช้งาน</p>
                <Row className='list-1'>
                    <Col>
                     <img src={His1} />
                     </Col>
                     <Col>
                        <p>24/09/66</p>
                     </Col>
                </Row>
                <Row className='his-2'>
                    <Col>
                        <img src={His2} />
                    </Col>
                    <Col>
                        <p>01/10/66</p>
                    </Col>
                </Row>
                <Row className='his-3'>
                    <Col>
                        <img src={His3} />
                    </Col>
                    <Col>
                        <p>08/10/66</p>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Col className='find'>
                    <button onClick={findHos} className='find-hos-button'>ค้นหาโรงพยาบาลใกล้เคียง</button>
                </Col>
                <Col className='see'>
                    <button className='see-doc'>ดูตารางนัดหมายแพทย์</button>
                </Col>
                
            </Col>
        </Row>
    </Container>
  )
}

export default DashboardMock