import { Card } from "react-bootstrap";
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

function Home() {
  const [state, dispatch] = useContext(UserContext);
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
                
                {state.isLogin ? (
                  <div className='action'>
                    <div className='buttonBuy'>Buy</div>
                  </div>
                ) : (
                  <div></div>
                )}
                
              </Card.Body>
            </Card>

        </div>


        

</>
    )
}

export default Home