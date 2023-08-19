import { Card } from "react-bootstrap";
import {React, useState } from 'react';
import ModalNewProduct from "./ModalNewProduct";
import ModalUpdateProduct from "./ModalUpdateProduct";

function Admin() {
  const [showPlusProject, setShowPlusProject] = useState(false);
  const [showUpdateProject, setShowUpdateProject] = useState(false);

  const handleOpenPlusProduct = () => setShowPlusProject(true);
  const handleOpenUpdateProduct = () => setShowUpdateProject(true);


    return(
        <>
        <div className="containerCard">
            <Card className="cardHome" >
              <div className='imageProduct'  ></div>
              <Card.Body>
                <div className="informasiProduct">
                    <div className="product">Product Id</div>
                    <div className="product">Product Code</div>
                    <div className="product">Product Name</div>
                    <div className="product">Quantity</div>
                    <div className="product">Price</div>
                    <div className="product">Update</div>
                </div>
                  <div className='action'>
                    <div className='buttonUpdate' onClick={handleOpenUpdateProduct}>Update</div>
                  </div>
              </Card.Body>
            </Card>

            <Card className="cardHome" >
              <div className='imageProduct'></div>
              <Card.Body>
                <div className="informasiProduct">
                    <div className="product">Product Id</div>
                    <div className="product">Product Code</div>
                    <div className="product">Product Name</div>
                    <div className="product">Quantity</div>
                    <div className="product">Price</div>
                    <div className="product">Update</div>
                </div>
                  <div className='action'>
                    <div className='buttonUpdate' onClick={handleOpenUpdateProduct}>Update</div>
                  </div>
              </Card.Body>
            </Card>

            <Card className="cardHome" >
              <div className='imageProduct'  ></div>
              <Card.Body>
                <div className="informasiProduct">
                    <div className="product">Product Id</div>
                    <div className="product">Product Code</div>
                    <div className="product">Product Name</div>
                    <div className="product">Quantity</div>
                    <div className="product">Price</div>
                    <div className="product">Update</div>
                </div>
                  <div className='action'>
                    <div className='buttonUpdate' onClick={handleOpenUpdateProduct}>Update</div>
                  </div>
              </Card.Body>
            </Card>

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