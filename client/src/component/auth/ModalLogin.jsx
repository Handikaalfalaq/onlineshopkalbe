import { Modal, Form} from "react-bootstrap";

function ModalLogin({show, onHide, hereRegister}) {

    const handleCloseModal = () => {
        onHide();
    };
    return(
        <Modal show={show} onHide={handleCloseModal}>
        <Modal.Body className='modalLoginBody'>
            <div className='backgroundModalLogin'>
                <Modal.Title className='modalLoginTitle'>Login</Modal.Title>
                <Form className='modalLoginForm' >
                    <Form.Group className="mb-3" >
                    <Form.Control className='modalLoginControl' name="email" type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Control className='modalLoginControl' name="password"  type="password" placeholder="password" />
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