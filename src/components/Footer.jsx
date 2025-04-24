import React from 'react'
import logo from "../assets/img/logoPycore.png"
import elipse from "../assets/img/Ellipse.png"
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/register" || location.pathname === "/login") return null;

  return (
    <footer className="" style={{backgroundColor: "#d9c194", height: "100%"}}>
        <div className='text-center m-2'>
            <div className='d-flex justify-content-center'>
              <img src={logo} alt="" className='img-fluid mb-3'style={{maxHeight: "138px"}}/>
            </div>
            <p style={{color: "#4F5665"}}>PYCORE is a reputable Python-developed game delivery platform.</p>
            <div className='d-flex justify-content-center'>
                <img src={elipse} alt="" className='img-fluid' style={{maxHeight: "33px"}}/>
                <img src={elipse} alt="" className='img-fluid' style={{maxHeight: "33px"}}/>
                <img src={elipse} alt="" className='img-fluid' style={{maxHeight: "33px"}}/>
            </div>
            <p>copy right ©2025PYCORE</p>
            <div className='d-flex justify-content-center'>
              <a href="" className='text-decoration-none me-3'>Privacy Policy</a>
              <a href="" className='text-decoration-none'>Term of use</a>
            </div>
        </div>
    </footer>
  ) 
}

export default Footer