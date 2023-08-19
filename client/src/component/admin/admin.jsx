import { Card } from "react-bootstrap";
import { React, useState, useEffect } from 'react';
import ModalNewProduct from "./ModalNewProduct";
import ModalUpdateProduct from "./ModalUpdateProduct";
import { API } from '../../config/Api';

function Admin() {
  const [showPlusProject, setShowPlusProject] = useState(false);
  const [showUpdateProject, setShowUpdateProject] = useState(false);
  const [dataAllProduct, setDataAllProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenPlusProduct = () => setShowPlusProject(true);
  const handleOpenUpdateProduct = () => setShowUpdateProject(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/products`);
        setDataAllProduct(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

    return(
        <>
        <div className="containerCard">
        {isLoading ? (
          <div></div>
        ) : (
          dataAllProduct.map((product, index) => (
            <Card className="cardHome" key={index}>
                {/* <div className='imageProduct'  ></div> */}
                <Card.Body>
                  <div className="informasiProduct">
                      <div className="product">Product Id : {product.ProductId}</div>
                      <div className="product">Product Code : {product.productCode}</div>
                      <div className="product">Product Name : {product.productName}</div>
                      <div className="product">Quantity : {product.quantity}</div>
                      <div className="product">Price : {product.price}</div>
                  </div>
                    {/* <div className='action'>
                      <div className='buttonUpdate' onClick={handleOpenUpdateProduct}>Update</div>
                    </div> */}
                </Card.Body>
              </Card>
          ))
        )}
            <div className="buttonPlusProduct">
                <div className="plusProduct" onClick={handleOpenPlusProduct}>+ Product</div>
            </div>
        </div>

        <ModalNewProduct show={showPlusProject} onHide={()=> setShowPlusProject(false)} />
        <ModalUpdateProduct show={showUpdateProject} onHide={()=> setShowUpdateProject(false)} />
        

</>
    )
}

export default Admin