import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCir from '../Assets/risk-cir.png'
import './NewDash.css'
import History from '../Assets/his.png'

const NewDash = () => {
  return (
    <Container>
        <h1 className='topic-dash'>DASHBOARD</h1>
        <Row className='upper-con'>
            <Col className='risk-con'>
                <p>คุณมีความเสี่ยงเป็นโรคไตเรื้อรังโดยภาพรวม</p>
                <img className='new-risk' src={NewCir}/>
            </Col>
            <Col className='his-con'>
                <p>ประวัติการใช้งาน</p>
                <Row className='his-row'>
                    <Col>
                        <img src={History}/>
                    </Col>
                    
                </Row>
            </Col>
        </Row>
        <Row className='lower-con'>
            <Row className='sug-con'>
                <Col className='sug-title'>
                    <p>คำแนะนำสำหรับระยะที่คุณมีความเสี่ยง</p>
                    <Col className='3-risk'>
                         <h1>ระยะที่ 3</h1>
                    </Col>
                    <Col className='sug-desc'>
                        <p>ไตเรื้อรังระยะที่ 3 : โรคไตเรื้อรังระยะปานกลาง ซึ่งไตจะทำงานได้ 30 – 60%</p>
                        <p>การปรับพฤติกรรม : ผู้ป่วยต้องจำกัดอาหารประเภทโปรตีน</p>
                    </Col>
                </Col>
                

            </Row>
            <Row className='button-con'>
                <Col className='butt-help'>
                    <Col>
                        <button>ค้นหาโรงพยาบาลใกล้เคียง</button>
                    </Col>
                    <Col>
                        <button>ดูตารางนัดหมายแพทย์</button>
                    </Col>
                </Col>
            </Row>
            
        </Row>
    </Container>
  )
}

export default NewDash