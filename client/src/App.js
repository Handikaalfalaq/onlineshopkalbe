import React from 'react';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Navbars from "./component/navbars.jsx"
import Home from "./component/home.jsx"
import Profile from "./component/user/profile.jsx"
import Admin from "./component/admin/admin.jsx"
import Penjualan from "./component/admin/penjualan.jsx"

function App() {
  return (
    <div style={{border: "1px solid black"}}>
      <Router>
      <Navbars/>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/profile" element={<Profile/>} />

        <Route exact path="/admin" element={<Admin/>} />
        <Route exact path="/penjualan" element={<Penjualan/>} />
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
