import React  from 'react'
import './Mainnavbar.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import DropDown from '../UI/DropDown/DropDown';
import PopOver from '../UI/Popover/PopOver';
const Mainnavbar = () => {
  // const[isMobile, setIsMobile]= useState(false);
  const navigate = useNavigate(""); 
  const gotohome =()=>{
    navigate('/');
  }


  return (
    
    <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light mr-auto">
 <img src="/logo.png" alt="siblize-logo"
      className="header-logo" onClick={gotohome} style={{height:"8rem",margin:"0px"}}/>
    
     
  
     
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent" >
    
    <ul className="navbar-nav ">
      <li className="nav-item active mx-3">
        <a className="nav-link" href="/" style={{fontSize:"1rem"}}>Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active mx-3">
        <a className="nav-link " href="/About"  style={{fontSize:"1rem"}}>About</a>
      </li>
      <li className="nav-item active mx-3">
      <a className='nav-link' href='#'  style={{fontSize:"1rem"}}>Add property</a>
      </li>
    
      <li className="nav-item active mx-3">
      <a className='nav-link' href="/ourteam"  style={{fontSize:"1rem"}}>Team</a>
      </li>
      <li className="nav-item active mx-4">
      <PopOver/>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Mainnavbar