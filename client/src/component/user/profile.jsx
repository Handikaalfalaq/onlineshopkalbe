import {React, useState, useEffect, useContext} from 'react';
import '../assets/index.css'
import {Form, Modal} from 'react-bootstrap';
import { API } from '../../config/Api';
import { UserContext } from '../../context/UserContext';
import { useMutation } from 'react-query';

function Profile() {

    const [state] = useContext(UserContext);
    const [updateProfile, setUpdateProfile] = useState(false)

    const hadleFormProfile = () => {
        setUpdateProfile(true)
      }

    const handleCloseFromProfile = () => {
        setUpdateProfile(false)
    }

    const [formUpdateProfile, setFormUpdateProfile] = useState({
        customerId: '',
        customerName: '',
        customerAddress: '',
        gender: '',
        tanggalLahir:'',
    })

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         console.log("id user", state.user.id)
    //         const response = await API.get(`/user/${state.user.customerId}`);
    //         const dataUserById = response.data.data;
            
    //         setFormUpdateProfile(
    //           {
    //             // customerId: dataUserById.customerId,
    //             customerName: state.user.customerName,
    //             customerAddress: state.user.customerAddress,
    //             gender: state.user.gender,
    //             tanggalLahir: state.user.tanggalLahir,
    //           }
    //         );
            
    //       } catch (error) {
    //         console.log("ada", error);
    //       }
    //     };
    
    //     fetchData();
    //   }, [state.user.id]);

      const handleChange = (e) => {
        setFormUpdateProfile({
            ...formUpdateProfile,
            [e.target.name]:
              e.target.type === 'file' ? e.target.files : e.target.value,
          })
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
                    formData.set('customerName', formUpdateProfile.customerName)
                    formData.set('customerAddress', formUpdateProfile.customerAddress)
                    formData.set('gender', formUpdateProfile.gender)
                    formData.set('tanggalLahir', formUpdateProfile.tanggalLahir)
              
              const response = await API.patch(`/user/${state.user.customerId}`, formData, config);
              setUpdateProfile(false)
              console.log("add user success : ", response);
              console.log("data : ", formData);
              handleCloseFromProfile(true)
              window.location.reload();
                
            } catch (error) { 
              console.log("add profile failed : ", error);
            }
          });

    return(
        <>
            <div className="containerProfile">
                <div className="containerDataUser">
                    <div className="">Customer Name : {state.user.customerName}</div>
                    <div className="">Customer Address : {state.user.customerAddress}</div>
                    <div className="">Gender : {state.user.gender}</div>
                    <div className="">Tanggal Lahir: {state.user.tanggalLahir}</div>
                    <div>
                        <div className='editProfile' onClick={hadleFormProfile} >Edit Profile</div>
                    </div>
                </div>

                <div className="containerTitleDataPembelian">
                    <div className="titleDataPembelian">Data Pembelian</div>
                </div>

                <div className="tableDataPembelian">
                    <div>SO ID</div>
                    <div>Product Name</div>
                    <div>Date Order</div>
                    <div>Quantity</div>
                </div>

                <div className="dataPembelian">
                    <div>1</div>
                    <div>Prenagen Mommy</div>
                    <div>18/08/2023</div>
                    <div>15</div>
                </div>

                <div className="dataPembelian2">
                    <div>2</div>
                    <div>Prenagen Mommy</div>
                    <div>18/08/2023</div>
                    <div>12</div>
                </div>
            </div>

            <Modal show={updateProfile} onHide={handleCloseFromProfile} >
            <Modal.Body className='modalRegisterBody'>
                <div className='backgroundModalLogin'>
                    <Modal.Title className='modalRegisterTitle' >Update Data</Modal.Title>
                    <Form style={{ width: '416px', margin:'auto'}} onSubmit={(e) => handleSubmit.mutate(e)}>
                        <Form.Group className="mb-3" >
                            <Form.Control className='modalRegisterControl' name="customerName" onChange={handleChange} type="customerName" placeholder="customerName"  required />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Control className='modalRegisterControl' name="customerAddress" onChange={handleChange} type="customerAddress" placeholder="customerAddress"  required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <div style={{ display: 'flex' }}>
                                <Form.Check type="radio" name="gender" id="lakilaki" label="lakilaki" value="laki laki" style={{marginRight: '10px'}} onChange={handleChange} required/>
                                <Form.Check type="radio" name="gender" id="perempuan" label="perempuan" value="perempuan" onChange={handleChange} required/>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Control className='modalRegisterControl'  name="tanggalLahir" onChange={handleChange} type="text" placeholder="tanggalLahir"  required/>
                        </Form.Group>

                        <button className='modalRegisterButton' type="submit">Update Data</button>
                        
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default Profile