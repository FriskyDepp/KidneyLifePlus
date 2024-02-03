import React from 'react'
import './Home.css'
import KidneyImage from '../Assets/home-image.png'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'
import HomeLogo from '../Assets/logo-home (2).png'
import Image from 'react-bootstrap/Image'
import HomeBG from '../Assets/home-bg.png'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import SignUp from './signup'
import FirstBG from '../Assets/FirstBG.png'

const Home = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/Signin');
  }

  const {t, i18n} = useTranslation();
  return (
    <div className='Home-container'>
       <Container>
        <Row>
          <Col lg={6}>
          <center><img class="img-fluid" src={HomeLogo} /></center>
            <div className='home-left'>
              <span>KidneyLifePlus+</span>
              <span>{t('KLP_Platform1')}</span>
              <span>{t('KLP_Platform2')}</span>
              <Row>
                <Col>
                  <Link to="/Signup">
                    <button class='regis-button'>{t('SignUp')}</button>
                  </Link> 
                </Col>
                <Col>
                  <Link to="/login"><button className='login-button'>{t('LogIn')}</button></Link>
                  
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className='Image'>
              <img className='BG' src={FirstBG}/>
            </div>
          </Col>

        </Row>
       </Container>
    </div>
  )
}

export default Home;