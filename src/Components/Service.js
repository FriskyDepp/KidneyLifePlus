import React from 'react'
import './Service.css'
import { Button, Col, Row } from 'react-bootstrap'
import Line from '../Assets/Line 8.png'
import Scan from '../Assets/scan-service.png'
import UploadService from '../Assets/upload-service.png'
import Result from '../Assets/result-service.png'
import { useNavigate } from 'react-router-dom'
import ScanButton from '../Assets/scan-button.png'
import UploadButton from '../Assets/upload-button.png'
import ResultButton from '../Assets/result-button.png'
import { useTranslation } from 'react-i18next'

const Service = () => {

  const navigate = useNavigate();

  const goScan = () => {
    navigate('/ScanTest')
  }

  const goUpload = () => {
    navigate('/Upload')
  }

  const goResult = () => {
    navigate('/Result')
  }

  const goForm = () => {
    navigate('/Form')
  }

  const {t, i18n} = useTranslation();


  return (
    <div className='service-container'>
        <Col>
        <center>
        <Col className='test-con'>
            <span>KidneyLifePlus+</span>
            <center><img src={Line}/></center>
            <span>{t('Screen')}</span>
            <center>
              <button onClick={goForm} className='test-button'>{t('Test')}</button>
            </center>

          </Col>
          <Col className='menu-con'>
            <Row className='menu'>
              <Col>
                <img src={Scan}/>
              </Col>
              <Col>
                <img src={UploadService}/>
              </Col>
              <Col>
                <img src={Result}/>
              </Col>

            </Row>
            <Row>
              <Col className='button-service'>
                <button src className='scan-button'>
                  <img onClick={goScan} src={ScanButton} />
                </button>
              </Col>
              <Col>
                <button src className='upload-button'>
                  <img onClick={goUpload} src={UploadButton} />
                </button>
              </Col>
              <Col>
                <button src className='result-button'>
                  <img onClick={goResult} src={ResultButton} />
                </button>
              </Col>
            </Row>
          </Col>

        </center>
          
        </Col>
    </div>


  )
}

export default Service;