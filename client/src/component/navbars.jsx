import {React, useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css'
import FolderImage from "./img/folderimg"
import ModalLogin from './auth/ModalLogin'
import ModalRegister from './auth/ModalRegister'

function Navbars() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleOpenLogin = () => setShowLogin(true);
  const handleOpenRegister = () => setShowRegister(true);

  const hereLogin = (e) => {
    e.preventDefault();
    setShowLogin(true);
    setShowRegister(false);
  }

  const hereRegister = (e) => {
    e.preventDefault();
    setShowLogin(false)
    setShowRegister(true)
  }
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand><img src={FolderImage.logoKalbe} alt="icon" className='logoNavbar'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>

          <Nav>
            <div className='login' onClick={handleOpenLogin}>Login</div>
            <div className='register' onClick={handleOpenRegister}>Register</div>
          </Nav>

        </Navbar.Collapse>
      </Container>

      <ModalLogin show={showLogin} onHide={()=> setShowLogin(false)} hereRegister={hereRegister} />
      <ModalRegister show={showRegister} onHide={()=> setShowRegister(false)} hereLogin={hereLogin}/>

      
    </Navbar>
  );
}

export default Navbars;