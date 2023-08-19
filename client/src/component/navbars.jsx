import {React, useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css'
import FolderImage from "./img/folderimg"
import ModalLogin from './auth/ModalLogin'
import ModalRegister from './auth/ModalRegister'
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Navbars() {
  const [state, dispatch] = useContext(UserContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  let navigate = useNavigate();

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

  const logout = () => {
    Swal.fire({
      title: 'Apakah Anda akan Logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: 'LOGOUT'
        });
        Swal.fire('Berhasil Logout!').then(() => {
          navigate('/');
        });
      }
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        {state.user.role === 'admin' ? ( 
          <Navbar.Brand><img src={FolderImage.logoKalbe} alt="icon" className='logoNavbar' onClick={() => navigate("/admin" )}/></Navbar.Brand>
        ):(
          <Navbar.Brand><img src={FolderImage.logoKalbe} alt="icon" className='logoNavbar' onClick={() => navigate("/" )}/></Navbar.Brand>
        )}
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>

          {state.isLogin ? (
            <Nav>
              {state.user.role === "admin" ? (
                <>
                  <div className='fullNameLogin' onClick={() => navigate("/penjualan")}>admin </div>
                  <div className='logOut' onClick={() => logout()}>logout</div>
                </>
              ) : (
                <>
                  <div className='fullNameLogin' onClick={() => navigate("/profile")}>
                    {state.user.customerName}
                  </div>
                  <div className='logOut' onClick={() => logout()}>logout</div>
                </>
              )}
            </Nav>
          ) : (
            <Nav>
              <div className='login' onClick={handleOpenLogin}>Login</div>
              <div className='register' onClick={handleOpenRegister}>Register</div>
            </Nav>
          )}


        </Navbar.Collapse>
      </Container>

      <ModalLogin show={showLogin} onHide={()=> setShowLogin(false)} hereRegister={hereRegister} />
      <ModalRegister show={showRegister} onHide={()=> setShowRegister(false)} hereLogin={hereLogin}/>

      
    </Navbar>
  );
}

export default Navbars;