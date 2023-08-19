import { React} from 'react';
import { Modal, Form } from "react-bootstrap";

function ModalRegister({show, onHide, hereLogin}) {

    const handleCloseModal = () => {
        onHide();
    };
    return (
        <Modal show={show} onHide={handleCloseModal} >
            <Modal.Body className='modalRegisterBody'>
                <div className='backgroundModalLogin'>
                    <Modal.Title className='modalRegisterTitle' >Register</Modal.Title>
                    <Form style={{ width: '416px', margin:'auto'}}>
                        <Form.Group className="mb-3" >
                            <Form.Control className='modalRegisterControl' name="email" type="email" placeholder="Email"  required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control className='modalRegisterControl' name="password" type="password" placeholder="password"  required/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Control className='modalRegisterControl'  name="fullName" type="text" placeholder="Customer Name"  required/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Control className='modalRegisterControl'  name="customerAddres" type="text" placeholder="Customer Addres"  required/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Gender:</Form.Label>
                            <div className="mb-3">
                                <Form.Check inline label="Pria" name="gender" type="radio" value="male" required />
                                <Form.Check inline label="Wanita" name="gender" type="radio" value="female" required/>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Tanggal Lahir</Form.Label>
                            <Form.Control  name="birthdate" type="date" required/>
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