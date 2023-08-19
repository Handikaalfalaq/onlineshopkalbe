import { React, useState, useContext, useEffect } from 'react';
import {Route, Routes} from "react-router-dom"
import Navbars from "./component/navbars.jsx"
import Home from "./component/home.jsx"
import Profile from "./component/user/profile.jsx"
import Admin from "./component/admin/admin.jsx"
import Penjualan from "./component/admin/penjualan.jsx"
import { UserContext } from './context/UserContext';
import {API, setAuthToken} from './config/Api';
import { useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate('/');
      }
    }
  }, [isLoading]);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');
      let payload = response.data.data;
      payload.token = localStorage.token;
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
      setIsLoading(false)
    } catch (error) {
      console.log("check user failed : ", error);
      dispatch({
        type: 'AUTH_ERROR',
      });
      setIsLoading(false)
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
    }
  }, []);

  return (
    <div>
      
        <Navbars />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />

          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/penjualan" element={<Penjualan />} />
        </Routes>
      
    </div>
  );

}

export default App;
