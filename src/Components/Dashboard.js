import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Circle from '../Assets/circle-pro.png'
import Percent from '../Assets/percent.png'
import './Dashboard.css'
import ListGroup from 'react-bootstrap/ListGroup';

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Container className='dashboard-con'>
            <span className='topic-dash'>DASHBOARD</span>
        <Row>
            <Col lg={4}>
            <Card className='risk-con'>
                <Card.Subtitle className="mb-2 text-muted">คุณมีความเสี่ยงเป็นโรคไตเรื้อรังโดยภาพรวม</Card.Subtitle>
                    <center>
                        <Card.Img className='circle-pro' variant='bottom' src={Circle}/>
                    </center>
                <Card.Text>ระยะที่ 3</Card.Text>
            </Card>
            </Col>
            <Col>
                <Card className='suggest'>
                    <Card.Subtitle className="mb-2 text-muted">คุณมีความเสี่ยงเป็นโรคไตเรื้อรังโดยภาพรวม</Card.Subtitle>
                    <Card.Title>ระยะที่ 3</Card.Title>
                    <Card.Text>ไตเรื้อรังระยะที่ 3 : โรคไตเรื้อรังระยะปานกลาง </Card.Text>
                    <Card.Text>ซึ่งไตจะทำงานได้ 30 – 60%</Card.Text>
                    <Card.Text>การปรับพฤติกรรม : ผู้ป่วยต้องจำกัดอาหารประเภทโปรตีน</Card.Text>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card className='percent-con'>
                    <Card.Subtitle className='per-sub'>ความเสี่ยงการเป็นโรคไตในแต่ละระยะ</Card.Subtitle>
                    <Card.Img  variant='bottom' src={Percent}/>
                </Card>
            </Col>
            <Col>
            <Card>
                <Card.Subtitle>ประวัติการใช้งาน</Card.Subtitle>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
            </Col>
        </Row>
    </Container>
    </div>
    
  )
}

export default Dashboard