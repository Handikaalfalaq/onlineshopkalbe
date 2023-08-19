import { React, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useMutation } from 'react-query';
import { API } from '../../config/Api';
import Swal from 'sweetalert2';

function ModalNewProduct({show, onHide}) {
    const [formProduct, setFormProduct] = useState({
        productCode: '',
        productName: '',
        quantity: '',
        price: '',
        image:'',
      });

      // console.log(formProduct)
    
      const handleChange = (e) => {
        setFormProduct({
          ...formProduct,
          [e.target.name]: e.target.type === 'file' ? e.target.files : e.target.value,
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
          formData.set('productId', formProduct.productId);
          formData.set('productName', formProduct.productName);
          formData.set('quantity', formProduct.quantity);
          formData.set('price', formProduct.price);
    
          if (formProduct.image[0] && formProduct.image[0]) {
            return;
          }
      
          // formData.append('image', formProduct.image[0], formProduct.image[0].name);
      
          Swal.showLoading();
    
          const response = await API.post('/product', formData, config);
          
          Swal.hideLoading();
          onHide()
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product Baru Berhasil Ditambahkan',
            showConfirmButton: false,
            timer: 3000,
          }).then(() => {
            window.location.reload();
          });
    
        } catch (error) {
          console.log("add product failed : ", error);
        }
      });

    const handleCloseModal = () => {
        onHide();
    };

    return(
        <Modal show={show} onHide={handleCloseModal}>
        <Modal.Body className='modalPlusProductBody'>
            <div className='backgroundModalPlusProduct'>
                <Modal.Title className='modalPlusProductTitle'>New Product</Modal.Title>
                <Form className='modalPlusProductForm' onSubmit={(e) => handleSubmit.mutate(e)}>
                    <Form.Group className="mb-3" >
                        <Form.Control className='modalPlusProductControl' name="productCode" onChange={handleChange} type="text" placeholder="Product Code" required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Control className='modalPlusProductControl' name="productName" onChange={handleChange} type="text" placeholder="Product Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control className='modalPlusProductControl' name="quantity"  onChange={handleChange} type="text" placeholder="Quantity" required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control className='modalPlusProductControl' name="price"  onChange={handleChange} type="text" placeholder="Price" required/>
                    </Form.Group>

                    {/* <Form.Group >
                      <label className='tabelFotoProduct'>Pilih foto Product</label>
                      <Form.Control className='tabelPlusProductControl' name="image"  onChange={handleChange} type="file" accept=".jpg, .png" required/>
                    </Form.Group> */}

                    <button className='modalPlusProductButton' type="submit">PlusProduct</button>

                </Form>
            </div>
        </Modal.Body>
        </Modal>
    )
}

export default ModalNewProduct