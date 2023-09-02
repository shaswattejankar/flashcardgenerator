import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
import Navbar from './navbar'
import { Outlet } from "react-router-dom";
import './header.css'

const header = () => {
    return (
      <>
        
        <div className="header d-flex flex-row p-4 shadow-sm">
          <a href="/" className="navbar1 align-content-between" >
            <img
            className="nav-img mx-auto "
            src="https://s3.amazonaws.com/thinkific-import/348209/IKsWBsZXSpSGIaIKs5mi_LogoNoBG_png"
            alt="no image!" width="auto" height="30" 
          /></a>
          
        </div>


        <div className="clr">
          <Navbar />
          <Outlet/>
        </div>
        
      </>  
    )
}

export default header

