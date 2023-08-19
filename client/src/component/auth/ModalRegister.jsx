import { React, useState } from 'react';
import { Modal, Form, Alert} from "react-bootstrap";
import { useMutation } from 'react-query';
import {API} from '../../config/Api';
import Swal from 'sweetalert2';

function ModalRegister({show, onHide, hereLogin}) {
    const [message, setMessage] = useState(false);
    const [formRegister, setFormRegister] = useState({
        email: '',
        password: '',
        customerName: '',
      });

    const handleChange = (e) => {
    setFormRegister({
        ...formRegister,
        [e.target.name]: e.target.value,
    });
    };

    const handleSubmit = useMutation(async (e) => {
        try {
          e.preventDefault();
          
          const config = {
            headers: {
              'Content-type': 'multipart/form-data',
            },
          };
    
          const formData = new FormData();
          formData.set('email', formRegister.email);
          formData.set('password', formRegister.password);
          formData.set('customerName', formRegister.customerName);
    
          const response = await API.post('/register', formData, config);
          console.log(response);

          onHide()
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Berhasil Register',
              showConfirmButton: false,
              timer: 3000
            })
        } catch (error) {
          const alert = (
            <Alert variant="danger" className="py-1">
              email sudah terdaftar!
            </Alert>
          );
          setMessage(alert);
          console.log("register failed : ", error);
        }
      });

    const handleCloseModal = () => {
        onHide();
    };
    return (
        <Modal show={show} onHide={handleCloseModal} onSubmit={(e) => handleSubmit.mutate(e)}>
            <Modal.Body className='modalRegisterBody'>
                <div className='backgroundModalLogin'>
                    <Modal.Title className='modalRegisterTitle' >Register</Modal.Title>
                    {message && message}
                    <Form style={{ width: '416px', margin:'auto'}}>
                        <Form.Group className="mb-3" >
                            <Form.Control className='modalRegisterControl' name="email" onChange={handleChange} type="email" placeholder="Email"  required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control className='modalRegisterControl' name="password" onChange={handleChange} type="password" placeholder="password"  required/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Control className='modalRegisterControl'  name="customerName" onChange={handleChange} type="text" placeholder="Customer Name"  required/>
                        </Form.Group>

                        <button className='modalRegisterButton' type="submit">Register</button>

                        <div style={{textAlign:'center', fontWeight:'500'}}>Don't have an account ? klik
                        <button className='modalRegisterButtonHere' onClick={hereLogin}>Here</button>
                        </div>
                        
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalRegister;