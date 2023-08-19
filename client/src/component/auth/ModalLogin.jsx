import React from 'react';
import { Modal, Form} from "react-bootstrap";
import {useContext, useState } from 'react';
import { useMutation } from 'react-query';
import {API, setAuthToken } from '../../config/Api';
import { UserContext } from '../../context/UserContext';
import { Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function ModalLogin({show, onHide, hereRegister}) {
    let navigate = useNavigate();
    const [state, dispatch] = useContext(UserContext);
    const [message, setMessage] = useState(null);
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: '',
      });

      const handleChange = (e) => {
        setFormLogin({
          ...formLogin,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = useMutation(async (e) => {
        try {
          e.preventDefault();
          setAuthToken(localStorage.token);
          const config = {
            headers: {
              'Content-type': 'multipart/form-data',
            },
          };
    
          const formData = new FormData();
          formData.set('email', formLogin.email);
          formData.set('password', formLogin.password);
    
          const response = await API.post('/login', formLogin, config);
    
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: response.data.data,
          });

          if (response.data.data.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/');
          }
       
          onHide()
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Berhasil Login',
            showConfirmButton: false,
            timer: 3000
          })
        } catch (error) {
          const alert = (
            <Alert variant="danger" className="py-1">
              Login failed
            </Alert>
          );
          setMessage(alert);
          console.log("login failed : ", error);
        }
      });

      const handleCloseModal = () => {
        setMessage(false);
        onHide();
    };

    return(
        <Modal show={show} onHide={handleCloseModal} onSubmit={(e) => handleSubmit.mutate(e)}>
        <Modal.Body className='modalLoginBody'>
            <div className='backgroundModalLogin'>
                <Modal.Title className='modalLoginTitle'>Login</Modal.Title>
                {message && message}
                <Form className='modalLoginForm' >
                    <Form.Group className="mb-3" >
                    <Form.Control className='modalLoginControl' name="email" onChange={handleChange} type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Control className='modalLoginControl' name="password"  onChange={handleChange} type="password" placeholder="password" />
                    </Form.Group>

                    <button className='modalLoginButton' type="submit">Login</button>

                    <div style={{textAlign:'center', fontWeight:'500'}}>Don't have an account ? klik
                    <button className='modalLoginButtonHere' onClick={hereRegister}>Here</button>
                    </div>
                </Form>
            </div>
        </Modal.Body>
        </Modal>
    )
}

export default ModalLogin