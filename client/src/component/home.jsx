import { React, useState, useEffect } from 'react';
import { Card } from "react-bootstrap";
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import { API } from '../config/Api';

function Home() {
  const [dataAllProduct, setDataAllProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useContext(UserContext);

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
                
                {state.isLogin ? (
                  <div className='action'>
                    <div className='buttonBuy'>Buy</div>
                  </div>
                ) : (
                  <div></div>
                )}
                
              </Card.Body>
            </Card>
            ))
          )}

        </div>


        

</>
    )
}

export default Home