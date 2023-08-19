import { Modal, Form} from "react-bootstrap";

function ModalNewProduct({show, onHide}) {

    const handleCloseModal = () => {
        onHide();
    };
    return(
        <Modal show={show} onHide={handleCloseModal}>
        <Modal.Body className='modalPlusProductBody'>
            <div className='backgroundModalPlusProduct'>
                <Modal.Title className='modalPlusProductTitle'>New Product</Modal.Title>
                <Form className='modalPlusProductForm' >
                    <Form.Group className="mb-3" >
                    <Form.Control className='modalPlusProductControl' name="ProductName" type="text" placeholder="Product Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control className='modalPlusProductControl' name="Quantity"  type="text" placeholder="Quantity" required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control className='modalPlusProductControl' name="Price"  type="text" placeholder="Price" required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control className='modalPlusProductControl' name="FotoProduct"  type="text" placeholder="Foto Product" required/>
                    </Form.Group>

                    <button className='modalPlusProductButton' type="submit">PlusProduct</button>

                </Form>
            </div>
        </Modal.Body>
        </Modal>
    )
}

export default ModalNewProduct