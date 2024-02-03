import React from 'react'
import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../Assets/KidneyLogo_mobile.png'
import user from '../Assets/user-kidney.png'
import { Link } from 'react-router-dom'
import Service from './Service'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Global from '../Assets/global.png'

const Navbars = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

   useEffect (() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 600);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }) 

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container >
        <Navbar.Brand href="/" className='navbar-brand' >
            <img class ="navbar-logo" src={logo} alt=''/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler p-0 border-0 ml-auto mr-3  nav-list-con" />
        <Navbar.Collapse id="basic-navbar-nav" className={isMobile ? 'none' : 'nav-right'}>
          <Nav className="navbar-nav ml-auto px-4 my-2 nav-left " >
                    <li>
                        <Nav.Link href="/Home">Home</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href="/Service">Service</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href="/DashLast">Dashboard</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href="/AboutUs">About us</Nav.Link>
                    </li>
                <li>
                    <a className= "mx-3" href="/">
                        <img style={{width: "40px", height: "40px"}} src={user} alt=''/> 
                    </a>
                </li>
                <li>
                    <a className= "mx-3" href="/">
                        <img style={{width: "40px", height: "40px"}} src={Global} alt=''/> 
                    </a>
                </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* <div className='nav-container'>
        <div className='nav-left'>
            <img src={logo} alt=''/>
            <span>KidneyLifePlus+</span>

        </div>
        <div className='nav-right'>
            <div className='nav-lists'> 
                <ul style={{listStyleType:'none'}}>
                    <li>
                        <Link to='/Home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Service'>Service</Link>
                    </li>
                    <li>Dashboard</li>
                    <li>About us</li>
                    <img src={user} alt=''/>
                </ul>
                
            </div>

        </div>
    </div> */}
    
    </>
  )
}

export default Navbars;