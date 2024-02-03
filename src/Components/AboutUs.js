import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutLogo from '../Assets/aboutus_logo.png'
import './AboutUs.css'
import Team from '../Assets/ourteam.png'
import Image from 'react-bootstrap/Image';

const AboutUs = () => {
  return (
    <Container fluid>

      <Row className='present-team'>
        <Col>
          <h1>KidneyLifePlus+</h1>
          <p>KidneyLifePlus+ เป็นแพลตฟอร์มคัดกรองโรคไตเรื้อรัง</p>
          <p>จากการตรวจด้วยเรตินาในดวงตา โดยมีการใช้ปัญญาประดิษฐ์</p>
          <p>ในการประมวลผลรูปเรตินา เพื่อให้สามารถคัดกรองโรคไตเรื้อรัง</p>
          <p>ได้อย่างรวดเร็ว และเข้ารักษาได้อย่างทันท่วงที</p>
        </Col>
        <Col>
          <img style={{width: "50%"}} src={AboutLogo} />
        </Col>
      </Row>

      <Row className='meet-team'>
        <Col>
          <Image className='team-pic' src={Team} rounded/>
        </Col>
        <Col className='team-desc'>
          <h1>MEET OUR TEAM</h1>
          <p>KidneyLifePlus+ พวกเรามารวมตัวกันเพื่อมุ่งที่จแก้ไขปัญหาเดียวกัน</p>
          <p>ที่พวกเราต่างเล็งเห็นว่า เป็นปัญหาเรื้อรังและต่อเนื่องมาอย่างยาวนาน</p>
          <p>พวกเราหวังว่าเครื่องมือคัดกรองโรคไตเรื้อรังจากการตรวจเรตินาในดวงตา</p>
          <p>จะสามารถช่วยเหลือผู้คนในสังคม ให้รู้ทันโรคไตและเข้ารักษาได้อย่างทันท่วงที</p>
          <h1>"รู้ทัน รู้เร็ว รู้ไว ป้องกันโรคไต เพื่อชีวิตที่มั่นคง"</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs